'use client';

import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/common';
import { useT } from '@/i18n';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  shortExcerpt: string;
  estimatedReadTime: string;
  tag: string;
  slug: string;
  publishedDate?: string;
  thumbnailSrc?: string;
}

interface MediaBlogsSectionProps {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
  viewAllLink?: string;
  viewAllLabel?: string;
}

// Tag color mapping
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
function BlogCard({ post, readArticleLabel }: { post: BlogPost; readArticleLabel: string }) {
  const tagColorClass = tagColors[post.tag] || 'bg-gray-100 text-gray-800';

  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/10 hover:border-primary/30 group h-full flex flex-col">
      {/* Thumbnail Area - 16:9 placeholder */}
      <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
        {post.thumbnailSrc ? (
          <Image
            src={post.thumbnailSrc}
            alt={post.title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 will-change-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <Image
            src="/images/home/factory_home_hero.jpg"
            alt={post.title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 will-change-transform opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        
        {/* Tag Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full shadow-sm backdrop-blur-md ${tagColorClass}`}>
          {post.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3 tracking-wide uppercase">
          {post.publishedDate && (
            <>
              <span>{post.publishedDate}</span>
              <span>•</span>
            </>
          )}
          <span>{post.estimatedReadTime}</span>
        </div>
        
        <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
          {post.shortExcerpt}
        </p>
        
        <Link
          href={post.slug}
          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm mt-auto"
        >
          {readArticleLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Section Component
// ─────────────────────────────────────────────────────────────
export default function MediaBlogsSection({ 
  title, 
  subtitle, 
  posts,
  viewAllLink,
  viewAllLabel
}: MediaBlogsSectionProps) {
  const t = useT();

  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Blog Grid - 3 columns for desktop, 2 for tablet, 1 for mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.id} animation="fade-up" delay={index * 100}>
              <BlogCard 
                post={post} 
                readArticleLabel={t('media_blogs.readArticle') || 'Read Article'} 
              />
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Link */}
        {viewAllLink && viewAllLabel && (
          <div className="text-center mt-16">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-700 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all duration-300"
            >
              {viewAllLabel}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
