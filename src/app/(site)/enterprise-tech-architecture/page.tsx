import { CtaBanner, IconTile, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Enterprise Architecture',
  description: 'Our approach to resilient, event-driven microservices architecture for modern enterprises.',
};

const layers = [
  { icon: 'memory', title: 'Compute', text: 'Containerized workloads orchestrated with Kubernetes across major cloud providers.' },
  { icon: 'database', title: 'Data layer', text: 'Distributed PostgreSQL with Redis caching for fast reads and reliable persistence.' },
  { icon: 'public', title: 'Delivery', text: 'Global edge CDN with web application firewall integration.' },
  { icon: 'lock', title: 'Security', text: 'Zero-trust model with mutual TLS encryption between services.' },
];

const principles = [
  { title: 'Decoupled services', text: 'Event-driven communication keeps services independent so teams can ship and scale them separately.' },
  { title: 'Horizontal scaling', text: 'Stateless services scale out behind load balancers to absorb traffic spikes.' },
  { title: 'Multi-region resilience', text: 'Redundancy across regions removes single points of failure.' },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title="Enterprise-grade architecture"
        description="Built for scale, security and performance. A resilient, event-driven microservices approach designed for modern enterprises."
        primary={{ label: 'Discuss your architecture', href: '/contact-global-offices' }}
      />

      <Section eyebrow="Principles" title="Scalable microservices topology">
        <ul className="grid gap-4 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="Reference stack" title="The layers we build with">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((l) => (
            <li key={l.title} className="card p-6">
              <IconTile name={l.icon} />
              <h3 className="mt-5 font-semibold tracking-tight">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{l.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
