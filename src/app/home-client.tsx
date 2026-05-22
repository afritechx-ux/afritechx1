'use client';

import React, { useState, useEffect } from 'react';
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
  {
    name: 'Next.js',
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <path d="M141.2 147.2L73.9 61.1V138H56V42h17.9l67.3 86.1V42h17.9v105.2h-17.9zM88.7 80.2L128 130.5V80.2H88.7z" />
        <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="4" fill="none"/>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    )
  },
  {
    name: 'React',
    svg: (
      <svg className="h-6 w-auto fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'Prisma',
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2zm0 4.25L18.75 19.5H5.25L12 6.25z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.143 14.542c.074.773.447 1.343 1.119 1.705.671.362 1.547.544 2.628.544 1.134 0 2.012-.224 2.634-.672.622-.448.932-1.077.932-1.888 0-.583-.173-1.045-.519-1.385-.347-.34-.972-.647-1.874-.922l-1.464-.42c-.752-.22-1.285-.45-1.602-.69-.316-.24-.475-.583-.475-1.03 0-.414.17-.749.508-1.004.339-.255.856-.383 1.551-.383.67 0 1.196.145 1.58.435.383.29.602.732.658 1.328h2.083c-.093-1.493-.687-2.585-1.782-3.276-1.096-.69-2.586-1.036-4.47-1.036-1.922 0-3.414.407-4.475 1.22-.977.75-1.466 1.776-1.466 3.079 0 .805.215 1.45.644 1.937.429.487 1.14.887 2.133 1.202l1.39.435c1.026.32 1.737.662 2.13 1.027.394.364.59.832.59 1.403 0 .524-.22 1.001-.66 1.432-.44.43-1.122.646-2.046.646-.94 0-1.642-.23-2.106-.69-.464-.46-.723-1.144-.777-2.052h-2.083zm-10.743.084V8.406H1.933V6.513h9.61v1.893H7.025v8.036H4.525z"/>
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "Afrixtech rebuilt our core infrastructure. The transition was flawless, and global API response times dropped by over 60%. Excellent team.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "CloudScale Systems",
    rating: 5,
  },
  {
    quote: "Afrixtech is our go-to partner for cloud security and audit pipelines. They helped us achieve full SOC 2 compliance and iron-clad data guards.",
    author: "Michael Chang",
    role: "VP of Infrastructure",
    company: "FinTechGlobal Group",
    rating: 5,
  },
  {
    quote: "The AI automation pipelines they delivered revolutionized our data processing efficiency. Fast, reliable, and highly scalable code.",
    author: "Amina Diop",
    role: "Director of Engineering",
    company: "AfricaTech Hub",
    rating: 5,
  },
];

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
        <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-primary transition-colors duration-300" href="/services-solutions">
          Learn more
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${c.accent} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

export default function AfrixtechHomepageLandingPage() {
  const [era, setEra] = useState<0 | 1 | 2>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animated counters
  const [uptime, setUptime] = useState(99.9);
  const [clients, setClients] = useState(50);
  const [responseTime, setResponseTime] = useState(200);

  useEffect(() => {
    const targets = [
      { uptime: 99.9, clients: 50, response: 200 },
      { uptime: 99.99, clients: 250, response: 80 },
      { uptime: 99.999, clients: 1500, response: 5 },
    ];
    
    const target = targets[era];
    let timer: NodeJS.Timeout;
    
    const step = () => {
      let done = true;
      
      setUptime(prev => {
        if (Math.abs(prev - target.uptime) < 0.0005) return target.uptime;
        done = false;
        const diff = target.uptime - prev;
        return +(prev + diff * 0.15).toFixed(3);
      });
      
      setClients(prev => {
        if (prev === target.clients) return prev;
        done = false;
        const diff = target.clients - prev;
        const val = prev + Math.sign(diff) * Math.max(1, Math.floor(Math.abs(diff) * 0.18));
        return Math.sign(diff) > 0 ? Math.min(val, target.clients) : Math.max(val, target.clients);
      });
      
      setResponseTime(prev => {
        if (prev === target.response) return prev;
        done = false;
        const diff = target.response - prev;
        const val = prev + Math.sign(diff) * Math.max(1, Math.floor(Math.abs(diff) * 0.18));
        return Math.sign(diff) > 0 ? Math.min(val, target.response) : Math.max(val, target.response);
      });
      
      if (!done) {
        timer = setTimeout(step, 25);
      }
    };
    
    timer = setTimeout(step, 25);
    return () => clearTimeout(timer);
  }, [era]);

  // Color scheme bindings based on active Temporal Era
  const eraPrimaryColors = ['#137fec', '#a855f7', '#10b981'];
  const eraGlowColors = [
    'from-blue-500/10 via-transparent to-transparent',
    'from-purple-500/10 via-transparent to-transparent',
    'from-emerald-500/10 via-transparent to-transparent'
  ];

  // Simulated Terminal Content based on Era
  const terminalContent = [
    {
      command: 'afrixtech deploy --region africa-west',
      logs: [
        '⠋ Building production bundle...',
        '✓ Deployed to 4 edge regions',
        '→ https://api.afrixtech.com  [200 OK]'
      ],
      tag: 'Edge Active'
    },
    {
      command: 'afrixtech scale --edge-nodes=5000 --ai-optimised',
      logs: [
        '⠋ Scaling global neural mesh...',
        '✓ Instantiated 5,000 edge instances',
        '→ https://mesh.afrixtech.ai  [200 OK] (latency: 80ms)'
      ],
      tag: 'Neural Mesh'
    },
    {
      command: 'afrixtech hyper-cluster status --quantum-mode',
      logs: [
        '⠋ Synchronizing quantum mesh entanglements...',
        '✓ Connected to 1,500 entangle nodes',
        '→ https://q.afrixtech.io  [200 OK] (latency: <5ms)'
      ],
      tag: 'Quantum Sync'
    }
  ];

  const eras = [
    { year: '2026', label: 'Present Day' },
    { year: '2030', label: 'AI Scale' },
    { year: '2035', label: 'Quantum Sync' }
  ];

  return (
    <div 
      className="w-full relative min-h-screen bg-black pt-32 pb-24 overflow-x-clip transition-all duration-700" 
      style={{ '--color-primary': eraPrimaryColors[era] } as React.CSSProperties}
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Dynamic Ambient glow orbs */}
      <div className={`absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full transition-all duration-700 blur-[120px] pointer-events-none ${era === 0 ? 'bg-blue-500/15' : era === 1 ? 'bg-purple-500/15' : 'bg-emerald-500/15'}`} />
      <div className={`absolute bottom-1/3 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full transition-all duration-700 blur-[100px] pointer-events-none ${era === 0 ? 'bg-indigo-500/10' : era === 1 ? 'bg-pink-500/10' : 'bg-teal-500/10'}`} />

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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 transition-all duration-700">
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

                  {/* 4D Era Control Panel */}
                  <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-[#050505]/80 backdrop-blur-md text-left relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs uppercase tracking-[0.15em] font-black text-slate-500">4D Temporal Control Dashboard</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-primary/20 text-primary border border-primary/20 animate-pulse transition-colors duration-700">
                        {eras[era].label}
                      </span>
                    </div>

                    {/* Timeline slider representation */}
                    <div className="relative flex items-center justify-between h-8 mt-2">
                      <div className="absolute left-0 right-0 h-1 bg-slate-800 rounded-full" />
                      <div className="absolute left-0 h-1 bg-primary rounded-full transition-all duration-500" style={{ width: `${(era / 2) * 100}%` }} />
                      
                      {eras.map((e, index) => (
                        <button
                          key={e.year}
                          onClick={() => setEra(index as 0 | 1 | 2)}
                          aria-label={`Switch timeline to year ${e.year}`}
                          className={`z-10 flex flex-col items-center group focus:outline-none`}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            era === index 
                              ? 'bg-black border-primary scale-125 shadow-lg shadow-primary/50' 
                              : 'bg-slate-900 border-slate-700 group-hover:border-slate-500'
                          }`}>
                            {era === index && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                          </div>
                          <span className={`text-xs font-black mt-2 transition-colors duration-300 ${era === index ? 'text-primary' : 'text-slate-500 group-hover:text-slate-300'}`}>
                            {e.year}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inline metrics */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 mt-2 border-t border-white/5 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-700">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </div>
                      <div>
                        <p className="text-white font-black text-sm leading-none min-w-[70px]">{uptime.toFixed(uptime > 99.9 ? (uptime > 99.99 ? 3 : 2) : 1)}%</p>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Uptime SLA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-700">
                        <span className="material-symbols-outlined text-sm">groups</span>
                      </div>
                      <div>
                        <p className="text-white font-black text-sm leading-none min-w-[50px]">{clients.toLocaleString()}+</p>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Global Clients</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-700">
                        <span className="material-symbols-outlined text-sm">speed</span>
                      </div>
                      <div>
                        <p className="text-white font-black text-sm leading-none min-w-[60px]">&lt;{responseTime}ms</p>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Avg Response</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-700">
                        <span className="material-symbols-outlined text-sm">support_agent</span>
                      </div>
                      <div>
                        <p className="text-white font-black text-sm leading-none min-w-[90px] transition-all duration-500">
                          {era === 0 ? '24/7 Live' : era === 1 ? 'Neural Care' : 'Quantum Sync'}
                        </p>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Expert Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Hero visual */}
                <div className="relative w-full flex items-center justify-center z-0 -mt-4 md:mt-0">
                  <div className="relative w-full max-w-[540px]">
                    {/* Main image card */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 transition-shadow duration-700">
                      <Image
                        src="/case-studies/homepage-hero.png"
                        alt="Afrixtech cloud infrastructure dashboard showing global deployment status"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    {/* Floating terminal card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] h-[60%] md:h-[55%] bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 md:p-5 flex flex-col gap-2 md:gap-3 transform md:rotate-[-4deg] md:hover:rotate-0 transition-all duration-500">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">{terminalContent[era].tag}</span>
                      </div>
                      <div className="flex-1 w-full rounded-lg p-3 bg-white/5 font-mono text-xs text-slate-400 overflow-hidden transition-all duration-500">
                        <p><span className="text-emerald-400">$</span> {terminalContent[era].command}</p>
                        {terminalContent[era].logs.map((log, lIdx) => (
                          <p key={lIdx} className={`${lIdx === 0 ? 'text-slate-600 mt-1' : lIdx === 1 ? 'text-emerald-400 mt-1' : 'text-primary mt-1'} transition-colors duration-700`}>
                            {log}
                          </p>
                        ))}
                      </div>
                      <div className="h-10 w-full grid grid-cols-3 gap-2">
                        <div className="bg-primary/15 rounded-lg border border-primary/10 transition-colors duration-700" />
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
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: era === 0 ? '94%' : era === 1 ? '98.5%' : '99.9%' }} />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-[10px] text-slate-600 font-medium">Uptime SLA</span>
                        <span className="text-[10px] text-white font-black">{era === 0 ? '99.9%' : era === 1 ? '99.99%' : '99.999%'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ Partners Bar (Real SVG Logos) ═══ */}
          <section className="border-y border-white/5 bg-[#050505]">
            <div className="mx-auto max-w-7xl px-6 py-8">
              <p className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-6">Technologies We Scale & Support</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-2.5 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer group"
                    aria-label={`Partner technology ${partner.name}`}
                  >
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {partner.svg}
                    </span>
                    <span className="text-sm font-black tracking-tight">{partner.name}</span>
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
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 transition-colors duration-700">Our Expertise</p>
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

          {/* ═══ Customer Testimonials (New glassmorphic Carousel) ═══ */}
          <section className="py-20 px-6 lg:px-20 bg-black border-t border-white/5 relative overflow-hidden">
            <div className={`absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full transition-all duration-700 blur-[100px] pointer-events-none ${era === 0 ? 'bg-blue-500/5' : era === 1 ? 'bg-purple-500/5' : 'bg-emerald-500/5'}`} />
            
            <div className="mx-auto max-w-4xl text-center relative z-10">
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 transition-colors duration-700">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12">
                Trusted by Innovators
              </h2>

              <div className="relative rounded-2xl border border-white/10 bg-[#050505]/70 backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-center">
                <div className="absolute top-4 left-6 text-slate-800 font-serif text-8xl leading-none pointer-events-none select-none">&ldquo;</div>
                
                <div className="relative z-10 transition-all duration-500">
                  <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed italic mb-6">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-base leading-tight">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-slate-500 text-xs mt-1">
                      {testimonials[activeTestimonial].role}, <span className="text-primary font-semibold transition-colors duration-700">{testimonials[activeTestimonial].company}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      activeTestimonial === idx 
                        ? 'bg-primary border-primary scale-110 shadow-md shadow-primary/40' 
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                    }`}
                  />
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 transition-all duration-700">modernize</span>{' '}
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

                    {/* Right: Image (Updated with descriptive Alt) */}
                    <div className="relative w-full lg:w-1/2 h-72 lg:h-[420px] border-t lg:border-t-0 lg:border-l border-white/5">
                      <Image
                        src="/case-studies/homepage-hero.png"
                        alt="Afrixtech modern server cluster showing edge computing modules"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />

                      {/* Overlay stat */}
                      <div className="absolute bottom-6 right-6 px-4 py-3 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center transition-colors duration-700">
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
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-colors duration-700" />
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
