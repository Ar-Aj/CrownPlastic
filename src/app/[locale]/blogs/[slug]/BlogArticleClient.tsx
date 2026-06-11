'use client';

import Link from '@/components/common/LocaleLink';
import { AnimateOnScroll, PageHeader } from '@/components/common';
import { blogArticles } from '@/content/blogs';
import { useT, type TranslationPath } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue, localizedArray } from '@/lib/i18n-utils';
import { getRelatedSolutions } from '@/lib/linkingEngine';

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
// Client Page Component
// ─────────────────────────────────────────────────────────────
export default function BlogArticleClient({ article }: { article: (typeof blogArticles)[0] }) {
  const t = useT();
  const { language } = useLanguage();

  const title = localizedValue(language, article.title, article.titleAr, article.titleFr);
  const excerpt = localizedValue(language, article.shortExcerpt, article.shortExcerptAr, article.shortExcerptFr);
  const aeoQuestion = localizedValue(language, article.aeoQuestion, article.aeoQuestionAr, article.aeoQuestionFr);
  const localizedTag = t(`blogs.tags.${article.tag}` as TranslationPath) || article.tag;
  const tagColorClass = tagColors[article.tag] || 'bg-gray-100 text-gray-800';

  // Get related articles (exclude current)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.tag === article.tag)
    .slice(0, 3);

  // Get algorithmically matched zipper page solutions
  const relatedSolutions = getRelatedSolutions(article);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={title}
        subtitle={excerpt}
        breadcrumbs={[
          { label: t('blogs.breadcrumb'), href: '/blogs' },
          { label: title },
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
                  {localizedTag}
                </span>
                <span className="text-gray-500">{article.publishedDate}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{article.estimatedReadTime}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{t('blogs.forPersona')} {article.targetPersona}s</span>
              </div>
            </AnimateOnScroll>

            {/* AEO Core Question Box */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-10">
                <p className="text-sm font-medium text-primary mb-2">{t('blogs.articleAnswers')}</p>
                <p className="text-lg font-semibold text-gray-900">{aeoQuestion}</p>
              </div>
            </AnimateOnScroll>

            {/* Article Sections */}
            {article.sections.map((section, index) => {
              const heading = localizedValue(language, section.heading, section.headingAr, section.headingFr);
              const content = localizedArray(language, section.content, section.contentAr, section.contentFr);

              return (
                <AnimateOnScroll key={index} animation="fade-up" delay={150 + index * 50}>
                  <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {heading}
                    </h2>
                    <div className="space-y-3">
                      {content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </AnimateOnScroll>
              );
            })}

            {/* Keywords / Tags */}
            <AnimateOnScroll animation="fade-up">
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-3">{t('blogs.relatedTopics')}</p>
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
                    {t('blogs.exploreRelated')}
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

            {/* Related Solutions CTA (Algorithmic Link Equity) */}
            {relatedSolutions.length > 0 && (
              <AnimateOnScroll animation="fade-up">
                <div className="mt-10 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('blogs.regionalSolutions')}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    {t('blogs.regionalSolutionsSubtitle')}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {relatedSolutions.map((sol) => (
                      <Link
                        key={sol.href}
                        href={sol.href}
                        className="group flex items-center gap-3 bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all shadow-sm"
                      >
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <span className="line-clamp-2">{sol.label}</span>
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
              {t('blogs.relatedArticles')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((related) => {
                const relatedTitle = localizedValue(language, related.title, related.titleAr, related.titleFr);
                const relatedExcerpt = localizedValue(language, related.shortExcerpt, related.shortExcerptAr, related.shortExcerptFr);

                return (
                  <Link
                    key={related.slug}
                    href={`/blogs/${related.slug}`}
                    className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${tagColors[related.tag] || 'bg-gray-100 text-gray-800'}`}>
                      {t(`blogs.tags.${related.tag}` as TranslationPath) || related.tag}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedTitle}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedExcerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('blogs.detailCtaTitle')}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {t('blogs.detailCtaSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('blogs.detailCtaContact')}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              {t('blogs.detailCtaBrowse')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
