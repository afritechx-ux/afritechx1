import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

/** Returns the signed-in client with their related data, or redirects to /login. */
export async function getPortalUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      projects: { include: { milestones: true }, orderBy: { createdAt: 'desc' } },
      invoices: { orderBy: { dueDate: 'desc' } },
    },
  });
  if (!user) redirect('/login');
  return user;
}

export const money = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
