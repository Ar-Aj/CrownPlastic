'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM B2B MARKET PAGE - Dubai Commercial Grade UI/UX
// Designed for luxury construction sector targeting Business Bay, Dubai Marina
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, Variants } from 'framer-motion';
import { 
  Award, Truck, BadgeDollarSign, Wrench, Phone, Mail, 
  ArrowRight, ChevronUp, Shield, CheckCircle2, Star,
  Building2, FileCheck, Zap, Package, ExternalLink
} from 'lucide-react';
import { RegionalMarket } from '@/config/markets';
import { BreadcrumbSchema } from '@/components/schemas';
import { LocalBusinessRatingSchema } from '@/components/schemas/ReviewSchema';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';

const baseUrl = 'https://crownplasticuae.com';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};

// Slide variants available for future use:
// const slideFromLeft: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
// const slideFromRight: Variants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATED COUNTER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3D TILT CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`${className} transition-shadow duration-300`}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENT MESH BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════════

function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-amber-500/20 to-orange-500/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-indigo-600/20 to-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLOATING PARTICLES
// ═══════════════════════════════════════════════════════════════════════════════

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GLASS STAT CARD
// ═══════════════════════════════════════════════════════════════════════════════

function GlassStatCard({ value, suffix, label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  return (
    <motion.div
      variants={scaleInVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <TiltCard className="group">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 overflow-hidden">
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-cyan-500/0 group-hover:from-amber-500/20 group-hover:via-transparent group-hover:to-cyan-500/20 transition-all duration-500" />
          
          <div className="relative text-center">
            <div className="text-4xl font-bold text-white mb-1">
              <AnimatedCounter value={value} suffix={suffix} />
            </div>
            <div className="text-blue-200/80 text-sm font-medium">{label}</div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATION BADGE
// ═══════════════════════════════════════════════════════════════════════════════

function CertificationBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 cursor-default">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-4 h-4 text-emerald-400" />
        </motion.div>
        <span className="text-sm font-medium text-gray-200">{name}</span>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
        Certified Compliant
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 -mt-1 border-r border-b border-white/10" />
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FEATURE CARD
// ═══════════════════════════════════════════════════════════════════════════════

const featureIcons: Record<string, React.ElementType> = {
  'Certified Quality': Award,
  'Fast Delivery': Truck,
  'Competitive Pricing': BadgeDollarSign,
  'Technical Support': Wrench,
};

function FeatureCard({ title, description, index }: { title: string; description: string; index: number }) {
  const Icon = featureIcons[title] || Award;
  
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard>
        <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[1px] rounded-2xl bg-white" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 animate-gradient-x" />
          </div>
          
          <div className="relative">
            {/* Icon */}
            <motion.div 
              className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DISTRICT TAG
// ═══════════════════════════════════════════════════════════════════════════════

function DistrictTag({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: '0 10px 30px -10px rgba(0, 114, 188, 0.3)'
      }}
      className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium cursor-default border border-blue-200/50 hover:border-blue-300 transition-colors"
    >
      {name}
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CARD
// ═══════════════════════════════════════════════════════════════════════════════

function ProductCard({ product, index, isPopular = false }: { 
  product: { name: string; href: string; desc: string }; 
  index: number;
  isPopular?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={product.href} className="group block h-full">
        <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 h-full overflow-hidden shadow-sm hover:shadow-lg">
          {/* Popular badge */}
          {isPopular && (
            <motion.div 
              className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 inline mr-1" />
              Popular
            </motion.div>
          )}
          
          {/* Icon placeholder */}
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors">
            <Package className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-3">{product.desc}</p>
          
          {/* View details link */}
          <div className="flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS BAR
// ═══════════════════════════════════════════════════════════════════════════════

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BACK TO TOP BUTTON
// ═══════════════════════════════════════════════════════════════════════════════

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center z-40 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAGNETIC BUTTON
// ═══════════════════════════════════════════════════════════════════════════════

function MagneticButton({ children, href, variant = 'primary', className = '' }: { 
  children: React.ReactNode; 
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-blue-900',
    outline: 'bg-white text-emerald-600 hover:bg-emerald-50 border-2 border-emerald-200',
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATED CHECKMARK
// ═══════════════════════════════════════════════════════════════════════════════

function AnimatedCheck({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.li 
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: 'spring', stiffness: 500 }}
      >
        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
      </motion.div>
      <span className="text-sm text-gray-600">{children}</span>
    </motion.li>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface MarketPageClientProps {
  market: RegionalMarket;
}

export default function MarketPageClient({ market }: MarketPageClientProps) {
  const pageUrl = `${baseUrl}/market/${market.slug}`;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Markets', url: `${baseUrl}/market` },
    { name: market.country, url: `${baseUrl}/market/${market.countryCode.toLowerCase()}` },
    ...(market.city ? [{ name: market.city, url: pageUrl }] : []),
    { name: market.title.split(' - ')[0], url: pageUrl },
  ];

  const products = [
    { name: 'UPVC Pressure Pipes', href: '/products/upvc-pressure', desc: 'BS EN 1452 certified' },
    { name: 'UPVC Drainage Pipes', href: '/products/upvc-drainage', desc: 'BS EN 1401 compliant' },
    { name: 'PPR Hot & Cold Pipes', href: '/products/ppr', desc: 'DIN 8077/8078 standard' },
    { name: 'HDPE Pipes', href: '/products/polyethylene', desc: 'ISO 4427 certified' },
    { name: 'PVC Conduit Pipes', href: '/products/pvc-conduit', desc: 'Electrical applications' },
    { name: 'UPVC Duct Pipes', href: '/products/upvc-duct', desc: 'Telecom & cable ducting' },
  ];

  const features = [
    {
      title: 'Certified Quality',
      description: `All products ${market.certifications.slice(0, 2).join(' & ')} certified`,
    },
    {
      title: 'Fast Delivery',
      description: `${market.deliveryTime} to ${market.city || market.country}`,
    },
    {
      title: 'Competitive Pricing',
      description: `Bulk discounts available in ${market.currency}`,
    },
    {
      title: 'Technical Support',
      description: 'Expert consultation for your projects',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessRatingSchema
        businessName={`Crown Plastic Pipes - ${market.city || market.country}`}
        city={market.city || market.country}
        pageUrl={pageUrl}
      />
      <TechnicalGuideSchema
        title={market.title}
        description={market.description}
        url={pageUrl}
        datePublished="2024-02-01"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={market.keywords}
        proficiencyLevel="Beginner"
      />

      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Back to Top */}
      <BackToTop />

      {/* Main Content */}
      <article className="min-h-screen bg-white">
        {/* ═══════════════════════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════════════════════ */}
        <header ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
          <GradientMesh />
          <FloatingParticles />
          
          <motion.div 
            className="container mx-auto px-4 max-w-7xl relative z-10 py-24"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            {/* Breadcrumb */}
            <motion.nav 
              className="text-sm mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ol className="flex flex-wrap items-center gap-2 text-blue-200/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-blue-300/40">/</li>
                <li><Link href="/market" className="hover:text-white transition-colors">Markets</Link></li>
                <li className="text-blue-300/40">/</li>
                <li><Link href={`/market/${market.countryCode.toLowerCase()}`} className="hover:text-white transition-colors">{market.country}</Link></li>
                {market.city && (
                  <>
                    <li className="text-blue-300/40">/</li>
                    <li className="text-white font-medium">{market.city}</li>
                  </>
                )}
              </ol>
            </motion.nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Badges */}
                <motion.div 
                  className="flex flex-wrap items-center gap-3 mb-6"
                  variants={fadeUpVariant}
                >
                  <span className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 text-sm font-medium px-4 py-2 rounded-full border border-emerald-500/30">
                    <Shield className="w-4 h-4" />
                    {market.certifications[0]}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm px-4 py-2 rounded-full border border-blue-500/30">
                    <Zap className="w-4 h-4" />
                    {market.deliveryTime}
                  </span>
                </motion.div>

                {/* Title with gradient */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  variants={fadeUpVariant}
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {market.title.split(' for ')[0]}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                    {market.title.includes(' for ') ? `for ${market.title.split(' for ')[1]}` : ''}
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-blue-100/80 mb-8 max-w-xl leading-relaxed"
                  variants={fadeUpVariant}
                >
                  {market.description}
                </motion.p>

                {/* CTAs */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={fadeUpVariant}
                >
                  <MagneticButton href={market.cta.link} variant="primary">
                    {market.cta.text}
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  <MagneticButton href={`tel:${market.telephone}`} variant="secondary">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </MagneticButton>
                </motion.div>
              </motion.div>

              {/* Right Column - Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <GlassStatCard value={30} suffix="+" label="Years Experience" delay={0.3} />
                <GlassStatCard value={4.8} suffix="★" label="Customer Rating" delay={0.4} />
                <GlassStatCard value={market.certifications.length} label="Certifications" delay={0.5} />
                <GlassStatCard value={24} suffix="/7" label="Support Available" delay={0.6} />
              </div>
            </div>
          </motion.div>
        </header>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            CERTIFICATIONS BAR
        ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-8 border-y border-white/10">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {market.certifications.map((cert, index) => (
                <CertificationBadge key={cert} name={cert} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            MAIN CONTENT GRID
        ═══════════════════════════════════════════════════════════════════════════════ */}
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2/3 */}
            <div className="lg:col-span-2 space-y-20">
              
              {/* Why Choose Us Section */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Premium Quality for{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {market.city || market.country}
                    </span>
                  </h2>
                </motion.div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <FeatureCard key={feature.title} {...feature} index={index} />
                  ))}
                </div>
              </section>

              {/* Service Areas */}
              {market.districts && (
                <section>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Coverage Area</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                      Delivering to{' '}
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {market.city || market.country}
                      </span>
                    </h2>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-3">
                    {market.districts.map((district, index) => (
                      <DistrictTag key={district} name={district} index={index} />
                    ))}
                  </div>
                </section>
              )}

              {/* Products Grid */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Premium Piping Solutions
                  </h2>
                </motion.div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {products.map((product, index) => (
                    <ProductCard 
                      key={product.name} 
                      product={product} 
                      index={index}
                      isPopular={index === 0}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════════════════
                STICKY SIDEBAR
            ═══════════════════════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-1">
              <motion.div 
                className="sticky top-24 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Contact Card */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Get a Quote</h3>
                        <p className="text-blue-200/70 text-sm">Fast response guaranteed</p>
                      </div>
                    </div>
                    
                    <p className="text-blue-100/80 mb-6 text-sm leading-relaxed">
                      Contact us for {market.city || market.country} pricing, bulk discounts, and delivery options.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <motion.a
                        href={`tel:${market.telephone}`}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{market.telephone}</p>
                          <p className="text-blue-200/50 text-xs">Available 24/7</p>
                        </div>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:info@crownplasticuae.com"
                        className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">info@crownplasticuae.com</p>
                          <p className="text-blue-200/50 text-xs">Response within 2 hours</p>
                        </div>
                      </motion.a>
                    </div>

                    <MagneticButton href={market.cta.link} variant="primary" className="w-full justify-center">
                      {market.cta.text}
                      <ArrowRight className="w-5 h-5" />
                    </MagneticButton>
                  </div>
                </div>

                {/* Delivery Info Card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Delivery Information</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <AnimatedCheck delay={0}>Delivery: {market.deliveryTime}</AnimatedCheck>
                    <AnimatedCheck delay={0.1}>Currency: {market.currency}</AnimatedCheck>
                    <AnimatedCheck delay={0.2}>Free shipping on bulk orders</AnimatedCheck>
                    <AnimatedCheck delay={0.3}>Full export documentation</AnimatedCheck>
                  </ul>
                </div>

                {/* Resources Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Resources</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      { href: '/technical/bs-en-1452-complete-guide', text: 'BS EN 1452 Guide' },
                      { href: '/technical/gso-saso-compliance-guide', text: 'GSO/SASO Compliance' },
                      { href: '/support/faqs', text: 'Technical FAQs' },
                      { href: '/resources', text: 'Downloads & Catalogues' },
                    ].map((link, i) => (
                      <motion.li 
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link 
                          href={link.href} 
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium group"
                        >
                          <span>{link.text}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            BOTTOM CTA SECTION
        ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" />
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
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
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
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                  {market.city || market.country}
                </span>{' '}
                Project
              </h2>
              
              <p className="text-emerald-100/90 text-lg mb-10 max-w-2xl mx-auto">
                Contact our {market.country} sales team for competitive pricing, bulk discounts, 
                and premium delivery to your project location.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton href={market.cta.link} variant="outline">
                  {market.cta.text}
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton href={`tel:${market.telephone}`} variant="secondary" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-emerald-700">
                  <Phone className="w-5 h-5" />
                  {market.telephone}
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
      </article>
    </>
  );
}
