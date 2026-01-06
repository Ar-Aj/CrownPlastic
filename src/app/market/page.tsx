// Markets Landing Page
// Phase 3 AEO - Regional Market Overview

import { Metadata } from 'next';
import Link from 'next/link';
import { allRegionalMarkets, saudiMarkets, uaeMarkets, gccMarkets } from '@/config/markets';
import { BreadcrumbSchema } from '@/components/schemas';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'UPVC Pipes Markets | GCC & Middle East Coverage | Crown Plastic Pipes',
  description: 'Crown Plastic Pipes serves markets across the GCC region including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. GSO & SASO certified products with regional delivery.',
  keywords: [
    'UPVC pipes GCC',
    'Middle East pipe supplier',
    'Gulf region pipes',
    'Saudi Arabia UPVC',
    'UAE pipe manufacturer',
    'Kuwait pipe supplier',
    'Qatar construction materials',
  ],
  alternates: {
    canonical: `${baseUrl}/market`,
  },
};

export default function MarketsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Markets', url: `${baseUrl}/market` },
  ];

  const marketGroups = [
    { title: 'Saudi Arabia', markets: saudiMarkets, flag: '🇸🇦' },
    { title: 'United Arab Emirates', markets: uaeMarkets, flag: '🇦🇪' },
    { title: 'Other GCC Markets', markets: gccMarkets, flag: '🌍' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="text-sm mb-6 text-blue-200">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Markets</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Regional Markets We Serve
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Crown Plastic Pipes exports certified UPVC, PPR, and HDPE pipes across the GCC region. 
              GSO and SASO certified products with regional delivery and support.
            </p>
          </div>
        </header>

        {/* Stats */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900">6+</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">{allRegionalMarkets.length}</div>
                <div className="text-gray-600 text-sm">Market Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">35+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">100%</div>
                <div className="text-gray-600 text-sm">GSO Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Groups */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {marketGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">{group.flag}</span>
                  {group.title}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.markets.map((market, index) => (
                    <Link
                      key={index}
                      href={`/market/${market.slug}`}
                      className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                          {market.city || market.country}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {market.certifications[0]}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {market.focus}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{market.deliveryTime}</span>
                        <span className="text-blue-600 group-hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Market?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We export to additional markets across the Middle East, Africa, and Asia. 
              Contact us for delivery to your location.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Our Export Team
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
