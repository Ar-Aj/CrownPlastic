'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - SUSTAINABILITY PAGE
// 100% design-system compliant, SEO-optimized, story-driven sustainability narrative
// Emerald accent theme with Crown blue anchor
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import Link from 'next/link';
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
  Building2,
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
  
  const heroHighlights = [
    { icon: Timer, text: 'Long service life reduces replacement waste' },
    { icon: Shield, text: 'Lead-free, heavy-metal-free formulations' },
    { icon: Award, text: 'Manufactured to international standards' },
  ];

  return (
    <header className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Subtle emerald orb background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-emerald-100/40 to-teal-50/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-50/30 to-transparent blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

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
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full uppercase tracking-wider">
              Sustainability
            </span>

            {/* Main Headline - SEO optimized */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sustainable Piping Systems,{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Built for Decades
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Long-life UPVC piping systems that reduce replacement waste, optimise material usage, 
              and meet GCC building standards. Designed for projects that think in decades, not years.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <QuoteButton variant="primary" size="lg" className="!bg-gradient-to-r !from-emerald-600 !to-emerald-700 hover:!from-emerald-700 hover:!to-emerald-800">
                Talk to Our Team
                <ArrowRight className="w-5 h-5" />
              </QuoteButton>
              <MagneticButton href="/resources" variant="outline" size="lg">
                <FileText className="w-5 h-5" />
                Download Sustainability Brief
              </MagneticButton>
            </div>

            {/* Hero Highlights - Small pill cards */}
            <div className="flex flex-wrap gap-3 pt-4">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-emerald-200 rounded-full shadow-sm"
                >
                  <item.icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Hero Image Placeholder */}
          <motion.div 
            className="relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 
              TODO: Generate with Nano Banana Pro
              PROMPT: Modern UPVC pipe manufacturing facility with green elements, 
              sustainable manufacturing visualization, pipes with recycling symbols,
              clean industrial setting with plants/greenery accents, 
              professional B2B aesthetic, emerald/teal color accents
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-teal-50">
              {/* Placeholder gradient with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-20 h-20 text-emerald-300 mx-auto mb-4" />
                  <p className="text-emerald-400 text-sm font-medium">Sustainability Hero Image</p>
                </div>
              </div>
              
              {/* When image is ready, use:
              <Image
                src="/images/sustainability/hero.jpg"
                alt="Sustainable UPVC piping manufacturing - Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              */}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-white/10" />
            </div>

            {/* Floating stat card */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-emerald-100"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">50+ Years</p>
                  <p className="text-xs text-gray-500">Service Life Design</p>
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

  const commitments = [
    {
      icon: Timer,
      title: 'Extended Service Life',
      description: 'UPVC systems designed to last 50+ years, significantly reducing the need for replacements and minimizing lifecycle waste.',
    },
    {
      icon: Droplets,
      title: 'Water-Tight Integrity',
      description: 'Precision-engineered joints and fittings prevent leaks that cause water loss, structural damage, and costly repairs.',
    },
    {
      icon: Factory,
      title: 'Efficient Manufacturing',
      description: 'Optimized extrusion processes and quality control reduce material waste while maintaining consistent product standards.',
    },
    {
      icon: Award,
      title: 'Standards Compliance',
      description: 'Products manufactured to BS EN, ASTM, and ISO standards that ensure reliable performance and resource efficiency.',
    },
    {
      icon: Thermometer,
      title: 'Gulf-Condition Engineering',
      description: 'Formulations designed for extreme heat, UV exposure, and high pressure—extending system life in demanding GCC environments.',
    },
    {
      icon: Recycle,
      title: 'End-of-Life Awareness',
      description: 'UPVC is inherently recyclable. We support responsible disposal practices and industry recycling initiatives.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Our Commitment"
          title="Responsible Manufacturing,"
          titleHighlight="Sustainable Outcomes"
          subtitle="Crown Plastic Pipes integrates lifecycle thinking, resource efficiency, and durability into every product—delivering piping systems that serve projects reliably for decades."
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
              <div className="group h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
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
// SECTION 3: ENVIRONMENTAL IMPACT METRICS
// AnimatedStatsStrip with emerald theme - qualitative, truthful stats
// ═══════════════════════════════════════════════════════════════════════════════

function SustainabilityStatsStrip() {
  const statsData = [
    { icon: Timer, value: '50+', label: 'Years Service Life Design' },
    { icon: Shield, value: '100%', label: 'Virgin UPVC Materials' },
    { icon: Award, value: '3×', label: 'ISO Certified Manufacturing' },
    { icon: Recycle, value: 'Recyclable', label: 'End-of-Life Material' },
    { icon: Thermometer, value: 'Gulf-Ready', label: 'Extreme Condition Tested' },
    { icon: Droplets, value: 'Zero-Leak', label: 'Precision Joint Design' },
    { icon: Factory, value: 'Optimized', label: 'Low-Waste Production' },
    { icon: Scale, value: 'Standards', label: 'BS EN / ASTM Compliant' },
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

  const pillars = [
    {
      icon: Timer,
      title: 'Product Durability & Lifecycle',
      description: 'Our UPVC systems are engineered for 50+ years of reliable service. Corrosion-resistant, UV-stabilized, and pressure-rated formulations minimize replacements and reduce lifecycle environmental impact.',
      highlight: '50+ Year Design Life',
    },
    {
      icon: Factory,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art extrusion lines with strict quality control ensure consistent wall thickness, dimensional accuracy, and minimal material waste throughout production.',
      highlight: 'ISO 9001:2015 Certified',
    },
    {
      icon: Award,
      title: 'Standards & Compliance',
      description: 'Every product meets recognized international standards (BS EN 1452, ASTM, DIN) that ensure safe installation, efficient performance, and long-term system reliability.',
      highlight: 'Multi-Standard Certified',
    },
    {
      icon: Users,
      title: 'Support & Responsibility',
      description: 'We partner with consultants and contractors to design piping systems that perform reliably for decades—reducing premature failures, maintenance costs, and resource waste.',
      highlight: 'Technical Partnership',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Sustainability Pillars"
          title="Building Sustainable"
          titleHighlight="Infrastructure"
          subtitle="Four core principles guide our approach to sustainable piping solutions for the Gulf region."
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
                <div className="group relative h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-teal-50 transition-all duration-500" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-emerald-200 transition-colors duration-500" />
                  
                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors duration-500">
                      <pillar.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    {/* Highlight badge */}
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                      {pillar.highlight}
                    </span>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
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

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
        
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
            {/* 
              TODO: Generate with Nano Banana Pro
              PROMPT: Modern UPVC pipe extrusion line in clean factory setting,
              quality control technician inspecting pipes, industrial precision machinery,
              professional manufacturing environment, subtle green/sustainable accents
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-100 to-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Factory className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">Manufacturing Process Image</p>
                </div>
              </div>
              {/* When image is ready:
              <Image
                src="/images/sustainability/manufacturing.jpg"
                alt="UPVC pipe manufacturing quality control at Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
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
              Manufacturing Excellence
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Thoughtful Manufacturing,{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Minimal Waste
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Sharjah facility operates modern extrusion lines with precise temperature control, 
              automated wall-thickness monitoring, and rigorous quality testing. This precision approach 
              ensures consistent product quality while minimizing material waste and energy consumption.
            </p>
            
            <ul className="space-y-3">
              {[
                'Controlled extrusion for consistent dimensional accuracy',
                'In-line quality testing reduces reject rates',
                'Careful material selection for optimal formulations',
                'Process optimization for energy efficiency',
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
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Long-Term Vision
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Built for Projects That{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Think in Decades
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work with consultants, contractors, and developers who understand that reliable 
              piping infrastructure is a long-term investment. Choosing systems designed to last 
              reduces breakdowns, site interventions, replacement costs, and construction waste 
              over the building&apos;s lifetime.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                'Technical support for system design optimization',
                'Comprehensive product range reduces compatibility issues',
                'Clear documentation for specification confidence',
                'Same-day delivery across UAE minimizes project delays',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn About Our Approach
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
            {/* 
              TODO: Generate with Nano Banana Pro
              PROMPT: Modern GCC building/infrastructure project, 
              construction site with visible piping systems installation,
              professional architectural visualization, 
              blue sky, modern Dubai/UAE urban development context
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">Infrastructure Project Image</p>
                </div>
              </div>
              {/* When image is ready:
              <Image
                src="/images/sustainability/infrastructure.jpg"
                alt="Long-term infrastructure project with Crown Plastic Pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              */}
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

  const standards = [
    {
      icon: Shield,
      title: 'Quality Management',
      code: 'ISO 9001:2015',
      description: 'Certified quality management system ensuring consistent product excellence and continuous improvement.',
    },
    {
      icon: Leaf,
      title: 'Environmental Management',
      code: 'ISO 14001:2015',
      description: 'Environmental management certification demonstrating our commitment to responsible manufacturing practices.',
    },
    {
      icon: ClipboardCheck,
      title: 'Product Standards',
      code: 'BS EN / ASTM / DIN',
      description: 'Products tested and certified to international piping standards for pressure, drainage, and conduit applications.',
    },
    {
      icon: FileText,
      title: 'Technical Transparency',
      code: 'Full Documentation',
      description: 'Complete technical datasheets, installation guides, and submittal packages for specification confidence.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Standards & Responsibility"
          title="Compliance That Supports"
          titleHighlight="Sustainability"
          subtitle="Our certifications and standards compliance ensure reliable, efficient systems that minimize waste and maximize performance."
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
              <div className="group h-full p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  {item.code}
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
// SECTION 7: WHY SUSTAINABLE SYSTEMS MATTER
// Story block - thought leadership, SEO-focused content
// ═══════════════════════════════════════════════════════════════════════════════

function WhySustainabilityMattersSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider border border-emerald-500/30"
          >
            Thought Leadership
          </motion.span>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Why Sustainable Piping Systems{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Matter for the Gulf
            </span>
          </motion.h2>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed mb-8 space-y-4"
          >
            <p>
              In piping infrastructure, true sustainability isn&apos;t about marketing claims—it&apos;s about 
              engineering systems that genuinely last. A drainage line that fails after 15 years generates 
              more environmental impact than one designed to serve reliably for 50+.
            </p>
            <p>
              Every leak causes water loss. Every premature replacement consumes resources. Every 
              excavation disrupts buildings and wastes contractor time. The most sustainable piping 
              decision is often the simplest: choose materials that perform predictably under your 
              project&apos;s actual conditions.
            </p>
            <p>
              For Gulf projects facing extreme heat, UV exposure, and aggressive soil conditions, 
              this means selecting systems specifically formulated and tested for these environments—not 
              generic products that may underperform when conditions intensify.
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
              { icon: Timer, title: 'Design for Longevity', desc: 'Systems that last reduce replacements' },
              { icon: Droplets, title: 'Prevent Failures', desc: 'Leaks waste water and damage structures' },
              { icon: Award, title: 'Tested Materials', desc: 'Predictable performance under real conditions' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <item.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
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
            Start Your Next Project Right
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Design Your Next Project with{' '}
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Long-Life, Reliable Piping
            </span>
          </h2>
          
          <p className="text-emerald-100/90 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Crown Plastic Pipes for sustainable piping solutions. Our technical team 
            supports consultants, contractors, and developers from specification to delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton variant="outline" size="lg" className="!bg-white !text-emerald-700 hover:!bg-emerald-50">
              Request Sustainability Consultation
              <ArrowRight className="w-5 h-5" />
            </QuoteButton>
            <MagneticButton href="/resources" variant="secondary" size="lg">
              <FileText className="w-5 h-5" />
              Download Technical Catalogue
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
              { icon: Users, text: 'Consultant Support' },
              { icon: FileText, text: 'Technical Documentation' },
              { icon: Timer, text: 'Long-Term Performance' },
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
    <>
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
    </>
  );
}
