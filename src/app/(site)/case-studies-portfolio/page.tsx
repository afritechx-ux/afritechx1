import { CtaBanner, PageHero, Section } from '@/components/ui';
import CaseStudyBrowser from './CaseStudyBrowser';
import { caseStudies } from './data';

export const metadata = {
  title: 'Case Studies',
  description: 'Live products built by Afrixtech: agribusiness software, a job portal, and food brands.',
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
        <CaseStudyBrowser studies={caseStudies} />
      </Section>
      <CtaBanner title="Have a project in mind?" description="We'd like to hear about it. Share your goals and we'll propose an approach." />
    </>
  );
}
