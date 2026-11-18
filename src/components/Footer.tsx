import Link from 'next/link';
import Logo from './Logo';
import { BUSINESS, CONTACT, CONTACT_ADDRESS_LINE, FOOTER_COLUMNS } from '@/data/site';

export default function Footer() {
    const columns = FOOTER_COLUMNS.map((c) => ({ ...c, links: c.links.filter((l) => l.enabled) }));
    const { street } = CONTACT.address;

    return (
        <footer className="border-t border-line bg-canvas">
            <div className="container-x py-14 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
                    <div className="max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Afrixtech home">
                            <Logo />
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                            Websites, online stores, ERP and custom software for businesses in Ghana.
                        </p>
                        <ul className="mt-6 space-y-1 text-sm text-ink-muted">
                            <li>
                                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 py-1 hover:text-ink">
                                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
                                    {CONTACT.email}
                                </a>
                            </li>
                            {CONTACT.phones.map((p) => (
                                <li key={p.e164}>
                                    <a href={`tel:${p.e164}`} className="inline-flex items-center gap-2 py-1 hover:text-ink">
                                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">call</span>
                                        <span>
                                            <span className="text-ink-muted">{p.label}:</span> {p.display}
                                        </span>
                                    </a>
                                </li>
                            ))}
                            <li className="flex items-start gap-2 py-1">
                                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">location_on</span>
                                <span>
                                    {street ? `${street}, ` : ''}
                                    {CONTACT_ADDRESS_LINE}
                                </span>
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

                <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Afrixtech. All rights reserved.</p>
                    {/* Hidden until the registration number is set in src/data/site.ts */}
                    {BUSINESS.registration && <p>{BUSINESS.registration}</p>}
                </div>
            </div>
        </footer>
    );
}
