"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    const progress = document.getElementById("scroll-progress");

    const updateProgress = () => {
      if (!progress) {
        return;
      }
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      progress.style.width = `${pct}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    let revealObserver: IntersectionObserver | undefined;
    if (!reducedMotion) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 }
      );

      revealElements.forEach((el) => revealObserver?.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add("is-visible"));
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");

    let rafId = 0;
    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${targetX}px`;
        cursorDot.style.top = `${targetY}px`;
      }
    };

    const onPointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-interactive='true']")) {
        document.body.classList.add("cursor-active");
      }
    };

    const onPointerOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-interactive='true']")) {
        document.body.classList.remove("cursor-active");
      }
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.14;
      ringY += (targetY - ringY) * 0.14;
      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }
      rafId = window.requestAnimationFrame(animateRing);
    };

    if (finePointer && !reducedMotion) {
      document.body.classList.add("custom-cursor-enabled");
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("mouseover", onPointerOver);
      document.addEventListener("mouseout", onPointerOut);
      rafId = window.requestAnimationFrame(animateRing);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      revealObserver?.disconnect();

      if (finePointer && !reducedMotion) {
        document.body.classList.remove("custom-cursor-enabled", "cursor-active");
        document.removeEventListener("mousemove", onPointerMove);
        document.removeEventListener("mouseover", onPointerOver);
        document.removeEventListener("mouseout", onPointerOut);
      }

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" className="scroll-progress" />
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}
