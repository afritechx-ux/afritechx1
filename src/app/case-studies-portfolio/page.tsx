import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'payflow',
    title: 'PayFlow Global Transfer',
    category: 'Fintech',
    categoryColor: 'bg-blue-500',
    accentColor: 'text-blue-400',
    accentBorder: 'border-blue-500/30',
    accentBg: 'bg-blue-500/10',
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
    categoryColor: 'bg-emerald-500',
    accentColor: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    accentBg: 'bg-emerald-500/10',
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
    categoryColor: 'bg-purple-500',
    accentColor: 'text-purple-400',
    accentBorder: 'border-purple-500/30',
    accentBg: 'bg-purple-500/10',
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
    categoryColor: 'bg-orange-500',
    accentColor: 'text-orange-400',
    accentBorder: 'border-orange-500/30',
    accentBg: 'bg-orange-500/10',
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
    categoryColor: 'bg-slate-500',
    accentColor: 'text-slate-300',
    accentBorder: 'border-slate-500/30',
    accentBg: 'bg-slate-500/10',
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

const filterTabs = [
  { label: 'All Projects', icon: 'grid_view', active: true },
  { label: 'Fintech', icon: 'account_balance', active: false },
  { label: 'Healthcare', icon: 'cardiology', active: false },
  { label: 'E-commerce', icon: 'shopping_bag', active: false },
  { label: 'Industrial', icon: 'factory', active: false },
];

function FeaturedCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505] lg:col-span-2 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="relative h-[300px] lg:h-[460px] overflow-hidden">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
          <div className="absolute top-5 left-5 z-20">
            <span className={`inline-flex items-center gap-1.5 rounded-full ${study.categoryColor} px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              {study.category}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="relative flex flex-col justify-center p-8 lg:p-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full" />

          <p className={`text-xs font-bold uppercase tracking-widest ${study.accentColor} mb-3`}>Featured Project</p>
          <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
            {study.title}
          </h3>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
            {study.description}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {study.stats.map((stat) => (
              <div key={stat.label} className={`flex sm:block items-center justify-between sm:justify-start rounded-xl ${study.accentBg} border ${study.accentBorder} p-3 sm:text-center text-left`}>
                <div className="flex items-center gap-2 sm:block">
                  <span className={`material-symbols-outlined text-base sm:text-lg ${study.accentColor} mb-0 sm:mb-1 block`}>{stat.icon}</span>
                  <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wide block">{stat.label}</p>
                </div>
                <p className="text-white font-black text-base sm:text-lg">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-400 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300 group/btn">
            View Case Study
            <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#050505] transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex items-center gap-1.5 rounded-full ${study.categoryColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
            {study.category}
          </span>
        </div>
        {/* Hover overlay with icon */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">arrow_outward</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
          {study.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {study.description}
        </p>

        {/* Mini stats */}
        <div className="flex gap-3 mb-5">
          {study.stats.slice(0, 2).map((stat) => (
            <div key={stat.label} className="flex items-center gap-1.5">
              <span className={`material-symbols-outlined text-sm ${study.accentColor}`}>{stat.icon}</span>
              <span className="text-white text-xs font-bold">{stat.value}</span>
              <span className="text-slate-600 text-[10px]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
          {study.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-slate-500 font-medium uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {/* Divider + action */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className={`flex items-center gap-2 text-sm font-semibold ${study.accentColor}`}>
            <span className="material-symbols-outlined text-base">{study.stats[0].icon}</span>
            <span>{study.stats[0].value} {study.stats[0].label}</span>
          </div>
          <button className="rounded-full p-2.5 bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-all duration-300">
            <span className="material-symbols-outlined text-lg">arrow_outward</span>
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${study.categoryColor} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

export const metadata = {
    title: 'Case Studies & Portfolio',
    description: 'View Afrixtech enterprise case studies. See how we process millions of transactions and optimize AI workflows for Medicare, LogiTrack, and PayFlow.',
};

export default function AfrixtechCaseStudiesPortfolio() {
  const featured = caseStudies.find((s) => s.featured)!;
  const rest = caseStudies.filter((s) => !s.featured);

  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 right-0 -z-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 -z-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 -z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[80px]" />

      <div className="relative z-10">
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Hero header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Case Studies &amp; Portfolio
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-[1.05]">
                  Projects That{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                    Deliver Results
                  </span>
                </h1>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                  Transforming businesses through digital innovation. Each project represents our commitment to engineering excellence and measurable impact.
                </p>
              </div>
              {/* Aggregate stats */}
              <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-6 md:gap-8 mt-6 md:mt-0">
                <div className="text-center col-span-1">
                  <p className="text-3xl font-black text-white">50+</p>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Projects</p>
                </div>
                <div className="hidden sm:block w-px bg-white/10" />
                <div className="text-center col-span-1">
                  <p className="text-3xl font-black text-white">98%</p>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Success Rate</p>
                </div>
                <div className="hidden sm:block w-px bg-white/10" />
                <div className="text-center col-span-2 sm:col-span-1 mt-2 sm:mt-0">
                  <p className="text-3xl font-black text-white">12+</p>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Industries</p>
                </div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex overflow-x-auto gap-2 mb-12 pb-6 border-b border-white/5 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
              {filterTabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    tab.active
                      ? 'bg-primary/15 text-primary ring-1 ring-primary/30 shadow-lg shadow-primary/10'
                      : 'bg-transparent hover:bg-white/5 text-slate-500 hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                  <span className="text-sm font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Featured project */}
            <div className="mb-10">
              <FeaturedCard study={featured} />
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {rest.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-1">
              <div className="relative overflow-hidden rounded-[20px] px-8 py-20 sm:px-16 sm:py-24 text-center">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-30" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-white/10 mb-8">
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Let&apos;s Build Something Great
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5">
                    Ready to start your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">next project</span>?
                  </h2>
                  <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400 font-light mb-10">
                    Our team of experts is ready to help you achieve similar results. Let&apos;s bring your vision to life.
                  </p>
                  <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                      href="."
                    >
                      Start a Project
                    </Link>
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all gap-2"
                      href="."
                    >
                      Contact Sales
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
