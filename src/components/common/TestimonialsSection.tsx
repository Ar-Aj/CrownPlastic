'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIAL CARD COMPONENT
// Premium testimonial display with glass morphism and animations
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/config/clients';
import { useLanguage } from '@/context/LanguageContext';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// STAR RATING COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SINGLE TESTIMONIAL CARD
// ═══════════════════════════════════════════════════════════════════════════════

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'glass' | 'dark';
}

export function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const { language } = useLanguage();
  
  const quote = language === 'ar' && testimonial.quoteAr ? testimonial.quoteAr : testimonial.quote;
  const author = language === 'ar' && testimonial.authorAr ? testimonial.authorAr : testimonial.author;
  const role = language === 'ar' && testimonial.roleAr ? testimonial.roleAr : testimonial.role;
  const company = language === 'ar' && testimonial.companyAr ? testimonial.companyAr : testimonial.company;

  const variantStyles = {
    default: 'bg-white border border-gray-100 shadow-sm hover:shadow-lg',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white',
    dark: 'bg-slate-800 border border-slate-700 text-white',
  };

  const textStyles = {
    default: { quote: 'text-gray-700', author: 'text-gray-900', role: 'text-gray-500' },
    glass: { quote: 'text-white/90', author: 'text-white', role: 'text-white/60' },
    dark: { quote: 'text-gray-300', author: 'text-white', role: 'text-gray-400' },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl p-6 ${variantStyles[variant]} transition-all duration-300 h-full flex flex-col`}
    >
      {/* Quote icon */}
      <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'}`}>
        <Quote className={`w-8 h-8 ${variant === 'default' ? 'text-primary/20' : 'text-white/20'}`} />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className={`flex-1 ${textStyles[variant].quote} leading-relaxed mb-6`}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100/20">
        {/* Avatar placeholder */}
        <div className={`w-12 h-12 rounded-full ${variant === 'default' ? 'bg-primary/10' : 'bg-white/10'} flex items-center justify-center`}>
          <span className={`text-lg font-bold ${variant === 'default' ? 'text-primary' : 'text-white'}`}>
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className={`font-semibold ${textStyles[variant].author}`}>
            {author}
          </p>
          <p className={`text-sm ${textStyles[variant].role}`}>
            {role}, {company}
          </p>
        </div>
      </div>

      {/* Project badge */}
      {testimonial.project && (
        <div className="mt-4">
          <span className={`inline-block text-xs px-3 py-1 rounded-full ${
            variant === 'default' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-white/10 text-white/80'
          }`}>
            Project: {testimonial.project}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS SECTION
// ═══════════════════════════════════════════════════════════════════════════════

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'glass' | 'dark';
  columns?: 1 | 2 | 3;
}

export default function TestimonialsSection({
  testimonials,
  title = 'What Our Clients Say',
  subtitle = 'Trusted by leading contractors and developers across the GCC',
  variant = 'default',
  columns = 3,
}: TestimonialsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const bgStyles = {
    default: 'bg-gray-50',
    glass: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
    dark: 'bg-slate-900',
  };

  const headerStyles = {
    default: { title: 'text-gray-900', subtitle: 'text-gray-600' },
    glass: { title: 'text-white', subtitle: 'text-blue-200/70' },
    dark: { title: 'text-white', subtitle: 'text-gray-400' },
  };

  const gridCols = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
  };

  return (
    <section ref={ref} className={`py-16 md:py-24 ${bgStyles[variant]}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headerStyles[variant].title}`}>
            {title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${headerStyles[variant].subtitle}`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid md:grid-cols-2 ${gridCols[columns]} gap-6`}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              variant={variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
