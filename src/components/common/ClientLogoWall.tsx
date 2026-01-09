'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CLIENT LOGO WALL COMPONENT
// Premium trust signal display with animated entrance and hover effects
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';
import { ClientLogo } from '@/config/clients';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// LOGO CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface LogoCardProps {
  logo: ClientLogo;
  variant: 'grid' | 'scroll';
}

function LogoCard({ logo, variant }: LogoCardProps) {
  const cardContent = (
    <motion.div
      variants={variant === 'grid' ? itemVariants : undefined}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer h-24 flex items-center justify-center"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-transparent to-amber-500/0 group-hover:from-blue-500/5 group-hover:to-amber-500/5 transition-all duration-500" />
      
      {/* Logo placeholder - grayscale to color on hover */}
      <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        {/* Check if image exists, otherwise show placeholder text */}
        <div className="relative w-32 h-12">
          <Image
            src={logo.image}
            alt={`${logo.name} logo`}
            fill
            className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
            sizes="128px"
            onError={(e) => {
              // Hide image on error, show text fallback
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        {/* Fallback text (shown when image fails) */}
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors opacity-0 [.object-none+&]:opacity-100">
          {logo.name}
        </span>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-800 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-white/10">
        {logo.name}
        {logo.category && (
          <span className="text-gray-400 ml-1">• {logo.category}</span>
        )}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-white/10" />
      </div>
    </motion.div>
  );

  if (logo.url && logo.url !== '#') {
    return (
      <Link href={logo.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

// ═══════════════════════════════════════════════════════════════════════════════
// GRID VARIANT
// ═══════════════════════════════════════════════════════════════════════════════

interface GridVariantProps {
  logos: ClientLogo[];
  title?: string;
  subtitle?: string;
}

function GridVariant({ logos, title, subtitle }: GridVariantProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-50" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {logos.map((logo) => (
            <LogoCard key={logo.name} logo={logo} variant="grid" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL (MARQUEE) VARIANT
// ═══════════════════════════════════════════════════════════════════════════════

interface ScrollVariantProps {
  logos: ClientLogo[];
  speed?: number;
  direction?: 'left' | 'right';
}

function ScrollVariant({ logos, speed = 30, direction = 'left' }: ScrollVariantProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === 'left' ? [0, -50 * logos.length] : [-50 * logos.length, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-40"
          >
            <LogoCard logo={logo} variant="scroll" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPACT VARIANT (For home page - lighter weight)
// ═══════════════════════════════════════════════════════════════════════════════

interface CompactVariantProps {
  logos: ClientLogo[];
  title?: string;
}

function CompactVariant({ logos, title }: CompactVariantProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8"
          >
            {title}
          </motion.p>
        )}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {logos.slice(0, 8).map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-28 h-10 md:w-36 md:h-12">
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface ClientLogoWallProps {
  logos: ClientLogo[];
  variant?: 'grid' | 'scroll' | 'compact';
  title?: string;
  subtitle?: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export default function ClientLogoWall({
  logos,
  variant = 'grid',
  title,
  subtitle,
  speed = 30,
  direction = 'left',
}: ClientLogoWallProps) {
  switch (variant) {
    case 'scroll':
      return <ScrollVariant logos={logos} speed={speed} direction={direction} />;
    case 'compact':
      return <CompactVariant logos={logos} title={title} />;
    case 'grid':
    default:
      return <GridVariant logos={logos} title={title} subtitle={subtitle} />;
  }
}

export { GridVariant, ScrollVariant, CompactVariant };
