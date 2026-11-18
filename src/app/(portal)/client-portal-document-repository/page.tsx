import React from 'react';
import prisma from '@/lib/prisma';
import { PageHeader } from '@/components/ui';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DocumentList from './document-list';

export const metadata = { title: 'Documents' };
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
    <>
      <PageHeader title="Documents" description="Files and deliverables shared with your team." />
      <DocumentList initialDocuments={documents} />
    </>
  );
}
