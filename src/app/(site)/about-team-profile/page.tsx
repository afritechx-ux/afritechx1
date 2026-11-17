import Image from 'next/image';
import { CtaBanner, IconTile, PageHero, Section, StatRow } from '@/components/ui';

export const metadata = {
  title: 'About',
  description: 'Afrixtech is a software engineering company based in Kumasi, Ghana, building secure, scalable digital solutions for enterprises.',
};

const values = [
  { icon: 'all_inclusive', title: 'Agile delivery', text: 'Iterative cycles with continuous feedback so we meet your evolving needs with speed and precision.' },
  { icon: 'cloud_done', title: 'Cloud native', text: 'Resilient solutions built for modern cloud infrastructure across AWS, Azure and GCP.' },
  { icon: 'verified_user', title: 'Security first', text: 'Security embedded in every line of code, following OWASP standards and recognised best practice.' },
];

const timeline = [
  { year: '2018', title: 'Founded in Kumasi', text: 'Started as a small consultancy of three engineers in Kumasi, Ghana, aiming to digitize local SMEs across West Africa.' },
  { year: '2020', title: 'Regional expansion', text: 'Opened an Accra presence and grew the team to serve clients across Ghana and beyond.' },
  { year: '2022', title: 'Enterprise division', text: 'Established an enterprise practice for larger-scale clients and longer engagements.' },
  { year: '2024', title: 'Afrixtech Academy', text: 'Launched an internal training programme to mentor the next generation of African tech talent.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Afrixtech"
        title="Engineering digital infrastructure from Africa, for the world"
        description="We are a software engineering company in Kumasi, Ghana. We build secure, scalable systems and the teams that run them."
        primary={{ label: 'Work with us', href: '/contact-global-offices' }}
        secondary={{ label: 'Open roles', href: '/careers-open-roles' }}
      >
        <StatRow
          items={[
            { value: '2018', label: 'Founded' },
            { value: 'Kumasi', label: 'Headquarters, Ghana' },
            { value: 'Accra', label: 'Second office' },
            { value: '24/7', label: 'Support availability' },
          ]}
        />
      </PageHero>

      <Section eyebrow="How we work" title="Principles behind every engagement">
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="cell">
              <IconTile name={v.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="Our story" title="Growing step by step since 2018">
        <ol className="relative max-w-3xl border-l border-line-strong pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 size-3 rounded-full border-2 border-primary bg-surface" aria-hidden="true" />
              <p className="font-mono text-sm text-primary">{t.year}</p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Leadership" title="Led by its founder">
        <div className="card flex max-w-3xl flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="relative size-32 shrink-0 overflow-hidden rounded-xl bg-surface-raised">
            <Image src="/case-studies/ceo.jpeg" alt="Kusi Gabriel Kwaku, CEO and Founder" fill className="object-cover" sizes="128px" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Kusi Gabriel Kwaku</h3>
            <p className="text-sm text-primary">Chief Executive Officer &amp; Founder</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Tech entrepreneur based in Kumasi, Ghana, leading Afrixtech&apos;s mission to deliver world-class digital solutions across Africa.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner title="Help us build what's next" description="We're growing the team. See open roles or get in touch about a project." primary={{ label: 'View open roles', href: '/careers-open-roles' }} secondary={{ label: 'Contact us', href: '/contact-global-offices' }} />
    </>
  );
}
