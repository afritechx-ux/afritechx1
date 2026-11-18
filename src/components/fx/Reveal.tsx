"use client";

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Fades and lifts content in as it scrolls into view. Content is visible without JS.
 * Uses only an IntersectionObserver (no layout reads), so it adds no cost to first paint.
 */
export default function Reveal({
  children, className = '', delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let first = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (first) {
          first = false;
          // Already on screen at load: leave it visible. Otherwise hide it until it scrolls in.
          if (e.isIntersecting) { io.disconnect(); return; }
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('rv-hide');
          return;
        }
        if (e.isIntersecting) {
          el.classList.remove('rv-hide');
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}
