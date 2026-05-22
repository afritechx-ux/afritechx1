import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DocumentList from './document-list';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AfrixtechClientPortalDocumentRepository() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  // Fetch user and related documents using session email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      documents: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!user) {
    redirect('/login');
  }

  let documents = user.documents || [];

  // Seed default documents if the user has none (first login)
  if (documents.length === 0) {
    const defaultDocs = [
      {
        fileName: 'Requirements Gathering Doc',
        fileType: 'PDF',
        fileUrl: '#',
        sizeBytes: 2516582,
        clientId: user.id,
        createdAt: new Date('2023-10-12T10:00:00Z'),
      },
      {
        fileName: 'Homepage Wireframes',
        fileType: 'Figma',
        fileUrl: '#',
        sizeBytes: 0,
        clientId: user.id,
        createdAt: new Date('2023-10-15T14:30:00Z'),
      },
      {
        fileName: 'Brand Assets',
        fileType: 'ZIP',
        fileUrl: '#',
        sizeBytes: 16567500,
        clientId: user.id,
        createdAt: new Date('2023-10-18T09:15:00Z'),
      },
      {
        fileName: 'API Documentation',
        fileType: 'PDF',
        fileUrl: '#',
        sizeBytes: 1153433,
        clientId: user.id,
        createdAt: new Date('2023-10-20T16:00:00Z'),
      },
      {
        fileName: 'Sprint 1 Report',
        fileType: 'PDF',
        fileUrl: '#',
        sizeBytes: 3670016,
        clientId: user.id,
        createdAt: new Date('2023-10-25T11:45:00Z'),
      },
    ];

    await Promise.all(
      defaultDocs.map((doc) =>
        prisma.document.create({
          data: doc,
        })
      )
    );

    // Refetch
    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        documents: {
          orderBy: { createdAt: 'desc' }
        }
      }
    });
    documents = updatedUser?.documents || [];
  }

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
                  <Link className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/10 text-slate-400 font-light hover:text-primary transition-colors" href="/client-portal-billing-invoices">
                    <span className="material-symbols-outlined text-xl">receipt_long</span>
                    <p className="text-sm font-medium leading-normal">Invoices</p>
                  </Link>
                  <Link className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/20 text-primary border-l-4 border-primary" href="/client-portal-document-repository">
                    <span className="material-symbols-outlined text-xl">description</span>
                    <p className="text-sm font-medium leading-normal">Documents</p>
                  </Link>
                </nav>
              </aside>

              {/* Main Content Area */}
              <main className="flex-1 flex flex-col gap-6">
                <div className="flex flex-wrap justify-between items-end gap-3 pb-4">
                  <div className="flex min-w-72 flex-col gap-2">
                    <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight">Documents &amp; Deliverables</h1>
                    <p className="text-primary/70 text-sm font-normal leading-normal">Manage and download shared files for your projects</p>
                  </div>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-slate-900 hover:bg-primary/90 transition-colors text-sm font-bold leading-normal">
                    <span className="material-symbols-outlined mr-2 text-[18px]">upload</span>
                    <span className="truncate">Upload Document</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-8 hover:bg-primary/10 transition-colors cursor-pointer group">
                    <div className="rounded-full bg-primary/20 p-4 text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] text-center">Upload Assets</p>
                      <p className="text-slate-400 font-light text-sm font-normal leading-normal text-center">Drag and drop your files here or click to browse</p>
                    </div>
                    <button className="mt-2 flex cursor-pointer items-center justify-center rounded-lg h-9 px-5 bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-medium leading-normal">
                      Browse Files
                    </button>
                  </div>
                </div>

                {/* Filterable Document List (Client Component) */}
                <DocumentList initialDocuments={documents} />

              </main>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
