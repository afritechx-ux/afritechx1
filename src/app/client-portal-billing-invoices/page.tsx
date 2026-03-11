import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AfritechxClientPortalBillingInvoices() {

    // Fetch user and related invoices
    const user = await prisma.user.findUnique({
        where: { email: 'client@acmecorp.com' },
        include: {
            invoices: {
                orderBy: { dueDate: 'desc' }
            }
        }
    });

    if (!user) {
        throw new Error("User session not found in database.");
    }

    const invoices = user.invoices || [];

    return (
        <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
            <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10 layout-container flex h-full grow flex-col">
                <div className="px-4 lg:px-10 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1440px] flex-1">
                        <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[700px]">

                            {/* Sidebar Mapping */}
                            <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6 glassmorphism rounded-xl p-4">
                                <div className="flex gap-3 items-center border-b border-primary/20 pb-4">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/50 shadow-[0_0_10px_rgba(13,223,242,0.3)]" style={{ backgroundImage: `url('${user.image || ''}')` }}></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal">{user.company}</h1>
                                        <p className="text-primary/70 text-sm font-normal leading-normal">Client Account</p>
                                    </div>
                                </div>
                                <nav className="flex flex-col gap-2">
                                    <Link className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/10 text-slate-400 font-light hover:text-primary transition-colors" href="/client-portal-dashboard-overview">
                                        <span className="material-symbols-outlined text-xl">folder_open</span>
                                        <p className="text-sm font-medium leading-normal">Active Projects</p>
                                    </Link>
                                    <Link className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/20 text-primary border-l-4 border-primary" href="/client-portal-billing-invoices">
                                        <span className="material-symbols-outlined text-xl">receipt_long</span>
                                        <p className="text-sm font-medium leading-normal">Invoices</p>
                                    </Link>
                                    <Link className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/10 text-slate-400 font-light hover:text-primary transition-colors" href="/client-portal-document-repository">
                                        <span className="material-symbols-outlined text-xl">description</span>
                                        <p className="text-sm font-medium leading-normal">Documents</p>
                                    </Link>
                                </nav>
                            </aside>

                            {/* Invoices List Server Component */}
                            <main className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-wrap justify-between gap-3 items-end mb-4">
                                    <div className="flex flex-col gap-1">
                                        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight">Billing & Invoices</h1>
                                        <p className="text-primary/70 text-sm font-normal leading-normal">View and download your latest service invoices securely.</p>
                                    </div>
                                </div>

                                <div className="glassmorphism rounded-xl p-6 flex flex-col border border-white/5 relative overflow-hidden group">
                                    <div className="overflow-x-auto w-full">
                                        <table className="w-full relative z-10 text-left">
                                            <thead>
                                                <tr className="border-b border-primary/20 text-primary/80 pb-3">
                                                    <th className="font-semibold px-4 py-3">Invoice Number</th>
                                                    <th className="font-semibold px-4 py-3">Issue Date</th>
                                                    <th className="font-semibold px-4 py-3">Amount</th>
                                                    <th className="font-semibold px-4 py-3">Status</th>
                                                    <th className="font-semibold px-4 py-3 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoices.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={5} className="py-12 text-center text-slate-400">
                                                            <span className="material-symbols-outlined text-4xl mb-3 opacity-50 block">receipt</span>
                                                            No invoices generated yet for this billing cycle.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    invoices.map((inv: any) => (
                                                        <tr key={inv.id} className="border-b border-white/5 hover:bg-primary/5 transition-colors">
                                                            <td className="px-4 py-4 text-white font-medium">{inv.amount}</td>
                                                            <td className="px-4 py-4 text-slate-300">{new Date(inv.dueDate).toLocaleDateString()}</td>
                                                            <td className="px-4 py-4 text-primary font-bold">${inv.status === 'PAID' ? '-----' : 'Active'}</td>
                                                            <td className="px-4 py-4">
                                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${inv.status === 'PAID' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                                                                    {inv.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-4 text-right">
                                                                {inv.pdfUrl ? (
                                                                    <a href={inv.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 text-primary font-medium text-sm hover:bg-primary hover:text-black transition-all">
                                                                        <span className="material-symbols-outlined text-[18px]">download</span> PDF
                                                                    </a>
                                                                ) : (
                                                                    <span className="text-slate-500 text-sm">Processing...</span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
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
