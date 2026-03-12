import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Data ───────────────────────────────────────────────────────── */

const stats = [
  { value: '5+', label: 'Years of Excellence', icon: 'calendar_month' },
  { value: '20+', label: 'Projects Delivered', icon: 'rocket_launch' },
  { value: '1', label: 'Core Team', icon: 'group' },
  { value: 'Ghana', label: 'Based in Kumasi', icon: 'public' },
];

const values = [
  {
    icon: 'all_inclusive',
    title: 'Agile Methodology',
    description: 'Iterative development cycles with continuous feedback loops to ensure we meet your evolving market needs with speed and precision.',
    color: 'blue',
    colorClasses: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', accent: 'bg-blue-500' },
  },
  {
    icon: 'cloud_done',
    title: 'Cloud Native',
    description: 'Scalable, resilient solutions built for modern cloud infrastructure (AWS, Azure, GCP) ensuring 99.9% uptime guarantee.',
    color: 'purple',
    colorClasses: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', accent: 'bg-purple-500' },
  },
  {
    icon: 'verified_user',
    title: 'Security First',
    description: 'Enterprise-grade security embedded in every line of code, adhering to OWASP standards and global compliance protocols.',
    color: 'emerald',
    colorClasses: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', accent: 'bg-emerald-500' },
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Founded in Kumasi',
    description: 'Started as a small consultancy of 3 engineers in Kumasi, Ghana, aiming to digitize local SMEs across West Africa.',
    icon: 'flag',
    side: 'left' as const,
  },
  {
    year: '2020',
    title: 'Pan-African Expansion',
    description: 'Expanded with remote hubs in Accra and Takoradi. Team grew to 20+ full-time staff serving clients across Ghana and beyond.',
    icon: 'public',
    side: 'right' as const,
  },
  {
    year: '2022',
    title: 'Series A Partnerships',
    description: 'Secured major contracts with fintech unicorns and established our enterprise division for large-scale clients.',
    icon: 'trending_up',
    side: 'left' as const,
  },
  {
    year: '2024',
    title: 'Afrixtech Academy',
    description: 'Launched our internal training program to mentor the next generation of African tech talent and future leaders.',
    icon: 'school',
    side: 'right' as const,
  },
];

const team = [
  {
    name: 'Kusi Gabriel Kwaku',
    role: 'Chief Executive Officer & Founder',
    bio: 'Visionary tech entrepreneur based in Kumasi, Ghana. Leading Afrixtech\'s mission to deliver world-class digital solutions across Africa.',
    image: '/case-studies/ceo.jpeg',
    isCeo: true,
  },
  {
    name: 'To Be Appointed',
    role: 'Chief Technology Officer',
    bio: 'We are actively seeking a talented CTO to lead our engineering vision and technical strategy.',
    image: '',
    isCeo: false,
  },
  {
    name: 'To Be Appointed',
    role: 'Head of Product',
    bio: 'This key role will drive product strategy, user research, and roadmap execution for our growing portfolio.',
    image: '',
    isCeo: false,
  },
  {
    name: 'To Be Appointed',
    role: 'Lead Engineer',
    bio: 'We are looking for a skilled lead engineer to architect and build our next generation of enterprise solutions.',
    image: '',
    isCeo: false,
  },
];

/* ── Components ────────────────────────────────────────────────── */

function ValueCard({ value }: { value: typeof values[0] }) {
  const c = value.colorClasses;
  return (
    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-[#050505] p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
      <div className={`size-14 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconText} transition-transform duration-300 group-hover:scale-110`}>
        <span className="material-symbols-outlined text-[28px]">{value.icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
      </div>
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${c.accent} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const isLeft = item.side === 'left';
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group mb-16 last:mb-0">
      {/* Left content */}
      <div className={`md:w-5/12 ${isLeft ? 'md:text-right md:pr-12 pl-12 md:pl-0 pt-1 pb-4 md:py-0' : 'md:pr-12 hidden md:block'} order-2 md:order-1`}>
        {isLeft && (
          <div className="group/card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
              <span className="text-primary font-black text-sm">{item.year}</span>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-5 rounded-full bg-[#050505] border-[3px] border-primary/40 group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(19,127,236,0.4)]" />
      </div>

      {/* Right content */}
      <div className={`md:w-5/12 ${!isLeft ? 'md:pl-12' : 'md:pl-12 hidden md:block'} order-3`}>
        {!isLeft && (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
              <span className="text-primary font-black text-sm">{item.year}</span>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        )}
      </div>

      {/* Mobile-only content for right-sided items */}
      {!isLeft && (
        <div className="md:hidden order-2 pl-12 pt-1 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
            <span className="text-primary font-black text-sm">{item.year}</span>
          </div>
          <h4 className="text-xl font-bold text-white tracking-tight mb-2">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      )}
    </div>
  );
}

function TeamCard({ member }: { member: typeof team[0] }) {
  const isTba = !member.image;
  return (
    <div className={`group relative flex flex-col rounded-2xl border border-white/5 bg-[#050505] overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${member.isCeo ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      {/* Photo or Placeholder */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
        {isTba ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-800/50 to-[#050505]">
            <div className="w-20 h-20 rounded-full bg-white/[0.03] border-2 border-dashed border-white/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl text-slate-600">person_add</span>
            </div>
            <span className="text-xs font-bold text-primary/60 uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 border border-primary/10">We&apos;re Hiring</span>
          </div>
        ) : (
          <>
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

            {/* Social links overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all" href="mailto:afritechx@gmail.com">
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h4 className={`text-lg font-bold tracking-tight group-hover:text-primary transition-colors duration-300 ${isTba ? 'text-slate-500' : 'text-white'}`}>{member.name}</h4>
        <p className="text-primary/70 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{member.bio}</p>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export const metadata = {
    title: 'Company Profile & Vision',
    description: 'Learn about Afrixtech. We are engineered for scale, driving pan-African digital expansion and global technological innovation from Kumasi to the world.',
};

export default function AfrixtechAboutTeamProfile() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <main className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-10 pb-20">

            {/* ═══ Hero Section ═══ */}
            <section className="mt-8 md:mt-12">
              <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:gap-16">
                {/* Left: Text */}
                <div className="flex flex-col gap-6 md:w-1/2">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Established 2018
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-[4.25rem] font-black tracking-tight text-white leading-[1.05]">
                    Architecting the<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                      Digital Backbone
                    </span>{' '}
                    of Africa
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                    We are a collective of engineers, designers, and strategists obsessed with building scalable software that solves real-world problems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 md:mt-0">
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
                      href="/careers-open-roles"
                    >
                      Join Our Team
                    </Link>
                    <Link
                      className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                      href="#story"
                    >
                      Read Our Story
                    </Link>
                  </div>
                </div>

                {/* Right: Hero image */}
                <div className="w-full md:w-1/2 relative group -mt-2 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl rotate-2 transform scale-[1.02]" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src="/case-studies/about-hero.png"
                      alt="Afrixtech team collaborating in modern office"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 z-10">
                      <p className="text-white/70 text-xs font-medium">Kumasi HQ</p>
                      <p className="text-white font-bold text-lg">Innovation Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══ Stats Bar ═══ */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 py-12 border-y border-white/5 my-16">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-lg">{stat.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">{stat.value}</h3>
                  <p className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </section>

            {/* ═══ Our DNA / Values ═══ */}
            <section className="py-16" id="story">
              <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-14">
                <p className="text-primary font-bold uppercase tracking-widest text-xs">Our DNA</p>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  The Afrixtech{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Way</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our engineering culture is built on precision, agility, and a relentless pursuit of excellence. We don&apos;t just write code — we craft resilient systems.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {values.map((value) => (
                  <ValueCard key={value.title} value={value} />
                ))}
              </div>
            </section>

            {/* ═══ Timeline ═══ */}
            <section className="py-16">
              <div className="text-center mb-14">
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Milestones</p>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Journey</span>
                </h2>
              </div>
              <div className="relative pl-8 md:pl-0">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/30 via-white/10 to-transparent -translate-x-1/2" />

                {timeline.map((item, index) => (
                  <TimelineItem key={item.year} item={item} index={index} />
                ))}
              </div>
            </section>

            {/* ═══ Team Section ═══ */}
            <section className="py-16">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Leadership</p>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    Meet the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Executives</span>
                  </h2>
                </div>
                <Link
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group shrink-0"
                  href="/careers-open-roles"
                >
                  View Full Team
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {team.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </section>

            {/* ═══ CTA Banner ═══ */}
            <section className="mt-8">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-1">
                <div className="relative overflow-hidden rounded-[20px] px-8 py-20 sm:px-16 sm:py-24 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-purple-500/10" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

                  <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-white/10">
                      <span className="material-symbols-outlined text-sm">diversity_3</span>
                      We&apos;re Hiring
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                      Ready to{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">build the future</span>?
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                      Whether you&apos;re a startup looking for an MVP or an enterprise needing digital transformation, our team is ready.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        className="inline-flex h-13 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
                        href="."
                      >
                        Start a Project
                      </Link>
                      <Link
                        className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all gap-2"
                        href="/careers-open-roles"
                      >
                        View Careers
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
