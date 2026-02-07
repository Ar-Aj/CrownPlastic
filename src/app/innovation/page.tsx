'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - INNOVATION PAGE
// High-tech cousin of About Us page - 100% design system compliant
// Cyan/sky accent theme with Crown blue (#0072BC) anchor
// Positions Crown as technologically advanced, precise, forward-looking
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import Link from 'next/link';
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
  Cpu,
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

  const heroTags = [
    { icon: Microscope, text: 'Precision Extrusion' },
    { icon: TestTube2, text: 'Quality Testing' },
    { icon: Cog, text: 'Process Optimization' },
    { icon: Target, text: 'Standards Compliance' },
  ];

  return (
    <header className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
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
              Innovation
            </motion.span>

            {/* Main Headline - SEO optimized */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Innovation in{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Every Length of Pipe
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              Precision extrusion technology, rigorous quality testing, and continuous improvement
              in formulations and tooling. We engineer UPVC piping systems for long-term performance
              in Gulf construction and infrastructure projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <QuoteButton variant="primary" size="lg">
                Discuss Technical Requirements
                <ArrowRight className="w-5 h-5" />
              </QuoteButton>
              <MagneticButton href="/products" variant="secondary" size="lg">
                Explore Product Range
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

          {/* Right Column - Hero Image Placeholder */}
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/*
              TODO: Generate with Nano Banana Pro
              PROMPT: High-tech UPVC piping factory with precision extrusion lines,
              modern industrial metrology/testing lab, dark-tech aesthetic,
              blue and cyan lighting accents, clean industrial environment,
              3:4 aspect ratio, professional B2B manufacturing visualization
            */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-blue-900 border border-white/10">
              {/* Placeholder gradient with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-24 h-24 text-cyan-500/50 mx-auto mb-4" />
                  <p className="text-cyan-400/60 text-sm font-medium">Innovation Hero Image</p>
                </div>
              </div>

              {/* When image is ready:
              <Image
                src="/images/innovation/hero.jpg"
                alt="High-tech UPVC pipe manufacturing facility - Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              */}

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
                  <span className="text-white text-sm font-semibold">ISO 9001:2015</span>
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
                    <p className="font-bold text-white text-sm">5000+</p>
                    <p className="text-xs text-slate-400">Products Range</p>
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

  const approaches = [
    {
      icon: Microscope,
      title: 'Material & Formulation Expertise',
      description:
        'Deep understanding of UPVC compound behavior under Gulf conditions—optimizing additives, stabilizers, and impact modifiers for long-term performance.',
    },
    {
      icon: Cog,
      title: 'Tooling & Process Optimization',
      description:
        'Continuous refinement of extrusion dies, calibration systems, and cooling processes to achieve consistent wall thickness and dimensional accuracy.',
    },
    {
      icon: TestTube2,
      title: 'Testing & Quality Assurance',
      description:
        'Rigorous in-house testing protocols including hydrostatic pressure, impact resistance, and dimensional verification at every production stage.',
    },
    {
      icon: Target,
      title: 'Application Understanding',
      description:
        'Engineering systems specifically for pressure, drainage, and ducting applications in GCC construction—not generic one-size-fits-all products.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Our Approach"
          title="Innovation Means"
          titleHighlight="Better Performance"
          subtitle="At Crown Plastic Pipes, innovation isn't about marketing buzz—it's about engineering piping systems that genuinely perform better, last longer, and require less maintenance over their service life."
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
              <div className="group h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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

  const pillars = [
    {
      icon: Microscope,
      title: 'Material Science & Formulation',
      description:
        'Our R&D focuses on compound optimization for extreme Gulf conditions—UV stabilization, heat resistance, and impact performance. Every formulation decision is backed by testing data.',
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Factory,
      title: 'Tooling & Production Technology',
      description:
        'State-of-the-art extrusion lines with precision temperature control, automated dimensional monitoring, and advanced die design ensure consistent quality across production runs.',
      accent: 'from-sky-500 to-cyan-500',
    },
    {
      icon: TestTube2,
      title: 'Testing & Quality Assurance',
      description:
        'In-house laboratory equipped for hydrostatic testing, impact resistance, Vicat softening point, and dimensional verification. Quality isn\'t inspected in—it\'s built in.',
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Headphones,
      title: 'Application Engineering & Support',
      description:
        'Technical guidance for consultants and contractors—helping select the right products, specify correctly, and design piping systems that perform as expected over decades.',
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
          label="Technology Pillars"
          title="R&D Excellence in"
          titleHighlight="Piping Technology"
          subtitle="Four core technology areas drive our innovation—from material science to application support."
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

  const timelineSteps = [
    {
      icon: Building2,
      title: 'Foundation',
      description: 'Established with a commitment to quality UPVC manufacturing for the Gulf market.',
    },
    {
      icon: TrendingUp,
      title: 'Scaling Production',
      description: 'Expanded capacity with modern extrusion lines and automated quality control systems.',
    },
    {
      icon: TestTube2,
      title: 'Advanced QA',
      description: 'In-house laboratory capabilities for comprehensive testing and formulation development.',
    },
    {
      icon: Database,
      title: 'Data-Driven Quality',
      description: 'Digital monitoring of production parameters for consistent, traceable quality.',
    },
    {
      icon: Lightbulb,
      title: 'Future-Ready Systems',
      description: 'Continuous R&D investment in materials, processes, and application engineering.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Our Journey"
          title="Continuous"
          titleHighlight="Improvement"
          subtitle="A commitment to getting better—refining processes, upgrading technology, and deepening our expertise year after year."
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

  const productInnovations = [
    {
      icon: Gauge,
      title: 'Pressure Piping – Consistent, Long-Life Performance',
      description:
        'Precision wall thickness and pressure-rated formulations deliver predictable hydraulic performance over decades. Compatible with international standards for specification confidence.',
      href: '/products/upvc-pressure-pipe-fittings',
    },
    {
      icon: Droplets,
      title: 'Drainage Systems – Engineered Flow Efficiency',
      description:
        'Smooth bore design and accurate joint tolerances ensure reliable drainage without blockages or leaks. Self-extinguishing and chemical resistant formulations.',
      href: '/products/upvc-drainage-pipe-fittings',
    },
    {
      icon: Cable,
      title: 'Duct & Conduit – Cable Protection Excellence',
      description:
        'Impact-resistant, UV-stabilized conduit systems protect critical electrical and communications infrastructure. Easy installation with consistent dimensional accuracy.',
      href: '/products/upvc-conduit-pipes',
    },
    {
      icon: Thermometer,
      title: 'PPR Hot & Cold – Thermal Performance',
      description:
        'Polypropylene random systems for demanding temperature applications up to 95°C. Reliable fusion-weld joints eliminate leak points for long-term reliability.',
      href: '/products/ppr-pipe-systems',
    },
    {
      icon: Layers,
      title: 'HDPE Systems – Flexibility & Durability',
      description:
        'High-density polyethylene for buried applications, agriculture, and industrial use. Excellent chemical resistance and flexibility for challenging installations.',
      href: '/products/hdpe-pipe-systems',
    },
    {
      icon: Wrench,
      title: 'Fabrications & Specials – Custom Engineering',
      description:
        'Custom fabricated fittings and special configurations when standard components don\'t fit the project requirements. Technical support from design to delivery.',
      href: '/fabrications',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Technology in Action"
          title="Product Innovation"
          titleHighlight="Showcase"
          subtitle="From precision manufacturing to application engineering—see how technology translates into products that perform."
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
                <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
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

  const qualityAreas = [
    {
      icon: TestTube2,
      title: 'Routine Testing & QC',
      description:
        'Every production batch undergoes dimensional verification, hydrostatic pressure testing, and visual inspection. Consistent quality is non-negotiable.',
    },
    {
      icon: Award,
      title: 'Standards Compliance',
      description:
        'Products manufactured to BS EN 1452, ASTM D2466, DIN 8063, and other recognized international standards. ISO 9001:2015 certified quality management.',
    },
    {
      icon: ClipboardCheck,
      title: 'Traceability & Documentation',
      description:
        'Complete batch traceability, test certificates, and technical submittals. The documentation consultants and contractors need for confident specification.',
    },
    {
      icon: Users,
      title: 'Supporting Specifications',
      description:
        'Our testing and documentation help engineers and consultants specify with confidence—clear data, proven performance, reliable supply.',
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
          label="Quality & Testing"
          title="Technology in"
          titleHighlight="Quality Assurance"
          subtitle="Innovation means rigorous, repeatable processes—not marketing buzz. Our quality systems ensure every product performs as specified."
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

  const partnerTypes = [
    {
      title: 'For Consultants',
      icon: FileText,
      points: [
        'Technical datasheets for accurate specification',
        'Test certificates and compliance documentation',
        'Product selection guidance for applications',
        'Responsive technical queries support',
      ],
    },
    {
      title: 'For Contractors',
      icon: Wrench,
      points: [
        'Reliable same-day delivery across UAE',
        'Consistent product quality batch-to-batch',
        'Clear installation guidance',
        'Technical support for site challenges',
      ],
    },
    {
      title: 'For Developers',
      icon: Building2,
      points: [
        'Long-term performance for asset value',
        'Reduced maintenance and replacement costs',
        'Standards-compliant systems',
        'Comprehensive product range coverage',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Collaboration"
          title="Innovation in"
          titleHighlight="Support & Partnership"
          subtitle="Technology alone isn't enough. We work closely with consultants, contractors, and developers to deliver piping systems that perform as expected over decades."
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
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <partner.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{partner.title}</h3>
              </div>

              <ul className="space-y-3">
                {partner.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{point}</span>
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
            Partner in Innovation
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bring Innovation Into{' '}
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Your Next Project
            </span>
          </h2>

          <p className="text-blue-100/90 text-lg mb-10 max-w-2xl mx-auto">
            Technical discussions with consultants, contractors, and developers. 
            Our team helps you select and specify piping systems for long-term performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <QuoteButton variant="outline" size="lg" className="!bg-white !text-primary hover:!bg-cyan-50">
              Schedule a Technical Consultation
              <ArrowRight className="w-5 h-5" />
            </QuoteButton>
            <MagneticButton href="/resources" variant="secondary" size="lg">
              <BookOpen className="w-5 h-5" />
              Download Technical Catalogue
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
              { icon: Users, text: 'Support for consultants' },
              { icon: FileText, text: 'Detailed technical data' },
              { icon: Shield, text: 'Focused on long-term performance' },
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
