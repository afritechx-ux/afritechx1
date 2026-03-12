import React from 'react';

export default function AfrixtechClientOnboardingChecklistOverview() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">




<main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

<div className="flex-1 flex flex-col gap-8">

<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h1 className="text-3xl md:text-4xl font-black tracking-tight text-white tracking-tight">Client Onboarding</h1>
<p className="text-slate-500 text-base">Complete your setup to begin your software development journey with Afrixtech.</p>
</div>
<div className="flex flex-col gap-3 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden/40 border border-white/10/60 rounded-xl p-6">
<div className="flex justify-between items-end">
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-slate-400 font-light uppercase tracking-wider">Overall Completion</span>
<span className="text-sm text-slate-500">Step 2 of 4</span>
</div>
<span className="text-2xl font-bold text-white tracking-tight">35%</span>
</div>
<div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
<div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `35%` }}></div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="border border-white/10/60 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden/40 overflow-hidden opacity-75">
<div className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-8 rounded-full bg-emerald-500/10 text-emerald-500">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">1. Company Profile Setup</h3>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Completed</span>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>

</div>

<div className="border border-primary/50 dark:border-primary/50 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden/60 overflow-hidden shadow-[0_0_15px_rgba(13,185,242,0.1)] relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-center justify-between p-5 cursor-pointer border-b border-white/5/60">
<div className="flex items-center gap-4 pl-2">
<div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary border border-primary/20">
<span className="text-sm font-bold">2</span>
</div>
<h3 className="text-lg font-bold text-white tracking-tight">Legal &amp; NDA Signing</h3>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">In Progress</span>
<span className="material-symbols-outlined text-slate-400 transform rotate-180">expand_more</span>
</div>
</div>
<div className="p-6 flex flex-col gap-4 bg-[#050505]/50 dark:bg-transparent pl-8">
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center pt-0.5">
<input defaultChecked={true} className="peer appearance-none size-5 rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 focus:outline-none transition-all cursor-pointer" type="checkbox" />
<span className="material-symbols-outlined absolute text-white text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors line-through opacity-60">Review Mutual NDA</span>
</div>
</label>
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center pt-0.5">
<input className="peer appearance-none size-5 rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 focus:outline-none transition-all cursor-pointer" type="checkbox" />
<span className="material-symbols-outlined absolute text-white text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-medium text-white tracking-tight group-hover:text-primary transition-colors">Sign Master Service Agreement (MSA)</span>
<span className="text-sm text-slate-500">Document sent to your registered email via DocuSign.</span>
</div>
</label>
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center pt-0.5">
<input className="peer appearance-none size-5 rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 focus:outline-none transition-all cursor-pointer" type="checkbox" />
<span className="material-symbols-outlined absolute text-white text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-medium text-white tracking-tight group-hover:text-primary transition-colors">Provide Billing &amp; Tax Information</span>
</div>
</label>
</div>
</div>

<div className="border border-white/10/60 rounded-xl bg-[#050505]/20 overflow-hidden">
<div className="flex items-center justify-between p-5 cursor-not-allowed opacity-60">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500">
<span className="text-sm font-bold">3</span>
</div>
<h3 className="text-lg font-medium text-slate-400 font-light">Technical Audit &amp; Access</h3>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 border border-slate-300 dark:border-slate-700">
<span className="material-symbols-outlined text-[14px]">lock</span>
                                Locked
                            </span>
</div>
</div>
</div>

<div className="border border-white/10/60 rounded-xl bg-[#050505]/20 overflow-hidden">
<div className="flex items-center justify-between p-5 cursor-not-allowed opacity-60">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center size-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500">
<span className="text-sm font-bold">4</span>
</div>
<h3 className="text-lg font-medium text-slate-400 font-light">Team Allocation &amp; Kickoff</h3>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 border border-slate-300 dark:border-slate-700">
<span className="material-symbols-outlined text-[14px]">lock</span>
                                Locked
                            </span>
</div>
</div>
</div>
</div>
</div>

<aside className="w-full lg:w-80 flex-shrink-0">
<div className="sticky top-28 border border-white/10/60 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden/40 p-6 flex flex-col gap-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<h3 className="text-xl font-bold text-white tracking-tight">Need Help?</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                    Your dedicated onboarding specialist is here to assist you with any questions during the setup process.
                </p>
<div className="flex items-center gap-4 p-4 rounded-xl bg-[#050505] dark:bg-slate-800/50 border border-white/5">
<div className="relative">
<div className="size-12 rounded-full bg-cover bg-center border-2 border-white/10" data-alt="Portrait of Sarah Jenkins, Onboarding Specialist" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPsokVKXUO9ytwei_TPVrVSS-Ubb-No6zez_SVE_q0q2Zapufl-3Z5O83VwWsZ0YOltEmutxspyKwctJKvu_ga2A4INKCUxzVu-yFZ01lBofNUQ-_bXc4n0FGH37N-KgScBj-v6ZdBfc2ZM62LIP_FlcFZGOxra1gE94BT0qP_ZEJ4xPZUxkdk58eZn5T60_0e6Ym5opZD0Vj9xLiS9ue2IHTaw8_MdN4iGRCKQATEXeMmlRHw7hrjhDP-sXNSAgWj0icfrZxCI24')` }}></div>
<span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-white tracking-tight">Sarah Jenkins</span>
<span className="text-xs text-primary font-medium">Onboarding Specialist</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-background-dark font-semibold transition-colors">
<span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        Chat with Sarah
                    </button>
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-3xl border border-white/10 text-slate-700 dark:text-slate-300 hover:bg-[#050505] dark:hover:bg-slate-800 font-medium transition-colors">
<span className="material-symbols-outlined text-[20px]">videocam</span>
                        Schedule Video Call
                    </button>
</div>
</div>
</aside>
</main>

      </div>
    </div>
  );
}
