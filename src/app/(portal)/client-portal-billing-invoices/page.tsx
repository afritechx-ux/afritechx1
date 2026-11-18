import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { EmptyState, PageHeader, StatusBadge } from '@/components/ui';

export const metadata = { title: 'Invoices' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const money = (n: number) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default async function InvoicesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { invoices: { orderBy: { dueDate: 'desc' } } },
  });
  if (!user) redirect('/login');

  const invoices = user.invoices;

  return (
    <>
      <PageHeader title="Invoices" description="View and download your service invoices." />

      <div className="card overflow-hidden">
        {invoices.length === 0 ? (
          <EmptyState icon="receipt_long" title="No invoices yet" text="Invoices issued to your account will appear here." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-line bg-surface-raised text-xs uppercase tracking-wider text-ink-subtle">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Invoice</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Issued</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Due</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Amount</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-5 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-surface-raised/60">
                    <td className="px-5 py-4 font-medium">INV-{inv.id.substring(0, 8).toUpperCase()}</td>
                    <td className="px-5 py-4 text-ink-muted">{new Date(inv.createdAt).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-ink-muted">{new Date(inv.dueDate).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-right font-medium tabular-nums">{money(inv.amount)}</td>
                    <td className="px-5 py-4"><StatusBadge status={inv.status} /></td>
                    <td className="px-5 py-4 text-right">
                      <Link href={`/detailed-invoice-view?id=${inv.id}`} className="font-medium text-primary hover:underline">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
