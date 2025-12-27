import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Download catalogues, technical documents, and guides for Crown Plastic Pipes products.',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'resources';

export default function ResourcesPage() {
  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Resources"
        subtitle="Our resource library is coming soon. Product catalogues and technical documents will be available for download."
      />
    );
  }

  const resources = [
    {
      category: 'Product Catalogues',
      icon: '📚',
      items: [
        { name: 'Complete Product Catalogue 2024', size: 'PDF, 15 MB' },
        { name: 'UPVC Pressure Systems', size: 'PDF, 4 MB' },
        { name: 'UPVC Drainage Systems', size: 'PDF, 3.5 MB' },
        { name: 'PPR Plumbing Systems', size: 'PDF, 3 MB' },
        { name: 'HDPE Pipe Systems', size: 'PDF, 4 MB' },
        { name: 'Electrical Conduit Systems', size: 'PDF, 2.5 MB' },
      ],
    },
    {
      category: 'Technical Documents',
      icon: '📋',
      items: [
        { name: 'Installation Guidelines', size: 'PDF, 2 MB' },
        { name: 'Technical Specifications', size: 'PDF, 3 MB' },
        { name: 'Pressure Rating Charts', size: 'PDF, 1 MB' },
        { name: 'Chemical Resistance Guide', size: 'PDF, 1.5 MB' },
        { name: 'Storage & Handling Guide', size: 'PDF, 1 MB' },
      ],
    },
    {
      category: 'Certifications',
      icon: '🏅',
      items: [
        { name: 'ISO 9001:2015 Certificate', size: 'PDF, 500 KB' },
        { name: 'ISO 14001:2015 Certificate', size: 'PDF, 500 KB' },
        { name: 'GSO Conformity Certificate', size: 'PDF, 500 KB' },
        { name: 'Test Reports & Approvals', size: 'PDF, 2 MB' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Resources"
        subtitle="Download product catalogues, technical documents, and certification information."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <span className="text-5xl mb-4 block">{section.icon}</span>
                <h2 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                      >
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <p className="text-gray-900 font-medium group-hover:text-primary transition-colors text-sm">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">{item.size}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Materials */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Physical Samples or Printed Materials?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Contact our sales team to request product samples or printed catalogues for your project.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Materials
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
