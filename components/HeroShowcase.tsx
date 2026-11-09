"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { heroModels } from "@/lib/hero-photos";

export function HeroShowcase() {
  const pair = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = pair.current;
    if (!root) return;
    const hero = root.closest(".hero");
    if (!hero) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const groups = Array.from(root.querySelectorAll<HTMLElement>("[data-hero-model]"));
    const positions = groups.map(() => 0);
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    let timeline: gsap.core.Timeline | undefined;
    const hasMultiple = groups.some(group => group.querySelectorAll("[data-hero-slide]").length > 1);
    const stop = () => { if (timer) clearInterval(timer); timer = undefined; timeline?.pause(); };
    const tick = () => {
      timeline?.kill();
      timeline = gsap.timeline();
      groups.forEach((group, index) => {
        const slides = Array.from(group.querySelectorAll<HTMLElement>("[data-hero-slide]"));
        if (slides.length < 2) return;
        let next = positions[index];
        for (let n = 0; n < slides.length - 1; n++) {
          next = (next + 1) % slides.length;
          const image = slides[next].querySelector("img");
          if (image?.complete && image.naturalWidth > 0) break;
        }
        if (next === positions[index] || !slides[next].querySelector("img")?.naturalWidth) return;
        const current = slides[positions[index]];
        const incoming = slides[next];
        const light = group.querySelector<HTMLElement>(".hero-color-light");
        gsap.set(incoming, { opacity: 0, scale: 1.025 });
        timeline!.to(current, { opacity: 0, scale: 1.015, duration: 0.8, ease: "power2.inOut" }, 0)
          .to(incoming, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" }, 0);
        if (light) timeline!.to(light, { backgroundColor: incoming.dataset.light, duration: 0.8, ease: "power2.inOut" }, 0);
        current.setAttribute("aria-hidden", "true");
        incoming.setAttribute("aria-hidden", "false");
        positions[index] = next;
      });
    };
    const sync = () => {
      if (!visible || document.hidden || reduced.matches || !hasMultiple) { if (reduced.matches) timeline?.progress(1); stop(); return; }
      timeline?.resume();
      if (!timer) timer = setInterval(tick, 3000);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.1 });
    observer.observe(hero);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    return () => { stop(); timeline?.kill(); observer.disconnect(); document.removeEventListener("visibilitychange", sync); reduced.removeEventListener("change", sync); };
  }, []);
  return <div className="hero-pair hero-intro" ref={pair} aria-label="Dos tabletas KOZMO">
    {heroModels.map(model => <figure key={model.name}><div className={`hero-model ${model.className}`} data-hero-model>
      <span className="hero-color-light" aria-hidden="true" />
      {model.photos.map((photo, index) => <div className="hero-slide" data-hero-slide data-light={photo.light} key={photo.src} style={{ opacity: index === 0 ? 1 : 0 }} aria-hidden={index !== 0}>
        <Image src={photo.src} alt={`${model.name} ${photo.color}`} fill priority sizes="(max-width: 700px) 45vw, 360px" />
      </div>)}
    </div><figcaption>{model.name}</figcaption></figure>)}
  </div>;
}

