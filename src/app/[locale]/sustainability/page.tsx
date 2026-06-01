'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - SUSTAINABILITY PAGE
// 100% design-system compliant, SEO-optimized, story-driven sustainability narrative
// Emerald accent theme with Crown blue anchor
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import { useT, TranslationPath } from '@/i18n';
import Link from '@/components/common/LocaleLink';
import NextImage from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Leaf,
  Shield,
  Recycle,
  Timer,
  Factory,
  Award,
  CheckCircle2,
  ArrowRight,
  FileText,
  Droplets,
  Thermometer,
  Scale,
  Users,
  ClipboardCheck,
} from 'lucide-react';

// Components
import { AnimatedStatsStrip, QuoteButton } from '@/components/common';
import {
  TiltCard,
  SectionHeader,
  MagneticButton,
} from '@/components/ui/premium';

// Design System
import {
  radialStagger,
  radialItem,
} from '@/lib/design-system';

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 1: SUSTAINABILITY HERO
// Split-screen, light background with subtle emerald orb
// ═══════════════════════════════════════════════════════════════════════════════

function SustainabilityHero() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  const heroHighlights = [
    { icon: Timer, text: t('sustainability.hero.highlights.iso' as TranslationPath) },
    { icon: Shield, text: t('sustainability.hero.highlights.virgin' as TranslationPath) },
    { icon: Award, text: t('sustainability.hero.highlights.gcc' as TranslationPath) },
  ];

  return (
    <header className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-[#001424] overflow-hidden pt-24 lg:pt-40 2xl:pt-48">
      {/* Industrial Tech - Central glow orb */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-emerald-400 text-sm font-semibold rounded-full uppercase tracking-wider border border-white/10">
              {t('sustainability.hero.label' as TranslationPath)}
            </span>

            {/* Main Headline - SEO optimized */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {t('sustainability.hero.title' as TranslationPath)}
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              {t('sustainability.hero.subtitle' as TranslationPath)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <QuoteButton variant="primary" size="lg" className="!bg-[#0072BC] hover:!bg-[#005a96] shadow-lg shadow-emerald-500/20">
                {t('sustainability.hero.cta_primary' as TranslationPath)}
                <ArrowRight className="w-5 h-5" />
              </QuoteButton>
              <MagneticButton href="/resources" variant="outline" size="lg" className="!bg-sky-100 !border-sky-200 !text-slate-900 hover:!bg-[#0072BC] hover:!text-white hover:!border-[#0072BC] transition-colors duration-300">
                <FileText className="w-5 h-5" />
                {t('sustainability.hero.cta_secondary' as TranslationPath)}
              </MagneticButton>
            </div>

            {/* Hero Highlights - Glass pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full"
                >
                  <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-200">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <NextImage
                src="/images/sustainability/sustainability-hero-green-manufacturing.jpg"
                alt="Sustainable UPVC piping manufacturing - Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001424]/50 via-transparent to-white/5" />
            </div>

            {/* Floating stat card - Glass */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-white/20"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">{t('sustainability.hero.floating_stat_value' as TranslationPath)}</p>
                  <p className="text-xs text-slate-300">{t('sustainability.hero.floating_stat_label' as TranslationPath)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 2: KEY ENVIRONMENTAL COMMITMENTS
// Icon grid with SectionHeader - 6 feature cards
// ═══════════════════════════════════════════════════════════════════════════════

function EnvironmentalCommitmentsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const commitments = [
    {
      icon: Timer,
      title: t('sustainability.commitments.items.service_life.title' as TranslationPath),
      description: t('sustainability.commitments.items.service_life.description' as TranslationPath),
    },
    {
      icon: Droplets,
      title: t('sustainability.commitments.items.water_tight.title' as TranslationPath),
      description: t('sustainability.commitments.items.water_tight.description' as TranslationPath),
    },
    {
      icon: Factory,
      title: t('sustainability.commitments.items.manufacturing.title' as TranslationPath),
      description: t('sustainability.commitments.items.manufacturing.description' as TranslationPath),
    },
    {
      icon: Award,
      title: t('sustainability.commitments.items.standards.title' as TranslationPath),
      description: t('sustainability.commitments.items.standards.description' as TranslationPath),
    },
    {
      icon: Thermometer,
      title: t('sustainability.commitments.items.gulf.title' as TranslationPath),
      description: t('sustainability.commitments.items.gulf.description' as TranslationPath),
    },
    {
      icon: Recycle,
      title: t('sustainability.commitments.items.recycling.title' as TranslationPath),
      description: t('sustainability.commitments.items.recycling.description' as TranslationPath),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle tech grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('sustainability.commitments.label' as TranslationPath)}
          title={t('sustainability.commitments.title' as TranslationPath)}
          titleHighlight={t('sustainability.commitments.title_highlight' as TranslationPath)}
          subtitle={t('sustainability.commitments.subtitle' as TranslationPath)}
        />

        {/* Commitments Grid */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {commitments.map((item, index) => (
            <motion.div key={index} variants={radialItem}>
              <div className="group h-full p-6 bg-white rounded-2xl border-b-4 border-emerald-500 shadow-2xl hover:bg-emerald-50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 3: ENVIRONMENTAL IMPACT METRICS
// AnimatedStatsStrip with emerald theme - qualitative, truthful stats
// ═══════════════════════════════════════════════════════════════════════════════

function SustainabilityStatsStrip() {
  const t = useT();

  const statsData = [
    { icon: Timer, value: t('sustainability.stats.service_life.value' as TranslationPath), label: t('sustainability.stats.service_life.label' as TranslationPath) },
    { icon: Shield, value: t('sustainability.stats.virgin.value' as TranslationPath), label: t('sustainability.stats.virgin.label' as TranslationPath) },
    { icon: Award, value: t('sustainability.stats.iso.value' as TranslationPath), label: t('sustainability.stats.iso.label' as TranslationPath) },
    { icon: Recycle, value: t('sustainability.stats.recyclable.value' as TranslationPath), label: t('sustainability.stats.recyclable.label' as TranslationPath) },
    { icon: Thermometer, value: t('sustainability.stats.gulf.value' as TranslationPath), label: t('sustainability.stats.gulf.label' as TranslationPath) },
    { icon: Droplets, value: t('sustainability.stats.zero_leak.value' as TranslationPath), label: t('sustainability.stats.zero_leak.label' as TranslationPath) },
    { icon: Factory, value: t('sustainability.stats.optimized.value' as TranslationPath), label: t('sustainability.stats.optimized.label' as TranslationPath) },
    { icon: Scale, value: t('sustainability.stats.compliant.value' as TranslationPath), label: t('sustainability.stats.compliant.label' as TranslationPath) },
  ];

  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900">
      {/* Gradient edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      <AnimatedStatsStrip stats={statsData} loopDurationMs={12000} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 4: SUSTAINABILITY PILLARS
// TiltCard grid with hover effects - 4 main pillars
// ═══════════════════════════════════════════════════════════════════════════════

function SustainabilityPillarsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const pillars = [
    {
      icon: Timer,
      title: t('sustainability.pillars.items.durability.title' as TranslationPath),
      description: t('sustainability.pillars.items.durability.description' as TranslationPath),
      highlight: t('sustainability.pillars.items.durability.highlight' as TranslationPath),
    },
    {
      icon: Factory,
      title: t('sustainability.pillars.items.manufacturing.title' as TranslationPath),
      description: t('sustainability.pillars.items.manufacturing.description' as TranslationPath),
      highlight: t('sustainability.pillars.items.manufacturing.highlight' as TranslationPath),
    },
    {
      icon: Award,
      title: t('sustainability.pillars.items.compliance.title' as TranslationPath),
      description: t('sustainability.pillars.items.compliance.description' as TranslationPath),
      highlight: t('sustainability.pillars.items.compliance.highlight' as TranslationPath),
    },
    {
      icon: Users,
      title: t('sustainability.pillars.items.support.title' as TranslationPath),
      description: t('sustainability.pillars.items.support.description' as TranslationPath),
      highlight: t('sustainability.pillars.items.support.highlight' as TranslationPath),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-[#002B4A] to-[#001424] relative overflow-hidden">
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Tech grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('sustainability.pillars.label' as TranslationPath)}
          title={t('sustainability.pillars.title' as TranslationPath)}
          titleHighlight={t('sustainability.pillars.title_highlight' as TranslationPath)}
          subtitle={t('sustainability.pillars.subtitle' as TranslationPath)}
          dark
        />

        {/* Pillars Grid with TiltCard */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={radialItem}>
              <TiltCard intensity={5}>
                <div className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500">
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-500" />

                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-5 border border-emerald-400/30">
                      <pillar.icon className="w-7 h-7 text-emerald-400" />
                    </div>

                    {/* Highlight badge */}
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-3 border border-emerald-400/30">
                      {pillar.highlight}
                    </span>

                    {/* Content */}
                    <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 5: GREEN MANUFACTURING & OPERATIONS STORY
// Alternating image-text blocks (2 blocks)
// ═══════════════════════════════════════════════════════════════════════════════

function GreenManufacturingSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">

        {/* Block A: Thoughtful Manufacturing - Image Left */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          {/* Image */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <NextImage
                src="/images/sustainability/sustainability-manufacturing-quality-control.jpg"
                alt="UPVC pipe manufacturing quality control at Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              {t('sustainability.manufacturing.block_a.label' as TranslationPath)}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t('sustainability.manufacturing.block_a.title' as TranslationPath)}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('sustainability.manufacturing.block_a.description' as TranslationPath)}
            </p>

            <ul className="space-y-3">
              {[
                t('sustainability.manufacturing.block_a.bullets.b1' as TranslationPath),
                t('sustainability.manufacturing.block_a.bullets.b2' as TranslationPath),
                t('sustainability.manufacturing.block_a.bullets.b3' as TranslationPath),
                t('sustainability.manufacturing.block_a.bullets.b4' as TranslationPath),
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Block B: Built for Long-Term Projects - Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Order first on mobile, second on desktop */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">
              {t('sustainability.manufacturing.block_b.label' as TranslationPath)}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t('sustainability.manufacturing.block_b.title_prefix' as TranslationPath)}{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                {t('sustainability.manufacturing.block_b.title_highlight' as TranslationPath)}
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('sustainability.manufacturing.block_b.description' as TranslationPath)}
            </p>

            <ul className="space-y-3 mb-6">
              {[
                t('sustainability.manufacturing.block_b.bullets.b1' as TranslationPath),
                t('sustainability.manufacturing.block_b.bullets.b2' as TranslationPath),
                t('sustainability.manufacturing.block_b.bullets.b3' as TranslationPath),
                t('sustainability.manufacturing.block_b.bullets.b4' as TranslationPath),
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
            >
              {t('sustainability.manufacturing.block_b.link_text' as TranslationPath)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Image - Order second on mobile, first on desktop */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <NextImage
                src="/images/sustainability/sustainability-infrastructure-gcc-project.jpg"
                alt="Long-term infrastructure project with Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 6: COMPLIANCE, STANDARDS & RESPONSIBILITY
// Light section with glass-style cards
// ═══════════════════════════════════════════════════════════════════════════════

function ComplianceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const standards = [
    {
      icon: Shield,
      title: t('sustainability.compliance.items.quality.title' as TranslationPath),
      code: t('sustainability.compliance.items.quality.code' as TranslationPath),
      description: t('sustainability.compliance.items.quality.description' as TranslationPath),
    },
    {
      icon: Leaf,
      title: t('sustainability.compliance.items.environmental.title' as TranslationPath),
      code: t('sustainability.compliance.items.environmental.code' as TranslationPath),
      description: t('sustainability.compliance.items.environmental.description' as TranslationPath),
    },
    {
      icon: ClipboardCheck,
      title: t('sustainability.compliance.items.product_standards.title' as TranslationPath),
      code: t('sustainability.compliance.items.product_standards.code' as TranslationPath),
      description: t('sustainability.compliance.items.product_standards.description' as TranslationPath),
    },
    {
      icon: FileText,
      title: t('sustainability.compliance.items.transparency.title' as TranslationPath),
      code: t('sustainability.compliance.items.transparency.code' as TranslationPath),
      description: t('sustainability.compliance.items.transparency.description' as TranslationPath),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('sustainability.compliance.label' as TranslationPath)}
          title={t('sustainability.compliance.title' as TranslationPath)}
          titleHighlight={t('sustainability.compliance.title_highlight' as TranslationPath)}
          subtitle={t('sustainability.compliance.subtitle' as TranslationPath)}
          dark
        />

        {/* Standards Grid */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {standards.map((item, index) => (
            <motion.div key={index} variants={radialItem}>
              <div className="group h-full p-6 bg-slate-800 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-400/30">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  {item.code}
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 7: WHY SUSTAINABLE SYSTEMS MATTER
// Story block - thought leadership, SEO-focused content
// ═══════════════════════════════════════════════════════════════════════════════

function WhySustainabilityMattersSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-y border-emerald-100/50">
      {/* Bio-Luminescent Light Theme */}
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF] to-white" />

      {/* The Green Core - centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-300/20 blur-[120px] rounded-full pointer-events-none" />

      {/* The Blue Current - top-right orb */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider border border-emerald-200"
          >
            {t('sustainability.thought_leadership.label' as TranslationPath)}
          </motion.span>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#002B4A] mb-6 leading-tight tracking-tight"
          >
            {t('sustainability.thought_leadership.title' as TranslationPath)}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {t('sustainability.thought_leadership.title_highlight' as TranslationPath)}
            </span>
          </motion.h2>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-8 space-y-4"
          >
            <p>
              {t('sustainability.thought_leadership.paragraphs.p1' as TranslationPath)}
            </p>
            <p>
              {t('sustainability.thought_leadership.paragraphs.p2' as TranslationPath)}
            </p>
            <p>
              {t('sustainability.thought_leadership.paragraphs.p3' as TranslationPath)}
            </p>
          </motion.div>

          {/* Key takeaways */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: Timer, title: t('sustainability.thought_leadership.takeaways.longevity.title' as TranslationPath), desc: t('sustainability.thought_leadership.takeaways.longevity.desc' as TranslationPath) },
              { icon: Droplets, title: t('sustainability.thought_leadership.takeaways.failures.title' as TranslationPath), desc: t('sustainability.thought_leadership.takeaways.failures.desc' as TranslationPath) },
              { icon: Award, title: t('sustainability.thought_leadership.takeaways.tested.title' as TranslationPath), desc: t('sustainability.thought_leadership.takeaways.tested.desc' as TranslationPath) },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0072BC] flex items-center justify-center shadow-lg shadow-primary/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#002B4A] font-bold mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 8: FINAL CTA
// Emerald-themed gradient with Crown blue anchor
// ═══════════════════════════════════════════════════════════════════════════════

function SustainabilityCTA() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background - emerald with blue anchor */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900" />

      {/* Animated orb */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Crown blue accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-emerald-200 text-sm font-semibold uppercase tracking-wider mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('sustainability.cta.label' as TranslationPath)}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('sustainability.cta.title' as TranslationPath)}
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              {t('sustainability.cta.title_highlight' as TranslationPath)}
            </span>
          </h2>

          <p className="text-emerald-100/90 text-lg mb-10 max-w-2xl mx-auto">
            {t('sustainability.cta.subtitle' as TranslationPath)}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton variant="outline" size="lg" className="!bg-white !text-emerald-700 hover:!bg-emerald-50">
              {t('sustainability.cta.cta_primary' as TranslationPath)}
              <ArrowRight className="w-5 h-5" />
            </QuoteButton>
            <MagneticButton href="/resources" variant="secondary" size="lg">
              <FileText className="w-5 h-5" />
              {t('sustainability.cta.cta_secondary' as TranslationPath)}
            </MagneticButton>
          </div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Users, text: t('sustainability.cta.trust.consultant' as TranslationPath) },
              { icon: FileText, text: t('sustainability.cta.trust.documentation' as TranslationPath) },
              { icon: Timer, text: t('sustainability.cta.trust.performance' as TranslationPath) },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-emerald-100/80 text-sm">
                <item.icon className="w-4 h-4 text-emerald-300" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function SustainabilityPage() {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Section */}
      <SustainabilityHero />

      {/* 2. Environmental Commitments Grid */}
      <EnvironmentalCommitmentsSection />

      {/* 3. Stats Strip - Emerald Themed */}
      <SustainabilityStatsStrip />

      {/* 4. Sustainability Pillars */}
      <SustainabilityPillarsSection />

      {/* 5. Green Manufacturing Story */}
      <GreenManufacturingSection />

      {/* 6. Compliance & Standards */}
      <ComplianceSection />

      {/* 7. Why Sustainability Matters (Thought Leadership) */}
      <WhySustainabilityMattersSection />

      {/* 8. Final CTA */}
      <SustainabilityCTA />
    </div>
  );
}
