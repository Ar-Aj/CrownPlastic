import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, CardGrid, StatsStrip, AnimateOnScroll, PdfViewer } from '@/components/common';
import { productCategories } from '@/config/products';
import { topLevelDocs } from '@/config/docs';
import Icon, { IconName } from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'UPVC PPR HDPE Pipes & Fittings | Crown Plastic Pipes Dubai UAE',
  description: '5,000+ UPVC pressure pipes, PPR hot/cold water pipes, HDPE irrigation pipes, PVC conduits & drainage systems. ISO 9001:2015 certified. BS EN, DIN, ASTM standards. Dubai, Sharjah, UAE & GCC.',
  keywords: [
    'UPVC pressure pipes Dubai',
    'PPR pipes UAE',
    'HDPE irrigation pipes',
    'PVC conduit pipes',
    'drainage pipes Sharjah',
    'pipe fittings GCC',
    'water supply pipes',
    'BS EN 1452 pipes',
    'DIN 8061 pipes',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'UPVC PPR HDPE Pipes & Fittings | Crown Plastic Pipes UAE',
    description: '5,000+ UPVC, PPR, HDPE pipes & fittings. ISO certified manufacturer serving Dubai, UAE & GCC since 1995.',
    url: 'https://crownplasticuae.com/products',
    images: ['/images/og-products.jpg'],
  },
};

export default function ProductsPage() {
  const productCards = productCategories.map((cat) => ({
    title: cat.name,
    description: cat.shortDescription,
    href: `/products/${cat.slug}`,
    icon: cat.icon,
    image: cat.image,
    alt: `${cat.name} product shot`,
  }));

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Complete range of 5,000+ UPVC, PPR, HDPE pipes & fittings since 1995"
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Stats Strip */}
      <StatsStrip
        stats={[
          { value: '5,000+', label: 'Product Variants', iconName: 'package' },
          { value: 'UPVC PPRC HDPE', label: 'Pipes', iconName: 'water' },
          { value: 'GCC Standards', label: 'Compliant', iconName: 'certified' },
          { value: 'DIN 8061/62', label: 'BS EN 1452', iconName: 'document' },
          { value: '20mm - 400mm', label: 'Diameters', iconName: 'gauge' },
        ]}
        variant="primary"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select a category to explore our comprehensive range of pipes and fittings.
              </p>
            </div>
          </AnimateOnScroll>
          <CardGrid items={productCards} columns={3} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Products?
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { iconName: 'certified' as IconName, title: 'ISO 9001:2015 Certified', desc: 'Quality management system certified' },
              { iconName: 'building' as IconName, title: '50+ Years Service Life', desc: 'Long-lasting durability' },
              { iconName: 'leaf' as IconName, title: '100% Virgin Materials', desc: 'Premium quality raw materials' },
              { iconName: 'climate' as IconName, title: 'Gulf Climate Tested', desc: 'Proven performance in extreme conditions' },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm card-hover h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.iconName} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technical Documentation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive technical catalogues and specifications by product category
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topLevelDocs.map((doc, index) => (
              <AnimateOnScroll key={doc.src} animation="fade-up" delay={index * 80}>
                <PdfViewer
                  src={doc.src}
                  title={doc.title}
                  description={doc.description}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Detailed Product Specifications?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Download our complete catalogue with technical specifications, dimensions, and standards.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Download Full Catalogue
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
