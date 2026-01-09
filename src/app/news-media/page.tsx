import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/common';
import { 
  MediaVideosSection, 
  MediaBlogsSection, 
  MediaContactSection,
  type VideoItem,
  type BlogPost
} from '@/components/media';
import { blogArticles } from '@/content/blogs';

export const metadata: Metadata = {
  title: 'Media & Blogs | UPVC, PPR, HDPE Piping Insights | Crown Plastic Pipes',
  description: 'Explore videos and expert insights on UPVC, PPR, and HDPE piping systems for Gulf construction and infrastructure projects. Technical guides from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipes videos',
    'piping solutions blog UAE',
    'plastic pipe guides GCC',
    'Crown Plastic media',
  ],
};

// ─────────────────────────────────────────────────────────────
// Centralized Page Copy (EN) - Easy to migrate to i18n later
// ─────────────────────────────────────────────────────────────
const MEDIA_BLOGS_COPY_EN = {
  // Page Header
  pageTitle: 'Media & Blogs',
  pageSubtitle: 'Explore videos and expert insights on UPVC, PPR, and HDPE piping systems for Gulf projects.',
  breadcrumb: 'Media & Blogs',

  // Videos Section
  videosTitle: 'Featured Videos',
  videosSubtitle: 'See Crown Plastic Pipes in action — from factory tours to expert product showcases.',

  // Blogs Section
  blogsTitle: 'Expert Insights & Guides',
  blogsSubtitle: 'Technical articles, compliance guides, and project insights from our engineering team.',
  viewAllArticles: 'View All Articles',

  // Media Contact
  mediaContactTitle: 'Media Contact',
  mediaContactSubtitle: 'For press inquiries, interviews, and media requests:',
  mediaContactEmail: 'media@crownplasticuae.com',
};

// ─────────────────────────────────────────────────────────────
// Videos Data (Enhanced with SEO metadata)
// ─────────────────────────────────────────────────────────────
const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'video-choose-us',
    title: '5 Reasons Why You Should Choose Crown Plastic Pipes',
    description: 'Built on precision, proven by quality, and trusted for over 30 years — Crown Plastic delivers advanced UPVC, PPR, and HDPE piping solutions designed for generations of Gulf infrastructure projects.',
    thumbnailSrc: '', // Will be replaced with actual thumbnail
    videoSrc: '', // Will be replaced with actual MP4/stream URL
    orientation: '9:16',
  },
  {
    id: 'video-factory-story',
    title: 'Inside Crown Plastic: Our Sharjah Factory Story',
    description: 'A behind-the-scenes look at how Crown Plastic manufactures GSO and SASO compliant UPVC, PPR, and HDPE piping systems in our Sharjah facility for demanding GCC construction projects.',
    thumbnailSrc: '', // Will be replaced with actual thumbnail
    videoSrc: '', // Will be replaced with actual MP4/stream URL
    orientation: '9:16',
  },
];

// ─────────────────────────────────────────────────────────────
// Blog Posts Data - Mapped from blogs.ts to BlogPost interface
// ─────────────────────────────────────────────────────────────
const BLOG_POSTS_DATA: BlogPost[] = blogArticles.slice(0, 6).map((article) => ({
  id: article.slug,
  title: article.title,
  shortExcerpt: article.shortExcerpt,
  estimatedReadTime: article.estimatedReadTime,
  tag: article.tag,
  slug: `/blogs/${article.slug}`,
  publishedDate: article.publishedDate,
}));

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function MediaBlogsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={MEDIA_BLOGS_COPY_EN.pageTitle}
        subtitle={MEDIA_BLOGS_COPY_EN.pageSubtitle}
        breadcrumbs={[{ label: MEDIA_BLOGS_COPY_EN.breadcrumb }]}
      />

      {/* Videos Section */}
      <MediaVideosSection
        title={MEDIA_BLOGS_COPY_EN.videosTitle}
        subtitle={MEDIA_BLOGS_COPY_EN.videosSubtitle}
        videos={VIDEOS_DATA}
      />

      {/* Blogs Section */}
      <MediaBlogsSection
        title={MEDIA_BLOGS_COPY_EN.blogsTitle}
        subtitle={MEDIA_BLOGS_COPY_EN.blogsSubtitle}
        posts={BLOG_POSTS_DATA}
        viewAllLink="/blogs"
        viewAllLabel={MEDIA_BLOGS_COPY_EN.viewAllArticles}
      />

      {/* Media Contact Section */}
      <MediaContactSection
        title={MEDIA_BLOGS_COPY_EN.mediaContactTitle}
        subtitle={MEDIA_BLOGS_COPY_EN.mediaContactSubtitle}
        email={MEDIA_BLOGS_COPY_EN.mediaContactEmail}
      />
    </>
  );
}
