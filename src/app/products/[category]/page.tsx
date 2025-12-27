import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader, CardGrid } from '@/components/common';
import { productCategories, getCategoryBySlug } from '@/config/products';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: 'Category Not Found' };
  
  return {
    title: cat.name,
    description: cat.shortDescription,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  
  if (!cat) {
    notFound();
  }

  const productCards = cat.subProducts.map((product) => ({
    title: product.name,
    description: product.shortDescription,
    href: `/products/${cat.slug}/${product.slug}`,
    tags: product.standards,
  }));

  return (
    <>
      <PageHeader
        title={cat.name}
        subtitle={cat.shortDescription}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: cat.name },
        ]}
      />

      {/* Hero Product Image Section */}
      {cat.image && (
        <section className="relative bg-gray-900">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={cat.image}
              alt={`${cat.name} - Crown Plastic Pipes product range`}
              width={1400}
              height={700}
              className="w-full h-full object-cover opacity-80"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="container mx-auto px-4 pb-8 md:pb-12">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {cat.name}
                    </h2>
                    <p className="text-white/80 max-w-xl hidden md:block">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Products in {cat.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete range of products in this category.
            </p>
          </div>
          <CardGrid items={productCards} columns={3} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <span className="text-4xl mb-3 block">✓</span>
              <h3 className="font-bold text-gray-900 mb-2">Quality Certified</h3>
              <p className="text-sm text-gray-600">All products meet international standards</p>
            </div>
            <div className="text-center p-6">
              <span className="text-4xl mb-3 block">🏗️</span>
              <h3 className="font-bold text-gray-900 mb-2">Built to Last</h3>
              <p className="text-sm text-gray-600">50+ years of service life</p>
            </div>
            <div className="text-center p-6">
              <span className="text-4xl mb-3 block">🚚</span>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Nationwide delivery available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Technical Assistance?</h2>
          <p className="text-white/90 mb-6">Our team is ready to help with product selection and specifications.</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
