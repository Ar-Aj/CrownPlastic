import { Metadata } from 'next';
import { PageHeader, CardGrid } from '@/components/common';
import { productCategories } from '@/config/products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our complete range of UPVC, PPR, HDPE pipes and fittings for all applications.',
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
        subtitle="Complete range of high-quality plastic piping solutions for construction, infrastructure, and industrial applications."
        breadcrumbs={[{ label: 'Products' }]}
      />

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
              { icon: '✓', title: 'Certified Quality', desc: 'ISO, GSO & international standards' },
              { icon: '🏗️', title: 'Durable', desc: '50+ years service life' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Recyclable materials' },
              { icon: '🔧', title: 'Easy Installation', desc: 'Simple jointing systems' },
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
    </>
  );
}
