import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const userCount = await prisma.user.count();
        return NextResponse.json({
            status: 'Turbopack Compilation Successful',
            providers: authOptions.providers.length,
            users: userCount
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
