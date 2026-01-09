import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import { blogArticles } from '@/content/blogs';

// ─────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Piping Solutions Blog | UPVC, PPR, HDPE Guides for UAE & GCC | Crown Plastic Pipes',
  description: 'Expert guides on UPVC, PPR, and HDPE piping systems for UAE and GCC construction projects. Technical articles, compliance guides, and installation best practices from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipes blog UAE',
    'piping solutions GCC',
    'plastic pipe guides Dubai',
    'PPR pipes articles',
    'HDPE irrigation guides',
    'GSO SASO compliance',
    'BS EN 1452 guide',
    'pipe installation best practices',
  ],
  alternates: {
    canonical: 'https://crownplasticuae.com/blogs',
  },
  openGraph: {
    title: 'Piping Solutions Blog | Crown Plastic Pipes',
    description: 'Expert guides on UPVC, PPR, and HDPE piping systems for UAE and GCC construction projects.',
    url: 'https://crownplasticuae.com/blogs',
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'website',
  },
};

// ─────────────────────────────────────────────────────────────
// Tag Colors
// ─────────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  'Technical Guide': 'bg-blue-100 text-blue-800',
  'Project Insight': 'bg-green-100 text-green-800',
  'Compliance': 'bg-amber-100 text-amber-800',
  'Product Comparison': 'bg-purple-100 text-purple-800',
  'Installation': 'bg-teal-100 text-teal-800',
  'Industry News': 'bg-gray-100 text-gray-800',
};

// ─────────────────────────────────────────────────────────────
// Blog Card Component
// ─────────────────────────────────────────────────────────────
function BlogCard({ article }: { article: typeof blogArticles[0] }) {
  const tagColorClass = tagColors[article.tag] || 'bg-gray-100 text-gray-800';

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
      {/* Thumbnail Area */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
        <div className="text-center p-4">
          <svg className="w-12 h-12 mx-auto text-primary/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="text-xs text-gray-400">Article</span>
        </div>
        
        {/* Tag Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${tagColorClass}`}>
          {article.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span>{article.publishedDate}</span>
          <span>•</span>
          <span>{article.estimatedReadTime}</span>
        </div>
        
        <h2 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {article.shortExcerpt}
        </p>
        
        <Link
          href={`/blogs/${article.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm mt-auto"
        >
          Read Article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Piping Solutions Blog"
        subtitle="Expert guides, technical articles, and best practices for UPVC, PPR, and HDPE piping systems in UAE and GCC construction projects."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <AnimateOnScroll key={article.slug} animation="fade-up" delay={index * 100}>
                <BlogCard article={article} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Technical Support for Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Our engineering team is ready to help with product selection, specifications, and technical queries.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
