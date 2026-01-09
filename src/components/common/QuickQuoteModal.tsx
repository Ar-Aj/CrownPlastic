'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// QUICK QUOTE MODAL COMPONENT
// Lightweight conversion modal with 3-field form + WhatsApp integration
// Uses framer-motion for animations (no additional dependencies)
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Send, Phone, User, Package, CheckCircle, Loader2 } from 'lucide-react';
import { brand } from '@/config/brand';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 400 
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 } 
  },
};

const inputVariants: Variants = {
  focus: { scale: 1.02 },
  blur: { scale: 1 },
};

// ═══════════════════════════════════════════════════════════════════════════════
// CONTEXT FOR MODAL STATE
// ═══════════════════════════════════════════════════════════════════════════════

interface QuoteModalContextValue {
  isOpen: boolean;
  openModal: (product?: string) => void;
  closeModal: () => void;
  prefilledProduct: string;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider');
  }
  return context;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROVIDER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState('');

  const openModal = useCallback((product?: string) => {
    setPrefilledProduct(product || '');
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, prefilledProduct }}>
      {children}
      <QuickQuoteModal />
    </QuoteModalContext.Provider>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FORM INTERFACE
// ═══════════════════════════════════════════════════════════════════════════════

interface QuoteFormData {
  name: string;
  phone: string;
  product: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN MODAL COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function QuickQuoteModal() {
  const { isOpen, closeModal, prefilledProduct } = useQuoteModal();
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    product: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Update product when modal opens with prefilled value
  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: '', phone: '', product: '' });
        setStatus('idle');
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    try {
      // In production, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Optionally send to API
      // await fetch('/api/quote', { method: 'POST', body: JSON.stringify(formData) });
      
      setStatus('success');
      
      // Redirect to WhatsApp after short delay
      setTimeout(() => {
        const phone = brand.contact.phone.replace(/[^0-9+]/g, '').replace('+', '');
        const message = `Hello! I'm ${formData.name}. I'm interested in: ${formData.product || 'your products'}. Please contact me at ${formData.phone}.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        closeModal();
      }, 1500);
      
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary via-primary-dark to-blue-900" />
                
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Content */}
                <div className="relative pt-6 pb-8 px-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
                      {status === 'success' ? (
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                      ) : (
                        <Send className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <h2 
                      id="quote-modal-title"
                      className="text-2xl font-bold text-white"
                    >
                      {status === 'success' ? 'Request Sent!' : 'Get a Quick Quote'}
                    </h2>
                    <p className="text-blue-100 text-sm mt-1">
                      {status === 'success' 
                        ? 'Redirecting to WhatsApp...' 
                        : 'Fill in your details and we\'ll contact you within 2 hours'}
                    </p>
                  </div>
                  
                  {/* Form */}
                  {status !== 'success' && (
                    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                      {/* Name Input */}
                      <motion.div
                        variants={inputVariants}
                        animate={focusedField === 'name' ? 'focus' : 'blur'}
                      >
                        <label htmlFor="quote-name" className="sr-only">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="quote-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="Your Name *"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          />
                        </div>
                      </motion.div>
                      
                      {/* Phone Input */}
                      <motion.div
                        variants={inputVariants}
                        animate={focusedField === 'phone' ? 'focus' : 'blur'}
                      >
                        <label htmlFor="quote-phone" className="sr-only">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            id="quote-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="Phone Number * (e.g., +971 50 123 4567)"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          />
                        </div>
                      </motion.div>
                      
                      {/* Product Interest */}
                      <motion.div
                        variants={inputVariants}
                        animate={focusedField === 'product' ? 'focus' : 'blur'}
                      >
                        <label htmlFor="quote-product" className="sr-only">Product Interest</label>
                        <div className="relative">
                          <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            id="quote-product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('product')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select Product (Optional)</option>
                            <option value="UPVC Pressure Pipes">UPVC Pressure Pipes</option>
                            <option value="UPVC Drainage Pipes">UPVC Drainage Pipes</option>
                            <option value="PPR Pipes">PPR Hot & Cold Pipes</option>
                            <option value="HDPE Pipes">HDPE Pipes</option>
                            <option value="PVC Conduit">PVC Conduit Pipes</option>
                            <option value="UPVC Duct">UPVC Duct Pipes</option>
                            <option value="Fittings">Fittings & Accessories</option>
                            <option value="Other">Other / Multiple Products</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Get Quote via WhatsApp
                          </>
                        )}
                      </motion.button>
                      
                      {/* Error message */}
                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-red-600 text-sm"
                        >
                          Something went wrong. Please try again.
                        </motion.p>
                      )}
                    </form>
                  )}
                  
                  {/* Success state */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4"
                    >
                      <p className="text-gray-600">
                        Opening WhatsApp to complete your inquiry...
                      </p>
                      <div className="mt-4">
                        <div className="w-8 h-8 mx-auto border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Trust indicators */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        Fast Response
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        No Spam
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        Secure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TRIGGER BUTTON COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface QuoteButtonProps {
  children?: ReactNode;
  product?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function QuoteButton({ 
  children = 'Get a Quote',
  product,
  variant = 'primary',
  size = 'md',
  className = '',
}: QuoteButtonProps) {
  const { openModal } = useQuoteModal();

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all';
  
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40',
    secondary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      onClick={() => openModal(product)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default QuickQuoteModal;
