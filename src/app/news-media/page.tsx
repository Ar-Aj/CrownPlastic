import { Metadata } from 'next';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'News & Media',
  description: 'Latest news, press releases, and media coverage of Crown Plastic Pipes.',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'news-media';

export default function NewsMediaPage() {
  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="News & Media"
        subtitle="Our news and media section is coming soon. Check back for latest updates and press releases."
      />
    );
  }

  const newsItems = [
    {
      date: 'December 2024',
      title: 'Crown Plastic Pipes Expands Export Operations',
      excerpt: 'We are pleased to announce the expansion of our export operations to additional markets in Africa and Asia.',
      category: 'Press Release',
    },
    {
      date: 'November 2024',
      title: 'New PPR Product Line Launch',
      excerpt: 'Introducing our enhanced PPR piping system with improved heat resistance and longer service life.',
      category: 'Product News',
    },
    {
      date: 'October 2024',
      title: 'ISO 14001 Recertification Achieved',
      excerpt: 'Crown Plastic Pipes successfully recertified for ISO 14001:2015 Environmental Management System.',
      category: 'Corporate',
    },
    {
      date: 'September 2024',
      title: 'Participation in Big 5 Exhibition',
      excerpt: 'Visit us at The Big 5 Dubai - the largest construction event in the Middle East.',
      category: 'Events',
    },
  ];

  return (
    <>
      <PageHeader
        title="News & Media"
        subtitle="Stay updated with the latest news, press releases, and events from Crown Plastic Pipes."
        breadcrumbs={[{ label: 'News & Media' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, i) => (
              <article key={i} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
          <p className="text-gray-600 mb-4">For press inquiries and media requests:</p>
          <a href="mailto:media@crownplasticpipes.ae" className="text-primary font-semibold hover:underline">
            media@crownplasticpipes.ae
          </a>
        </div>
      </section>
    </>
  );
}
