import React from 'react';

export default function AfrixtechMobileProjectMilestones() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="flex flex-col h-full min-h-screen max-w-md mx-auto relative overflow-hidden bg-black shadow-2xl">



<div className="px-5 py-6">
<h1 className="text-3xl font-bold leading-tight mb-2">Project Milestones</h1>
<p className="text-slate-500 text-sm font-medium">Track your project progress</p>
</div>

<div className="flex-1 px-5 pb-24 overflow-y-auto">

<div className="grid grid-cols-[32px_1fr] gap-x-4">
<div className="flex flex-col items-center pt-1">
<div className="text-primary bg-primary/20 rounded-full p-1 material-symbols-outlined text-[20px]">check_circle</div>
<div className="w-[2px] bg-primary/50 h-full mt-2 min-h-[40px]"></div>
</div>
<div className="flex flex-col pb-6">
<div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-3xl border border-primary/10">
<div>
<p className="text-base font-semibold leading-normal">Requirements Gathering</p>
<div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Completed
                </div>
</div>
<div className="text-slate-400 material-symbols-outlined">expand_more</div>
</div>
</div>
</div>

<div className="grid grid-cols-[32px_1fr] gap-x-4">
<div className="flex flex-col items-center pt-1">
<div className="w-[2px] bg-primary/50 h-2 mb-2"></div>
<div className="text-primary bg-primary/20 rounded-full p-1 material-symbols-outlined text-[20px] animate-spin">refresh</div>
<div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-full mt-2 min-h-[40px]"></div>
</div>
<div className="flex flex-col pb-6">
<div className="flex flex-col bg-white dark:bg-slate-800 p-4 rounded-3xl border border-primary shadow-sm">
<div className="flex justify-between items-center mb-3">
<div>
<p className="text-base font-semibold leading-normal">UI Design</p>
<div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        In Progress
                    </div>
</div>
<div className="text-primary material-symbols-outlined transform rotate-180">expand_more</div>
</div>

<div className="border-t border-white/10 pt-3">
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">check</span> Wireframing
                    </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">check</span> Design System Setup
                    </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-slate-400">schedule</span> High-Fidelity Mockups
                    </li>
</ul>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-[32px_1fr] gap-x-4">
<div className="flex flex-col items-center pt-1">
<div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-2 mb-2"></div>
<div className="text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full p-1 material-symbols-outlined text-[20px]">hourglass_empty</div>
<div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-full mt-2 min-h-[40px]"></div>
</div>
<div className="flex flex-col pb-6">
<div className="flex justify-between items-center bg-[#050505] dark:bg-slate-800/30 p-4 rounded-3xl border border-white/10">
<div>
<p className="text-base font-semibold text-slate-400 font-light leading-normal">Frontend Development</p>
<div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    Upcoming
                </div>
</div>
<div className="text-slate-400 material-symbols-outlined">expand_more</div>
</div>
</div>
</div>

<div className="grid grid-cols-[32px_1fr] gap-x-4">
<div className="flex flex-col items-center pt-1">
<div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-2 mb-2"></div>
<div className="text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full p-1 material-symbols-outlined text-[20px]">hourglass_empty</div>
</div>
<div className="flex flex-col pb-6">
<div className="flex justify-between items-center bg-[#050505] dark:bg-slate-800/30 p-4 rounded-3xl border border-white/10">
<div>
<p className="text-base font-semibold text-slate-400 font-light leading-normal">Backend Integration</p>
<div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    Upcoming
                </div>
</div>
<div className="text-slate-400 material-symbols-outlined">expand_more</div>
</div>
</div>
</div>
</div>

<button className="absolute bottom-6 right-6 flex items-center justify-center bg-primary text-slate-900 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all p-4 gap-2">
<div className="material-symbols-outlined font-bold">chat</div>
</button>
</div>

      </div>
    </div>
  );
}
