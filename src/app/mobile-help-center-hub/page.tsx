import React from 'react';

export default function AfrixtechMobileHelpCenterHub() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">


<main className="flex-grow flex flex-col px-4 pt-6 pb-24 max-w-2xl mx-auto w-full">
<section className="flex flex-col items-center justify-center py-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-sm mb-8 px-4 text-center">
<h2 className="text-3xl font-black tracking-tight mb-2">How can we help?</h2>
<p className="text-slate-400 font-light text-sm mb-6 max-w-md">Search our knowledge base or browse categories below.</p>
<div className="w-full max-w-md relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-slate-500">search</span>
<input className="w-full bg-black/50 border border-primary/30 rounded-full py-3 pl-12 pr-24 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-slate-500" placeholder="Search articles, tutorials..." type="text" />
<button className="absolute right-1 top-1 bottom-1 bg-primary text-background-dark font-bold px-4 rounded-full text-sm hover:bg-primary/90 transition-colors">Search</button>
</div>
</section>
<section className="grid grid-cols-2 gap-4">
<a className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/50 dark:bg-background-dark/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all group" href="#">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">flight_takeoff</span>
</div>
<h3 className="font-bold text-sm">Onboarding</h3>
</a>
<a className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/50 dark:bg-background-dark/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all group" href="#">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">description</span>
</div>
<h3 className="font-bold text-sm">Tech Docs</h3>
</a>
<a className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/50 dark:bg-background-dark/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all group" href="#">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">credit_card</span>
</div>
<h3 className="font-bold text-sm">Billing</h3>
</a>
<a className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/50 dark:bg-background-dark/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all group" href="#">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">code</span>
</div>
<h3 className="font-bold text-sm">API Docs</h3>
</a>
</section>
</main>
<button className="fixed bottom-20 right-6 z-20 flex items-center justify-center gap-2 bg-primary text-background-dark py-3 px-5 rounded-full shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all font-bold">
<span className="material-symbols-outlined">chat</span>
<span>Live Chat</span>
</button>
<nav className="fixed bottom-0 left-0 right-0 z-30 bg-black border-t border-primary/20 px-6 py-3 flex justify-between items-center max-w-md mx-auto sm:max-w-full">
<a className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl">grid_view</span>
<span className="text-xs font-medium">Dashboard</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="#">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: `'FILL' 1` }}>help</span>
<span className="text-xs font-medium">Support</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl">folder</span>
<span className="text-xs font-medium">Projects</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
<span className="text-xs font-medium">Settings</span>
</a>
</nav>

      </div>
    </div>
  );
}
