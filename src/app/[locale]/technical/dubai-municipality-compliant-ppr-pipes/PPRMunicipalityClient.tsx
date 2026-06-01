'use client';

import Link from '@/components/common/LocaleLink';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';

const baseUrl = 'https://crownplasticuae.com';
const pageUrl = `${baseUrl}/technical/dubai-municipality-compliant-ppr-pipes`;

export default function PPRMunicipalityClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <TechnicalGuideSchema
        title="Dubai Municipality Compliant PPR Pipes / Fittings: The Contractor's Guide"
        description="A contractor's guide to sourcing Dubai and Sharjah Municipality compliant PPR hot and cold water pipes for residential and commercial MEP projects."
        url={pageUrl}
        datePublished="2025-05-13"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={['PPR pipes Dubai Municipality', 'municipality compliant pipes', 'DIN 8077', 'DIN 8078', 'heat fusion welding', 'PPR Pipes / Fittings UAE']}
        proficiencyLevel="Intermediate"
        relatedGuides={[
          { title: 'UPVC vs PVC vs PPR Comparison', url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison` },
          { title: 'Certifications Compliance Guide', url: `${baseUrl}/technical/certifications-compliance-guide` },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: isAr ? 'الأدلة التقنية' : 'Technical Guides', url: `${baseUrl}/technical` },
        { name: isAr ? 'أنابيب PPR' : 'PPR Pipes', url: `${baseUrl}/technical` },
        { name: isAr ? 'اعتماد البلدية' : 'Municipality Compliance', url: pageUrl },
      ]} />

      <PageHeader
        title={isAr ? 'أنابيب PPR المعتمدة من بلدية دبي: دليل المقاول' : "Dubai Municipality Compliant PPR Pipes / Fittings: The Contractor's Guide"}
        subtitle={isAr ? 'كل ما يحتاجه المقاول لتوريد أنابيب PPR معتمدة لمشاريع MEP في دبي والشارقة' : 'Everything contractors need for sourcing approved PPR Pipes / Fittings for MEP projects in Dubai and Sharjah'}
        breadcrumbs={[
          { label: isAr ? 'الأدلة التقنية' : 'Technical Guides' },
          { label: isAr ? 'أنابيب PPR المعتمدة' : 'PPR Municipality Compliance' },
        ]}
      />

      {/* Key Takeaways */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="check" size={24} className="text-primary" />
              {isAr ? 'النقاط الرئيسية' : 'Key Takeaways'}
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'اعتماد البلدية إلزامي لجميع أنابيب Pipes / Fittings المستخدمة في مشاريع البناء بدبي والشارقة' : 'Municipality approval is mandatory for all Pipes / Fittings used in Dubai and Sharjah construction projects'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'أنابيب PPR مصنّعة وفق DIN 8077/8078 لأنظمة المياه الساخنة والباردة' : 'PPR pipes manufactured to DIN 8077/8078 for hot and cold water systems'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'اللحام بالحرارة يُنشئ وصلات متجانسة أقوى من الأنبوب نفسه — بدون تسريب' : 'Heat fusion welding creates homogeneous joints stronger than the pipe itself — zero leaks'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'عمر افتراضي يتجاوز 50 عاماً عند 70°C مع تحمّل ذروات حتى 95°C' : '50+ year lifespan at 70°C continuous with peaks up to 95°C'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">

            <AnimateOnScroll animation="fade-up">
              <section id="municipality-compliance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'لماذا اعتماد البلدية ضروري' : 'Why Municipality Approval Matters'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تشترط بلدية دبي وبلدية الشارقة أن تكون جميع مواد السباكة المستخدمة في المباني الجديدة والتجديدات معتمدة ومطابقة للمواصفات المعتمدة. استخدام أنابيب Pipes / Fittings غير معتمدة يعرّض المقاول لرفض التفتيش وتأخير المشروع وغرامات مالية. علاوة على ذلك، فإن شهادة الإنجاز لا تُصدر إلا بعد التأكد من مطابقة جميع المواد المستخدمة.'
                    : 'Dubai Municipality and Sharjah Municipality require all plumbing materials used in new builds and renovations to be approved and specification-compliant. Using non-approved Pipes / Fittings exposes the contractor to inspection rejection, project delays, and financial penalties. Furthermore, the completion certificate is only issued after confirming compliance of all materials used.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'أنابيب PPR من كراون بلاستيك معتمدة لمشاريع البناء في الإمارات ومصنّعة وفق المعايير الألمانية DIN 8077/8078 التي تُعدّ المرجع الأساسي لأنابيب البولي بروبيلين العشوائي (PP-R) عالمياً. نوفر جميع شهادات الاعتماد والتقارير الفنية المطلوبة لتقديم المواد للاستشاري والمالك.'
                    : 'Crown Plastic PPR Pipes / Fittings are approved for UAE construction projects and manufactured to German DIN 8077/8078 standards — the global reference for Polypropylene Random Copolymer (PP-R) pipes. We provide all required approval certificates and technical submittals for consultant and owner material submissions.'}
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="heat-fusion" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'مزايا اللحام بالحرارة لأنابيب PPR' : 'Heat Fusion Welding Advantages'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يتميّز نظام أنابيب PPR بتقنية اللحام بالحرارة (اللحام بالانصهار) التي تُنشئ وصلة متجانسة كيميائياً بين الأنبوب والوصلة. على عكس الوصلات الميكانيكية أو اللحام بالمذيب، فإن اللحام بالحرارة يُنتج نقطة اتصال أقوى من الأنبوب نفسه مما يقضي تماماً على مخاطر التسريب.'
                    : 'The PPR piping system features heat fusion welding technology that creates a chemically homogeneous joint between pipe and fitting. Unlike mechanical connections or solvent welding, heat fusion produces a connection point stronger than the pipe itself, completely eliminating leak risks.'}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{isAr ? 'مواصفات اللحام الحراري:' : 'Heat Fusion Specifications:'}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {isAr ? 'درجة حرارة اللحام: 260°C ± 10°C' : 'Welding temperature: 260°C ± 10°C'}</li>
                    <li>• {isAr ? 'زمن التسخين: يعتمد على قطر الأنبوب (7-24 ثانية)' : 'Heating time: depends on pipe diameter (7-24 seconds)'}</li>
                    <li>• {isAr ? 'قوة الوصلة تتجاوز قوة الأنبوب بنسبة 15-20%' : 'Joint strength exceeds pipe strength by 15-20%'}</li>
                    <li>• {isAr ? 'لا حاجة لمواد إضافية (لحام، مذيبات، موانع تسرب)' : 'No additional materials needed (solder, solvents, sealants)'}</li>
                    <li>• {isAr ? 'عملية نظيفة ومناسبة لأنظمة مياه الشرب' : 'Clean process suitable for potable water systems'}</li>
                  </ul>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="durability" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'المتانة في مناخ الإمارات' : 'Durability in UAE Climate'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تواجه أنظمة السباكة في الإمارات تحدّيات فريدة: درجات حرارة مياه مرتفعة في الصيف تتجاوز 45°C حتى في خطوط المياه الباردة، ومياه ذات ملوحة عالية، ودورات حرارية يومية. أنابيب PPR من كراون بلاستيك مصمّمة لتحمّل هذه الظروف:'
                    : 'Plumbing systems in the UAE face unique challenges: elevated summer water temperatures exceeding 45°C even in cold water lines, high-salinity water, and daily thermal cycles. Crown Plastic PPR Pipes / Fittings are engineered to handle these conditions:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{isAr ? 'تشغيل مستمر عند 70°C لأكثر من 50 عاماً (DIN 8077/8078)' : 'Continuous operation at 70°C for 50+ years (DIN 8077/8078)'}</li>
                  <li>{isAr ? 'تحمّل ذروات حرارية حتى 95°C لفترات قصيرة' : 'Short-term peak resistance up to 95°C'}</li>
                  <li>{isAr ? 'مقاومة كاملة لترسّبات الكلس والتكلّس الداخلي' : 'Complete resistance to scale build-up and internal calcification'}</li>
                  <li>{isAr ? 'متوفرة بتصنيفات PN10 (SDR11) و PN20 (SDR6) و PN25 (SDR5)' : 'Available in PN10 (SDR11), PN20 (SDR6), and PN25 (SDR5) ratings'}</li>
                  <li>{isAr ? 'عزل حراري متأصّل يقلل فقدان الحرارة في خطوط المياه الساخنة' : 'Inherent thermal insulation reduces heat loss in hot water lines'}</li>
                </ul>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="crown-range" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'مجموعة أنابيب PPR من كراون بلاستيك' : 'Crown Plastic PPR Range'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'توفر كراون بلاستيك مجموعة شاملة من أنابيب ووصلات PPR بأقطار من 20 مم إلى 160 مم، تشمل الأنابيب المستقيمة والأكواع والتيّات والمخفّضات والمحابس وقطع التحويل إلى الأنظمة المعدنية. جميع المنتجات متوفرة في المخزون مع إمكانية التوصيل خلال 24-48 ساعة في دبي والشارقة.'
                    : 'Crown Plastic provides a comprehensive PPR Pipes / Fittings range from 20 mm to 160 mm diameters, including straight pipes, elbows, tees, reducers, valves, and transition fittings to metallic systems. All products are stocked with 24-48 hour delivery in Dubai and Sharjah.'}
                </p>
              </section>
            </AnimateOnScroll>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isAr ? 'هل تحتاج أنابيب PPR معتمدة لمشروعك؟' : 'Need Municipality-Approved PPR Pipes / Fittings?'}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'تواصل مع فريق كراون بلاستيك للحصول على عروض أسعار وشهادات اعتماد ودعم فني لمشاريع MEP في دبي والشارقة.'
              : 'Contact the Crown Plastic team for quotations, approval certificates, and technical support for MEP projects in Dubai and Sharjah.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              {isAr ? 'طلب عرض سعر' : 'Request Quote'} <Icon name="arrow" size={20} />
            </Link>
            <Link href="/products/ppr-pipes" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20">
              {isAr ? 'عرض منتجات PPR' : 'View PPR Products'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <aside className="py-16 bg-gray-50" aria-label={isAr ? 'أدلة تقنية ذات صلة' : 'Related technical guides'}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{isAr ? 'أدلة تقنية ذات صلة' : 'Related Technical Guides'}</h2>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            <Link href="/technical/upvc-vs-pvc-vs-ppr-comparison" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="compare" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'UPVC مقابل PVC مقابل PPR' : 'UPVC vs PVC vs PPR'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'مقارنة شاملة للمواد' : 'Complete material comparison'}</p>
            </Link>
            <Link href="/technical/pvc-pressure-pipe-specs-prices-dubai" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="pressure" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'مواصفات أنابيب الضغط PVC' : 'PVC Pressure Pipe Specs'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'PN10 مقابل PN16 في دبي' : 'PN10 vs PN16 in Dubai'}</p>
            </Link>
            <Link href="/technical/certifications-compliance-guide" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="certified" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'دليل الشهادات والامتثال' : 'Certifications & Compliance'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'المعايير الدولية المعتمدة' : 'International standards guide'}</p>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
