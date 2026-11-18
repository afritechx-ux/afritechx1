import type { NextConfig } from "next";

// Retired mockup / duplicate pages now point at their canonical page.
const retired: Record<string, string> = {
  'blog-post-article-view': '/tech-insights-blog-hub',
  'mobile-homepage-landing-page': '/',
  'mobile-light-mode-homepage': '/',
  'homepage-light-mode': '/',
  'mobile-testimonials-section': '/',
  'customer-testimonials-carousel': '/',
  'light-mode-success-modal': '/',
  'newsletter-success-modal': '/',
  'brand-identity-ui-kit': '/',
  'custom-icon-system-set': '/',
  'mobile-client-portal-dashboard': '/client-portal-dashboard-overview',
  'client-portal-light-mode': '/client-portal-dashboard-overview',
  'finance-portal-light-mode': '/client-portal-finance-overview',
  'mobile-project-milestones': '/client-portal-project-milestones',
  'mobile-onboarding-checklist': '/client-onboarding-checklist-overview',
  'mobile-notifications-feed': '/portal-notifications-center',
  'mobile-settings-profile': '/portal-user-settings-customization',
  'mobile-service-status-feed': '/service-status-uptime-page',
  'mobile-api-documentation-view': '/developer-api-documentation-portal',
  'mobile-help-center-hub': '/client-support-help-center',
  'mobile-help-center-article': '/client-support-help-center',
  'mobile-live-whiteboard': '/client-portal-dashboard-overview',
  'live-whiteboard-collaboration': '/client-portal-dashboard-overview',
  'interactive-innovation-roadmap': '/about-team-profile',
  'request-a-quote-form-step-1': '/request-a-quote',
  'request-a-quote-form-step-2': '/request-a-quote',
  'request-a-quote-form-step-3': '/request-a-quote',
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(retired).map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
