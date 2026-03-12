import React from 'react';

export default function AfrixtechMobileServiceStatusFeed() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-20 md:pb-0">
<div className="layout-container flex h-full grow flex-col w-full max-w-3xl mx-auto">

<main className="flex-1 px-4 md:px-10 py-6 flex flex-col gap-6">
<section className="flex flex-col gap-4 text-center items-center py-6">
<div className="relative size-32 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle className="text-border-dark stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
<circle className="text-green-500 stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="0" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-green-500">100%</span>
<span className="text-xs text-slate-400">Operational</span>
</div>
</div>
<div className="flex flex-col gap-2 max-w-md">
<h1 className="text-2xl font-bold leading-tight">All Systems Go</h1>
<p className="text-sm text-slate-400">Current system status for all Afrixtech services. Last updated 2 minutes ago.</p>
</div>
</section>
<section className="flex flex-col gap-4">
<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Current Status</h2>
<div className="flex flex-col gap-3">
<div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-border-dark">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-lg bg-border-dark size-10 text-primary">
<span className="material-symbols-outlined">cloud</span>
</div>
<div className="flex flex-col">
<p className="text-base font-medium leading-normal">Cloud Infrastructure</p>
<p className="text-xs text-slate-400">US East (N. Virginia)</p>
</div>
</div>
<div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
<div className="size-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-green-500">Operational</span>
</div>
</div>
<div className="h-10 w-full overflow-hidden mt-2 relative">
<div className="flex items-end h-full w-full gap-[2px] opacity-70">
<div className="w-full h-[95%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[98%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[90%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/80 rounded-t-sm"></div>
</div>
<div className="absolute bottom-0 left-0 text-[10px] text-slate-500">90 days ago</div>
<div className="absolute bottom-0 right-0 text-[10px] text-slate-500">Today</div>
</div>
</div>
<div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-border-dark">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-lg bg-border-dark size-10 text-primary">
<span className="material-symbols-outlined">api</span>
</div>
<div className="flex flex-col">
<p className="text-base font-medium leading-normal">API Services</p>
<p className="text-xs text-slate-400">Global Endpoints</p>
</div>
</div>
<div className="flex items-center gap-2 bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/20">
<div className="size-2 rounded-full bg-yellow-500"></div>
<span className="text-xs font-medium text-yellow-500">Degraded</span>
</div>
</div>
<div className="h-10 w-full overflow-hidden mt-2 relative">
<div className="flex items-end h-full w-full gap-[2px] opacity-70">
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[80%] bg-yellow-500/60 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[60%] bg-yellow-500/80 rounded-t-sm"></div>
</div>
</div>
</div>
<div className="flex flex-col gap-3 rounded-xl bg-surface-dark p-4 border border-border-dark">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-lg bg-border-dark size-10 text-primary">
<span className="material-symbols-outlined">database</span>
</div>
<div className="flex flex-col">
<p className="text-base font-medium leading-normal">Database Clusters</p>
<p className="text-xs text-slate-400">EU West (Ireland)</p>
</div>
</div>
<div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
<div className="size-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-green-500">Operational</span>
</div>
</div>
<div className="h-10 w-full overflow-hidden mt-2 relative">
<div className="flex items-end h-full w-full gap-[2px] opacity-70">
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/40 rounded-t-sm"></div>
<div className="w-full h-[100%] bg-green-500/80 rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>
</main>
<button className="fixed bottom-6 right-6 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 h-14 w-14 md:h-12 md:w-auto md:px-6 gap-2 transition-transform hover:scale-105 z-50">
<span className="material-symbols-outlined">mail</span>
<span className="hidden md:inline font-medium">Subscribe to Updates</span>
</button>

</div>
</div>

      </div>
    </div>
  );
}
