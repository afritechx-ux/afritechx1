import { StatusPage } from '@/components/ui';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Request received',
};

export default function QuoteSuccessPage() {
  return (
    <StatusPage
      icon="check_circle"
      title="Request received"
      description="Thank you for reaching out. Our team is reviewing your project details and will be in touch soon."
      primary={{ label: 'Back to home', href: '/' }}
      secondary={{ label: 'View case studies', href: '/case-studies-portfolio' }}
    />
  );
}
