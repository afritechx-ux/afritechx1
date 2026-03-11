import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        // Create an Admin/Client User
        const user = await prisma.user.upsert({
            where: { email: 'client@acmecorp.com' },
            update: {},
            create: {
                email: 'client@acmecorp.com',
                name: 'Sarah J.',
                company: 'Acme Corp',
                role: 'CLIENT',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBukJbgNLntsaG3E3Gw_d9OobxyrakX42bBUOxY7LsT10Nhrg9KqRHIeRN75YaFourzPFWt4WcAT1gi_fRqXj1kVUhjuDFQiVkpHGn_JQAS5WqQsityKafPelMNeGd63Vbd5EbFg1VYq_QbNIXlanPnB-_qkJDbbhlNL-SC2d0k6UVW47tzyP2GwzCoPJ9w_0EffB_QdjHWMFsKmBoBPWB8MsOx88fuRJbKigIz0qJVU8khATeTFtRWqh3ZTPdzMLk8euGyg_D15pU',
            },
        })

        // Create an active project
        const project = await prisma.project.create({
            data: {
                name: 'Mobile App Development',
                description: 'Sprint 3 - Backend Integration',
                progress: 65,
                status: 'ON_TRACK',
                clientId: user.id,
            },
        })

        // Add milestones
        await prisma.milestone.createMany({
            data: [
                { title: 'API Design', status: 'COMPLETED', projectId: project.id },
                { title: 'Database Setup', status: 'IN_PROGRESS', projectId: project.id },
                { title: 'Auth Module', status: 'PENDING', projectId: project.id },
            ]
        })

        return NextResponse.json({ message: 'Database seeded successfully!' })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
