/**
 * All editable site content lives here: contact details, packages and prices,
 * testimonials, team, projects, navigation and footer links.
 *
 * Search this file for "TODO" to find every placeholder that still needs real content.
 * Blocks with `enabled: false` (or an empty value) are hidden on the site until filled in.
 */

/* ── Company ───────────────────────────────────────────────────── */

export const SITE = {
  name: 'Afrixtech',
  url: 'https://afrixtech.com',
  title: 'Afrixtech | Website & Software Development in Kumasi, Ghana',
  description:
    'Afrixtech builds websites, e-commerce stores, ERP and custom software for businesses in Ghana. Corporate websites from GH₵999.',
};

/* ── Contact ───────────────────────────────────────────────────── */

export const CONTACT = {
  email: 'hello@afrixtech.com',
  phones: [
    { label: 'Sales', display: '+233 245 171 589', e164: '+233245171589' },
    { label: 'Support', display: '+233 209 624 647', e164: '+233209624647' },
  ],
  whatsapp: {
    number: '233245171589', // digits only, country code first (+233 245 171 589)
    defaultMessage: "Hello Afrixtech, I'd like to get a website for my business.",
  },
  address: {
    locality: 'Kumasi',
    region: 'Ashanti Region',
    country: 'Ghana',
    countryCode: 'GH',
    // TODO: add the street address. It stays hidden on the site while empty.
    street: '',
  },
};

export const CONTACT_ADDRESS_LINE = `${CONTACT.address.locality}, ${CONTACT.address.region}, ${CONTACT.address.country}`;

/** wa.me link with a prefilled message. */
export function whatsappLink(message: string = CONTACT.whatsapp.defaultMessage): string {
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Business registration number shown in the footer. Hidden while empty. */
export const BUSINESS = {
  // TODO: add the registered business name and number, for example "Registered in Ghana, No. XXXXXXXX".
  registration: '',
};

/* ── Packages & pricing ────────────────────────────────────────── */

export type PackageItem = {
  id: string;
  /** Which row of the Packages section the card appears in. */
  group: 'general' | 'store';
  name: string;
  badge?: string;
  /** Large price line. */
  price: string;
  /** Small line under the price. */
  priceNote: string;
  summary: string;
  features: string[];
  cta: string;
  /** Message sent to WhatsApp when the button is clicked. */
  whatsappMessage: string;
};

export const PACKAGE_GROUPS = {
  general: { title: 'Websites and software', description: 'A company website, or software built around your business.' },
  store: { title: 'Online stores', description: 'Sell online, take payments and manage your stock, orders and customers.' },
};

/** Shown under the cards. */
export const PACKAGES_NOTE =
  'Renewal from GH₵1,500/year (hosting, updates, backups). Payment gateway fees are paid by the client.';

export const PACKAGES: PackageItem[] = [
  {
    id: 'corporate-website',
    group: 'general',
    name: 'Corporate Website',
    price: 'GH₵999',
    priceNote: 'flat price',
    summary: 'A professional website for your business, live and ready to share.',
    features: [
      'Up to 5 pages',
      'Free domain name',
      '1 year hosting',
      'Mobile-friendly design',
      'Contact form',
      'WhatsApp button',
    ],
    cta: 'Get this package',
    whatsappMessage: "Hello Afrixtech, I'm interested in the Corporate Website package (GH₵999).",
  },
  {
    id: 'custom-software',
    group: 'general',
    name: 'Custom Software / ERP',
    price: 'Request a quote',
    priceNote: 'scoped to your business',
    summary: 'Software built around how your business works.',
    features: ['ERP systems', 'Client and staff portals', 'Cloud infrastructure', 'AI automation'],
    cta: 'Request a quote',
    whatsappMessage: "Hello Afrixtech, I'd like a quote for custom software / ERP for my business.",
  },
  {
    id: 'starter-store',
    group: 'store',
    name: 'Starter Store',
    price: 'GH₵2,999',
    priceNote: 'flat price',
    summary: 'A simple online store to start selling.',
    features: [
      'Up to 30 products',
      'WhatsApp + Mobile Money / Paystack checkout',
      'Mobile-friendly design',
      'Domain + 1 year hosting',
    ],
    cta: 'Get this package',
    whatsappMessage: "Hello Afrixtech, I'm interested in the Starter Store package (GH₵2,999).",
  },
  {
    id: 'business-store',
    group: 'store',
    name: 'Business Store',
    badge: 'Most popular',
    price: 'GH₵5,999',
    priceNote: 'flat price',
    summary: 'An online store with a full system to run your business.',
    features: [
      'Up to 200 products',
      'Full management system (stock, orders, customers, sales reports)',
      'Online payments',
      'Delivery options',
      'Staff logins',
    ],
    cta: 'Get this package',
    whatsappMessage: "Hello Afrixtech, I'm interested in the Business Store package (GH₵5,999).",
  },
  {
    id: 'enterprise-store',
    group: 'store',
    name: 'Custom / Enterprise',
    price: 'From GH₵12,000',
    priceNote: 'final price depends on your needs',
    summary: 'For larger catalogues, several branches and custom requirements.',
    features: [
      'Unlimited products',
      'ERP / inventory integration',
      'Multi-branch',
      'Mobile app',
      'Custom features',
    ],
    cta: 'Ask about this package',
    whatsappMessage: "Hello Afrixtech, I'm interested in the Custom / Enterprise package (from GH₵12,000).",
  },
];

/* ── Services (used on the homepage and the services page) ─────── */

export const SERVICES = [
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    short: 'Cloud infrastructure',
    description:
      'Hosting, deployment pipelines and cloud set-ups that keep your website and systems running reliably.',
    points: ['AWS', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    short: 'Artificial intelligence',
    description:
      'Automation and data tools that take repetitive work off your team and help you make better decisions.',
    points: ['Automation', 'Python', 'LLM tools'],
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    short: 'Custom development',
    description:
      'Websites, web apps and mobile apps designed around your operations and built to be maintained.',
    points: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software & ERP',
    short: 'Enterprise software',
    description:
      'ERP systems, client portals and internal tools that bring sales, stock, finance and operations into one place.',
    points: ['ERP', 'Portals', 'Dashboards', 'Role-based access'],
  },
  {
    id: 'security',
    title: 'Security',
    short: 'Cyber security',
    description:
      'Security reviews, access control and safer development practices that protect your data and your customers.',
    points: ['OWASP practices', 'Access control', 'Audit trails'],
  },
  {
    id: 'ux-design',
    title: 'UI/UX Design',
    short: 'UI/UX design',
    description:
      'Clear, usable interfaces for websites and apps, designed to be easy for your customers and your team.',
    points: ['Prototyping', 'User research', 'Design systems'],
  },
] as const;

/* ── Projects (case studies) ───────────────────────────────────── */

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  /** Short line used on the homepage tiles. */
  summary: string;
  problem: string;
  built: string;
  /** Only technologies that are verifiably used. */
  stack: string[];
  /** TODO: real, verifiable result (numbers or a client quote). Hidden while empty. */
  result: string;
  image: string;
  url: string;
  /** Shown on the card so visitors see which domain the project lives on. */
  liveLabel: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'akoko-feeds',
    title: 'Akoko Feeds',
    category: 'Agriculture',
    // TODO: confirm the client name and the problem statement below.
    client: 'Akoko Solutions Limited, a feed mill in Kumasi',
    summary: 'Brand and ordering website for a Kumasi poultry-feed mill.',
    problem:
      'A feed mill needed a clear online home for its nine-product range and a simple way for farmers to place orders.',
    built:
      'A brand and ordering website with a nine-product catalogue, a feeding guide, order requests that return a reference code, and WhatsApp and phone ordering.',
    // TODO: complete the tech stack. Only Next.js is confirmed from the live site.
    stack: ['Next.js'],
    result: '',
    image: '/work/akokofeeds.png',
    url: 'https://www.akokofeeds.com',
    liveLabel: 'Live at akokofeeds.com',
  },
  {
    id: 'akoko-erp',
    // TODO: CONFIRM the name. This project is titled "Akoko Solutions ERP" but lives at jokasfarms.com.
    // Either keep the title and the label below, or rename the project.
    title: 'Akoko Solutions ERP',
    category: 'Business software',
    // TODO: confirm the client name and the problem statement below.
    client: 'Akoko Solutions',
    summary: 'An ERP that runs poultry, feed mill, soya, inventory, sales and finance.',
    problem:
      'Running poultry, feed-mill, soya, inventory, sales and finance operations needs one place where the right people see the right data.',
    built:
      'A multi-branch ERP with access scoped by company, branch, farm, warehouse and production site; role and permission checks; and executive dashboards, exports and audit trails.',
    stack: ['JWT sessions', 'HttpOnly cookies', 'Role-based access control'],
    result: '',
    image: '/work/jokasfarms.png',
    url: 'https://www.jokasfarms.com',
    liveLabel: 'Live at jokasfarms.com',
  },
  {
    id: 'jobwahala',
    title: 'JobWahala',
    category: 'Recruitment',
    // TODO: confirm whether JobWahala is a client project or an Afrixtech product, and set the client.
    client: 'JobWahala',
    summary: 'A job portal for Ghana and the rest of Africa.',
    problem:
      'Job seekers need listings where pay and location are visible before they apply, and employers need a simple way to post and review applicants.',
    built:
      'A job portal with search by keyword, location, field and job type, internship and National Service listings, free job posting and a single board of applicants.',
    // TODO: add the tech stack.
    stack: [],
    result: '',
    image: '/work/jobwahala.png',
    url: 'https://www.jobwahala.com',
    liveLabel: 'Live at jobwahala.com',
  },
  {
    id: 'anytime-foods',
    title: 'Anytime Foods',
    category: 'Food & retail',
    // TODO: confirm the client name and the problem statement below.
    client: 'Anytime Foods',
    summary: 'Brand website for a ready-to-eat Ghanaian tomato stew.',
    problem:
      'A ready-to-eat stew brand needed a website that tells its story and lets customers order directly.',
    built:
      'A brand-led website with product, story and serving pages, and direct ordering through WhatsApp.',
    // TODO: add the tech stack.
    stack: [],
    result: '',
    image: '/work/anytimestew.png',
    url: 'https://anytimestew.com',
    liveLabel: 'Live at anytimestew.com',
  },
];

/* ── Testimonials ──────────────────────────────────────────────── */

export type Testimonial = {
  enabled: boolean;
  quote: string;
  name: string;
  role: string;
  company: string;
};

// TODO: add real testimonials with the client's permission, then set enabled: true.
// The "What clients say" section stays hidden until at least one entry is enabled.
export const TESTIMONIALS: Testimonial[] = [
  { enabled: false, quote: '', name: '', role: '', company: '' }, // TODO: real testimonial from the Akoko Feeds owner
  { enabled: false, quote: '', name: '', role: '', company: '' }, // TODO: real testimonial from a JobWahala user or employer
  { enabled: false, quote: '', name: '', role: '', company: '' }, // TODO: real testimonial from the Anytime Foods team
];

/* ── Team ──────────────────────────────────────────────────────── */

export const FOUNDER = {
  name: 'Gabriel Kwaku Kusi',
  role: 'Founder & CEO',
  credentials: ['MBA, Anna University', 'MSc student, KNUST'],
  bio: "Leads Afrixtech from Kumasi, building websites and software for businesses in Ghana.",
  // TODO: replace with a professional portrait. Leave empty to show an initials placeholder.
  photo: '/case-studies/ceo.jpeg',
};

/* ── Navigation ────────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: 'Solutions', href: '/services-solutions' },
  { label: 'Pricing', href: '/#packages' },
  { label: 'Case Studies', href: '/case-studies-portfolio' },
  { label: 'Insights', href: '/tech-insights-blog-hub' },
  { label: 'Company', href: '/about-team-profile' },
];

/**
 * Footer links. `enabled: false` hides a link until its page has real content.
 * Careers, Help Center, API Documentation and Service Status are hidden because their
 * pages currently hold placeholder content (sample job roles, a sample API, sample status).
 */
export const FOOTER_COLUMNS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Enterprise Software', href: '/services-solutions#enterprise-software', enabled: true },
      { label: 'Custom Development', href: '/services-solutions#custom-development', enabled: true },
      { label: 'Cloud & DevOps', href: '/services-solutions#cloud', enabled: true },
      { label: 'AI & Machine Learning', href: '/services-solutions#ai', enabled: true },
      { label: 'Security', href: '/services-solutions#security', enabled: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', href: '/#packages', enabled: true },
      { label: 'Case Studies', href: '/case-studies-portfolio', enabled: true },
      { label: 'Insights', href: '/tech-insights-blog-hub', enabled: true },
      { label: 'Technology Stack', href: '/technology-stack-expertise', enabled: true },
      { label: 'API Documentation', href: '/developer-api-documentation-portal', enabled: false }, // TODO: enable when a real API exists
      { label: 'Help Center', href: '/client-support-help-center', enabled: false }, // TODO: enable when real help content exists
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about-team-profile', enabled: true },
      { label: 'Careers', href: '/careers-open-roles', enabled: false }, // TODO: enable when there are real open roles
      { label: 'Contact', href: '/contact-global-offices', enabled: true },
      { label: 'Request a quote', href: '/request-a-quote', enabled: true },
      { label: 'Service Status', href: '/service-status-uptime-page', enabled: false }, // TODO: enable when connected to a real status check
    ],
  },
];

/** Pages hidden from search engines and the sitemap until they hold real content. */
export const HIDDEN_PATHS = [
  '/developer-api-documentation-portal',
  '/client-support-help-center',
  '/careers-open-roles',
  '/service-status-uptime-page',
  '/in-depth-case-study-page',
  '/technical-resource-library',
];
