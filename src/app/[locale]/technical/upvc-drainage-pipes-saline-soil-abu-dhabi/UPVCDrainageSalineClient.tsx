'use client';

import Link from '@/components/common/LocaleLink';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';

const baseUrl = 'https://crownplasticuae.com';
const pageUrl = `${baseUrl}/technical/upvc-drainage-pipes-saline-soil-abu-dhabi`;

export default function UPVCDrainageSalineClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <TechnicalGuideSchema
        title="Best UPVC Drainage Pipes for Saline Soil in Abu Dhabi & GCC Projects"
        description="Discover why UPVC drainage systems are engineered for the harsh, highly saline soil conditions found in Abu Dhabi and across the GCC."
        url={pageUrl}
        datePublished="2025-05-13"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={['UPVC drainage pipes', 'saline soil Abu Dhabi', 'BS EN 1401', 'BS EN 1329', 'sabkha soil piping', 'GCC drainage solutions']}
        proficiencyLevel="Intermediate"
        relatedGuides={[
          { title: 'BS EN 1452 Complete Guide', url: `${baseUrl}/technical/bs-en-1452-complete-guide` },
          { title: 'UPVC Installation Best Practices', url: `${baseUrl}/technical/upvc-installation-best-practices` },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: isAr ? 'الأدلة التقنية' : 'Technical Guides', url: `${baseUrl}/technical` },
        { name: isAr ? 'أنابيب الصرف' : 'Drainage Pipes', url: `${baseUrl}/technical` },
        { name: isAr ? 'التربة الملحية أبوظبي' : 'Saline Soil Abu Dhabi', url: pageUrl },
      ]} />

      <PageHeader
        title={isAr ? 'أفضل أنابيب UPVC للصرف في التربة الملحية بأبوظبي ودول الخليج' : 'Best UPVC Drainage Pipes for Saline Soil in Abu Dhabi & GCC Projects'}
        subtitle={isAr ? 'حلول صرف مقاومة للتآكل مصمّمة لتحدّيات التربة الملحية والسبخة في المنطقة' : 'Corrosion-resistant drainage solutions engineered for the region\'s sabkha and saline soil challenges'}
        breadcrumbs={[
          { label: isAr ? 'الأدلة التقنية' : 'Technical Guides' },
          { label: isAr ? 'صرف التربة الملحية' : 'Saline Soil Drainage' },
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
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'التربة الملحية (السبخة) في أبوظبي تحتوي على تركيزات عالية من الكلوريدات والكبريتات التي تُتلف الأنابيب المعدنية' : 'Saline (sabkha) soil in Abu Dhabi contains high chloride and sulphate concentrations that destroy metallic pipes'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'أنابيب UPVC مقاومة كيميائياً بالكامل للأملاح والأحماض والقلويات الموجودة في تربة الخليج' : 'UPVC Pipes / Fittings are fully chemically resistant to salts, acids, and alkalis found in Gulf soil'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'معتمدة وفق BS EN 1401 (تحت الأرض) و BS EN 1329 (فوق الأرض) لأنظمة صرف كاملة' : 'Certified to BS EN 1401 (underground) and BS EN 1329 (above-ground) for complete drainage systems'}</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>{isAr ? 'عمر افتراضي يتجاوز 50 عاماً دون تآكل حتى في أقسى ظروف التربة' : '50+ year lifespan with zero corrosion even in the harshest soil conditions'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">

            <AnimateOnScroll animation="fade-up">
              <section id="sabkha-challenge" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'تحدّي السبخة: واقع التربة في أبوظبي' : 'The Sabkha Challenge: Abu Dhabi\'s Soil Reality'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تتميّز أبوظبي وأجزاء كبيرة من دول الخليج بانتشار تربة السبخة — وهي طبقات ملحية رطبة تتكوّن من ترسبات بحرية قديمة. تحتوي هذه التربة على تركيزات عالية جداً من كلوريد الصوديوم وكبريتات المغنيسيوم وكربونات الكالسيوم، مع مستوى pH يتراوح بين 7.5 و 9.5. هذه البيئة الكيميائية العدوانية تُعجّل من تآكل الأنابيب المعدنية بشكل كبير، مما يؤدي إلى أعطال مبكرة وتكاليف صيانة مرتفعة.'
                    : 'Abu Dhabi and large portions of the GCC feature extensive sabkha soil — saline, moisture-laden layers formed from ancient marine deposits. These soils contain very high concentrations of sodium chloride, magnesium sulphate, and calcium carbonate, with pH levels ranging from 7.5 to 9.5. This aggressive chemical environment dramatically accelerates corrosion in metallic piping, leading to premature failures and high maintenance costs.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'في المناطق الساحلية كجزيرة السعديات والريم وياس، يكون منسوب المياه الجوفية مرتفعاً مما يزيد من تعرّض الأنابيب المدفونة للمحاليل الملحية المركّزة. لذلك تُعتبر المواد البلاستيكية المقاومة كيميائياً — وعلى رأسها UPVC — الحل الأمثل لأنظمة الصرف في هذه البيئات.'
                    : 'In coastal zones such as Saadiyat Island, Al Reem, and Yas, the water table is high, increasing buried pipe exposure to concentrated saline solutions. Chemically resistant plastic materials — particularly UPVC — are therefore the optimal solution for drainage systems in these environments.'}
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="upvc-resistance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'المقاومة الكيميائية لأنابيب UPVC' : 'UPVC Chemical Resistance Properties'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'يتميّز البولي فينيل كلوريد غير الملدّن (UPVC) بمقاومة استثنائية للتآكل الكيميائي. على عكس الحديد الزهر والصلب المجلفن والأنابيب الإسمنتية، لا تتفاعل أنابيب UPVC مع الأملاح والأحماض والقلويات الموجودة في تربة الخليج. هذه المقاومة متأصّلة في التركيب الجزيئي للمادة ولا تعتمد على طلاءات أو بطانات خارجية قابلة للتلف.'
                    : 'Unplasticized Polyvinyl Chloride (UPVC) delivers exceptional chemical corrosion resistance. Unlike cast iron, galvanised steel, and cement pipes, UPVC Pipes / Fittings do not react with the salts, acids, and alkalis present in Gulf soil. This resistance is inherent to the molecular structure of the material and does not depend on external coatings or linings that can be damaged.'}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{isAr ? 'خصائص المقاومة الكيميائية:' : 'Chemical Resistance Properties:'}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {isAr ? 'مقاومة كاملة لكلوريد الصوديوم (NaCl) بجميع التركيزات' : 'Full resistance to sodium chloride (NaCl) at all concentrations'}</li>
                    <li>• {isAr ? 'مقاومة لكبريتات المغنيسيوم والكالسيوم' : 'Resistant to magnesium and calcium sulphates'}</li>
                    <li>• {isAr ? 'لا تتأثر بالبيئات القلوية (pH حتى 12)' : 'Unaffected by alkaline environments (pH up to 12)'}</li>
                    <li>• {isAr ? 'عمر افتراضي يتجاوز 50 عاماً في التربة العدوانية' : '50+ year service life in aggressive soils'}</li>
                    <li>• {isAr ? 'سطح داخلي أملس يمنع تراكم الرواسب' : 'Smooth bore prevents sediment accumulation'}</li>
                  </ul>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="standards" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'المعايير والاعتمادات' : 'Standards & Compliance'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تُصنّع كراون بلاستيك أنابيب Pipes / Fittings للصرف وفق معيارين رئيسيين يغطيان جميع تطبيقات الصرف:'
                    : 'Crown Plastic manufactures drainage Pipes / Fittings to two primary standards covering all drainage applications:'}
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">BS EN 1329</h3>
                    <p className="text-gray-700 mb-2">{isAr ? 'أنظمة الصرف فوق الأرض داخل المباني' : 'Above-ground soil and waste discharge inside buildings'}</p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• {isAr ? 'وصلات لحام بالمذيب' : 'Solvent cement joints'}</li>
                      <li>• {isAr ? 'أقطار 32 مم إلى 160 مم' : '32 mm to 160 mm diameters'}</li>
                      <li>• {isAr ? 'مقاومة للمياه الساخنة حتى 60°C' : 'Hot water resistant up to 60°C'}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">BS EN 1401</h3>
                    <p className="text-gray-700 mb-2">{isAr ? 'أنظمة الصرف تحت الأرض بدون ضغط' : 'Underground non-pressure drainage and sewerage'}</p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• {isAr ? 'وصلات حلقة مطاطية للتمدد الحراري' : 'Push-fit rubber ring joints for thermal expansion'}</li>
                      <li>• {isAr ? 'أقطار 110 مم إلى 500 مم' : '110 mm to 500 mm diameters'}</li>
                      <li>• {isAr ? 'مثالية للتربة الملحية والسبخة' : 'Ideal for saline and sabkha soils'}</li>
                    </ul>
                  </div>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="installation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{isAr ? 'أفضل ممارسات التركيب في التربة الملحية' : 'Installation Best Practices in Saline Soil'}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'على الرغم من مقاومة أنابيب UPVC للتآكل الكيميائي، فإن التركيب السليم ضروري لضمان الأداء طويل المدى في التربة الملحية. توصي كراون بلاستيك بالممارسات التالية لمشاريع أبوظبي ودول الخليج:'
                    : 'While UPVC Pipes / Fittings are inherently resistant to chemical corrosion, proper installation is essential for long-term performance in saline soil. Crown Plastic recommends the following practices for Abu Dhabi and GCC projects:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{isAr ? 'استخدام طبقة رمل ناعم خالٍ من الأملاح كفراش للأنابيب بسمك لا يقل عن 100 مم' : 'Use clean, salt-free fine sand bedding at minimum 100 mm depth'}</li>
                  <li>{isAr ? 'ضمان ميل صرف لا يقل عن 1:80 للأنابيب الأفقية تحت الأرض' : 'Maintain minimum 1:80 gradient for horizontal underground pipes'}</li>
                  <li>{isAr ? 'حماية الوصلات من التعرّض المباشر للمياه الجوفية الملحية أثناء التركيب' : 'Protect joints from direct saline groundwater exposure during installation'}</li>
                  <li>{isAr ? 'اختبار ضغط الخط الكامل قبل الردم النهائي' : 'Pressure test the complete line before final backfilling'}</li>
                  <li>{isAr ? 'استخدام وصلات حلقة مطاطية (BS EN 1401) للتمديدات تحت الأرض للسماح بالتمدد الحراري' : 'Use rubber ring joints (BS EN 1401) for underground runs to allow thermal movement'}</li>
                </ul>
              </section>
            </AnimateOnScroll>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isAr ? 'هل تحتاج أنابيب صرف UPVC لمشروعك في أبوظبي؟' : 'Need UPVC Drainage Pipes / Fittings for Your Abu Dhabi Project?'}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'كراون بلاستيك توفر أنابيب صرف UPVC معتمدة وفق BS EN 1401 و BS EN 1329 مع خبرة تتجاوز 30 عاماً في مشاريع التربة الملحية.'
              : 'Crown Plastic supplies BS EN 1401 & BS EN 1329 certified UPVC drainage Pipes / Fittings with 30+ years of experience in saline soil projects.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              {isAr ? 'طلب عرض سعر' : 'Request Quote'} <Icon name="arrow" size={20} />
            </Link>
            <Link href="/products/upvc-drainage-pipes" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20">
              {isAr ? 'عرض منتجات الصرف' : 'View Drainage Products'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <aside className="py-16 bg-gray-50" aria-label={isAr ? 'أدلة تقنية ذات صلة' : 'Related technical guides'}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{isAr ? 'أدلة تقنية ذات صلة' : 'Related Technical Guides'}</h2>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            <Link href="/technical/upvc-installation-best-practices" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="tools" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'أفضل ممارسات تركيب UPVC' : 'UPVC Installation Best Practices'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'دليل التركيب خطوة بخطوة' : 'Step-by-step installation guide'}</p>
            </Link>
            <Link href="/technical/pvc-pressure-pipe-specs-prices-dubai" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="pressure" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{isAr ? 'مواصفات أنابيب الضغط في دبي' : 'PVC Pressure Pipe Specs Dubai'}</h3>
              <p className="text-sm text-gray-600">{isAr ? 'PN10 مقابل PN16 للأبراج' : 'PN10 vs PN16 for high-rises'}</p>
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
