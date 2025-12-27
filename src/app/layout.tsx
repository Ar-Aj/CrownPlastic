import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout";
import { brand } from "@/config/brand";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.shortName} | ${brand.tagline}`,
    template: `%s | ${brand.shortName}`,
  },
  description: brand.description,
  keywords: ["plastic pipes", "UPVC pipes", "PPR pipes", "HDPE pipes", "pipe fittings", "UAE", "plumbing"],
  authors: [{ name: brand.name }],
  openGraph: {
    title: brand.name,
    description: brand.description,
    type: "website",
    locale: "en_AE",
    siteName: brand.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
