"use client";

import dynamic from 'next/dynamic';

/** Loads the pixel hero after the page is interactive so it never blocks the first paint. */
const HeroField = dynamic(() => import('./HeroField'), { ssr: false });

export default function HeroFieldLazy({ className = '' }: { className?: string }) {
  return <HeroField className={className} />;
}
