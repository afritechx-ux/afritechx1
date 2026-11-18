import Link from 'next/link';
import { getPortalUser, money } from '@/lib/portal';
import { EmptyState, Icon, PageHeader } from '@/components/ui';

export const metadata = { title: 'Notifications' };
export const dynamic = 'force-dynamic';

export default async function NotificationsPage() {
  const user = await getPortalUser();

  const items = [
    ...user.projects.flatMap((p) =>
      p.milestones.map((m) => ({
        key: m.id,
        icon: m.status === 'COMPLETED' ? 'check_circle' : 'flag',
        title: m.status === 'COMPLETED' ? `Milestone completed: ${m.title}` : `Milestone ${m.status.replace('_', ' ').toLowerCase()}: ${m.title}`,
        detail: p.name,
        href: '/client-portal-project-milestones',
        at: m.updatedAt,
      })),
    ),
    ...user.invoices.map((i) => ({
      key: i.id,
      icon: 'receipt_long',
      title: `Invoice ${i.status === 'PAID' ? 'paid' : 'issued'}: ${money(i.amount)}`,
      detail: `Due ${new Date(i.dueDate).toLocaleDateString()}`,
      href: `/detailed-invoice-view?id=${i.id}`,
      at: i.updatedAt,
    })),
  ].sort((a, b) => +new Date(b.at) - +new Date(a.at));

  return (
    <>
      <PageHeader title="Notifications" description="Recent activity across your projects and billing." />
      <div className="card overflow-hidden">
        {items.length === 0 ? (
          <EmptyState icon="notifications" title="You're all caught up" text="New project and billing activity will show up here." />
        ) : (
          <ul className="divide-y divide-line">
            {items.map((n) => (
              <li key={n.key}>
                <Link href={n.href} className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-surface-raised">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={n.icon} className="text-[20px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-sm text-ink-muted">{n.detail}</p>
                  </div>
                  <time className="shrink-0 text-xs text-ink-subtle" dateTime={new Date(n.at).toISOString()}>
                    {new Date(n.at).toLocaleDateString()}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
