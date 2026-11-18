import React from 'react';
import AfrixtechHomepageLandingPage from './home-client';
import { SITE } from '@/data/site';

export const metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function Home() {
  return <AfrixtechHomepageLandingPage />;
}
