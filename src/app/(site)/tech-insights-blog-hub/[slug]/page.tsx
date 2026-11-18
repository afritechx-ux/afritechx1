import Link from 'next/link';
import { notFound } from 'next/navigation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { ARTICLES, getArticle } from '@/data/articles';
import { PACKAGES, whatsappLink } from '@/data/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    // Drafts stay out of search engines until `draft` is set to false in src/data/articles.ts.
    robots: a.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const pkg = PACKAGES[0];

  return (
    <article className="pt-28 pb-16 lg:pt-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <Link href="/tech-insights-blog-hub" className="hover:text-ink">Insights</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{a.category}</span>
          </nav>

          {a.draft && (
            <p role="note" className="mt-6 border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-ink">
              <strong>Draft.</strong> This article has not been published yet. It is hidden from search engines.
            </p>
          )}

          <div className="mt-6 flex items-center gap-2">
            <span className="badge badge-primary">{a.category}</span>
            {a.draft && <span className="badge badge-warning">Draft</span>}
          </div>
          <h1 className="h-display mt-4 text-4xl sm:text-5xl">{a.title}</h1>
          <p className="mt-4 text-sm text-ink-muted">By Afrixtech</p>

          <div className="mt-10 space-y-6 text-[17px] leading-8 text-ink-muted">
            {a.body.map((b, i) => {
              if (b.type === 'h2') {
                return <h2 key={i} className="pt-4 font-serif text-3xl tracking-tight text-ink">{b.text}</h2>;
              }
              if (b.type === 'ul') {
                return (
                  <ul key={i} className="space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-3 size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{b.text}</p>;
            })}
          </div>

          <aside className="mt-14 bg-ink p-8 text-canvas" aria-label="Get the Corporate Website package">
            <p className="font-serif text-3xl tracking-tight">{pkg.name}: {pkg.price} flat</p>
            <p className="mt-3 max-w-lg text-canvas/80">
              Up to 5 pages, a free domain name, 1 year of hosting, a mobile-friendly design, a contact form and a WhatsApp button.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(pkg.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-12 bg-canvas px-6 text-ink hover:opacity-90"
              >
                <WhatsAppIcon className="size-[18px]" />
                Get this package on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/#packages" className="btn h-12 border border-canvas/40 px-6 text-canvas hover:border-canvas">
                See all packages
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
