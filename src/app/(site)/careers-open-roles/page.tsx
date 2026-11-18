import { CtaBanner, IconTile, PageHero, Section } from '@/components/ui';
import { CONTACT } from '@/data/site';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Careers',
  description: 'Join the Afrixtech team. Explore open engineering, design and data science roles.',
};

const perks = [
  { icon: 'public', title: 'Remote-friendly', text: 'Flexible working and an asynchronous communication culture.' },
  { icon: 'favorite', title: 'Health & wellbeing', text: 'Health coverage, mental health days and a gym stipend.' },
  { icon: 'school', title: 'Continuous learning', text: 'Annual budget for courses, conferences, books and certifications.' },
];

const roles = [
  { title: 'Senior Full-Stack Developer', team: 'Engineering', type: 'Full-time · Remote' },
  { title: 'AI Research Engineer', team: 'AI & Data', type: 'Full-time · Remote' },
  { title: 'Product Designer (UI/UX)', team: 'Design', type: 'Full-time · Remote' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future with us"
        description="Join a team shaping the digital landscape. We're looking for people who want to build world-class enterprise solutions."
        primary={{ label: 'See open roles', href: '#roles' }}
      />

      <Section eyebrow="Why Afrixtech" title="A career with room to grow">
        <ul className="grid gap-4 md:grid-cols-3">
          {perks.map((p) => (
            <li key={p.title} className="cell">
              <IconTile name={p.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="roles" tone="muted" eyebrow="Open roles" title="Current openings">
        <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {roles.map((r) => (
            <li key={r.title} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{r.team} · {r.type}</p>
              </div>
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Application: ' + r.title)}`}
                className="btn btn-secondary shrink-0"
              >
                Apply by email
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">Don&apos;t see your role? Send your CV to {CONTACT.email} and tell us how you&apos;d contribute.</p>
      </Section>

      <CtaBanner title="Not ready to apply?" description="Learn more about how we work and the problems we're solving." primary={{ label: 'About Afrixtech', href: '/about-team-profile' }} secondary={{ label: 'Read our insights', href: '/tech-insights-blog-hub' }} />
    </>
  );
}
