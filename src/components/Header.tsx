"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { label: 'Solutions', href: '/services-solutions' },
    { label: 'Case Studies', href: '/case-studies-portfolio' },
    { label: 'Architecture', href: '/enterprise-tech-architecture' },
    { label: 'Insights', href: '/tech-insights-blog-hub' },
    { label: 'Company', href: '/about-team-profile' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Elevate the bar once the page scrolls
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll + Escape to close while the drawer is open
    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', onKey);
        };
    }, [mobileOpen]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
                    scrolled || mobileOpen
                        ? 'border-line bg-canvas/85 backdrop-blur-xl'
                        : 'border-transparent bg-transparent'
                }`}
            >
                <div className="container-x flex h-16 items-center justify-between gap-6">
                    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Afrixtech home">
                        <Logo />
                    </Link>

                    <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                    isActive(link.href)
                                        ? 'bg-surface-raised text-ink'
                                        : 'text-ink-muted hover:bg-surface-raised hover:text-ink'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-1.5">
                        <ThemeToggle />
                        <Link href="/client-portal-dashboard-overview" className="btn btn-ghost hidden h-10 lg:inline-flex">
                            Client Portal
                        </Link>
                        <Link href="/request-a-quote" className="btn btn-primary hidden h-10 sm:inline-flex">
                            Request a quote
                        </Link>
                        <button
                            type="button"
                            className="inline-flex size-10 items-center justify-center rounded-lg border border-line-strong text-ink transition-colors hover:bg-surface-raised lg:hidden"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-nav"
                        >
                            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                                {mobileOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile drawer */}
            <div
                id="mobile-nav"
                className={`fixed inset-0 z-40 bg-canvas pt-16 transition-opacity duration-200 lg:hidden ${
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                aria-hidden={!mobileOpen}
                inert={!mobileOpen}
            >
                <div className="container-x flex h-full flex-col overflow-y-auto pb-8 pt-4">
                    <nav aria-label="Mobile" className="flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`flex items-center justify-between border-b border-line py-4 text-lg font-medium ${
                                    isActive(link.href) ? 'text-primary' : 'text-ink'
                                }`}
                            >
                                {link.label}
                                <span className="material-symbols-outlined text-[20px] text-ink-subtle" aria-hidden="true">chevron_right</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-6 flex flex-col gap-3">
                        <Link href="/request-a-quote" onClick={() => setMobileOpen(false)} className="btn btn-primary h-12">Request a quote</Link>
                        <Link href="/client-portal-dashboard-overview" onClick={() => setMobileOpen(false)} className="btn btn-secondary h-12">Client Portal</Link>
                    </div>

                    <div className="mt-auto border-t border-line pt-6 text-sm text-ink-muted">
                        <p className="eyebrow mb-3 !text-ink-subtle">Contact</p>
                        <a href="mailto:afritechx@gmail.com" className="block py-1.5 hover:text-ink">afritechx@gmail.com</a>
                        <a href="tel:+233245171589" className="block py-1.5 hover:text-ink">+233 245 171 589</a>
                        <a href="tel:+233209624647" className="block py-1.5 hover:text-ink">+233 209 624 647</a>
                    </div>
                </div>
            </div>
        </>
    );
}
