import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs } from '@/content/blogs';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import BlogArticleClient from './BlogArticleClient';

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
// Page Component (Server wrapper)
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

  const pageUrl = `${baseUrl}/blogs/${article.slug}`;

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

      {/* Client Component with localization */}
      <BlogArticleClient article={article} />
    </>
  );
}
