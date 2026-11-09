"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Star = { x: number; y: number; r: number; speed: number; phase: number; alpha: number; color: string };
export function UniverseSky() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const field = root.current;
    const surface = canvas.current;
    const hero = field?.closest(".hero");
    const ctx = surface?.getContext("2d", { alpha: true });
    if (!field || !surface || !hero || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 700px)");
    let width = 0, height = 0, stars: Star[] = [], frame = 0, visible = false, lastPaint = 0, elapsed = 0;
    let seed = 78321;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const resize = () => {
      const bounds = field.getBoundingClientRect(); width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.round(width * ratio); surface.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); seed = 78321;
      const count = mobile.matches ? 125 : 250;
      stars = Array.from({ length: count }, () => ({ x: random() * width, y: random() * height, r: 0.35 + random() * 1.05, speed: .4 + random() * 2, phase: random() * 6.28, alpha: .18 + random() * .55, color: random() < .45 ? "150,199,255" : random() < .35 ? "98,162,255" : "230,241,255" }));
      paint(0);
    };
    const paint = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const drift = reduce.matches ? 0 : (time * star.speed * .006) % height;
        const twinkle = reduce.matches ? 1 : .78 + .22 * Math.sin(time * .001 + star.phase);
        ctx.fillStyle = `rgba(${star.color},${star.alpha * twinkle})`;
        ctx.beginPath(); ctx.arc(star.x, (star.y + drift) % height, star.r, 0, Math.PI * 2); ctx.fill();
      }
    };
    const loop = (time: number) => {
      frame = 0;
      if (!visible || document.hidden || reduce.matches) return;
      if (!lastPaint) lastPaint = time;
      if (time - lastPaint >= 33) { elapsed += Math.min(time - lastPaint, 50); lastPaint = time; paint(elapsed); }
      frame = requestAnimationFrame(loop);
    };
    gsap.registerPlugin(ScrollTrigger);
    const figures = Array.from(hero.querySelectorAll<HTMLElement>(".hero-pair figure"));
    const floats = figures.map((el, index) => gsap.to(el, { y: index ? -8 : -11, duration: index ? 4.8 : 5.4, ease: "sine.inOut", repeat: -1, yoyo: true, paused: true }));
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const travel = gsap.fromTo(field, { yPercent: -3, scale: 1 }, { yPercent: 5, scale: 1.04, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
      return () => travel.revert();
    });
    const sync = () => {
      const playing = visible && !document.hidden && !reduce.matches;
      if (playing) { floats.forEach(tween => tween.resume()); if (!frame) { lastPaint = 0; frame = requestAnimationFrame(loop); } }
      else { floats.forEach(tween => tween.pause()); if (frame) cancelAnimationFrame(frame); frame = 0; if (reduce.matches) { floats.forEach(tween => tween.progress(0).pause()); paint(0); } }
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .1 });
    observer.observe(hero); window.addEventListener("resize", resize); document.addEventListener("visibilitychange", sync); reduce.addEventListener("change", sync);
    resize(); sync();
    return () => { observer.disconnect(); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", sync); reduce.removeEventListener("change", sync); if (frame) cancelAnimationFrame(frame); floats.forEach(tween => tween.revert()); mm.revert(); };
  }, []);
  return <div className="universe-sky" ref={root} aria-hidden="true"><div className="universe-nebula" /><canvas ref={canvas} /></div>;
}
