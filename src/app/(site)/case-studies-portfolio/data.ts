export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  details: string[];
  tags: string[];
};

/** Live projects only. Details are limited to what is visible on each site. */
export const caseStudies: CaseStudy[] = [
  {
    id: 'akoko-feeds',
    title: 'Akoko Feeds',
    category: 'Agriculture',
    description:
      'Brand and ordering website for a Kumasi poultry-feed mill, covering the full range for chicks, growers, layers and broilers.',
    image: '/work/akokofeeds.png',
    url: 'https://www.akokofeeds.com',
    details: [
      'Nine-product feed catalogue with a feeding guide',
      'Order requests that return a reference code',
      'WhatsApp and phone ordering built in',
    ],
    tags: ['Product catalogue', 'Ordering', 'WhatsApp'],
  },
  {
    id: 'akoko-erp',
    title: 'Akoko Solutions ERP',
    category: 'Business software',
    description:
      'A secure workspace that runs poultry, feed mill, soya, inventory, sales and finance operations for an agribusiness.',
    image: '/work/jokasfarms.png',
    url: 'https://www.jokasfarms.com',
    details: [
      'Access scoped by company, branch, farm, warehouse and production site',
      'Role and permission checks on sensitive operations',
      'Executive dashboards, exports and audit trails',
    ],
    tags: ['ERP', 'Role-based access', 'Dashboards'],
  },
  {
    id: 'jobwahala',
    title: 'JobWahala',
    category: 'Recruitment',
    description:
      'A job portal for Ghana and the rest of Africa where employers post openings and candidates apply, with pay and location shown up front.',
    image: '/work/jobwahala.png',
    url: 'https://www.jobwahala.com',
    details: [
      'Search by keyword, location, field and job type',
      'Internships, National Service and attachment listings',
      'Free job posting and a single board of applicants',
    ],
    tags: ['Job portal', 'Employer tools', 'Search'],
  },
  {
    id: 'anytime-foods',
    title: 'Anytime Foods',
    category: 'Food & retail',
    description:
      'Brand website for a ready-to-eat Ghanaian tomato stew, telling the product story and taking orders through WhatsApp.',
    image: '/work/anytimestew.png',
    url: 'https://anytimestew.com',
    details: [
      'Product, story and serving pages',
      'Direct ordering through WhatsApp',
      'Brand-led visual design',
    ],
    tags: ['Brand site', 'WhatsApp', 'Food'],
  },
];
