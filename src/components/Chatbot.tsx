"use client";

import React, { useState, useRef, useEffect } from 'react';
import { LogoMark } from './Logo';
import { CONTACT, PACKAGES } from '@/data/site';

/* ── Chatbot Data ──────────────────────────────────────────────── */

const quickReplies = [
  { label: 'Start a Project', message: 'I want to start a new project' },
  { label: 'Packages & pricing', message: 'Can you tell me about packages and pricing?' },
  { label: 'Book a Call', message: 'I\'d like to book a consultation call' },
  { label: 'Support', message: 'I need technical support' },
];

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const phoneLines = CONTACT.phones.map((p) => `📞 ${p.label}: ${p.display}`).join('\n');

const botResponses: Record<string, string> = {
  project: `Great! We'd love to help with your project. Email us at ${CONTACT.email} or call ${CONTACT.phones[0].display}. You can also use the quote form on our website.`,
  pricing: `Our ${PACKAGES[0].name} package is ${PACKAGES[0].price} flat, with a free domain name and 1 year of hosting. Online stores start at ${PACKAGES.find((p) => p.id === 'starter-store')?.price}. See all packages and prices in the Packages section on the homepage (/#packages), or message us on WhatsApp.`,
  call: `We'd be happy to talk! Reach us at:\n📧 ${CONTACT.email}\n${phoneLines}`,
  support: `For help, you can reach us at:\n📧 ${CONTACT.email}\n${phoneLines}`,
  hello: 'Hello! Welcome to Afrixtech. I can help with project inquiries, packages and pricing, or how to reach us.',
  default: `Thanks for reaching out! For the best help, contact us directly:\n📧 ${CONTACT.email}\n${phoneLines}\nOr try one of the quick options below.`,
};

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('project') || lower.includes('start') || lower.includes('build')) return botResponses.project;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('quote')) return botResponses.pricing;
  if (lower.includes('call') || lower.includes('book') || lower.includes('schedule') || lower.includes('meeting')) return botResponses.call;
  if (lower.includes('support') || lower.includes('help') || lower.includes('issue') || lower.includes('bug')) return botResponses.support;
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('good')) return botResponses.hello;
  return botResponses.default;
}

/* ── Component ─────────────────────────────────────────────────── */

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hey! 👋 Welcome to Afrixtech. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const nextId = useRef(2);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: nextId.current++,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: nextId.current++,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
          isOpen
            ? 'bg-surface border border-line-strong text-ink'
            : 'bg-primary-strong text-white hover:bg-primary'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="material-symbols-outlined text-2xl transition-transform duration-300">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-44 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="rounded-xl border border-line bg-surface shadow-2xl shadow-black/20 overflow-hidden flex flex-col" style={{ height: '480px' }}>

          {/* Header */}
          <div className="px-5 py-4 border-b border-line bg-surface-raised shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary border border-primary/20">
                <LogoMark className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-ink font-semibold text-sm">Afrixtech Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-[10px] text-success font-medium">Online Now</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center text-ink-subtle hover:text-ink transition-all"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-primary-strong text-white font-medium rounded-br-md'
                      : 'bg-surface-raised text-ink border border-line rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-surface-raised border border-line rounded-xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-ink-subtle animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-ink-subtle animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-ink-subtle animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => sendMessage(qr.message)}
                  className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-line bg-surface shrink-0"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-canvas border border-line-strong rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-primary-strong text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary transition-all shrink-0"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
