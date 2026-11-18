import { CtaBanner, PageHero, Section } from '@/components/ui';
import CaseStudyBrowser from './CaseStudyBrowser';
import { PROJECTS } from '@/data/site';

export const metadata = {
  title: 'Case Studies',
  description: 'Websites and software built by Afrixtech in Ghana: a feed-mill ordering site, an agribusiness ERP, a job portal and a food brand.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Work that is live today"
        description="A selection of products we have designed and built. Each one is running and open to visit."
      />
      <Section>
        <CaseStudyBrowser projects={PROJECTS} />
      </Section>
      <CtaBanner title="Have a project in mind?" description="We'd like to hear about it. Share your goals and we'll propose an approach." />
    </>
  );
}
