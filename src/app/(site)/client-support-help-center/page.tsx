import Link from 'next/link';
import { IconTile, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Help Center',
  description: 'Find answers, documentation and support for your Afrixtech project.',
};

const topics = [
  { icon: 'rocket_launch', title: 'Project onboarding', text: 'Getting started with your new Afrixtech project.', href: '/client-onboarding-checklist-overview' },
  { icon: 'description', title: 'Technical documentation', text: 'Guides on our software stack and architecture.', href: '/technology-stack-expertise' },
  { icon: 'receipt_long', title: 'Billing & invoices', text: 'Managing your account, invoices and payments.', href: '/client-portal-billing-invoices' },
  { icon: 'api', title: 'API guides', text: 'Documentation for Afrixtech APIs.', href: '/developer-api-documentation-portal' },
];

export default function HelpCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="How can we help you today?"
        description="Browse help topics below, or contact our support team directly."
      />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <li key={t.title}>
              <Link href={t.href} className="card card-hover flex h-full flex-col p-6">
                <IconTile name={t.icon} />
                <h3 className="mt-5 font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.text}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="card mt-10 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="mt-1 text-sm text-ink-muted">Our support team is here to help you resolve issues quickly.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:afritechx@gmail.com" className="btn btn-secondary">Email support</a>
            <Link href="/contact-global-offices" className="btn btn-primary">Contact us</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
