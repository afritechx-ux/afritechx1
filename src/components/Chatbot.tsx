"use client";

import React, { useState, useRef, useEffect } from 'react';

/* ── Chatbot Data ──────────────────────────────────────────────── */

const quickReplies = [
  { label: 'Start a Project', message: 'I want to start a new project' },
  { label: 'Pricing Info', message: 'Can you tell me about pricing?' },
  { label: 'Book a Call', message: 'I\'d like to book a consultation call' },
  { label: 'Support', message: 'I need technical support' },
];

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  'project': 'Great! We\'d love to help with your project. You can reach us at afritechx@gmail.com or call +233 245 171 589. Would you like to fill out our contact form instead?',
  'pricing': 'Our pricing depends on the scope and complexity of your project. For a detailed quote, please email us at afritechx@gmail.com or visit our Contact page. We typically respond within 2 hours!',
  'call': 'We\'d be happy to schedule a call! Please reach out to us at:\n📧 afritechx@gmail.com\n📞 +233 245 171 589\n📞 +233 209 624 647\nOr fill out the contact form and we\'ll get back to you.',
  'support': 'Our support team is available 24/7. You can:\n📧 Email: afritechx@gmail.com\n📞 Call: +233 245 171 589\n📞 Alt: +233 209 624 647\nWe\'ll respond within 2 hours.',
  'hello': 'Hello! Welcome to Afrixtech. How can I help you today? I can assist with project inquiries, pricing, booking a call, or technical support.',
  'default': 'Thanks for reaching out! For the best assistance, please contact us directly:\n📧 afritechx@gmail.com\n📞 +233 245 171 589\n📞 +233 209 624 647\nOr try one of the quick options below.',
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
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
          isOpen
            ? 'bg-white/10 backdrop-blur-xl border border-white/10 text-white rotate-0'
            : 'bg-primary text-black shadow-primary/30 hover:shadow-primary/50 hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="material-symbols-outlined text-2xl transition-transform duration-300">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-[#050505]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col" style={{ height: '480px' }}>

          {/* Header */}
          <div className="px-5 py-4 border-b border-white/5 bg-black/50 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-lg">smart_toy</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Afrixtech Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-medium">Online Now</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
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
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-primary text-black font-medium rounded-br-md'
                      : 'bg-white/5 text-slate-300 border border-white/5 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
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
            className="px-4 py-3 border-t border-white/5 bg-black/30 shrink-0"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-primary text-black flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shrink-0"
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
