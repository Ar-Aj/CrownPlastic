import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import { blogArticles, getArticleBySlug, getAllSlugs } from '@/content/blogs';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';

const baseUrl = 'https://crownplasticuae.com';

// ─────────────────────────────────────────────────────────────
// Static Params Generation
// ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────────────────────
// Metadata Generation
// ─────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Crown Plastic Pipes',
    };
  }

  const keywords = [article.primaryKeyword, ...article.secondaryKeywords];

  return {
    title: `${article.title} | Crown Plastic Pipes`,
    description: article.fullDescription || article.shortExcerpt,
    keywords,
    alternates: {
      canonical: `${baseUrl}/blogs/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.fullDescription || article.shortExcerpt,
      url: `${baseUrl}/blogs/${article.slug}`,
      siteName: 'Crown Plastic Pipes',
      locale: 'en_AE',
      type: 'article',
      publishedTime: article.publishedDate,
      authors: ['Crown Plastic Pipes Technical Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortExcerpt,
    },
  };
}

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
// Page Component
// ─────────────────────────────────────────────────────────────
export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const tagColorClass = tagColors[article.tag] || 'bg-gray-100 text-gray-800';
  const pageUrl = `${baseUrl}/blogs/${article.slug}`;

  // Get related articles (exclude current)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.tag === article.tag)
    .slice(0, 3);

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Blog', url: `${baseUrl}/blogs` },
          { name: article.title, url: pageUrl },
        ]}
      />
      <TechnicalGuideSchema
        title={article.title}
        description={article.fullDescription || article.shortExcerpt}
        url={pageUrl}
        datePublished={article.publishedDate}
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={[article.primaryKeyword, ...article.secondaryKeywords]}
        proficiencyLevel="Intermediate"
      />

      {/* Page Header */}
      <PageHeader
        title={article.title}
        subtitle={article.shortExcerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blogs' },
          { label: article.title },
        ]}
      />

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <AnimateOnScroll animation="fade-up">
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <span className={`px-4 py-1.5 text-sm font-medium rounded-full ${tagColorClass}`}>
                  {article.tag}
                </span>
                <span className="text-gray-500">{article.publishedDate}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{article.estimatedReadTime}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">For {article.targetPersona}s</span>
              </div>
            </AnimateOnScroll>

            {/* AEO Core Question Box */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-10">
                <p className="text-sm font-medium text-primary mb-2">This article answers:</p>
                <p className="text-lg font-semibold text-gray-900">{article.aeoQuestion}</p>
              </div>
            </AnimateOnScroll>

            {/* Article Sections */}
            {article.sections.map((section, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={150 + index * 50}>
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </AnimateOnScroll>
            ))}

            {/* Keywords / Tags */}
            <AnimateOnScroll animation="fade-up">
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-3">Related Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {article.secondaryKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Related Routes CTA */}
            {article.relatedRoutes && article.relatedRoutes.length > 0 && (
              <AnimateOnScroll animation="fade-up">
                <div className="mt-10 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Explore Related Products & Resources
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedRoutes.map((route) => (
                      <Link
                        key={route}
                        href={route}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
                      >
                        {route.includes('products') ? '🛠️' : '📄'} {route}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${tagColors[related.tag] || 'bg-gray-100 text-gray-800'}`}>
                    {related.tag}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {related.shortExcerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Selecting the Right Piping System?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Our engineering team has 30+ years of experience helping GCC projects succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
