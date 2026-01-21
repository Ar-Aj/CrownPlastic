'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import CrownButton from '@/components/ui/crown/CrownButton';
import Icon from '@/components/ui/Icon';

// ═══════════════════════════════════════════════════════════════════════════════
// COMPANY PROFILE STRIP - Closing Section with CTAs
// Features: Summary paragraph, dual CTAs, clean design
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function CompanyProfileStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-4 border border-white/20">
              Company Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crown Plastic Pipes Factory L.L.C.
            </h2>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              Established in 1995 in Sharjah, UAE, Crown Plastic Pipes Factory L.L.C. has grown into a leading
              manufacturer of high-quality plastic piping systems for the GCC region. With over 5,000 product
              variants across UPVC, PPR, and HDPE categories, we serve diverse sectors including irrigation,
              construction, plumbing, and infrastructure development.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our ISO-certified manufacturing facility, equipped with European Battenfeld extrusion technology
              and in-house testing laboratories, ensures every product meets international standards
              (BS EN, DIN, ISO, ASTM, SASO) and is specifically engineered for Gulf climate conditions.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            <HighlightStat value="30+" label="Years Experience" />
            <HighlightStat value="5,000+" label="Product Variants" />
            <HighlightStat value="10,000+" label="Customers" />
            <HighlightStat value="6+" label="GCC Markets" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <CrownButton
              href="/resources"
              variant="primary"
              size="lg"
              className="group"
            >
              <Icon name="download" size={20} />
              <span>Download Technical Catalogue</span>
            </CrownButton>
            <CrownButton
              href="/contact-us"
              variant="secondary"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="phone" size={20} />
              <span>Contact Technical Team</span>
            </CrownButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Icon name="location" size={16} className="text-primary" />
                <span>Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" size={16} className="text-primary" />
                <a href="tel:+97165314488" className="hover:text-white transition-colors">
                  +971 6 531 4488
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="email" size={16} className="text-primary" />
                <a href="mailto:info@crownpipes.com" className="hover:text-white transition-colors">
                  info@crownpipes.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HIGHLIGHT STAT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface HighlightStatProps {
  value: string;
  label: string;
}

function HighlightStat({ value, label }: HighlightStatProps) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
      <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">{value}</span>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}
