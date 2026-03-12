import React from 'react';

export default function AfrixtechNewsletterSuccessModal() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">


<div className="relative flex flex-col w-full max-w-[480px] bg-slate-900/60 dark:bg-[#101f22]/80 backdrop-blur-xl border border-primary/20 rounded-xl overflow-hidden shadow-2xl shadow-primary/10">

<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
<div className="relative flex flex-col px-6 py-10 z-10">
<div className="flex flex-col items-center gap-8">

<div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 shadow-[0_0_40px_rgba(13,204,242,0.3)] border border-primary/30">
<span className="material-symbols-outlined text-primary text-6xl drop-shadow-[0_0_15px_rgba(13,204,242,0.8)]">
                        send
                    </span>

<div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(13,204,242,1)]"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(13,204,242,0.8)]"></div>
</div>
<div className="flex flex-col items-center gap-3 w-full text-center">
<h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-tight">You're on the list!</h2>
<p className="text-slate-400 font-light text-base font-normal leading-relaxed max-w-[320px]">
                        Thanks for subscribing to Afrixtech. You'll receive the latest tech insights and exclusive updates directly in your inbox.
                    </p>
</div>
<div className="w-full flex flex-col gap-4 mt-2">
<button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#101f22] text-base font-bold leading-normal transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
<span className="truncate">Dismiss</span>
</button>
<button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-transparent text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors gap-2 text-sm font-semibold border border-transparent hover:border-primary/30">
<span className="material-symbols-outlined text-xl">
                            share
                        </span>
<span className="truncate">Follow us on LinkedIn</span>
</button>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
