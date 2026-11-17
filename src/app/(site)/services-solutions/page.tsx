import Link from 'next/link';
import { CtaBanner, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Enterprise Services & Solutions',
  description:
    'Explore Afrixtech services including Cloud Infrastructure, Custom App Development, AI Integration, and Cyber Security for global enterprises.',
};

const services = [
  {
    icon: 'dns',
    title: 'Enterprise Software',
    description: 'Custom ERP and CRM solutions designed to streamline your business operations and increase efficiency across departments.',
    tech: ['PostgreSQL', 'Cloud', 'Security', 'REST API'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps built with React Native and Flutter for seamless experiences on iOS and Android.',
    tech: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: 'psychology',
    title: 'AI & Machine Learning',
    description: 'Predictive analytics, NLP and intelligent automation powered by Python and TensorFlow models to drive insights.',
    tech: ['Python', 'TensorFlow', 'LLMs'],
  },
  {
    icon: 'cloud_queue',
    title: 'Cloud & DevOps',
    description: 'Secure, scalable and reliable cloud solutions on AWS and Azure, with deployment pipelines optimized for uptime.',
    tech: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'User-centric design that blends aesthetics with functionality. Intuitive interfaces that delight users and drive conversion.',
    tech: ['Figma', 'Prototyping', 'User Research'],
  },
];

const steps = [
  { icon: 'explore', title: 'Discovery & Strategy', text: 'We dive deep into your business goals, analyze your market position, and craft a technical roadmap aligned with your vision.' },
  { icon: 'architecture', title: 'Architecture & Design', text: 'Architects design scalable systems and designers create intuitive interfaces, all validated by your team before coding begins.' },
  { icon: 'sprint', title: 'Iterative Development', text: 'Agile sprints with bi-weekly demos keep you in the loop. We ship production-ready increments, not slide decks.' },
  { icon: 'rocket_launch', title: 'Testing & Launch', text: 'Rigorous QA, performance benchmarking and security review ahead of launch, with post-launch support.' },
];

const stack = [
  { name: 'React', icon: 'code' }, { name: 'Next.js', icon: 'web' }, { name: 'Node.js', icon: 'terminal' },
  { name: 'Python', icon: 'data_object' }, { name: 'AWS', icon: 'cloud' }, { name: 'Docker', icon: 'deployed_code' },
  { name: 'PostgreSQL', icon: 'database' }, { name: 'TensorFlow', icon: 'psychology' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Software engineering for the systems your business runs on"
        description="From scalable cloud architecture to intuitive mobile applications, we deliver enterprise-grade software tailored to your operations."
        primary={{ label: 'Start a project', href: '/request-a-quote' }}
        secondary={{ label: 'View case studies', href: '/case-studies-portfolio' }}
      />

      <Section eyebrow="Capabilities" title="Five disciplines, one accountable team">
        <ul className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.title} className="row grid gap-4 py-8 lg:grid-cols-[3rem_1fr_1.2fr_1fr] lg:gap-8">
              <span className="font-mono text-xs text-ink-subtle">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-3xl tracking-tight">{s.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">{s.description}</p>
              <ul className="flex flex-wrap content-start gap-2 lg:justify-end" aria-label={`${s.title} technologies`}>
                {s.tech.map((t) => (
                  <li key={t} className="badge">{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="How we work" title="A predictable path from idea to production">
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="cell">
              <span className="font-serif text-5xl text-primary">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Technology" title="Tools we use every day" action={{ label: 'Full technology stack', href: '/technology-stack-expertise' }}>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 font-serif text-2xl text-ink-muted">
          {stack.map((t) => (
            <li key={t.name}>{t.name}</li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-muted">
          Not sure what you need? <Link href="/contact-global-offices" className="font-medium text-primary hover:underline">Talk to an engineer</Link>.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
