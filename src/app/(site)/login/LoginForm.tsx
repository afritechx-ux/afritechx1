"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [email, setEmail] = useState('client@acmecorp.com');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/client-portal-dashboard-overview',
        });

        if (res?.error) {
            setError('Invalid credentials or user not found.');
            setLoading(false);
        } else {
            window.location.href = res?.url || '/client-portal-dashboard-overview';
        }
    };

    return (
        <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
                <div role="alert" className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2.5 text-sm text-danger">
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="email" className="label">Email address</label>
                <input
                    id="email"
                    type="email"
                    required
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="input"
                    placeholder="you@company.com"
                />
            </div>

            <div>
                <label htmlFor="password" className="label">Password</label>
                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="input"
                    placeholder="Password"
                />
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary h-12 w-full disabled:opacity-60">
                {loading ? 'Signing in…' : 'Sign in'}
            </button>

            <p className="text-center text-sm text-ink-muted">
                Need access?{' '}
                <a href="/contact-global-offices" className="font-medium text-primary hover:underline">Contact your administrator</a>
            </p>
        </form>
    );
}
