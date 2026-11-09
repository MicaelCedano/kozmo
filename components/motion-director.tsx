"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionDirector() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-intro", { opacity: 0, y: 24, duration: 1.1, stagger: 0.14, ease: "power3.out" });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, { opacity: 0, y: 40, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>(".intro-photo .photo, .design-grid .photo, .gallery-grid .photo").forEach((el) => {
          gsap.fromTo(el, { clipPath: "inset(8% 0 8% 0)" }, { clipPath: "inset(0% 0 0% 0)", ease: "none", scrollTrigger: { trigger: el, start: "top 90%", end: "top 35%", scrub: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(el, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });
        gsap.fromTo(".box-visual", { y: 45, scale: 0.96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: ".box-visual", start: "top 90%", end: "top 45%", scrub: 1 } });
        gsap.fromTo(".display-photo", { scale: 0.84 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".display-story", start: "top top", end: "bottom bottom", scrub: 1 } });
      }, marker.current?.parentElement || undefined);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return <span ref={marker} hidden />;
}


