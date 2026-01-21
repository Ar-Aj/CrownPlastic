'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { heroFacts, heroPills, type HeroFact } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT HERO - Interactive Story Header
// Features: Stepper tabs for 3 facts, animated pills, full-bleed image
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function AboutHero() {
  const [activeFact, setActiveFact] = useState<string>(heroFacts[0].id);
  const prefersReducedMotion = useReducedMotion();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate facts every 6 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      setActiveFact((prev) => {
        const currentIndex = heroFacts.findIndex((f) => f.id === prev);
        const nextIndex = (currentIndex + 1) % heroFacts.length;
        return heroFacts[nextIndex].id;
      });
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReducedMotion]);

  // Pause auto-rotate on manual interaction
  const handleFactClick = (factId: string) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveFact(factId);
  };

  const currentFact = heroFacts.find((f) => f.id === activeFact) || heroFacts[0];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[600px] lg:min-h-[700px]">
            {/* Left: Content Column */}
            <div className="flex flex-col justify-center py-12 lg:py-20 lg:pr-12">
              {/* Breadcrumb */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <span className="text-sm text-gray-500">
                  Home / <span className="text-primary font-medium">About Us</span>
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Crown Plastic Pipes
                <span className="block text-primary">Factory L.L.C.</span>
              </motion.h1>

              {/* Stepper Tabs */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {heroFacts.map((fact, index) => (
                    <FactTab
                      key={fact.id}
                      fact={fact}
                      isActive={fact.id === activeFact}
                      onClick={() => handleFactClick(fact.id)}
                      index={index}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ))}
                </div>

                {/* Animated Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFact.id}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[120px]"
                  >
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {currentFact.subtitle}
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-xl">
                      {currentFact.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 mb-8">
                {heroFacts.map((fact) => (
                  <div
                    key={fact.id}
                    className={cn(
                      'h-1 rounded-full transition-all duration-300',
                      fact.id === activeFact ? 'w-8 bg-primary' : 'w-4 bg-gray-200'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right: Image Column */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-[500px] lg:h-full w-full overflow-hidden rounded-2xl lg:rounded-none"
              >
                {/* Blue gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10" />
                
                <Image
                  src="/images/about/factory-hero.jpeg"
                  alt="Crown Plastic Pipes manufacturing facility in Sharjah, UAE"
                  width={1200}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Dark Blue Accent Corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/90 hidden lg:block" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Pills Strip */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {heroPills.map((pill, index) => (
              <motion.div
                key={pill.label}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-primary text-primary text-sm font-medium shadow-sm">
                  <Icon name={pill.icon} size={16} />
                  <span>{pill.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FACT TAB COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface FactTabProps {
  fact: HeroFact;
  isActive: boolean;
  onClick: () => void;
  index: number;
  prefersReducedMotion: boolean | null;
}

function FactTab({ fact, isActive, onClick, index, prefersReducedMotion }: FactTabProps) {
  return (
    <motion.button
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        isActive
          ? 'bg-primary text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      )}
    >
      {fact.label}
    </motion.button>
  );
}
