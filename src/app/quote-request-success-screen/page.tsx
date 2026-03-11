import React from 'react';

export default function AfritechxQuoteRequestSuccessScreen() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="layout-container flex h-full grow flex-col">

<main className="flex-1 px-40 py-12 flex justify-center">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<div className="flex flex-col items-center gap-8 py-8">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 flex items-center justify-center bg-primary/10 text-primary">
<span className="material-symbols-outlined text-6xl">check_circle</span>
</div>
<div className="flex max-w-[560px] flex-col items-center gap-3">
<h1 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Request Received Successfully</h1>
<p className="text-base font-normal leading-relaxed text-slate-400 font-light text-center">
                            Thank you for reaching out to Afritechx. Our team is reviewing your project details and will be in touch within 24 hours.
                        </p>
</div>
<button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                        Back to Home
                    </button>
</div>
<div className="mt-12">
<h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-white/10 mb-6">Next Steps</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex gap-4 rounded-3xl border border-white/10 bg-white dark:bg-[#15202b] p-6 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">mail</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-bold leading-tight">Check your email</h3>
<p className="text-slate-400 font-light text-sm font-normal leading-relaxed">We've sent a confirmation email with your request details and a reference number for your records.</p>
</div>
</div>
<div className="flex gap-4 rounded-3xl border border-primary dark:border-primary/50 bg-primary/5 dark:bg-primary/10 p-6 relative overflow-hidden">
<div className="flex-shrink-0 size-12 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">calendar_month</span>
</div>
<div className="flex flex-col gap-2 z-10">
<h3 className="text-lg font-bold leading-tight">Book a discovery call</h3>
<p className="text-slate-400 font-light text-sm font-normal leading-relaxed mb-3">Schedule a quick 30-minute call to discuss your project requirements in more detail with our experts.</p>
<button className="self-start text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    View Calendar <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="absolute right-0 top-0 opacity-5 dark:opacity-10 transform translate-x-1/4 -translate-y-1/4">
<span className="material-symbols-outlined text-[150px]">event_available</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

      </div>
    </div>
  );
}
