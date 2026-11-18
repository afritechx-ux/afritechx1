'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { CaseStudy } from './data';

export default function CaseStudyBrowser({ studies }: { studies: CaseStudy[] }) {
  const categories = ['All', ...Array.from(new Set(studies.map((s) => s.category)))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? studies : studies.filter((s) => s.category === active);

  return (
    <>
      <div role="tablist" aria-label="Filter by industry" className="flex flex-wrap gap-x-6 gap-y-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`border-b-2 px-1 pb-1.5 text-sm font-medium transition-colors ${
              active === c
                ? 'border-ink text-ink'
                : 'border-transparent text-ink-subtle hover:text-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {visible.map((s, i) => {
          const wide = active === 'All' && i === 0;
          return (
            <li key={s.id} className={wide ? 'md:col-span-2' : ''}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid h-full content-start gap-6 border-t border-ink pt-6 ${wide ? 'lg:grid-cols-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-surface-raised ${wide ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[360px]' : 'aspect-[16/9]'}`}>
                  <Image
                    src={s.image}
                    alt={`${s.title} website`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes={wide ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 50vw'}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="eyebrow">{s.category}</span>
                    
                  </div>
                  <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.description}</p>

                  <ul className="mt-6 space-y-2 border-t border-line pt-5">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-ink-muted">
                        <span className="mt-2 size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="badge">{t}</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Visit live site
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">north_east</span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
