import React from 'react';

export default function AfritechxMobileNotificationsFeed() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center sm:py-5">
<div className="layout-content-container flex flex-col w-full max-w-[480px] flex-1 sm:border sm:border-slate-200 dark:sm:border-slate-800 sm:rounded-xl overflow-hidden bg-black shadow-sm">

<div className="sticky top-[65px] bg-black z-10 border-b border-white/10">
<div className="flex px-4 sm:px-6 gap-8">
<button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-[13px] pt-4 flex-1 sm:flex-none">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Updates</p>
</button>
<button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 pb-[13px] pt-4 flex-1 sm:flex-none transition-colors">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Alerts</p>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50">

<div className="relative group cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors bg-primary/5 dark:bg-primary/10">
<div className="flex items-start gap-4 px-4 sm:px-6 py-4">
<div className="text-primary flex items-center justify-center rounded-full bg-primary/10 shrink-0 size-10">
<span className="material-symbols-outlined">create_new_folder</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-start mb-1">
<p className="text-base font-medium leading-normal line-clamp-1 text-slate-900 dark:text-slate-100 pr-2">New Project Created</p>
<span className="text-xs text-slate-500 shrink-0 whitespace-nowrap mt-1">2m ago</span>
</div>
<p className="text-sm font-normal leading-relaxed line-clamp-2 text-slate-400 font-light">You created a new project 'Afritechx Web App' in the Enterprise workspace.</p>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
</div>

<div className="relative group cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors bg-primary/5 dark:bg-primary/10">
<div className="flex items-start gap-4 px-4 sm:px-6 py-4">
<div className="text-emerald-500 flex items-center justify-center rounded-full bg-emerald-500/10 shrink-0 size-10">
<span className="material-symbols-outlined">person_add</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-start mb-1">
<p className="text-base font-medium leading-normal line-clamp-1 text-slate-900 dark:text-slate-100 pr-2">Task Assigned</p>
<span className="text-xs text-slate-500 shrink-0 whitespace-nowrap mt-1">1h ago</span>
</div>
<p className="text-sm font-normal leading-relaxed line-clamp-2 text-slate-400 font-light">Sarah Jenkins assigned you to 'Design Notifications Feed' in UI Sprint 4.</p>
<div className="mt-3 flex gap-2">
<button className="bg-primary hover:bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded transition-colors">View Task</button>
</div>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
</div>

<div className="relative group cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<div className="flex items-start gap-4 px-4 sm:px-6 py-4">
<div className="text-amber-500 flex items-center justify-center rounded-full bg-amber-500/10 shrink-0 size-10">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-start mb-1">
<p className="text-base font-medium leading-normal line-clamp-1 text-slate-700 dark:text-slate-300 pr-2">Server Alert: High Load</p>
<span className="text-xs text-slate-500 shrink-0 whitespace-nowrap mt-1">Yesterday</span>
</div>
<p className="text-sm font-normal leading-relaxed line-clamp-2 text-slate-500">Production server AP-East-1 CPU utilization exceeded 90% for 5 minutes. Auto-scaling triggered.</p>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
</div>

<div className="relative group cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<div className="flex items-start gap-4 px-4 sm:px-6 py-4">
<div className="text-blue-500 flex items-center justify-center rounded-full bg-blue-500/10 shrink-0 size-10">
<span className="material-symbols-outlined">chat_bubble</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-start mb-1">
<p className="text-base font-medium leading-normal line-clamp-1 text-slate-700 dark:text-slate-300 pr-2">New Comment</p>
<span className="text-xs text-slate-500 shrink-0 whitespace-nowrap mt-1">Mon</span>
</div>
<p className="text-sm font-normal leading-relaxed line-clamp-2 text-slate-500"><span className="font-medium text-slate-700 dark:text-slate-300">David Chen</span> commented on 'API Endpoint Specs': "Looks good to me, ready for deployment."</p>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
</div>

<div className="relative group cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<div className="flex items-start gap-4 px-4 sm:px-6 py-4">
<div className="text-purple-500 flex items-center justify-center rounded-full bg-purple-500/10 shrink-0 size-10">
<span className="material-symbols-outlined">merge_type</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-start mb-1">
<p className="text-base font-medium leading-normal line-clamp-1 text-slate-700 dark:text-slate-300 pr-2">Pull Request Merged</p>
<span className="text-xs text-slate-500 shrink-0 whitespace-nowrap mt-1">Oct 24</span>
</div>
<p className="text-sm font-normal leading-relaxed line-clamp-2 text-slate-500">Your pull request #1402 'Fix navigation routing bug' was merged into main.</p>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
</div>
<div className="py-8 flex justify-center items-center">
<p className="text-sm text-slate-500">You're all caught up!</p>
</div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
