import React from 'react';

export default function AfrixtechMobileSettingsProfile() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">


<div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden border-b border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden z-10 sticky top-0">

</div>

<main className="flex-1 flex flex-col w-full max-w-md mx-auto sm:max-w-[960px] sm:px-10 pb-24 sm:pb-10 relative">
<div className="px-4 pt-6 pb-4 sm:pt-8 sm:pb-6">
<h2 className="text-[24px] sm:text-[28px] font-bold leading-tight tracking-[-0.015em]">Settings &amp; Profile</h2>
<p className="text-sm text-slate-500 mt-1">Manage your account preferences and configurations.</p>
</div>

<div className="flex flex-col gap-2 px-4 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-1">

<button className="flex items-center gap-4 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors rounded-xl px-4 min-h-[76px] py-3 justify-between border border-white/10 group text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/50">
<div className="flex items-center gap-4 w-full">
<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[24px]">person</span>
</div>
<div className="flex flex-col justify-center flex-1 pr-2">
<p className="text-base font-semibold leading-normal line-clamp-1 text-slate-900 dark:text-slate-100">Profile Information</p>
<p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Update your personal details and avatar</p>
</div>
</div>
<div className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</div>
</button>

<button className="flex items-center gap-4 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors rounded-xl px-4 min-h-[76px] py-3 justify-between border border-white/10 group text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/50">
<div className="flex items-center gap-4 w-full">
<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[24px]">lock</span>
</div>
<div className="flex flex-col justify-center flex-1 pr-2">
<p className="text-base font-semibold leading-normal line-clamp-1 text-slate-900 dark:text-slate-100">Security &amp; Privacy</p>
<p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Password, 2FA, and active sessions</p>
</div>
</div>
<div className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</div>
</button>

<div className="flex flex-col border border-primary dark:border-primary/50 rounded-xl overflow-hidden shadow-sm shadow-primary/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden/80 relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<button className="flex items-center gap-4 px-4 min-h-[76px] py-3 justify-between text-left w-full focus:outline-none bg-primary/5 dark:bg-primary/10 pl-5">
<div className="flex items-center gap-4 w-full">
<div className="text-white flex items-center justify-center rounded-lg bg-primary shrink-0 size-12 shadow-sm">
<span className="material-symbols-outlined text-[24px]">dashboard_customize</span>
</div>
<div className="flex flex-col justify-center flex-1 pr-2">
<p className="text-base font-semibold leading-normal line-clamp-1 text-primary dark:text-white">Dashboard Layout</p>
<p className="text-primary/70 dark:text-primary/60 text-sm font-medium leading-normal line-clamp-1">Drag and drop to reorder widgets</p>
</div>
</div>
<div className="shrink-0 text-primary transition-colors transform rotate-90">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</div>
</button>

<div className="px-5 pb-5 pt-2 border-t border-white/5/50">
<p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">Active Widgets (Hold to drag)</p>
<div className="flex flex-col gap-2">

<div className="flex items-center justify-between bg-[#050505] dark:bg-slate-800/50 border border-white/10 p-3 rounded-lg cursor-move active:border-primary active:shadow-md transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">drag_indicator</span>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 dark:text-slate-200">Revenue Overview</span>
<span className="text-[11px] text-slate-500">Chart • Full Width</span>
</div>
</div>
<button className="text-slate-400 hover:text-red-500 transition-colors focus:outline-none">
<span className="material-symbols-outlined text-[20px]">remove_circle_outline</span>
</button>
</div>

<div className="flex items-center justify-between bg-[#050505] dark:bg-slate-800/50 border border-white/10 p-3 rounded-lg cursor-move active:border-primary active:shadow-md transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">drag_indicator</span>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 dark:text-slate-200">Recent Commits</span>
<span className="text-[11px] text-slate-500">List • Half Width</span>
</div>
</div>
<button className="text-slate-400 hover:text-red-500 transition-colors focus:outline-none">
<span className="material-symbols-outlined text-[20px]">remove_circle_outline</span>
</button>
</div>

<div className="flex items-center justify-between bg-[#050505] dark:bg-slate-800/50 border border-white/10 p-3 rounded-lg cursor-move active:border-primary active:shadow-md transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">drag_indicator</span>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 dark:text-slate-200">System Uptime</span>
<span className="text-[11px] text-slate-500">Metric • Half Width</span>
</div>
</div>
<button className="text-slate-400 hover:text-red-500 transition-colors focus:outline-none">
<span className="material-symbols-outlined text-[20px]">remove_circle_outline</span>
</button>
</div>
</div>
<button className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-2xl border border-dashed border-primary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Add Widget
                    </button>
</div>
</div>

<button className="flex items-center gap-4 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors rounded-xl px-4 min-h-[76px] py-3 justify-between border border-white/10 group text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/50">
<div className="flex items-center gap-4 w-full">
<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[24px]">notifications_active</span>
</div>
<div className="flex flex-col justify-center flex-1 pr-2">
<p className="text-base font-semibold leading-normal line-clamp-1 text-slate-900 dark:text-slate-100">Notifications</p>
<p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Email and push alert preferences</p>
</div>
</div>
<div className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</div>
</button>

<button className="flex items-center gap-4 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors rounded-xl px-4 min-h-[76px] py-3 justify-between border border-white/10 group text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/50">
<div className="flex items-center gap-4 w-full">
<div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 shadow-sm border border-primary/20 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[24px]">extension</span>
</div>
<div className="flex flex-col justify-center flex-1 pr-2">
<p className="text-base font-semibold leading-normal line-clamp-1 text-slate-900 dark:text-slate-100">Integrations</p>
<p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">Manage connected apps and APIs</p>
</div>
</div>
<div className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</div>
</button>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-white/10 z-20 sm:static sm:bg-transparent sm:dark:bg-transparent sm:border-none sm:p-0 sm:max-w-[960px] sm:mx-auto sm:px-10 sm:pb-10 sm:pt-4 sm:flex sm:justify-end">
<button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
<span className="material-symbols-outlined text-[20px]">save</span>
            Save Changes
        </button>
</div>

      </div>
    </div>
  );
}
