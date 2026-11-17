import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Data ───────────────────────────────────────────────────────── */

const services = [
  {
    icon: 'cloud_queue',
    title: 'Cloud Infrastructure',
    description: 'Scalable architectures built for availability, security and performance in mission-critical workloads.',
  },
  {
    icon: 'psychology',
    title: 'Artificial Intelligence',
    description: 'Machine learning and automation that remove manual work and sharpen complex business decisions.',
  },
  {
    icon: 'terminal',
    title: 'Custom Development',
    description: 'Software designed around your operations and delivered on a modern, maintainable stack.',
  },
  {
    icon: 'security',
    title: 'Cyber Security',
    description: 'Security reviews, hardening and audit pipelines that protect enterprise assets and customer data.',
  },
];

const metrics = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Enterprise clients' },
  { value: '<200ms', label: 'Average response' },
  { value: '24/7', label: 'Expert support' },
];

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'];

const steps = [
  { step: '01', title: 'Discover', text: 'We map your systems, constraints and goals, then agree on measurable outcomes.' },
  { step: '02', title: 'Design', text: 'Architecture and UX are specified and reviewed with your team before build starts.' },
  { step: '03', title: 'Deliver', text: 'Iterative releases with automated testing, observability and clear weekly reporting.' },
  { step: '04', title: 'Operate', text: 'Ongoing monitoring, security patching and support under a defined SLA.' },
];

const testimonials = [
  {
    quote: 'Afrixtech rebuilt our core infrastructure. The transition was flawless, and global API response times dropped by over 60%.',
    author: 'Sarah Jenkins',
    role: 'CTO, CloudScale Systems',
  },
  {
    quote: 'They helped us achieve full SOC 2 compliance and put strong guardrails around our cloud security and audit pipelines.',
    author: 'Michael Chang',
    role: 'VP of Infrastructure, FinTechGlobal Group',
  },
  {
    quote: 'The AI automation pipelines they delivered transformed our data processing efficiency. Fast, reliable and highly scalable.',
    author: 'Amina Diop',
    role: 'Director of Engineering, AfricaTech Hub',
  },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function AfrixtechHomepageLandingPage() {
  return (
    <div className="relative">
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Now accepting new enterprise partners
            </p>

            <h1 className="h-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Enterprise software, cloud and AI —{' '}
              <span className="text-ink-muted">engineered to scale.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Afrixtech partners with growing enterprises to design, build and operate secure digital platforms, from cloud
              foundations to intelligent automation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-global-offices" className="btn btn-primary h-12 px-6">
                Talk to our team
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
              <Link href="/case-studies-portfolio" className="btn btn-secondary h-12 px-6">
                View case studies
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs text-ink-subtle">{m.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Product visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl shadow-black/40">
              <Image
                src="/case-studies/homepage-hero.png"
                alt="Afrixtech cloud infrastructure dashboard showing global deployment status"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-4 w-[min(300px,80%)] rounded-lg border border-line-strong bg-surface/95 p-4 shadow-xl backdrop-blur sm:-left-6">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-ink">Production deploy</span>
                <span className="inline-flex items-center gap-1.5 text-success">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  Healthy
                </span>
              </div>
              <p className="mt-2 font-mono text-xs text-ink-muted">
                <span className="text-success">✓</span> 4 regions · p95 latency 142ms
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line" role="presentation">
                <div className="h-full w-[99%] rounded-full bg-success" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Technology bar ═══ */}
      <section aria-label="Technologies we build with" className="border-y border-line bg-surface/60">
        <div className="container-x flex flex-col items-center gap-5 py-8 md:flex-row md:justify-between">
          <p className="text-sm text-ink-subtle">Built on technology you already trust</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {stack.map((t) => (
              <li key={t} className="text-sm font-semibold tracking-tight text-ink-muted">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ Services ═══ */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">What we do</p>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">Capabilities across the full delivery lifecycle</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                One accountable team for strategy, engineering and operations.
              </p>
            </div>
            <Link href="/services-solutions" className="btn btn-secondary shrink-0 self-start md:self-auto">
              All solutions
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.title}>
                <Link
                  href="/services-solutions"
                  className="card card-hover group flex h-full flex-col p-6"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg border border-line-strong bg-surface-raised text-primary">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{s.icon}</span>
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ How we work ═══ */}
      <section className="section-y border-y border-line bg-surface/60">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">A predictable path from idea to production</h2>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((p) => (
              <li key={p.step} className="bg-surface p-6 lg:p-8">
                <span className="font-mono text-xs text-primary">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Customers</p>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Trusted by engineering leaders</h2>
          </div>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.author} className="card flex flex-col p-6 lg:p-8">
                <blockquote className="flex-1 text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-ink">{t.author}</p>
                  <p className="text-sm text-ink-subtle">{t.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="pb-8">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-14 text-center sm:px-12 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-primary/20 blur-[90px]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="h-display text-3xl sm:text-4xl">Ready to modernize your infrastructure?</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Tell us about your project. A senior engineer will respond within one business day.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact-global-offices" className="btn btn-primary h-12 px-6">Start a project</Link>
                <Link href="/case-studies-portfolio" className="btn btn-secondary h-12 px-6">Read case studies</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
