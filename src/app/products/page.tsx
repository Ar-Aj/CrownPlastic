import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, CardGrid } from '@/components/common';
import { productCategories } from '@/config/products';

export const metadata: Metadata = {
  title: 'UPVC PPR HDPE Pipes UAE | Crown Plastic Pipes Sharjah',
  description: '5,000+ UPVC pressure pipes, PPR hot/cold water, HDPE irrigation, PVC conduits. ISO 9001:2015 certified. BS EN DIN ASTM standards.',
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
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      {/* Stats Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">5,000+</p>
              <p className="text-white/80 text-sm mt-1">Product Variants</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">UPVC PPRC HDPE</p>
              <p className="text-white/80 text-sm mt-1">Pipes</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">GCC Standards</p>
              <p className="text-white/80 text-sm mt-1">Compliant</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-accent">DIN 8061/62</p>
              <p className="text-white/80 text-sm mt-1">BS EN 1452</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">20mm - 400mm</p>
              <p className="text-white/80 text-sm mt-1">Diameters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a category to explore our comprehensive range of pipes and fittings.
            </p>
          </div>
          <CardGrid items={productCards} columns={3} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'ISO 9001:2015 Certified', desc: 'Quality management system certified' },
              { icon: '🏗️', title: '50+ Years Service Life', desc: 'Long-lasting durability' },
              { icon: '🌿', title: '100% Virgin Materials', desc: 'Premium quality raw materials' },
              { icon: '🔧', title: 'Gulf Climate Tested', desc: 'Proven performance in extreme conditions' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
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
