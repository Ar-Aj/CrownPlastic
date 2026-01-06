// FAQ Configuration for Crown Plastic Pipes - Phase 2 AEO Implementation
// 50+ Q&A pairs organized into 3 clusters for Featured Snippet Optimization

export interface FAQItem {
  id: string;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  cluster: 'technical-standards' | 'installation-maintenance' | 'comparison-selection';
  targetKeywords: string[];
  featuredSnippetTarget?: string;
}

// =============================================================================
// CLUSTER 1: TECHNICAL STANDARDS & SPECIFICATIONS (15 Q&As)
// Target: Engineers, architects, specifiers
// Focus: "[Standard] explained" queries
// =============================================================================

export const technicalStandardsFAQs: FAQItem[] = [
  {
    id: 'ts-1',
    question: 'What is BS EN 1452 standard for UPVC pipes?',
    questionAr: 'ما هو معيار BS EN 1452 لأنابيب UPVC؟',
    answer: `BS EN 1452 is the European standard for unplasticized polyvinyl chloride (UPVC) pressure pipes used in water supply systems. This standard specifies the requirements for UPVC pipes with a Minimum Required Strength (MRS) of 25 MPa, ensuring exceptional durability and pressure resistance.

The standard defines pressure ratings from PN10 to PN25, with Crown Plastic Pipes manufacturing pipes compliant with PN10 (10 bar), PN16 (16 bar), and PN20 (20 bar) ratings. BS EN 1452 covers pipe dimensions from 16mm to 630mm diameter, material composition requirements, and rigorous testing protocols.

Crown Plastic Pipes holds BS EN 1452 certification for our complete UPVC pressure pipe range, verified by BSI Kitemark certification. This ensures our pipes meet strict quality standards for potable water applications, municipal infrastructure, and industrial water transport across the UAE and GCC markets.`,
    answerAr: `BS EN 1452 هو المعيار الأوروبي لأنابيب البولي فينيل كلوريد غير الملدن (UPVC) المستخدمة في أنظمة إمداد المياه. يحدد هذا المعيار متطلبات أنابيب UPVC بقوة مطلوبة أدنى (MRS) تبلغ 25 ميجا باسكال، مما يضمن متانة استثنائية ومقاومة للضغط.

يحدد المعيار تصنيفات الضغط من PN10 إلى PN25، حيث تصنع Crown Plastic Pipes أنابيب متوافقة مع تصنيفات PN10 (10 بار) و PN16 (16 بار) و PN20 (20 بار). يغطي BS EN 1452 أبعاد الأنابيب من 16 مم إلى 630 مم قطر، ومتطلبات تركيب المواد، وبروتوكولات الاختبار الصارمة.

تحمل Crown Plastic Pipes شهادة BS EN 1452 لمجموعة أنابيب الضغط UPVC الكاملة لدينا، المؤكدة بشهادة BSI Kitemark.`,
    cluster: 'technical-standards',
    targetKeywords: ['BS EN 1452', 'UPVC standard', 'European pipe standard', 'MRS 25 MPa'],
    featuredSnippetTarget: 'BS EN 1452 standard explained'
  },
  {
    id: 'ts-2',
    question: "What's the difference between BS EN 1452 and DIN 8062 standards?",
    questionAr: 'ما الفرق بين معياري BS EN 1452 و DIN 8062؟',
    answer: `BS EN 1452 and DIN 8062 are both internationally recognized standards for UPVC pipes, but they differ in origin, specifications, and regional adoption.

**BS EN 1452 (European Standard):**
- Specifies MRS 25 MPa requirement
- Pressure ratings: PN10, PN16, PN20, PN25
- Primarily used in UK, GCC, and Commonwealth countries
- Includes comprehensive testing protocols
- Covers water supply applications

**DIN 8062 (German Standard):**
- German industrial standard for PVC-U pipes
- Focuses on dimensional specifications
- Wall thickness calculated using SDR formula
- Widely used in Germany and European manufacturing
- Compatible with metric fittings

Crown Plastic Pipes manufactures UPVC pipes certified to both standards, ensuring compatibility across international markets. Our dual certification allows contractors to specify either standard based on project requirements, making our products suitable for diverse applications from UAE infrastructure to European exports.`,
    answerAr: `BS EN 1452 و DIN 8062 كلاهما معايير معترف بها دوليًا لأنابيب UPVC، لكنهما يختلفان في المنشأ والمواصفات والاعتماد الإقليمي.

**BS EN 1452 (المعيار الأوروبي):**
- يحدد متطلب MRS 25 ميجا باسكال
- تصنيفات الضغط: PN10، PN16، PN20، PN25
- يستخدم بشكل أساسي في المملكة المتحدة ودول مجلس التعاون الخليجي ودول الكومنولث

**DIN 8062 (المعيار الألماني):**
- المعيار الصناعي الألماني لأنابيب PVC-U
- يركز على المواصفات البعدية
- يحسب سمك الجدار باستخدام صيغة SDR

تصنع Crown Plastic Pipes أنابيب UPVC معتمدة وفقًا لكلا المعيارين.`,
    cluster: 'technical-standards',
    targetKeywords: ['BS EN 1452 vs DIN 8062', 'UPVC pipe standards comparison', 'European vs German standard'],
    featuredSnippetTarget: 'difference BS EN 1452 DIN 8062'
  },
  {
    id: 'ts-3',
    question: 'What is GSO EN 805 water supply standard?',
    questionAr: 'ما هو معيار GSO EN 805 لإمداد المياه؟',
    answer: `GSO EN 805 is the Gulf Standard Organization's adopted standard for water supply systems, harmonized with European EN 805. This standard establishes requirements for the design, installation, testing, and commissioning of water supply pipelines in GCC countries.

**Key Requirements:**
- Pressure testing at 1.5x operating pressure
- Disinfection procedures for potable water systems
- Material compatibility requirements
- Leak testing protocols
- Documentation requirements

**Coverage:**
GSO EN 805 applies to all water supply installations in UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. It works in conjunction with product standards like BS EN 1452 for UPVC pipes.

Crown Plastic Pipes products are designed to meet GSO EN 805 requirements, ensuring our UPVC pipes can be specified for municipal water projects, residential developments, and commercial buildings across the entire GCC region. Our technical team provides compliance documentation for project submissions.`,
    answerAr: `GSO EN 805 هو المعيار المعتمد من منظمة التقييس الخليجية لأنظمة إمداد المياه، المتوافق مع المعيار الأوروبي EN 805. يحدد هذا المعيار متطلبات التصميم والتركيب والاختبار والتشغيل لخطوط أنابيب إمداد المياه في دول مجلس التعاون الخليجي.

**المتطلبات الرئيسية:**
- اختبار الضغط بمعدل 1.5 ضعف ضغط التشغيل
- إجراءات التطهير لأنظمة المياه الصالحة للشرب
- متطلبات توافق المواد

**التغطية:**
ينطبق GSO EN 805 على جميع منشآت إمداد المياه في الإمارات والسعودية والكويت وقطر والبحرين وعمان.

منتجات Crown Plastic Pipes مصممة لتلبية متطلبات GSO EN 805.`,
    cluster: 'technical-standards',
    targetKeywords: ['GSO EN 805', 'Gulf water supply standard', 'GCC pipe standard'],
    featuredSnippetTarget: 'GSO EN 805 explained'
  },
  {
    id: 'ts-4',
    question: 'What is SASO TR-BM-5 certification for pipes?',
    questionAr: 'ما هي شهادة SASO TR-BM-5 للأنابيب؟',
    answer: `SASO TR-BM-5 is the Saudi Standards, Metrology and Quality Organization (SASO) technical regulation for building materials, including plastic pipes. This certification is mandatory for any pipe products entering the Saudi Arabian market.

**Certification Requirements:**
- Product testing by SASO-accredited laboratories
- Factory quality management system audit
- Compliance with referenced international standards
- Arabic labeling requirements
- Periodic surveillance inspections

**Benefits of SASO Certification:**
- Legal market entry to Saudi Arabia
- Recognition by Saudi contractors and consultants
- Required for government projects
- Demonstrates quality commitment

Crown Plastic Pipes holds SASO TR-BM-5 certification for our UPVC, PPR, and HDPE pipe ranges. This certification enables direct export to Saudi Arabia and ensures our products meet the Kingdom's stringent quality requirements for infrastructure, construction, and industrial applications.`,
    answerAr: `SASO TR-BM-5 هي اللائحة الفنية من الهيئة السعودية للمواصفات والمقاييس والجودة (ساسو) لمواد البناء، بما في ذلك الأنابيب البلاستيكية. هذه الشهادة إلزامية لأي منتجات أنابيب تدخل السوق السعودية.

**متطلبات الشهادة:**
- اختبار المنتج من قبل مختبرات معتمدة من ساسو
- تدقيق نظام إدارة جودة المصنع
- الامتثال للمعايير الدولية المرجعية
- متطلبات وضع العلامات بالعربية

**فوائد شهادة ساسو:**
- الدخول القانوني للسوق السعودية
- الاعتراف من المقاولين والاستشاريين السعوديين

تحمل Crown Plastic Pipes شهادة SASO TR-BM-5 لمجموعات أنابيب UPVC و PPR و HDPE لدينا.`,
    cluster: 'technical-standards',
    targetKeywords: ['SASO TR-BM-5', 'Saudi pipe certification', 'SASO certification'],
    featuredSnippetTarget: 'SASO TR-BM-5 certification'
  },
  {
    id: 'ts-5',
    question: 'What are PN pressure ratings (PN10, PN16, PN20, PN25)?',
    questionAr: 'ما هي تصنيفات الضغط PN (PN10، PN16، PN20، PN25)؟',
    answer: `PN (Pressure Nominale) ratings indicate the maximum working pressure a pipe can safely handle at 20°C water temperature. The number represents the pressure in bar (1 bar ≈ 14.5 psi).

**PN Rating Breakdown:**

| Rating | Pressure (bar) | PSI | Applications |
|--------|---------------|-----|--------------|
| PN10 | 10 bar | 145 psi | Low-pressure water distribution, irrigation |
| PN16 | 16 bar | 232 psi | Standard water supply, residential/commercial |
| PN20 | 20 bar | 290 psi | High-rise buildings, industrial applications |
| PN25 | 25 bar | 363 psi | High-pressure industrial, pumping stations |

**Wall Thickness Correlation:**
Higher PN ratings require thicker pipe walls. For the same diameter:
- PN10: Thinnest wall (economical)
- PN16: Standard wall thickness
- PN20/25: Thickest wall (maximum strength)

**Selection Guide:**
- Residential: PN10 or PN16
- Commercial buildings: PN16
- High-rise (>10 floors): PN20
- Industrial/pumping: PN20 or PN25

Crown Plastic Pipes offers UPVC pipes in PN10 and PN16 ratings across all diameters from 20mm to 250mm, meeting 95% of construction requirements in the GCC region.`,
    answerAr: `تشير تصنيفات PN (الضغط الاسمي) إلى أقصى ضغط تشغيل يمكن للأنبوب تحمله بأمان عند درجة حرارة مياه 20 درجة مئوية. الرقم يمثل الضغط بالبار (1 بار ≈ 14.5 رطل/بوصة مربعة).

**تفصيل تصنيفات PN:**

| التصنيف | الضغط (بار) | التطبيقات |
|---------|------------|----------|
| PN10 | 10 بار | توزيع المياه منخفضة الضغط، الري |
| PN16 | 16 بار | إمداد المياه القياسي، سكني/تجاري |
| PN20 | 20 بار | المباني الشاهقة، التطبيقات الصناعية |
| PN25 | 25 بار | صناعي عالي الضغط، محطات الضخ |

**ارتباط سمك الجدار:**
تتطلب تصنيفات PN الأعلى جدران أنابيب أكثر سمكًا.

توفر Crown Plastic Pipes أنابيب UPVC بتصنيفات PN10 و PN16 عبر جميع الأقطار من 20 مم إلى 250 مم.`,
    cluster: 'technical-standards',
    targetKeywords: ['PN pressure rating', 'PN10 PN16 PN20', 'pipe pressure rating', 'bar rating pipes'],
    featuredSnippetTarget: 'PN pressure ratings explained'
  },
  {
    id: 'ts-6',
    question: 'What is SDR in UPVC pipe specifications?',
    questionAr: 'ما هو SDR في مواصفات أنابيب UPVC؟',
    answer: `SDR (Standard Dimension Ratio) is the ratio of a pipe's outside diameter to its wall thickness. This universal measurement allows easy comparison of pipe strength regardless of diameter.

**SDR Formula:**
SDR = Outside Diameter ÷ Wall Thickness

**Common SDR Values:**
- SDR 41: Thin wall, low pressure (PN6)
- SDR 33: Light duty applications
- SDR 26: Standard pressure (PN10)
- SDR 21: Medium pressure (PN12.5)
- SDR 17: High pressure (PN16)
- SDR 13.6: Very high pressure (PN20)
- SDR 11: Maximum pressure (PN25)

**Key Principle:**
Lower SDR = Thicker wall = Higher pressure rating

**Example Calculation:**
For a 110mm pipe with 4.2mm wall thickness:
SDR = 110 ÷ 4.2 = 26.2 (approximately SDR 26, suitable for PN10)

Understanding SDR helps engineers select the right pipe for required pressure ratings while optimizing material costs. Crown Plastic Pipes provides SDR specifications for all our UPVC products in our technical datasheets.`,
    answerAr: `SDR (نسبة الأبعاد القياسية) هي نسبة القطر الخارجي للأنبوب إلى سمك جداره. يتيح هذا القياس العالمي مقارنة سهلة لقوة الأنبوب بغض النظر عن القطر.

**صيغة SDR:**
SDR = القطر الخارجي ÷ سمك الجدار

**قيم SDR الشائعة:**
- SDR 41: جدار رقيق، ضغط منخفض
- SDR 26: ضغط قياسي (PN10)
- SDR 17: ضغط عالي (PN16)
- SDR 11: أقصى ضغط (PN25)

**المبدأ الأساسي:**
SDR أقل = جدار أسمك = تصنيف ضغط أعلى

توفر Crown Plastic Pipes مواصفات SDR لجميع منتجات UPVC لدينا في أوراق البيانات الفنية.`,
    cluster: 'technical-standards',
    targetKeywords: ['SDR pipe', 'Standard Dimension Ratio', 'SDR calculation', 'pipe wall thickness'],
    featuredSnippetTarget: 'SDR UPVC pipes explained'
  },
  {
    id: 'ts-7',
    question: 'What is MRS (Minimum Required Strength) in UPVC pipes?',
    questionAr: 'ما هي MRS (الحد الأدنى من القوة المطلوبة) في أنابيب UPVC؟',
    answer: `MRS (Minimum Required Strength) is a classification system that rates the long-term pressure capability of thermoplastic pipes. For UPVC pipes, the standard MRS value is 25 MPa (MRS 25).

**What MRS 25 Means:**
- The pipe material can withstand 25 megapascals of stress
- Tested over 50-year extrapolated lifetime
- Based on hydrostatic pressure testing at 20°C
- Provides safety factor for long-term performance

**Testing Methodology:**
1. Pipe samples tested at multiple temperatures (20°C, 40°C, 60°C)
2. Time-to-failure recorded at various stress levels
3. Results plotted on log-log scale
4. Extrapolated to 50-year lifetime
5. Lower confidence limit determines MRS value

**Significance:**
MRS determines the pipe's pressure rating through the formula:
PN = (2 × MRS × Design Factor) ÷ (SDR - 1)

All Crown Plastic Pipes UPVC products are manufactured to MRS 25 specifications, verified through independent laboratory testing. This ensures consistent quality and reliable 50+ year service life for water supply applications.`,
    answerAr: `MRS (الحد الأدنى من القوة المطلوبة) هو نظام تصنيف يقيم قدرة الضغط طويلة المدى للأنابيب البلاستيكية الحرارية. لأنابيب UPVC، قيمة MRS القياسية هي 25 ميجا باسكال (MRS 25).

**ما يعنيه MRS 25:**
- يمكن لمادة الأنبوب تحمل 25 ميجا باسكال من الإجهاد
- مختبر على مدى عمر افتراضي يمتد 50 عامًا
- يعتمد على اختبار الضغط الهيدروستاتيكي عند 20 درجة مئوية

**منهجية الاختبار:**
1. اختبار عينات الأنابيب عند درجات حرارة متعددة
2. تسجيل الوقت حتى الفشل
3. استقراء النتائج إلى 50 عامًا

جميع منتجات Crown Plastic Pipes UPVC مصنعة وفقًا لمواصفات MRS 25.`,
    cluster: 'technical-standards',
    targetKeywords: ['MRS UPVC', 'Minimum Required Strength', 'MRS 25 MPa', 'pipe strength rating'],
    featuredSnippetTarget: 'MRS Minimum Required Strength pipes'
  },
  {
    id: 'ts-8',
    question: 'How is UPVC pipe wall thickness calculated?',
    questionAr: 'كيف يتم حساب سمك جدار أنبوب UPVC؟',
    answer: `UPVC pipe wall thickness is calculated using the Barlow's formula, which considers the desired pressure rating, pipe diameter, and material strength.

**Wall Thickness Formula:**
e = (P × D) ÷ (2 × S × F) + c

Where:
- e = Minimum wall thickness (mm)
- P = Design pressure (bar)
- D = Outside diameter (mm)
- S = Material strength (MRS value, typically 25 MPa for UPVC)
- F = Safety factor (typically 1.6-2.5)
- c = Manufacturing tolerance (usually 0.3-0.5mm)

**Simplified SDR Method:**
Wall thickness can also be derived from SDR:
e = D ÷ SDR

**Example Calculation:**
For 110mm PN16 pipe:
- D = 110mm
- SDR = 17 (for PN16)
- e = 110 ÷ 17 = 6.5mm (minimum)

**Factors Affecting Thickness:**
1. Operating pressure (higher = thicker)
2. Pipe diameter (larger = thicker)
3. Operating temperature (higher = thicker)
4. Safety requirements (critical = thicker)

Crown Plastic Pipes provides detailed wall thickness specifications in our technical datasheets for all diameter and pressure combinations.`,
    answerAr: `يتم حساب سمك جدار أنبوب UPVC باستخدام صيغة بارلو، التي تأخذ في الاعتبار تصنيف الضغط المطلوب وقطر الأنبوب وقوة المادة.

**صيغة سمك الجدار:**
e = (P × D) ÷ (2 × S × F) + c

حيث:
- e = الحد الأدنى لسمك الجدار (مم)
- P = ضغط التصميم (بار)
- D = القطر الخارجي (مم)
- S = قوة المادة (قيمة MRS)
- F = عامل الأمان

**طريقة SDR المبسطة:**
يمكن أيضًا اشتقاق سمك الجدار من SDR:
e = D ÷ SDR

توفر Crown Plastic Pipes مواصفات سمك الجدار المفصلة في أوراق البيانات الفنية لدينا.`,
    cluster: 'technical-standards',
    targetKeywords: ['UPVC wall thickness', 'pipe thickness calculation', 'Barlow formula pipe'],
    featuredSnippetTarget: 'UPVC pipe wall thickness formula'
  },
  {
    id: 'ts-9',
    question: 'What is ASTM D1785 standard for PVC pipes?',
    questionAr: 'ما هو معيار ASTM D1785 لأنابيب PVC؟',
    answer: `ASTM D1785 is the American Society for Testing and Materials standard for PVC (poly vinyl chloride) plastic pipe, Schedules 40, 80, and 120. This standard uses imperial measurements and is widely used in North America and some GCC projects.

**Key Specifications:**
- Pipe sizes: 1/8" to 24" (3mm to 600mm)
- Schedule 40: Standard wall (most common)
- Schedule 80: Extra heavy wall (higher pressure)
- Schedule 120: Double extra heavy (maximum strength)

**Comparison with BS EN 1452:**
| Feature | ASTM D1785 | BS EN 1452 |
|---------|------------|------------|
| Measurement | Imperial (inches) | Metric (mm) |
| Classification | Schedule system | PN system |
| Origin | American | European |
| GCC Usage | Some projects | Predominant |

**GCC Applications:**
ASTM D1785 pipes are used in UAE for:
- Projects with American consultants
- Industrial facilities following US standards
- Retrofitting American-designed plants

Crown Plastic Pipes manufactures pipes compatible with both ASTM D1785 and BS EN 1452 standards, allowing flexibility in project specifications.`,
    answerAr: `ASTM D1785 هو معيار الجمعية الأمريكية للاختبار والمواد لأنابيب PVC البلاستيكية، الجداول 40 و 80 و 120. يستخدم هذا المعيار القياسات الإمبراطورية ويستخدم على نطاق واسع في أمريكا الشمالية وبعض مشاريع دول مجلس التعاون الخليجي.

**المواصفات الرئيسية:**
- أحجام الأنابيب: 1/8" إلى 24"
- الجدول 40: جدار قياسي
- الجدول 80: جدار ثقيل إضافي
- الجدول 120: ثقيل مزدوج إضافي

تصنع Crown Plastic Pipes أنابيب متوافقة مع معايير ASTM D1785 و BS EN 1452.`,
    cluster: 'technical-standards',
    targetKeywords: ['ASTM D1785', 'Schedule 40 PVC', 'American pipe standard'],
    featuredSnippetTarget: 'ASTM D1785 PVC standard'
  },
  {
    id: 'ts-10',
    question: 'What is ISO 1452 standard for PVC-U pipes?',
    questionAr: 'ما هو معيار ISO 1452 لأنابيب PVC-U؟',
    answer: `ISO 1452 is the international standard for plastics piping systems for water supply and for buried and above-ground drainage and sewerage under pressure. It provides globally harmonized requirements for PVC-U (unplasticized polyvinyl chloride) pipes.

**Standard Structure:**
- ISO 1452-1: General requirements
- ISO 1452-2: Pipes specifications
- ISO 1452-3: Fittings specifications
- ISO 1452-4: Valves specifications
- ISO 1452-5: System fitness for purpose

**Relationship to BS EN 1452:**
BS EN 1452 is the European adoption of ISO 1452, with:
- Identical technical requirements
- Same test methods
- Equivalent pressure ratings
- Compatible dimensional specifications

**Why ISO 1452 Matters:**
- International recognition for exports
- Harmonized testing across markets
- Consistent quality requirements
- Facilitates global trade

Crown Plastic Pipes products comply with both ISO 1452 and BS EN 1452, providing dual certification that enables export to European, Asian, and African markets alongside our primary GCC focus.`,
    answerAr: `ISO 1452 هو المعيار الدولي لأنظمة الأنابيب البلاستيكية لإمداد المياه والصرف المدفون وفوق الأرض تحت الضغط. يوفر متطلبات متناسقة عالميًا لأنابيب PVC-U.

**هيكل المعيار:**
- ISO 1452-1: المتطلبات العامة
- ISO 1452-2: مواصفات الأنابيب
- ISO 1452-3: مواصفات التوصيلات

**العلاقة مع BS EN 1452:**
BS EN 1452 هو الاعتماد الأوروبي لـ ISO 1452، مع متطلبات فنية متطابقة.

تتوافق منتجات Crown Plastic Pipes مع كل من ISO 1452 و BS EN 1452.`,
    cluster: 'technical-standards',
    targetKeywords: ['ISO 1452', 'PVC-U international standard', 'ISO pipe standard'],
    featuredSnippetTarget: 'ISO 1452 PVC-U standard'
  },
  {
    id: 'ts-11',
    question: 'What temperature limits apply to UPVC pipes?',
    questionAr: 'ما حدود درجة الحرارة التي تنطبق على أنابيب UPVC؟',
    answer: `UPVC pipes have a standard operating temperature range of -10°C to +40°C (14°F to 104°F). Operating outside this range requires pressure derating or alternative materials.

**Temperature Performance:**
| Temperature | Pressure Capacity | Recommendation |
|-------------|-------------------|----------------|
| Below -10°C | Risk of brittleness | Use PPR or insulation |
| -10°C to +20°C | 100% of rated pressure | Normal operation |
| +20°C to +30°C | 80-90% of rated pressure | Acceptable |
| +30°C to +40°C | 60-75% of rated pressure | Monitor closely |
| Above +40°C | Not recommended | Use PPR or CPVC |

**Derating Factors:**
- At 25°C: Multiply PN by 0.9
- At 30°C: Multiply PN by 0.75
- At 35°C: Multiply PN by 0.6
- At 40°C: Multiply PN by 0.5

**GCC Climate Considerations:**
Gulf summer temperatures can exceed 45°C ambient. For exposed pipework:
- Use pipe insulation or shading
- Bury pipes at minimum 600mm depth
- Consider PPR for hot water applications

Crown Plastic Pipes recommends our PPR range for temperatures above 40°C and provides derating tables in our technical documentation for borderline applications.`,
    answerAr: `أنابيب UPVC لها نطاق درجة حرارة تشغيل قياسي من -10 درجة مئوية إلى +40 درجة مئوية. التشغيل خارج هذا النطاق يتطلب تخفيض الضغط أو استخدام مواد بديلة.

**أداء درجة الحرارة:**
| درجة الحرارة | سعة الضغط | التوصية |
|--------------|----------|---------|
| أقل من -10°م | خطر الهشاشة | استخدم PPR أو العزل |
| -10°م إلى +20°م | 100% من الضغط المصنف | تشغيل عادي |
| +20°م إلى +40°م | 60-90% | مقبول مع المراقبة |
| فوق +40°م | غير موصى به | استخدم PPR أو CPVC |

توصي Crown Plastic Pipes بمجموعة PPR لدينا لدرجات الحرارة فوق 40 درجة مئوية.`,
    cluster: 'technical-standards',
    targetKeywords: ['UPVC temperature limit', 'UPVC operating temperature', 'pipe temperature rating'],
    featuredSnippetTarget: 'UPVC pipes temperature range'
  },
  {
    id: 'ts-12',
    question: 'What is the lifespan of UPVC pipes (50-100 years)?',
    questionAr: 'ما هو العمر الافتراضي لأنابيب UPVC (50-100 سنة)؟',
    answer: `UPVC pipes have an expected service life of 50-100+ years when properly installed and operated within specifications. This exceptional longevity makes UPVC one of the most cost-effective piping materials over the total lifecycle.

**Factors Affecting Lifespan:**

| Factor | Impact on Lifespan |
|--------|-------------------|
| Operating pressure | Within PN rating = 50+ years |
| Temperature | Below 40°C = optimal lifespan |
| UV exposure | Protected = full lifespan |
| Chemical exposure | Compatible chemicals = no degradation |
| Installation quality | Proper jointing = leak-free service |

**Why UPVC Lasts So Long:**
1. **No corrosion** - Unlike metal pipes, UPVC doesn't rust
2. **Chemical resistance** - Immune to soil acids and alkalis
3. **No scaling** - Smooth bore maintains flow capacity
4. **UV stabilizers** - Protects against sun degradation
5. **No biological growth** - Resists biofilm formation

**Comparison with Other Materials:**
- Galvanized steel: 20-40 years
- Copper: 40-70 years
- UPVC: 50-100 years
- PPR: 50+ years (hot water applications)

Crown Plastic Pipes UPVC products are manufactured with premium virgin PVC compound and UV stabilizers, ensuring maximum service life for UAE and GCC installations.`,
    answerAr: `أنابيب UPVC لها عمر خدمة متوقع من 50-100+ سنة عند تركيبها وتشغيلها بشكل صحيح ضمن المواصفات. هذا العمر الطويل الاستثنائي يجعل UPVC واحدة من أكثر مواد الأنابيب فعالية من حيث التكلفة على مدار دورة الحياة الكاملة.

**لماذا يدوم UPVC طويلاً:**
1. **لا تآكل** - على عكس الأنابيب المعدنية، UPVC لا يصدأ
2. **مقاومة كيميائية** - محصن ضد أحماض وقلويات التربة
3. **لا ترسبات** - التجويف الأملس يحافظ على سعة التدفق

**المقارنة مع المواد الأخرى:**
- الصلب المجلفن: 20-40 سنة
- النحاس: 40-70 سنة
- UPVC: 50-100 سنة

منتجات Crown Plastic Pipes UPVC مصنعة من مركب PVC بكر ممتاز.`,
    cluster: 'technical-standards',
    targetKeywords: ['UPVC lifespan', 'UPVC pipe durability', 'how long UPVC pipes last'],
    featuredSnippetTarget: 'UPVC pipe lifespan years'
  },
  {
    id: 'ts-13',
    question: 'Are UPVC pipes compliant with drinking water standards?',
    questionAr: 'هل أنابيب UPVC متوافقة مع معايير مياه الشرب؟',
    answer: `Yes, UPVC pipes are fully compliant with drinking water (potable water) standards when manufactured to recognized certifications. Crown Plastic Pipes holds multiple potable water approvals for our UPVC range.

**Key Drinking Water Certifications:**

| Certification | Region | Requirement |
|---------------|--------|-------------|
| NSF/ANSI 61 | International | Drinking water system components |
| WRAS | UK | Water Regulations Advisory Scheme |
| BS EN 1452 | Europe/GCC | Potable water supply systems |
| GSO | GCC | Gulf drinking water compliance |
| SASO | Saudi Arabia | KSA potable water approval |

**Safety Assurance:**
1. **No lead or heavy metals** - Modern UPVC uses calcium-zinc stabilizers
2. **No plasticizers** - "Unplasticized" means no phthalates
3. **Migration testing** - Confirms no harmful substance leaching
4. **Taste and odor neutral** - No impact on water quality

**Health Standards Compliance:**
UPVC pipes must pass extraction tests confirming that chemical migration into water is below safe limits defined by WHO and regional health authorities.

Crown Plastic Pipes UPVC products are NSF/ANSI 61 certified and approved for potable water applications across UAE, Saudi Arabia, Kuwait, Qatar, and all GCC markets.`,
    answerAr: `نعم، أنابيب UPVC متوافقة تمامًا مع معايير مياه الشرب عند تصنيعها وفقًا للشهادات المعترف بها. تحمل Crown Plastic Pipes موافقات متعددة للمياه الصالحة للشرب لمجموعة UPVC لدينا.

**شهادات مياه الشرب الرئيسية:**
- NSF/ANSI 61: مكونات نظام مياه الشرب
- BS EN 1452: أنظمة إمداد المياه الصالحة للشرب
- GSO: امتثال مياه الشرب الخليجية

**ضمان السلامة:**
1. **لا رصاص أو معادن ثقيلة**
2. **لا ملدنات** - "غير ملدن" يعني لا فثالات
3. **اختبار الهجرة** - يؤكد عدم تسرب مواد ضارة

منتجات Crown Plastic Pipes UPVC معتمدة NSF/ANSI 61 ومعتمدة لتطبيقات المياه الصالحة للشرب.`,
    cluster: 'technical-standards',
    targetKeywords: ['UPVC drinking water safe', 'potable water UPVC', 'UPVC water certification'],
    featuredSnippetTarget: 'UPVC pipes safe drinking water'
  },
  {
    id: 'ts-14',
    question: 'What is the difference between solvent weld and rubber seal UPVC pipes?',
    questionAr: 'ما الفرق بين أنابيب UPVC الملحومة بالمذيب والمختومة بالمطاط؟',
    answer: `Solvent weld and rubber seal (push-fit) are the two primary joining methods for UPVC pipes, each suited to different applications and pressure requirements.

**Solvent Weld (Solvent Cement) Joints:**
- **How it works:** Chemical fusion of pipe and fitting surfaces
- **Pressure rating:** Up to PN25 (highest pressures)
- **Applications:** Pressure pipework, water supply
- **Advantages:** Permanent, high-strength, leak-proof
- **Limitations:** Requires cure time, difficult to disassemble
- **Skill level:** Moderate - proper preparation critical

**Rubber Seal (Push-Fit) Joints:**
- **How it works:** EPDM rubber ring creates water-tight seal
- **Pressure rating:** Up to PN16 (moderate pressures)
- **Applications:** Drainage, underground, large diameters
- **Advantages:** Fast installation, allows thermal movement
- **Limitations:** Lower pressure capacity
- **Skill level:** Easy - minimal training required

**Selection Guide:**
| Application | Recommended Joint |
|-------------|------------------|
| Potable water supply | Solvent weld |
| High-pressure systems | Solvent weld |
| Underground drainage | Rubber seal |
| Large diameter (>110mm) | Rubber seal |
| Areas needing expansion | Rubber seal |

Crown Plastic Pipes supplies both solvent weld and rubber ring socket pipes for complete system flexibility.`,
    answerAr: `اللحام بالمذيب والختم المطاطي هما طريقتا الربط الأساسيتان لأنابيب UPVC، كل منهما مناسب لتطبيقات ومتطلبات ضغط مختلفة.

**وصلات اللحام بالمذيب:**
- **كيف تعمل:** دمج كيميائي لأسطح الأنبوب والتوصيلة
- **تصنيف الضغط:** حتى PN25
- **التطبيقات:** أنابيب الضغط، إمداد المياه
- **المزايا:** دائمة، قوة عالية، مانعة للتسرب

**وصلات الختم المطاطي:**
- **كيف تعمل:** حلقة مطاط EPDM تخلق ختمًا محكمًا للماء
- **تصنيف الضغط:** حتى PN16
- **التطبيقات:** الصرف، تحت الأرض، الأقطار الكبيرة
- **المزايا:** تركيب سريع، يسمح بالحركة الحرارية

توفر Crown Plastic Pipes أنابيب اللحام بالمذيب والحلقة المطاطية لمرونة النظام الكاملة.`,
    cluster: 'technical-standards',
    targetKeywords: ['solvent weld vs rubber seal', 'UPVC joint types', 'push fit vs solvent cement'],
    featuredSnippetTarget: 'solvent weld rubber seal UPVC difference'
  },
  {
    id: 'ts-15',
    question: 'How do UPVC pipe sizes range from 20mm to 400mm?',
    questionAr: 'كيف تتراوح أحجام أنابيب UPVC من 20 مم إلى 400 مم؟',
    answer: `UPVC pipes are manufactured in standardized diameter ranges to suit applications from residential plumbing to municipal infrastructure. The sizing follows metric (mm) or imperial (inch) standards.

**Standard Metric Sizes (BS EN 1452):**

| Size Range | Common Diameters | Applications |
|------------|-----------------|--------------|
| Small | 20, 25, 32mm | Individual fixtures, branches |
| Medium | 40, 50, 63mm | Risers, floor distribution |
| Standard | 75, 90, 110mm | Main supply, drainage |
| Large | 160, 200, 250mm | Building mains, infrastructure |
| Extra Large | 315, 355, 400mm | Municipal supply, trunk mains |

**Selection by Flow Rate:**
- 20-32mm: Up to 0.5 L/s (residential taps)
- 50-63mm: 0.5-2 L/s (bathroom groups)
- 110mm: 2-5 L/s (building supply)
- 160-200mm: 5-15 L/s (commercial)
- 250-400mm: 15-50+ L/s (municipal)

**Imperial Equivalents:**
- 20mm ≈ 3/4"
- 32mm ≈ 1-1/4"
- 50mm ≈ 2"
- 110mm ≈ 4"
- 160mm ≈ 6"

Crown Plastic Pipes manufactures UPVC pressure pipes from 20mm to 250mm in standard stock, with larger sizes available on project order. All sizes comply with BS EN 1452 dimensional tolerances.`,
    answerAr: `تُصنع أنابيب UPVC في نطاقات قطر موحدة لتناسب التطبيقات من السباكة السكنية إلى البنية التحتية البلدية.

**الأحجام المترية القياسية (BS EN 1452):**

| نطاق الحجم | الأقطار الشائعة | التطبيقات |
|-----------|----------------|----------|
| صغير | 20، 25، 32 مم | تجهيزات فردية، فروع |
| متوسط | 40، 50، 63 مم | روافع، توزيع طابقي |
| قياسي | 75، 90، 110 مم | إمداد رئيسي، صرف |
| كبير | 160، 200، 250 مم | مواسير المباني الرئيسية |

**الاختيار حسب معدل التدفق:**
- 20-32 مم: حتى 0.5 لتر/ثانية
- 110 مم: 2-5 لتر/ثانية
- 250-400 مم: 15-50+ لتر/ثانية

تصنع Crown Plastic Pipes أنابيب ضغط UPVC من 20 مم إلى 250 مم في المخزون القياسي.`,
    cluster: 'technical-standards',
    targetKeywords: ['UPVC pipe sizes', 'UPVC diameter range', 'pipe size selection'],
    featuredSnippetTarget: 'UPVC pipe sizes chart'
  },
];

// =============================================================================
// CLUSTER 2: INSTALLATION, TROUBLESHOOTING & MAINTENANCE (20 Q&As)
// Target: Plumbers, contractors, DIY users
// Focus: "How to" queries (highest conversion)
// =============================================================================

export const installationMaintenanceFAQs: FAQItem[] = [
  {
    id: 'im-1',
    question: 'How to prevent UPVC pipe leaks during installation?',
    questionAr: 'كيفية منع تسرب أنابيب UPVC أثناء التركيب؟',
    answer: `Preventing UPVC pipe leaks requires proper preparation and technique during installation. Follow this 6-step process for leak-free joints:

**Step 1: Clean Pipe Ends**
Remove all dirt, dust, and moisture from pipe ends and fitting sockets. Use a clean cloth or fine sandpaper to lightly abrade glossy surfaces for better adhesion.

**Step 2: Dry Fit First**
Insert the pipe into the fitting without cement to check fit. Mark insertion depth with a pencil. The pipe should insert 2/3 of the socket depth.

**Step 3: Apply Primer (If Required)**
For larger diameters (>50mm) or cold weather, apply PVC primer to both surfaces. Allow 15-30 seconds to soften the surface.

**Step 4: Apply Solvent Cement Correctly**
Use the correct cement for pipe size. Apply an even layer to both the pipe end AND fitting socket. Work quickly - cement begins drying in 30 seconds.

**Step 5: Insert with Quarter Turn**
Push pipe fully into fitting and twist 1/4 turn to spread cement evenly. Hold firmly for 30 seconds to prevent pushback.

**Step 6: Cure Before Testing**
Allow minimum 15-20 minutes cure time before handling. Wait 24 hours before pressure testing at full working pressure.

**Common Leak Causes to Avoid:**
- Insufficient cement application
- Dirty or wet pipe surfaces
- Not inserting to full depth
- Moving joint before cure
- Wrong cement type for pipe size`,
    answerAr: `يتطلب منع تسرب أنابيب UPVC التحضير والتقنية المناسبة أثناء التركيب. اتبع هذه العملية المكونة من 6 خطوات لوصلات خالية من التسرب:

**الخطوة 1: تنظيف أطراف الأنبوب**
أزل كل الأوساخ والغبار والرطوبة.

**الخطوة 2: التركيب الجاف أولاً**
أدخل الأنبوب في التوصيلة بدون أسمنت للتحقق من الملاءمة.

**الخطوة 3: ضع البرايمر (إذا لزم الأمر)**

**الخطوة 4: ضع الأسمنت المذيب بشكل صحيح**

**الخطوة 5: أدخل مع لف ربع دورة**

**الخطوة 6: انتظر المعالجة قبل الاختبار**`,
    cluster: 'installation-maintenance',
    targetKeywords: ['prevent UPVC leaks', 'UPVC installation tips', 'stop pipe leaking'],
    featuredSnippetTarget: 'how to prevent UPVC pipe leaks'
  },
  {
    id: 'im-2',
    question: 'How should I apply solvent cement to UPVC pipes?',
    questionAr: 'كيف يجب أن أضع الأسمنت المذيب على أنابيب UPVC؟',
    answer: `Proper solvent cement application is critical for strong, leak-free UPVC joints. Follow this step-by-step guide:

**Materials Needed:**
- Correct grade solvent cement for pipe size
- PVC primer (for pipes >50mm or cold weather)
- Clean cloths or rags
- Fine sandpaper (80-120 grit)
- Applicator brush (or dauber in cement can)

**Application Process:**

**1. Surface Preparation**
Lightly sand the pipe end and inside of fitting socket to remove gloss. This creates micro-grooves for better cement penetration. Wipe surfaces clean of dust.

**2. Apply to Pipe End First**
Using a brush slightly smaller than the pipe diameter, apply a thin, even layer of cement around the entire pipe end. Cover the insertion depth area completely.

**3. Apply to Fitting Socket**
Immediately apply a thin layer inside the fitting socket. Don't over-apply – excess cement can pool and weaken the joint.

**4. Assemble Quickly**
Within 10-15 seconds of cement application, push the pipe fully into the fitting. Give a 1/4 turn to spread cement and ensure even coverage.

**5. Hold Firm**
Maintain pressure for 30 seconds. The cement creates a vacuum that can push the pipe out if released too soon.

**6. Remove Excess**
Wipe away any cement that squeezes out from the joint. Excess cement indicates proper application.

**Temperature Guidelines:**
- Below 5°C: Use cold-weather cement or heat area
- 5-40°C: Standard cement, normal cure time
- Above 40°C: Work quickly, cement dries faster

Crown Plastic Pipes recommends using quality solvent cement from approved suppliers for best results with our UPVC products.`,
    answerAr: `تطبيق الأسمنت المذيب بشكل صحيح أمر بالغ الأهمية لوصلات UPVC قوية وخالية من التسرب.

**المواد المطلوبة:**
- أسمنت مذيب بالدرجة الصحيحة
- برايمر PVC
- قماش نظيف
- ورق صنفرة ناعم

**عملية التطبيق:**
1. تحضير السطح
2. ضع على طرف الأنبوب أولاً
3. ضع على تجويف التوصيلة
4. قم بالتجميع بسرعة
5. أمسك بثبات لمدة 30 ثانية
6. أزل الفائض`,
    cluster: 'installation-maintenance',
    targetKeywords: ['apply solvent cement UPVC', 'PVC cement application', 'solvent weld technique'],
    featuredSnippetTarget: 'how to apply solvent cement UPVC'
  },
  {
    id: 'im-3',
    question: 'How long should solvent cement cure before pressure test?',
    questionAr: 'كم من الوقت يجب أن يجف الأسمنت المذيب قبل اختبار الضغط؟',
    answer: `Solvent cement cure time before pressure testing depends on pipe size, temperature, and humidity. Following proper cure times prevents joint failures.

**Minimum Cure Times:**

| Pipe Diameter | Initial Set | Handling | Pressure Test |
|---------------|-------------|----------|---------------|
| 20-32mm | 15 min | 30 min | 2 hours |
| 40-63mm | 15 min | 1 hour | 6 hours |
| 75-110mm | 30 min | 2 hours | 12 hours |
| 160mm+ | 30 min | 4 hours | 24 hours |

**Temperature Impact on Cure Time:**
- **Cold (<10°C):** Double the cure times above
- **Normal (10-25°C):** Use standard cure times
- **Hot (>25°C):** Cement sets faster but still requires minimum cure

**Humidity Considerations:**
High humidity (>65%) extends cure time by 25-50%. In UAE coastal areas during summer, allow extra cure time.

**Best Practice Recommendations:**
1. Wait minimum 15-20 minutes before any handling
2. Allow 24 hours before full pressure testing
3. Initial pressure test at 50% working pressure
4. Final test at 150% working pressure per GSO EN 805

**Signs of Proper Cure:**
- Joint feels firm and rigid
- No visible wet cement at edges
- Pipe cannot be rotated in fitting

Crown Plastic Pipes technical team can provide specific cure time recommendations for your project conditions.`,
    answerAr: `يعتمد وقت معالجة الأسمنت المذيب قبل اختبار الضغط على حجم الأنبوب ودرجة الحرارة والرطوبة.

**أوقات المعالجة الدنيا:**
| قطر الأنبوب | الإعداد الأولي | المناولة | اختبار الضغط |
|-------------|---------------|---------|---------------|
| 20-32 مم | 15 دقيقة | 30 دقيقة | ساعتان |
| 40-63 مم | 15 دقيقة | ساعة | 6 ساعات |
| 75-110 مم | 30 دقيقة | ساعتان | 12 ساعة |
| 160 مم+ | 30 دقيقة | 4 ساعات | 24 ساعة |

**أفضل الممارسات:**
1. انتظر 15-20 دقيقة كحد أدنى قبل أي مناولة
2. اسمح بـ 24 ساعة قبل اختبار الضغط الكامل`,
    cluster: 'installation-maintenance',
    targetKeywords: ['solvent cement cure time', 'PVC cement drying time', 'pressure test wait time'],
    featuredSnippetTarget: 'solvent cement cure time pressure test'
  },
  {
    id: 'im-4',
    question: 'What causes UPVC pipe leaks at joints?',
    questionAr: 'ما الذي يسبب تسرب أنابيب UPVC عند الوصلات؟',
    answer: `UPVC pipe leaks at joints are typically caused by installation errors rather than product defects. Understanding the five common causes helps prevent failures:

**1. Incorrect Pipe Sizing or Incompatible Fittings**
- Using inch-size pipe with metric fittings
- Mixing different manufacturer products
- Out-of-tolerance pipe or fittings
- **Solution:** Always match pipe and fitting standards (BS EN 1452, DIN 8062)

**2. Improper Solvent Cement Application**
- Too little cement (no fusion)
- Too much cement (pooling weakens joint)
- Uneven application
- **Solution:** Apply thin, even coat to both surfaces

**3. Insufficient Cure Time**
- Pressurizing before cement fully cured
- Moving pipes during cure period
- Cold weather extending cure time
- **Solution:** Wait minimum 24 hours before pressure testing

**4. Poor Surface Preparation**
- Dirty or dusty pipe ends
- Moisture on surfaces
- Not removing pipe gloss
- **Solution:** Clean, dry, and lightly sand surfaces

**5. Misalignment or Stress**
- Forcing misaligned pipes together
- Not supporting pipe adequately
- Thermal expansion stress on rigid joints
- **Solution:** Align properly, use supports, allow for expansion

**Rubber Ring Joint Leak Causes:**
- Damaged or twisted O-ring
- Insufficient insertion depth
- Debris preventing seal
- **Solution:** Inspect ring, clean surfaces, mark insertion depth

Crown Plastic Pipes provides installation training for contractors to minimize joint failures on projects.`,
    answerAr: `عادةً ما يحدث تسرب أنابيب UPVC عند الوصلات بسبب أخطاء التركيب وليس عيوب المنتج.

**الأسباب الخمسة الشائعة:**

1. **حجم أنبوب غير صحيح أو توصيلات غير متوافقة**
2. **تطبيق أسمنت مذيب غير صحيح**
3. **وقت معالجة غير كافٍ**
4. **تحضير سطح سيء**
5. **عدم المحاذاة أو الإجهاد**

توفر Crown Plastic Pipes تدريبًا على التركيب للمقاولين.`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC joint leaks', 'pipe leak causes', 'why pipes leak at joints'],
    featuredSnippetTarget: 'causes UPVC pipe leaks joints'
  },
  {
    id: 'im-5',
    question: 'How to detect UPVC pipe leaks quickly?',
    questionAr: 'كيفية اكتشاف تسرب أنابيب UPVC بسرعة؟',
    answer: `Detecting UPVC pipe leaks early prevents water damage and costly repairs. Use these proven methods for quick leak detection:

**Method 1: Soapy Water Test (For Pressure Lines)**
1. Mix dish soap with water (1:4 ratio)
2. Apply to suspect joints with brush or spray
3. Pressurize system to working pressure
4. Watch for bubbles forming at leak points
5. Mark leak locations for repair
- **Best for:** Above-ground pressure pipes, gas testing

**Method 2: Visual Inspection**
- Look for water stains, wet spots, or discoloration
- Check for mineral deposits around joints
- Inspect for pipe movement or misalignment
- **Best for:** Accessible pipework, regular maintenance

**Method 3: Air Pressure Test**
1. Cap all open ends
2. Connect air compressor (5-10 bar max)
3. Close system and monitor pressure gauge
4. Pressure drop indicates leak
5. Use soapy water to locate exact point
- **Best for:** New installations before burial

**Method 4: Acoustic Detection**
Professional leak detectors use microphones to hear water escaping through small cracks. Sound travels along pipe walls.
- **Best for:** Underground leaks, hidden pipes

**Method 5: Pressure Drop Test**
1. Fill system and reach stable pressure
2. Record initial pressure reading
3. Isolate system and wait 1-2 hours
4. Compare final pressure - drop indicates leak
- **Best for:** Large systems, commissioning

Crown Plastic Pipes can recommend approved leak detection services in UAE and GCC for complex projects.`,
    answerAr: `اكتشاف تسرب أنابيب UPVC مبكرًا يمنع تلف المياه والإصلاحات المكلفة.

**الطريقة 1: اختبار الماء والصابون**
1. اخلط صابون الأطباق مع الماء
2. ضعه على الوصلات المشتبه بها
3. اضغط النظام
4. راقب تكوّن الفقاعات

**الطريقة 2: الفحص البصري**

**الطريقة 3: اختبار ضغط الهواء**

**الطريقة 4: الكشف الصوتي**

**الطريقة 5: اختبار انخفاض الضغط**`,
    cluster: 'installation-maintenance',
    targetKeywords: ['detect pipe leaks', 'find UPVC leak', 'pipe leak detection methods'],
    featuredSnippetTarget: 'how to detect UPVC pipe leaks'
  },
  {
    id: 'im-6',
    question: 'How to size UPVC pipes for water supply?',
    questionAr: 'كيفية اختيار حجم أنابيب UPVC لإمداد المياه؟',
    answer: `Proper UPVC pipe sizing ensures adequate water flow while maintaining efficient pressure. Follow this engineering approach:

**Step 1: Calculate Total Demand**
Sum the flow rates of all fixtures:
| Fixture | Flow Rate (L/s) |
|---------|----------------|
| Kitchen tap | 0.2 |
| Basin tap | 0.15 |
| Shower | 0.2 |
| Bath | 0.3 |
| WC cistern | 0.1 |
| Washing machine | 0.2 |

**Step 2: Apply Diversity Factor**
Not all fixtures operate simultaneously. Apply diversity:
- 1-5 fixtures: 100%
- 6-10 fixtures: 80%
- 11-20 fixtures: 65%
- 20+ fixtures: 50%

**Step 3: Check Velocity Limits**
Optimal water velocity: 0.6 - 2.4 m/s
- Below 0.6 m/s: Risk of sediment buildup
- Above 2.4 m/s: Noise, water hammer risk

**Step 4: Select Pipe Size**
Use flow rate and velocity to find diameter:

| Flow Rate (L/s) | Recommended Size |
|-----------------|------------------|
| Up to 0.3 | 20mm |
| 0.3 - 0.5 | 25mm |
| 0.5 - 1.0 | 32mm |
| 1.0 - 2.0 | 50mm |
| 2.0 - 4.0 | 63mm |
| 4.0 - 8.0 | 90mm |
| 8.0 - 15.0 | 110mm |

**Step 5: Verify Pressure Drop**
Calculate friction loss using Hazen-Williams formula. Total pressure loss should be <10% of available pressure.

**Rule of Thumb:**
For residential buildings: Main supply 32-50mm, risers 25-32mm, branches 20-25mm

Crown Plastic Pipes technical team offers free pipe sizing consultations for UAE projects.`,
    answerAr: `يضمن تحديد حجم أنابيب UPVC المناسب تدفق مياه كافٍ مع الحفاظ على ضغط فعال.

**الخطوة 1: حساب الطلب الإجمالي**

**الخطوة 2: تطبيق عامل التنوع**

**الخطوة 3: التحقق من حدود السرعة**
سرعة المياه المثلى: 0.6 - 2.4 م/ث

**الخطوة 4: اختيار حجم الأنبوب**

**الخطوة 5: التحقق من فقدان الضغط**

**قاعدة عامة:**
للمباني السكنية: الإمداد الرئيسي 32-50 مم، الروافع 25-32 مم`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC pipe sizing', 'water pipe size calculator', 'how to size water pipes'],
    featuredSnippetTarget: 'size UPVC pipes water supply'
  },
  {
    id: 'im-7',
    question: 'How to install UPVC pressure pipes correctly?',
    questionAr: 'كيفية تركيب أنابيب ضغط UPVC بشكل صحيح؟',
    answer: `Correct UPVC pressure pipe installation ensures leak-free performance for 50+ years. Follow this comprehensive installation guide:

**Pre-Installation:**
1. Inspect all pipes and fittings for damage
2. Store pipes horizontally on flat surface
3. Keep away from direct sunlight and heat sources
4. Verify correct sizes and standards (BS EN 1452)

**Support Requirements:**
| Pipe Diameter | Horizontal Spacing | Vertical Spacing |
|---------------|-------------------|------------------|
| 20-32mm | 0.5m | 1.0m |
| 40-63mm | 0.75m | 1.5m |
| 75-110mm | 1.0m | 2.0m |
| 160mm+ | 1.5m | 2.5m |

**Cutting Pipes:**
- Use pipe cutter or fine-tooth saw
- Cut square (perpendicular to pipe axis)
- Remove burrs with deburring tool
- Chamfer edge at 15° angle

**Expansion Allowance:**
UPVC expands ~0.06mm per meter per °C temperature change.
- Install expansion loops or compensators for runs >10m
- Use sliding supports, not fixed clamps
- Allow 10mm gap at pipe ends in fittings

**Bending Radius:**
Minimum cold bend radius = 300 × pipe diameter
- 50mm pipe: 15m minimum radius
- For tighter bends, use fittings

**Coupling Depth:**
- Insert pipe 2/3 of fitting socket depth
- Mark insertion depth before cementing
- Full insertion prevents joint stress

**Pressure Testing:**
1. Fill system slowly to remove air
2. Test at 1.5× working pressure
3. Hold for minimum 1 hour
4. No pressure drop = pass

Crown Plastic Pipes provides detailed installation manuals with our products.`,
    answerAr: `يضمن التركيب الصحيح لأنابيب ضغط UPVC أداءً خاليًا من التسرب لأكثر من 50 عامًا.

**قبل التركيب:**
1. افحص جميع الأنابيب والتوصيلات
2. خزن الأنابيب أفقيًا
3. أبعد عن أشعة الشمس المباشرة

**متطلبات الدعم:**

**قطع الأنابيب:**
- استخدم قاطع أنابيب أو منشار ناعم
- اقطع بشكل مربع
- أزل النتوءات

**بدل التمدد:**

**اختبار الضغط:**
1. املأ النظام ببطء
2. اختبر عند 1.5 ضعف ضغط العمل
3. احتفظ لمدة ساعة كحد أدنى`,
    cluster: 'installation-maintenance',
    targetKeywords: ['install UPVC pressure pipes', 'UPVC installation guide', 'pipe installation steps'],
    featuredSnippetTarget: 'how to install UPVC pressure pipes'
  },
  {
    id: 'im-8',
    question: 'How deep should UPVC pipe fittings be inserted?',
    questionAr: 'ما عمق إدخال توصيلات أنابيب UPVC؟',
    answer: `Proper insertion depth is critical for strong UPVC joints. The general rule is to insert the pipe 2/3 of the fitting socket depth, but specific depths vary by diameter.

**Insertion Depth Guidelines:**

| Pipe Diameter | Socket Depth | Insertion Depth |
|---------------|--------------|------------------|
| 20mm | 18mm | 12mm |
| 25mm | 20mm | 14mm |
| 32mm | 24mm | 16mm |
| 40mm | 28mm | 19mm |
| 50mm | 32mm | 21mm |
| 63mm | 36mm | 24mm |
| 75mm | 40mm | 27mm |
| 90mm | 45mm | 30mm |
| 110mm | 52mm | 35mm |
| 160mm | 62mm | 41mm |

**Why Insertion Depth Matters:**

**Too Shallow:**
- Insufficient bonding surface
- Weak joint strength
- Prone to separation under pressure
- May leak over time

**Too Deep (Bottomed Out):**
- Can crack fitting bottom
- Restricts thermal expansion
- May cause stress cracks
- Cement displaced unevenly

**Best Practice:**
1. Dry fit pipe into fitting
2. Mark insertion depth with pencil
3. Apply cement and insert to mark
4. Leave 2-3mm gap at socket bottom

**Verification:**
- Cement bead should appear around joint circumference
- Indicates proper depth and cement coverage

Crown Plastic Pipes fittings have internal depth stops to ensure correct insertion with our pipe range.`,
    answerAr: `عمق الإدخال المناسب أمر بالغ الأهمية لوصلات UPVC القوية. القاعدة العامة هي إدخال الأنبوب بعمق 2/3 من عمق تجويف التوصيلة.

**إرشادات عمق الإدخال:**

| قطر الأنبوب | عمق التجويف | عمق الإدخال |
|-------------|-------------|-------------|
| 20 مم | 18 مم | 12 مم |
| 50 مم | 32 مم | 21 مم |
| 110 مم | 52 مم | 35 مم |

**لماذا يهم عمق الإدخال:**

**ضحل جدًا:** قوة وصلة ضعيفة
**عميق جدًا:** قد يكسر قاع التوصيلة

**أفضل الممارسات:**
1. قم بالتركيب الجاف
2. ضع علامة على عمق الإدخال
3. ضع الأسمنت وأدخل إلى العلامة`,
    cluster: 'installation-maintenance',
    targetKeywords: ['pipe insertion depth', 'UPVC fitting depth', 'how far insert pipe fitting'],
    featuredSnippetTarget: 'UPVC pipe insertion depth'
  },
  {
    id: 'im-9',
    question: 'How to repair UPVC pipe leaks in existing systems?',
    questionAr: 'كيفية إصلاح تسرب أنابيب UPVC في الأنظمة الموجودة؟',
    answer: `Repairing UPVC pipe leaks in existing systems requires proper technique to restore full pressure capability. Choose the repair method based on leak severity:

**Method 1: Repair Coupling (Best for Small Leaks)**

1. **Isolate the section** - Turn off water supply and drain the pipe
2. **Cut out damaged area** - Use pipe cutter, remove 50mm beyond damage
3. **Prepare surfaces** - Clean and deburr cut ends
4. **Install repair coupling:**
   - Slide coupling onto one pipe end
   - Apply cement to both ends and coupling
   - Position coupling over joint
   - Hold until set (30 seconds)
5. **Cure and test** - Wait 24 hours before pressurizing

**Method 2: Slip Coupling (For Tight Spaces)**
Slip couplings slide completely onto pipe without needing gap space.

**Method 3: Compression Repair Coupling**
- No cement required
- Quick emergency repair
- Lower pressure rating than solvent weld
- Good for temporary fixes

**Method 4: Pipe Clamp (Emergency Only)**
- Wrap-around rubber patch with metal clamp
- Only for emergencies until proper repair
- Not permanent solution
- Replace with proper repair within 72 hours

**Repair Best Practices:**
- Match pipe standard (BS EN 1452, DIN 8062)
- Use same diameter and pressure rating
- Clean and dry all surfaces
- Support both sides of repair
- Test at working pressure before burial

**When to Replace vs Repair:**
- Multiple leaks in same run: Replace
- UV damage (chalky surface): Replace
- Single joint failure: Repair
- Impact damage: Repair or replace section

Crown Plastic Pipes supplies repair couplings and fittings for all standard pipe sizes.`,
    answerAr: `يتطلب إصلاح تسرب أنابيب UPVC في الأنظمة الموجودة تقنية مناسبة لاستعادة قدرة الضغط الكاملة.

**الطريقة 1: قارنة الإصلاح**
1. عزل القسم
2. قطع المنطقة التالفة
3. تحضير الأسطح
4. تركيب قارنة الإصلاح
5. المعالجة والاختبار

**الطريقة 2: القارنة المنزلقة**

**الطريقة 3: قارنة الإصلاح الضغطية**

**الطريقة 4: مشبك الأنبوب (للطوارئ فقط)**

توفر Crown Plastic Pipes قوارن وتوصيلات إصلاح لجميع أحجام الأنابيب القياسية.`,
    cluster: 'installation-maintenance',
    targetKeywords: ['repair UPVC leak', 'fix pipe leak', 'UPVC pipe repair'],
    featuredSnippetTarget: 'how to repair UPVC pipe leak'
  },
  {
    id: 'im-10',
    question: 'What maintenance does UPVC piping require?',
    questionAr: 'ما الصيانة التي تتطلبها أنابيب UPVC؟',
    answer: `UPVC piping requires minimal maintenance compared to metal alternatives, making it highly cost-effective over its 50-100 year lifespan. Follow this maintenance guide:

**Routine Maintenance (Annually):**

1. **Visual Inspection**
   - Check exposed pipes for damage or discoloration
   - Look for signs of UV degradation (chalking)
   - Inspect joints for moisture or staining
   - Verify supports are secure

2. **Valve Operation**
   - Exercise all valves through full cycle
   - Check for smooth operation
   - Lubricate gate valve stems if stiff

3. **Pressure Check**
   - Monitor system pressure regularly
   - Sudden drops may indicate developing leaks

**Periodic Maintenance (Every 3-5 Years):**

1. **Flush System**
   - Open end valves and flush debris
   - Clears sediment buildup
   - Maintains flow capacity

2. **Check Expansion Joints**
   - Verify movement capability
   - Ensure no binding or obstruction

**Avoid These Common Mistakes:**

| Mistake | Why It's Harmful |
|---------|------------------|
| Using harsh chemicals | Can degrade pipe material |
| External paint | Some paints attack UPVC |
| Heat near pipes | Deforms and weakens |
| Physical impact | Cracks rigid material |
| Unsupported spans | Causes sagging, stress |

**UV Protection:**
If pipes are exposed to sunlight:
- Apply UV-resistant paint (water-based)
- Or wrap with protective tape
- Or install shading/covers

**Record Keeping:**
Maintain records of:
- Installation date
- Pressure test results
- Any repairs performed
- Inspection findings

Crown Plastic Pipes products are designed for minimal maintenance in UAE climate conditions.`,
    answerAr: `تتطلب أنابيب UPVC صيانة بسيطة مقارنة بالبدائل المعدنية.

**الصيانة الروتينية (سنويًا):**
1. الفحص البصري
2. تشغيل الصمامات
3. فحص الضغط

**الصيانة الدورية (كل 3-5 سنوات):**
1. غسل النظام
2. فحص وصلات التمدد

**تجنب هذه الأخطاء الشائعة:**
- استخدام مواد كيميائية قاسية
- الطلاء الخارجي
- الحرارة بالقرب من الأنابيب

**حماية الأشعة فوق البنفسجية:**
- ضع طلاء مقاوم للأشعة فوق البنفسجية
- أو لفها بشريط واقي`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC maintenance', 'pipe maintenance requirements', 'UPVC pipe care'],
    featuredSnippetTarget: 'UPVC pipe maintenance required'
  },
  {
    id: 'im-11',
    question: 'How to connect UPVC pipes to metal pipes?',
    questionAr: 'كيفية توصيل أنابيب UPVC بالأنابيب المعدنية؟',
    answer: `Connecting UPVC to metal pipes requires transition fittings that accommodate different materials and prevent galvanic corrosion. Here are the approved methods:

**Method 1: Threaded Adapters (Most Common)**
- Male or female UPVC adapters with BSP threads
- PTFE tape on metal threads (3-5 wraps)
- Hand tighten plus 1-2 turns with wrench
- Do not overtighten - can crack UPVC

**Method 2: Flanged Connections**
- UPVC flange solvent welded to plastic pipe
- Metal flange on steel/iron pipe
- Rubber gasket between faces
- Bolt evenly in star pattern
- Best for larger diameters (>75mm)

**Method 3: Compression Fittings**
- Brass compression adapter
- Works with both materials
- No cement or threading required
- Good for repairs and modifications

**Important Considerations:**
1. Support both pipes near connection
2. Allow for different expansion rates
3. Use dielectric unions if dissimilar metals
4. Ensure pressure ratings match
5. Test joint at system pressure

Crown Plastic Pipes stocks a full range of transition fittings for connecting to galvanized, copper, and steel pipes.`,
    answerAr: `يتطلب توصيل UPVC بالأنابيب المعدنية توصيلات انتقالية تستوعب المواد المختلفة وتمنع التآكل الجلفاني.

**الطريقة 1: المحولات الملولبة**
**الطريقة 2: الوصلات ذات الفلنجات**
**الطريقة 3: توصيلات الضغط**`,
    cluster: 'installation-maintenance',
    targetKeywords: ['connect UPVC to metal pipe', 'UPVC metal transition', 'plastic to metal fitting'],
    featuredSnippetTarget: 'connect UPVC pipes to metal'
  },
  {
    id: 'im-12',
    question: 'What is the minimum burial depth for UPVC pipes?',
    questionAr: 'ما هو الحد الأدنى لعمق دفن أنابيب UPVC؟',
    answer: `Minimum burial depth for UPVC pipes depends on traffic loading, frost protection, and pipe diameter. Follow these guidelines for UAE and GCC installations:

**Standard Burial Depths:**

| Location | Minimum Cover | Recommended |
|----------|--------------|-------------|
| No traffic (gardens) | 450mm | 600mm |
| Light traffic (driveways) | 600mm | 900mm |
| Heavy traffic (roads) | 900mm | 1200mm |
| Under buildings | 600mm | 750mm |

**Factors Affecting Depth:**

1. **Traffic Loading**
   - Deeper burial distributes vehicle loads
   - Use concrete surround under heavy traffic

2. **Temperature Protection**
   - UAE: Protect from surface heat
   - 600mm minimum shields from temperature extremes

3. **Pipe Diameter**
   - Larger pipes need more cover
   - Add 50mm per 50mm increase over 110mm

**Bedding Requirements:**
- 100mm compacted sand below pipe
- 150mm selected backfill above pipe
- No stones >20mm in contact with pipe

**Warning Tape:**
Install warning tape 300mm above pipe for future excavation protection.

Crown Plastic Pipes provides detailed burial specifications in our installation manual.`,
    answerAr: `يعتمد الحد الأدنى لعمق دفن أنابيب UPVC على حمل المرور وحماية الصقيع وقطر الأنبوب.

**أعماق الدفن القياسية:**
| الموقع | الحد الأدنى للغطاء |
|--------|-----------------|
| بدون مرور | 450 مم |
| مرور خفيف | 600 مم |
| مرور ثقيل | 900 مم |`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC burial depth', 'pipe burial depth', 'underground pipe depth'],
    featuredSnippetTarget: 'UPVC pipe burial depth minimum'
  },
  {
    id: 'im-13',
    question: 'How to prevent water hammer in UPVC systems?',
    questionAr: 'كيفية منع المطرقة المائية في أنظمة UPVC؟',
    answer: `Water hammer (hydraulic shock) can damage UPVC pipes and fittings. Prevent it with these engineering solutions:

**What Causes Water Hammer:**
- Rapid valve closure
- Pump start/stop surges
- High flow velocities (>2.4 m/s)
- Air pockets in system

**Prevention Methods:**

**1. Slow-Closing Valves**
- Use quarter-turn ball valves cautiously
- Install slow-closing check valves
- Consider motorized valves with controlled closure

**2. Air Chambers/Arrestors**
- Install at fixture connections
- Provides cushion for pressure spikes
- Requires periodic draining

**3. Pressure Reducing Valves (PRV)**
- Limit system pressure to design level
- Install at main supply entry
- Reduces hammer severity

**4. Proper Pipe Sizing**
- Oversize slightly to reduce velocity
- Target 1.5-2.0 m/s maximum
- Larger pipes = lower velocity

**5. Secure Pipe Supports**
- Anchor at direction changes
- Support at proper intervals
- Prevents pipe movement

**6. Soft Start Pumps**
- Variable frequency drives (VFD)
- Gradual pressure buildup
- Essential for pump systems

**For UPVC specifically:**
- Material absorbs some shock
- But joints are vulnerable
- Always install arrestors near fixtures

Crown Plastic Pipes technical team can review system design for water hammer prevention.`,
    answerAr: `يمكن للمطرقة المائية (الصدمة الهيدروليكية) أن تتلف أنابيب وتوصيلات UPVC. امنعها بهذه الحلول:

**طرق الوقاية:**
1. صمامات الإغلاق البطيء
2. غرف الهواء/الموقفات
3. صمامات تخفيض الضغط
4. تحجيم الأنابيب المناسب
5. دعامات أنابيب آمنة
6. مضخات البدء الناعم`,
    cluster: 'installation-maintenance',
    targetKeywords: ['water hammer UPVC', 'prevent water hammer', 'hydraulic shock pipes'],
    featuredSnippetTarget: 'prevent water hammer UPVC pipes'
  },
  {
    id: 'im-14',
    question: 'How to support UPVC pipes on long horizontal runs?',
    questionAr: 'كيفية دعم أنابيب UPVC على المسافات الأفقية الطويلة؟',
    answer: `Proper support prevents UPVC pipe sagging and stress on joints. Use this spacing guide for horizontal installations:

**Support Spacing Table:**

| Pipe Diameter | Cold Water (20°C) | Warm Water (40°C) |
|---------------|-------------------|-------------------|
| 20mm | 500mm | 400mm |
| 25mm | 550mm | 450mm |
| 32mm | 600mm | 500mm |
| 40mm | 650mm | 550mm |
| 50mm | 750mm | 600mm |
| 63mm | 800mm | 650mm |
| 75mm | 850mm | 700mm |
| 90mm | 900mm | 750mm |
| 110mm | 1000mm | 850mm |
| 160mm | 1200mm | 1000mm |

**Support Types:**

1. **Pipe Clips** - Simple ring supports for light loads
2. **Saddle Clamps** - Better load distribution
3. **Roller Supports** - Allow thermal movement
4. **Channel Systems** - Professional multi-pipe runs

**Key Rules:**
- Support within 150mm of every fitting
- Use guide supports (allow axial movement)
- Fixed anchors at direction changes only
- Support at each floor penetration

**Temperature Expansion:**
UPVC expands ~0.06mm per meter per °C. A 10m run with 30°C temperature change needs 18mm expansion allowance.

Crown Plastic Pipes recommends quality support systems to ensure long-term performance.`,
    answerAr: `يمنع الدعم المناسب ترهل أنابيب UPVC والإجهاد على الوصلات.

**جدول تباعد الدعم:**
| قطر الأنبوب | ماء بارد | ماء دافئ |
|-------------|----------|----------|
| 20 مم | 500 مم | 400 مم |
| 50 مم | 750 مم | 600 مم |
| 110 مم | 1000 مم | 850 مم |`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC pipe support spacing', 'pipe hanger spacing', 'horizontal pipe support'],
    featuredSnippetTarget: 'UPVC pipe support spacing'
  },
  {
    id: 'im-15',
    question: 'Can UPVC pipes be exposed to direct sunlight?',
    questionAr: 'هل يمكن تعريض أنابيب UPVC لأشعة الشمس المباشرة؟',
    answer: `UPVC pipes should not be exposed to direct sunlight for extended periods without protection. UV radiation degrades the material over time.

**UV Effects on UPVC:**
- Surface chalking (white powder)
- Color fading
- Brittleness
- Reduced impact strength
- Shortened lifespan

**Timeline of Degradation:**
| Exposure | Effect |
|----------|--------|
| 0-1 year | Minor surface change |
| 1-3 years | Noticeable discoloration |
| 3-5 years | Surface brittleness |
| 5+ years | Structural weakening |

**Protection Methods:**

**1. UV-Resistant Paint**
- Apply water-based exterior paint
- Light colors reflect heat
- Reapply every 3-5 years

**2. Protective Wrapping**
- UV-resistant tape or sleeves
- Aluminum foil tape (heat reflection)
- Self-adhesive wrapping

**3. Physical Shading**
- Install under eaves or overhangs
- Use pipe covers or channels
- Route inside buildings where possible

**4. Burial**
- Best long-term protection
- Minimum 450mm cover

**Crown Plastic Pipes UV Stabilizers:**
Our UPVC products contain UV stabilizers for moderate exposure, but extended outdoor use requires additional protection.

**GCC Consideration:**
Middle East sunlight is particularly intense. Always protect exposed pipework or use Grey UPVC which has better UV resistance than white.`,
    answerAr: `لا ينبغي تعريض أنابيب UPVC لأشعة الشمس المباشرة لفترات طويلة دون حماية.

**تأثيرات الأشعة فوق البنفسجية:**
- تطباشير السطح
- بهتان اللون
- الهشاشة

**طرق الحماية:**
1. طلاء مقاوم للأشعة فوق البنفسجية
2. لف واقي
3. تظليل مادي
4. الدفن`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC sunlight exposure', 'UV damage UPVC', 'UPVC outdoor protection'],
    featuredSnippetTarget: 'UPVC pipes sunlight exposure'
  },
  {
    id: 'im-16',
    question: 'How to cut UPVC pipes cleanly?',
    questionAr: 'كيفية قطع أنابيب UPVC بشكل نظيف؟',
    answer: `Clean, square cuts are essential for leak-free UPVC joints. Follow these techniques:

**Cutting Tools:**

| Tool | Best For | Cut Quality |
|------|----------|-------------|
| Ratchet pipe cutter | 20-63mm | Excellent |
| Pipe saw | All sizes | Good |
| Hacksaw | All sizes | Fair |
| Miter saw | High volume | Excellent |

**Step-by-Step Process:**

**1. Mark the Cut**
- Measure twice, cut once
- Use marker or tape
- Mark around full circumference

**2. Secure the Pipe**
- Use pipe vise or clamp
- Support near cut point
- Prevent pipe from rolling

**3. Make the Cut**
- Cut perpendicular to pipe axis
- Use steady, even strokes
- Don't force - let tool do work
- Rotate ratchet cutter around pipe

**4. Deburr**
- Remove inside burrs with deburring tool
- Use file or sandpaper for outside
- Critical for solvent weld joints

**5. Chamfer Edge**
- Create 15° chamfer on pipe end
- Helps insertion into fittings
- Use file or chamfering tool

**6. Clean**
- Remove all debris
- Wipe with clean cloth
- Ready for joining

**Common Mistakes:**
- Angled cuts (cause gaps in joint)
- Burrs left inside (restrict flow)
- Crushing pipe with wrong tool

Crown Plastic Pipes recommends using quality cutting tools for professional results.`,
    answerAr: `القطع النظيف والمربع ضروري لوصلات UPVC الخالية من التسرب.

**أدوات القطع:**
- قاطع الأنابيب السقاطة
- منشار الأنابيب
- منشار يدوي

**العملية خطوة بخطوة:**
1. ضع علامة على القطع
2. ثبت الأنبوب
3. قم بالقطع
4. أزل النتوءات
5. اصنع شطفة الحافة
6. نظف`,
    cluster: 'installation-maintenance',
    targetKeywords: ['cut UPVC pipe', 'how to cut PVC pipe', 'pipe cutting technique'],
    featuredSnippetTarget: 'how to cut UPVC pipes cleanly'
  },
  {
    id: 'im-17',
    question: 'How to pressure test UPVC pipe systems?',
    questionAr: 'كيفية اختبار ضغط أنظمة أنابيب UPVC؟',
    answer: `Pressure testing verifies UPVC system integrity before commissioning. Follow GSO EN 805 and BS EN 1452 requirements:

**Pre-Test Checklist:**
- All joints cured (minimum 24 hours)
- System flushed of debris
- Air vents installed at high points
- All outlets capped/plugged
- Test gauge calibrated

**Testing Procedure:**

**1. Initial Fill**
- Fill slowly from lowest point
- Open air vents until water flows
- Close vents, continue filling
- Remove all air pockets

**2. Preliminary Test**
- Pressurize to 50% of test pressure
- Hold for 30 minutes
- Inspect all joints visually
- Fix any leaks before proceeding

**3. Main Pressure Test**
- Increase to test pressure (1.5× working pressure)
- For PN16 system: Test at 24 bar
- Hold for minimum 1 hour
- Monitor pressure gauge

**4. Acceptance Criteria**
- Pressure drop <0.2 bar in 1 hour
- No visible leaks at any joint
- Record initial and final readings

**Test Pressure Guide:**
| Working Pressure | Test Pressure |
|------------------|---------------|
| PN10 (10 bar) | 15 bar |
| PN16 (16 bar) | 24 bar |
| PN20 (20 bar) | 30 bar |

**Documentation:**
- Record date, pressure, duration
- Note ambient temperature
- Sign off by responsible engineer
- Keep records for handover

Crown Plastic Pipes products are rated for the test pressures specified when installed correctly.`,
    answerAr: `يتحقق اختبار الضغط من سلامة نظام UPVC قبل التشغيل.

**إجراء الاختبار:**
1. الملء الأولي
2. الاختبار الأولي (50% من ضغط الاختبار)
3. اختبار الضغط الرئيسي (1.5× ضغط العمل)
4. معايير القبول

**دليل ضغط الاختبار:**
| ضغط العمل | ضغط الاختبار |
|-----------|--------------|
| PN10 | 15 بار |
| PN16 | 24 بار |`,
    cluster: 'installation-maintenance',
    targetKeywords: ['pressure test UPVC', 'pipe pressure testing', 'hydraulic test pipes'],
    featuredSnippetTarget: 'pressure test UPVC pipes'
  },
  {
    id: 'im-18',
    question: 'What PPE is required when working with UPVC pipes?',
    questionAr: 'ما معدات الحماية الشخصية المطلوبة عند العمل مع أنابيب UPVC؟',
    answer: `Personal Protective Equipment (PPE) protects workers from UPVC installation hazards. Follow these safety requirements:

**Essential PPE:**

| Equipment | Protection Against |
|-----------|-------------------|
| Safety glasses | Cement splashes, debris |
| Chemical-resistant gloves | Solvent cement, primers |
| Safety boots | Falling pipes, foot protection |
| Hard hat | Overhead work, pipe drops |
| Knee pads | Ground-level work |

**When Using Solvent Cement:**

**Respiratory Protection:**
- Work in ventilated areas
- Use organic vapor respirator in confined spaces
- Cement fumes can cause dizziness

**Eye Protection:**
- Safety glasses with side shields
- Chemical splash goggles for overhead work
- Have eyewash station available

**Skin Protection:**
- Nitrile or butyl rubber gloves
- Long sleeves recommended
- Avoid skin contact with cement

**When Cutting Pipes:**
- Safety glasses (mandatory)
- Dust mask if cutting multiple pipes
- Hearing protection for power tools
- Cut-resistant gloves when using saws

**When Handling Heavy Pipes:**
- Steel-toe boots
- Back support belt for lifting
- Team lift for pipes >110mm
- Use mechanical aids where possible

**First Aid:**
- Eye wash for cement splashes
- Soap and water for skin contact
- Fresh air for fume exposure

Crown Plastic Pipes MSDS sheets detail specific safety requirements for our products.`,
    answerAr: `تحمي معدات الحماية الشخصية العمال من مخاطر تركيب UPVC.

**معدات الحماية الأساسية:**
- نظارات السلامة
- قفازات مقاومة للمواد الكيميائية
- أحذية السلامة
- خوذة صلبة

**عند استخدام الأسمنت المذيب:**
- اعمل في مناطق جيدة التهوية
- استخدم جهاز تنفس
- ارتدِ نظارات واقية`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC installation PPE', 'pipe work safety equipment', 'plumbing PPE'],
    featuredSnippetTarget: 'PPE required UPVC pipes'
  },
  {
    id: 'im-19',
    question: 'How to store UPVC pipes on construction sites?',
    questionAr: 'كيفية تخزين أنابيب UPVC في مواقع البناء؟',
    answer: `Proper storage prevents UPVC pipe damage and maintains product quality on construction sites:

**Storage Requirements:**

**1. Surface Preparation**
- Level, firm ground
- Free from sharp objects
- Cover soft ground with plywood

**2. Stacking Guidelines**
| Pipe Size | Max Stack Height |
|-----------|-----------------|
| 20-50mm | 1.5m |
| 63-110mm | 1.0m |
| 160mm+ | 0.75m (or rack) |

**3. Support Requirements**
- Full-length support for straight pipes
- Minimum 3 bearers per pipe length
- No point loads or spans
- Bearers at 1.5m maximum spacing

**4. Sun Protection**
- Cover with opaque tarpaulin
- Allow air circulation underneath
- Don't use black covers (heat absorption)
- White or reflective covers best

**5. Temperature Control**
- Keep below 40°C
- Shade from direct sun
- Don't store near heat sources

**Stacking Technique:**
- Stack same sizes together
- Socket ends alternating
- Triangular end supports
- Straps to prevent rolling

**Fittings Storage:**
- Keep in original packaging
- Store indoors if possible
- Protect O-rings from dust/sun
- Check seals before use

**What to Avoid:**
- Point loading (causes deformation)
- Contact with petroleum products
- Exposure to chemicals
- Dragging pipes across ground

Crown Plastic Pipes delivers products in protective packaging for site storage.`,
    answerAr: `يمنع التخزين المناسب تلف أنابيب UPVC ويحافظ على جودة المنتج:

**متطلبات التخزين:**
1. تحضير السطح
2. إرشادات التكديس
3. متطلبات الدعم
4. الحماية من الشمس
5. التحكم في درجة الحرارة

**ما يجب تجنبه:**
- التحميل النقطي
- ملامسة المنتجات البترولية
- التعرض للمواد الكيميائية`,
    cluster: 'installation-maintenance',
    targetKeywords: ['store UPVC pipes', 'pipe storage site', 'UPVC storage requirements'],
    featuredSnippetTarget: 'how to store UPVC pipes'
  },
  {
    id: 'im-20',
    question: 'What are expansion loops in UPVC piping systems?',
    questionAr: 'ما هي حلقات التمدد في أنظمة أنابيب UPVC؟',
    answer: `Expansion loops accommodate thermal movement in UPVC piping systems, preventing stress damage to pipes and fittings.

**Why Expansion Loops Are Needed:**
UPVC has a high coefficient of thermal expansion (0.06mm per meter per °C). A 20m pipe run with 30°C temperature swing moves 36mm!

**Types of Expansion Accommodation:**

**1. Expansion Loops (U-shaped)**
- Most common method
- Uses standard fittings (4 elbows)
- Requires space perpendicular to run
- Loop size based on pipe diameter

**2. Expansion Joints**
- Telescopic sliding joints
- Compact, less space needed
- Available for all standard sizes
- Rubber seals accommodate movement

**3. Change of Direction**
- Natural expansion absorption
- Every bend adds flexibility
- Most economical method

**Expansion Loop Sizing:**
| Movement (mm) | Loop Arm Length |
|---------------|-----------------|
| 10 | 500mm |
| 20 | 700mm |
| 30 | 850mm |
| 40 | 1000mm |

**Installation Rules:**
- Install at neutral temperature (20-25°C)
- Anchor at one end, guide at other
- Never fix both ends rigidly
- Allow full calculated movement
- Don't over-constrain with supports

**Where to Install:**
- Every 10-15m of straight run
- Before equipment connections
- At building expansion joints
- Changes between indoor/outdoor

Crown Plastic Pipes can provide expansion calculations for your project layout.`,
    answerAr: `تستوعب حلقات التمدد الحركة الحرارية في أنظمة أنابيب UPVC.

**لماذا حلقات التمدد مطلوبة:**
UPVC لديه معامل تمدد حراري عالٍ (0.06 مم لكل متر لكل درجة مئوية).

**أنواع استيعاب التمدد:**
1. حلقات التمدد (على شكل U)
2. وصلات التمدد
3. تغيير الاتجاه

**قواعد التركيب:**
- ركب عند درجة حرارة محايدة
- ثبت عند طرف واحد
- لا تثبت كلا الطرفين بشكل صلب`,
    cluster: 'installation-maintenance',
    targetKeywords: ['UPVC expansion loop', 'thermal expansion pipes', 'expansion joint piping'],
    featuredSnippetTarget: 'expansion loops UPVC pipes'
  },
];

// =============================================================================
// CLUSTER 3: PRODUCT COMPARISON & SELECTION (15 Q&As)
// Target: Decision-makers, project managers
// Focus: Comparison queries (high commercial intent)
// =============================================================================

export const comparisonSelectionFAQs: FAQItem[] = [
  {
    id: 'cs-1',
    question: 'UPVC vs PVC pipes: Which should I choose?',
    questionAr: 'أنابيب UPVC مقابل PVC: أيهما يجب أن أختار؟',
    answer: `UPVC (Unplasticized PVC) and PVC differ significantly. UPVC contains no plasticizers, making it rigid and ideal for pressure applications with 50-100 year lifespan. PVC is flexible with plasticizers added, suitable for different applications. Choose UPVC for: potable water supply, high-pressure systems (up to PN25), underground installations, and certified construction projects. Choose PVC for: flexible conduits, cable protection, and low-pressure temporary installations. For UAE construction, UPVC is the standard choice.`,
    answerAr: 'يختلف UPVC و PVC بشكل كبير. اختر UPVC للمشاريع الإنشائية وإمداد المياه.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC vs PVC', 'UPVC or PVC', 'difference UPVC PVC'],
    featuredSnippetTarget: 'UPVC vs PVC pipes comparison'
  },
  {
    id: 'cs-2',
    question: 'UPVC vs PPR pipes: Complete comparison',
    questionAr: 'أنابيب UPVC مقابل PPR: مقارنة كاملة',
    answer: `UPVC and PPR serve different purposes: UPVC is for cold water (-10°C to +40°C), uses solvent cement joining, is rigid, and costs less. PPR is for hot and cold water (-10°C to +95°C), uses heat fusion, is semi-flexible, and costs more. Choose UPVC for: cold water supply, underground installations, large diameters, cost-sensitive projects. Choose PPR for: hot water systems, internal plumbing, exposed areas needing paint. Crown Plastic Pipes manufactures both systems.`,
    answerAr: 'يخدم UPVC و PPR أغراضًا مختلفة. UPVC للماء البارد، PPR للساخن والبارد.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC vs PPR', 'UPVC or PPR pipes', 'PPR UPVC comparison'],
    featuredSnippetTarget: 'UPVC vs PPR pipes'
  },
  {
    id: 'cs-3',
    question: 'Why choose UPVC pipes over metal pipes?',
    questionAr: 'لماذا تختار أنابيب UPVC بدلاً من الأنابيب المعدنية؟',
    answer: `UPVC offers significant advantages over metal pipes: No corrosion (50-100 year lifespan vs 20-40 years for GI), Lightweight (1/5 weight of steel), Lower cost (material and installation), No scaling (maintains hydraulic capacity), Chemical resistant, No taste or odor transfer, Easy cutting and joining, No specialized tools needed. UPVC has replaced GI pipes in most modern construction due to these advantages.`,
    answerAr: 'يقدم UPVC مزايا كبيرة على الأنابيب المعدنية: لا تآكل، خفيف الوزن، تكلفة أقل.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC vs metal pipes', 'plastic vs steel pipes', 'UPVC vs GI'],
    featuredSnippetTarget: 'UPVC vs metal pipes'
  },
  {
    id: 'cs-4',
    question: 'What are the best UPVC pipes for drinking water?',
    questionAr: 'ما هي أفضل أنابيب UPVC لمياه الشرب؟',
    answer: `Best UPVC pipes for drinking water must have: NSF/ANSI 61 certification (safe for drinking water contact), BS EN 1452 compliance (European potable water standard), GSO approval (Gulf Standards), 100% virgin PVC compound, Calcium-zinc stabilizers (lead-free), No recycled content. Crown Plastic Pipes UPVC products are NSF/ANSI 61 certified and approved for potable water across UAE and GCC.`,
    answerAr: 'يجب أن تحمل أفضل أنابيب UPVC شهادات NSF/ANSI 61 و BS EN 1452.',
    cluster: 'comparison-selection',
    targetKeywords: ['best UPVC drinking water', 'potable water pipes', 'safe drinking water UPVC'],
    featuredSnippetTarget: 'best UPVC pipes drinking water'
  },
  {
    id: 'cs-5',
    question: 'Are UPVC or PVC pipes better for drainage?',
    questionAr: 'هل أنابيب UPVC أو PVC أفضل للصرف؟',
    answer: `For drainage, UPVC is superior due to: Higher rigidity (holds shape under load), Excellent crush resistance, Better chemical resistance, Root resistance, 50-100 year lifespan, BS EN 1401/1329 compliance. UPVC wins for drainage because of smooth bore (maintains flow), chemical inertness (handles sewage), no corrosion (unlike cast iron), and easy maintenance. Crown Plastic Pipes manufactures complete UPVC drainage systems.`,
    answerAr: 'للصرف، UPVC أفضل بسبب الصلابة العالية ومقاومة السحق الممتازة.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC drainage', 'drainage pipe comparison', 'best pipe for drainage'],
    featuredSnippetTarget: 'UPVC or PVC drainage pipes'
  },
  {
    id: 'cs-6',
    question: 'UPVC vs HDPE pipes: Which is better?',
    questionAr: 'أنابيب UPVC مقابل HDPE: أيهما أفضل؟',
    answer: `UPVC is rigid, uses solvent weld/rubber ring joints, available in straight lengths, lower cost. HDPE is flexible, uses heat fusion, available in coils, higher cost. Choose UPVC for: standard trenching, budget projects, large diameters, above-ground. Choose HDPE for: directional drilling, earthquake zones, coil advantages, ground movement areas. Crown Plastic Pipes offers both systems - contact technical team for recommendations.`,
    answerAr: 'UPVC صلب وأقل تكلفة. HDPE مرن ومتوفر في لفائف. اختر حسب التطبيق.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC vs HDPE', 'UPVC HDPE comparison', 'best pipe material'],
    featuredSnippetTarget: 'UPVC vs HDPE pipes comparison'
  },
  {
    id: 'cs-7',
    question: 'What pipe material is best for underground water supply?',
    questionAr: 'ما هي أفضل مادة أنابيب لإمداد المياه تحت الأرض؟',
    answer: `For underground water supply in UAE/GCC, UPVC is most specified due to: Corrosion immunity (no rust), Smooth bore (maintains capacity), Easy installation (lightweight), Proven 50+ year track record, Lowest lifecycle cost, No internal lining needed. UPVC lifespan: 50-100 years, HDPE: 50+ years, Ductile Iron: 50+ years but much higher cost. Crown Plastic Pipes supplies underground UPVC systems per BS EN 1452.`,
    answerAr: 'لإمداد المياه تحت الأرض، UPVC هو الأكثر تحديدًا بسبب مناعة التآكل والتركيب السهل.',
    cluster: 'comparison-selection',
    targetKeywords: ['underground water pipe', 'best buried water pipe', 'underground pipe material'],
    featuredSnippetTarget: 'best pipe underground water supply'
  },
  {
    id: 'cs-8',
    question: 'UPVC vs Copper pipes: Cost and performance comparison',
    questionAr: 'أنابيب UPVC مقابل النحاس: مقارنة التكلفة والأداء',
    answer: `UPVC costs 3-4x less than copper when installed. UPVC: 50-100 year lifespan, no corrosion, low thermal conductivity, low noise, not suitable for hot water. Copper: 40-70 year lifespan, possible corrosion (pH dependent), high thermal conductivity, higher noise. UPVC dominates UAE/GCC cold water supply market. Copper is rarely specified except for specialized applications.`,
    answerAr: 'تكلفة UPVC 3-4 مرات أقل من النحاس عند التركيب.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC vs copper', 'plastic vs copper pipes', 'UPVC copper cost'],
    featuredSnippetTarget: 'UPVC vs copper pipes cost'
  },
  {
    id: 'cs-9',
    question: 'Which UPVC pipe brand is best in UAE?',
    questionAr: 'أي علامة تجارية لأنابيب UPVC هي الأفضل في الإمارات؟',
    answer: `Key selection criteria: BS EN 1452 certification, ISO 9001:2015 quality system, BSI Kitemark, NSF/ANSI 61, GSO mark, full diameter range, technical support, track record. Crown Plastic Pipes advantages: 30+ years UAE manufacturing, factory in Sharjah, BS EN 1452 certified, BSI Kitemark, complete product range, technical support team, competitive pricing, fast GCC delivery.`,
    answerAr: 'معايير الاختيار: شهادات BS EN 1452، ISO 9001، BSI Kitemark. Crown Plastic Pipes: 30+ سنة تصنيع.',
    cluster: 'comparison-selection',
    targetKeywords: ['best UPVC brand UAE', 'top pipe manufacturer UAE', 'UPVC supplier Dubai'],
    featuredSnippetTarget: 'best UPVC pipe brand UAE'
  },
  {
    id: 'cs-10',
    question: 'How to select the right UPVC pipe size for my project?',
    questionAr: 'كيفية اختيار حجم أنبوب UPVC المناسب لمشروعي؟',
    answer: `Pipe sizing steps: 1) Calculate total flow rate (sum fixture demands), 2) Apply diversity factor (80% for 10 fixtures, 65% for 20), 3) Select diameter (0.5 L/s=25mm, 1.0 L/s=32mm, 2.0 L/s=50mm, 8.0 L/s=110mm), 4) Verify velocity (0.6-2.4 m/s optimal), 5) Check pressure drop (<10% of supply). Quick reference: apartment 25-32mm, villa 32-50mm, small building 63-90mm main. Crown Plastic Pipes offers free pipe sizing assistance.`,
    answerAr: 'خطوات تحديد الحجم: حساب التدفق، تطبيق عامل التنوع، اختيار القطر.',
    cluster: 'comparison-selection',
    targetKeywords: ['select UPVC pipe size', 'pipe sizing guide', 'what size pipe do I need'],
    featuredSnippetTarget: 'how to select UPVC pipe size'
  },
  {
    id: 'cs-11',
    question: 'What is the price range for UPVC pipes in UAE?',
    questionAr: 'ما هو نطاق سعر أنابيب UPVC في الإمارات؟',
    answer: `UPVC prices vary by: diameter (larger=more), pressure rating (higher PN=more), quantity (bulk=better pricing), standard, brand. Cost-saving tips: order full lengths, bundle fittings, plan ahead. Important: cheapest isn't best - non-certified pipes may fail inspections. Consider lifecycle cost. Contact Crown Plastic Pipes with your bill of quantities for competitive pricing with certified quality.`,
    answerAr: 'تختلف أسعار UPVC حسب القطر وتصنيف الضغط والكمية.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC pipe price UAE', 'pipe cost Dubai', 'UPVC price per meter'],
    featuredSnippetTarget: 'UPVC pipe prices UAE'
  },
  {
    id: 'cs-12',
    question: 'What certifications should UPVC pipes have for construction?',
    questionAr: 'ما الشهادات التي يجب أن تحملها أنابيب UPVC للبناء؟',
    answer: `Essential certifications for UAE/GCC construction: BS EN 1452 (pressure pipes), ISO 9001:2015 (quality system), BSI Kitemark (quality mark), NSF/ANSI 61 (drinking water), GSO (Gulf compliance), SASO (Saudi market). Crown Plastic Pipes holds all these certifications, ensuring our products meet regional building codes and project specifications.`,
    answerAr: 'الشهادات الأساسية: BS EN 1452، ISO 9001، BSI Kitemark، NSF/ANSI 61، GSO، SASO.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC certifications', 'pipe certifications UAE', 'BS EN 1452 certified'],
    featuredSnippetTarget: 'UPVC pipe certifications construction'
  },
  {
    id: 'cs-13',
    question: 'Is UPVC pipe recyclable and environmentally friendly?',
    questionAr: 'هل أنابيب UPVC قابلة للتدوير وصديقة للبيئة؟',
    answer: `UPVC is environmentally advantageous: Recyclable (can be recycled 7+ times), Long lifespan (50-100 years reduces replacement), Low energy production (vs metal pipes), No heavy metals (modern formulations), Inert material (no soil contamination), Lightweight (lower transport emissions). Crown Plastic Pipes supports sustainability through efficient manufacturing and recyclable products.`,
    answerAr: 'UPVC صديق للبيئة: قابل للتدوير، عمر طويل، إنتاج منخفض الطاقة.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC recyclable', 'UPVC environmental', 'eco friendly pipes'],
    featuredSnippetTarget: 'UPVC pipes recyclable'
  },
  {
    id: 'cs-14',
    question: 'What warranty do UPVC pipes typically have?',
    questionAr: 'ما هو الضمان النموذجي لأنابيب UPVC؟',
    answer: `UPVC pipe warranties vary by manufacturer. Industry standard is 10-25 year warranty for manufacturing defects. Expected service life is 50-100 years when properly installed within specifications. Warranty typically covers: material defects, dimensional tolerance failures, pressure rating claims. Not covered: installation errors, misuse, UV damage from improper exposure. Crown Plastic Pipes provides comprehensive warranty with technical support.`,
    answerAr: 'ضمان الصناعة القياسي 10-25 سنة. العمر المتوقع 50-100 سنة.',
    cluster: 'comparison-selection',
    targetKeywords: ['UPVC warranty', 'pipe warranty period', 'UPVC guarantee'],
    featuredSnippetTarget: 'UPVC pipe warranty'
  },
  {
    id: 'cs-15',
    question: 'Where can I buy quality UPVC pipes in UAE?',
    questionAr: 'أين يمكنني شراء أنابيب UPVC عالية الجودة في الإمارات؟',
    answer: `Quality UPVC pipes in UAE are available from: Manufacturers (like Crown Plastic Pipes - factory direct), Authorized distributors, Building material suppliers, Plumbing wholesalers. Look for: BS EN 1452 certification, Local technical support, Stock availability, Competitive pricing, Delivery capability. Crown Plastic Pipes is located in Sharjah Industrial Area with direct sales, GCC-wide delivery, technical support, and competitive factory pricing. Contact us for quotes.`,
    answerAr: 'أنابيب UPVC عالية الجودة متوفرة من المصنعين والموزعين المعتمدين. Crown Plastic Pipes في الشارقة.',
    cluster: 'comparison-selection',
    targetKeywords: ['buy UPVC pipes UAE', 'UPVC supplier Dubai', 'where to buy pipes UAE'],
    featuredSnippetTarget: 'where to buy UPVC pipes UAE'
  },
];

// =============================================================================
// COMBINED FAQ EXPORT
// =============================================================================

export const allFAQs: FAQItem[] = [
  ...technicalStandardsFAQs,
  ...installationMaintenanceFAQs,
  ...comparisonSelectionFAQs,
];

// Get FAQs by cluster
export function getFAQsByCluster(cluster: FAQItem['cluster']): FAQItem[] {
  return allFAQs.filter(faq => faq.cluster === cluster);
}

// Get FAQ by ID
export function getFAQById(id: string): FAQItem | undefined {
  return allFAQs.find(faq => faq.id === id);
}

// Search FAQs by keyword
export function searchFAQs(keyword: string): FAQItem[] {
  const lowerKeyword = keyword.toLowerCase();
  return allFAQs.filter(faq => 
    faq.question.toLowerCase().includes(lowerKeyword) ||
    faq.answer.toLowerCase().includes(lowerKeyword) ||
    faq.targetKeywords.some(k => k.toLowerCase().includes(lowerKeyword))
  );
}

