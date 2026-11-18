import { StatusPage } from '@/components/ui';

export const metadata = { title: 'Payment received' };

export default function PaymentSuccessPage() {
  return (
    <StatusPage
      icon="check_circle"
      title="Payment received"
      description="Thank you. Your payment has been recorded and will be reflected on your account shortly."
      primary={{ label: 'Return to overview', href: '/client-portal-dashboard-overview' }}
      secondary={{ label: 'View invoices', href: '/client-portal-billing-invoices' }}
    />
  );
}
