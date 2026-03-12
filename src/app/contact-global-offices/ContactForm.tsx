"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to send message.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-2xl h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl text-emerald-400">check_circle</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6 max-w-sm">
                    Thank you for reaching out. A member of our enterprise team will be in touch with you at the provided email shortly.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold border border-white/10 transition-colors"
                >
                    Send Another Inquiry
                </button>
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">error</span>
                    {errorMessage}
                </div>
            )}
            
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]" htmlFor="firstName">First Name</label>
                    <input
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-white/15"
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        required
                        type="text"
                        disabled={status === 'loading'}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]" htmlFor="lastName">Last Name</label>
                    <input
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-white/15"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        type="text"
                        disabled={status === 'loading'}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]" htmlFor="email">Work Email</label>
                <input
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-white/15"
                    id="email"
                    name="email"
                    placeholder="jane@company.com"
                    required
                    type="email"
                    disabled={status === 'loading'}
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]" htmlFor="subject">Subject</label>
                <select
                    className="rounded-xl border border-white/10 bg-[#050505] px-4 py-3 text-sm text-white focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none hover:border-white/15"
                    id="subject"
                    name="subject"
                    disabled={status === 'loading'}
                >
                    <option value="general">General Inquiry</option>
                    <option value="project">Start a Project</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press &amp; Media</option>
                </select>
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]" htmlFor="message">Message</label>
                <textarea
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none hover:border-white/15"
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    disabled={status === 'loading'}
                />
            </div>

            <button
                className="mt-2 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-70 disabled:hover:shadow-none"
                type="submit"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? (
                    <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
                ) : (
                    <>
                        <span className="material-symbols-outlined text-lg">send</span>
                        Send Message
                    </>
                )}
            </button>

            <p className="text-[10px] text-slate-600 text-center mt-1 leading-relaxed">
                By submitting, you agree to our{' '}
                <Link href="#" className="text-primary/60 hover:text-primary transition-colors">Privacy Policy</Link>.
            </p>
        </form>
    );
}
