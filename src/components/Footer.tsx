import Image from 'next/image';
import Link from 'next/link';

const columns = [
    {
        title: 'Solutions',
        links: [
            { label: 'Enterprise Software', href: '/services-solutions' },
            { label: 'Cloud & DevOps', href: '/services-solutions' },
            { label: 'AI & Machine Learning', href: '/services-solutions' },
            { label: 'Technology Stack', href: '/technology-stack-expertise' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Case Studies', href: '/case-studies-portfolio' },
            { label: 'Insights', href: '/tech-insights-blog-hub' },
            { label: 'API Documentation', href: '/developer-api-documentation-portal' },
            { label: 'Help Center', href: '/client-support-help-center' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '/about-team-profile' },
            { label: 'Careers', href: '/careers-open-roles' },
            { label: 'Contact', href: '/contact-global-offices' },
            { label: 'Request a quote', href: '/request-a-quote' },
            { label: 'Service Status', href: '/service-status-uptime-page' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-line bg-surface">
            <div className="container-x py-14 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
                    <div className="max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Afrixtech home">
                            <span className="relative size-8 overflow-hidden rounded-md">
                                <Image src="/logo.png" alt="" fill className="object-cover" sizes="32px" />
                            </span>
                            <span className="text-[15px] font-semibold tracking-tight text-ink">Afrixtech</span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                            Software engineering, cloud and AI for enterprises that need systems built to last.
                        </p>
                        <ul className="mt-6 space-y-2 text-sm text-ink-muted">
                            <li>
                                <a href="mailto:afritechx@gmail.com" className="inline-flex items-center gap-2 py-1 hover:text-ink">
                                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
                                    afritechx@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+233245171589" className="inline-flex items-center gap-2 py-1 hover:text-ink">
                                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">call</span>
                                    +233 245 171 589
                                </a>
                            </li>
                            <li>
                                <a href="tel:+233209624647" className="inline-flex items-center gap-2 py-1 hover:text-ink">
                                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">call</span>
                                    +233 209 624 647
                                </a>
                            </li>
                        </ul>
                    </div>

                    <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {columns.map((col) => (
                            <div key={col.title}>
                                <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">{col.title}</h2>
                                <ul className="mt-4 space-y-1">
                                    {col.links.map((l) => (
                                        <li key={l.label}>
                                            <Link href={l.href} className="inline-block py-1.5 text-sm text-ink-muted transition-colors hover:text-ink">
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Afrixtech. All rights reserved.</p>
                    <Link href="/service-status-uptime-page" className="inline-flex items-center gap-2 hover:text-ink-muted">
                        <span className="relative flex size-2" aria-hidden="true">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                            <span className="relative inline-flex size-2 rounded-full bg-success" />
                        </span>
                        All systems operational
                    </Link>
                </div>
            </div>
        </footer>
    );
}
