"use client";

import { useState } from 'react';

const navLinks = [
    { label: 'Platform', href: '/services-solutions' },
    { label: 'Customers', href: '/case-studies-portfolio' },
    { label: 'Company', href: '/about-team-profile' },
    { label: 'Developers', href: '/developer-api-documentation-portal' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 inset-x-0 z-50 flex justify-center w-full px-4 pt-6 pb-2 pointer-events-none">
                <header className="pointer-events-auto flex items-center justify-between whitespace-nowrap border-b border-t border-white/5 bg-black/40 backdrop-blur-2xl px-6 py-3 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 w-full max-w-[1100px] ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white border border-white/10">
                            <span className="material-symbols-outlined text-[16px]">terminal</span>
                        </div>
                        <a href="/" className="text-white text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity">Afrixtech</a>
                    </div>
                    <nav className="hidden md:flex flex-1 justify-center gap-10 items-center">
                        {navLinks.map((link) => (
                            <a key={link.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors tracking-wide" href={link.href}>{link.label}</a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <a href="/client-portal-dashboard-overview" className="hidden lg:flex items-center justify-center rounded-full h-9 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors backdrop-blur-md mr-2">
                            Client Portal
                        </a>
                        <a href="/services-solutions" className="hidden lg:flex relative overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-lg group cursor-pointer">
                            <span className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="inline-flex h-9 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-black backdrop-blur-3xl transition-transform group-hover:bg-slate-200">
                                Deploy Now
                            </span>
                        </a>
                        {/* Mobile menu button */}
                        <button
                            className="flex md:hidden text-white items-center justify-center h-10 w-10 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {mobileOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
                    mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile menu panel */}
            <div
                className={`fixed top-0 right-0 z-40 h-full w-[280px] bg-[#050505] border-l border-white/5 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full pt-24 px-6 pb-8">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-base font-medium transition-all"
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="h-px w-full bg-white/5 my-4" />

                    <a
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
                        href="/client-portal-dashboard-overview"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span className="material-symbols-outlined text-base">dashboard</span>
                        Client Portal
                    </a>

                    <a
                        className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-primary text-black text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
                        href="/services-solutions"
                        onClick={() => setMobileOpen(false)}
                    >
                        Deploy Now
                    </a>

                    {/* Contact info at bottom */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mb-3">Contact</p>
                        <a href="mailto:afrixtech@gmail.com" className="text-xs text-slate-500 hover:text-primary transition-colors block mb-1">afrixtech@gmail.com</a>
                        <a href="tel:+233245171589" className="text-xs text-slate-500 hover:text-primary transition-colors block mb-1">+233 245 171 589</a>
                        <a href="tel:+233209624647" className="text-xs text-slate-500 hover:text-primary transition-colors block">+233 209 624 647</a>
                    </div>
                </div>
            </div>
        </>
    );
}
