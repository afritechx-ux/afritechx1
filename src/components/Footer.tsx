import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/10 bg-black pt-20 pb-12 overflow-hidden selection:bg-white selection:text-black">
            {/* Grid background matching global */}
            <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Glowing top scanline */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent blur-[2px]"></div>

            <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-4">
                        <div className="flex items-center gap-3 text-white mb-4">
                            <div className="relative size-10 overflow-hidden rounded-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <Image 
                                    src="/logo.png" 
                                    alt="Afrixtech Logo" 
                                    fill
                                    className="object-cover object-center"
                                    sizes="40px"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tighter">AFRIXTECH Platform</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm tracking-wide">
                            The infrastructure layer for modern enterprises. We construct deterministic, high-performance digital ecosystems designed to handle limitless complexity.
                        </p>

                        {/* Contact info */}
                        <div className="flex flex-col gap-2 mt-4">
                            <a href="mailto:afritechx@gmail.com" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">mail</span>
                                afritechx@gmail.com
                            </a>
                            <a href="tel:+233245171589" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">call</span>
                                +233 245 171 589
                            </a>
                            <a href="tel:+233209624647" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">call</span>
                                +233 209 624 647
                            </a>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a className="text-slate-500 hover:text-white transition-colors" href="/services-solutions"><span className="material-symbols-outlined">hub</span></a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold text-white tracking-widest uppercase">Infrastructure</h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/services-solutions">Edge Computing</a>
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/enterprise-tech-architecture">Global Database</a>
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/case-studies-portfolio">Security Layer</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold text-white tracking-widest uppercase">Company</h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/about-team-profile">About</a>
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/careers-open-roles">Careers</a>
                            <a className="text-sm text-slate-400 hover:text-white transition-colors w-fit" href="/contact-global-offices">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
                        <span className="text-xs font-mono text-slate-400 tracking-wide uppercase">All Systems Operational</span>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-xs text-slate-500 hover:text-white transition-colors" href="/about-team-profile">Privacy Policy</a>
                        <a className="text-xs text-slate-500 hover:text-white transition-colors" href="/about-team-profile">Terms of Service</a>
                        <span className="text-xs text-slate-600 font-mono tracking-widest">© 2026 AFRIXTECH</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
