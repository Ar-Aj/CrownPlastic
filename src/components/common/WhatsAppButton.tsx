'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// WHATSAPP FLOATING BUTTON COMPONENT
// Sticky WhatsApp CTA with pulse animation and smart visibility
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { brand } from '@/config/brand';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

const buttonVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 25 
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20,
    transition: { duration: 0.2 } 
  },
};

const tooltipVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 10,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.2,
      delay: 0.1 
    } 
  },
  exit: { 
    opacity: 0, 
    x: 10,
    scale: 0.95,
    transition: { duration: 0.15 } 
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// WHATSAPP ICON SVG
// ═══════════════════════════════════════════════════════════════════════════════

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface WhatsAppButtonProps {
  /** Custom phone number (defaults to brand.contact.phone) */
  phoneNumber?: string;
  /** Pre-filled message */
  message?: string;
  /** Show after scrolling this many pixels (0 = always show) */
  showAfterScroll?: number;
  /** Position on screen */
  position?: 'bottom-right' | 'bottom-left';
  /** Show tooltip on hover */
  showTooltip?: boolean;
  /** Tooltip text */
  tooltipText?: string;
  /** Show pulse animation */
  showPulse?: boolean;
  /** Hide on specific routes */
  hideOnRoutes?: string[];
}

export default function WhatsAppButton({
  phoneNumber,
  message = 'Hello! I would like to inquire about your products.',
  showAfterScroll = 200,
  position = 'bottom-right',
  showTooltip = true,
  tooltipText = 'Chat with us on WhatsApp',
  showPulse = true,
  hideOnRoutes = [],
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(showAfterScroll === 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Get phone number (remove spaces and special chars except +)
  const phone = (phoneNumber || brand.contact.phone).replace(/[^0-9+]/g, '');
  
  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  // Tooltip position classes
  const tooltipPositionClasses = {
    'bottom-right': 'right-full mr-3',
    'bottom-left': 'left-full ml-3',
  };

  // Handle scroll visibility
  useEffect(() => {
    if (showAfterScroll === 0) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const shouldShow = window.scrollY > showAfterScroll;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  // Check if current route should hide button
  useEffect(() => {
    if (hideOnRoutes.length === 0) return;
    
    const currentPath = window.location.pathname;
    const shouldHide = hideOnRoutes.some(route => currentPath.startsWith(route));
    
    if (shouldHide) {
      setIsVisible(false);
    }
  }, [hideOnRoutes]);

  // Don't render if dismissed
  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          className={`fixed ${positionClasses[position]} z-50 flex items-center gap-2`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          {showTooltip && (
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`absolute ${tooltipPositionClasses[position]} whitespace-nowrap`}
                >
                  <div className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      {tooltipText}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Main Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            aria-label="Contact us on WhatsApp"
          >
            {/* Pulse animation rings */}
            {showPulse && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20" style={{ animationDelay: '0.5s' }} />
              </>
            )}
            
            {/* Button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300">
              <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            
            {/* Online indicator */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full" />
            </span>
          </motion.a>

          {/* Dismiss button (optional, hidden by default) */}
          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDismissed(true);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors shadow-lg"
                aria-label="Dismiss WhatsApp button"
              >
                <X className="w-3 h-3" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPACT VARIANT (For inline use)
// ═══════════════════════════════════════════════════════════════════════════════

export function WhatsAppInlineButton({ 
  phoneNumber,
  message = 'Hello! I would like to inquire about your products.',
  text = 'WhatsApp Us',
  className = '',
}: {
  phoneNumber?: string;
  message?: string;
  text?: string;
  className?: string;
}) {
  const phone = (phoneNumber || brand.contact.phone).replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      {text}
    </motion.a>
  );
}
