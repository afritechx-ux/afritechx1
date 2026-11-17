export type CaseStudy = {
  id: string; title: string; category: string; description: string; image: string;
  stats: { label: string; value: string; icon: string }[]; tags: string[]; featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'payflow',
    title: 'PayFlow Global Transfer',
    category: 'Fintech',
    description: 'Re-engineering cross-border payments for the African market with a mobile-first approach and real-time currency conversion.',
    image: '/case-studies/fintech.png',
    stats: [
      { label: 'Transaction Efficiency', value: '+40%', icon: 'trending_up' },
      { label: 'Processing Time', value: '<2s', icon: 'speed' },
      { label: 'Active Users', value: '120K+', icon: 'group' },
    ],
    tags: ['Mobile App', 'UX/UI', 'API Design', 'Payment Gateway'],
    featured: true,
  },
  {
    id: 'medicare',
    title: 'MediCare Telehealth',
    category: 'Healthcare',
    description: 'A secure, HIPAA-compliant platform connecting patients with doctors remotely across rural regions in Sub-Saharan Africa.',
    image: '/case-studies/healthcare.png',
    stats: [
      { label: 'Active Patients', value: '50K+', icon: 'group_add' },
      { label: 'Wait Time Reduced', value: '70%', icon: 'schedule' },
      { label: 'Satisfaction', value: '4.8★', icon: 'star' },
    ],
    tags: ['Web Platform', 'HIPAA', 'Video SDK', 'Cloud'],
    featured: false,
  },
  {
    id: 'logitrack',
    title: 'LogiTrack Solutions',
    category: 'E-commerce',
    description: 'Advanced inventory management with AI-driven demand forecasting for a major retail chain spanning 8 countries.',
    image: '/case-studies/ecommerce.png',
    stats: [
      { label: 'Faster Delivery', value: '30%', icon: 'local_shipping' },
      { label: 'Cost Savings', value: '$2.1M', icon: 'savings' },
      { label: 'Warehouses', value: '45+', icon: 'warehouse' },
    ],
    tags: ['AI/ML', 'Supply Chain', 'Dashboard', 'IoT'],
    featured: false,
  },
  {
    id: 'dataviz',
    title: 'DataViz Enterprise',
    category: 'SaaS',
    description: 'Custom analytics dashboard enabling real-time decision making for C-suite executives across the financial sector.',
    image: '/case-studies/saas.png',
    stats: [
      { label: 'Data Points/Sec', value: '10M+', icon: 'insights' },
      { label: 'Uptime', value: '99.99%', icon: 'verified' },
      { label: 'Enterprises', value: '200+', icon: 'business' },
    ],
    tags: ['Real-time Analytics', 'Big Data', 'Microservices'],
    featured: false,
  },
  {
    id: 'automanufacture',
    title: 'AutoManufacture IoT',
    category: 'Industrial',
    description: 'IoT sensor integration for predictive maintenance, reducing downtime and operational costs for manufacturing plants.',
    image: '/case-studies/industrial.png',
    stats: [
      { label: 'Reduced Downtime', value: '25%', icon: 'build' },
      { label: 'Sensors Connected', value: '15K+', icon: 'sensors' },
      { label: 'Annual Savings', value: '$4.5M', icon: 'monetization_on' },
    ],
    tags: ['IoT', 'Predictive AI', 'Edge Computing', 'SCADA'],
    featured: false,
  },
];

