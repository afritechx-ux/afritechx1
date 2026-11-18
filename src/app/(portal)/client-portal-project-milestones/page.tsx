import { getPortalUser } from '@/lib/portal';
import { EmptyState, Icon, PageHeader, StatusBadge } from '@/components/ui';

export const metadata = { title: 'Milestones' };
export const dynamic = 'force-dynamic';

export default async function MilestonesPage() {
  const user = await getPortalUser();

  return (
    <>
      <PageHeader title="Milestones" description="Track the progress of each project phase." />

      {user.projects.length === 0 ? (
        <div className="card">
          <EmptyState icon="flag" title="No projects yet" text="Project milestones will appear here once your engagement begins." />
        </div>
      ) : (
        <div className="space-y-6">
          {user.projects.map((p) => (
            <section key={p.id} className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
                  {p.description && <p className="mt-1 text-sm text-ink-muted">{p.description}</p>}
                </div>
                <StatusBadge status={p.status} />
              </div>
              <ol className="mt-6 space-y-0">
                {p.milestones.map((m, i) => (
                  <li key={m.id} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < p.milestones.length - 1 && <span className="absolute left-[11px] top-7 h-[calc(100%-1.75rem)] w-px bg-line-strong" aria-hidden="true" />}
                    <Icon
                      name={m.status === 'COMPLETED' ? 'check_circle' : m.status === 'IN_PROGRESS' ? 'pending' : 'radio_button_unchecked'}
                      className={`text-[24px] ${m.status === 'COMPLETED' ? 'text-success' : m.status === 'IN_PROGRESS' ? 'text-primary' : 'text-ink-subtle'}`}
                    />
                    <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium">{m.title}</p>
                      <StatusBadge status={m.status} />
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
