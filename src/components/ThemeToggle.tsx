"use client";

import { useSyncExternalStore } from 'react';

function subscribe(cb: () => void) {
    const obs = new MutationObserver(cb);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
}
const getDark = () => document.documentElement.classList.contains('dark');

export default function ThemeToggle({ className = '' }: { className?: string }) {
    const dark = useSyncExternalStore(subscribe, getDark, () => false);

    const toggle = () => {
        const next = !dark;
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`inline-flex size-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink ${className}`}
        >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {dark ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    );
}
