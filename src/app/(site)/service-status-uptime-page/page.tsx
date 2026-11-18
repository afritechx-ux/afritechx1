import { Icon, PageHero, Section } from '@/components/ui';
import { CONTACT } from '@/data/site';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Service Status',
  description: 'Current operational status of Afrixtech services.',
};

const services = [
  { name: 'API Gateway', icon: 'api' },
  { name: 'Client Portal', icon: 'web' },
  { name: 'Content Delivery', icon: 'router' },
  { name: 'Database Clusters', icon: 'database' },
];

export default function StatusPage() {
  return (
    <>
      <PageHero
        eyebrow="Status"
        title="All systems operational"
        description="Operational status of Afrixtech services. If you are experiencing an issue not shown here, contact support."
      />
      <Section>
        <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {services.map((s) => (
            <li key={s.name} className="flex items-center justify-between p-5">
              <span className="flex items-center gap-3 font-medium">
                <Icon name={s.icon} className="text-[20px] text-ink-subtle" />
                {s.name}
              </span>
              <span className="badge badge-success">Operational</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          Need help? Email <a href={`mailto:${CONTACT.email}`} className="font-medium text-primary hover:underline">{CONTACT.email}</a>.
        </p>
      </Section>
    </>
  );
}
