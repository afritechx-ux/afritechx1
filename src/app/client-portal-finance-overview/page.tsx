import React from 'react';

export default function AfrixtechClientPortalFinanceOverview() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">

<div className="flex flex-1 overflow-hidden">

<aside className="hidden md:flex w-64 flex-col justify-between bg-white dark:bg-[#152a2b] border-r border-white/10 p-4 shrink-0">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 px-2 py-3 border-b border-white/10">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" data-alt="Company logo Afrixtech placeholder" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdqEIydWTHSWaf5wUzvO-mvINXNBeFYgSlGF0fjdJ7sRADy6t6az4R2RL-XLUfzoNhzVrktk-188GfAK3hRhKTeMNmMjJBFB0uA8yqDLtb0DUU8g_Vc-nA4Ox-7-mSw9VBUaMV7e2eKMx_M4EmyzCl2YPaA6IMhX7rBQGpmUPc_YkmuQpXJ_1K6XCliT5AiX84LZNR06sDvUy08IkSrFOYeMH71MxyJBoIgiqeD2FsrtXXpjBMUUm3832IMeoBtXvTtJD-ckBftvI')` }}></div>
<div className="flex flex-col overflow-hidden">
<h1 className="text-white tracking-tight text-base font-semibold leading-normal truncate">Afrixtech</h1>
<p className="text-slate-500 text-xs font-medium leading-normal uppercase tracking-wider">Client Portal</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 font-light hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>dashboard</span>
<span className="text-sm font-medium leading-normal">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 font-light hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>folder_open</span>
<span className="text-sm font-medium leading-normal">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>payments</span>
<span className="text-sm font-medium leading-normal">Finance &amp; Invoicing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 font-light hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>description</span>
<span className="text-sm font-medium leading-normal">Contracts</span>
</a>
</nav>
</div>
<nav className="flex flex-col gap-1 mt-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 font-light hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>settings</span>
<span className="text-sm font-medium leading-normal">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 font-light hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors" href="#">
<span className="material-symbols-outlined" style={{ fontSize: `22px` }}>logout</span>
<span className="text-sm font-medium leading-normal">Log Out</span>
</a>
</nav>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="max-w-7xl mx-auto p-6 md:p-8 flex flex-col gap-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2 max-w-2xl">
<h2 className="text-white tracking-tight text-3xl font-bold leading-tight">Finance &amp; Invoicing</h2>
<p className="text-slate-400 font-light text-sm font-normal leading-relaxed">Overview of your financial history, upcoming payments, and corporate billing methods with Afrixtech.</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-[#102122] px-6 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 whitespace-nowrap self-start md:self-auto">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>add</span>
                                Make a Payment
                            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#152a2b] border border-white/10 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined" style={{ fontSize: `64px` }}>account_balance</span>
</div>
<div className="flex items-center gap-2">
<div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontSize: `18px` }}>monetization_on</span>
</div>
<p className="text-slate-400 font-light text-sm font-medium leading-normal">Total Invested</p>
</div>
<p className="text-white tracking-tight text-3xl font-bold tracking-tight">$142,500.00</p>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-500 mt-1">
<span className="material-symbols-outlined" style={{ fontSize: `14px` }}>trending_up</span>
<span>+12.5% vs last year</span>
</div>
</div>
<div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#152a2b] border border-white/10 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined" style={{ fontSize: `64px` }}>receipt_long</span>
</div>
<div className="flex items-center gap-2">
<div className="size-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontSize: `18px` }}>pending_actions</span>
</div>
<p className="text-slate-400 font-light text-sm font-medium leading-normal">Pending Invoices</p>
</div>
<p className="text-white tracking-tight text-3xl font-bold tracking-tight">$24,200.00</p>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500 mt-1">
<span>3 invoices awaiting payment</span>
</div>
</div>
<div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#152a2b] border border-white/10 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined" style={{ fontSize: `64px` }}>event_upcoming</span>
</div>
<div className="flex items-center gap-2">
<div className="size-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontSize: `18px` }}>schedule</span>
</div>
<p className="text-slate-400 font-light text-sm font-medium leading-normal">Upcoming Payments</p>
</div>
<p className="text-white tracking-tight text-3xl font-bold tracking-tight">$8,500.00</p>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500 mt-1">
<span>Next due: Oct 15, 2023</span>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 flex flex-col rounded-xl bg-white dark:bg-[#152a2b] border border-white/10 overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-5 border-b border-white/10">
<h3 className="text-white tracking-tight text-lg font-bold leading-tight">Invoicing History</h3>
<div className="flex items-center gap-3">
<button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#050505] dark:bg-[#0c1a1a] border-b border-white/10">
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice ID</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
<tr className="hover:bg-[#050505] dark:hover:bg-[#1a3334] transition-colors group">
<td className="py-4 px-5 text-sm font-medium text-white tracking-tight">INV-2023-089</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Cloud Infrastructure Setup</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Sep 28, 2023</td>
<td className="py-4 px-5 text-sm font-semibold text-white tracking-tight">$12,500.00</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800/30">
<span className="size-1.5 rounded-full bg-red-500"></span>
                                                        Overdue
                                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" title="Download PDF">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>download</span>
</button>
<button className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-[#102122] rounded-md text-xs font-medium transition-colors">
                                                            Pay Now
                                                        </button>
</div>
</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-[#1a3334] transition-colors group">
<td className="py-4 px-5 text-sm font-medium text-white tracking-tight">INV-2023-094</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Q3 Maintenance Retainer</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Oct 01, 2023</td>
<td className="py-4 px-5 text-sm font-semibold text-white tracking-tight">$8,500.00</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 border border-orange-200 dark:border-orange-800/30">
<span className="size-1.5 rounded-full bg-orange-500"></span>
                                                        Pending
                                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" title="Download PDF">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>download</span>
</button>
<button className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-[#102122] rounded-md text-xs font-medium transition-colors">
                                                            Pay Now
                                                        </button>
</div>
</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-[#1a3334] transition-colors group">
<td className="py-4 px-5 text-sm font-medium text-white tracking-tight">INV-2023-072</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">UI/UX Design Phase 1</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Sep 15, 2023</td>
<td className="py-4 px-5 text-sm font-semibold text-white tracking-tight">$15,000.00</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(13,223,242,0.8)]"></span>
                                                        Paid
                                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" title="Download PDF">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>download</span>
</button>
<button className="px-3 py-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md text-xs font-medium transition-colors" disabled={true}>
                                                            Receipt
                                                        </button>
</div>
</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-[#1a3334] transition-colors group">
<td className="py-4 px-5 text-sm font-medium text-white tracking-tight">INV-2023-065</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Backend API Development</td>
<td className="py-4 px-5 text-sm text-slate-400 font-light">Aug 30, 2023</td>
<td className="py-4 px-5 text-sm font-semibold text-white tracking-tight">$22,000.00</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
<span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(13,223,242,0.8)]"></span>
                                                        Paid
                                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" title="Download PDF">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>download</span>
</button>
<button className="px-3 py-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md text-xs font-medium transition-colors" disabled={true}>
                                                            Receipt
                                                        </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-white/10 flex items-center justify-center">
<button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                                        View All Invoices <span className="material-symbols-outlined" style={{ fontSize: `18px` }}>arrow_forward</span>
</button>
</div>
</div>

<div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
<div className="bg-white dark:bg-[#152a2b] border border-white/10 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white tracking-tight text-base font-bold leading-tight">Payment Methods</h3>
<button className="text-primary hover:bg-primary/10 p-1 rounded-md transition-colors" title="Add Payment Method">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>add</span>
</button>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-3 rounded-2xl border border-primary bg-primary/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-6 bg-slate-800 rounded-sm flex items-center justify-center border border-slate-700">

<div className="flex">
<div className="size-3 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
<div className="size-3 rounded-full bg-yellow-500 opacity-80 mix-blend-multiply -ml-1.5"></div>
</div>
</div>
<div className="flex flex-col">
<p className="text-sm font-medium text-white tracking-tight">Mastercard ending in 4242</p>
<p className="text-xs text-slate-500">Expires 12/25 <span className="mx-1">•</span> <span className="text-primary">Default</span></p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 relative z-10 hidden group-hover:block transition-all">
<span className="material-symbols-outlined" style={{ fontSize: `18px` }}>more_vert</span>
</button>
</div>

<div className="flex items-center justify-between p-3 rounded-2xl border border-white/10 bg-[#050505] dark:bg-[#0c1a1a] hover:border-slate-300 dark:hover:border-slate-600 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-6 bg-blue-900 rounded-sm flex items-center justify-center border border-slate-700 text-white font-bold text-[10px] italic">
                                                    VISA
                                                </div>
<div className="flex flex-col">
<p className="text-sm font-medium text-white tracking-tight">Visa ending in 8899</p>
<p className="text-xs text-slate-500">Expires 08/24</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hidden group-hover:block transition-all">
<span className="material-symbols-outlined" style={{ fontSize: `18px` }}>more_vert</span>
</button>
</div>

<div className="flex items-center justify-between p-3 rounded-2xl border border-white/10 bg-[#050505] dark:bg-[#0c1a1a] hover:border-slate-300 dark:hover:border-slate-600 transition-colors group mt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-light">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>account_balance</span>
</div>
<div className="flex flex-col">
<p className="text-sm font-medium text-white tracking-tight">Wire Transfer Info</p>
<p className="text-xs text-slate-500">View corporate bank details</p>
</div>
</div>
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" style={{ fontSize: `20px` }}>chevron_right</span>
</button>
</div>
</div>
</div>
<div className="rounded-xl p-5 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined" style={{ fontSize: `100px` }}>support_agent</span>
</div>
<h4 className="text-base font-bold mb-2 relative z-10">Billing Support</h4>
<p className="text-sm text-slate-300 mb-4 relative z-10">Need help with an invoice or updating your payment methods?</p>
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm relative z-10">
                                        Contact Billing Team
                                    </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

      </div>
    </div>
  );
}
