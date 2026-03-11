import React from 'react';

export default function AfritechxFinancePortalLightMode() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">

<div className="bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-xl shadow-sm mb-4">
<div className="flex flex-wrap justify-between gap-4 p-6 md:p-8">
<div className="flex min-w-72 flex-col gap-2">
<p className="text-4xl font-black leading-tight tracking-[-0.033em]">Finance &amp; Invoicing</p>
<p className="text-slate-500 text-base font-normal leading-normal">Overview of your financial performance and outstanding invoices.</p>
</div>
<div className="flex gap-3 items-start">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined mr-2 text-[18px]">download</span>
<span className="truncate">Export Report</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 pt-0">
<div className="flex flex-col gap-2 rounded-xl p-6 bg-[#050505] dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<div className="flex justify-between items-center mb-1">
<p className="text-slate-400 font-light text-sm font-medium leading-normal uppercase tracking-wider">Total Revenue</p>
<span className="material-symbols-outlined text-slate-400">account_balance_wallet</span>
</div>
<p className="text-3xl font-black leading-tight">$125,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
<p className="text-emerald-500 text-sm font-bold leading-normal">+15% from last month</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-[#050505] dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<div className="flex justify-between items-center mb-1">
<p className="text-slate-400 font-light text-sm font-medium leading-normal uppercase tracking-wider">Outstanding</p>
<span className="material-symbols-outlined text-slate-400">pending_actions</span>
</div>
<p className="text-3xl font-black leading-tight">$35,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-rose-500 text-sm">trending_down</span>
<p className="text-rose-500 text-sm font-bold leading-normal">-5% from last month</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-[#050505] dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<div className="flex justify-between items-center mb-1">
<p className="text-slate-400 font-light text-sm font-medium leading-normal uppercase tracking-wider">Paid Invoices</p>
<span className="material-symbols-outlined text-slate-400">task_alt</span>
</div>
<p className="text-3xl font-black leading-tight">$90,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
<p className="text-emerald-500 text-sm font-bold leading-normal">+20% from last month</p>
</div>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 bg-[#050505] dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<div className="flex justify-between items-center mb-1">
<p className="text-slate-400 font-light text-sm font-medium leading-normal uppercase tracking-wider">Pending</p>
<span className="material-symbols-outlined text-slate-400">hourglass_empty</span>
</div>
<p className="text-3xl font-black leading-tight">$15,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-rose-500 text-sm">trending_down</span>
<p className="text-rose-500 text-sm font-bold leading-normal">-10% from last month</p>
</div>
</div>
</div>
</div>
<div className="bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden rounded-xl shadow-sm pb-6">
<div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-white/5">
<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Recent Invoices</h2>
<button className="text-primary text-sm font-bold hover:underline">View All</button>
</div>
<div className="px-6 md:px-8 py-4 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10">Invoice ID</th>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10">Client</th>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10">Amount</th>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10">Status</th>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10">Date</th>
<th className="px-4 py-3 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-white/10 text-right">Action</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/50 transition-colors group">
<td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-white/5">INV-001</td>
<td className="px-4 py-4 text-sm text-slate-400 font-light border-b border-white/5 font-medium">TechCorp Solutions</td>
<td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 font-bold border-b border-white/5">$12,500</td>
<td className="px-4 py-4 border-b border-white/5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                Paid
                                            </span>
</td>
<td className="px-4 py-4 text-sm text-slate-500 border-b border-white/5">Oct 15, 2023</td>
<td className="px-4 py-4 border-b border-white/5 text-right">
<button className="text-slate-500 hover:text-primary transition-colors font-bold text-sm">View</button>
</td>
</tr>
<tr className="bg-[#050505]/50 dark:bg-slate-800/20 hover:bg-[#050505] dark:hover:bg-slate-800/50 transition-colors group">
<td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-white/5">INV-002</td>
<td className="px-4 py-4 text-sm text-slate-400 font-light border-b border-white/5 font-medium">Global Innovations</td>
<td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 font-bold border-b border-white/5">$8,200</td>
<td className="px-4 py-4 border-b border-white/5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                                Pending
                                            </span>
</td>
<td className="px-4 py-4 text-sm text-slate-500 border-b border-white/5">Oct 18, 2023</td>
<td className="px-4 py-4 border-b border-white/5 text-right">
<button className="bg-primary text-slate-900 px-3 py-1.5 rounded text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm">Pay Now</button>
</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/50 transition-colors group">
<td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-white/5">INV-003</td>
<td className="px-4 py-4 text-sm text-slate-400 font-light border-b border-white/5 font-medium">StartUp Inc.</td>
<td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 font-bold border-b border-white/5">$4,500</td>
<td className="px-4 py-4 border-b border-white/5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400">
                                                Overdue
                                            </span>
</td>
<td className="px-4 py-4 text-sm text-slate-500 border-b border-white/5">Sep 25, 2023</td>
<td className="px-4 py-4 border-b border-white/5 text-right">
<button className="text-slate-500 hover:text-primary transition-colors font-bold text-sm">Remind</button>
</td>
</tr>
<tr className="bg-[#050505]/50 dark:bg-slate-800/20 hover:bg-[#050505] dark:hover:bg-slate-800/50 transition-colors group">
<td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-white/5">INV-004</td>
<td className="px-4 py-4 text-sm text-slate-400 font-light border-b border-white/5 font-medium">Enterprise Corp</td>
<td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 font-bold border-b border-white/5">$25,000</td>
<td className="px-4 py-4 border-b border-white/5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                Paid
                                            </span>
</td>
<td className="px-4 py-4 text-sm text-slate-500 border-b border-white/5">Oct 01, 2023</td>
<td className="px-4 py-4 border-b border-white/5 text-right">
<button className="text-slate-500 hover:text-primary transition-colors font-bold text-sm">View</button>
</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/50 transition-colors group">
<td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">INV-005</td>
<td className="px-4 py-4 text-sm text-slate-400 font-light font-medium">Local Business LLC</td>
<td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 font-bold">$1,800</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                                Pending
                                            </span>
</td>
<td className="px-4 py-4 text-sm text-slate-500">Oct 20, 2023</td>
<td className="px-4 py-4 text-right">
<button className="bg-primary text-slate-900 px-3 py-1.5 rounded text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm">Pay Now</button>
</td>
</tr>
</tbody>
</table>
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
