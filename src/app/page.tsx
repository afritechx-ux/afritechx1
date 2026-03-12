import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Data ───────────────────────────────────────────────────────── */

const services = [
  {
    icon: 'cloud_queue',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architectures ensuring high availability, security, and performance for mission-critical applications.',
    color: 'blue',
    colorClasses: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', accent: 'bg-blue-500', hoverIcon: 'group-hover:bg-blue-500 group-hover:text-white' },
  },
  {
    icon: 'psychology',
    title: 'Artificial Intelligence',
    description: 'Data-driven AI and machine learning solutions to automate workflows and optimize complex business processes.',
    color: 'purple',
    colorClasses: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', accent: 'bg-purple-500', hoverIcon: 'group-hover:bg-purple-500 group-hover:text-white' },
  },
  {
    icon: 'terminal',
    title: 'Custom Development',
    description: 'Tailored software built from the ground up to solve your unique challenges using modern tech stacks.',
    color: 'indigo',
    colorClasses: { iconBg: 'bg-indigo-500/10', iconText: 'text-indigo-400', accent: 'bg-indigo-500', hoverIcon: 'group-hover:bg-indigo-500 group-hover:text-white' },
  },
  {
    icon: 'security',
    title: 'Cyber Security',
    description: 'Robust security protocols and audits to protect your enterprise assets and customer data from threats.',
    color: 'teal',
    colorClasses: { iconBg: 'bg-teal-500/10', iconText: 'text-teal-400', accent: 'bg-teal-500', hoverIcon: 'group-hover:bg-teal-500 group-hover:text-white' },
  },
];

const partners = [
  { name: 'ACME Corp', icon: 'diamond' },
  { name: 'Globex', icon: 'view_in_ar' },
  { name: 'StarTech', icon: 'rocket_launch' },
  { name: 'OmniNet', icon: 'public' },
  { name: 'VoltSystems', icon: 'bolt' },
];

const metrics = [
  { value: '99.9%', label: 'Uptime SLA', icon: 'check_circle' },
  { value: '50+', label: 'Global Clients', icon: 'groups' },
  { value: '<200ms', label: 'Avg Response', icon: 'speed' },
  { value: '24/7', label: 'Expert Support', icon: 'support_agent' },
];

export const metadata = {
  description: "Afrixtech partners with industry leaders to forge the future of digital infrastructure, offering specialized enterprise software development, robust cloud solutions, and scalable AI workflows.",
};

/* ── Components ────────────────────────────────────────────────── */

function ServiceCard({ service }: { service: typeof services[0] }) {
  const c = service.colorClasses;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#050505] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 hover:border-white/10">
      <div className={`mb-5 inline-flex h-13 w-13 items-center justify-center rounded-xl ${c.iconBg} ${c.iconText} ${c.hoverIcon} transition-all duration-300`}>
        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
      </div>
      <h4 className="mb-2 text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">{service.title}</h4>
      <p className="text-sm leading-relaxed text-slate-400 flex-grow">{service.description}</p>
      <div className="mt-5 pt-4 border-t border-white/5">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-primary transition-colors duration-300 cursor-pointer">
          Learn more
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </span>
      </div>
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${c.accent} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function AfrixtechHomepageLandingPage() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24 overflow-x-clip">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <main className="flex-1">

          {/* ═══ Hero Section ═══ */}
          <section className="relative px-6 py-12 md:py-20 lg:px-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Left: Copy */}
                <div className="flex flex-col gap-6 text-center lg:text-left z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Now accepting new enterprise partners
                  </div>

                  {/* Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-[4.25rem] font-black tracking-tight text-white leading-[1.05]">
                    Forging the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                      Future
                    </span>{' '}
                    with Enterprise Solutions
                  </h1>

                  {/* Subtext */}
                  <p className="text-lg leading-relaxed text-slate-400 max-w-xl mx-auto lg:mx-0">
                    Afrixtech delivers cutting-edge digital transformation through AI, Cloud Computing, and bespoke software development for global enterprises ready to scale.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                      href="/contact-global-offices"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300"
                      href="/case-studies-portfolio"
                    >
                      View Portfolio
                    </Link>
                  </div>

                  {/* Inline metrics */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 mt-2 border-t border-white/5 justify-center lg:justify-start">
                    {metrics.map((m) => (
                      <div key={m.label} className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          <span className="material-symbols-outlined text-sm">{m.icon}</span>
                        </div>
                        <div>
                          <p className="text-white font-black text-sm leading-none">{m.value}</p>
                          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{m.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Hero visual */}
                <div className="relative w-full flex items-center justify-center z-0 -mt-4 md:mt-0">
                  <div className="relative w-full max-w-[540px]">
                    {/* Main image card */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                      <Image
                        src="/case-studies/homepage-hero.png"
                        alt="Abstract digital infrastructure visualization"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    {/* Floating terminal card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] h-[60%] md:h-[55%] bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 md:p-5 flex flex-col gap-2 md:gap-3 transform md:rotate-[-4deg] md:hover:rotate-0 transition-transform duration-500">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 w-full rounded-lg p-3 bg-white/5 font-mono text-xs text-slate-400 overflow-hidden">
                        <p><span className="text-emerald-400">$</span> afrixtech deploy --region africa-west</p>
                        <p className="text-slate-600 mt-1">⠋ Building production bundle...</p>
                        <p className="text-emerald-400 mt-1">✓ Deployed to 4 edge regions</p>
                        <p className="text-primary mt-1">→ https://api.afrixtech.com <span className="text-emerald-400">200 OK</span></p>
                      </div>
                      <div className="h-10 w-full grid grid-cols-3 gap-2">
                        <div className="bg-primary/15 rounded-lg border border-primary/10" />
                        <div className="bg-white/5 rounded-lg border border-white/5 col-span-2" />
                      </div>
                    </div>

                    {/* Floating status card */}
                    <div className="absolute bottom-4 md:bottom-8 right-[-8px] md:right-[-16px] w-[180px] md:w-[200px] p-3 md:p-4 bg-[#050505]/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl transform md:translate-y-2 md:hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-emerald-500/15 rounded-lg border border-emerald-500/20">
                          <span className="material-symbols-outlined text-emerald-400 text-sm">trending_up</span>
                        </div>
                        <span className="text-xs text-white font-bold">System Status</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '94%' }} />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-[10px] text-slate-600 font-medium">Uptime</span>
                        <span className="text-[10px] text-white font-black">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ Partners Bar ═══ */}
          <section className="border-y border-white/5 bg-[#050505]">
            <div className="mx-auto max-w-7xl px-6 py-8">
              <p className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-8">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-2.5 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer group"
                  >
                    <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">{partner.icon}</span>
                    <span className="text-lg font-bold tracking-tight">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ Core Services ═══ */}
          <section className="py-20 px-6 lg:px-20 bg-black relative">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</p>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                    Engineering Digital{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Excellence</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    We specialize in building scalable, secure, and innovative software solutions tailored to your business needs.
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group shrink-0"
                  href="/services-solutions"
                >
                  View All Services
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          </section>

          {/* ═══ CTA Section ═══ */}
          <section className="py-16 px-6 lg:px-20 bg-black">
            <div className="mx-auto max-w-7xl">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-1">
                <div className="relative overflow-hidden rounded-[20px]">
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Left: Text */}
                    <div className="relative p-10 lg:p-16 lg:w-1/2 flex flex-col gap-6 z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10" />
                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-white/10">
                        <span className="material-symbols-outlined text-sm">handshake</span>
                        Let&apos;s Collaborate
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                        Ready to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">modernize</span>{' '}
                        your infrastructure?
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        Our team of experts is ready to help you navigate the complexities of digital transformation. Let&apos;s build something extraordinary together.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                          className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                          href="/contact-global-offices"
                        >
                          Start a Project
                        </Link>
                        <Link
                          className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all gap-2"
                          href="/case-studies-portfolio"
                        >
                          Read Case Studies
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full lg:w-1/2 h-72 lg:h-[420px] border-t lg:border-t-0 lg:border-l border-white/5">
                      <Image
                        src="/case-studies/homepage-hero.png"
                        alt="Modern server infrastructure"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />

                      {/* Overlay stat */}
                      <div className="absolute bottom-6 right-6 px-4 py-3 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-lg">shield</span>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Enterprise Grade</p>
                            <p className="text-white font-black text-sm">SOC 2 Compliant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient accent lines */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
