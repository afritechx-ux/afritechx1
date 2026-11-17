"use client";

import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus('loading');
        setErrorMessage('');

        const fd = new FormData(form);
        const data = {
            firstName: fd.get('firstName'),
            lastName: fd.get('lastName'),
            email: fd.get('email'),
            subject: fd.get('subject'),
            message: fd.get('message'),
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
                form.reset();
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to send message.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div role="status" className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">check_circle</span>
                </span>
                <h3 className="mt-5 text-xl font-semibold">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-muted">
                    Thank you for reaching out. A member of our team will reply to the email you provided.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary mt-6">
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
            {status === 'error' && (
                <div role="alert" className="flex items-center gap-2 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2.5 text-sm text-danger">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">error</span>
                    {errorMessage}
                </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="label">First name</label>
                    <input id="firstName" name="firstName" required autoComplete="given-name" className="input" />
                </div>
                <div>
                    <label htmlFor="lastName" className="label">Last name</label>
                    <input id="lastName" name="lastName" autoComplete="family-name" className="input" />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="label">Work email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="input" placeholder="you@company.com" />
            </div>

            <div>
                <label htmlFor="subject" className="label">Topic</label>
                <select id="subject" name="subject" className="input" defaultValue="general">
                    <option value="general">General inquiry</option>
                    <option value="project">Start a project</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press &amp; media</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="label">How can we help?</label>
                <textarea id="message" name="message" required rows={5} className="input" placeholder="Tell us about your project, timeline and goals." />
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn btn-primary h-12 w-full disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            <p className="text-center text-xs text-ink-subtle">We only use your details to respond to your enquiry.</p>
        </form>
    );
}
