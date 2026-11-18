import Reveal from './fx/Reveal';
import { TESTIMONIALS } from '@/data/site';

/** "What clients say". Renders nothing until at least one real testimonial is enabled in src/data/site.ts. */
export default function Testimonials() {
    const items = TESTIMONIALS.filter((t) => t.enabled && t.quote.trim());
    if (items.length === 0) return null;
    return (
        <section className="cv-auto section-y border-t border-line">
            <div className="container-x">
                <Reveal>
                    <p className="eyebrow">What clients say</p>
                    <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">In their words.</h2>
                </Reveal>
                <Reveal className="mt-14" delay={80}>
                    <ul className="grid gap-10 md:grid-cols-2">
                        {items.map((t) => (
                            <li key={`${t.name}-${t.company}`} className="cell">
                                <blockquote className="font-serif text-2xl leading-snug tracking-tight">&ldquo;{t.quote}&rdquo;</blockquote>
                                <p className="mt-4 text-sm text-ink-muted">
                                    <span className="font-semibold text-ink">{t.name}</span>
                                    {t.role ? `, ${t.role}` : ''}
                                    {t.company ? `, ${t.company}` : ''}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
