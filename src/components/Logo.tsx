/**
 * Afrixtech mark: an "A" whose crossbar is a single pixel.
 * Draws in the current text colour; the pixel uses the brand accent, so it follows light/dark.
 */
export function LogoMark({ className = 'size-8' }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
            <path d="M4 44 L19.5 4 H28.5 L44 44 H35.5 L24 13.5 L12.5 44 Z" fill="currentColor" />
            <rect x="20.5" y="29" width="7" height="7" fill="var(--primary)" />
        </svg>
    );
}

export default function Logo({ className = '' }: { className?: string }) {
    return (
        <span className={`inline-flex items-center gap-3 text-ink ${className}`}>
            <LogoMark className="size-8" />
            <span className="font-serif text-[24px] leading-none tracking-tight">Afrixtech</span>
        </span>
    );
}
