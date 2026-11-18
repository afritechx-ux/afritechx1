import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from './fx/Reveal';

/* Shared building blocks. Server components, token-based, theme-aware. */

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

/** Decorative icon tiles were removed in the editorial redesign; kept so call sites still compile. */
export function IconTile(props: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  void props;
  return null;
}

type Cta = { label: string; href: string };

export function PageHero({
  eyebrow, title, description, primary, secondary, align = 'left', children,
}: {
  eyebrow?: string; title: ReactNode; description?: ReactNode;
  primary?: Cta; secondary?: Cta; align?: 'left' | 'center'; children?: ReactNode;
}) {
  const center = align === 'center';
  return (
    <section className="border-b border-line pt-32 pb-14 lg:pt-44 lg:pb-20">
      <div className={`container-x ${center ? 'text-center' : ''}`}>
        <div className={center ? 'mx-auto max-w-4xl' : 'max-w-4xl'}>
          {eyebrow && <p className="eyebrow animate-rise">{eyebrow}</p>}
          <h1 className="h-display mt-5 animate-rise text-5xl sm:text-6xl lg:text-7xl" style={{ animationDelay: '90ms' }}>{title}</h1>
          {description && <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-ink-muted" style={{ animationDelay: '200ms' }}>{description}</p>}
          {(primary || secondary) && (
            <div className={`mt-8 flex animate-rise flex-col gap-3 sm:flex-row ${center ? 'justify-center' : ''}`} style={{ animationDelay: '300ms' }}>
              {primary && <Link href={primary.href} className="btn btn-primary h-12 px-6">{primary.label}</Link>}
              {secondary && <Link href={secondary.href} className="btn btn-secondary h-12 px-6">{secondary.label}</Link>}
            </div>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  id, eyebrow, title, description, action, tone = 'default', children,
}: {
  id?: string; eyebrow?: string; title?: ReactNode; description?: ReactNode;
  action?: Cta; tone?: 'default' | 'muted'; children: ReactNode;
}) {
  return (
    <section id={id} className={`section-y ${tone === 'muted' ? 'bg-surface-raised' : ''}`}>
      <div className="container-x">
        {(title || eyebrow) && (
          <Reveal className="mb-12 flex flex-col justify-between gap-6 border-t border-ink pt-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2 className="h-display mt-4 text-3xl sm:text-5xl">{title}</h2>}
              {description && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>}
            </div>
            {action && (
              <Link href={action.href} className="btn btn-secondary shrink-0 self-start md:self-auto">
                {action.label}
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            )}
          </Reveal>
        )}
        <Reveal delay={60}>{children}</Reveal>
      </div>
    </section>
  );
}

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse bg-canvas px-0 py-6 sm:px-6 sm:first:pl-0">
          <dt className="mt-2 text-sm text-ink-subtle">{m.label}</dt>
          <dd className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CtaBanner({
  title = 'Ready to modernize your infrastructure?',
  description = 'Tell us about your project and we will get back to you with next steps.',
  primary = { label: 'Request a quote', href: '/request-a-quote' },
  secondary = { label: 'Read case studies', href: '/case-studies-portfolio' },
}: { title?: string; description?: string; primary?: Cta; secondary?: Cta }) {
  return (
    <section className="pb-0">
      <div className="bg-ink text-canvas">
        <div className="container-x grid gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:py-28">
          <div>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-70">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={primary.href} className="btn h-12 bg-canvas px-6 text-ink hover:opacity-90">{primary.label}</Link>
            <Link href={secondary.href} className="btn h-12 border border-canvas/30 px-6 text-canvas hover:border-canvas/70">{secondary.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Badge({ tone = 'default', children }: { tone?: 'default' | 'primary' | 'success' | 'warning' | 'danger'; children: ReactNode }) {
  const t = tone === 'default' ? '' : `badge-${tone}`;
  return <span className={`badge ${t}`}>{children}</span>;
}

/** Centered page for utility states (success, empty, error). */
export function StatusPage({ icon, title, description, primary, secondary }: { icon: string; title: string; description: string; primary: Cta; secondary?: Cta }) {
  return (
    <section className="container-x flex min-h-[70vh] items-center justify-center py-28">
      <div className="max-w-md text-center">
        <span className="mx-auto inline-flex text-primary">
          <Icon name={icon} className="text-[40px]" />
        </span>
        <h1 className="h-display mt-6 text-3xl">{title}</h1>
        <p className="mt-3 text-ink-muted">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={primary.href} className="btn btn-primary h-12 px-6">{primary.label}</Link>
          {secondary && <Link href={secondary.href} className="btn btn-secondary h-12 px-6">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}

/** In-app page title row used by the client portal. */
export function PageHeader({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
      </div>
      {children && <div className="flex shrink-0 gap-2">{children}</div>}
    </div>
  );
}

const statusTone: Record<string, 'success' | 'warning' | 'danger' | 'primary' | 'default'> = {
  PAID: 'success', COMPLETED: 'success', ON_TRACK: 'success',
  UNPAID: 'warning', PENDING: 'default', IN_PROGRESS: 'primary', AT_RISK: 'warning',
  OVERDUE: 'danger',
};

export function StatusBadge({ status }: { status: string }) {
  const label = status.replace(/_/g, ' ').toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  return <Badge tone={statusTone[status] ?? 'default'}>{label}</Badge>;
}

export function EmptyState({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <span className="inline-flex text-ink-subtle">
        <Icon name={icon} className="text-[28px]" />
      </span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-ink-muted">{text}</p>
    </div>
  );
}
