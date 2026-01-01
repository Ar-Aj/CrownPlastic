'use client';

import Image from 'next/image';
import { useAnimateOnScroll } from './AnimateOnScroll';
import Icon, { IconName } from '../ui/Icon';

// Map emoji to icon names for certifications
const emojiToIconMap: Record<string, IconName> = {
  '✓': 'certified',
  '✔️': 'certified',
  '✅': 'check',
  '🌿': 'eco',
  '🏅': 'award',
  '📋': 'document',
  '🛡️': 'shield',
  '🚒': 'shield',
  '💧': 'water',
  '🏆': 'trophy',
};

// Certification image path mapping
const certificationImages: Record<string, string> = {
  'ISO 9001:2015': '/images/certifications/iso-9001-badge.png',
  'ISO 14001:2015': '/images/certifications/iso-14001-badge.png',
  'OHSAS 18001:2007': '/images/certifications/ohsas-18001-badge.png',
  'GSO Certified': '/images/certifications/gso-saso-badge.png',
  'SASO Approved': '/images/certifications/gso-saso-badge.png',
  'QCC Certified': '/images/certifications/qcc-badge.png',
  'UAE Civil Defense Approved': '/images/certifications/uae-civil-defense-badge.png',
  'Kitemark': '/images/certifications/kitemark-badge.png',
  'NSF Certified': '/images/certifications/nsf-badge.png',
};

interface Award {
  title: string;
  organization?: string;
  year?: string;
  icon?: string;
  iconName?: IconName;
  image?: string;
}

interface AwardsListProps {
  awards: Award[];
  title?: string;
}

export default function AwardsList({ awards, title = 'Awards & Certifications' }: AwardsListProps) {
  const { ref, isVisible, prefersReducedMotion } = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-12">
      {title && (
        <h2 
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: prefersReducedMotion ? 'none' : 'opacity 300ms ease-out, transform 300ms ease-out',
          }}
        >
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => {
          // Resolve icon from iconName, emoji mapping, or default
          const resolvedIconName = award.iconName || (award.icon && emojiToIconMap[award.icon]) || 'award';
          
          // Check if there's a certification image available
          const certImage = award.image || certificationImages[award.title];
          
          // Animation delay for stagger effect
          const animDelay = prefersReducedMotion ? 0 : index * 60;
          
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center card-hover hover:shadow-lg hover:border-primary/20 transition-all duration-200 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: prefersReducedMotion 
                  ? 'none' 
                  : `opacity 300ms ease-out ${animDelay}ms, transform 300ms ease-out ${animDelay}ms`,
              }}
            >
              {/* Certification image or icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                {certImage ? (
                  <Image
                    src={certImage}
                    alt={`${award.title} certification badge`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <Icon 
                    name={resolvedIconName} 
                    size={28} 
                    className="text-primary group-hover:text-accent transition-colors duration-200" 
                  />
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
                {award.title}
              </h3>
              {award.organization && (
                <p className="text-sm text-gray-500">{award.organization}</p>
              )}
              {award.year && (
                <p className="text-xs text-primary mt-2">{award.year}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
