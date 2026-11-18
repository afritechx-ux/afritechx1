import Link from 'next/link';

export const metadata = {
  title: 'Building Scalable APIs for Enterprise Applications',
  description: 'Statelessness, caching and rate limiting: the fundamentals of APIs that scale.',
};

const code = `const express = require('express');
const app = express();

// Middleware for stateless authentication
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Unauthorized');
  // Verify JWT token here...
  next();
});`;

export default function BlogPostPage() {
  return (
    <article className="pt-28 pb-8 lg:pt-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-subtle">
            <Link href="/tech-insights-blog-hub" className="hover:text-ink">Insights</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-muted">Engineering</span>
          </nav>

          <div className="mt-6 flex gap-2">
            <span className="badge badge-primary">Engineering</span>
            <span className="badge">Architecture</span>
          </div>
          <h1 className="h-display mt-4 text-3xl sm:text-5xl">Building scalable APIs for enterprise applications</h1>
          <p className="mt-4 text-sm text-ink-subtle">By Afrixtech Engineering</p>

          <div className="mt-10 space-y-6 text-[17px] leading-8 text-ink-muted">
            <p>
              In today&apos;s hyper-connected ecosystem, an API is rarely just an interface; it&apos;s the central nervous system of your
              enterprise architecture. As demand grows and microservices proliferate, ensuring your APIs scale without compromising
              performance or security is paramount.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight text-ink">1. The fundamentals of statelessness</h2>
            <p>
              The cornerstone of a scalable RESTful architecture is statelessness. Every request must contain all the information the
              server needs to fulfil it. That removes the need to store session state, so you can add instances behind a load balancer freely.
            </p>
            <pre className="overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-sm leading-relaxed text-ink">
              <code>{code}</code>
            </pre>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight text-ink">2. Caching strategies</h2>
            <p>
              Not every request needs to reach your database. Caching at the edge, application and database layers can sharply reduce
              latency and load. Consider Redis or Memcached for application-level caching and a CDN for static assets and cacheable API responses.
            </p>

            <h2 className="pt-4 text-2xl font-semibold tracking-tight text-ink">3. Rate limiting &amp; throttling</h2>
            <p>
              Rate limiting protects your API from abuse and ensures fair usage across clients. It guards against denial-of-service
              (intentional or accidental) and keeps quality of service predictable.
            </p>
          </div>

          <div className="card mt-14 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold tracking-tight">Planning an API platform?</h2>
              <p className="mt-1 text-sm text-ink-muted">Our engineers can review your architecture.</p>
            </div>
            <Link href="/contact-global-offices" className="btn btn-primary">Talk to an engineer</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
