import React from 'react';
import prisma from '@/lib/prisma'; // Prisma SQLite Connection

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AfritechxClientPortalDashboardOverview() {

  // 1. Prisma Auto-Seed & Fetch Logic
  let user = await prisma.user.findUnique({
    where: { email: 'client@acmecorp.com' },
    include: {
      projects: {
        include: { milestones: true }
      }
    }
  });

  // If the database is completely empty (first run), seed it!
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: 'client@acmecorp.com',
        name: 'Sarah J.',
        company: 'Acme Corp',
        role: 'CLIENT',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBukJbgNLntsaG3E3Gw_d9OobxyrakX42bBUOxY7LsT10Nhrg9KqRHIeRN75YaFourzPFWt4WcAT1gi_fRqXj1kVUhjuDFQiVkpHGn_JQAS5WqQsityKafPelMNeGd63Vbd5EbFg1VYq_QbNIXlanPnB-_qkJDbbhlNL-SC2d0k6UVW47tzyP2GwzCoPJ9w_0EffB_QdjHWMFsKmBoBPWB8MsOx88fuRJbKigIz0qJVU8khATeTFtRWqh3ZTPdzMLk8euGyg_D15pU',
        projects: {
          create: {
            name: 'Mobile App Development',
            description: 'Sprint 3 - Backend Integration',
            progress: 65,
            status: 'ON_TRACK',
            milestones: {
              create: [
                { title: 'API Design', status: 'COMPLETED' },
                { title: 'Database Setup', status: 'IN_PROGRESS' },
                { title: 'Auth Module', status: 'PENDING' },
              ]
            }
          }
        }
      },
      include: {
        projects: {
          include: { milestones: true }
        }
      }
    });
  }

  // Extract the live database entity
  if (!user) {
    throw new Error('Database Auto-Seeding Failed.');
  }

  const activeProject = user.projects?.[0];
  const milestones = activeProject?.milestones || [];

  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-4 lg:px-10 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-full max-w-[1440px] flex-1">

                <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[700px]">

                  {/* SIdebar */}
                  <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6 glassmorphism rounded-xl p-4">
                    <div className="flex gap-3 items-center border-b border-primary/20 pb-4">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/50 shadow-[0_0_10px_rgba(13,223,242,0.3)]" data-alt="Client logo" style={{ backgroundImage: `url('${user.image || ''}')` }}></div>
                      <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal">{user.company}</h1>
                        <p className="text-primary/70 text-sm font-normal leading-normal">Client Account</p>
                      </div>
                    </div>
                    <nav className="flex flex-col gap-2">
                      <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/20 text-primary border-l-4 border-primary" href="#">
                        <span className="material-symbols-outlined text-xl">folder_open</span>
                        <p className="text-sm font-medium leading-normal">Active Projects</p>
                      </a>
                      <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/10 text-slate-400 font-light hover:text-primary transition-colors" href="/client-portal-billing-invoices">
                        <span className="material-symbols-outlined text-xl">receipt_long</span>
                        <p className="text-sm font-medium leading-normal">Invoices</p>
                      </a>
                      <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/10 text-slate-400 font-light hover:text-primary transition-colors" href="/client-portal-document-repository">
                        <span className="material-symbols-outlined text-xl">description</span>
                        <p className="text-sm font-medium leading-normal">Documents</p>
                      </a>
                    </nav>
                  </aside>

                  {/* Main Dashboard Area */}
                  <main className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-wrap justify-between gap-3 items-end">
                      <div className="flex min-w-72 flex-col gap-1">
                        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight">Dashboard Overview</h1>
                        <p className="text-primary/70 text-sm font-normal leading-normal">Welcome back, {user.name}! Here's the latest on your projects.</p>
                      </div>
                    </div>

                    {/* LIVE Database Progress Section */}
                    {activeProject && (
                      <div className="glassmorphism rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="flex-1 w-full relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight mb-1">{activeProject.name}</h2>
                              <p className="text-primary/70 text-sm">{activeProject.description}</p>
                            </div>
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
                              {activeProject.status.replace('_', ' ')}
                            </span>
                          </div>
                          <div className="w-full bg-primary/10 rounded-full h-2.5 mb-2 mt-6 overflow-hidden">
                            <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(13,223,242,0.8)] transition-all duration-1000" style={{ width: `${activeProject.progress}%` }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-primary/70">
                            <span>Progress: {activeProject.progress}%</span>
                            <span>Live Database Sync: Active</span>
                          </div>
                        </div>

                        {/* Circular Progress (Data Bound) */}
                        <div className="w-32 h-32 flex-shrink-0 relative flex items-center justify-center z-10">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-primary/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                            <path className="text-primary drop-shadow-[0_0_4px_rgba(13,223,242,0.8)] transition-all duration-1000" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${activeProject.progress}, 100`} strokeWidth="3"></path>
                          </svg>
                          <div className="absolute text-center">
                            <span className="text-2xl font-bold text-primary">{activeProject.progress}%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                      {/* Live Database Milestones Setup */}
                      <div className="xl:col-span-2 glassmorphism rounded-xl p-6 flex flex-col border border-white/5">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Current Sprint Timeline</h3>
                        </div>
                        <div className="flex-1 w-full min-h-[200px] bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden flex flex-col gap-4 p-6 justify-center">

                          {milestones.map((ms: any, i: number) => (
                            <div key={ms.id} className="flex items-center text-sm gap-4 relative z-10">
                              <div className="w-1/4 text-primary/80 font-medium truncate">{ms.title}</div>
                              <div className="w-3/4 bg-primary/10 h-6 rounded-md relative overflow-hidden">
                                {ms.status === 'COMPLETED' && <div className="absolute left-0 top-0 h-full w-full bg-purple-500/60 rounded-md border border-purple-400/50"></div>}
                                {ms.status === 'IN_PROGRESS' && <div className="absolute left-0 top-0 h-full w-1/2 bg-primary/60 rounded-md border border-primary/50 shadow-[0_0_8px_rgba(13,223,242,0.4)] animate-pulse"></div>}
                                {ms.status === 'PENDING' && <div className="absolute left-0 top-0 h-full w-0 bg-slate-600/60 rounded-md border border-slate-500/50"></div>}
                              </div>
                            </div>
                          ))}

                          {/* Grid Lines */}
                          <div className="absolute top-0 bottom-0 left-1/4 border-l border-primary/10 border-dashed z-0"></div>
                          <div className="absolute top-0 bottom-0 left-1/2 border-l border-primary/10 border-dashed z-0"></div>
                          <div className="absolute top-0 bottom-0 left-3/4 border-l border-primary/10 border-dashed z-0"></div>
                        </div>
                      </div>

                      {/* Updates Frame */}
                      <div className="glassmorphism rounded-xl p-6 flex flex-col gap-4 border border-white/5">
                        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-2">System Status</h3>
                        <div className="flex flex-col gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 items-center justify-center text-center h-full">
                          <span className="material-symbols-outlined text-4xl text-green-400 mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">database</span>
                          <h4 className="text-white font-bold text-lg">Prisma ORM Connected</h4>
                          <p className="text-sm text-slate-400">This dashboard is now rendering completely live layout components heavily bound to the local SQLite Database via React Server Components.</p>
                        </div>
                      </div>

                    </div>
                  </main>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
