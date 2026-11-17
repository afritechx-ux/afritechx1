import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-serif-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0b" },
  ],
};

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrixtech | Enterprise Digital Solutions",
    description: "Cutting-edge digital transformation through AI, Cloud Computing, and bespoke software development.",
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

const themeInit = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas font-sans text-ink [overflow-x:clip]`}>
        {children}
      </body>
    </html>
  );
}
