"use client";

import { useEffect, useRef } from 'react';

/**
 * Interactive hero: a field of square "pixels" that assembles into the Afrixtech
 * mark. The pointer pushes pixels aside and they spring back. Square pixels echo
 * the green crossbar in the logo. Static when the user prefers reduced motion.
 */

const MARK = 'M4 44 L19.5 4 H28.5 L44 44 H35.5 L24 13.5 L12.5 44 Z';

type P = { x: number; y: number; vx: number; vy: number; hx: number; hy: number; delay: number; cross: boolean; dust: boolean };

export default function HeroField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, dpr = 1, cell = 4, raf = 0, running = true, visible = true;
    let particles: P[] = [];
    let ink = '#16130e', accent = '#0f5a3c', faint = '#c4bcab';
    const pointer = { x: -9999, y: -9999, active: false };
    let t0 = performance.now();

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      ink = cs.getPropertyValue('--ink').trim() || ink;
      accent = cs.getPropertyValue('--primary').trim() || accent;
      faint = cs.getPropertyValue('--line-strong').trim() || faint;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rasterise the mark: legs in red, crossbar in blue, then sample the pixels.
      const RES = 96;
      const off = document.createElement('canvas');
      off.width = off.height = RES;
      const o = off.getContext('2d', { willReadFrequently: true });
      if (!o) return;
      o.scale(RES / 48, RES / 48);
      o.fillStyle = '#f00';
      o.fill(new Path2D(MARK));
      o.fillStyle = '#00f';
      o.fillRect(20.5, 29, 7, 7);
      const data = o.getImageData(0, 0, RES, RES).data;

      const step = 2;
      const size = Math.min(w, h) * 0.86;
      const scale = size / RES;
      const ox = (w - size) / 2;
      const oy = (h - size) / 2;
      cell = Math.max(2.5, step * scale * 0.78);

      const next: P[] = [];
      for (let y = 0; y < RES; y += step) {
        for (let x = 0; x < RES; x += step) {
          const i = (y * RES + x) * 4;
          if (data[i + 3] < 128) continue;
          const cross = data[i + 2] > data[i];
          const hx = ox + (x + step / 2) * scale;
          const hy = oy + (y + step / 2) * scale;
          const a = Math.random() * Math.PI * 2;
          const r = Math.max(w, h) * (0.5 + Math.random() * 0.6);
          next.push({
            x: reduce ? hx : w / 2 + Math.cos(a) * r,
            y: reduce ? hy : h / 2 + Math.sin(a) * r,
            vx: 0, vy: 0, hx, hy,
            delay: (hy / h) * 500 + Math.random() * 500,
            cross, dust: false,
          });
        }
      }
      // Ambient dust: sparse pixels that drift around the mark.
      const dustCount = Math.round((w * h) / 9000);
      for (let i = 0; i < dustCount; i++) {
        const hx = Math.random() * w, hy = Math.random() * h;
        next.push({ x: hx, y: hy, vx: 0, vy: 0, hx, hy, delay: 0, cross: false, dust: true });
      }
      particles = next;
      t0 = performance.now();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const elapsed = now - t0;
      const R = Math.min(w, h) * 0.16;
      // One path per colour, filled once: far cheaper than a style change per particle.
      const pInk = new Path2D();
      const pAccent = new Path2D();
      const pDust = new Path2D();
      for (const p of particles) {
        if (!reduce) {
          if (p.dust) {
            p.hx += Math.sin(now / 2400 + p.hy) * 0.08;
            p.hy += Math.cos(now / 2900 + p.hx) * 0.08;
          }
          if (elapsed > p.delay) {
            p.vx += (p.hx - p.x) * (p.dust ? 0.01 : 0.055);
            p.vy += (p.hy - p.y) * (p.dust ? 0.01 : 0.055);
          }
          if (pointer.active) {
            const dx = p.x - pointer.x, dy = p.y - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < R * R && d2 > 0.01) {
              const d = Math.sqrt(d2);
              const f = ((R - d) / R) * 2.2;
              p.vx += (dx / d) * f;
              p.vy += (dy / d) * f;
            }
          }
          p.vx *= 0.82; p.vy *= 0.82;
          p.x += p.vx; p.y += p.vy;
        }
        if (p.dust) pDust.rect(p.x, p.y, 2, 2);
        else (p.cross ? pAccent : pInk).rect(p.x - cell / 2, p.y - cell / 2, cell, cell);
      }
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = faint;
      ctx.fill(pDust);
      ctx.globalAlpha = 1;
      ctx.fillStyle = ink;
      ctx.fill(pInk);
      ctx.fillStyle = accent;
      ctx.fill(pAccent);
    };

    const loop = (now: number) => {
      if (!running) return;
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    };
    const onLeave = () => { pointer.active = false; };

    readColors();
    build();
    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => { build(); if (reduce) draw(performance.now()); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    const mo = new MutationObserver(() => { readColors(); if (reduce) draw(performance.now()); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('pointermove', onMove, { passive: true });
    canvas.addEventListener('pointerleave', onLeave);
    const onVis = () => { running = !document.hidden; if (running && !reduce) raf = requestAnimationFrame(loop); };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect(); mo.disconnect();
      window.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={ref} className={className} role="img" aria-label="Pixels assembling into the Afrixtech logo" />;
}
