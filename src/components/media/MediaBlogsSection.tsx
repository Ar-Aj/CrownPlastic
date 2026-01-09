'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/common';

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
function BlogCard({ post }: { post: BlogPost }) {
  const tagColorClass = tagColors[post.tag] || 'bg-gray-100 text-gray-800';

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
      {/* Thumbnail Area */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
        {post.thumbnailSrc ? (
          <Image
            src={post.thumbnailSrc}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="text-center p-4">
            <svg className="w-12 h-12 mx-auto text-primary/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-xs text-gray-400">Article</span>
          </div>
        )}
        
        {/* Tag Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${tagColorClass}`}>
          {post.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          {post.publishedDate && (
            <>
              <span>{post.publishedDate}</span>
              <span>•</span>
            </>
          )}
          <span>{post.estimatedReadTime}</span>
        </div>
        
        <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {post.shortExcerpt}
        </p>
        
        <Link
          href={post.slug}
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
// Main Section Component
// ─────────────────────────────────────────────────────────────
export default function MediaBlogsSection({ 
  title, 
  subtitle, 
  posts,
  viewAllLink,
  viewAllLabel = 'View All Articles'
}: MediaBlogsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Blog Grid - 3 columns for desktop, 2 for tablet, 1 for mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.id} animation="fade-up" delay={index * 100}>
              <BlogCard post={post} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Link */}
        {viewAllLink && (
          <div className="text-center mt-12">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
