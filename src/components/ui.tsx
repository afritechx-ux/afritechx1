import Link from 'next/link';
import type { ReactNode } from 'react';

/* Shared building blocks. Server components, token-based, theme-aware. */

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

export function IconTile({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'sm' ? 'size-9' : size === 'lg' ? 'size-14' : 'size-11';
  const txt = size === 'sm' ? 'text-[18px]' : size === 'lg' ? 'text-[28px]' : 'text-[22px]';
  return (
    <span className={`inline-flex ${dim} shrink-0 items-center justify-center rounded-lg border border-line bg-surface-raised text-primary`}>
      <Icon name={name} className={txt} />
    </span>
  );
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
    <section className="relative overflow-hidden border-b border-line pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-72 w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      <div className={`container-x relative ${center ? 'text-center' : ''}`}>
        <div className={center ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="h-display mt-3 text-4xl sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-ink-muted">{description}</p>}
          {(primary || secondary) && (
            <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${center ? 'justify-center' : ''}`}>
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
    <section id={id} className={`section-y ${tone === 'muted' ? 'border-y border-line bg-surface' : ''}`}>
      <div className="container-x">
        {(title || eyebrow) && (
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2 className="h-display mt-3 text-3xl sm:text-4xl">{title}</h2>}
              {description && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>}
            </div>
            {action && (
              <Link href={action.href} className="btn btn-secondary shrink-0 self-start md:self-auto">
                {action.label}
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse">
          <dt className="mt-1 text-xs text-ink-subtle">{m.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight text-ink">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CtaBanner({
  title = 'Ready to modernize your infrastructure?',
  description = 'Tell us about your project. A senior engineer will respond within one business day.',
  primary = { label: 'Request a quote', href: '/request-a-quote' },
  secondary = { label: 'Read case studies', href: '/case-studies-portfolio' },
}: { title?: string; description?: string; primary?: Cta; secondary?: Cta }) {
  return (
    <section className="pb-8">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-14 text-center sm:px-12 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-primary/15 blur-[90px]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h-display text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={primary.href} className="btn btn-primary h-12 px-6">{primary.label}</Link>
              <Link href={secondary.href} className="btn btn-secondary h-12 px-6">{secondary.label}</Link>
            </div>
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
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
          <Icon name={icon} className="text-[28px]" />
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
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h1>
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
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-surface-raised text-ink-subtle">
        <Icon name={icon} className="text-[24px]" />
      </span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-ink-muted">{text}</p>
    </div>
  );
}
