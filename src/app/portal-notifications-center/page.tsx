import React from 'react';

export default function AfritechxPortalNotificationsCenter() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">

<div className="flex flex-col lg:flex-row mt-8 gap-8">

<aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
<div>
<h1 className="text-2xl md:text-[32px] font-bold leading-tight mb-2">Notifications Center</h1>
<p className="text-slate-500 text-sm leading-relaxed">Stay updated with your latest projects, invoices, and system alerts at Afritechx.</p>
</div>
<nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[20px]">notifications</span>
<span>All Notifications</span>
<span className="ml-auto bg-primary text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-primary/5 text-slate-400 font-light font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[20px]">view_kanban</span>
<span>Project Updates</span>
<span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">4</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-primary/5 text-slate-400 font-light font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[20px]">attach_money</span>
<span>Finance</span>
<span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">1</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-primary/5 text-slate-400 font-light font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[20px]">desktop_windows</span>
<span>System</span>
<span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800">7</span>
</a>
</nav>
</aside>

<main className="flex-1 flex flex-col gap-4">

<div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a2b2f]/80 backdrop-blur-sm border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all hover:border-purple-500/50">
<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(13,204,242,0.6)]"></div>
<div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-purple-500/20 text-purple-400">
<span className="material-symbols-outlined text-2xl">warning</span>
</div>
<div className="flex flex-1 flex-col justify-center min-w-0">
<div className="flex items-baseline justify-between gap-2 mb-1">
<p className="text-slate-900 dark:text-slate-100 text-base font-semibold truncate">Critical System Maintenance</p>
<p className="text-primary text-xs font-medium shrink-0">Just now</p>
</div>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-2">Scheduled downtime for server upgrades tonight at 02:00 AM UTC. Expect approximately 2 hours of unavailability for the main staging environment.</p>
</div>
<div className="shrink-0 sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-9 px-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 text-sm font-medium transition-colors border border-purple-500/30">
                                        View Details
                                    </button>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a2b2f]/50 backdrop-blur-sm border border-slate-200 dark:border-primary/10 transition-all hover:bg-[#050505] dark:hover:bg-[#1a2b2f]/80">
<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(13,204,242,0.6)]"></div>
<div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400">
<span className="material-symbols-outlined text-2xl">check_circle</span>
</div>
<div className="flex flex-1 flex-col justify-center min-w-0">
<div className="flex items-baseline justify-between gap-2 mb-1">
<p className="text-slate-900 dark:text-slate-100 text-base font-semibold truncate">New Milestone Reached: E-Commerce App</p>
<p className="text-slate-500 text-xs font-medium shrink-0">10 mins ago</p>
</div>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-2">The 'Shopping Cart' feature has been successfully completed and pushed to staging for client review.</p>
</div>
<div className="shrink-0 sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-9 px-4 bg-slate-100 dark:bg-primary/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-primary/20 text-sm font-medium transition-colors">
                                        Review Milestone
                                    </button>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a2b2f]/50 backdrop-blur-sm border border-slate-200 dark:border-primary/10 transition-all hover:bg-[#050505] dark:hover:bg-[#1a2b2f]/80">
<div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
<span className="material-symbols-outlined text-2xl">receipt_long</span>
</div>
<div className="flex flex-1 flex-col justify-center min-w-0">
<div className="flex items-baseline justify-between gap-2 mb-1">
<p className="text-slate-400 font-light text-base font-medium truncate">Invoice #INV-2023-08 Generated</p>
<p className="text-slate-400 dark:text-slate-500 text-xs font-medium shrink-0">2 hours ago</p>
</div>
<p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed line-clamp-2">Your monthly retainer invoice for August is now available for download and processing.</p>
</div>
<div className="shrink-0 sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-9 px-4 bg-transparent border border-slate-200 dark:border-primary/20 text-slate-400 font-light hover:bg-[#050505] dark:hover:bg-primary/10 text-sm font-medium transition-colors">
                                        View Invoice
                                    </button>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a2b2f]/50 backdrop-blur-sm border border-slate-200 dark:border-primary/10 transition-all hover:bg-[#050505] dark:hover:bg-[#1a2b2f]/80">
<div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
<span className="material-symbols-outlined text-2xl">alternate_email</span>
</div>
<div className="flex flex-1 flex-col justify-center min-w-0">
<div className="flex items-baseline justify-between gap-2 mb-1">
<p className="text-slate-400 font-light text-base font-medium truncate">Sarah mentioned you in PR #42</p>
<p className="text-slate-400 dark:text-slate-500 text-xs font-medium shrink-0">Yesterday</p>
</div>
<p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed line-clamp-2">"Can you review the authentication flow changes when you have a moment?"</p>
</div>
<div className="shrink-0 sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-9 px-4 bg-transparent border border-slate-200 dark:border-primary/20 text-slate-400 font-light hover:bg-[#050505] dark:hover:bg-primary/10 text-sm font-medium transition-colors">
                                        View Pull Request
                                    </button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
