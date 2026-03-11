import React from 'react';

export default function AfritechxDetailedInvoiceView() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 backdrop-blur-md bg-white/5 dark:bg-black/20 border border-white/10 rounded-xl shadow-2xl overflow-hidden">

<div className="p-6 md:p-10 flex flex-col gap-8">
<div className="flex flex-wrap justify-between items-start gap-4">
<div className="flex flex-col gap-2">
<h1 className="tracking-tight text-3xl md:text-4xl font-bold leading-tight">Invoice #INV-2023-001</h1>
<p className="text-slate-500 text-sm font-medium">Issued on October 15, 2023</p>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">Pending</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-white/10/50">
<div className="flex flex-col gap-1">
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Billed To</p>
<p className="text-sm font-medium">Acme Corporation</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Client Email</p>
<p className="text-sm font-medium">billing@acmecorp.com</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Invoice Date</p>
<p className="text-sm font-medium">October 15, 2023</p>
</div>
<div className="flex flex-col gap-1">
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Due Date</p>
<p className="text-sm font-medium text-red-600 dark:text-red-400">October 31, 2023</p>
</div>
</div>
<div className="@container">
<div className="flex overflow-x-auto rounded-2xl border border-white/10/50 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-white/10">
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/2">Service Description</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Hours/Qty</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Rate</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Line Total</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-700/50">
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium">Frontend Web Development</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">120</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">$150.00</td>
<td className="px-6 py-4 text-sm font-medium text-right">$18,000.00</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium">UI/UX Product Design</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">40</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">$120.00</td>
<td className="px-6 py-4 text-sm font-medium text-right">$4,800.00</td>
</tr>
<tr className="hover:bg-[#050505] dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium">Cloud Server Setup</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">1</td>
<td className="px-6 py-4 text-sm text-slate-500 text-right">$500.00</td>
<td className="px-6 py-4 text-sm font-medium text-right">$500.00</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-4 border-t border-white/10">
<div className="w-full md:w-1/2 text-sm text-slate-500">
<p className="mb-2 font-semibold">Payment Instructions:</p>
<p>Please make payment to Afritechx LLC via wire transfer. Include invoice number in payment notes.</p>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium">$23,300.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Tax (10%)</span>
<span className="font-medium">$2,330.00</span>
</div>
<div className="flex justify-between items-center text-lg font-bold pt-3 border-t border-white/10">
<span>Total Amount Due</span>
<span className="text-primary">$25,630.00</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-8 pt-6 border-t border-white/10">
<button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium w-full sm:w-auto justify-center">
<span className="material-symbols-outlined text-[20px]">print</span>
              Print Invoice
            </button>
<button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-slate-900 hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20 w-full sm:w-auto justify-center">
<span className="material-symbols-outlined text-[20px]">payment</span>
              Confirm &amp; Pay
            </button>
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
