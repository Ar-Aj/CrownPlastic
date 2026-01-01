import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { PageHeader } from '@/components/common';
import { productCategories, getCategoryBySlug, getSubProductBySlugs } from '@/config/products';

const baseUrl = 'https://crownplasticuae.com';

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];
  
  productCategories.forEach((cat) => {
    cat.subProducts.forEach((product) => {
      paths.push({
        category: cat.slug,
        product: product.slug,
      });
    });
  });
  
  return paths;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, product: productSlug } = await params;
  const category_data = getCategoryBySlug(category);
  const product = getSubProductBySlugs(category, productSlug);
  
  if (!category_data || !product) return { title: 'Product Not Found' };
  
  // Determine material type for keywords
  const materialType = category_data.name.includes('UPVC') ? 'UPVC' : 
                       category_data.name.includes('PPR') ? 'PPR' : 
                       category_data.name.includes('HDPE') ? 'HDPE' : 'PVC';
  
  return {
    title: `${product.name} Dubai UAE | ${category_data.name} | Crown Plastic Pipes`,
    description: `${product.shortDescription} Standards: ${product.standards.join(', ')}. ISO 9001:2015 certified. Dubai, Sharjah, UAE & GCC.`,
    keywords: [
      product.name.toLowerCase(),
      `${materialType} pipes Dubai`,
      `${materialType} pipes UAE`,
      ...product.standards.map(s => s.toLowerCase()),
      'Crown Plastic Pipes',
    ],
    alternates: {
      canonical: `/products/${category}/${productSlug}`,
    },
    openGraph: {
      title: `${product.name} | Crown Plastic Pipes UAE`,
      description: product.shortDescription,
      url: `${baseUrl}/products/${category}/${productSlug}`,
      images: category_data.image ? [category_data.image] : ['/images/og-products.jpg'],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params;
  const category_data = getCategoryBySlug(category);
  const product = getSubProductBySlugs(category, productSlug);
  
  if (!category_data || !product) {
    notFound();
  }

  // Determine material type
  const materialType = category_data.name.includes('UPVC') ? 'UPVC' : 
                       category_data.name.includes('PPR') ? 'PPR' : 
                       category_data.name.includes('HDPE') ? 'HDPE' : 'PVC';

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${baseUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category_data.name,
        item: `${baseUrl}/products/${category_data.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${baseUrl}/products/${category_data.slug}/${product.slug}`,
      },
    ],
  };

  // Product JSON-LD structured data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: category_data.image ? `${baseUrl}${category_data.image}` : `${baseUrl}/images/og-products.jpg`,
    brand: {
      "@type": "Brand",
      name: "Crown Plastic Pipes Factory L.L.C.",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Crown Plastic Pipes Factory L.L.C.",
      url: baseUrl,
    },
    material: materialType,
    category: category_data.name,
    additionalProperty: product.standards.map((standard) => ({
      "@type": "PropertyValue",
      name: "Standard",
      value: standard,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      seller: {
        "@type": "Organization",
        name: "Crown Plastic Pipes Factory L.L.C.",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Oman" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Bahrain" },
      ],
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageHeader
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: category_data.name, href: `/products/${category_data.slug}` },
          { label: product.name },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                {category_data.image ? (
                  <Image
                    src={category_data.image}
                    alt={`${product.name} - ${category_data.name} from Crown Plastic Pipes`}
                    width={800}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-9xl">{category_data.icon}</span>
                  </div>
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-primary">{category_data.name}</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.shortDescription}
              </p>

              {/* Standards */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Standards & Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((standard) => (
                    <span
                      key={standard}
                      className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Download Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Property</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-600">Material</td>
                  <td className="px-6 py-4 text-gray-900">UPVC / PPR / HDPE (as applicable)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Standards</td>
                  <td className="px-6 py-4 text-gray-900">{product.standards.join(', ')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Color</td>
                  <td className="px-6 py-4 text-gray-900">Grey / White / Black (as per type)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Size Range</td>
                  <td className="px-6 py-4 text-gray-900">Contact for specifications</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Pressure Rating</td>
                  <td className="px-6 py-4 text-gray-900">Contact for specifications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Products in {category_data.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {category_data.subProducts
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${category_data.slug}/${p.slug}`}
                  className="block p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{p.shortDescription}</p>
                  <span className="text-primary font-medium text-sm">View Details →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
