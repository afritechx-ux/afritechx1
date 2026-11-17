import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from './case-studies-portfolio/data';
import { CtaBanner, Icon } from '@/components/ui';

/* ── Data ───────────────────────────────────────────────────────── */

const services = [
  {
    title: 'Cloud infrastructure',
    description: 'Architectures built for availability, security and performance in mission-critical workloads.',
  },
  {
    title: 'Artificial intelligence',
    description: 'Machine learning and automation that remove manual work and sharpen complex decisions.',
  },
  {
    title: 'Custom development',
    description: 'Software designed around your operations and delivered on a modern, maintainable stack.',
  },
  {
    title: 'Cyber security',
    description: 'Reviews, hardening and audit pipelines that protect enterprise assets and customer data.',
  },
];

const metrics = [
  { value: '2018', label: 'Founded in Kumasi' },
  { value: '2', label: 'Offices: Kumasi and Accra' },
  { value: 'Live', label: 'Products in agriculture, recruitment and food' },
];

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'];

const steps = [
  { title: 'Discover', text: 'We map your systems, constraints and goals, then agree on measurable outcomes.' },
  { title: 'Design', text: 'Architecture and UX are specified and reviewed with your team before build starts.' },
  { title: 'Deliver', text: 'Iterative releases with automated testing, observability and clear weekly reporting.' },
  { title: 'Operate', text: 'Ongoing monitoring, security patching and support under a defined SLA.' },
];


/* ── Page ──────────────────────────────────────────────────────── */

export default function AfrixtechHomepageLandingPage() {
  return (
    <div>
      {/* Hero: headline-led, no decoration */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="container-x">
          <p className="eyebrow">Afrixtech — Kumasi &amp; Accra, Ghana</p>
          <h1 className="h-display mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-[5.5rem]">
            Software, cloud and AI,<br className="hidden sm:block" /> <em className="font-serif italic text-primary">built to last.</em>
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              We design, build and operate secure digital platforms for growing enterprises, from cloud foundations to
              intelligent automation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/request-a-quote" className="btn btn-primary h-12 px-6">
                Request a quote
              </Link>
              <Link href="/case-studies-portfolio" className="btn btn-secondary h-12 px-6">
                View case studies
              </Link>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-1 border-t border-ink sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse border-b border-line py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                <dt className="mt-2 text-sm text-ink-subtle">{m.label}</dt>
                <dd className="font-serif text-4xl tracking-tight sm:text-5xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services: ruled list, not cards */}
      <section className="section-y border-t border-line bg-surface-raised">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">01 — What we do</p>
            <h2 className="h-display mt-4 text-4xl sm:text-5xl">One accountable team, end to end.</h2>
            <Link href="/services-solutions" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              All solutions <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
          <ul className="border-t border-ink">
            {services.map((s, i) => (
              <li key={s.title} className="border-b border-line">
                <Link href="/services-solutions" className="group grid gap-2 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="font-mono text-xs text-ink-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{s.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">{s.description}</p>
                  </div>
                  <Icon name="arrow_forward" className="hidden text-[22px] text-ink-subtle transition-transform group-hover:translate-x-1 group-hover:text-primary sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process: numbered columns */}
      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow">02 — How we work</p>
          <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-5xl">A predictable path from idea to production.</h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((p, i) => (
              <li key={p.title} className="border-t border-ink pt-5">
                <span className="font-serif text-5xl text-primary">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Selected work: real, live projects */}
      <section className="section-y border-t border-line">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">03 — Selected work</p>
              <h2 className="h-display mt-4 max-w-2xl text-4xl sm:text-5xl">Products we have built, live today.</h2>
            </div>
            <Link href="/case-studies-portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              All work <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
          <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.id}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block border-t border-ink pt-5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
                    <Image src={c.image} alt={`${c.title} website`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <p className="eyebrow mt-5">{c.category}</p>
                  <h3 className="mt-1 font-serif text-3xl tracking-tight">{c.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">{c.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section aria-label="Technologies we build with" className="border-y border-line">
        <div className="container-x flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">Built with</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-2 font-serif text-xl text-ink-muted">
            {stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Tell us what you need to build."
        description="A senior engineer will respond within one business day."
      />
    </div>
  );
}
