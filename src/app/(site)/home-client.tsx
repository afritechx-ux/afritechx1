import Link from 'next/link';
import { CtaBanner, Icon } from '@/components/ui';
import HeroField from '@/components/fx/HeroField';
import Reveal from '@/components/fx/Reveal';
import ServiceList from '@/components/fx/ServiceList';
import ProcessScroll from '@/components/fx/ProcessScroll';
import WorkGrid from '@/components/fx/WorkGrid';
import { caseStudies } from './case-studies-portfolio/data';

const services = [
  {
    title: 'Cloud infrastructure',
    description: 'Architectures built for availability, security and performance in mission-critical workloads.',
    points: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Artificial intelligence',
    description: 'Machine learning and automation that remove manual work and sharpen complex decisions.',
    points: ['Python', 'TensorFlow', 'LLMs', 'Automation'],
  },
  {
    title: 'Custom development',
    description: 'Software designed around your operations and delivered on a modern, maintainable stack.',
    points: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'ERP'],
  },
  {
    title: 'Cyber security',
    description: 'Reviews, hardening and audit pipelines that protect enterprise assets and customer data.',
    points: ['OWASP', 'Role-based access', 'Audit trails'],
  },
];

const steps = [
  { title: 'Discover', text: 'We map your systems, constraints and goals, then agree on measurable outcomes.' },
  { title: 'Design', text: 'Architecture and UX are specified and reviewed with your team before build starts.' },
  { title: 'Deliver', text: 'Iterative releases with automated testing, observability and clear weekly reporting.' },
  { title: 'Operate', text: 'Ongoing monitoring, security patching and support under a defined SLA.' },
];

const ticker = ['Cloud', 'Artificial intelligence', 'Custom software', 'Security', 'ERP', 'Job platforms', 'Kumasi', 'Accra'];

const heroWords = ['Software,', 'cloud', 'and', 'AI,'];

export default function AfrixtechHomepageLandingPage() {
  return (
    <div>
      {/* Hero: headline plus an interactive pixel field that assembles into the logo */}
      <section className="relative flex min-h-[min(100svh,56rem)] items-center overflow-hidden pt-24 pb-12">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow animate-fade-up">Afrixtech — Kumasi &amp; Accra, Ghana</p>
            <h1 className="h-display mt-6 text-5xl sm:text-7xl xl:text-[6.5rem]">
              {heroWords.map((w, i) => (
                <span key={w} className="mr-[0.25em] inline-block animate-fade-up" style={{ animationDelay: `${120 + i * 90}ms` }}>
                  {w}
                </span>
              ))}
              <br />
              <em className="inline-block animate-fade-up font-serif italic text-primary" style={{ animationDelay: '560ms' }}>
                built to last.
              </em>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted animate-fade-up" style={{ animationDelay: '700ms' }}>
              We design, build and operate secure digital platforms for growing enterprises, from cloud foundations to
              intelligent automation.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '820ms' }}>
              <Link href="/request-a-quote" className="btn btn-primary h-12 px-6">
                Request a quote
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <Link href="/case-studies-portfolio" className="btn btn-secondary h-12 px-6">
                See our work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <HeroField className="absolute inset-0 size-full touch-pan-y" />
          </div>
        </div>

        <p className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-ink-subtle lg:flex">
          <Icon name="mouse" className="text-[16px]" /> Move your cursor through the mark
        </p>
      </section>

      {/* Ticker */}
      <section aria-label="What we work on" className="overflow-hidden border-y border-ink py-5">
        <div className="marquee flex w-max gap-12 font-serif text-3xl sm:text-4xl">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap" aria-hidden={i >= ticker.length}>
              {t}
              <span className="size-2 bg-primary" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">01 — What we do</p>
            <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">One accountable team, end to end.</h2>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <ServiceList items={services} />
          </Reveal>
        </div>
      </section>

      {/* Process: pinned numeral, scrolling steps */}
      <section className="section-y border-t border-line bg-surface-raised">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">02 — How we work</p>
            <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">A predictable path from idea to production.</h2>
          </Reveal>
          <div className="mt-16">
            <ProcessScroll steps={steps} />
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section-y">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">03 — Selected work</p>
              <h2 className="h-display mt-4 max-w-2xl text-4xl sm:text-6xl">Built here. Live today.</h2>
            </div>
            <Link href="/case-studies-portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              All work <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <WorkGrid studies={caseStudies} />
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Tell us what you need to build." description="A senior engineer will respond within one business day." />
    </div>
  );
}
