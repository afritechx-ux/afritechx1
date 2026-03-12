import React from 'react';

export default function AfrixtechRequestAQuoteFormStep2() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[1200px] flex-1">

<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1 pb-10">

<div className="w-full lg:w-80 flex flex-col gap-6 p-6 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-white/10 shrink-0 h-fit">
<div className="flex items-center gap-4 border-b border-white/10 pb-6">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm border border-white/10" data-alt="Afrixtech company logo placeholder" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5oAcyEcvh26fhdOhcofh_63hEE4GE3AgZTaH1pkzmGHkr79FiLB64bp4sgyxsvEpZBpqOkuMY0ohulShJsUpaMmhkCY-mokisbC6w9Y_xpqTc9bjNlcbSHTriL7exf-qlEHU_qdkLzSfSaA_WSxPLfbDppjyT7w8iOSjV-pT41fVcp5AL6_n0maW4Vxp3a97GXHPPQSGT5F5iUa-f3nxqS-E0B246gPTOjpEwLsqy0IAPGJ7JbnU60LoHsbXYPQYe6NEldz88gbs')` }}></div>
<div className="flex flex-col">
<h1 className="text-base font-bold leading-normal text-slate-900 dark:text-slate-100">Quote Progress</h1>
<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
<div className="bg-primary h-2 rounded-full" style={{ width: `50%` }}></div>
</div>
<p className="text-slate-500 text-xs font-medium mt-1">50% Completed</p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4 px-4 py-3 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-400 font-light">
<span className="material-symbols-outlined">person</span>
<div className="flex flex-col">
<p className="text-sm font-semibold leading-normal text-slate-900 dark:text-slate-300">Step 1</p>
<p className="text-xs">Contact Info</p>
</div>
<span className="material-symbols-outlined ml-auto text-green-500">check_circle</span>
</div>
<div className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
<span className="material-symbols-outlined">work</span>
<div className="flex flex-col">
<p className="text-sm font-bold leading-normal">Step 2</p>
<p className="text-xs font-medium">Project Details</p>
</div>
</div>
<div className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-400 dark:text-slate-600">
<span className="material-symbols-outlined">summarize</span>
<div className="flex flex-col">
<p className="text-sm font-semibold leading-normal">Step 3</p>
<p className="text-xs">Review &amp; Submit</p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col max-w-3xl">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 text-slate-900 dark:text-slate-100">Project Details</h2>
<p className="text-slate-500 text-sm md:text-base">Tell us more about your project requirements, budget, and expected timeline so we can provide an accurate quote.</p>
</div>
<form className="flex flex-col gap-8">

<div>
<h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">1. Select Services Required</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="relative flex items-center p-4 rounded-3xl border border-white/10 cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors">
<input className="peer sr-only" name="services" type="checkbox" value="web" />
<div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center mr-4 transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-slate-200">Web Development</span>
<span className="text-xs text-slate-500">Custom web applications and platforms</span>
</div>
</label>
<label className="relative flex items-center p-4 rounded-3xl border border-primary bg-primary/5 cursor-pointer transition-colors">
<input defaultChecked={true} className="peer sr-only" name="services" type="checkbox" value="mobile" />
<div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center mr-4 transition-colors">
<span className="material-symbols-outlined text-white text-sm">check</span>
</div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-slate-200">Mobile App Development</span>
<span className="text-xs text-slate-500">iOS and Android native applications</span>
</div>
</label>
<label className="relative flex items-center p-4 rounded-3xl border border-white/10 cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors">
<input className="peer sr-only" name="services" type="checkbox" value="uiux" />
<div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center mr-4 transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-slate-200">UI/UX Design</span>
<span className="text-xs text-slate-500">User interface and experience design</span>
</div>
</label>
<label className="relative flex items-center p-4 rounded-3xl border border-white/10 cursor-pointer hover:bg-[#050505] dark:hover:bg-slate-800/80 transition-colors">
<input className="peer sr-only" name="services" type="checkbox" value="cloud" />
<div className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center mr-4 transition-colors">
<span className="material-symbols-outlined text-white text-sm opacity-0 peer-checked:opacity-100">check</span>
</div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-slate-200">Cloud Infrastructure</span>
<span className="text-xs text-slate-500">AWS, Azure, or GCP setup and migration</span>
</div>
</label>
</div>
</div>

<div>
<h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">2. Estimated Budget</h3>
<div className="relative w-full md:w-1/2">
<select className="focus-glow w-full appearance-none rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden px-4 py-3.5 text-base font-medium text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none transition-shadow">
<option disabled={true} selected={true} value="">Select budget range</option>
<option value="10k-25k">$10,000 - $25,000</option>
<option value="25k-50k">$25,000 - $50,000</option>
<option value="50k-100k">$50,000 - $100,000</option>
<option value="100k+">$100,000+</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">3. Expected Start Date</h3>
<div className="p-6 rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden w-full max-w-sm">
<div className="flex items-center justify-between mb-6">
<button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 font-light" type="button">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<p className="text-base font-bold text-slate-900 dark:text-slate-100">November 2023</p>
<button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 font-light" type="button">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-7 gap-1 mb-2 text-center">
<span className="text-xs font-semibold text-slate-500">Su</span>
<span className="text-xs font-semibold text-slate-500">Mo</span>
<span className="text-xs font-semibold text-slate-500">Tu</span>
<span className="text-xs font-semibold text-slate-500">We</span>
<span className="text-xs font-semibold text-slate-500">Th</span>
<span className="text-xs font-semibold text-slate-500">Fr</span>
<span className="text-xs font-semibold text-slate-500">Sa</span>
</div>
<div className="grid grid-cols-7 gap-1 text-center">

<div></div><div></div><div></div>

<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">4</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">5</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">6</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">7</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">8</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">9</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">10</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">11</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">12</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">13</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold mx-auto shadow-sm shadow-primary/50" type="button">14</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">15</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">16</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-slate-100 dark:hover:bg-slate-800 mx-auto text-slate-700 dark:text-slate-300" type="button">17</button>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">4. Project Description</h3>
<div className="relative">
<textarea className="focus-glow w-full resize-none rounded-3xl border border-white/10 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden px-4 py-3.5 text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none transition-shadow" placeholder="Briefly describe your project goals, target audience, and any specific technical requirements..." rows={5}></textarea>
</div>
</div>

<div className="flex items-center justify-between mt-4 pt-6 border-t border-white/10">
<button className="flex items-center gap-2 px-6 py-3 rounded-3xl border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-300 font-medium hover:bg-[#050505] dark:hover:bg-slate-800 transition-colors" type="button">
<span className="material-symbols-outlined text-sm">arrow_back</span>
Back
</button>
<button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 transition-all shadow-lg shadow-primary/20" type="button">
Continue to Review
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</form>
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
