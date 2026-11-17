import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { timingSafeEqual } from "crypto";
import prisma from "@/lib/prisma";

const DEMO_EMAIL = "client@acmecorp.com";

// Only the demo account can sign in, and only with the password from DEMO_PASSWORD.
// In production DEMO_PASSWORD must be set; without it, sign-in is refused.
function demoPasswordMatches(given: string): boolean {
    const expected = process.env.DEMO_PASSWORD ?? (process.env.NODE_ENV === "production" ? "" : "demo");
    if (!expected) return false;
    const a = Buffer.from(given);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}

export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma) as any,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Client Access",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "client@acmecorp.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;
                // No per-user password storage exists yet, so only the demo account is allowed.
                if (credentials.email !== DEMO_EMAIL) return null;
                if (!demoPasswordMatches(credentials.password)) return null;

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
                token.role = (user as { role?: string }).role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as { role?: unknown; id?: unknown }).role = token.role;
                (session.user as { role?: unknown; id?: unknown }).id = token.id;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
        error: '/login', // Error code passed in query string as ?error=
    }
};
