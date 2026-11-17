import { getPortalUser } from '@/lib/portal';
import { PageHeader } from '@/components/ui';
import AppearanceSetting from './AppearanceSetting';

export const metadata = { title: 'Settings' };
export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const user = await getPortalUser();

  const profile = [
    ['Name', user.name || '—'],
    ['Email', user.email || '—'],
    ['Company', user.company || '—'],
    ['Role', user.role.charAt(0) + user.role.slice(1).toLowerCase()],
  ];

  return (
    <>
      <PageHeader title="Settings" description="Your account details and preferences." />

      <div className="max-w-2xl space-y-6">
        <section className="card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Profile</h2>
          <dl className="mt-4 divide-y divide-line text-sm">
            {profile.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className="text-ink-muted">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-ink-subtle">To change profile details, contact your Afrixtech account manager.</p>
        </section>

        <section className="card flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Appearance</h2>
            <p className="mt-1 text-sm text-ink-muted">Choose how the portal looks on this device.</p>
          </div>
          <AppearanceSetting />
        </section>
      </div>
    </>
  );
}
