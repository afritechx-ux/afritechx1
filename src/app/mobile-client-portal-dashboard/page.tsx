import React from 'react';

export default function AfrixtechMobileClientPortalDashboard() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full max-w-md flex-col bg-black group/design-root overflow-x-hidden shadow-xl border-x border-white/10">



<main className="flex-1 overflow-y-auto pb-24">

<div className="px-4 pt-6 pb-2">
<h2 className="text-2xl font-bold text-white tracking-tight">Welcome back, Sarah 👋</h2>
<p className="text-sm text-slate-500 mt-1">Here is the latest on your projects.</p>
</div>

<div className="p-4">
<div className="flex flex-col items-center justify-center rounded-xl p-6 shadow-md border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="w-full flex justify-between items-start mb-6">
<div>
<p className="text-sm font-medium text-slate-500">Current Sprint</p>
<h3 className="text-lg font-bold text-white tracking-tight">Mobile App MVP</h3>
</div>
<span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">On Track</span>
</div>

<div className="relative size-40 flex items-center justify-center mb-4">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">

<circle className="text-slate-100 dark:text-slate-800" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>

<circle className="text-primary drop-shadow-[0_0_8px_rgba(13,242,242,0.5)]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="62.8" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-white tracking-tight">75%</span>
<span className="text-xs text-slate-500">Completed</span>
</div>
</div>
<div className="w-full flex justify-between text-sm mt-2">
<span className="text-slate-500">Sprint 4 ends in:</span>
<span className="font-medium text-white tracking-tight">3 Days</span>
</div>
</div>
</div>

<div className="px-4 py-2">
<h3 className="text-lg font-bold text-white tracking-tight mb-4">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary text-background-dark font-medium transition-transform active:scale-95 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined mb-2 text-2xl">payment</span>
<span className="text-sm font-bold">Pay Invoice</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden text-slate-700 dark:text-slate-200 hover:bg-[#050505] dark:hover:bg-slate-800 transition-colors active:scale-95">
<span className="material-symbols-outlined mb-2 text-2xl text-primary">forum</span>
<span className="text-sm font-medium">Message PM</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden text-slate-700 dark:text-slate-200 hover:bg-[#050505] dark:hover:bg-slate-800 transition-colors active:scale-95">
<span className="material-symbols-outlined mb-2 text-2xl text-primary">upload_file</span>
<span className="text-sm font-medium">Upload Doc</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden text-slate-700 dark:text-slate-200 hover:bg-[#050505] dark:hover:bg-slate-800 transition-colors active:scale-95">
<span className="material-symbols-outlined mb-2 text-2xl text-primary">calendar_month</span>
<span className="text-sm font-medium">Schedule Call</span>
</button>
</div>
</div>

<div className="px-4 py-6">
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-bold text-white tracking-tight">Recent Activity</h3>
<button className="text-sm text-primary font-medium hover:underline">View All</button>
</div>
<div className="flex flex-col gap-4 relative">

<div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 -z-10"></div>

<div className="flex gap-4 items-start">
<div className="size-8 rounded-full bg-primary/20 border-2 border-background-light dark:border-background-dark flex items-center justify-center text-primary shrink-0 z-10 mt-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span>
</div>
<div className="flex-1 pb-4 border-b border-white/5/50">
<p className="text-sm font-medium text-white tracking-tight">API Integration Completed</p>
<p className="text-xs text-slate-500 mt-1">Backend team finished Stripe integration.</p>
<p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-mono">2 hours ago</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-background-light dark:border-background-dark flex items-center justify-center text-slate-500 shrink-0 z-10 mt-0.5">
<span className="material-symbols-outlined text-sm">description</span>
</div>
<div className="flex-1 pb-4 border-b border-white/5/50">
<p className="text-sm font-medium text-white tracking-tight">New Invoice Generated</p>
<p className="text-xs text-slate-500 mt-1">Invoice #INV-2023-089 for $4,500.</p>
<p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-mono">Yesterday</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-background-light dark:border-background-dark flex items-center justify-center text-slate-500 shrink-0 z-10 mt-0.5">
<span className="material-symbols-outlined text-sm">comment</span>
</div>
<div className="flex-1 pb-1">
<p className="text-sm font-medium text-white tracking-tight">Message from Project Manager</p>
<p className="text-xs text-slate-500 mt-1">"Please review the latest design mockups..."</p>
<p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-mono">Oct 12</p>
</div>
</div>
</div>
</div>

<div className="h-6"></div>
</main>

<nav className="fixed bottom-0 w-full max-w-md bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden border-t border-white/10 pb-safe z-50">
<div className="flex justify-around items-center h-16 px-2">
<a className="flex flex-col items-center justify-center w-full h-full text-primary gap-1" href=".">
<div className="relative">
<span className="material-symbols-outlined pb-1">dashboard</span>

<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
</div>
<span className="text-[10px] font-medium">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors gap-1" href=".">
<span className="material-symbols-outlined pb-1">folder_open</span>
<span className="text-[10px] font-medium">Projects</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors gap-1" href=".">
<span className="material-symbols-outlined pb-1">payments</span>
<span className="text-[10px] font-medium">Finance</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors gap-1" href=".">
<span className="material-symbols-outlined pb-1">support_agent</span>
<span className="text-[10px] font-medium">Support</span>
</a>
</div>
</nav>
</div>

      </div>
    </div>
  );
}
