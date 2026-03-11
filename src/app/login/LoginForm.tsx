"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [email, setEmail] = useState('client@acmecorp.com');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await signIn('credentials', {
            email,
            password: 'demo',
            redirect: true,
            callbackUrl: '/client-portal-dashboard-overview'
        });

        if (res?.error) {
            setError('Invalid credentials or user not found.');
            setLoading(false);
        }
    };

    return (
        <form className="w-full flex flex-col gap-5" onSubmit={handleLogin}>

            {error && (
                <div className="w-full p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">error</span>
                    {error}
                </div>
            )}

            {/* Email */}
            <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]">Email Address</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-600 group-focus-within:text-primary transition-colors duration-200">
                        <span className="material-symbols-outlined text-lg">mail</span>
                    </div>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-medium placeholder:text-slate-700 disabled:opacity-50 hover:border-white/15"
                        placeholder="client@acmecorp.com"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]">Password</label>
                    <span className="text-[10px] text-primary/40 font-medium">Prototype Auto-Bypass</span>
                </div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-600 group-focus-within:text-primary transition-colors duration-200">
                        <span className="material-symbols-outlined text-lg">lock</span>
                    </div>
                    <input
                        type="password"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all font-medium placeholder:text-slate-700 disabled:opacity-50 hover:border-white/15"
                        placeholder="••••••••"
                        value="demo"
                        readOnly
                        disabled={loading}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-600 cursor-pointer hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-base">visibility_off</span>
                    </div>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 bg-primary hover:bg-primary/90 text-black font-bold py-3.5 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-70 disabled:hover:shadow-none"
            >
                {loading ? (
                    <span className="material-symbols-outlined animate-spin text-lg">refresh</span>
                ) : (
                    <>
                        <span className="material-symbols-outlined text-lg">login</span>
                        Authenticate
                    </>
                )}
            </button>

            {/* Need access */}
            <div className="text-center mt-2">
                <p className="text-xs text-slate-600">
                    Need access?{' '}
                    <a href="/contact-global-offices" className="text-primary/70 hover:text-primary transition-colors font-medium">
                        Contact Administrator
                    </a>
                </p>
            </div>
        </form>
    )
}
