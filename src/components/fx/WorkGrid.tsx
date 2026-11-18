"use client";

import { useRef } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/site';

const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'];

/** Asymmetric project grid. A label follows the pointer over each tile. */
export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-14 md:grid-cols-12">
      {projects.map((c, i) => (
        <li key={c.id} className={spans[i % spans.length]}>
          <Tile c={c} />
        </li>
      ))}
    </ul>
  );
}

function Tile({ c }: { c: Project }) {
  const label = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = label.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - r.left + 14}px, ${e.clientY - r.top + 14}px)`;
  };

  return (
    <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div
        onPointerMove={move}
        className="relative h-[280px] overflow-hidden bg-surface-raised sm:h-[360px] lg:h-[440px] [@media(hover:hover)]:cursor-none"
      >
        <Image
          src={c.image}
          alt={`Screenshot of the ${c.title} website`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span
          ref={label}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden items-center gap-1 bg-ink px-3 py-1.5 text-xs font-semibold text-canvas opacity-0 transition-opacity duration-200 group-hover:opacity-100 [@media(hover:hover)]:inline-flex"
        >
          Visit site
          <span className="material-symbols-outlined text-[14px]">north_east</span>
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink pt-4">
        <h3 className="font-serif text-3xl tracking-tight">{c.title}</h3>
        <span className="eyebrow shrink-0">{c.category}</span>
      </div>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">{c.summary}</p>
      <p className="mt-2 font-mono text-xs text-ink-subtle">{c.liveLabel}</p>
    </a>
  );
}
