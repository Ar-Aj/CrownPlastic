'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════════
// DUAL IMAGE PRESENTATION
// ═══════════════════════════════════════════════════════════════════════════════

function CardChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-3 rounded-full text-lg lg:text-xl font-semibold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-slate-800 border-2 border-slate-200/80 shadow-xl whitespace-nowrap">
      {children}
    </div>
  );
}

interface DualImagePresentationProps {
  renderImage: string;
  diagramImage: string;
  title: string;
}

const SPRING = { type: 'spring' as const, stiffness: 55, damping: 17, mass: 1 };

export function DualImagePresentation({ renderImage, diagramImage, title }: DualImagePresentationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden aspect-auto lg:aspect-video max-h-[70vh] lg:max-h-[800px] flex flex-col justify-center items-center py-16 lg:py-32 my-12"
      aria-label={`${title} — Visual Presentation`}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        src="/videos/fabrication_ripple.mp4" 
      />

      {/* ── HTML Content: overlaid above video ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">

        {/* LEFT — Technical Diagram (slides from left) */}
        <motion.div
          className="relative z-10 w-full max-w-2xl lg:w-[45%] bg-white/95 border border-white shadow-2xl rounded-xl overflow-hidden group"
          style={{ aspectRatio: '4 / 3' }}
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {diagramImage ? (
            <Image
              src={diagramImage}
              alt={`${title} — Technical Schematic`}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-lg lg:text-xl font-semibold">
              Technical Diagram — Image Pending
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <CardChip>Technical Diagram</CardChip>
        </motion.div>

        {/* RIGHT — 3D Render (slides from right) */}
        <motion.div
          className="relative z-10 w-full max-w-2xl lg:w-[45%] bg-white/95 border border-white shadow-2xl rounded-xl overflow-hidden group"
          style={{ aspectRatio: '4 / 3' }}
          initial={{ x: 80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {renderImage ? (
            <Image
              src={renderImage}
              alt={`${title} — 3D Product Render`}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-lg lg:text-xl font-semibold">
              3D Render — Image Pending
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <CardChip>3D Product View</CardChip>
        </motion.div>

      </div>
    </section>
  );
}

export default DualImagePresentation;
