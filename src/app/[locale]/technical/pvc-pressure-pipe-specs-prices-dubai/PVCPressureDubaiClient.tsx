'use client';

import Link from '@/components/common/LocaleLink';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';

const baseUrl = 'https://crownplasticuae.com';
const pageUrl = `${baseUrl}/technical/pvc-pressure-pipe-specs-prices-dubai`;

export default function PVCPressureDubaiClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <TechnicalGuideSchema
        title="PVC High Pressure Pipe Specifications & Prices in Dubai (PN10 vs PN16)"
        description="Complete guide to PVC pressure pipe specifications, PN10 vs PN16 differences, and procurement for high-rise plumbing projects in Dubai."
        url={pageUrl}
        datePublished="2025-05-13"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={['PVC pressure pipes Dubai', 'PN10 vs PN16', 'high-rise plumbing Dubai', 'BS EN 1452', 'PVC Pipes / Fittings UAE', 'Crown Plastic']}
        proficiencyLevel="Intermediate"
        relatedGuides={[
          { title: 'BS EN 1452 Complete Guide', url: `${baseUrl}/technical/bs-en-1452-complete-guide` },
          { title: 'UPVC vs PVC vs PPR Comparison', url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison` },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: isAr ? 'الأدلة التقنية' : 'Technical Guides', url: `${baseUrl}/technical` },
        { name: isAr ? 'أنابيب الضغط' : 'Pressure Pipes', url: `${baseUrl}/technical` },
        { name: isAr ? 'مواصفات PVC دبي' : 'PVC Specs Dubai', url: pageUrl },
      ]} />

      <PageHeader
        title={isAr ? 'مواصفات أنابيب PVC للضغط العالي وأسعارها في دبي (PN10 مقابل PN16)' : 'PVC High Pressure Pipe Specifications & Prices in Dubai (PN10 vs PN16)'}
        subtitle={isAr ? 'دليل شامل لاختيار تصنيف الضغط المناسب لمشاريع الأبراج والبنية التحتية في دبي' : 'Complete guide to selecting the right pressure rating for Dubai high-rise and infrastructure projects'}
        breadcrumbs={[
          { label: isAr ? 'الأدلة التقنية' : 'Technical Guides' },
          { label: isAr ? 'مواصفات PVC دبي' : 'PVC Specs Dubai' },
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
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                {isAr ? 'أنابيب PN10 مصنّفة لضغط 10 بار — مثالية لتوزيع المياه في المباني المنخفضة والري' : 'PN10 pipes rated at 10 bar — ideal for low-rise water distribution and irrigation'}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                {isAr ? 'أنابيب PN16 مصنّفة لضغط 16 بار — مطلوبة للأبراج السكنية ومشاريع البنية التحتية في دبي' : 'PN16 pipes rated at 16 bar — required for Dubai high-rise towers and infrastructure projects'}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                {isAr ? 'جميع أنابيب كراون بلاستيك معتمدة وفق BS EN 1452 و DIN 8061/62 و ISO 4422-2' : 'All Crown Plastic pipes certified to BS EN 1452, DIN 8061/62, and ISO 4422-2'}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                {isAr ? 'متوفرة بأقطار من 20 مم إلى 400 مم مع التوصيل إلى جميع أنحاء دبي والإمارات' : 'Available from 20 mm to 400 mm with delivery across Dubai and UAE'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">

            <AnimateOnScroll animation="fade-up">
              <section id="pn10-vs-pn16" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {isAr ? 'فهم الفرق: PN10 مقابل PN16' : 'Understanding the Difference: PN10 vs PN16'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يُشير تصنيف PN (الضغط الاسمي) إلى الحد الأقصى لضغط التشغيل الذي يمكن للأنبوب تحمّله بأمان عند درجة حرارة 20 مئوية. في سوق دبي، يُعدّ الاختيار بين PN10 و PN16 من أهم القرارات الهندسية التي تؤثر على سلامة المشروع وتكلفته على المدى البعيد.'
                    : 'The PN (Pressure Nominale) rating indicates the maximum working pressure a pipe can safely sustain at 20°C water temperature. In the Dubai market, selecting between PN10 and PN16 is one of the most critical engineering decisions affecting project safety and long-term cost efficiency.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'أنابيب PN10 مصمّمة لضغط تشغيل يصل إلى 10 بار (145 رطل/بوصة مربعة)، وتُستخدم عادةً في شبكات توزيع المياه الأفقية والمباني المنخفضة الارتفاع وأنظمة الري. أما أنابيب PN16 فتتحمّل ضغطاً يصل إلى 16 بار (232 رطل/بوصة مربعة)، وهي الخيار المُفضّل لمشاريع الأبراج السكنية في دبي حيث يتطلب الضغط الهيدروستاتيكي الناتج عن الارتفاع أنابيب ذات تصنيف أعلى.'
                    : 'PN10 pipes are engineered for working pressures up to 10 bar (145 PSI), commonly deployed in horizontal water distribution networks, low-rise buildings, and irrigation systems. PN16 pipes handle pressures up to 16 bar (232 PSI), making them the preferred choice for Dubai high-rise developments where the hydrostatic pressure generated by building height demands higher-rated Pipes / Fittings.'}
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">{isAr ? 'المعيار' : 'Parameter'}</th>
                        <th className="px-4 py-3 text-left">PN10</th>
                        <th className="px-4 py-3 text-left">PN16</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">{isAr ? 'ضغط التشغيل' : 'Working Pressure'}</td>
                        <td className="px-4 py-3">10 bar (145 PSI)</td>
                        <td className="px-4 py-3">16 bar (232 PSI)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">SDR</td>
                        <td className="px-4 py-3">SDR 26</td>
                        <td className="px-4 py-3">SDR 17</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">{isAr ? 'سُمك الجدار (110 مم)' : 'Wall Thickness (110 mm)'}</td>
                        <td className="px-4 py-3">4.2 mm</td>
                        <td className="px-4 py-3">6.6 mm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">{isAr ? 'الاستخدام المثالي' : 'Ideal Application'}</td>
                        <td className="px-4 py-3">{isAr ? 'مبانٍ منخفضة، ري' : 'Low-rise, irrigation'}</td>
                        <td className="px-4 py-3">{isAr ? 'أبراج، صناعي' : 'High-rise, industrial'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="dubai-high-rise" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {isAr ? 'لماذا تتطلب أبراج دبي أنابيب PN16' : 'Why Dubai High-Rises Demand PN16'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تتميّز دبي بأفقها الحضري الذي يضم بعضاً من أطول المباني في العالم. كل 10 أمتار من الارتفاع الرأسي تُضيف ما يقارب 1 بار من الضغط الهيدروستاتيكي على شبكة الأنابيب. وهذا يعني أن المبنى الذي يبلغ ارتفاعه 100 متر يولّد ضغطاً ساكناً يتجاوز 10 بار، مما يجعل أنابيب PN10 غير كافية للطوابق السفلية.'
                    : 'Dubai\'s skyline features some of the tallest buildings in the world. Every 10 metres of vertical height adds approximately 1 bar of hydrostatic pressure to the piping network. This means a 100-metre building generates static pressure exceeding 10 bar, making PN10 pipes insufficient for lower floors.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يتطلب كود بلدية دبي وهيئة كهرباء ومياه دبي (ديوا) استخدام أنابيب Pipes / Fittings بتصنيف ضغط كافٍ يغطي الضغط الساكن مع هامش أمان. لذلك تُعتبر أنابيب PN16 المعيار القياسي لمعظم مشاريع الأبراج السكنية والتجارية في الإمارة. كما يُنصح بها للتمديدات تحت الأرض حيث قد تتعرّض الأنابيب لأحمال تربة إضافية وضغوط مرور.'
                    : 'Dubai Municipality code and DEWA (Dubai Electricity & Water Authority) require Pipes / Fittings with pressure ratings that cover static pressure plus a safety margin. PN16 is therefore the standard specification for most high-rise residential and commercial projects in the emirate. It is also recommended for underground installations where pipes may experience additional soil loading and traffic surcharges.'}
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="text-gray-700">
                    <strong>{isAr ? 'ملاحظة هندسية:' : 'Engineering Note:'}</strong>{' '}
                    {isAr
                      ? 'عند مراحل التصميم المبكرة، يجب مراعاة الضغط الديناميكي الإضافي الناتج عن المضخات وصمامات الإغلاق السريع (المطرقة المائية). قد يتطلب ذلك استخدام PN20 أو PN25 في بعض المناطق الحرجة.'
                      : 'During early design stages, account for additional dynamic pressure from pumps and fast-closing valves (water hammer). This may require PN20 or PN25 in certain critical zones.'}
                  </p>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="crown-compliance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {isAr ? 'التزام كراون بلاستيك بالمعايير الدولية' : 'Crown Plastic Standards Compliance'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تُصنّع كراون بلاستيك أنابيب PVC للضغط العالي في مصنعها المتطور بأم القيوين، الإمارات العربية المتحدة. جميع المنتجات معتمدة وفق المعايير الدولية التالية ولا يتم التهاون في أيٍّ منها:'
                    : 'Crown Plastic manufactures PVC high pressure Pipes / Fittings at our state-of-the-art facility in Umm Al Quwain, UAE. All products are certified to the following international standards without compromise:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>BS EN 1452</strong> — {isAr ? 'المعيار الأوروبي لأنابيب PVC-U لإمدادات المياه' : 'European standard for PVC-U water supply piping systems'}</li>
                  <li><strong>DIN 8061/62</strong> — {isAr ? 'المعيار الألماني للأبعاد والخصائص الفيزيائية' : 'German standard for dimensions and physical properties'}</li>
                  <li><strong>ISO 4422-2</strong> — {isAr ? 'المواصفة الدولية لأنابيب الضغط' : 'International specification for pressure pipes'}</li>
                  <li><strong>ASTM D 1785</strong> — {isAr ? 'المعيار الأمريكي لأنابيب PVC بالجدول 40 و 80' : 'American standard for PVC pipe Schedule 40 & 80'}</li>
                  <li><strong>ISO 9001:2015</strong> — {isAr ? 'نظام إدارة الجودة المعتمد' : 'Certified quality management system'}</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'تخضع كل دفعة إنتاجية لاختبارات الضغط الهيدروستاتيكي والتحقق من الأبعاد والفحص البصري قبل التوريد. نوفر شهادات اختبار كاملة ووثائق تقديم فني لكل طلبية، مما يُسهّل عملية الاعتماد لدى الاستشاريين والمقاولين في دبي.'
                    : 'Every production batch undergoes hydrostatic pressure testing, dimensional verification, and visual inspection before dispatch. We provide complete test certificates and technical submittals for every order, streamlining the approval process for consultants and contractors in Dubai.'}
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="procurement" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {isAr ? 'التوريد والتسعير لمشاريع دبي' : 'Procurement & Pricing for Dubai Projects'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'توفر كراون بلاستيك مخزوناً دائماً من أنابيب PVC للضغط العالي بتصنيفات PN10 و PN16 بأقطار من 20 مم إلى 400 مم. نقدّم أسعاراً تنافسية للكميات الكبيرة مع إمكانية التوصيل خلال أيام عمل قليلة إلى جميع مناطق دبي بما في ذلك جبل علي وديرة والقصيص ومنطقة الخوانيج الصناعية.'
                    : 'Crown Plastic maintains permanent stock of PVC high pressure Pipes / Fittings in PN10 and PN16 ratings from 20 mm to 400 mm. We offer competitive bulk pricing with delivery within days to all Dubai areas including Jebel Ali, Deira, Al Quoz, and Al Khawaneej Industrial.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'للحصول على عروض أسعار مخصصة لمشروعك، تواصل مع فريقنا الفني الذي يمكنه مساعدتك في اختيار التصنيف المناسب وحساب الكميات المطلوبة وتنسيق جداول التوصيل.'
                    : 'For project-specific quotations, contact our technical team who can assist with pressure rating selection, quantity calculation, and delivery scheduling.'}
                </p>
              </section>
            </AnimateOnScroll>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isAr ? 'هل تحتاج أنابيب PVC للضغط العالي في دبي؟' : 'Need PVC High Pressure Pipes / Fittings in Dubai?'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'كراون بلاستيك توفر أنابيب PVC معتمدة وفق BS EN 1452 بتصنيفات PN10 و PN16 مع التوصيل السريع إلى جميع أنحاء دبي والإمارات.'
              : 'Crown Plastic supplies BS EN 1452 certified PVC pressure Pipes / Fittings in PN10 and PN16 with fast delivery across Dubai and the UAE.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              {isAr ? 'طلب عرض سعر' : 'Request Quote'}
              <Icon name="arrow" size={20} />
            </Link>
            <Link href="/products/pvc-high-pressure-pipes" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20">
              {isAr ? 'عرض منتجات PVC' : 'View PVC Products'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <aside className="py-16 bg-gray-50" aria-label={isAr ? 'أدلة تقنية ذات صلة' : 'Related technical guides'}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {isAr ? 'أدلة تقنية ذات صلة' : 'Related Technical Guides'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            <Link href="/technical/bs-en-1452-complete-guide" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="certified" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'دليل BS EN 1452 الشامل' : 'BS EN 1452 Complete Guide'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'المعيار الأوروبي لأنابيب الضغط' : 'European pressure pipe standard guide'}</p>
            </Link>
            <Link href="/technical/upvc-drainage-pipes-saline-soil-abu-dhabi" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="water" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'أنابيب الصرف للتربة الملحية' : 'Drainage Pipes for Saline Soil'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'حلول أبوظبي ودول الخليج' : 'Abu Dhabi & GCC solutions'}</p>
            </Link>
            <Link href="/technical/hdpe-vs-upvc-municipal-infrastructure-gcc" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="compare" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'HDPE مقابل UPVC' : 'HDPE vs UPVC'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'مقارنة للبنية التحتية البلدية' : 'Municipal infrastructure comparison'}</p>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
