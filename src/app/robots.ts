import { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/login',
        '/client-portal-dashboard-overview',
        '/client-portal-document-repository',
        '/client-portal-billing-invoices',
        '/client-portal-finance-overview',
        '/client-portal-project-milestones',
        '/client-onboarding-checklist-overview',
        '/portal-notifications-center',
        '/portal-user-settings-customization',
        '/detailed-invoice-view',
        '/payment-success-confirmation',
      ],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
