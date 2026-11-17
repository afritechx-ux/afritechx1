"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

const nav = [
    { group: 'Workspace', items: [
        { label: 'Overview', href: '/client-portal-dashboard-overview', icon: 'space_dashboard' },
        { label: 'Milestones', href: '/client-portal-project-milestones', icon: 'flag' },
        { label: 'Onboarding', href: '/client-onboarding-checklist-overview', icon: 'checklist' },
    ] },
    { group: 'Billing', items: [
        { label: 'Invoices', href: '/client-portal-billing-invoices', icon: 'receipt_long' },
        { label: 'Finance', href: '/client-portal-finance-overview', icon: 'account_balance' },
        { label: 'Documents', href: '/client-portal-document-repository', icon: 'folder_open' },
    ] },
    { group: 'Account', items: [
        { label: 'Notifications', href: '/portal-notifications-center', icon: 'notifications' },
        { label: 'Settings', href: '/portal-user-settings-customization', icon: 'settings' },
    ] },
];

export default function PortalShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const sidebar = (
        <div className="flex h-full flex-col">
            <Link href="/" className="flex h-16 shrink-0 items-center gap-2.5 border-b border-line px-5" aria-label="Afrixtech website">
                <Logo />
                <span className="badge ml-auto">Client portal</span>
            </Link>

            <nav aria-label="Portal" className="flex-1 overflow-y-auto px-3 py-4">
                {nav.map((g) => (
                    <div key={g.group} className="mb-5">
                        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">{g.group}</p>
                        <ul className="space-y-0.5">
                            {g.items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        aria-current={isActive(item.href) ? 'page' : undefined}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                            isActive(item.href)
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-ink-muted hover:bg-surface-raised hover:text-ink'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="flex items-center justify-between border-t border-line p-3">
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink-muted hover:bg-surface-raised hover:text-ink"
                >
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">logout</span>
                    Sign out
                </button>
                <ThemeToggle />
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-canvas">
            {/* Desktop sidebar */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-surface lg:block">{sidebar}</aside>

            {/* Mobile top bar */}
            <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-surface/90 px-4 backdrop-blur lg:hidden">
                <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">Afrixtech</Link>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-label="Open portal menu"
                    aria-expanded={open}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-line-strong text-ink"
                >
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">menu</span>
                </button>
            </header>

            {/* Mobile drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setOpen(false)}
                />
                <aside className={`absolute inset-y-0 left-0 w-72 max-w-[85vw] border-r border-line bg-surface transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    {sidebar}
                </aside>
            </div>

            <main id="main" className="lg:pl-64">
                <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">{children}</div>
            </main>
        </div>
    );
}
