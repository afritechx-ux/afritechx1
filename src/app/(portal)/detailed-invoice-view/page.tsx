import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { getPortalUser, money } from '@/lib/portal';
import { PageHeader, StatusBadge } from '@/components/ui';
import { CONTACT } from '@/data/site';

export const metadata = { title: 'Invoice' };
export const dynamic = 'force-dynamic';

export default async function InvoicePage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const user = await getPortalUser();
  if (!id) notFound();

  // Scope to the signed-in client so one client can never read another's invoice
  const invoice = await prisma.invoice.findFirst({ where: { id, clientId: user.id } });
  if (!invoice) notFound();

  const rows = [
    ['Invoice number', `INV-${invoice.id.substring(0, 8).toUpperCase()}`],
    ['Billed to', user.company || user.name || user.email || '—'],
    ['Issued', new Date(invoice.createdAt).toLocaleDateString()],
    ['Due date', new Date(invoice.dueDate).toLocaleDateString()],
  ];

  return (
    <>
      <PageHeader title={`Invoice INV-${invoice.id.substring(0, 8).toUpperCase()}`} description="Invoice details">
        <Link href="/client-portal-billing-invoices" className="btn btn-secondary">Back to invoices</Link>
      </PageHeader>

      <section className="card max-w-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-ink-muted">Status</p>
          <StatusBadge status={invoice.status} />
        </div>
        <dl className="mt-6 divide-y divide-line text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between py-3">
              <dt className="text-ink-muted">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex items-center justify-between border-t border-line-strong pt-5">
          <span className="font-medium">Total amount</span>
          <span className="text-2xl font-semibold tabular-nums">{money(invoice.amount)}</span>
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          To pay by wire transfer, include the invoice number in the payment reference, or contact{' '}
          <a href={`mailto:${CONTACT.email}`} className="font-medium text-primary hover:underline">{CONTACT.email}</a>.
        </p>
      </section>
    </>
  );
}
