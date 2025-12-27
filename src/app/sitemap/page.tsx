import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/common';
import { allRoutes } from '@/config/routes';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of the Crown Plastic Pipes website.',
};

export default function SitemapPage() {
  // Group routes by category
  const mainPages = allRoutes.filter((r) => !r.path.startsWith('/products'));
  const productPages = allRoutes.filter((r) => r.path.startsWith('/products'));

  return (
    <>
      <PageHeader
        title="Sitemap"
        subtitle="Complete overview of all pages on our website."
        breadcrumbs={[{ label: 'Sitemap' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-medium">{route.label}</span>
                    </Link>
                    <p className="text-sm text-gray-500 ml-6">{route.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Pages</h2>
              <ul className="space-y-3">
                {productPages.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className={route.path.split('/').length > 3 ? 'text-sm' : 'font-medium'}>
                        {route.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
