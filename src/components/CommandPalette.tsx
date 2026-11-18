"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';

type Cmd = { id: string; label: string; hint: string; icon: string; keywords?: string; run: () => void };

export const OPEN_PALETTE = 'afx:open-palette';

const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);
const subscribe = () => () => {};

/** Modifier-key label that is safe for server rendering. */
export function useModKey() {
  return useSyncExternalStore(subscribe, () => (isMac() ? '⌘' : 'Ctrl'), () => 'Ctrl');
}

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = () => { setOpen(false); setQuery(''); setIndex(0); };

  const commands = useMemo<Cmd[]>(() => {
    const go = (href: string) => () => router.push(href);
    return [
      { id: 'quote', label: 'Request a quote', hint: 'Action', icon: 'edit_note', keywords: 'project start estimate', run: go('/request-a-quote') },
      { id: 'contact', label: 'Contact us', hint: 'Action', icon: 'mail', keywords: 'email phone offices', run: go('/contact-global-offices') },
      { id: 'theme', label: 'Toggle light / dark theme', hint: 'Action', icon: 'contrast', keywords: 'dark light mode appearance', run: () => {
        const next = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
      } },
      { id: 'portal', label: 'Client portal', hint: 'Go to', icon: 'lock', keywords: 'login sign in invoices', run: go('/client-portal-dashboard-overview') },
      { id: 'home', label: 'Home', hint: 'Go to', icon: 'home', run: go('/') },
      { id: 'solutions', label: 'Solutions', hint: 'Go to', icon: 'deployed_code', keywords: 'services cloud ai software', run: go('/services-solutions') },
      { id: 'work', label: 'Case studies', hint: 'Go to', icon: 'work', keywords: 'projects portfolio work', run: go('/case-studies-portfolio') },
      { id: 'arch', label: 'Architecture', hint: 'Go to', icon: 'account_tree', keywords: 'enterprise', run: go('/enterprise-tech-architecture') },
      { id: 'stack', label: 'Technology stack', hint: 'Go to', icon: 'stack', run: go('/technology-stack-expertise') },
      { id: 'insights', label: 'Insights', hint: 'Go to', icon: 'article', keywords: 'blog articles', run: go('/tech-insights-blog-hub') },
      { id: 'about', label: 'About', hint: 'Go to', icon: 'groups', keywords: 'company team', run: go('/about-team-profile') },
      { id: 'careers', label: 'Careers', hint: 'Go to', icon: 'badge', keywords: 'jobs roles', run: go('/careers-open-roles') },
      { id: 'docs', label: 'API documentation', hint: 'Go to', icon: 'code', keywords: 'developer', run: go('/developer-api-documentation-portal') },
      { id: 'help', label: 'Help center', hint: 'Go to', icon: 'help', keywords: 'support', run: go('/client-support-help-center') },
      { id: 'status', label: 'Service status', hint: 'Go to', icon: 'monitor_heart', keywords: 'uptime', run: go('/service-status-uptime-page') },
    ];
  }, [router]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.keywords ?? ''}`.toLowerCase().includes(q));
  }, [commands, query]);

  // Open via keyboard shortcut or a custom event fired by the header button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE, onOpen);
    };
  }, []);

  // Focus the field and lock scroll while open
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [index, open]);

  const run = (c: Cmd | undefined) => {
    if (!c) return;
    close();
    c.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setIndex((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); run(results[index]); }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[14vh]" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label="Command menu" className="relative w-full max-w-xl overflow-hidden border border-ink bg-canvas shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <span className="material-symbols-outlined text-[20px] text-ink-subtle" aria-hidden="true">search</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
            placeholder="Search pages and actions…"
            aria-label="Search pages and actions"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            className="h-14 w-full bg-transparent text-base text-ink !outline-none placeholder:text-ink-subtle"
          />
          <kbd className="font-mono text-[11px] text-ink-subtle">esc</kbd>
        </div>
        <ul id="cmd-list" ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-ink-muted">Nothing matches “{query}”.</li>}
          {results.map((c, i) => (
            <li key={c.id} role="option" aria-selected={i === index}>
              <button
                type="button"
                onMouseMove={() => setIndex(i)}
                onClick={() => run(c)}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm ${i === index ? 'bg-ink text-canvas' : 'text-ink'}`}
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{c.icon}</span>
                <span className="flex-1">{c.label}</span>
                <span className={`font-mono text-[11px] ${i === index ? 'opacity-70' : 'text-ink-subtle'}`}>{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
