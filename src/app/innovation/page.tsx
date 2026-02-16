'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - INNOVATION PAGE
// High-tech cousin of About Us page - 100% design system compliant
// Cyan/sky accent theme with Crown blue (#0072BC) anchor
// Positions Crown as technologically advanced, precise, forward-looking
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import { useT } from '@/i18n';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Zap,
  Microscope,
  Cog,
  Shield,
  TestTube2,
  Factory,
  Award,
  CheckCircle2,
  ArrowRight,
  FileText,
  Target,
  Layers,
  Gauge,
  Wrench,
  Building2,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Database,
  Cable,
  Droplets,
  Thermometer,
  ClipboardCheck,
  Headphones,
  BookOpen,
} from 'lucide-react';

// Components
import { QuoteButton } from '@/components/common';
import {
  TiltCard,
  SectionHeader,
  MagneticButton,
  FloatingParticles,
} from '@/components/ui/premium';

// Design System
import {
  radialStagger,
  radialItem,
  noiseTexture,
  staggerContainer,
  fadeUp,
} from '@/lib/design-system';

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 1: INNOVATION HERO
// Tech-forward, semi-dark, inspired by About Us cinematic hero
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationHero() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  const heroTags = [
    { icon: Microscope, text: t('innovation.hero.tags.extrusion' as any) },
    { icon: TestTube2, text: t('innovation.hero.tags.testing' as any) },
    { icon: Cog, text: t('innovation.hero.tags.process' as any) },
    { icon: Target, text: t('innovation.hero.tags.standards' as any) },
  ];

  return (
    <header className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-24 lg:pt-40 2xl:pt-48">
      {/* Dark tech gradient background - inspired by About Us */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* Animated cyan orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-cyan-500/20 to-sky-500/10 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/10 blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: noiseTexture }} />

      {/* Grid pattern - tech aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <FloatingParticles count={15} color="bg-cyan-400/30" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.span
              className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-300 text-sm font-semibold rounded-full uppercase tracking-wider border border-cyan-500/30"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('innovation.hero.label' as any)}
            </motion.span>

            {/* Main Headline - SEO optimized */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {t('innovation.hero.title_prefix' as any)}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                {t('innovation.hero.title_highlight' as any)}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              {t('innovation.hero.subtitle' as any)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <QuoteButton variant="primary" size="lg">
                {t('innovation.hero.cta_primary' as any)}
                <ArrowRight className="w-5 h-5" />
              </QuoteButton>
              <MagneticButton href="/products" variant="secondary" size="lg">
                {t('innovation.hero.cta_secondary' as any)}
              </MagneticButton>
            </div>

            {/* Hero Tags - Glass pill cards */}
            <div className="flex flex-wrap gap-3 pt-4">
              {heroTags.map((item, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                >
                  <item.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-200">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <NextImage
                src="/images/innovation/innovation-hero-hightech-lab.jpg"
                alt="High-tech UPVC pipe manufacturing facility - Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />

              {/* Floating stat badges */}
              <motion.div
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-white/20 hidden md:block"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                  <span className="text-white text-sm font-semibold">{t('innovation.hero.floating_badge_iso' as any)}</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 max-w-[200px] hidden md:block"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t('innovation.hero.floating_badge_value' as any)}</p>
                    <p className="text-xs text-slate-400">{t('innovation.hero.floating_badge_label' as any)}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 2: WHAT INNOVATION MEANS AT CROWN
// Definition section - Light/mid-tone with SectionHeader + icon cards
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationDefinitionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const approaches = [
    {
      icon: Microscope,
      title: t('innovation.definition.items.material.title' as any),
      description: t('innovation.definition.items.material.description' as any),
    },
    {
      icon: Cog,
      title: t('innovation.definition.items.tooling.title' as any),
      description: t('innovation.definition.items.tooling.description' as any),
    },
    {
      icon: TestTube2,
      title: t('innovation.definition.items.testing.title' as any),
      description: t('innovation.definition.items.testing.description' as any),
    },
    {
      icon: Target,
      title: t('innovation.definition.items.application.title' as any),
      description: t('innovation.definition.items.application.description' as any),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.definition.label' as any)}
          title={t('innovation.definition.title' as any)}
          titleHighlight={t('innovation.definition.title_highlight' as any)}
          subtitle={t('innovation.definition.subtitle' as any)}
        />

        {/* Approaches Grid */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {approaches.map((item, index) => (
            <motion.div key={index} variants={radialItem}>
              <div className="group h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-[#002B4A] hover:border-transparent transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 3: R&D AND TECHNOLOGY PILLARS
// Dark/glass section with TiltCards - inspired by Crown Advantage
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationPillarsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const pillars = [
    {
      icon: Microscope,
      title: t('innovation.pillars.items.material.title' as any),
      description: t('innovation.pillars.items.material.description' as any),
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Factory,
      title: t('innovation.pillars.items.production.title' as any),
      description: t('innovation.pillars.items.production.description' as any),
      accent: 'from-sky-500 to-cyan-500',
    },
    {
      icon: TestTube2,
      title: t('innovation.pillars.items.testing.title' as any),
      description: t('innovation.pillars.items.testing.description' as any),
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Headphones,
      title: t('innovation.pillars.items.support.title' as any),
      description: t('innovation.pillars.items.support.description' as any),
      accent: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark background - Crown Advantage style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c18] via-[#041225] to-[#020c18]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.pillars.label' as any)}
          title={t('innovation.pillars.title' as any)}
          titleHighlight={t('innovation.pillars.title_highlight' as any)}
          subtitle={t('innovation.pillars.subtitle' as any)}
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
                <div className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500">
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-sm" />

                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.12] group-hover:border-cyan-500/40 transition-colors duration-500" />

                  {/* Shine sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                  <div className="relative p-6 md:p-8">
                    {/* Icon with gradient */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-5 shadow-lg`}>
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
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
// SECTION 4: INNOVATION TIMELINE / JOURNEY
// Conceptual journey of progress - horizontal on desktop, vertical on mobile
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationTimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  const timelineSteps = [
    {
      icon: Building2,
      title: t('innovation.timeline.steps.foundation.title' as any),
      description: t('innovation.timeline.steps.foundation.description' as any),
    },
    {
      icon: TrendingUp,
      title: t('innovation.timeline.steps.scaling.title' as any),
      description: t('innovation.timeline.steps.scaling.description' as any),
    },
    {
      icon: TestTube2,
      title: t('innovation.timeline.steps.qa.title' as any),
      description: t('innovation.timeline.steps.qa.description' as any),
    },
    {
      icon: Database,
      title: t('innovation.timeline.steps.data.title' as any),
      description: t('innovation.timeline.steps.data.description' as any),
    },
    {
      icon: Lightbulb,
      title: t('innovation.timeline.steps.future.title' as any),
      description: t('innovation.timeline.steps.future.description' as any),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.timeline.label' as any)}
          title={t('innovation.timeline.title' as any)}
          titleHighlight={t('innovation.timeline.title_highlight' as any)}
          subtitle={t('innovation.timeline.subtitle' as any)}
        />

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-cyan-500/40 to-primary/20" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-5 gap-4"
            >
              {timelineSteps.map((step, index) => (
                <motion.div key={index} variants={fadeUp} className="relative">
                  {/* Connector dot */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-lg z-10" />

                  {/* Card */}
                  <div className="pt-16 text-center">
                    <div className="inline-flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-cyan-500/40 to-primary/20" />

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector dot */}
                  <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 5: TECHNOLOGY IN ACTION - PRODUCT INNOVATION SHOWCASE
// Grid of product families from innovation angle
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationShowcaseSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const productInnovations = [
    {
      icon: Gauge,
      title: t('innovation.showcase.items.pressure.title' as any),
      description: t('innovation.showcase.items.pressure.description' as any),
      href: '/products/upvc-pressure-pipe-fittings',
    },
    {
      icon: Droplets,
      title: t('innovation.showcase.items.drainage.title' as any),
      description: t('innovation.showcase.items.drainage.description' as any),
      href: '/products/upvc-drainage-pipe-fittings',
    },
    {
      icon: Cable,
      title: t('innovation.showcase.items.conduit.title' as any),
      description: t('innovation.showcase.items.conduit.description' as any),
      href: '/products/upvc-conduit-pipes',
    },
    {
      icon: Thermometer,
      title: t('innovation.showcase.items.ppr.title' as any),
      description: t('innovation.showcase.items.ppr.description' as any),
      href: '/products/ppr-pipe-systems',
    },
    {
      icon: Layers,
      title: t('innovation.showcase.items.hdpe.title' as any),
      description: t('innovation.showcase.items.hdpe.description' as any),
      href: '/products/hdpe-pipe-systems',
    },
    {
      icon: Wrench,
      title: t('innovation.showcase.items.fabrications.title' as any),
      description: t('innovation.showcase.items.fabrications.description' as any),
      href: '/fabrications',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.showcase.label' as any)}
          title={t('innovation.showcase.title' as any)}
          titleHighlight={t('innovation.showcase.title_highlight' as any)}
          subtitle={t('innovation.showcase.subtitle' as any)}
        />

        {/* Products Grid */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productInnovations.map((item, index) => (
            <motion.div key={index} variants={radialItem}>
              <Link href={item.href} className="group block h-full">
                <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-[#002B4A] hover:border-transparent transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300">{item.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent group-hover:gap-2 transition-all duration-300">
                    {t('innovation.showcase.learn_more' as any)} <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 6: QUALITY, TESTING & STANDARDS
// High-tech glass cards on dark background - Crown Advantage style
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationQualitySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  const qualityAreas = [
    {
      icon: TestTube2,
      title: t('innovation.quality.items.routine.title' as any),
      description: t('innovation.quality.items.routine.description' as any),
    },
    {
      icon: Award,
      title: t('innovation.quality.items.standards.title' as any),
      description: t('innovation.quality.items.standards.description' as any),
    },
    {
      icon: ClipboardCheck,
      title: t('innovation.quality.items.traceability.title' as any),
      description: t('innovation.quality.items.traceability.description' as any),
    },
    {
      icon: Users,
      title: t('innovation.quality.items.specifications.title' as any),
      description: t('innovation.quality.items.specifications.description' as any),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Cyan glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: noiseTexture }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.quality.label' as any)}
          title={t('innovation.quality.title' as any)}
          titleHighlight={t('innovation.quality.title_highlight' as any)}
          subtitle={t('innovation.quality.subtitle' as any)}
          dark
        />

        {/* Quality Grid */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {qualityAreas.map((item, index) => (
            <motion.div key={index} variants={radialItem}>
              <div className="group h-full p-6 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] hover:bg-white/[0.10] hover:border-cyan-500/40 transition-all duration-300">
                {/* Shine sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-700 pointer-events-none rounded-2xl overflow-hidden" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 7: INNOVATION IN SUPPORT & COLLABORATION
// Lighter section - How Crown works with partners
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationSupportSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  const partnerTypes = [
    {
      title: t('innovation.support.partners.consultants.title' as any),
      icon: FileText,
      points: [
        t('innovation.support.partners.consultants.points.p1' as any),
        t('innovation.support.partners.consultants.points.p2' as any),
        t('innovation.support.partners.consultants.points.p3' as any),
        t('innovation.support.partners.consultants.points.p4' as any),
      ],
    },
    {
      title: t('innovation.support.partners.contractors.title' as any),
      icon: Wrench,
      points: [
        t('innovation.support.partners.contractors.points.p1' as any),
        t('innovation.support.partners.contractors.points.p2' as any),
        t('innovation.support.partners.contractors.points.p3' as any),
        t('innovation.support.partners.contractors.points.p4' as any),
      ],
    },
    {
      title: t('innovation.support.partners.developers.title' as any),
      icon: Building2,
      points: [
        t('innovation.support.partners.developers.points.p1' as any),
        t('innovation.support.partners.developers.points.p2' as any),
        t('innovation.support.partners.developers.points.p3' as any),
        t('innovation.support.partners.developers.points.p4' as any),
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label={t('innovation.support.label' as any)}
          title={t('innovation.support.title' as any)}
          titleHighlight={t('innovation.support.title_highlight' as any)}
          subtitle={t('innovation.support.subtitle' as any)}
        />

        {/* Partner Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:bg-primary hover:from-primary hover:to-primary hover:border-transparent transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <partner.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{partner.title}</h3>
              </div>

              <ul className="space-y-3">
                {partner.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-gray-700 text-sm group-hover:text-white transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION 8: FINAL CTA - PARTNER IN INNOVATION
// Blue/cyan tech gradient - invite technical discussions
// ═══════════════════════════════════════════════════════════════════════════════

function InnovationCTA() {
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background - blue/cyan tech theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-cyan-700" />

      {/* Animated orb */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Floating particles */}
      <FloatingParticles count={10} color="bg-white/20" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-cyan-200 text-sm font-semibold uppercase tracking-wider mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('innovation.cta.label' as any)}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('innovation.cta.title_prefix' as any)}
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('innovation.cta.title_highlight' as any)}
            </span>
          </h2>

          <p className="text-blue-100/90 text-lg mb-10 max-w-2xl mx-auto">
            {t('innovation.cta.subtitle' as any)}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <QuoteButton variant="outline" size="lg" className="!bg-white !text-primary hover:!bg-cyan-50">
              {t('innovation.cta.cta_primary' as any)}
              <ArrowRight className="w-5 h-5" />
            </QuoteButton>
            <MagneticButton href="/resources" variant="secondary" size="lg">
              <BookOpen className="w-5 h-5" />
              {t('innovation.cta.cta_secondary' as any)}
            </MagneticButton>
          </div>

          {/* Bullet points */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Users, text: t('innovation.cta.trust.consultants' as any) },
              { icon: FileText, text: t('innovation.cta.trust.data' as any) },
              { icon: Shield, text: t('innovation.cta.trust.performance' as any) },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-100/80 text-sm">
                <item.icon className="w-4 h-4 text-cyan-300" />
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

export default function InnovationPage() {
  return (
    <>
      {/* 1. Innovation Hero - Tech-forward, dark */}
      <InnovationHero />

      {/* 2. What Innovation Means at Crown */}
      <InnovationDefinitionSection />

      {/* 3. R&D and Technology Pillars */}
      <InnovationPillarsSection />

      {/* 4. Innovation Timeline / Journey */}
      <InnovationTimelineSection />

      {/* 5. Technology in Action - Product Showcase */}
      <InnovationShowcaseSection />

      {/* 6. Quality, Testing & Standards */}
      <InnovationQualitySection />

      {/* 7. Innovation in Support & Collaboration */}
      <InnovationSupportSection />

      {/* 8. Final CTA - Partner in Innovation */}
      <InnovationCTA />
    </>
  );
}
