import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/client-portal-dashboard-overview/',
        '/client-portal-document-repository/',
        '/client-portal-billing-invoices/',
        '/api/'
      ],
    },
    sitemap: 'https://afrixtech.com/sitemap.xml',
  };
}
