import { CtaBanner, PageHero, Section } from '@/components/ui';
import { CONTACT } from '@/data/site';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Resources',
  description: 'Technical guides, whitepapers and strategic insights from Afrixtech experts.',
};

const resources = [
  { type: 'Whitepaper', title: 'Cloud Native Architecture Patterns', text: 'Essential patterns for building scalable, resilient and maintainable cloud-native applications, with reference architectures for AWS and Azure.' },
  { type: 'Whitepaper', title: 'Zero Trust Security Implementation', text: 'A practical framework for moving from perimeter-based security to Zero Trust in hybrid cloud environments.' },
  { type: 'Technical guide', title: 'Microservices Anti-Patterns', text: 'Common mistakes teams make when migrating to microservices: distributed monoliths, poor bounded contexts and service coupling.' },
  { type: 'Technical guide', title: 'DevSecOps Integration Playbook', text: 'Embedding security into CI/CD pipelines without slowing developer velocity: tools, techniques and cultural shifts.' },
  { type: 'Industry report', title: 'The State of AI in Enterprise', text: 'How enterprises are adopting generative AI, overcoming security hurdles and measuring return on machine learning initiatives.' },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Whitepapers & technical guides"
        description="Deep-dive guides and strategic insights from our team to help you navigate modern enterprise software development."
      />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {resources.map((r) => (
            <li key={r.title} className="cell flex flex-col">
              <span className="badge badge-primary self-start">{r.type}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{r.text}</p>
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Resource request: ' + r.title)}`}
                className="btn btn-secondary mt-5 self-start"
              >
                Request this resource
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBanner title="Need a customized architecture strategy?" description="Speak with our senior architects about accelerating your digital transformation." primary={{ label: 'Consult an expert', href: '/contact-global-offices' }} secondary={{ label: 'Technology stack', href: '/technology-stack-expertise' }} />
    </>
  );
}
