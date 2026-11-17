import { CtaBanner, PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Technology Stack',
  description: 'The frontend, backend, cloud and AI technologies Afrixtech uses to build enterprise software.',
};

const groups = [
  { title: 'Frontend', items: [
    ['React', 'Interactive, scalable web applications with complex state and optimized rendering.'],
    ['Next.js', 'Server-side rendering and static generation for performance and SEO.'],
    ['TypeScript', 'Type-safe codebases with fewer runtime errors.'],
    ['Tailwind CSS', 'Utility-first styling for consistent, responsive design systems.'],
    ['Vue.js / Angular', 'Enterprise front ends where they fit your team and roadmap.'],
  ] },
  { title: 'Backend', items: [
    ['Node.js', 'APIs and services with a shared language across the stack.'],
    ['Python', 'Data pipelines, automation and machine learning services.'],
    ['PostgreSQL', 'Reliable relational storage with strong consistency.'],
    ['REST & GraphQL', 'Well-documented, versioned APIs.'],
  ] },
  { title: 'Cloud & DevOps', items: [
    ['AWS & Azure', 'Secure, scalable cloud infrastructure.'],
    ['Docker & Kubernetes', 'Portable, orchestrated workloads.'],
    ['CI/CD', 'Automated testing and deployment pipelines.'],
  ] },
  { title: 'AI & Machine Learning', items: [
    ['TensorFlow', 'Predictive models and analytics.'],
    ['LLM integration', 'Intelligent automation and natural-language features.'],
  ] },
];

export default function TechStackPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Our technology stack"
        description="Modern, proven tools chosen for scalability, security and maintainability."
      />
      <Section>
        <div className="grid gap-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">{g.title}</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map(([name, text]) => (
                  <li key={name} className="cell">
                    <h3 className="font-semibold tracking-tight">{name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <CtaBanner title="Need a different stack?" description="We adapt to your environment. Tell us what you run today." />
    </>
  );
}
