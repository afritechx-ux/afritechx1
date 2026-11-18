import Link from 'next/link';
import { CtaBanner, Icon } from '@/components/ui';
import HeroField from '@/components/fx/HeroFieldLazy';
import Reveal from '@/components/fx/Reveal';
import ServiceList from '@/components/fx/ServiceList';
import ProcessScroll from '@/components/fx/ProcessScroll';
import WorkGrid from '@/components/fx/WorkGrid';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import FounderCard from '@/components/FounderCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { PROJECTS, SERVICES, whatsappLink } from '@/data/site';

const homeServices = SERVICES.filter((s) => s.id !== 'ux-design').map((s) => ({
  id: s.id,
  title: s.short,
  description: s.description,
  points: s.points,
}));

const steps = [
  { title: 'Discover', text: 'We learn about your business, your customers and your goals, then agree what to build.' },
  { title: 'Design', text: 'We plan the pages, the layout and the features, and review them with you before building.' },
  { title: 'Deliver', text: 'We build in stages, test on real phones and computers, and show you progress along the way.' },
  { title: 'Operate', text: 'After launch we keep your site or system running, updated and supported.' },
];

const ticker = ['Websites', 'E-commerce', 'ERP systems', 'Custom software', 'Cloud', 'Automation', 'Kumasi', 'Ghana'];

const heroWords = ['Software,', 'cloud', 'and', 'AI,'];

export default function AfrixtechHomepageLandingPage() {
  return (
    <div>
      {/* Hero: headline plus an interactive pixel field that assembles into the logo */}
      <section className="relative flex min-h-[min(100svh,56rem)] items-center overflow-hidden pt-24 pb-12">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow animate-rise">Afrixtech — Kumasi, Ghana</p>
            <h1 className="h-display mt-6 text-5xl sm:text-7xl xl:text-[6.5rem]">
              {heroWords.map((w, i) => (
                <span key={w}>
                  <span className="inline-block animate-rise" style={{ animationDelay: `${120 + i * 90}ms` }}>
                    {w}
                  </span>{' '}
                </span>
              ))}
              <br />
              <em className="inline-block animate-rise font-serif-italic text-primary" style={{ animationDelay: '560ms' }}>
                built to last.
              </em>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
              We build websites, online stores, ERP and custom software for businesses in Ghana, from a simple company
              website to systems that run your operations.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/request-a-quote" className="btn btn-primary h-12 px-6">
                Request a quote
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary h-12 px-6"
              >
                <WhatsAppIcon className="size-[18px]" />
                Chat on WhatsApp
              </a>
              <Link href="/case-studies-portfolio" className="btn btn-ghost h-12 px-3">
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
        <ul className="marquee flex w-max gap-12 font-serif text-3xl sm:text-4xl">
          {[...ticker, ...ticker].map((t, i) => (
            <li key={i} className="flex items-center gap-12 whitespace-nowrap" aria-hidden={i >= ticker.length}>
              {t}
              <span className="size-2 bg-primary" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="cv-auto section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">01 — What we do</p>
            <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">One accountable team, end to end.</h2>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <ServiceList items={homeServices} />
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <Packages />

      {/* Process: pinned numeral, scrolling steps */}
      <section className="cv-auto section-y border-t border-line bg-surface-raised">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">03 — How we work</p>
            <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">A clear path from idea to launch.</h2>
          </Reveal>
          <div className="mt-16">
            <ProcessScroll steps={steps} />
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="cv-auto section-y">
        <div className="container-x">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">04 — Selected work</p>
              <h2 className="h-display mt-4 max-w-2xl text-4xl sm:text-6xl">Built here. Live today.</h2>
            </div>
            <Link href="/case-studies-portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              All work <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <WorkGrid projects={PROJECTS} />
          </Reveal>
        </div>
      </section>

      {/* Testimonials: hidden until real entries are enabled in src/data/site.ts */}
      <Testimonials />

      {/* Team */}
      <section className="cv-auto section-y border-t border-line">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">05 — Team</p>
            <h2 className="h-display mt-4 max-w-3xl text-4xl sm:text-6xl">Led from Kumasi.</h2>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <FounderCard />
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Tell us what you need to build." description="Send us a message or chat on WhatsApp. We will tell you what you need and what it costs." />
    </div>
  );
}
