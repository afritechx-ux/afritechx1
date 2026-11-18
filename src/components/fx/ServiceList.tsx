"use client";

import { useState } from 'react';
import Link from 'next/link';

type Item = { title: string; description: string; points: string[] };

/** Rows that open on hover or focus to reveal detail. The first row starts open. */
export default function ServiceList({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);

  return (
    <ul className="border-t border-ink">
      {items.map((s, i) => {
        const open = active === i;
        return (
          <li key={s.title} className="border-b border-line" onMouseEnter={() => setActive(i)}>
            <Link
              href="/services-solutions"
              onFocus={() => setActive(i)}
              aria-expanded={open}
              className="group block py-6 sm:py-8"
            >
              <div className="grid items-baseline gap-4 sm:grid-cols-[3rem_1fr_auto] sm:gap-6">
                <span className={`font-mono text-xs transition-colors ${open ? 'text-primary' : 'text-ink-subtle'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`font-serif text-3xl tracking-tight transition-all duration-300 sm:text-5xl ${open ? 'translate-x-2 text-ink' : 'text-ink-muted'}`}>
                  {s.title}
                </h3>
                <span className="hidden sm:block" aria-hidden="true">
                  <span className={`material-symbols-outlined text-[28px] transition-all duration-300 ${open ? 'rotate-0 text-primary' : '-rotate-45 text-ink-subtle'}`}>
                    arrow_forward
                  </span>
                </span>
              </div>
              <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 max-sm:grid-rows-[1fr] max-sm:opacity-100'}`}>
                <div className="overflow-hidden">
                  <div className="grid gap-4 pt-5 sm:grid-cols-[3rem_1fr_1fr] sm:gap-6">
                    <span aria-hidden="true" />
                    <p className="max-w-md leading-relaxed text-ink-muted">{s.description}</p>
                    <ul className="flex flex-wrap content-start gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="badge">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
