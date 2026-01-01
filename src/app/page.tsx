import Link from 'next/link';
import Image from 'next/image';
import { HeroSection, CardGrid, StatsStrip, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { productCategories } from '@/config/products';
import type { Metadata } from 'next';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'Crown Plastic Pipes | UPVC PPR HDPE Pipes & Fittings Manufacturer UAE Dubai',
  description: 'Crown Plastic Pipes Factory L.L.C. - Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings since 1995. ISO 9001:2015 certified. 5,000+ products for water supply, drainage, electrical conduits, irrigation. Dubai, Sharjah, Abu Dhabi & GCC.',
  keywords: [
    'UPVC pipes UAE',
    'PPR pipes Dubai',
    'HDPE pipes manufacturer',
    'plastic pipes Sharjah',
    'pipe fittings GCC',
    'water supply pipes UAE',
    'drainage pipes Dubai',
    'electrical conduit pipes',
    'irrigation pipes GCC',
    'Crown Plastic Pipes Factory',
    'ISO certified pipes UAE',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crown Plastic Pipes | UPVC PPR HDPE Pipes Manufacturer UAE',
    description: 'Leading UAE manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings since 1995. ISO 9001:2015 certified. Serving Dubai, Sharjah & GCC.',
    url: baseUrl,
    images: ['/images/og-home.jpg'],
  },
};

export default function HomePage() {
  // Transform product categories for CardGrid
  const productCards = productCategories.map((cat) => ({
    title: cat.name,
    description: cat.shortDescription,
    href: `/products/${cat.slug}`,
    icon: cat.icon,
    image: cat.image,
    alt: `${cat.name} product shot`,
  }));

  const stats = [
    { value: '30+', label: 'Years Expertise Since 1995', iconName: 'calendar' as const },
    { value: 'State-of-the-art', label: 'Manufacturing Facilities', iconName: 'factory' as const },
    { value: '5,000+', label: 'Product Variants', iconName: 'package' as const },
    { value: 'Multiple Countries', label: 'Across GCC & Sub-continent', iconName: 'globe' as const },
    { value: '10,000+', label: 'Trusted Customers', iconName: 'users' as const },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        subtitle="Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical ducting, irrigation, construction & infrastructure projects across GCC."
      />

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of high-quality plastic piping solutions for every application
            </p>
          </div>
          <CardGrid items={productCards} columns={3} />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip stats={stats} variant="primary" />

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-up">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                About Crown Plastic Pipes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Tomorrow&apos;s Infrastructure Today
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Crown Plastic Pipes Factory L.L.C., established 1995 in Sharjah, UAE. ISO 9001:2015, 14001:2015, 
                OHSAS 18001:2007 certified. Pioneering UPVC, PPRC, HDPE pipes for sewerage, drainage, pressure 
                water systems, electrical conduits & telecom ducts. Serving irrigation, construction, plumbing 
                & landscaping across GCC with in-house quality control and international lab testing.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="relative">
                <Image
                  src="/images/about/factory-hero.jpg"
                  alt="Crown Plastic Pipes factory extrusion lines in UAE"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-2xl object-cover aspect-video"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="certified" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">ISO Certified</p>
                      <p className="text-sm text-gray-500">Quality Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Crown Plastic Pipes?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine quality, innovation, and service excellence to deliver superior piping solutions
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { iconName: 'trophy' as const, title: 'Premium Quality', description: '100% virgin uPVC materials, ISO-certified, Gulf climate tested' },
              { iconName: 'innovation' as const, title: 'Innovation', description: 'Modern extrusion technology, continuous R&D' },
              { iconName: 'truck' as const, title: 'Fast Delivery', description: 'GCC-wide logistics, custom lengths available (4m, 6m+)' },
              { iconName: 'users' as const, title: 'Expert Support', description: 'Technical specs, standards compliance, project assistance' },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="text-center p-6 rounded-xl bg-gray-50 card-hover hover:shadow-lg hover:bg-white transition-all duration-200 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.iconName} size={32} className="text-primary group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team for expert advice, product specifications, and competitive quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              Download Catalogues
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
