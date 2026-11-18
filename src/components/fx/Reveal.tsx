"use client";

import { useEffect, useRef, type ReactNode } from 'react';

/** Fades and lifts content in as it scrolls into view. Content stays visible without JS. */
export default function Reveal({
  children, className = '', delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return; // already on screen
    el.classList.add('rv-hide');
    el.style.transitionDelay = `${delay}ms`;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.remove('rv-hide');
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}
