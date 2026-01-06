'use client';

// FAQ Page Client Component
// Renders FAQ content with FAQPage schema and interactive features

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { FAQPageSchema } from '@/components/schemas/FAQPageSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { FAQItem } from '@/config/faqs';

interface FAQPageClientProps {
  faqs: FAQItem[];
}

const clusterConfig = {
  'technical-standards': {
    title: 'Technical Standards & Specifications',
    titleAr: 'المعايير الفنية والمواصفات',
    icon: 'document' as const,
    description: 'Standards like BS EN 1452, DIN 8062, pressure ratings, and specifications',
  },
  'installation-maintenance': {
    title: 'Installation & Maintenance',
    titleAr: 'التركيب والصيانة',
    icon: 'tool' as const,
    description: 'How-to guides for installing, maintaining, and troubleshooting pipes',
  },
  'comparison-selection': {
    title: 'Product Comparison & Selection',
    titleAr: 'مقارنة واختيار المنتجات',
    icon: 'compare' as const,
    description: 'Compare UPVC vs PVC vs PPR, select the right pipe for your project',
  },
};

export default function FAQPageClient({ faqs }: FAQPageClientProps) {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCluster, setActiveCluster] = useState<FAQItem['cluster'] | 'all'>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCluster = activeCluster === 'all' || faq.cluster === activeCluster;
      const matchesSearch = searchTerm === '' || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.targetKeywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCluster && matchesSearch;
    });
  }, [faqs, activeCluster, searchTerm]);

  const faqsByCluster = useMemo(() => {
    const grouped: Record<FAQItem['cluster'], FAQItem[]> = {
      'technical-standards': [],
      'installation-maintenance': [],
      'comparison-selection': [],
    };
    filteredFAQs.forEach(faq => {
      grouped[faq.cluster].push(faq);
    });
    return grouped;
  }, [filteredFAQs]);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <>
      {/* Schemas */}
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Support', url: 'https://crownplasticuae.com/support' },
        { name: 'FAQs', url: 'https://crownplasticuae.com/support/faqs' },
      ]} />

      <PageHeader
        title={language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        subtitle={language === 'ar' 
          ? 'إجابات الخبراء على أسئلتك حول أنابيب UPVC و PPR و HDPE'
          : 'Expert answers to your questions about UPVC, PPR, and HDPE pipes'}
        breadcrumbs={[
          { label: language === 'ar' ? 'الدعم' : 'Support' },
          { label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQs' },
        ]}
      />

      {/* Stats Strip */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-white/80">{language === 'ar' ? 'سؤال وجواب' : 'Q&As Answered'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-white/80">{language === 'ar' ? 'فئات' : 'Topic Clusters'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-white/80">{language === 'ar' ? 'سنوات خبرة' : 'Years Expertise'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">{language === 'ar' ? 'دعم' : 'Support'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder={language === 'ar' ? 'ابحث في الأسئلة الشائعة...' : 'Search FAQs...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Icon name="search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Cluster Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveCluster('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCluster === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {language === 'ar' ? 'الكل' : 'All'} ({faqs.length})
              </button>
              {(Object.keys(clusterConfig) as FAQItem['cluster'][]).map(cluster => (
                <button
                  key={cluster}
                  onClick={() => setActiveCluster(cluster)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCluster === cluster
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {language === 'ar' ? clusterConfig[cluster].titleAr : clusterConfig[cluster].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="search" size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">
                  {language === 'ar' 
                    ? 'لم يتم العثور على نتائج. حاول البحث بكلمات مختلفة.'
                    : 'No results found. Try different search terms.'}
                </p>
              </div>
            ) : activeCluster === 'all' ? (
              // Show grouped by cluster
              (Object.keys(clusterConfig) as FAQItem['cluster'][]).map(cluster => (
                faqsByCluster[cluster].length > 0 && (
                  <AnimateOnScroll key={cluster} animation="fade-up">
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Icon name={clusterConfig[cluster].icon} size={28} className="text-primary" />
                        {language === 'ar' ? clusterConfig[cluster].titleAr : clusterConfig[cluster].title}
                      </h2>
                      <div className="space-y-4">
                        {faqsByCluster[cluster].map(faq => (
                          <FAQAccordion
                            key={faq.id}
                            faq={faq}
                            isExpanded={expandedFAQ === faq.id}
                            onToggle={() => toggleFAQ(faq.id)}
                            language={language}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )
              ))
            ) : (
              // Show flat list for filtered cluster
              <div className="space-y-4">
                {filteredFAQs.map(faq => (
                  <AnimateOnScroll key={faq.id} animation="fade-up">
                    <FAQAccordion
                      faq={faq}
                      isExpanded={expandedFAQ === faq.id}
                      onToggle={() => toggleFAQ(faq.id)}
                      language={language}
                    />
                  </AnimateOnScroll>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ar' ? 'لم تجد إجابتك؟' : "Didn't Find Your Answer?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'فريقنا الفني متاح للإجابة على أسئلتك المحددة وتقديم التوجيه لمشروعك.'
              : 'Our technical team is available to answer your specific questions and provide guidance for your project.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <Icon name="arrow" size={20} className="rtl:rotate-180" />
            </Link>
            <Link
              href="/technical"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              {language === 'ar' ? 'الأدلة الفنية' : 'Technical Guides'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// FAQ Accordion Component
interface FAQAccordionProps {
  faq: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
  language: 'en' | 'ar';
}

function FAQAccordion({ faq, isExpanded, onToggle, language }: FAQAccordionProps) {
  return (
    <div 
      id={faq.id}
      className={`border rounded-lg transition-all ${
        isExpanded ? 'border-primary shadow-md' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        aria-expanded={isExpanded}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {language === 'ar' ? faq.questionAr : faq.question}
        </h3>
        <Icon 
          name={isExpanded ? 'minus' : 'plus'} 
          size={24} 
          className={`flex-shrink-0 transition-colors ${isExpanded ? 'text-primary' : 'text-gray-400'}`}
        />
      </button>
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="prose prose-gray max-w-none">
            <div 
              className="text-gray-600 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ 
                __html: (language === 'ar' ? faq.answerAr : faq.answer)
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n/g, '<br/>')
              }}
            />
          </div>
          {faq.targetKeywords.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {faq.targetKeywords.slice(0, 4).map(keyword => (
                  <span 
                    key={keyword}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
