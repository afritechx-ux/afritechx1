import { CtaBanner, Icon, IconTile, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Enterprise Solutions',
  description: 'Scalable cloud infrastructure, security-first engineering and legacy modernization for global enterprises.',
};

const capabilities = [
  { icon: 'cloud_sync', title: 'Cloud infrastructure & DevOps', text: 'Automated CI/CD pipelines and cloud-native architectures tailored for high-availability enterprise workloads.' },
  { icon: 'shield_lock', title: 'Security-first engineering', text: 'Zero-trust principles, secure development practices and review of your systems against recognised frameworks.' },
  { icon: 'update', title: 'Legacy modernization', text: 'Staged, low-risk migration of aging systems to modern, maintainable and cost-effective platforms.' },
];

const practices = [
  'Zero-trust access and least-privilege design',
  'Encryption in transit and at rest',
  'OWASP-aligned secure development lifecycle',
  'Audit logging and monitoring built in',
  'Dependency and vulnerability scanning in CI',
  'Documented incident response process',
];

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise"
        title="Scalable architecture for global enterprises"
        description="Future-proof your business with robust cloud infrastructure, security-first engineering and careful legacy modernization."
        primary={{ label: 'Talk to an expert', href: '/contact-global-offices' }}
        secondary={{ label: 'View case studies', href: '/case-studies-portfolio' }}
      />

      <Section eyebrow="Capabilities" title="Built for performance, security and scale">
        <ul className="grid gap-4 md:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title} className="cell">
              <IconTile name={c.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="Security" title="How we protect your data" description="The practices we apply on every enterprise engagement.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {practices.map((p) => (
            <li key={p} className="row flex items-center gap-3 py-3 text-sm">
              <Icon name="check_circle" className="text-[20px] text-success" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          Need to meet a specific compliance requirement?{' '}
          <a href="/contact-global-offices" className="font-medium text-primary hover:underline">Tell us about it</a>.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
