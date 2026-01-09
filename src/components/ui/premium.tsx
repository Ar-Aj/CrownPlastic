'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM UI COMPONENTS
// Extracted from MarketPageClient - Reusable across site
// GPU-accelerated animations, 60fps, <50KB bundle impact
// ═══════════════════════════════════════════════════════════════════════════════

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { scaleIn, fadeUp, noiseTexture } from '@/lib/design-system';

// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENT MESH BACKGROUND
// Premium animated gradient orbs with noise texture
// ═══════════════════════════════════════════════════════════════════════════════

interface GradientMeshProps {
  variant?: 'dark' | 'light' | 'emerald';
  className?: string;
}

export function GradientMesh({ variant = 'dark', className = '' }: GradientMeshProps) {
  const baseGradients = {
    dark: 'from-slate-900 via-blue-950 to-slate-900',
    light: 'from-slate-50 via-blue-50 to-slate-50',
    emerald: 'from-emerald-900 via-teal-900 to-emerald-900',
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Primary gradient mesh */}
      <div className={`absolute inset-0 bg-gradient-to-br ${baseGradients[variant]}`} />
      
      {/* Animated gradient orbs - GPU accelerated with transform only */}
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
      <div 
        className="absolute inset-0 opacity-50" 
        style={{ backgroundImage: noiseTexture }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLOATING PARTICLES
// Light animated particles for depth - max 20 for performance
// ═══════════════════════════════════════════════════════════════════════════════

interface FloatingParticlesProps {
  count?: number;
  color?: string;
}

export function FloatingParticles({ count = 20, color = 'bg-white/20' }: FloatingParticlesProps) {
  // Generate stable positions on mount
  const particles = React.useMemo(() => 
    [...Array(Math.min(count, 30))].map((_, i) => ({
      left: `${(i * 37) % 100}%`,
      top: `${(i * 53) % 100}%`,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.5,
    })), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${color} rounded-full`}
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3D TILT CARD
// Interactive card with mouse-follow 3D rotation
// ═══════════════════════════════════════════════════════════════════════════════

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Default 7.5
}

export function TiltCard({ children, className = '', intensity = 7.5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

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
// ANIMATED COUNTER (Odometer Effect)
// Count-up animation with easing
// ═══════════════════════════════════════════════════════════════════════════════

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // Cubic ease out for premium feel
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// GLASS STAT CARD
// Glass morphism card with animated counter
// ═══════════════════════════════════════════════════════════════════════════════

interface GlassStatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  icon?: React.ReactNode;
}

export function GlassStatCard({ value, suffix = '', label, delay = 0, icon }: GlassStatCardProps) {
  return (
    <motion.div
      variants={scaleIn}
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
            {icon && (
              <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {icon}
              </div>
            )}
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
// MAGNETIC BUTTON
// Button that follows cursor slightly for magnetic effect
// ═══════════════════════════════════════════════════════════════════════════════

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function MagneticButton({ 
  children, 
  href, 
  onClick,
  variant = 'primary', 
  size = 'md',
  className = '',
  icon,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-blue-900',
    outline: 'bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5',
    success: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  const motionProps = {
    ref,
    style: { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: baseStyles,
  };

  if (href) {
    return (
      <motion.a {...motionProps} href={href}>
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {children}
      {icon}
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS BAR
// Fixed header progress indicator
// ═══════════════════════════════════════════════════════════════════════════════

import { useScroll } from 'framer-motion';

export function ScrollProgress() {
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
// SECTION HEADER
// Consistent section header with label, title, subtitle
// ═══════════════════════════════════════════════════════════════════════════════

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeader({ 
  label, 
  title, 
  titleHighlight,
  subtitle, 
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 ${alignClass}`}
    >
      {label && (
        <span className={`text-sm font-semibold uppercase tracking-wider ${dark ? 'text-blue-400' : 'text-primary'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}{' '}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg mt-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATED CHECKMARK LIST ITEM
// ═══════════════════════════════════════════════════════════════════════════════

import { CheckCircle2 } from 'lucide-react';

interface AnimatedCheckProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedCheck({ children, delay = 0 }: AnimatedCheckProps) {
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
// PARALLAX SECTION WRAPPER
// Scroll-based parallax effect for section backgrounds
// ═══════════════════════════════════════════════════════════════════════════════

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0.1 to 0.5 recommended
}

export function ParallaxSection({ children, className = '', speed = 0.2 }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.section ref={ref} className={`relative ${className}`} style={{ y }}>
      {children}
    </motion.section>
  );
}

// Export types for external use
export type { 
  GradientMeshProps, 
  FloatingParticlesProps, 
  TiltCardProps, 
  AnimatedCounterProps,
  GlassStatCardProps,
  MagneticButtonProps,
  SectionHeaderProps,
};
