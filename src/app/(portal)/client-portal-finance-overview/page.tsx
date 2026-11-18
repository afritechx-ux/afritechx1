import Link from 'next/link';
import { getPortalUser, money } from '@/lib/portal';
import { EmptyState, PageHeader, StatusBadge } from '@/components/ui';

export const metadata = { title: 'Finance' };
export const dynamic = 'force-dynamic';

export default async function FinancePage() {
  const user = await getPortalUser();
  const invoices = user.invoices;

  const paid = invoices.filter((i) => i.status === 'PAID').reduce((s, i) => s + i.amount, 0);
  const open = invoices.filter((i) => i.status !== 'PAID');
  const outstanding = open.reduce((s, i) => s + i.amount, 0);
  const next = [...open].sort((a, b) => +new Date(a.dueDate) - +new Date(b.dueDate))[0];

  const cards = [
    { label: 'Total paid', value: money(paid), note: `${invoices.filter((i) => i.status === 'PAID').length} paid invoices` },
    { label: 'Outstanding', value: money(outstanding), note: `${open.length} awaiting payment` },
    { label: 'Next due', value: next ? money(next.amount) : '—', note: next ? `Due ${new Date(next.dueDate).toLocaleDateString()}` : 'Nothing due' },
  ];

  return (
    <>
      <PageHeader title="Finance" description="Your billing history and upcoming payments.">
        <Link href="/client-portal-billing-invoices" className="btn btn-secondary">All invoices</Link>
      </PageHeader>

      <ul className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <li key={c.label} className="card p-5">
            <p className="text-xs text-ink-subtle">{c.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">{c.value}</p>
            <p className="mt-1 text-xs text-ink-muted">{c.note}</p>
          </li>
        ))}
      </ul>

      <section className="card mt-6 overflow-hidden">
        <h2 className="border-b border-line px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em]">Recent invoices</h2>
        {invoices.length === 0 ? (
          <EmptyState icon="account_balance" title="No billing activity" text="Invoices and payments will be summarised here." />
        ) : (
          <ul className="divide-y divide-line">
            {invoices.slice(0, 6).map((inv) => (
              <li key={inv.id} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                <div>
                  <p className="font-medium">INV-{inv.id.substring(0, 8).toUpperCase()}</p>
                  <p className="text-ink-subtle">Due {new Date(inv.dueDate).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium tabular-nums">{money(inv.amount)}</span>
                  <StatusBadge status={inv.status} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
