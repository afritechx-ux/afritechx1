import Link from 'next/link';
import { PageHero, Section } from '@/components/ui';

export const metadata = {
  title: 'Insights',
  description: 'Thoughts and ideas from Afrixtech engineers, designers and strategists on cloud, AI, security and engineering culture.',
};

const posts = [
  {
    category: 'Enterprise Security',
    title: 'Securing the Modern Enterprise: Zero Trust Architecture in 2024',
    excerpt: 'As cyber threats evolve, perimeter-based security is no longer sufficient. Discover how a Zero Trust architecture can protect critical assets while enabling remote work and cloud adoption.',
    author: 'Sarah Jenkins',
    featured: true,
  },
  {
    category: 'Artificial Intelligence',
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'How large language models and AI-assisted coding tools are changing business operations and engineering velocity.',
    author: 'David Okonkwo',
  },
  {
    category: 'Cloud Computing',
    title: 'Migrating Legacy Systems to AWS: A Practical Guide',
    excerpt: 'A breakdown of our methodology for moving monolithic applications to scalable microservices on AWS.',
    author: 'Amara Diop',
  },
  {
    category: 'Engineering Culture',
    title: 'Building High-Performance Remote Engineering Teams',
    excerpt: 'Strategies for collaboration, code quality and culture across distributed time zones in Africa and Europe.',
    author: 'James Ndlovu',
  },
];

export default function InsightsPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas from the people building it"
        description="Thoughts, stories and practical guidance from our engineers, designers and strategists."
      />
      <Section>
        <Link href="/blog-post-article-view" className="card card-hover block p-6 sm:p-10">
          <span className="badge badge-primary">{featured.category}</span>
          <h2 className="h-display mt-4 max-w-3xl text-2xl sm:text-3xl">{featured.title}</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">{featured.excerpt}</p>
          <p className="mt-6 text-sm text-ink-subtle">By {featured.author}</p>
        </Link>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((p) => (
            <li key={p.title}>
              <Link href="/blog-post-article-view" className="card card-hover flex h-full flex-col p-6">
                <span className="badge self-start">{p.category}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                <p className="mt-5 text-sm text-ink-subtle">By {p.author}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
