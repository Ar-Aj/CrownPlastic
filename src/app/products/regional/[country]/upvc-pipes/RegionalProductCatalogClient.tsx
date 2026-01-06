'use client';

// Regional Product Catalog Client Component - Phase 3 AEO Fix
// Single-currency pricing per region with proper schema markup

import { useLanguage } from '@/context/LanguageContext';
import { Icon } from '@/components/ui/Icon';
import Link from 'next/link';
import Script from 'next/script';
import { BreadcrumbSchema, BulkPricingSchema, standardBulkTiers, generateBulkPricingTiers } from '@/components/schemas';
import { companyInfo } from '@/config/schemas';
import type { RegionalProductCatalog, RegionalProductPrice } from '@/config/regional-products';

interface RegionalProductCatalogClientProps {
  catalog: RegionalProductCatalog;
  products: RegionalProductPrice[];
}

export default function RegionalProductCatalogClient({ catalog, products }: RegionalProductCatalogClientProps) {
  const { language } = useLanguage();

  const breadcrumbs = [
    { name: 'Home', nameAr: 'الرئيسية', url: '/' },
    { name: 'Products', nameAr: 'المنتجات', url: '/products' },
    { name: catalog.region, nameAr: catalog.titleAr, url: `/products/regional/${catalog.regionSlug}/upvc-pipes` },
  ];

  const baseUrl = 'https://crownplasticuae.com';
  const pageUrl = `${baseUrl}/products/regional/${catalog.regionSlug}/upvc-pipes`;

  return (
    <>
      {/* Schemas */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Regional LocalBusiness Schema */}
      <Script
        id={`localbusiness-regional-${catalog.regionSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${pageUrl}#localbusiness`,
            name: `Crown Plastic Pipes - ${catalog.region}`,
            url: pageUrl,
            telephone: catalog.telephone,
            email: companyInfo.email,
            priceRange: '$$ - $$$$',
            currenciesAccepted: catalog.currency,
            areaServed: {
              '@type': 'Country',
              name: catalog.region,
            },
            // NOTE: No aggregate rating - awaiting real customer reviews
          }),
        }}
      />
      
      {/* Bulk Pricing Schema for each product */}
      {products.slice(0, 3).map((product) => (
        <BulkPricingSchema
          key={product.sku}
          productName={product.productName}
          productUrl={`${pageUrl}#${product.sku}`}
          sku={product.sku}
          pricingTiers={generateBulkPricingTiers(product.basePrice, catalog.currency)}
          currency={catalog.currency}
          useStandardTiers={false}
        />
      ))}

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-200">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.url} className="flex items-center">
                    {index > 0 && <Icon name="chevronRight" className="w-4 h-4 mx-2" />}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-white font-medium">
                        {language === 'ar' ? crumb.nameAr : crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.url} className="hover:text-white transition-colors">
                        {language === 'ar' ? crumb.nameAr : crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? catalog.titleAr : catalog.title}
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              {language === 'ar' ? catalog.descriptionAr : catalog.description}
            </p>

            {/* Regional Info */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-blue-200 text-sm">Currency:</span>
                <span className="ml-2 font-bold">{catalog.currency}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-blue-200 text-sm">Delivery:</span>
                <span className="ml-2 font-bold">{catalog.deliveryTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Pricing Tiers Info */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'أسعار الجملة' : 'Bulk Pricing Tiers'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {standardBulkTiers.map((tier) => (
                <div key={tier.name} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900">{tier.name}</div>
                  <div className="text-sm text-gray-600">
                    {tier.maxQty ? `${tier.minQty}-${tier.maxQty} units` : `${tier.minQty}+ units`}
                  </div>
                  <div className={`mt-2 font-bold ${tier.discount === '0%' ? 'text-gray-700' : 'text-green-600'}`}>
                    {tier.discount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Catalog */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {language === 'ar' ? 'كتالوج الأسعار' : 'Price Catalog'} ({catalog.currency})
            </h2>

            {/* Price Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {language === 'ar' ? 'المنتج' : 'Product'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {language === 'ar' ? 'الكود' : 'SKU'}
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        {language === 'ar' ? 'السعر الأساسي' : 'Base Price'}
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        {language === 'ar' ? 'سعر الجملة (-10%)' : 'Bulk Price (-10%)'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {language === 'ar' ? 'الحد الأدنى' : 'Min. Order'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.map((product) => {
                      const bulkPrice = Math.round(product.basePrice * 0.90 * 100) / 100;
                      return (
                        <tr key={product.sku} className="hover:bg-gray-50 transition-colors" id={product.sku}>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">{product.productName}</div>
                          </td>
                          <td className="px-6 py-4 text-gray-600 font-mono text-sm">
                            {product.sku}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="font-bold text-gray-900">
                              {catalog.currencySymbol} {product.basePrice.toFixed(2)}
                            </span>
                            <span className="text-gray-500 text-sm">/{product.unit}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="font-bold text-green-600">
                              {catalog.currencySymbol} {bulkPrice.toFixed(2)}
                            </span>
                            <span className="text-gray-500 text-sm">/{product.unit}</span>
                          </td>
                          <td className="px-6 py-4 text-center text-gray-600">
                            {product.minOrder} {product.unit}s
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wholesale Notice */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="phone" className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">
                    {language === 'ar' ? 'طلبات 100+ وحدة' : 'Orders of 100+ Units'}
                  </h3>
                  <p className="text-blue-700 text-sm mt-1">
                    {language === 'ar' 
                      ? 'للحصول على أفضل أسعار الجملة للطلبات الكبيرة، يرجى التواصل مع فريق المبيعات.'
                      : 'For best wholesale pricing on large orders, please contact our sales team for a custom quote.'
                    }
                  </p>
                  <a 
                    href={`tel:${catalog.telephone}`}
                    className="inline-flex items-center gap-2 mt-2 text-blue-700 font-medium hover:text-blue-900"
                  >
                    {catalog.telephone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'الشهادات المعتمدة' : 'Certifications'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {catalog.certifications.map((cert) => (
                <span 
                  key={cert}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm text-gray-700 font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد للطلب؟' : 'Ready to Order?'}
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? `احصل على عرض سعر مخصص لمشروعك في ${catalog.region}. توصيل في ${catalog.deliveryTime}.`
                : `Get a custom quote for your ${catalog.region} project. Delivery in ${catalog.deliveryTime}.`
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/contact-us?region=${catalog.regionSlug}&product=upvc-pipes`}
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
              >
                {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
              </Link>
              <a
                href={`tel:${catalog.telephone}`}
                className="bg-orange-600 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
              >
                {catalog.telephone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
