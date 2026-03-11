import React from 'react';

export default function AfritechxMobileOnboardingChecklist() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="flex-1 flex flex-col max-w-md mx-auto w-full bg-white dark:bg-[#151b2b] shadow-xl relative min-h-screen">



<main className="flex-1 overflow-y-auto pb-24">

<div className="p-6 pb-4 flex justify-between items-start gap-4">
<div>
<h1 className="text-2xl font-bold text-white tracking-tight mb-1">Onboarding</h1>
<p className="text-sm text-slate-500">Track your project setup progress.</p>
</div>

<div className="relative size-16 flex-shrink-0">
<svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
<circle className="stroke-slate-200 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
<circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset="55" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-bold text-white tracking-tight">45%</span>
</div>
</div>
</div>

<div className="px-6 flex flex-col gap-4">

<div className="relative pl-6 before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-0.5 before:bg-primary">
<div className="absolute left-0 top-3 size-6 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30 z-10 border-2 border-white dark:border-[#151b2b]">
<span className="material-symbols-outlined text-white text-[14px]">check</span>
</div>
<details className="group bg-[#050505] dark:bg-slate-800/50 rounded-3xl border border-white/10 overflow-hidden shadow-sm" open={true}>
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex flex-col">
<h3 className="font-semibold text-white tracking-tight line-through text-slate-500">1. Project Kickoff</h3>
<span className="text-xs text-slate-500 mt-0.5">Completed on Oct 12</span>
</div>
<span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light border-t border-white/10/50 pt-3">
<p>Initial meeting completed. All key stakeholders aligned on project objectives and communication channels established.</p>
<div className="mt-3 flex items-center gap-2 text-primary font-medium text-xs bg-primary/10 w-fit px-3 py-1.5 rounded-full">
<span className="material-symbols-outlined text-[14px]">download</span>
                                Kickoff_Notes.pdf
                            </div>
</div>
</details>
</div>

<div className="relative pl-6 before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
<div className="absolute left-0 top-3 size-6 rounded-full bg-white dark:bg-[#151b2b] border-2 border-primary flex items-center justify-center z-10">
<div className="size-2 rounded-full bg-primary animate-pulse"></div>
</div>
<details className="group bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-3xl border-2 border-primary overflow-hidden shadow-md shadow-primary/10" open={true}>
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex flex-col">
<h3 className="font-bold text-white tracking-tight text-base">2. Requirement Gathering</h3>
<span className="text-xs text-primary font-medium mt-0.5">In Progress - Action Required</span>
</div>
<span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light border-t border-white/5 pt-3 flex flex-col gap-3">
<p>Please provide the necessary access credentials and complete the technical requirements questionnaire.</p>
<button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2.5 px-4 rounded-lg font-medium transition-colors">
<span className="material-symbols-outlined text-[18px]">assignment</span>
                                Complete Questionnaire
                            </button>
<div className="flex items-center gap-3 p-3 rounded-lg bg-[#050505] dark:bg-slate-800/80 border border-white/10">
<div className="size-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
<span className="material-symbols-outlined">key</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white tracking-tight truncate">API Credentials</p>
<p className="text-xs text-slate-500">Pending submission</p>
</div>
<button className="text-primary text-sm font-medium hover:underline">Upload</button>
</div>
</div>
</details>
</div>

<div className="relative pl-6 before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
<div className="absolute left-0 top-3 size-6 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-[#151b2b] flex items-center justify-center z-10">
<span className="text-[10px] font-bold text-slate-500">3</span>
</div>
<details className="group bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-3xl border border-white/10 overflow-hidden shadow-sm opacity-70">
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex flex-col">
<h3 className="font-medium text-white tracking-tight">3. Resource Allocation</h3>
<span className="text-xs text-slate-500 mt-0.5">Locked</span>
</div>
<span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light border-t border-white/5 pt-3">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-slate-400 mt-0.5">lock</span>
<p>Complete requirement gathering to unlock. We will assign dedicated developers and PMs based on your tech stack.</p>
</div>
</div>
</details>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-3 size-6 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-[#151b2b] flex items-center justify-center z-10">
<span className="text-[10px] font-bold text-slate-500">4</span>
</div>
<details className="group bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-3xl border border-white/10 overflow-hidden shadow-sm opacity-70">
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex flex-col">
<h3 className="font-medium text-white tracking-tight">4. Initial Setup</h3>
<span className="text-xs text-slate-500 mt-0.5">Locked</span>
</div>
<span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 font-light border-t border-white/5 pt-3">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-slate-400 mt-0.5">lock</span>
<p>Environment provisioning, repository setup, and CI/CD pipeline configuration.</p>
</div>
</div>
</details>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-[#151b2b] border-t border-white/10 pb-safe pt-2 px-6 flex justify-between items-center z-20">
<a className="flex flex-col items-center gap-1 p-2 text-primary" href="#">
<span className="material-symbols-outlined">rocket_launch</span>
<span className="text-[10px] font-medium">Onboarding</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">
<span className="material-symbols-outlined">task_alt</span>
<span className="text-[10px] font-medium">Tasks</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">
<span className="material-symbols-outlined">description</span>
<span className="text-[10px] font-medium">Docs</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">
<span className="material-symbols-outlined">support_agent</span>
<span className="text-[10px] font-medium">Support</span>
</a>
</nav>
</div>

      </div>
    </div>
  );
}
