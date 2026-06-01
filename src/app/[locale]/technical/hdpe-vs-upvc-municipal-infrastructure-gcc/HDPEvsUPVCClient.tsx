'use client';

import Link from '@/components/common/LocaleLink';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';

const baseUrl = 'https://crownplasticuae.com';
const pageUrl = `${baseUrl}/technical/hdpe-vs-upvc-municipal-infrastructure-gcc`;

export default function HDPEvsUPVCClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <TechnicalGuideSchema
        title="HDPE vs UPVC: Selecting the Right Pipe for GCC Municipal Infrastructure"
        description="Compare HDPE and UPVC pipes for large-scale municipal water and drainage infrastructure across the UAE and GCC."
        url={pageUrl}
        datePublished="2025-05-13"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={['HDPE vs UPVC', 'municipal infrastructure GCC', 'ISO 4427', 'BS EN 1452', 'water pipes UAE', 'pipe selection guide']}
        proficiencyLevel="Expert"
        relatedGuides={[
          { title: 'BS EN 1452 Complete Guide', url: `${baseUrl}/technical/bs-en-1452-complete-guide` },
          { title: 'UPVC vs PVC vs PPR Comparison', url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison` },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: isAr ? 'الأدلة التقنية' : 'Technical Guides', url: `${baseUrl}/technical` },
        { name: isAr ? 'مقارنات' : 'Comparisons', url: `${baseUrl}/technical` },
        { name: isAr ? 'HDPE مقابل UPVC' : 'HDPE vs UPVC', url: pageUrl },
      ]} />

      <PageHeader
        title={isAr ? 'HDPE مقابل UPVC: اختيار الأنبوب المناسب للبنية التحتية البلدية في دول الخليج' : 'HDPE vs UPVC: Selecting the Right Pipe for GCC Municipal Infrastructure'}
        subtitle={isAr ? 'مقارنة تقنية شاملة للمرونة وطرق الوصل وتصنيفات الضغط في المناخ الصحراوي' : 'Comprehensive comparison of flexibility, jointing methods, and pressure ratings for desert climates'}
        breadcrumbs={[
          { label: isAr ? 'الأدلة التقنية' : 'Technical Guides' },
          { label: isAr ? 'HDPE مقابل UPVC' : 'HDPE vs UPVC' },
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
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'HDPE مرن ومناسب للتمديدات الطويلة المنحنية والأراضي غير المستوية — يتوفر بلفائف وأنابيب مستقيمة' : 'HDPE is flexible, ideal for long curved runs and uneven terrain — available in coils and straight lengths'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'UPVC صلب مع مقاومة عالية للضغط ومثالي لشبكات التوزيع البلدية المستقيمة' : 'UPVC is rigid with high pressure resistance, ideal for straight-run municipal distribution networks'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'HDPE يُوصل باللحام الحراري (butt fusion) — UPVC يُوصل بالمذيب أو حلقة مطاطية' : 'HDPE uses butt fusion welding — UPVC uses solvent cement or rubber ring joints'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'كراون بلاستيك تُصنّع كلا النظامين وفق ISO 4427 (HDPE) و BS EN 1452 (UPVC)' : 'Crown Plastic manufactures both systems to ISO 4427 (HDPE) and BS EN 1452 (UPVC)'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">

            <AnimateOnScroll animation="fade-up">
              <section id="comparison-table" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'جدول المقارنة الشاملة' : 'Comprehensive Comparison Table'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يعتمد الاختيار بين HDPE و UPVC على عدة عوامل تقنية تشمل طبيعة التطبيق وظروف الموقع ومتطلبات الضغط وطريقة التركيب. الجدول التالي يوفر مقارنة مباشرة للخصائص الرئيسية لمساعدة المهندسين والاستشاريين في اتخاذ القرار المناسب لمشاريع البنية التحتية في دول الخليج.'
                    : 'The choice between HDPE and UPVC depends on several technical factors including application type, site conditions, pressure requirements, and installation method. The following table provides a direct comparison of key properties to help engineers and consultants make the right decision for GCC infrastructure projects.'}
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">{isAr ? 'الخاصية' : 'Property'}</th>
                        <th className="px-4 py-3 text-left">HDPE</th>
                        <th className="px-4 py-3 text-left">UPVC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">{isAr ? 'المرونة' : 'Flexibility'}</td>
                        <td className="px-4 py-3">{isAr ? 'مرن — يتحمّل الانحناء' : 'Flexible — tolerates bending'}</td>
                        <td className="px-4 py-3">{isAr ? 'صلب — يتطلب وصلات للانحناءات' : 'Rigid — requires fittings for bends'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">{isAr ? 'طريقة الوصل' : 'Jointing Method'}</td>
                        <td className="px-4 py-3">{isAr ? 'لحام حراري (butt/electro fusion)' : 'Butt fusion / Electrofusion'}</td>
                        <td className="px-4 py-3">{isAr ? 'لحام بالمذيب / حلقة مطاطية' : 'Solvent cement / Rubber ring'}</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">{isAr ? 'تصنيف الضغط' : 'Pressure Rating'}</td>
                        <td className="px-4 py-3">PN6 – PN16 (PE100)</td>
                        <td className="px-4 py-3">PN6 – PN25</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">{isAr ? 'المعيار' : 'Standard'}</td>
                        <td className="px-4 py-3">ISO 4427 / DIN 8074</td>
                        <td className="px-4 py-3">BS EN 1452 / DIN 8061/62</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">{isAr ? 'مقاومة الأشعة فوق البنفسجية' : 'UV Resistance'}</td>
                        <td className="px-4 py-3">{isAr ? 'ممتازة (أسود كربوني)' : 'Excellent (carbon black)'}</td>
                        <td className="px-4 py-3">{isAr ? 'جيدة (مع إضافات UV)' : 'Good (with UV additives)'}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">{isAr ? 'التطبيق المثالي' : 'Ideal Application'}</td>
                        <td className="px-4 py-3">{isAr ? 'خطوط نقل طويلة، ري، غاز' : 'Long transmission, irrigation, gas'}</td>
                        <td className="px-4 py-3">{isAr ? 'شبكات توزيع بلدية، مباني' : 'Municipal distribution, buildings'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="jointing" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'طرق الوصل: اللحام الحراري مقابل اللحام بالمذيب' : 'Jointing Methods: Fusion vs Solvent Cement'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'أنابيب HDPE تُوصل باللحام الحراري (butt fusion أو electrofusion) الذي يُنشئ وصلة متجانسة مانعة للتسرب بالكامل. تتطلب هذه العملية معدات متخصصة ومشغّلين مدرّبين، لكنها تُنتج أنظمة خالية من نقاط الضعف. هذا يجعل HDPE مثالياً لخطوط النقل الطويلة وتطبيقات الغاز وشبكات الري الكبيرة.'
                    : 'HDPE Pipes / Fittings are joined by thermal fusion (butt fusion or electrofusion) which creates a fully leak-proof homogeneous joint. This process requires specialised equipment and trained operators, but produces systems free of weak points. This makes HDPE ideal for long transmission lines, gas applications, and large-scale irrigation networks.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'أنابيب UPVC تُوصل بطريقتين: اللحام بالمذيب الذي يُنشئ رابطة كيميائية دائمة (مثالي لأنظمة الضغط فوق الأرض)، ووصلات الحلقة المطاطية التي تسمح بالتمدد الحراري (مثالية للتمديدات تحت الأرض). كلتا الطريقتين سريعتا التنفيذ ولا تتطلبان معدات كهربائية باهظة الثمن.'
                    : 'UPVC Pipes / Fittings are joined by two methods: solvent cement which creates a permanent chemical bond (ideal for above-ground pressure systems), and rubber ring push-fit joints which allow thermal expansion (ideal for underground installations). Both methods are fast to execute and do not require expensive electrical equipment.'}
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="desert-performance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'الأداء في المناخ الصحراوي' : 'Performance in Desert Climates'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يواجه كلا النظامين تحدّيات فريدة في المناخ الصحراوي لدول الخليج. درجات حرارة سطح الأرض قد تتجاوز 70°C صيفاً، والتربة الرملية تتحرك مع الرياح والأمطار، والتربة الملحية (السبخة) تنتشر في المناطق الساحلية.'
                    : 'Both systems face unique challenges in the GCC desert climate. Ground surface temperatures can exceed 70°C in summer, sandy soil shifts with wind and rain, and saline sabkha soil is prevalent in coastal areas.'}
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{isAr ? 'نقاط قوة HDPE' : 'HDPE Strengths'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• {isAr ? 'مرونة تتحمّل حركة التربة وهبوط الأرض' : 'Flexibility absorbs soil movement and ground settlement'}</li>
                      <li>• {isAr ? 'مقاومة ممتازة للأشعة فوق البنفسجية' : 'Excellent UV resistance'}</li>
                      <li>• {isAr ? 'وصلات لحام خالية من التسرب' : 'Leak-free fusion joints'}</li>
                      <li>• {isAr ? 'متوفر بلفائف لتقليل عدد الوصلات' : 'Available in coils to reduce joint count'}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{isAr ? 'نقاط قوة UPVC' : 'UPVC Strengths'}</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• {isAr ? 'تصنيفات ضغط أعلى (حتى PN25)' : 'Higher pressure ratings (up to PN25)'}</li>
                      <li>• {isAr ? 'تركيب أسرع وأبسط بدون معدات خاصة' : 'Faster and simpler installation without special equipment'}</li>
                      <li>• {isAr ? 'صلابة عالية تمنع التشوّه' : 'High rigidity prevents deformation'}</li>
                      <li>• {isAr ? 'تكلفة أقل للأقطار الصغيرة والمتوسطة' : 'Lower cost for small-medium diameters'}</li>
                    </ul>
                  </div>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="selection-guide" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'دليل الاختيار للمهندسين' : 'Selection Guide for Engineers'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'كقاعدة عامة: اختر HDPE لخطوط النقل الطويلة والأراضي غير المستوية وتطبيقات الغاز والري الزراعي الكبير. اختر UPVC لشبكات التوزيع البلدية المدنية وتمديدات المباني والأنظمة التي تتطلب تصنيفات ضغط عالية. كراون بلاستيك تُصنّع كلا النظامين ويمكن لفريقنا الفني مساعدتك في اختيار الحل الأمثل لمشروعك.'
                    : 'As a general rule: choose HDPE for long transmission lines, uneven terrain, gas applications, and large-scale agricultural irrigation. Choose UPVC for municipal distribution networks, building installations, and systems requiring high pressure ratings. Crown Plastic manufactures both systems and our technical team can help you select the optimal solution for your project.'}
                </p>
              </section>
            </AnimateOnScroll>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isAr ? 'هل تحتاج مساعدة في اختيار نظام الأنابيب المناسب؟' : 'Need Help Selecting the Right Piping System?'}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'فريق كراون بلاستيك الفني متخصص في مساعدة المهندسين والاستشاريين على اختيار الحل الأمثل بين HDPE و UPVC لمشاريع البنية التحتية في دول الخليج.'
              : 'Crown Plastic\'s technical team specialises in helping engineers and consultants select the optimal HDPE or UPVC solution for GCC infrastructure projects.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              {isAr ? 'طلب استشارة فنية' : 'Request Technical Consultation'} <Icon name="arrow" size={20} />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20">
              {isAr ? 'عرض جميع المنتجات' : 'View All Products'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <aside className="py-16 bg-gray-50" aria-label={isAr ? 'أدلة تقنية ذات صلة' : 'Related technical guides'}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{isAr ? 'أدلة تقنية ذات صلة' : 'Related Technical Guides'}</h2>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            <Link href="/technical/bs-en-1452-complete-guide" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="certified" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'دليل BS EN 1452 الشامل' : 'BS EN 1452 Complete Guide'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'معيار أنابيب الضغط UPVC' : 'UPVC pressure pipe standard'}</p>
            </Link>
            <Link href="/technical/pvc-pressure-pipe-specs-prices-dubai" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="pressure" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'مواصفات أنابيب الضغط PVC' : 'PVC Pressure Pipe Specs'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'PN10 مقابل PN16 في دبي' : 'PN10 vs PN16 in Dubai'}</p>
            </Link>
            <Link href="/technical/upvc-drainage-pipes-saline-soil-abu-dhabi" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="water" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'أنابيب الصرف للتربة الملحية' : 'Drainage for Saline Soil'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'حلول أبوظبي ودول الخليج' : 'Abu Dhabi & GCC solutions'}</p>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
