'use client';

// Regional Market Page Client Component
// Phase 3 AEO - Conversion Optimization & Regional Expansion

import Link from 'next/link';
import { RegionalMarket } from '@/config/markets';
import { BreadcrumbSchema } from '@/components/schemas';
import { LocalBusinessRatingSchema } from '@/components/schemas/ReviewSchema';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';

const baseUrl = 'https://crownplasticuae.com';

interface MarketPageClientProps {
  market: RegionalMarket;
}

export default function MarketPageClient({ market }: MarketPageClientProps) {
  const pageUrl = `${baseUrl}/market/${market.slug}`;
  
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Markets', url: `${baseUrl}/market` },
    { name: market.country, url: `${baseUrl}/market/${market.countryCode.toLowerCase()}` },
    ...(market.city ? [{ name: market.city, url: pageUrl }] : []),
    { name: market.title.split(' - ')[0], url: pageUrl },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* LocalBusiness Rating Schema - No fabricated ratings, awaiting real reviews */}
      <LocalBusinessRatingSchema
        businessName={`Crown Plastic Pipes - ${market.city || market.country}`}
        city={market.city || market.country}
        pageUrl={pageUrl}
        // NOTE: reviews prop omitted - schema renders placeholder until real customer reviews collected
      />
      <TechnicalGuideSchema
        title={market.title}
        description={market.description}
        url={pageUrl}
        datePublished="2024-02-01"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={market.keywords}
        proficiencyLevel="Beginner"
      />

      {/* Main Content */}
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 text-blue-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/market" className="hover:text-white">Markets</Link></li>
                <li>/</li>
                <li><Link href={`/market/${market.countryCode.toLowerCase()}`} className="hover:text-white">{market.country}</Link></li>
                {market.city && (
                  <>
                    <li>/</li>
                    <li className="text-white">{market.city}</li>
                  </>
                )}
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {market.certifications[0]}
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {market.deliveryTime}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {market.title}
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  {market.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={market.cta.link}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
                  >
                    {market.cta.text}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href={`tel:${market.telephone}`}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-1">30+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-1">4.8★</div>
                  <div className="text-blue-200 text-sm">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-1">{market.certifications.length}</div>
                  <div className="text-blue-200 text-sm">Certifications</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Certifications Bar */}
        <section className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {market.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content - 2/3 */}
            <div className="md:col-span-2 space-y-12">
              {/* Why Choose Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Crown Plastic Pipes in {market.city || market.country}?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Certified Quality',
                      description: `All products ${market.certifications.slice(0, 2).join(' & ')} certified`,
                      icon: '🏆',
                    },
                    {
                      title: 'Fast Delivery',
                      description: `${market.deliveryTime} to ${market.city || market.country}`,
                      icon: '🚚',
                    },
                    {
                      title: 'Competitive Pricing',
                      description: `Bulk discounts available in ${market.currency}`,
                      icon: '💰',
                    },
                    {
                      title: 'Technical Support',
                      description: 'Expert consultation for your projects',
                      icon: '🔧',
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Service Areas */}
              {market.districts && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Areas We Serve in {market.city || market.country}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {market.districts.map((district, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Products */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Products Available for {market.city || market.country}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'UPVC Pressure Pipes', href: '/products/upvc-pressure', desc: 'BS EN 1452 certified' },
                    { name: 'UPVC Drainage Pipes', href: '/products/upvc-drainage', desc: 'BS EN 1401 compliant' },
                    { name: 'PPR Hot & Cold Pipes', href: '/products/ppr', desc: 'DIN 8077/8078 standard' },
                    { name: 'HDPE Pipes', href: '/products/polyethylene', desc: 'ISO 4427 certified' },
                    { name: 'PVC Conduit Pipes', href: '/products/pvc-conduit', desc: 'Electrical applications' },
                    { name: 'UPVC Duct Pipes', href: '/products/upvc-duct', desc: 'Telecom & cable ducting' },
                  ].map((product, index) => (
                    <Link
                      key={index}
                      href={product.href}
                      className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition"
                    >
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-gray-500 text-sm">{product.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - 1/3 */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-blue-900 text-white rounded-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Contact us for {market.city || market.country} pricing and delivery options.
                </p>
                
                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:${market.telephone}`}
                    className="flex items-center gap-3 text-white hover:text-blue-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{market.telephone}</span>
                  </a>
                  <a
                    href="mailto:info@crownplasticuae.com"
                    className="flex items-center gap-3 text-white hover:text-blue-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@crownplasticuae.com</span>
                  </a>
                </div>

                <Link
                  href={market.cta.link}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-semibold transition"
                >
                  {market.cta.text}
                </Link>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Delivery Information</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Delivery: {market.deliveryTime}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Currency: {market.currency}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Free shipping on bulk orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Full export documentation</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/technical/bs-en-1452-complete-guide" className="text-blue-600 hover:underline">
                      BS EN 1452 Guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/technical/gso-saso-compliance-guide" className="text-blue-600 hover:underline">
                      GSO/SASO Compliance →
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/faqs" className="text-blue-600 hover:underline">
                      Technical FAQs →
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-blue-600 hover:underline">
                      Downloads & Catalogues →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Order for {market.city || market.country}?
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Contact our {market.country} sales team for competitive pricing, bulk discounts, 
              and fast delivery to your project location.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={market.cta.link}
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
              >
                {market.cta.text}
              </Link>
              <Link
                href={`tel:${market.telephone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-semibold transition"
              >
                Call {market.telephone}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
