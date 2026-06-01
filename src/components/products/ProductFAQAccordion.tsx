'use client';

import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { type ProductDetailConfig } from '@/types/productDetail';
import { ProductSection, ProductSectionHeader, ProductCardSurface } from '@/components/products/design-system';
import { useLanguage } from '@/context/LanguageContext';

interface ProductFAQAccordionProps {
  product: ProductDetailConfig;
}

export function ProductFAQAccordion({ product }: ProductFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // Generate Q&A pairs — hand-authored take priority over auto-generated
  const qaPairs: { question: string; answerLines: string[] }[] = [];

  if (product.faqs && product.faqs.length > 0) {
    // ── PRIORITY: Hand-authored AEO FAQs with bilingual support ────────
    for (const faq of product.faqs) {
      qaPairs.push({
        question: isAr ? faq.qAr : faq.q,
        answerLines: [(isAr ? faq.aAr : faq.a)],
      });
    }
  } else {
    // ── FALLBACK: Auto-generated from features + dosDonts ─────────────
    const title = isAr ? (product.titleAr || product.title) : product.title;
    const features = isAr ? (product.featuresAr || product.features) : product.features;
    const dos = isAr ? (product.dosDontsAr?.dos || product.dosDonts?.dos) : product.dosDonts?.dos;
    const donts = isAr ? (product.dosDontsAr?.donts || product.dosDonts?.donts) : product.dosDonts?.donts;

    if (features && features.length > 0) {
      qaPairs.push({
        question: isAr ? `ما هي الميزات الرئيسية لـ ${title}؟` : `What are the key features of ${title}?`,
        answerLines: features,
      });
    }

    if (dos && dos.length > 0) {
      qaPairs.push({
        question: isAr ? `ما هي أفضل ممارسات التركيب لـ ${title}؟` : `What are the installation best practices for ${title}?`,
        answerLines: dos,
      });
    }

    if (donts && donts.length > 0) {
      qaPairs.push({
        question: isAr ? `ما الأخطاء التي يجب تجنبها عند استخدام ${title}؟` : `What mistakes should be avoided when using ${title}?`,
        answerLines: donts,
      });
    }
  }

  if (qaPairs.length === 0) return null;

  return (
    <ProductSection id="frequently-asked-questions" background="white" size="md">
      <ProductSectionHeader 
        title={isAr ? 'الأسئلة الشائعة التقنية' : 'Technical FAQs'} 
        subtitle={isAr ? 'إجابات على الأسئلة الشائعة حول هذا المنتج' : 'Answers to common questions about this product'}
      />
      
      <div className="w-full space-y-4">
        {qaPairs.map((pair, index) => {
          const isOpen = openIndex === index;
          
          return (
            <ProductCardSurface 
              key={index} 
              variant="elevated" 
              padding="none"
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-primary/20' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-primary'}`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 pr-8">{pair.question}</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 pl-20 bg-white">
                  {pair.answerLines.length === 1 ? (
                    <p className="text-slate-600 leading-relaxed">{pair.answerLines[0]}</p>
                  ) : (
                    <ul className="space-y-2">
                      {pair.answerLines.map((line, lineIndex) => (
                        <li key={lineIndex} className="flex items-start gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ProductCardSurface>
          );
        })}
      </div>
    </ProductSection>
  );
}
