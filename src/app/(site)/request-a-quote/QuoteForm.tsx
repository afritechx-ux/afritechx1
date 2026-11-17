"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const services = [
  { id: 'Cloud Solutions', icon: 'cloud', text: 'Architecture, migration and infrastructure management.' },
  { id: 'AI & Machine Learning', icon: 'memory', text: 'Predictive analytics, automation and NLP.' },
  { id: 'Web Development', icon: 'web', text: 'Modern web applications and enterprise portals.' },
  { id: 'Mobile App Development', icon: 'smartphone', text: 'Native and cross-platform iOS and Android apps.' },
  { id: 'UI/UX Design', icon: 'palette', text: 'Interface and experience design.' },
  { id: 'Cyber Security', icon: 'security', text: 'Security reviews and hardening.' },
];
const budgets = ['Under $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Not sure yet'];
const timelines = ['As soon as possible', '1–3 months', '3–6 months', '6+ months', 'Flexible'];
const steps = ['Services', 'Project', 'Contact'];

export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [brief, setBrief] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const next = () => {
    setError('');
    if (step === 0 && picked.length === 0) return setError('Select at least one service.');
    if (step === 1 && brief.trim().length < 10) return setError('Please describe your project in a sentence or two.');
    setStep((s) => s + 1);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !email.trim()) return setError('Name and email are required.');
    setSending(true);
    const [firstName, ...rest] = name.trim().split(' ');
    const message = [
      `Services: ${picked.join(', ')}`,
      `Budget: ${budget || 'n/a'}`,
      `Timeline: ${timeline || 'n/a'}`,
      `Company: ${company || 'n/a'}`,
      `Phone: ${phone || 'n/a'}`,
      '',
      brief,
    ].join('\n');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName: rest.join(' '), email, subject: 'quote', message }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to send');
      router.push('/quote-request-success-screen');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <ol className="mb-8 flex items-center gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2" aria-current={i === step ? 'step' : undefined}>
            <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${i <= step ? 'bg-primary-strong text-white' : 'bg-surface-raised text-ink-subtle'}`}>{i + 1}</span>
            <span className={`hidden text-sm sm:inline ${i === step ? 'font-medium text-ink' : 'text-ink-subtle'}`}>{s}</span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-line-strong" />}
          </li>
        ))}
      </ol>

      {error && (
        <div role="alert" className="mb-5 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2.5 text-sm text-danger">{error}</div>
      )}

      {step === 0 && (
        <fieldset>
          <legend className="text-xl font-semibold tracking-tight">What services do you need?</legend>
          <p className="mt-1 mb-5 text-sm text-ink-muted">Choose one or more.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => {
              const on = picked.includes(s.id);
              return (
                <label key={s.id} className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors ${on ? 'border-primary bg-primary/5' : 'border-line-strong hover:bg-surface-raised'}`}>
                  <input type="checkbox" checked={on} onChange={() => toggle(s.id)} className="mt-1 size-4 accent-[var(--primary)]" />
                  <span>
                    <span className="flex items-center gap-2 text-sm font-semibold"><span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">{s.icon}</span>{s.id}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{s.text}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">Tell us about the project</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="budget" className="label">Estimated budget</label>
              <select id="budget" className="input" value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">Select a range</option>
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="label">Timeline</label>
              <select id="timeline" className="input" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                <option value="">Select a timeline</option>
                {timelines.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="brief" className="label">Project description</label>
            <textarea id="brief" rows={6} className="input" value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Goals, users, integrations, constraints…" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">How can we reach you?</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="q-name" className="label">Full name</label><input id="q-name" className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required /></div>
            <div><label htmlFor="q-email" className="label">Work email</label><input id="q-email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required /></div>
            <div><label htmlFor="q-company" className="label">Company</label><input id="q-company" className="input" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" /></div>
            <div><label htmlFor="q-phone" className="label">Phone (optional)</label><input id="q-phone" type="tel" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></div>
          </div>
          <p className="text-xs text-ink-subtle">We only use your details to respond to your request.</p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button type="button" onClick={() => { setError(''); setStep((s) => s - 1); }} disabled={step === 0} className="btn btn-ghost disabled:invisible">Back</button>
        {step < 2 ? (
          <button type="button" onClick={next} className="btn btn-primary px-6">Continue</button>
        ) : (
          <button type="submit" disabled={sending} className="btn btn-primary px-6 disabled:opacity-60">{sending ? 'Sending…' : 'Submit request'}</button>
        )}
      </div>
    </form>
  );
}
