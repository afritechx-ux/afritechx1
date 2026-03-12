import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Service Data ──────────────────────────────────────────────── */

const services = [
  {
    id: 'enterprise',
    icon: 'dns',
    title: 'Enterprise Software',
    description: 'Custom ERP and CRM solutions designed to streamline your business operations and increase efficiency across departments.',
    color: 'blue',
    colorClasses: {
      iconBg: 'bg-blue-500/10',
      iconText: 'text-blue-400',
      hoverBorder: 'group-hover:border-blue-500/40',
      accentLine: 'bg-blue-500',
      statBg: 'bg-blue-500/10',
      statText: 'text-blue-400',
    },
    technologies: [
      { icon: 'database', label: 'PostgreSQL' },
      { icon: 'cloud', label: 'Cloud' },
      { icon: 'security', label: 'Security' },
      { icon: 'api', label: 'REST API' },
    ],
    highlight: { value: '99.9%', label: 'Uptime SLA' },
  },
  {
    id: 'mobile',
    icon: 'smartphone',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps built with React Native and Flutter for seamless user experiences on iOS and Android.',
    color: 'purple',
    colorClasses: {
      iconBg: 'bg-purple-500/10',
      iconText: 'text-purple-400',
      hoverBorder: 'group-hover:border-purple-500/40',
      accentLine: 'bg-purple-500',
      statBg: 'bg-purple-500/10',
      statText: 'text-purple-400',
    },
    technologies: [
      { icon: 'devices', label: 'React Native' },
      { icon: 'phone_iphone', label: 'iOS' },
      { icon: 'android', label: 'Android' },
    ],
    highlight: { value: '2M+', label: 'App Downloads' },
  },
  {
    id: 'ai',
    icon: 'psychology',
    title: 'AI & Machine Learning',
    description: 'Predictive analytics, NLP, and intelligent automation powered by cutting-edge Python and TensorFlow models to drive insights.',
    color: 'emerald',
    colorClasses: {
      iconBg: 'bg-emerald-500/10',
      iconText: 'text-emerald-400',
      hoverBorder: 'group-hover:border-emerald-500/40',
      accentLine: 'bg-emerald-500',
      statBg: 'bg-emerald-500/10',
      statText: 'text-emerald-400',
    },
    technologies: [
      { icon: 'code', label: 'Python' },
      { icon: 'analytics', label: 'TensorFlow' },
      { icon: 'smart_toy', label: 'LLMs' },
    ],
    highlight: { value: '40%', label: 'Efficiency Gain' },
  },
  {
    id: 'cloud',
    icon: 'cloud_queue',
    title: 'Cloud & DevOps',
    description: 'Secure, scalable, and reliable cloud solutions using AWS and Azure. We optimize your deployment pipelines for maximum uptime.',
    color: 'orange',
    colorClasses: {
      iconBg: 'bg-orange-500/10',
      iconText: 'text-orange-400',
      hoverBorder: 'group-hover:border-orange-500/40',
      accentLine: 'bg-orange-500',
      statBg: 'bg-orange-500/10',
      statText: 'text-orange-400',
    },
    technologies: [
      { icon: 'cloud', label: 'AWS' },
      { icon: 'deployed_code', label: 'Docker' },
      { icon: 'storage', label: 'Kubernetes' },
    ],
    highlight: { value: '10x', label: 'Deploy Speed' },
  },
  {
    id: 'design',
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'User-centric design that blends aesthetics with functionality. We create intuitive interfaces that delight users and drive conversion.',
    color: 'pink',
    colorClasses: {
      iconBg: 'bg-pink-500/10',
      iconText: 'text-pink-400',
      hoverBorder: 'group-hover:border-pink-500/40',
      accentLine: 'bg-pink-500',
      statBg: 'bg-pink-500/10',
      statText: 'text-pink-400',
    },
    technologies: [
      { icon: 'brush', label: 'Figma' },
      { icon: 'draw', label: 'Prototyping' },
      { icon: 'group', label: 'User Research' },
    ],
    highlight: { value: '3x', label: 'Conversion Lift' },
  },
  {
    id: 'blockchain',
    icon: 'currency_bitcoin',
    title: 'Blockchain Development',
    description: 'Decentralized applications (dApps) and smart contracts. We build secure and transparent blockchain solutions for modern finance.',
    color: 'teal',
    colorClasses: {
      iconBg: 'bg-teal-500/10',
      iconText: 'text-teal-400',
      hoverBorder: 'group-hover:border-teal-500/40',
      accentLine: 'bg-teal-500',
      statBg: 'bg-teal-500/10',
      statText: 'text-teal-400',
    },
    technologies: [
      { icon: 'receipt_long', label: 'Solidity' },
      { icon: 'lock', label: 'Security' },
      { icon: 'hub', label: 'Web3' },
    ],
    highlight: { value: '$50M+', label: 'TVL Secured' },
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, analyze your market position, and craft a technical roadmap aligned with your vision.',
    icon: 'explore',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Our architects design scalable systems and our designers create intuitive interfaces — all validated by your team before coding begins.',
    icon: 'architecture',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    step: '03',
    title: 'Iterative Development',
    description: 'Agile sprints with bi-weekly demos keep you in the loop. We ship production-ready increments, not vaporware presentations.',
    icon: 'sprint',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous QA, performance benchmarking, and security audits ensure a bulletproof launch. We stay on for post-launch support.',
    icon: 'rocket_launch',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
];

const techStack = [
  { name: 'React', icon: 'code' },
  { name: 'Next.js', icon: 'web' },
  { name: 'Node.js', icon: 'terminal' },
  { name: 'Python', icon: 'data_object' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Docker', icon: 'deployed_code' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'TensorFlow', icon: 'psychology' },
];

/* ── Components ────────────────────────────────────────────────── */

function ServiceCard({ service }: { service: typeof services[0] }) {
  const c = service.colorClasses;
  return (
    <div className={`group relative flex flex-col rounded-2xl border border-white/10 bg-[#050505] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${c.hoverBorder} overflow-hidden`}>
      {/* Top row: icon + arrow */}
      <div className="flex items-center justify-between mb-5">
        <div className={`size-14 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconText} transition-transform duration-300 group-hover:scale-110`}>
          <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Highlight stat */}
          <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full ${c.statBg} border ${service.colorClasses.iconBg.replace('/10', '/20')}`}>
            <span className={`text-xs font-black ${c.statText}`}>{service.highlight.value}</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wide">{service.highlight.label}</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-lg">arrow_outward</span>
          </div>
        </div>
      </div>

      {/* Title & description */}
      <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      {/* Technologies */}
      <div className="border-t border-white/5 pt-4 mt-auto">
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Tech Stack</p>
        <div className="flex gap-2">
          {service.technologies.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              title={tech.label}
            >
              <span className="material-symbols-outlined text-slate-500 text-sm">{tech.icon}</span>
              <span className="text-[10px] text-slate-500 font-medium">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${c.accentLine} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

function ProcessStep({ step, isLast }: { step: typeof processSteps[0]; isLast: boolean }) {
  return (
    <div className="group relative flex gap-6 pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[27px] top-[56px] w-px h-[calc(100%-56px)] bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Step number circle */}
      <div className={`relative z-10 shrink-0 w-14 h-14 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
        <span className={`material-symbols-outlined text-2xl ${step.color}`}>{step.icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-xs font-black ${step.color} tracking-widest`}>STEP {step.step}</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
          {step.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export const metadata = {
    title: 'Enterprise Services & Solutions',
    description: 'Explore Afrixtech services including Cloud Infrastructure, Custom App Development, AI Integration, and Cyber Security for global enterprises.',
};

export default function AfrixtechServicesSolutions() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24 overflow-x-clip">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10">
        <main className="flex-grow">

          {/* ═══ Hero Section ═══ */}
          <section className="relative px-4 py-8 md:px-10 md:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-6 items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  End-to-End Digital Transformation
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] max-w-4xl">
                  Building the Future with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                    Intelligent Code
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                  We deliver enterprise-grade software solutions tailored to your business needs — from scalable cloud architectures to intuitive mobile applications.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                    href="/contact-global-offices"
                  >
                    Start a Project
                  </Link>
                  <Link
                    className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300"
                    href="/case-studies-portfolio"
                  >
                    View Portfolio
                  </Link>
                </div>

                {/* Trust metrics */}
                <div className="flex items-center gap-6 md:gap-8 mt-6 pt-6 md:mt-8 md:pt-8 border-t border-white/5">
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">50+</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Projects Delivered</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">6</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Service Verticals</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">24/7</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ Services Grid ═══ */}
          <section className="px-4 py-12 md:px-10 md:py-20 bg-[#050505] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
                <div className="max-w-2xl">
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</p>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                    Six Pillars of{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                      Innovation
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    We leverage cutting-edge technologies to solve complex challenges at scale. Each service is backed by deep domain expertise and battle-tested methodologies.
                  </p>
                </div>
                <Link className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group shrink-0" href="/contact-global-offices">
                  See all capabilities
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>

          {/* ═══ Tech Stack Marquee ═══ */}
          <section className="py-10 border-b border-white/5 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-xs font-bold text-slate-600 uppercase tracking-widest mb-8">Technologies We Master</p>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#050505] border border-white/5 hover:border-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                  >
                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors text-xl">{tech.icon}</span>
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ Process Section ═══ */}
          <section className="px-4 py-16 md:px-10 md:py-24 bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left: Image + overlay */}
                <div className="relative hidden lg:block">
                  <div className="sticky top-32">
                    {/* Decorative rotated bg */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl rotate-2 transform scale-[1.02]" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src="/case-studies/services-hero.png"
                        alt="Modern tech workspace"
                        width={640}
                        height={480}
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Floating stat card */}
                      <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Client Satisfaction</p>
                            <p className="text-2xl font-black text-white">98.5%</p>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="material-symbols-outlined text-emerald-400 text-sm">trending_up</span>
                            <span className="text-xs font-bold text-emerald-400">+12.3%</span>
                          </div>
                        </div>
                        <div className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full" style={{ width: '98.5%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Process timeline */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-[2px] bg-primary" />
                    <p className="text-primary font-bold uppercase tracking-widest text-xs">How We Work</p>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                    Agile Development for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                      Market-Ready Solutions
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
                    Our process is built on transparency and speed. We utilize agile methodologies to ensure your project adapts quickly and ships on time.
                  </p>

                  {/* Timeline */}
                  <div>
                    {processSteps.map((step, i) => (
                      <ProcessStep key={step.step} step={step} isLast={i === processSteps.length - 1} />
                    ))}
                  </div>

                  <Link
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group mt-4"
                    href="/contact-global-offices"
                  >
                    Learn about our process
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ CTA Banner ═══ */}
          <section className="py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-1">
                <div className="relative overflow-hidden rounded-[20px] px-8 py-20 sm:px-16 sm:py-24 text-center">
                  {/* Gradient accents */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                  <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-white/10">
                      <span className="material-symbols-outlined text-sm">handshake</span>
                      Free Consultation
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                      Ready to{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">transform</span>{' '}
                      your business?
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                      Schedule a free consultation with our experts to discuss your project requirements and technical needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                        href="/contact-global-offices"
                      >
                        Get a Quote
                      </Link>
                      <Link
                        className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all gap-2"
                        href="/contact-global-offices"
                      >
                        Contact Us
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
