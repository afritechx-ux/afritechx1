import Link from 'next/link';
import Reveal from './fx/Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT, PACKAGES, PACKAGES_NOTE, PACKAGE_GROUPS, whatsappLink, type PackageItem } from '@/data/site';

/** Price line. The currency symbol is set in the sans font because the serif face draws the cedi sign like a cent sign. */
function Price({ value }: { value: string }) {
    const m = /^(From )?(GH₵)([0-9,]+)$/.exec(value);
    if (!m) return <>{value}</>;
    return (
        <>
            {m[1] && <span className="mr-2 font-sans text-base text-current opacity-70">From</span>}
            <span className="mr-0.5 font-sans text-[0.62em] font-medium align-[0.12em]">{m[2]}</span>
            {m[3]}
        </>
    );
}

function PackageCard({ p }: { p: PackageItem }) {
    const featured = Boolean(p.badge);
    return (
        <li className={`flex flex-col p-6 sm:p-8 ${featured ? 'bg-ink text-canvas' : 'border border-line-strong'}`}>
            <div className="flex min-h-7 items-center justify-between gap-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">{p.name}</h4>
                {p.badge && <span className="bg-canvas px-2 py-0.5 text-xs font-semibold text-ink">{p.badge}</span>}
            </div>

            <p className="mt-6 whitespace-nowrap font-serif text-4xl tracking-tight sm:text-5xl">
                <Price value={p.price} />
            </p>
            <p className={`mt-1 text-sm ${featured ? 'opacity-75' : 'text-ink-muted'}`}>{p.priceNote}</p>

            <p className={`mt-6 text-sm leading-relaxed ${featured ? 'opacity-85' : 'text-ink-muted'}`}>{p.summary}</p>

            <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${featured ? 'border-canvas/25' : 'border-line'}`}>
                {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                        <span className={`mt-1.5 size-1.5 shrink-0 ${featured ? 'bg-canvas' : 'bg-primary'}`} aria-hidden="true" />
                        {f}
                    </li>
                ))}
            </ul>

            <a
                href={whatsappLink(p.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-8 h-12 w-full ${featured ? 'bg-canvas text-ink hover:opacity-90' : 'btn-primary'}`}
            >
                <WhatsAppIcon className="size-[18px]" />
                {p.cta}
                <span className="sr-only"> for the {p.name} package on WhatsApp (opens in a new tab)</span>
            </a>
        </li>
    );
}

/** Pricing packages. Edit the content in src/data/site.ts. */
export default function Packages() {
    const groups = (['general', 'store'] as const).map((key) => ({
        key,
        ...PACKAGE_GROUPS[key],
        items: PACKAGES.filter((p) => p.group === key),
    }));

    return (
        <section id="packages" className="cv-auto section-y border-t border-line">
            <div className="container-x">
                <Reveal>
                    <p className="eyebrow">02 — Packages</p>
                    <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">Simple packages, clear prices.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                        Pick the package that fits your business. Each button opens a WhatsApp chat with us about it.
                    </p>
                </Reveal>

                <Reveal className="mt-14 space-y-14" delay={80}>
                    {groups.map((g) => (
                        <div key={g.key}>
                            <div className="mb-6 flex flex-col gap-1 border-t border-ink pt-4 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="font-serif text-3xl tracking-tight">{g.title}</h3>
                                <p className="text-sm text-ink-muted">{g.description}</p>
                            </div>
                            <ul className={`grid gap-6 ${g.key === 'store' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                                {g.items.map((p) => (
                                    <PackageCard key={p.id} p={p} />
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-3 text-sm text-ink-muted">
                        <p>{PACKAGES_NOTE}</p>
                        <p>
                            Prefer to talk? Call Sales on{' '}
                            <a href={`tel:${CONTACT.phones[0].e164}`} className="font-medium text-primary hover:underline">
                                {CONTACT.phones[0].display}
                            </a>
                            , or{' '}
                            <Link href="/request-a-quote" className="font-medium text-primary hover:underline">
                                request a detailed quote
                            </Link>
                            .
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
