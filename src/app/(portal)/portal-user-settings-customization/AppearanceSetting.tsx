"use client";

import { useSyncExternalStore } from 'react';

function subscribe(cb: () => void) {
    const obs = new MutationObserver(cb);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
}

export default function AppearanceSetting() {
    const dark = useSyncExternalStore(subscribe, () => document.documentElement.classList.contains('dark'), () => false);

    const set = (next: boolean) => {
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
    };

    return (
        <div role="radiogroup" aria-label="Theme" className="inline-flex rounded-lg border border-line-strong p-1">
            {[{ label: 'Light', value: false }, { label: 'Dark', value: true }].map((o) => (
                <button
                    key={o.label}
                    type="button"
                    role="radio"
                    aria-checked={dark === o.value}
                    onClick={() => set(o.value)}
                    className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                        dark === o.value ? 'bg-primary-strong text-white' : 'text-ink-muted hover:text-ink'
                    }`}
                >
                    {o.label}
                </button>
            ))}
        </div>
    );
}
