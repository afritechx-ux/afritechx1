import Link from 'next/link';
import { PageHero, Section } from '@/components/ui';
import { ARTICLES } from '@/data/articles';

export const metadata = {
  title: 'Insights: Websites and Software for Ghanaian Businesses',
  description:
    'Plain-language guides on website costs, online ordering and getting your Ghanaian business online, from the Afrixtech team in Kumasi.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides for businesses getting online"
        description="Practical, plain-language articles on websites, online ordering and software for businesses in Ghana."
      />
      <Section>
        <ul className="border-t border-line">
          {ARTICLES.map((a) => (
            <li key={a.slug} className="row">
              <Link href={`/tech-insights-blog-hub/${a.slug}`} className="group grid gap-3 py-8 lg:grid-cols-[12rem_1fr] lg:gap-10">
                <div className="flex items-center gap-2">
                  <span className="eyebrow">{a.category}</span>
                  {a.draft && <span className="badge badge-warning">Draft</span>}
                </div>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight transition-colors group-hover:text-primary sm:text-4xl">{a.title}</h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read article
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
