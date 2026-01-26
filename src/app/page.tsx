'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - B2B HOMEPAGE
// Crown Design System: Blue/White/Black Palette, Mobile-First, Static UI
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Phone, Shield, Award, Truck, 
  Wrench, CheckCircle2, Package,
  Globe, Clock, Zap, Earth, Recycle
} from 'lucide-react';

// Components
import { 
  LogoCarousel3D,
  AnimatedStatsStrip,
  QuoteButton,
} from '@/components/common';
import {
  TiltCard,
  AnimatedCounter,
  SectionHeader,
  GradientMesh,
  MagneticButton,
} from '@/components/ui/premium';
import { CrownButton } from '@/components/ui/crown';

// Config & Data
import { productCategories } from '@/config/products';
import { clientLogos } from '@/config/clients';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

// Design System
import { 
  staggerContainer, 
  fadeUp, 
  radialStagger,
  radialItem,
} from '@/lib/design-system';

// ═══════════════════════════════════════════════════════════════════════════════
// HERO SECTION - Crown Design System
// Mobile-first, blue/white/black palette only, static UI
// Space reserved for future VideoCarousel3D component
// ═══════════════════════════════════════════════════════════════════════════════

function CrownHero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          PLACEHOLDER: Future VideoCarousel3D Component
          
          This section will contain a 3D-style 6-video carousel showcasing:
          - Product manufacturing process
          - Installation demonstrations  
          - Factory tour highlights
          - Quality testing procedures
          
          Component will be integrated here or partially overlap hero below.
          Mobile: Single video with swipe navigation
          Desktop: Grid/carousel layout with 3D perspective
      ═══════════════════════════════════════════════════════════════════════ */}
      
      <header className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-white">
        {/* Subtle static accent (no animation) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-50" />
        
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Premium UPVC Piping Solutions for the GCC
              </h1>

              {/* Supporting Line */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings for water supply, 
                drainage, and infrastructure projects across the Gulf.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <CrownButton variant="primary" size="lg">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </CrownButton>
                <CrownButton variant="secondary" size="lg" href="/products" className="!bg-gray-100 !text-gray-800 !border-gray-200 hover:!bg-gray-200">
                  View Products
                  <Package className="w-5 h-5" />
                </CrownButton>
              </div>
            </div>

            {/* Right Column - Factory Image + Floating Glass Tags */}
            <div className="relative">
              {/* Factory/Outlet Background Image - Fully Visible */}
              <div className="relative rounded-2xl overflow-visible shadow-2xl aspect-[4/3] bg-slate-800">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* TODO: Replace with actual factory image */}
                  <Image
                    src="/images/about/factory-hero.jpeg"
                    alt="Crown Plastic Pipes manufacturing facility in UAE"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle vignette - doesn't obstruct center */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20" />
                </div>
                
                {/* Innovative Floating Glass Tags - Corner Anchored */}
                {/* Top-Left: Floating Glass Tag with Connecting Line */}
                <div className="absolute -top-3 -left-3 group">
                  {/* Connecting line to image */}
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
                  
                  {/* Floating compact stat */}
                  <div className="relative bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg border border-primary/20 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-gray-900 leading-none">30+</div>
                        <div className="text-[10px] text-gray-600 leading-tight whitespace-nowrap">Years</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top-Right: Floating Glass Tag */}
                <div className="absolute -top-3 -right-3 group">
                  <div className="absolute top-1/2 right-1/2 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
                  
                  <div className="relative bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg border border-primary/20 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-gray-900 leading-none">5000+</div>
                        <div className="text-[10px] text-gray-600 leading-tight whitespace-nowrap">Products</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom-Left: Floating Glass Tag */}
                <div className="absolute -bottom-3 -left-3 group">
                  <div className="absolute bottom-1/2 left-1/2 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
                  
                  <div className="relative bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg border border-primary/20 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-gray-900 leading-none">52+</div>
                        <div className="text-[10px] text-gray-600 leading-tight whitespace-nowrap">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom-Right: Floating Glass Tag */}
                <div className="absolute -bottom-3 -right-3 group">
                  <div className="absolute bottom-1/2 right-1/2 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
                  
                  <div className="relative bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg border border-primary/20 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-gray-900 leading-none">24/7</div>
                        <div className="text-[10px] text-gray-600 leading-tight whitespace-nowrap">Delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CATEGORIES - Glass Grid with Radial Stagger
// ═══════════════════════════════════════════════════════════════════════════════

function ProductCategoriesSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = productCategories.slice(0, 6).map((cat) => ({
    title: language === 'ar' ? (cat.nameAr || cat.name) : cat.name,
    description: language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription,
    href: `/products/${cat.slug}`,
    icon: cat.icon,
    image: cat.image,
  }));

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <SectionHeader
          label="Our Products"
          title="Premium Piping"
          titleHighlight="Solutions"
          subtitle="Comprehensive range of UPVC, PPR, and HDPE piping systems for every application"
        />

        {/* Product Grid with Radial Stagger */}
        <motion.div
          variants={radialStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.href} variants={radialItem}>
              <Link href={cat.href} className="group block h-full">
                <TiltCard intensity={5}>
                  <div className="relative rounded-2xl overflow-hidden h-full shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-900/20 transition-all duration-500 ease-out">
                    {/* Background - transitions from white to dark navy */}
                    <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-br group-hover:from-slate-800 group-hover:via-slate-900 group-hover:to-blue-950 transition-all duration-500" />
                    
                    {/* Subtle border */}
                    <div className="absolute inset-0 rounded-2xl border border-gray-100 group-hover:border-slate-700/50 transition-colors duration-500" />
                    
                    <div className="relative p-6">
                      {/* Image */}
                      {cat.image && (
                        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-gray-100">
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          {/* Refined overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>
                      )}
                      
                      {/* Content */}
                      <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-white transition-colors duration-400">
                        {cat.title}
                      </h3>
                      <p className="text-sm mb-4 line-clamp-2 text-gray-600 group-hover:text-slate-300 transition-colors duration-400">
                        {cat.description}
                      </p>
                      
                      {/* View details link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-amber-400 transition-all duration-400">
                        <span className="group-hover:tracking-wide transition-all duration-400">View Products</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-400" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MagneticButton href="/products" variant="outline" size="lg">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STATS STRIP - Animated Horizontal Ticker
// Slow, constant-speed marquee with 8 stats (certifications + key numbers)
// ═══════════════════════════════════════════════════════════════════════════════

function NewStatsStripSection() {
  // 8 stats as specified: mix of numbers, certifications, and quality metrics
  const statsData = [
    { icon: Award, value: '30+', label: 'Years of Excellence' },
    { icon: Package, value: '5000+', label: 'Products Available' },
    { icon: Globe, value: '6', label: 'GCC Countries' },
    { icon: Earth, value: '52+', label: 'Countries Served' },
    { icon: Shield, value: 'ISO 9001:2015', label: 'Quality Certified' },
    { icon: Shield, value: 'ISO 14001:2015', label: 'Environmental Certified' },
    { icon: Shield, value: 'ISO 45001:2018', label: 'Safety Certified' },
    { icon: Recycle, value: '100%', label: 'Virgin uPVC Raw Material' },
  ];

  return (
    <AnimatedStatsStrip 
      stats={statsData}
      loopDurationMs={9000} // 35 seconds for one full loop - calm B2B feel
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT PREVIEW - Split Screen with Scroll Reveal
// ═══════════════════════════════════════════════════════════════════════════════

function AboutPreviewSection() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'ISO 9001:2015 Quality Management',
    'BS EN 1452 & ASTM Certified Products',
    'Complete Range of Piping Solutions',
    'Same-Day Delivery Across UAE',
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {t('home.about_badge')}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by UAE&apos;s{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Leading Contractors
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over three decades, Crown Plastic Pipes has been the preferred choice 
              for premium piping solutions across the GCC. Our commitment to quality, 
              innovation, and customer service sets us apart.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <QuoteButton variant="primary" size="md">
                Request a Quote
              </QuoteButton>
            </div>
          </motion.div>

          {/* Right - Image with Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/factory-hero.jpeg"
                alt="Crown Plastic Pipes factory extrusion lines in UAE"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating certification card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl max-w-xs hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">ISO 9001:2015</p>
                  <p className="text-sm text-gray-500">Quality Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary-dark text-white p-4 rounded-xl shadow-xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <div className="text-3xl font-bold">
                <AnimatedCounter value={30} suffix="+" />
              </div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WHY CHOOSE US - Feature Cards with Icons
// ═══════════════════════════════════════════════════════════════════════════════

function WhyChooseUsSection() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { 
      icon: Award, 
      title: t('home.why_quality'), 
      description: t('home.why_quality_desc'),
      color: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/30',
    },
    { 
      icon: Zap, 
      title: t('home.why_innovation'), 
      description: t('home.why_innovation_desc'),
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/30',
    },
    { 
      icon: Truck, 
      title: t('home.why_delivery'), 
      description: t('home.why_delivery_desc'),
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-500/30',
    },
    { 
      icon: Wrench, 
      title: t('home.why_support'), 
      description: t('home.why_support_desc'),
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/30',
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
        <SectionHeader
          label="Why Choose Us"
          title="The Crown"
          titleHighlight="Advantage"
          subtitle="What sets us apart as the leading piping solutions provider in the Gulf"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <TiltCard intensity={5}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg ${feature.shadowColor}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
// FINAL CTA SECTION - Full Width with Gradient Background
// ═══════════════════════════════════════════════════════════════════════════════

function FinalCTASection() {
  const t = useT();

  return (
    <section className="relative py-12 md:py-14 overflow-hidden">
      <GradientMesh variant="emerald" />
      
      {/* Animated gradient overlay */}
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
      
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-emerald-200 text-sm font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Start?
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta_title')}
          </h2>
          
          <p className="text-emerald-100/90 text-lg mb-10 max-w-2xl mx-auto">
            {t('home.cta_subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton variant="outline" size="lg" className="!bg-white !text-emerald-700 hover:!bg-emerald-50">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </QuoteButton>
            <MagneticButton href="tel:+97142675678" variant="secondary" size="lg">
              <Phone className="w-5 h-5" />
              +971 4 267 5678
            </MagneticButton>
          </div>
          
          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-100/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>5,000+ Products</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  return (
    <>
      {/* Crown Hero - Blue/White/Black Palette */}
      <CrownHero />

      {/* 3D Logo Carousel - Trusted by Industry Leaders */}
      <LogoCarousel3D
        logos={clientLogos.slice(0, 12)}
        title="Trusted by Industry Leaders"
        subtitle="Partnering with the most prestigious developers and contractors across the Gulf region"
      />

      {/* Product Categories - Glass Grid */}
      <ProductCategoriesSection />

      {/* Stats Strip - Slow Horizontal Ticker with 8 Stats */}
      <NewStatsStripSection />

      {/* About Preview - Split Screen */}
      <AboutPreviewSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Final CTA */}
      <FinalCTASection />
    </>
  );
}
