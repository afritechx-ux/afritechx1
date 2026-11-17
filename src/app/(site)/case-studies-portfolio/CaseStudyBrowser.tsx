'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from './data';

export default function CaseStudyBrowser({ studies }: { studies: CaseStudy[] }) {
  const categories = ['All', ...Array.from(new Set(studies.map((s) => s.category)))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? studies : studies.filter((s) => s.category === active);

  return (
    <>
      <div role="tablist" aria-label="Filter by industry" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === c
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-line-strong text-ink-muted hover:bg-surface-raised hover:text-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((s, i) => {
          const wide = active === 'All' && i === 0;
          return (
            <li key={s.id} className={wide ? 'md:col-span-2' : ''}>
              <Link
                href="/in-depth-case-study-page"
                className={`card card-hover group grid h-full overflow-hidden ${wide ? 'lg:grid-cols-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-surface-raised ${wide ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[360px]' : 'aspect-[16/9]'}`}>
                  <Image
                    src={s.image}
                    alt={`${s.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes={wide ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 50vw'}
                  />
                </div>
                <div className="flex flex-col p-6 lg:p-8">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-primary">{s.category}</span>
                    {wide && <span className="badge">Featured</span>}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.description}</p>

                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
                    {s.stats.map((st) => (
                      <div key={st.label} className="flex flex-col-reverse">
                        <dt className="text-xs text-ink-subtle">{st.label}</dt>
                        <dd className="text-lg font-semibold text-ink">{st.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="badge">{t}</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View case study
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
