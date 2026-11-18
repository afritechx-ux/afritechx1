'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/site';

export default function CaseStudyBrowser({ projects }: { projects: Project[] }) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

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
              active === c ? 'border-ink text-ink' : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-12 space-y-16">
        {visible.map((p, i) => (
          <li key={p.id}>
            <article className="grid gap-8 border-t border-ink pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.title} (opens in a new tab)`}
                className="group relative block aspect-[16/10] overflow-hidden bg-surface-raised"
              >
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} website`}
                  fill
                  {...(i === 0 ? { priority: true } : { loading: 'lazy' as const })}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-col">
                <p className="eyebrow">{p.category}</p>
                <h2 className="mt-3 font-serif text-4xl tracking-tight">{p.title}</h2>

                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Client</dt>
                    <dd className="mt-1 text-ink-muted">{p.client}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">The problem</dt>
                    <dd className="mt-1 leading-relaxed text-ink-muted">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">What we built</dt>
                    <dd className="mt-1 leading-relaxed text-ink-muted">{p.built}</dd>
                  </div>
                  {p.stack.length > 0 && (
                    <div>
                      <dt className="font-semibold text-ink">Tech stack</dt>
                      <dd className="mt-2">
                        <ul className="flex flex-wrap gap-2">
                          {p.stack.map((t) => (
                            <li key={t} className="badge">{t}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                  {/* TODO: real result for each project in src/data/site.ts. Hidden while empty. */}
                  {p.result.trim() && (
                    <div>
                      <dt className="font-semibold text-ink">Result</dt>
                      <dd className="mt-1 leading-relaxed text-ink-muted">{p.result}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary h-11"
                  >
                    Visit site
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">north_east</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <span className="font-mono text-xs text-ink-subtle">{p.liveLabel}</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
