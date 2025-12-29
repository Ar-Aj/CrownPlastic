import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Downloads | Crown Plastic Pipes Catalogues | UPVC PPR HDPE Specs UAE',
  description: 'Free catalogues, technical submittals, installation guides. 5,000+ UPVC/PPR/HDPE products. ISO 9001:2015 certified specifications.',
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
      icon: '📦',
      items: [
        { name: 'Crown Plastic Master Catalogue', desc: '5,000+ UPVC, PPR, HDPE products', size: 'PDF, 18 MB' },
        { name: 'UPVC Pressure Pipes Catalogue', desc: '20-400mm diameter, PN 6-16 bar', size: 'PDF, 5 MB' },
        { name: 'PPR Hot/Cold Water Catalogue', desc: 'PN10/16/20 systems, SDR 6-11', size: 'PDF, 4 MB' },
        { name: 'HDPE Irrigation Catalogue', desc: 'PE63/80/100 pipes & fittings', size: 'PDF, 4.5 MB' },
      ],
    },
    {
      category: 'Technical Submittals',
      icon: '📊',
      items: [
        { name: 'UPVC Pressure Pipes Tech Specs', desc: 'BS EN 1452, DIN 8061/62 compliant', size: 'PDF, 3 MB' },
        { name: 'PPR Pipes Dimensions Table', desc: 'DIN 8077/78, SDR 6/7.4/11 specs', size: 'PDF, 2 MB' },
        { name: 'HDPE PE100 Technical Specs', desc: 'ISO 4427 irrigation/water distribution', size: 'PDF, 2.5 MB' },
        { name: 'PVC Conduit Crush Ratings', desc: '1250N/750N/320N load specifications', size: 'PDF, 1.5 MB' },
      ],
    },
    {
      category: 'Installation Guides',
      icon: '🔧',
      items: [
        { name: 'UPVC Solvent Cement Jointing', desc: 'BS 4346, ASTM D2466/D2467 methods', size: 'PDF, 3 MB' },
        { name: 'PPR Fusion Welding Guide', desc: 'Heat fusion jointing procedures', size: 'PDF, 2.5 MB' },
        { name: 'HDPE Electrofusion Instructions', desc: 'ISO 4427 fusion welding standards', size: 'PDF, 2 MB' },
        { name: 'Drainage Ring-Seal Installation', desc: 'BS EN 1401, BS 4660 guidelines', size: 'PDF, 2 MB' },
      ],
    },
    {
      category: 'Certifications & Approvals',
      icon: '🏆',
      items: [
        { name: 'ISO 9001:2015 Certificate', desc: 'Quality Management System - QAOC', size: 'PDF, 600 KB' },
        { name: 'ISO 14001:2015 Environmental', desc: 'Environmental Management System', size: 'PDF, 600 KB' },
        { name: 'OHSAS 18001:2007 Safety', desc: 'Occupational Health & Safety', size: 'PDF, 600 KB' },
        { name: 'GSO/SASO/NSF Approvals', desc: 'GCC standards compliance certificates', size: 'PDF, 2 MB' },
      ],
    },
    {
      category: 'Chemical Resistance Charts',
      icon: '🧪',
      items: [
        { name: 'PVC/UPVC Chemical Compatibility', desc: 'Resistance to acids, alkalis, solvents', size: 'PDF, 1.5 MB' },
        { name: 'PPR Temperature/Pressure Table', desc: '20°C-95°C operating conditions', size: 'PDF, 1 MB' },
        { name: 'HDPE Chemical Resistance Chart', desc: 'PE100/PE80 chemical compatibility', size: 'PDF, 1.2 MB' },
      ],
    },
    {
      category: 'CAD Drawings & BIM',
      icon: '📐',
      items: [
        { name: 'UPVC Fittings Library', desc: 'AutoCAD DWG format, all fittings', size: 'DWG, 8 MB' },
        { name: 'Drainage System Components', desc: 'Above/underground drainage CAD', size: 'DWG, 6 MB' },
        { name: 'Duct Accessories Pack', desc: 'Telecom duct fittings library', size: 'DWG, 4 MB' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Downloads & Resources"
        subtitle="Technical catalogues, specifications, and installation guides for Crown Plastic Pipes products."
        breadcrumbs={[{ label: 'Downloads & Resources' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium group-hover:text-primary transition-colors text-sm">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.size}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Technical Support or Custom Specifications?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Our technical team is ready to assist with project-specific requirements, custom quotes, and product selections for your infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
