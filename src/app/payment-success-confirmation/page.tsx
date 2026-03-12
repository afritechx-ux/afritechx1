import React from 'react';

export default function AfrixtechPaymentSuccessConfirmation() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">

<main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
<div className="w-full max-w-2xl bg-white dark:bg-[#152a16] rounded-xl shadow-lg border border-slate-200 dark:border-primary/20 p-8 sm:p-12 flex flex-col items-center gap-8">
<div className="flex flex-col items-center gap-6 w-full">
<div className="bg-primary/10 dark:bg-primary/20 rounded-full p-6 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-primary">verified_user</span>
</div>
<div className="flex flex-col items-center gap-3 text-center">
<h1 className="text-white tracking-tight text-3xl font-bold leading-tight tracking-[-0.015em]">Payment Successful</h1>
<p className="text-slate-400 font-light text-base font-normal leading-normal max-w-[480px]">Thank you for your payment. Your transaction has been securely processed and applied to your account.</p>
</div>
<button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-slate-100 dark:bg-[#1a351c] hover:bg-slate-200 dark:hover:bg-[#204022] text-slate-700 dark:text-slate-200 text-sm font-semibold leading-normal transition-colors border border-slate-200 dark:border-primary/30">
<span className="material-symbols-outlined text-sm">download</span>
<span>Download Receipt</span>
</button>
</div>
<div className="w-full max-w-[480px] bg-[#050505] dark:bg-[#112312] rounded-2xl border border-slate-200 dark:border-primary/20 overflow-hidden">
<div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-primary/20">
<div className="flex flex-col gap-1 p-5">
<p className="text-slate-500 text-sm font-medium leading-normal">Transaction ID</p>
<p className="text-white tracking-tight text-base font-semibold leading-normal font-mono">TRX-1029384756</p>
</div>
<div className="flex flex-col gap-1 p-5">
<p className="text-slate-500 text-sm font-medium leading-normal">Amount Paid</p>
<p className="text-primary text-lg font-bold leading-normal">$5,000.00</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-[480px] mt-4">
<button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-background-dark text-base font-bold leading-normal transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">dashboard</span>
<span>Return to Dashboard</span>
</button>
<button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-slate-800 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-white text-white dark:text-slate-900 text-base font-bold leading-normal transition-colors">
<span>View Next Milestone</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</main>

</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
