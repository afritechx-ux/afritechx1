import Link from 'next/link';
import { CtaBanner, Icon, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Case Study: Next-Gen Fintech Ecosystem',
  description: 'How Afrixtech rebuilt a legacy financial platform as a scalable, cloud-native microservices ecosystem.',
};

const stack = [
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Redux'] },
  { title: 'Backend & cloud', items: ['Node.js', 'AWS', 'PostgreSQL', 'Redis'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD'] },
];

export default function CaseStudyDetailPage() {
  return (
    <>
      <PageHero
        eyebrow="Case study · Financial services"
        title="Next-gen fintech ecosystem"
        description="A complete architectural overhaul and redesign of a legacy financial platform."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-ink-subtle">
          <Link href="/case-studies-portfolio" className="hover:text-ink">Case studies</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-muted">Next-gen fintech ecosystem</span>
        </nav>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <article>
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <Icon name="warning" className="text-warning" /> The challenge
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                The client&apos;s legacy monolithic architecture struggled to scale during peak trading hours. Transaction latency was increasing,
                hurting user experience, and an outdated interface caused high drop-off during onboarding.
              </p>
            </article>
            <article>
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <Icon name="lightbulb" className="text-primary" /> Our solution
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                We architected a cloud-native, microservices-based ecosystem on AWS, with a modern React frontend and clear data
                visualization. A Node.js backend handles concurrent requests reliably, while automated CI/CD pipelines allow frequent, low-risk releases.
              </p>
            </article>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Technical architecture</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {stack.map((s) => (
                  <div key={s.title} className="card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">{s.title}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((i) => <li key={i} className="badge">{i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="card h-fit p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">Project details</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="text-ink-subtle">Industry</dt><dd className="font-medium">Finance / Technology</dd></div>
              <div><dt className="text-ink-subtle">Services</dt><dd className="font-medium">Architecture, engineering, UX</dd></div>
              <div><dt className="text-ink-subtle">Cloud</dt><dd className="font-medium">AWS</dd></div>
            </dl>
          </aside>
        </div>
      </Section>

      <CtaBanner title="Ready for similar results?" description="Let's discuss how we can modernize your platform." primary={{ label: 'Contact our team', href: '/contact-global-offices' }} />
    </>
  );
}
