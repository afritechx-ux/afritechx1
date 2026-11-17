import { CtaBanner, PageHero, Section } from '@/components/ui';
import CaseStudyBrowser from './CaseStudyBrowser';
import { caseStudies } from './data';

export const metadata = {
  title: 'Case Studies',
  description: 'Selected Afrixtech projects across fintech, healthcare, e-commerce, SaaS and industrial IoT.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Projects that deliver measurable results"
        description="Each engagement represents our commitment to engineering excellence and measurable business impact."
      />
      <Section>
        <CaseStudyBrowser studies={caseStudies} />
      </Section>
      <CtaBanner title="Have a project in mind?" description="We'd like to hear about it. Share your goals and we'll propose an approach." />
    </>
  );
}
