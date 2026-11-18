import { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/articles';
import { HIDDEN_PATHS, SITE } from '@/data/site';

// Real, public pages only. Pages in HIDDEN_PATHS and draft articles are left out.
const paths = [
  '',
  '/services-solutions',
  '/case-studies-portfolio',
  '/enterprise-solutions-page',
  '/enterprise-tech-architecture',
  '/technology-stack-expertise',
  '/about-team-profile',
  '/tech-insights-blog-hub',
  '/contact-global-offices',
  '/request-a-quote',
].filter((p) => !HIDDEN_PATHS.includes(p));

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }));

  const articles = ARTICLES.filter((a) => !a.draft).map((a) => ({
    url: `${SITE.url}/tech-insights-blog-hub/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
