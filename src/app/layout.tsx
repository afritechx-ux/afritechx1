import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT, SITE } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false, // body text paints in a size-matched fallback first, so fonts never delay the CSS
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const serif = Newsreader({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

// Italic is used once (the hero tagline), so it loads without blocking the first paint.
const serifItalic = Newsreader({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  style: ["italic"],
  preload: false,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Afrixtech",
    default: SITE.title,
  },
  description: SITE.description,
  authors: [{ name: "Afrixtech", url: SITE.url }],
  creator: "Afrixtech",
  publisher: "Afrixtech",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE.url,
    siteName: "Afrixtech",
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const themeInit = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

/** LocalBusiness structured data for local search. Values come from src/data/site.ts. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  email: CONTACT.email,
  telephone: CONTACT.phones[0].e164,
  description: SITE.description,
  image: `${SITE.url}/opengraph-image`,
  priceRange: "From GH₵999",
  areaServed: { "@type": "Country", name: CONTACT.address.country },
  address: {
    "@type": "PostalAddress",
    ...(CONTACT.address.street ? { streetAddress: CONTACT.address.street } : {}),
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    addressCountry: CONTACT.address.countryCode,
  },
  contactPoint: CONTACT.phones.map((p) => ({
    "@type": "ContactPoint",
    contactType: p.label.toLowerCase(),
    telephone: p.e164,
    email: CONTACT.email,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} ${serifItalic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preload" href="/fonts/material-symbols.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas font-sans text-ink [overflow-x:clip]`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
