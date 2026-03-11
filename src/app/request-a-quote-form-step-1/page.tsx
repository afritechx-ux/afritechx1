import React from 'react';

export default function AfritechxRequestAQuoteFormStep1() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">

<div className="flex flex-1 overflow-hidden">
<main className="flex-1 flex flex-col overflow-y-auto px-10 py-8">
<div className="max-w-4xl mx-auto w-full flex flex-col gap-8">
<div className="flex flex-col gap-3">
<div className="flex gap-6 justify-between items-center">
<p className="text-lg font-medium leading-normal text-slate-400 font-light">Step 1 of 4: Service Selection</p>
<p className="text-sm font-medium leading-normal text-primary">25%</p>
</div>
<div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<div className="h-full rounded-full bg-primary" style={{ width: `25%` }}></div>
</div>
</div>
<div className="flex flex-col gap-4">
<h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">What services do you need?</h1>
<p className="text-lg font-normal leading-normal text-slate-400 font-light max-w-2xl">Select the primary areas where you need our expertise. You can choose more than one option.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
<label className="relative flex flex-col gap-4 rounded-3xl border-2 border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden p-6 cursor-pointer hover:border-primary/50 transition-colors group">
<input className="absolute opacity-0 w-0 h-0 peer" type="checkbox" />
<div className="absolute top-4 right-4 size-6 rounded-full border-2 border-slate-300 dark:border-slate-700 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="text-primary h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
<span className="material-symbols-outlined text-3xl">cloud</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-xl font-bold leading-tight">Cloud Solutions</h2>
<p className="text-sm font-normal leading-normal text-slate-400 font-light">Scalable cloud architecture, migration, and infrastructure management.</p>
</div>
</label>
<label className="relative flex flex-col gap-4 rounded-3xl border-2 border-primary bg-primary/5 p-6 cursor-pointer group">
<input defaultChecked={true} className="absolute opacity-0 w-0 h-0 peer" type="checkbox" />
<div className="absolute top-4 right-4 size-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-white text-sm">check</span>
</div>
<div className="text-primary h-12 w-12 flex items-center justify-center rounded-lg bg-primary/20">
<span className="material-symbols-outlined text-3xl">memory</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-xl font-bold leading-tight">AI &amp; Machine Learning</h2>
<p className="text-sm font-normal leading-normal text-slate-400 font-light">Intelligent data solutions, predictive analytics, and natural language processing.</p>
</div>
</label>
<label className="relative flex flex-col gap-4 rounded-3xl border-2 border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden p-6 cursor-pointer hover:border-primary/50 transition-colors group">
<input className="absolute opacity-0 w-0 h-0 peer" type="checkbox" />
<div className="absolute top-4 right-4 size-6 rounded-full border-2 border-slate-300 dark:border-slate-700 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="text-primary h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
<span className="material-symbols-outlined text-3xl">desktop_windows</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-xl font-bold leading-tight">Web Development</h2>
<p className="text-sm font-normal leading-normal text-slate-400 font-light">Modern, responsive web applications and enterprise portals.</p>
</div>
</label>
<label className="relative flex flex-col gap-4 rounded-3xl border-2 border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden p-6 cursor-pointer hover:border-primary/50 transition-colors group">
<input className="absolute opacity-0 w-0 h-0 peer" type="checkbox" />
<div className="absolute top-4 right-4 size-6 rounded-full border-2 border-slate-300 dark:border-slate-700 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="text-primary h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
<span className="material-symbols-outlined text-3xl">smartphone</span>
</div>
<div className="flex flex-col gap-2">
<h2 className="text-xl font-bold leading-tight">Mobile App Development</h2>
<p className="text-sm font-normal leading-normal text-slate-400 font-light">Native iOS/Android and cross-platform mobile experiences.</p>
</div>
</label>
</div>
<div className="flex justify-end mt-8">
<button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-slate-900 font-bold text-base hover:bg-primary/90 transition-colors gap-2">
                                Next Step
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
</button>
</div>
</div>
</main>
<aside className="w-80 border-l border-white/10 bg-[#050505]/30 p-6 hidden lg:flex flex-col">
<div className="flex flex-col gap-6 sticky top-6">
<div className="flex flex-col gap-2 border-b border-white/10 pb-4">
<div className="flex items-center gap-2 text-primary mb-2">
<span className="material-symbols-outlined">description</span>
<h3 className="text-lg font-bold leading-normal text-slate-900 dark:text-slate-100">Quote Summary</h3>
</div>
<p className="text-sm text-slate-400 font-light">Your selections will build your custom quote.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Services Selected</h4>
<ul className="flex flex-col gap-3">
<li className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-primary/20 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-sm">memory</span>
</div>
<span className="text-sm font-medium">AI &amp; Machine Learning</span>
</div>
<button className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</li>
</ul>
</div>
</div>
</aside>
</div>
</div>
</div>

      </div>
    </div>
  );
}
