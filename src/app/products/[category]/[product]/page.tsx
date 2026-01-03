'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader, AnimateOnScroll, PdfViewer } from '@/components/common';
import { getCategoryBySlug, getSubProductBySlugs } from '@/config/products';
import { getDocsByProduct } from '@/config/docs';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';

interface ProductPageProps {
  params: { category: string; product: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = params;
  const { language } = useLanguage();
  const t = useT();
  const category_data = getCategoryBySlug(category);
  const product = getSubProductBySlugs(category, productSlug);
  
  if (!category_data || !product) {
    notFound();
  }

  // Get technical documents for this specific product
  const productDocuments = getDocsByProduct(category, productSlug);

  const catName = language === 'ar' ? (category_data.nameAr || category_data.name) : category_data.name;
  const prodName = language === 'ar' ? (product.nameAr || product.name) : product.name;
  const prodDesc = language === 'ar' ? (product.shortDescriptionAr || product.shortDescription) : product.shortDescription;
  const prodFeatures = language === 'ar' ? (product.featuresAr || product.features || []) : (product.features || []);

  return (
    <>
      <PageHeader
        title={prodName}
        subtitle={prodDesc}
        breadcrumbs={[
          { label: t('common.breadcrumb_products'), href: '/products' },
          { label: catName, href: `/products/${category_data.slug}` },
          { label: prodName },
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
                    alt={`${prodName} - ${catName} from Crown Plastic Pipes`}
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
                  <span className="text-sm font-medium text-primary">{catName}</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {prodName}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {prodDesc}
              </p>

              {/* Standards */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('products_extended.standards_certifications')}</h3>
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
              {prodFeatures && prodFeatures.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('products_extended.key_features')}</h3>
                  <ul className="space-y-2">
                    {prodFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
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
                  {t('products_extended.request_quote')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('products_extended.download_specs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('products_extended.tech_specifications')}</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('products_extended.table_property')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('products_extended.table_value')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-600">{t('products_extended.table_material')}</td>
                  <td className="px-6 py-4 text-gray-900">{t('products_extended.table_material_value')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">{t('products_extended.table_standards')}</td>
                  <td className="px-6 py-4 text-gray-900">{product.standards.join(', ')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">{t('products_extended.table_color')}</td>
                  <td className="px-6 py-4 text-gray-900">{t('products_extended.table_color_value')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">{t('products_extended.table_size_range')}</td>
                  <td className="px-6 py-4 text-gray-900">{t('products_extended.contact_for_specs')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">{t('products_extended.table_pressure_rating')}</td>
                  <td className="px-6 py-4 text-gray-900">{t('products_extended.contact_for_specs')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Technical Documents Section */}
      {productDocuments.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('products_extended.tech_documents')}
                </h2>
                <p className="text-gray-600">
                  {t('products_extended.tech_docs_for')} {prodName}
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {productDocuments.map((doc, index) => (
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
      )}

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('products_extended.other_products_in')} {catName}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {category_data.subProducts
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => {
                const relProdName = language === 'ar' ? (p.nameAr || p.name) : p.name;
                const relProdDesc = language === 'ar' ? (p.shortDescriptionAr || p.shortDescription) : p.shortDescription;
                return (
                  <Link
                    key={p.slug}
                    href={`/products/${category_data.slug}/${p.slug}`}
                    className="block p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{relProdName}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relProdDesc}</p>
                    <span className="text-primary font-medium text-sm">{t('products_extended.view_details')} →</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
