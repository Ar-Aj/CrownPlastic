import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { MainLayout } from "@/components/layout";
import { brand } from "@/config/brand";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Base URL for canonical and OG
const baseUrl = "https://crownplasticuae.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${brand.shortName} | UPVC PPR HDPE Pipes & Fittings UAE`,
    template: `%s | ${brand.shortName}`,
  },
  description: "Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings since 1995. ISO 9001:2015 certified. Serving Dubai, Sharjah, Abu Dhabi & GCC for water supply, drainage, electrical conduits, irrigation.",
  keywords: [
    "UPVC pipes UAE",
    "PPR pipes Dubai",
    "HDPE pipes GCC",
    "plastic pipes Sharjah",
    "pipe fittings UAE",
    "drainage pipes Dubai",
    "irrigation pipes GCC",
    "water supply pipes UAE",
    "electrical conduit pipes",
    "Crown Plastic Pipes",
  ],
  authors: [{ name: brand.name, url: baseUrl }],
  creator: brand.name,
  publisher: brand.name,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: baseUrl,
    siteName: brand.shortName,
    title: `${brand.shortName} | UPVC PPR HDPE Pipes & Fittings Manufacturer UAE`,
    description: "ISO 9001:2015 certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings. Serving Dubai, Sharjah, UAE & GCC since 1995 for water supply, drainage, electrical conduits, irrigation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crown Plastic Pipes Factory - UPVC PPR HDPE Pipes UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@crownpipes",
    creator: "@crownpipes",
    title: `${brand.shortName} | UPVC PPR HDPE Pipes UAE`,
    description: "Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings since 1995. ISO certified. Dubai, Sharjah & GCC.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code
  },
  category: "Industrial Manufacturing",
};

// Organization JSON-LD structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: brand.name,
  alternateName: brand.shortName,
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/logo.png`,
    width: 200,
    height: 200,
  },
  image: `${baseUrl}/images/og-image.jpg`,
  description: "Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical conduits, and irrigation since 1995.",
  foundingDate: "1995",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      addressCountry: "AE",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area No. 6",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "63576",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: brand.contact.phone,
      contactType: "sales",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH"],
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: brand.contact.phone,
      contactType: "customer service",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH"],
      availableLanguage: ["English", "Arabic"],
    },
  ],
  sameAs: [
    brand.social.linkedin,
    brand.social.facebook,
    brand.social.youtube,
    brand.social.instagram,
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plastic Pipes & Fittings",
    itemListElement: [
      { "@type": "OfferCatalog", name: "UPVC Pressure Pipes & Fittings" },
      { "@type": "OfferCatalog", name: "UPVC Drainage Pipes & Fittings" },
      { "@type": "OfferCatalog", name: "PPR Pipes" },
      { "@type": "OfferCatalog", name: "HDPE Pipe Systems" },
      { "@type": "OfferCatalog", name: "PVC Conduit Pipes" },
      { "@type": "OfferCatalog", name: "UPVC Duct Pipes" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Default to 'en' and 'ltr' for SSR hydration consistency.
    // LanguageProvider will update these on client mount based on URL/localStorage.
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <LanguageProvider>
            <MainLayout>{children}</MainLayout>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
