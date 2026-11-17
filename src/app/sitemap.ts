import { MetadataRoute } from 'next';

const baseUrl = 'https://afrixtech.com';
const paths = ["","/services-solutions","/enterprise-solutions-page","/enterprise-tech-architecture","/technology-stack-expertise","/case-studies-portfolio","/in-depth-case-study-page","/about-team-profile","/careers-open-roles","/tech-insights-blog-hub","/technical-resource-library","/developer-api-documentation-portal","/client-support-help-center","/service-status-uptime-page","/contact-global-offices","/request-a-quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
