import { Metadata } from 'next';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Investor Relations',
  description: 'Financial information, reports, and updates for investors of Crown Plastic Pipes.',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'investor-relations';

export default function InvestorRelationsPage() {
  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Investor Relations"
        subtitle="Our investor relations section is coming soon. Financial reports and updates will be available shortly."
      />
    );
  }

  return (
    <>
      <PageHeader
        title="Investor Relations"
        subtitle="Financial information, reports, and corporate governance updates."
        breadcrumbs={[{ label: 'Investor Relations' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Corporate Information
            </h2>
            <p className="text-lg text-gray-600">
              Crown Plastic Pipes Factory L.L.C. is committed to transparency and maintaining 
              strong relationships with our stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Reports',
                description: 'Annual reports, quarterly results, and financial statements.',
                icon: '📊',
                items: ['Annual Report 2024', 'Q3 2024 Results', 'Q2 2024 Results'],
              },
              {
                title: 'Corporate Governance',
                description: 'Board composition, policies, and governance framework.',
                icon: '⚖️',
                items: ['Board of Directors', 'Corporate Policies', 'Code of Conduct'],
              },
              {
                title: 'Presentations',
                description: 'Investor presentations and company updates.',
                icon: '📈',
                items: ['Investor Presentation', 'Company Overview', 'Growth Strategy'],
              },
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <span className="text-5xl mb-4 block">{section.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <a href="#" className="text-primary hover:underline text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Investor Contact</h2>
          <p className="text-gray-600 mb-4">For investor inquiries, please contact:</p>
          <a href="mailto:investors@crownplasticpipes.ae" className="text-primary font-semibold hover:underline">
            investors@crownplasticpipes.ae
          </a>
        </div>
      </section>
    </>
  );
}
