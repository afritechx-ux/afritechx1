import React from 'react';

export default function AfritechxLightModeSuccessModal() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">


<div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #13c8ec1a 0%, transparent 50%)`, backgroundSize: `100% 100%` }}></div>
<div className="relative z-10 flex flex-col h-full grow w-full">



<main className="flex-1 flex items-center justify-center p-4 sm:p-8">

<div className="w-full max-w-md bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-700 overflow-hidden relative">

<div className="h-2 w-full bg-gradient-to-r from-primary to-blue-500"></div>

<div className="p-8 flex flex-col items-center text-center">

<div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 relative">

<div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20"></div>
<div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse opacity-30"></div>

<span className="material-symbols-outlined text-5xl text-primary relative z-10">check_circle</span>
</div>
<h1 className="text-white tracking-tight tracking-tight text-3xl font-bold leading-tight mb-4">Subscription Successful!</h1>
<p className="text-slate-400 font-light text-base font-normal leading-relaxed mb-8">
                        Thank you for subscribing to the Afritechx newsletter. Check your inbox for the latest updates on our enterprise software solutions.
                    </p>

<div className="w-full bg-[#050505] dark:bg-slate-700/50 rounded-xl p-4 mb-8 flex items-start gap-4 text-left border border-slate-100 dark:border-slate-600">
<span className="material-symbols-outlined text-primary mt-0.5">mark_email_unread</span>
<div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Check your spam folder</h3>
<p className="text-xs text-slate-500">If you don't see our email within 5 minutes, please check your spam or promotions folder.</p>
</div>
</div>

<button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-slate-900 text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
<span className="truncate">Continue Exploring</span>
<span className="material-symbols-outlined ml-2">arrow_forward</span>
</button>
</div>
</div>
</main>


</div>

      </div>
    </div>
  );
}
