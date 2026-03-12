import React from 'react';

export default function AfrixtechRequestAQuoteFormStep3() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">



<div className="flex flex-1 justify-center py-10 px-6 sm:px-10 lg:px-20">
<div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1 gap-10 lg:flex-row">

<div className="flex-1 flex flex-col max-w-[720px]">
<div className="flex flex-wrap justify-between gap-3 pb-6">
<div className="flex flex-col gap-2">
<h1 className="text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight tracking-tight">Request a Quote</h1>
<p className="text-slate-500 text-base font-medium">Step 3: Personal &amp; Company Information</p>
</div>
</div>

<div className="flex flex-col gap-2 pb-8">
<div className="flex justify-between items-center">
<p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Step 3 of 3</p>
<span className="text-primary text-sm font-bold">100%</span>
</div>
<div className="rounded-full bg-slate-200 dark:bg-slate-800 h-2 overflow-hidden">
<div className="h-full rounded-full bg-primary" style={{ width: `100%` }}></div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex flex-wrap gap-6">
<label className="flex flex-col flex-1 min-w-[280px]">
<span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Full Name <span className="text-red-500">*</span></span>
<input className="form-input w-full rounded-lg text-white tracking-tight border-slate-300 dark:border-slate-700 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-colors" placeholder="e.g. Jane Doe" value="Jane Doe" />
</label>
<label className="flex flex-col flex-1 min-w-[280px]">
<span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Corporate Email <span className="text-red-500">*</span></span>
<input className="form-input w-full rounded-lg text-white tracking-tight border-slate-300 dark:border-slate-700 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-colors" placeholder="name@company.com" type="email" value="jane.doe@techcorp.com" />
</label>
</div>
<label className="flex flex-col">
<span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Company Name</span>
<input className="form-input w-full rounded-lg text-white tracking-tight border-slate-300 dark:border-slate-700 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-colors" placeholder="Enter your company name" value="TechCorp Industries" />
</label>
<label className="flex flex-col">
<span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Phone Number (Optional)</span>
<input className="form-input w-full rounded-lg text-white tracking-tight border-slate-300 dark:border-slate-700 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
</label>

<div className="flex flex-col mt-4">
<span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Project Brief or RFP Document (Optional)</span>
<div className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#050505]/20 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
</div>
<p className="text-slate-700 dark:text-slate-300 font-medium mb-1">Click to upload or drag and drop</p>
<p className="text-slate-500 text-xs">PDF, DOCX, or PPTX (Max. 10MB)</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
<button className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-400 font-light hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-semibold text-sm">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                                Back
                            </button>
<button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-slate-900 font-bold text-sm shadow-[0_0_15px_rgba(19,218,236,0.3)] transition-all">
                                Submit Request
                                <span className="material-symbols-outlined text-lg">send</span>
</button>
</div>
</div>

<div className="w-full lg:w-[380px] shrink-0">
<div className="bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-sm sticky top-24">
<h3 className="text-white tracking-tight text-lg font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">receipt_long</span>
                                Request Summary
                            </h3>
<div className="space-y-6">

<div className="relative pl-4 border-l-2 border-primary pb-6">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
<h4 className="text-sm font-semibold text-white tracking-tight mb-1">Project Type</h4>
<p className="text-sm text-slate-400 font-light">Custom Software Development</p>
<p className="text-sm text-slate-400 font-light">Web Application</p>
</div>

<div className="relative pl-4 border-l-2 border-primary pb-6">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
<h4 className="text-sm font-semibold text-white tracking-tight mb-1">Budget &amp; Timeline</h4>
<p className="text-sm text-slate-400 font-light">$50,000 - $100,000</p>
<p className="text-sm text-slate-400 font-light">3-6 Months</p>
</div>

<div className="relative pl-4 border-l-2 border-transparent">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
<h4 className="text-sm font-semibold text-primary mb-1">Personal Info</h4>
<p className="text-sm text-slate-500 italic">Filling out...</p>
</div>
</div>
<div className="mt-8 p-4 bg-primary/10 rounded-2xl border border-primary/20">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">info</span>
<p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Your information is secure. Our team will review your request and get back to you within 24-48 business hours with a preliminary estimate.
                                    </p>
</div>
</div>
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
