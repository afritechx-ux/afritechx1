import Link from 'next/link';
import { Icon, PageHeader } from '@/components/ui';

export const metadata = { title: 'Onboarding' };

const steps = [
  { title: 'Company profile', text: 'Tell us about your organisation and key contacts.', state: 'done' },
  { title: 'Legal & NDA', text: 'Review and sign the mutual NDA and master service agreement.', state: 'current' },
  { title: 'Billing & tax information', text: 'Provide billing contacts and tax details for invoicing.', state: 'upcoming' },
  { title: 'Technical audit & access', text: 'Share the environments and credentials we need to begin.', state: 'upcoming' },
  { title: 'Team allocation & kickoff', text: 'Meet your delivery team and agree the first sprint.', state: 'upcoming' },
] as const;

export default function OnboardingPage() {
  const done = steps.filter((s) => s.state === 'done').length;
  const pct = Math.round((done / steps.length) * 100);

  return (
    <>
      <PageHeader title="Onboarding" description="Complete these steps to begin your engagement." />

      <section className="card p-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-ink-muted">{done} of {steps.length} steps complete</span>
          <span className="font-medium">{pct}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-surface-raised" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Onboarding progress">
          <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
        </div>

        <ol className="mt-8 divide-y divide-line">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <span
                className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  s.state === 'done' ? 'bg-success/15 text-success' : s.state === 'current' ? 'bg-primary text-white' : 'bg-surface-raised text-ink-subtle'
                }`}
              >
                {s.state === 'done' ? <Icon name="check" className="text-[16px]" /> : i + 1}
              </span>
              <div>
                <h2 className={`text-sm font-semibold ${s.state === 'upcoming' ? 'text-ink-muted' : ''}`}>{s.title}</h2>
                <p className="mt-0.5 text-sm text-ink-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-6 text-sm text-ink-muted">
        Questions? <Link href="/contact-global-offices" className="font-medium text-primary hover:underline">Contact your onboarding specialist</Link>.
      </p>
    </>
  );
}
