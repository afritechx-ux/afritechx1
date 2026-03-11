import React from 'react';
import LoginForm from './LoginForm';

export const metadata = {
    title: 'Client Portal Login | Afritechx',
    description: 'Secure access to the Afritechx Client Portal.'
};

export default function LoginPage() {
    return (
        <div className="w-full relative min-h-screen bg-black flex items-center justify-center p-4">
            {/* Background grid */}
            <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient glow orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* Main content */}
            <div className="relative z-10 w-full max-w-[960px] flex rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-primary/5">

                {/* Left panel — branding + trust signals */}
                <div className="hidden lg:flex flex-col justify-between w-[440px] bg-[#050505] p-10 relative overflow-hidden border-r border-white/5">
                    {/* Decorative background */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-16">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-lg">terminal</span>
                            </div>
                            <span className="text-white text-xl font-bold tracking-tighter">Afritechx</span>
                        </div>

                        {/* Welcome text */}
                        <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-4">
                            Welcome to the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                Client Portal
                            </span>
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Access your project dashboards, billing, analytics, and support tickets — all in one secure platform.
                        </p>
                    </div>

                    {/* Trust signals */}
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-emerald-400 text-base">shield</span>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold">SOC 2 Compliant</p>
                                <p className="text-slate-600 text-[10px]">Enterprise-grade security</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-blue-400 text-base">encrypted</span>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold">256-bit Encryption</p>
                                <p className="text-slate-600 text-[10px]">End-to-end data protection</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-purple-400 text-base">monitoring</span>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold">99.9% Uptime</p>
                                <p className="text-slate-600 text-[10px]">Always-on infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right panel — login form */}
                <div className="flex-1 bg-black/80 backdrop-blur-xl p-8 sm:p-12 flex flex-col items-center justify-center relative">
                    {/* Gradient border top accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <div className="w-full max-w-sm">
                        {/* Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                                <div className="relative flex justify-center items-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-3xl">fingerprint</span>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl font-black text-white tracking-tight mb-2 text-center">Secure Access</h1>
                        <p className="text-sm text-slate-500 text-center mb-8">Authenticate to enter the Client Portal.</p>

                        {/* Form */}
                        <LoginForm />

                        {/* Footer */}
                        <div className="mt-8 pt-6 border-t border-white/5 text-center">
                            <p className="text-[10px] text-slate-600 leading-relaxed">
                                By logging in, you agree to our{' '}
                                <a href="/about-team-profile" className="text-primary/60 hover:text-primary transition-colors">Terms of Service</a>{' '}
                                and{' '}
                                <a href="/about-team-profile" className="text-primary/60 hover:text-primary transition-colors">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
