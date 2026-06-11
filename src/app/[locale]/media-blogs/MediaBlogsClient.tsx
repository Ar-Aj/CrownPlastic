'use client';

import { useT, type TranslationPath } from '@/i18n';
import {
  MediaVideosSection,
  MediaBlogsSection,
  MediaContactSection,
  type BlogPost
} from '@/components/media';
import { YOUTUBE_SHORTS } from '@/config/media';
import { blogArticles } from '@/content/blogs';
import { AnimateOnScroll } from '@/components/common';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';

function getBlogPostsData(language: string, t: (key: TranslationPath) => string): BlogPost[] {
  return blogArticles.slice(0, 6).map((article) => ({
    id: article.slug,
    title: localizedValue(language, article.title, article.titleAr, article.titleFr),
    shortExcerpt: localizedValue(language, article.shortExcerpt, article.shortExcerptAr, article.shortExcerptFr),
    estimatedReadTime: article.estimatedReadTime,
    tag: t(`blogs.tags.${article.tag}` as TranslationPath) || article.tag,
    slug: `/blogs/${article.slug}`,
    publishedDate: article.publishedDate,
    thumbnailSrc: article.coverImage || '',
  }));
}

export default function MediaBlogsClient() {
  const t = useT();
  const { language } = useLanguage();
  const blogPostsData = getBlogPostsData(language, t);

  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative pt-[150px] md:pt-[180px] min-h-[50vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/factory_home_hero.jpg"
            alt="Crown Plastic Factory"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Heavy Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-primary/40" />

        <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-20">
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {t('media_blogs.pageTitle')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {t('media_blogs.pageSubtitle')}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Videos Section — YouTube Shorts Grid */}
      <MediaVideosSection
        title={t('media_blogs.videosTitle')}
        subtitle={t('media_blogs.videosSubtitle')}
        shorts={YOUTUBE_SHORTS}
      />

      {/* Blogs Section */}
      <MediaBlogsSection
        title={t('media_blogs.blogsTitle')}
        subtitle={t('media_blogs.blogsSubtitle')}
        posts={blogPostsData}
        viewAllLink="/blogs"
        viewAllLabel={t('media_blogs.viewAllArticles')}
      />

      {/* Media Contact Section */}
      <MediaContactSection
        title={t('media_blogs.mediaContactTitle')}
        subtitle={t('media_blogs.mediaContactSubtitle')}
        email={t('media_blogs.mediaContactEmail')}
      />
    </>
  );
}
