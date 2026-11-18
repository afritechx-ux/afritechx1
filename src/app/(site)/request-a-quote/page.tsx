import { PageHero } from '@/components/ui';
import QuoteForm from './QuoteForm';

export const metadata = {
  title: 'Request a Quote',
  description: 'Tell us about your project and receive a tailored proposal from Afrixtech.',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you're building"
        description="Three short steps. We'll review your request and reply with next steps."
      />
      <section className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
