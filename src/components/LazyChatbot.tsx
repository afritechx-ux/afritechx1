"use client";

import dynamic from 'next/dynamic';

/** The chat widget is not needed for first paint, so it loads after hydration. */
const Chatbot = dynamic(() => import('./Chatbot'), { ssr: false });

export default function LazyChatbot() {
  return <Chatbot />;
}
