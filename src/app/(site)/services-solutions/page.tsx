import Link from 'next/link';
import { CtaBanner, PageHero, Section } from '@/components/ui';
import ProcessScroll from '@/components/fx/ProcessScroll';
import { SERVICES } from '@/data/site';

export const metadata = {
  title: 'Services: Websites, ERP, Cloud, AI & Security',
  description:
    'Websites, e-commerce, ERP, custom software, cloud, AI automation and security for businesses in Ghana. See what we build and how we work.',
};

const steps = [
  { title: 'Discovery & Strategy', text: 'We learn about your business and goals, then agree what to build, in what order, and what it will cost.' },
  { title: 'Architecture & Design', text: 'We plan the system and design the screens, and you review them before any coding begins.' },
  { title: 'Iterative Development', text: 'We build in stages and show you working progress, so there are no surprises at the end.' },
  { title: 'Testing & Launch', text: 'We test on real devices, fix issues, launch, and stay available for support afterwards.' },
];

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Software engineering for the systems your business runs on"
        description="From a company website to an ERP that runs your operations, we build what your business needs and keep it running."
        primary={{ label: 'Start a project', href: '/request-a-quote' }}
        secondary={{ label: 'See pricing', href: '/#packages' }}
      />

      <Section eyebrow="Capabilities" title="What we build">
        <ul className="border-t border-line">
          {SERVICES.map((s, i) => (
            <li
              key={s.id}
              id={s.id}
              className="row grid scroll-mt-24 gap-4 py-8 lg:grid-cols-[3rem_1fr_1.2fr_1fr] lg:gap-8"
            >
              <span className="font-mono text-xs text-ink-subtle">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-3xl tracking-tight">{s.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">{s.description}</p>
              <ul className="flex flex-wrap content-start gap-2 lg:justify-end" aria-label={`${s.title} technologies`}>
                {s.points.map((t) => (
                  <li key={t} className="badge">{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="How we work" title="A clear path from idea to launch">
        <ProcessScroll steps={steps} />
      </Section>

      <Section eyebrow="Technology" title="Tools we use" action={{ label: 'Full technology stack', href: '/technology-stack-expertise' }}>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 font-serif text-2xl text-ink-muted">
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-muted">
          Not sure what you need?{' '}
          <Link href="/contact-global-offices" className="font-medium text-primary hover:underline">Talk to us</Link>.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
