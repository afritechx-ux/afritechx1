import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afrixtech.com'),
  title: {
    template: '%s | Afrixtech',
    default: 'Afrixtech | Enterprise Digital Solutions',
  },
  description: "Afrixtech delivers cutting-edge digital transformation through Artificial Intelligence, Cloud Computing, and bespoke software development for global enterprises.",
  keywords: ["Enterprise Software", "Cloud Infrastructure", "Afrixtech", "Digital Transformation", "Custom Software Development", "AI Solutions"],
  authors: [{ name: "Afrixtech Engineering", url: "https://afrixtech.com" }],
  creator: "Afrixtech",
  publisher: "Afrixtech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afrixtech.com",
    siteName: "Afrixtech",
    title: "Afrixtech | Enterprise Digital Solutions",
    description: "Cutting-edge digital transformation through AI, Cloud Computing, and bespoke software development.",
    images: [
      {
        url: "/case-studies/homepage-hero.png",
        width: 1200,
        height: 630,
        alt: "Afrixtech Digital Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrixtech | Enterprise Digital Solutions",
    description: "Cutting-edge digital transformation through AI, Cloud Computing, and bespoke software development.",
    images: ["/case-studies/homepage-hero.png"],
    creator: "@afrixtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black font-sans text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white`}>
        {/* Infinite Architectural Dot Grid Background */}
        <div className="fixed inset-0 -z-50 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
