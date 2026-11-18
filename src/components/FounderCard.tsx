import Image from 'next/image';
import { FOUNDER } from '@/data/site';

/** Founder card. Shows an initials placeholder when no photo is set in src/data/site.ts. */
export default function FounderCard() {
    const initials = FOUNDER.name.split(' ').map((n) => n[0]).join('').slice(0, 2);
    return (
        <div className="grid max-w-3xl gap-8 border-t border-ink pt-8 sm:grid-cols-[10rem_1fr]">
            <div className="relative aspect-square w-40 overflow-hidden bg-surface-raised">
                {FOUNDER.photo ? (
                    <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role}`} fill sizes="160px" className="object-cover" />
                ) : (
                    <span className="flex size-full items-center justify-center font-serif text-5xl text-ink-subtle" aria-hidden="true">
                        {initials}
                    </span>
                )}
            </div>
            <div>
                <h3 className="font-serif text-3xl tracking-tight">{FOUNDER.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{FOUNDER.role}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {FOUNDER.credentials.map((c) => (
                        <li key={c} className="badge">{c}</li>
                    ))}
                </ul>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">{FOUNDER.bio}</p>
            </div>
        </div>
    );
}
