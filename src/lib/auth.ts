import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma) as any,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Client Demo Access",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "client@acmecorp.com" },
                password: { label: "Password (leave blank for demo)", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email) return null;

                let user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                // Auto-seed the demo user if they don't exist in this new database
                if (!user && credentials.email === 'client@acmecorp.com') {
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
                        }
                    });
                }

                if (user) {
                    // Returning the user bypasses real auth for this demo environment
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role: user.role
                    };
                }

                return null; // Return null if user data could not be retrieved
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role;
                (session.user as any).id = token.id;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
        error: '/login', // Error code passed in query string as ?error=
    }
};
