'use client';

// Service Area Client Component
// Renders the service area page with LocalBusiness schema

import Link from 'next/link';
import { PageHeader, AnimateOnScroll, StatsStrip } from '@/components/common';
import Icon, { IconName } from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { LocalBusinessSchema } from '@/components/schemas/LocalBusinessSchema';
import { ServiceAreaBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { type ServiceArea, companyInfo } from '@/config/schemas';

interface ServiceAreaClientProps {
  area: ServiceArea;
}

// Product categories for display
const productCategories_display = [
  { name: 'UPVC Pressure Pipes', nameAr: 'أنابيب الضغط UPVC', href: '/products/upvc-pressure', icon: 'water' as IconName },
  { name: 'UPVC Drainage Pipes', nameAr: 'أنابيب الصرف UPVC', href: '/products/upvc-drainage', icon: 'building' as IconName },
  { name: 'PPR Hot & Cold Pipes', nameAr: 'أنابيب PPR ساخنة وباردة', href: '/products/ppr', icon: 'heat' as IconName },
  { name: 'HDPE Pipe Systems', nameAr: 'أنظمة أنابيب HDPE', href: '/products/polyethylene', icon: 'waves' as IconName },
  { name: 'PVC Conduit Pipes', nameAr: 'أنابيب القنوات PVC', href: '/products/pvc-conduit', icon: 'electric' as IconName },
  { name: 'UPVC Duct Pipes', nameAr: 'أنابيب قنوات UPVC', href: '/products/upvc-duct', icon: 'cable' as IconName },
];

export default function ServiceAreaClient({ area }: ServiceAreaClientProps) {
  const { language } = useLanguage();

  const cityName = language === 'ar' ? area.cityAr : area.city;
  const description = language === 'ar' ? area.descriptionAr : area.description;

  return (
    <>
      {/* LocalBusiness Schema for this service area */}
      <LocalBusinessSchema serviceArea={area} />
      <ServiceAreaBreadcrumb cityName={area.city} slug={area.slug} />

      <PageHeader
        title={language === 'ar' ? `أنابيب UPVC ${cityName}` : `UPVC Pipes ${cityName}`}
        subtitle={description}
        breadcrumbs={[
          { label: language === 'ar' ? 'مناطق الخدمة' : 'Service Areas' },
          { label: language === 'ar' ? `أنابيب UPVC ${cityName}` : `UPVC Pipes ${cityName}` },
        ]}
      />

      {/* Stats Strip */}
      <StatsStrip
        stats={[
          { value: '30+', label: language === 'ar' ? 'سنوات الخبرة' : 'Years Experience', iconName: 'calendar' },
          { value: '5,000+', label: language === 'ar' ? 'منتجات متوفرة' : 'Products Available', iconName: 'package' },
          { value: 'ISO 9001', label: language === 'ar' ? 'معتمد' : 'Certified', iconName: 'certified' },
          { value: 'BS EN 1452', label: language === 'ar' ? 'متوافق' : 'Compliant', iconName: 'document' },
          { value: language === 'ar' ? 'توصيل سريع' : 'Fast Delivery', label: cityName, iconName: 'truck' },
        ]}
        variant="primary"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {language === 'ar' 
                  ? `مورد أنابيب UPVC رائد في ${cityName}` 
                  : `Leading UPVC Pipe Supplier in ${cityName}`}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p>
                  {language === 'ar'
                    ? `Crown Plastic Pipes هو المورد الموثوق لأنابيب وتوصيلات UPVC و PPR و HDPE في ${cityName}. مع أكثر من 30 عامًا من الخبرة في التصنيع، نقدم منتجات معتمدة BS EN 1452 و DIN 8062 لمشاريع البناء والبنية التحتية في جميع أنحاء ${area.country}.`
                    : `Crown Plastic Pipes is the trusted supplier of UPVC, PPR, and HDPE pipes and fittings in ${cityName}. With over 30 years of manufacturing experience, we provide BS EN 1452 and DIN 8062 certified products for construction and infrastructure projects across ${area.country}.`}
                </p>
                <p>
                  {language === 'ar'
                    ? `مصنعنا المعتمد ISO 9001:2015 في الشارقة يخدم ${cityName} والمناطق المحيطة بها مع التسليم السريع والدعم الفني. جميع المنتجات يتم تصنيعها من مواد خام 100% بكر ومختبرة للمناخ الخليجي.`
                    : `Our ISO 9001:2015 certified factory in Sharjah serves ${cityName} and surrounding areas with fast delivery and technical support. All products are manufactured from 100% virgin materials and tested for Gulf climate conditions.`}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Service Areas / Districts */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? `مناطق التوصيل في ${cityName}` : `Delivery Areas in ${cityName}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.districts.map((district) => (
                    <span
                      key={district}
                      className="inline-block px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Products Available */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {language === 'ar' 
                ? `منتجاتنا المتوفرة في ${cityName}` 
                : `Our Products Available in ${cityName}`}
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories_display.map((product, index) => (
              <AnimateOnScroll key={product.href} animation="fade-up" delay={index * 80}>
                <Link
                  href={product.href}
                  className="block bg-white p-6 rounded-xl shadow-sm card-hover h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={product.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {language === 'ar' ? product.nameAr : product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'ar' 
                      ? `متوفر للتوصيل إلى ${cityName}` 
                      : `Available for delivery to ${cityName}`}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {language === 'ar' ? 'شهاداتنا ومعاييرنا' : 'Our Certifications & Standards'}
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-4">
            {['ISO 9001:2015', 'ISO 14001:2015', 'BS EN 1452', 'DIN 8062', 'NSF/ANSI 61', 'BSI Kitemark', 'GSO', 'SASO'].map((cert, index) => (
              <AnimateOnScroll key={cert} animation="fade-up" delay={index * 50}>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                  {cert}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ar' 
              ? `هل تحتاج أنابيب UPVC في ${cityName}؟` 
              : `Need UPVC Pipes in ${cityName}?`}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? `اتصل بفريقنا للحصول على عروض أسعار تنافسية وتوصيل سريع إلى ${cityName} والمناطق المحيطة.`
              : `Contact our team for competitive quotes and fast delivery to ${cityName} and surrounding areas.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${companyInfo.telephone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              <Icon name="phone" size={20} />
              {companyInfo.telephone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
