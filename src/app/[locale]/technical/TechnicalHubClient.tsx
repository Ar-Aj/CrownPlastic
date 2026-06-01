'use client';

import Link from '@/components/common/LocaleLink';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import type { IconName } from '@/components/ui/Icon';

const baseUrl = 'https://crownplasticuae.com';

interface TechnicalGuide {
  slug: string;
  icon: IconName;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  category: 'standards' | 'comparison' | 'installation' | 'commercial';
}

const guides: TechnicalGuide[] = [
  // Standards & Certifications
  {
    slug: 'bs-en-1452-complete-guide',
    icon: 'certified',
    titleEn: 'BS EN 1452 Standard: Complete Guide',
    titleAr: 'دليل معيار BS EN 1452 الشامل',
    descEn: 'European standard for UPVC pressure pipes — MRS 25 MPa, PN ratings, dimensions, testing.',
    descAr: 'المعيار الأوروبي لأنابيب UPVC للضغط — MRS 25 ميجا باسكال، تصنيفات الضغط، الأبعاد، الاختبارات.',
    category: 'standards',
  },
  {
    slug: 'certifications-compliance-guide',
    icon: 'award',
    titleEn: 'Certifications & Compliance Guide',
    titleAr: 'دليل الشهادات والامتثال',
    descEn: 'ISO 9001:2015, ISO 14001, and international certifications for pipe manufacturing.',
    descAr: 'شهادات ISO 9001:2015 و ISO 14001 والاعتمادات الدولية لتصنيع الأنابيب.',
    category: 'standards',
  },
  // Comparisons
  {
    slug: 'upvc-vs-pvc-vs-ppr-comparison',
    icon: 'compare',
    titleEn: 'UPVC vs PVC vs PPR Comparison',
    titleAr: 'مقارنة UPVC مقابل PVC مقابل PPR',
    descEn: 'Complete material comparison guide — properties, costs, and ideal applications.',
    descAr: 'دليل مقارنة شامل للمواد — الخصائص والتكاليف والتطبيقات المثالية.',
    category: 'comparison',
  },
  {
    slug: 'hdpe-vs-upvc-municipal-infrastructure-gcc',
    icon: 'compare',
    titleEn: 'HDPE vs UPVC for GCC Municipal Infrastructure',
    titleAr: 'HDPE مقابل UPVC للبنية التحتية البلدية في الخليج',
    descEn: 'Flexibility, jointing methods, pressure ratings, and desert climate performance.',
    descAr: 'المرونة، طرق الوصل، تصنيفات الضغط، والأداء في المناخ الصحراوي.',
    category: 'comparison',
  },
  // Installation & Sizing
  {
    slug: 'upvc-installation-best-practices',
    icon: 'tools',
    titleEn: 'UPVC Installation Best Practices',
    titleAr: 'أفضل ممارسات تركيب UPVC',
    descEn: 'Step-by-step installation guide for UPVC pressure and drainage systems.',
    descAr: 'دليل التركيب خطوة بخطوة لأنظمة UPVC للضغط والصرف.',
    category: 'installation',
  },
  {
    slug: 'upvc-pipe-sizing-calculator-guide',
    icon: 'gauge',
    titleEn: 'UPVC Pipe Sizing Calculator Guide',
    titleAr: 'دليل حاسبة مقاسات أنابيب UPVC',
    descEn: 'How to select the right pipe diameter for your flow rate and pressure requirements.',
    descAr: 'كيفية اختيار القطر المناسب وفق معدل التدفق ومتطلبات الضغط.',
    category: 'installation',
  },
  // Commercial / BOFU
  {
    slug: 'pvc-pressure-pipe-specs-prices-dubai',
    icon: 'pressure',
    titleEn: 'PVC Pressure Pipe Specs & Prices in Dubai',
    titleAr: 'مواصفات أنابيب PVC للضغط العالي وأسعارها في دبي',
    descEn: 'PN10 vs PN16 comparison, Dubai high-rise requirements, and procurement guide.',
    descAr: 'مقارنة PN10 مقابل PN16، متطلبات أبراج دبي، ودليل التوريد.',
    category: 'commercial',
  },
  {
    slug: 'upvc-drainage-pipes-saline-soil-abu-dhabi',
    icon: 'water',
    titleEn: 'UPVC Drainage Pipes for Saline Soil — Abu Dhabi & GCC',
    titleAr: 'أنابيب UPVC للصرف في التربة الملحية — أبوظبي ودول الخليج',
    descEn: 'Chemical resistance, BS EN 1401 compliance, and sabkha soil installation practices.',
    descAr: 'المقاومة الكيميائية، معيار BS EN 1401، وممارسات التركيب في السبخة.',
    category: 'commercial',
  },
  {
    slug: 'dubai-municipality-compliant-ppr-pipes',
    icon: 'shield',
    titleEn: 'Dubai Municipality Compliant PPR Pipes / Fittings',
    titleAr: 'أنابيب PPR المعتمدة من بلدية دبي',
    descEn: "Contractor's guide — municipality approval, heat fusion welding, DIN 8077/8078.",
    descAr: 'دليل المقاول — اعتماد البلدية، اللحام الحراري، معيار DIN 8077/8078.',
    category: 'commercial',
  },
];

const categoryLabels = {
  standards: { en: 'Standards & Certifications', ar: 'المعايير والشهادات' },
  comparison: { en: 'Material Comparisons', ar: 'مقارنات المواد' },
  installation: { en: 'Installation & Sizing', ar: 'التركيب والمقاسات' },
  commercial: { en: 'Product Guides by Region', ar: 'أدلة المنتجات حسب المنطقة' },
};

const categoryOrder: Array<keyof typeof categoryLabels> = ['standards', 'comparison', 'installation', 'commercial'];

export default function TechnicalHubClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <BreadcrumbSchema items={[
        { name: isAr ? 'الأدلة التقنية' : 'Technical Guides', url: `${baseUrl}/technical` },
      ]} />

      <PageHeader
        title={isAr ? 'الأدلة التقنية' : 'Technical Guides'}
        subtitle={isAr
          ? 'مكتبة شاملة من الأدلة الهندسية لأنظمة أنابيب UPVC و PPR و HDPE — من المعايير الدولية إلى أفضل ممارسات التركيب'
          : 'Comprehensive engineering guide library for UPVC, PPR & HDPE piping systems — from international standards to installation best practices'}
        breadcrumbs={[
          { label: isAr ? 'الأدلة التقنية' : 'Technical Guides' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            {categoryOrder.map((catKey) => {
              const catGuides = guides.filter((g) => g.category === catKey);
              if (catGuides.length === 0) return null;

              return (
                <AnimateOnScroll key={catKey} animation="fade-up">
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <span className="w-1 h-8 bg-primary rounded-full" />
                      {isAr ? categoryLabels[catKey].ar : categoryLabels[catKey].en}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catGuides.map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/technical/${guide.slug}`}
                          className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon name={guide.icon} size={24} className="text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                {isAr ? guide.titleAr : guide.titleEn}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {isAr ? guide.descAr : guide.descEn}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            {isAr ? 'اقرأ الدليل' : 'Read Guide'}
                            <Icon name="arrow" size={16} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isAr ? 'لم تجد ما تبحث عنه؟' : "Can't Find What You're Looking For?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'فريقنا الفني متاح لمساعدتك في أي استفسار تقني حول أنظمة الأنابيب.'
              : 'Our technical team is available to assist with any piping system engineering queries.'}
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            {isAr ? 'تواصل مع الفريق الفني' : 'Contact Technical Team'}
            <Icon name="arrow" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
