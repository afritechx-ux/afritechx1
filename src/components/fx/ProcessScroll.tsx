"use client";

import { useEffect, useRef, useState } from 'react';

type Step = { title: string; text: string };

/**
 * Scroll-driven process: a large numeral stays pinned while the steps scroll past
 * and the active one takes over. On small screens it is a plain stacked list.
 */
export default function ProcessScroll({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <div className="relative h-[16rem] overflow-hidden">
            {steps.map((s, i) => (
              <div
                key={s.title}
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-700 ease-out ${active === i ? 'translate-y-0 opacity-100' : active > i ? '-translate-y-12 opacity-0' : 'translate-y-12 opacity-0'}`}
              >
                <span className="block font-serif text-[12rem] leading-none text-primary">{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2" aria-hidden="true">
            {steps.map((s, i) => (
              <span key={s.title} className={`h-1 flex-1 transition-colors duration-500 ${i <= active ? 'bg-ink' : 'bg-line-strong'}`} />
            ))}
          </div>
        </div>
      </div>

      <ol className="space-y-12 lg:space-y-0">
        {steps.map((s, i) => (
          <li
            key={s.title}
            data-i={i}
            ref={(el) => { refs.current[i] = el; }}
            className="border-t border-ink pt-5 lg:flex lg:min-h-[55vh] lg:flex-col lg:justify-center lg:border-t-0 lg:pt-0"
          >
            <span className="font-serif text-5xl text-primary lg:hidden">{i + 1}</span>
            <h3 className={`mt-4 font-serif text-3xl tracking-tight transition-opacity duration-500 sm:text-5xl lg:mt-0 ${active === i ? 'lg:opacity-100' : 'lg:opacity-30'}`}>{s.title}</h3>
            <p className={`mt-4 max-w-md leading-relaxed text-ink-muted transition-opacity duration-500 ${active === i ? 'lg:opacity-100' : 'lg:opacity-30'}`}>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
