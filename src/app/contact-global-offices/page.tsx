import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

/* ── Data ───────────────────────────────────────────────────────── */

const offices = [
  {
    city: 'Kumasi',
    country: 'Ghana',
    address: 'Kumasi, Ashanti Region, Ghana',
    phone: '+233 245 171 589',
    icon: 'location_city',
    colorClasses: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', accent: 'bg-blue-500' },
    badge: 'HQ',
  },
  {
    city: 'Accra',
    country: 'Ghana',
    address: 'Accra, Greater Accra Region, Ghana',
    phone: '+233 209 624 647',
    icon: 'location_city',
    colorClasses: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', accent: 'bg-purple-500' },
  },
  {
    city: 'San Francisco',
    country: 'USA',
    address: '789 Silicon Blvd, SOMA, San Francisco, CA 94107',
    phone: '+1 415 555 0198',
    icon: 'location_city',
    colorClasses: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', accent: 'bg-emerald-500' },
  },
];

const contactMethods = [
  { icon: 'mail', label: 'Email Us', value: 'afritechx@gmail.com', href: 'mailto:afritechx@gmail.com', color: 'text-primary' },
  { icon: 'support_agent', label: 'Support', value: '24/7 Available', href: '#', color: 'text-emerald-400' },
  { icon: 'schedule', label: 'Response Time', value: 'Under 2 Hours', href: '#', color: 'text-orange-400' },
];

const socials = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'X / Twitter', icon: '𝕏', href: '#' },
  { label: 'GitHub', icon: 'code', href: '#', isMaterial: true },
];

/* ── Components ────────────────────────────────────────────────── */

function OfficeCard({ office }: { office: typeof offices[0] }) {
  const c = office.colorClasses;
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#050505] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconText} transition-transform duration-300 group-hover:scale-110`}>
            <span className="material-symbols-outlined text-lg">{office.icon}</span>
          </div>
          <div>
            <h3 className="text-white font-bold tracking-tight group-hover:text-primary transition-colors duration-300">{office.city}</h3>
            <p className="text-slate-600 text-xs font-medium">{office.country}</p>
          </div>
        </div>
        {office.badge && (
          <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest">{office.badge}</span>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
        <div className="flex items-start gap-2.5 text-slate-400">
          <span className="material-symbols-outlined text-sm mt-0.5 text-slate-600">map</span>
          <p className="text-sm leading-relaxed">{office.address}</p>
        </div>
        <div className="flex items-center gap-2.5 text-slate-400">
          <span className="material-symbols-outlined text-sm text-slate-600">phone</span>
          <p className="text-sm font-medium">{office.phone}</p>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${c.accent} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export const metadata = {
    title: 'Contact Global Offices',
    description: 'Get in touch with the Afrixtech enterprise team. Secure a consultation for your next major digital infrastructure project.',
};

export default function AfrixtechContactGlobalOffices() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <main className="flex flex-1 justify-center py-10 px-4 md:px-10 lg:px-20">
          <div className="flex flex-col w-full max-w-[1200px]">

            {/* ═══ Hero ═══ */}
            <section className="mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                We Respond Within 2 Hours
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4">
                Let&apos;s Build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                  Something Great
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Whether you&apos;re looking for a technology partner, have a project idea, or just want to say hello — we&apos;d love to hear from you.
              </p>
            </section>

            {/* ═══ Main Grid ═══ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left column: Offices + Contact Methods */}
              <div className="lg:col-span-7 flex flex-col gap-8">

                {/* Quick contact methods */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className={`material-symbols-outlined text-lg ${method.color}`}>{method.icon}</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{method.label}</p>
                        <p className="text-white text-sm font-semibold">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Global offices */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-[2px] bg-primary" />
                    <p className="text-primary font-bold uppercase tracking-widest text-xs">Global Presence</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {offices.map((office) => (
                      <OfficeCard key={office.city} office={office} />
                    ))}

                    {/* Direct inquiries card */}
                    <div className="relative flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      <div className="relative z-10">
                        <h3 className="text-white font-bold tracking-tight mb-4">Direct Inquiries</h3>
                        <div className="flex flex-col gap-3">
                          <a className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors" href="mailto:afritechx@gmail.com">
                            <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                              <span className="material-symbols-outlined text-sm">mail</span>
                            </div>
                            <span className="text-sm font-medium">afritechx@gmail.com</span>
                          </a>
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                              <span className="material-symbols-outlined text-sm">support_agent</span>
                            </div>
                            <span className="text-sm font-medium">Support: 24/7 Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Connect</p>
                  <div className="h-px flex-1 bg-white/5" />
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        className="w-11 h-11 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        href={s.href}
                        title={s.label}
                      >
                        {s.isMaterial ? (
                          <span className="material-symbols-outlined text-lg">{s.icon}</span>
                        ) : (
                          <span className="font-bold text-base">{s.icon}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Contact form */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#050505] p-1">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <div className="relative rounded-[12px] p-7">
                      <div className="flex flex-col gap-2 mb-7">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold text-primary ring-1 ring-white/10 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-xs">edit_note</span>
                          Quick Form
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Send a Message</h2>
                        <p className="text-slate-500 text-sm">We&apos;ll get back to you within 2 business hours.</p>
                      </div>

                      <ContactForm />
                    </div>
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
