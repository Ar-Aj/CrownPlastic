import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { MainLayout } from "@/components/layout";
import { brand } from "@/config/brand";
import { LanguageProvider } from "@/context/LanguageContext";
import { OrganizationSchema } from "@/components/schemas";
import { WhatsAppButton } from "@/components/common";
import { GoogleAnalyticsProvider } from "@/components/analytics";
import { type Locale, locales, defaultLocale } from "@/lib/i18n-utils";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

// Base URL for canonical and OG
const baseUrl = "https://crownplasticuae.com";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isAr = params.locale === 'ar';
  const isFr = params.locale === 'fr';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${brand.shortName} | UPVC PPR HDPE Pipes & Fittings UAE`,
      template: `%s | ${brand.shortName}`,
    },
    description: "Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings since 1995. ISO 9001:2015 certified. Serving Dubai, Sharjah, Abu Dhabi & GCC for water supply, drainage, electrical conduits, irrigation.",
    icons: {
      icon: '/images/logo.png',
      shortcut: '/images/logo.png',
      apple: '/images/logo.png',
    },
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
      canonical: `${baseUrl}/${params.locale}/`,
      languages: {
        'en': `${baseUrl}/en/`,
        'ar': `${baseUrl}/ar/`,
        'fr': `${baseUrl}/fr/`,
        'x-default': `${baseUrl}/en/`,
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? 'ar_AE' : isFr ? 'fr_FR' : 'en_AE',
      alternateLocale: isAr ? ['en_AE', 'fr_FR'] : isFr ? ['en_AE', 'ar_AE'] : ['ar_AE', 'fr_FR'],
      url: `${baseUrl}/${params.locale}`,
      siteName: brand.shortName,
      title: `${brand.shortName} | UPVC PPR HDPE Pipes & Fittings Manufacturer UAE`,
      description: "ISO 9001:2015 certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings. Serving Dubai, Sharjah, UAE & GCC since 1995 for water supply, drainage, electrical conduits, irrigation.",
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
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
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    verification: {
      google: 'k0es25wKrqrMd1QAclhx1i0VaWH2R9mMmeSCD4TRG1I',
    },
    category: "Industrial Manufacturing",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0047AB", // Crown brand blue for mobile status bar
};

// ─────────────────────────────────────────────────────────────
// Static Generation: Build /en/ and /ar/ at build time
// ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ─────────────────────────────────────────────────────────────
// Root Layout — <html> and <body> live here with dynamic lang/dir
// ─────────────────────────────────────────────────────────────
export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={inter.variable}>
      <head>
        {/* Enhanced Organization Schema with certifications, ratings, and full company data */}
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalyticsProvider />
        <LanguageProvider initialLanguage={locale}>
          <MainLayout>{children}</MainLayout>
          {/* Global WhatsApp floating button */}
          <WhatsAppButton
            showAfterScroll={300}
            showPulse={true}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
