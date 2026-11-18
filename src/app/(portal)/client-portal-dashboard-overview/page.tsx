import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { EmptyState, Icon, PageHeader, StatusBadge } from '@/components/ui';

export const metadata = { title: 'Overview' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');

  let user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { projects: { include: { milestones: true } }, invoices: true },
  });

  // First run: create the account with a starter project so the portal is not empty
  if (!user) {
    await prisma.user.create({
      data: {
        email: session.user.email,
        name: session.user.name || 'Client',
        company: 'Acme Corp',
        role: 'CLIENT',
        image: session.user.image || undefined,
        projects: {
          create: {
            name: 'Mobile App Development',
            description: 'Sprint 3 - Backend Integration',
            progress: 65,
            status: 'ON_TRACK',
            milestones: {
              create: [
                { title: 'API Design', status: 'COMPLETED' },
                { title: 'Database Setup', status: 'IN_PROGRESS' },
                { title: 'Auth Module', status: 'PENDING' },
              ],
            },
          },
        },
      },
    });
    user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { projects: { include: { milestones: true } }, invoices: true },
    });
  }
  if (!user) redirect('/login');

  const project = user.projects[0];
  const milestones = project?.milestones ?? [];
  const done = milestones.filter((m) => m.status === 'COMPLETED').length;
  const outstanding = user.invoices.filter((i) => i.status !== 'PAID').reduce((sum, i) => sum + i.amount, 0);

  const summary = [
    { label: 'Active projects', value: String(user.projects.length), icon: 'folder_open' },
    { label: 'Milestones complete', value: milestones.length ? `${done} / ${milestones.length}` : '—', icon: 'flag' },
    { label: 'Outstanding balance', value: `$${outstanding.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: 'receipt_long' },
  ];

  return (
    <>
      <PageHeader title="Overview" description={`Welcome back${user.name ? `, ${user.name.replace(/\.$/, '')}` : ''}. Here's where your projects stand.`}>
        <Link href="/contact-global-offices" className="btn btn-secondary">Contact your team</Link>
      </PageHeader>

      <ul className="grid gap-4 sm:grid-cols-3">
        {summary.map((s) => (
          <li key={s.label} className="card flex items-center gap-4 p-5">
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name={s.icon} className="text-[22px]" />
            </span>
            <div>
              <p className="text-xs text-ink-subtle">{s.label}</p>
              <p className="text-xl font-semibold tracking-tight">{s.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <section className="card mt-6">
        {project ? (
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{project.name}</h2>
                {project.description && <p className="mt-1 text-sm text-ink-muted">{project.description}</p>}
              </div>
              <StatusBadge status={project.status} />
            </div>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-ink-muted">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface-raised" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100} aria-label="Project progress">
                <div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
              </div>
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-ink-subtle">Milestones</h3>
            <ul className="mt-3 divide-y divide-line">
              {milestones.map((m) => (
                <li key={m.id} className="flex items-center justify-between py-3 text-sm">
                  <span className="flex items-center gap-3">
                    <Icon
                      name={m.status === 'COMPLETED' ? 'check_circle' : m.status === 'IN_PROGRESS' ? 'pending' : 'radio_button_unchecked'}
                      className={`text-[20px] ${m.status === 'COMPLETED' ? 'text-success' : m.status === 'IN_PROGRESS' ? 'text-primary' : 'text-ink-subtle'}`}
                    />
                    {m.title}
                  </span>
                  <StatusBadge status={m.status} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <EmptyState icon="folder_open" title="No active projects" text="Your projects will appear here once your engagement begins." />
        )}
      </section>
    </>
  );
}
