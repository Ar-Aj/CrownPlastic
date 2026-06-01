// Regional Authority Data Core — Text-First SEO Gold Mine
// Zero images, zero tables — pure dense keyword-rich content

export interface RegionHighlight {
    icon: 'truck' | 'certified' | 'building';
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
}

export interface SpecializedSolution {
    title: string;
    content: string;
}

export interface RegionFAQ {
    id: string;
    question: string;
    answer: string;
}

export interface RegionData {
    slug: string;
    heroTitle: string;
    heroTitleAr: string;
    heroSubtitle: string;
    heroSubtitleAr: string;
    localAuthority: string;
    localAuthorityAr: string;
    metaTitle: string;
    metaDesc: string;
    highlights: [RegionHighlight, RegionHighlight, RegionHighlight];
    industrialZones: string[];
    complianceSpecs: string[];
    regionalChallenges: string;
    regionalChallengesAr: string;
    specializedSolutions: SpecializedSolution[];
    faqs: RegionFAQ[];
}

// ═══════════════════════════════════════════════════════════════
// DUBAI
// ═══════════════════════════════════════════════════════════════
const dubai: RegionData = {
    slug: 'upvc-pipes-dubai',
    heroTitle: 'Dubai\'s Most Trusted Pipes & Fittings Solutions Partner',
    heroTitleAr: 'شريك حلول الأنابيب والتوصيلات الأكثر ثقة في دبي',
    heroSubtitle: 'Factory-direct BS EN 1452 certified UPVC, PPR, HDPE & PVC pipes and fittings — engineered for Dubai\'s demanding skyline, coastal infrastructure, and industrial mega-zones. Same-day delivery from our Sharjah manufacturing facility.',
    heroSubtitleAr: 'أنابيب وتوصيلات UPVC و PPR و HDPE و PVC معتمدة BS EN 1452 مباشرة من المصنع — مصممة لأفق دبي المتطلب والبنية التحتية الساحلية والمناطق الصناعية الضخمة.',
    localAuthority: 'Dubai Municipality Approved',
    localAuthorityAr: 'معتمد من بلدية دبي',
    metaTitle: 'UPVC Pipes & Fittings Dubai | #1 BS EN 1452 Supplier | Same-Day Delivery',
    metaDesc: 'Crown Plastic Pipes — Dubai\'s leading pipes and fittings solutions provider. Dubai Municipality approved UPVC, PPR, HDPE pipes. BS EN 1452 & ISO 9001:2015 certified. Same-day delivery to JAFZA, DIC, Al Quoz & all Dubai zones.',
    highlights: [
        { icon: 'truck', title: 'Same-Day Dubai Delivery', titleAr: 'توصيل في نفس اليوم', description: 'Dedicated fleet to JAFZA, DIC, Al Quoz, DAFZA & all Dubai industrial zones.', descriptionAr: 'أسطول مخصص إلى جافزا والقوز وجميع المناطق الصناعية.' },
        { icon: 'certified', title: 'Dubai Municipality Approved', titleAr: 'معتمد من بلدية دبي', description: 'Full compliance for potable water & drainage infrastructure projects.', descriptionAr: 'امتثال كامل لمشاريع مياه الشرب والصرف.' },
        { icon: 'building', title: 'Trusted by 500+ Contractors', titleAr: 'موثوق من 500+ مقاول', description: 'Supplying high-rise, villa, and infrastructure projects across Dubai.', descriptionAr: 'تزويد مشاريع الأبراج والفلل والبنية التحتية.' },
    ],
    industrialZones: ['Jebel Ali Free Zone (JAFZA)', 'Dubai Industrial City (DIC)', 'Dubai Investment Park (DIP)', 'Al Quoz Industrial Area', 'National Industries Park (NIP)', 'Dubai Silicon Oasis (DSO)'],
    complianceSpecs: ['Dubai Municipality Approved', 'DEWA Compliant', 'Trakhees Certified', 'ISO 9001:2015', 'ISO 14001:2015'],
    regionalChallenges: 'Dubai presents one of the most technically demanding construction environments on earth. The emirate\'s signature skyline — featuring structures exceeding 400 meters — requires pipes and fittings solutions that can handle extreme vertical pressure heads, thermal cycling from air-conditioned interiors to 50°C ambient exteriors, and the corrosive effects of coastal humidity and high-salinity groundwater. Simultaneously, Dubai\'s rapid horizontal expansion into master-planned communities like Dubai South, Tilal Al Ghaf, and Dubai Creek Harbour demands miles of underground potable water mains, stormwater drainage networks, and electrical conduit runs — all installed in sabkha soils with aggressive chemical profiles. The high water table across coastal zones like Dubai Marina and Palm Jumeirah introduces additional hydrostatic pressure on buried pipe systems, necessitating PN16-rated UPVC pressure pipes with fusion-welded joints. Furthermore, Dubai Municipality enforces some of the strictest plumbing material standards in the GCC, requiring full BS EN 1452 compliance, ISO 9001:2015 quality certification, and potable water contact approval for all pressure piping entering government-approved projects. Crown Plastic Pipes addresses every one of these challenges with a vertically integrated manufacturing operation, producing the full spectrum of pipes and fittings solutions — from 20mm domestic UPVC risers to 400mm trunk mains — all from our ISO-certified Sharjah factory just 25 minutes from Dubai\'s industrial heart.',
    regionalChallengesAr: 'تقدم دبي واحدة من أكثر بيئات البناء تطلبًا تقنيًا على وجه الأرض. يتطلب أفق الإمارة المميز حلول أنابيب وتوصيلات قادرة على التعامل مع رؤوس الضغط العمودية الشديدة والدورات الحرارية والتأثيرات التآكلية للرطوبة الساحلية والمياه الجوفية عالية الملوحة.',
    specializedSolutions: [
        {
            title: 'High-Rise UPVC Pressure Pipes & Fittings for Dubai Towers',
            content: 'Dubai\'s iconic towers demand UPVC pipes and fittings solutions engineered for extreme vertical pressure heads. Crown\'s BS EN 1452 certified UPVC pressure pipes in PN10 and PN16 ratings deliver burst-proof performance across 50+ storey risers in Business Bay, DIFC, and Dubai Marina developments. Our solvent-cement jointed UPVC fittings — including tees, elbows, reducers, and saddle clamps — provide leak-free connections rated to 16 bar working pressure at 20°C. The inherent corrosion resistance of unplasticized PVC eliminates the scaling and tuberculation failures common with metallic alternatives in Dubai\'s humid coastal atmosphere, ensuring full-bore flow rates for the entire 50+ year design life of the building.',
        },
        {
            title: 'PPR Hot & Cold Water Pipes and Fittings for Dubai Residences',
            content: 'For Dubai\'s luxury villa communities and residential towers, Crown supplies complete PPR pipes and fittings solutions in PN10, PN16, and PN20 pressure classes. Our polypropylene random copolymer systems handle continuous hot water service at 70°C — critical for Dubai apartments where solar-heated roof tanks regularly exceed 60°C during summer months. The heat-fusion welded PPR fittings create monolithic, zero-leak joints that outperform threaded metallic connections in Dubai\'s thermally aggressive environment. Available in sizes from 20mm to 110mm, our PPR range covers everything from individual apartment risers in Downtown Dubai to district-level hot water circulation loops in Jumeirah Village developments.',
        },
        {
            title: 'UPVC Drainage Pipes & Fittings for Dubai Stormwater Systems',
            content: 'Dubai\'s flash flood vulnerability demands robust drainage pipes and fittings solutions designed for rapid high-volume discharge. Crown\'s BS EN 1401 and BS EN 1329 certified UPVC drainage systems provide the smooth-bore, high-flow-capacity pipework essential for Dubai\'s stormwater collection networks, basement dewatering systems, and sewage discharge lines. Our complete drainage fittings range — access junctions, bends, branches, and inspection chambers — enables complex underground networks beneath Dubai Creek Harbour, Expo City, and Dubai South master plans. The chemical inertness of UPVC ensures zero degradation from construction chemicals, sabkha groundwater, or the hydrogen sulphide gas environments common in deep sewer infrastructure.',
        },
        {
            title: 'PVC Electrical Conduit Pipes for Dubai Smart City Infrastructure',
            content: 'As Dubai accelerates its Smart City 2030 agenda, the demand for reliable electrical conduit pipes and fittings solutions has surged. Crown manufactures Schedule 40 and Schedule 80 PVC conduit pipes that protect power cables, fiber optic networks, and ELV wiring across Dubai\'s commercial districts, data centers, and transportation hubs. Our conduit fittings — couplers, adaptors, elbows, and junction boxes — meet ASTM D2466 standards and provide the flame-retardant, self-extinguishing protection required by Dubai Civil Defence codes. From Dubai Metro station fit-outs to DAFZA warehouse electrical systems, Crown conduit solutions deliver the mechanical protection and pull-through ease that Dubai\'s electrical contractors demand.',
        },
        {
            title: 'HDPE Pipe Systems for Dubai Industrial & Marine Applications',
            content: 'For Dubai\'s demanding industrial zones and marine-adjacent infrastructure, Crown supplies high-density polyethylene pipes and fittings solutions engineered for the toughest applications. HDPE\'s exceptional flexibility and butt-fusion jointing make it the preferred material for submarine outfalls at Palm Jumeirah, and cooling water intakes for district cooling plants serving Business Bay. Our HDPE systems handle aggressive chemicals in JAFZA and DIC industrial process lines while maintaining full pressure integrity. The trenchless installation compatibility of HDPE dramatically reduces road-cutting permits and traffic disruption — a critical advantage in congested Dubai where authorities impose strict lane-closure restrictions.',
        },
    ],
    faqs: [
        { id: 'dxb-q1', question: 'Do you supply pipes and fittings in Dubai?', answer: 'Yes. Crown Plastic Pipes is a leading pipes and fittings solutions provider in Dubai with same-day delivery to all industrial zones including JAFZA, DIC, Al Quoz, and DAFZA. All products are BS EN 1452 certified and Dubai Municipality approved.' },
        { id: 'dxb-q2', question: 'What delivery times do you offer to Dubai?', answer: 'We offer same-day delivery to all Dubai locations from our Sharjah factory. Orders placed before 12 PM are delivered the same business day via our dedicated fleet covering Business Bay, JAFZA, DIC, Silicon Oasis, and all other districts.' },
        { id: 'dxb-q3', question: 'Are your pipes approved by Dubai Municipality and Trakhees?', answer: 'Yes. Our products carry full Dubai Municipality approval, Trakhees certification, and comply with BS EN 1452, DIN 8062, and ASTM D1785. We hold ISO 9001:2015 and ISO 14001:2015 certifications.' },
        { id: 'dxb-q4', question: 'What pressure ratings are available for Dubai projects?', answer: 'We manufacture UPVC pressure pipes from PN6 to PN16, and Schedule 40/80 for ASTM specifications. Our PPR range covers PN10, PN16, and PN20 for hot and cold water applications in Dubai high-rises.' },
        { id: 'dxb-q5', question: 'Can you handle bulk orders for mega-projects?', answer: 'Yes. Our 6,550 sq.m Sharjah facility operates 24/7, producing thousands of tons annually. We comfortably supply master-planned communities, mega-developments, and large-scale industrial projects across Dubai.' },
        { id: 'dxb-q6', question: 'Do you provide material test certificates?', answer: 'Yes, every delivery includes comprehensive Material Test Certificates (MTC) and factory compliance documentation for site engineer inspections and DEWA/Municipality approvals.' },
        { id: 'dxb-q7', question: 'How do your pipes perform in Dubai\'s extreme heat?', answer: 'Our pipes use advanced UV stabilizers and impact modifiers engineered for 50°C+ ambient temperatures. They maintain full pressure integrity and dimensional stability throughout Dubai\'s extreme summers without warping or embrittlement.' },
        { id: 'dxb-q8', question: 'What is the lifespan of your pipes in Dubai\'s coastal soil?', answer: 'Our UPVC and HDPE systems deliver a 50+ year operational lifespan in Dubai\'s high-salinity coastal and sabkha soils, far outlasting metallic alternatives that corrode in these aggressive conditions.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SAUDI ARABIA (KSA)
// ═══════════════════════════════════════════════════════════════
const saudiArabia: RegionData = {
    slug: 'upvc-pipes-saudi-arabia',
    heroTitle: 'Saudi Arabia\'s Vision 2030 Pipes & Fittings Solutions Provider',
    heroTitleAr: 'مزود حلول الأنابيب والتوصيلات لرؤية السعودية 2030',
    heroSubtitle: 'SASO & SABER certified UPVC, PPR, and HDPE pipes and fittings — exported to Riyadh, Jeddah, Dammam, NEOM, and all Saudi giga-project sites. Containerized shipping from our UAE manufacturing base.',
    heroSubtitleAr: 'أنابيب وتوصيلات UPVC و PPR و HDPE معتمدة من ساسو وسابر — يتم تصديرها إلى الرياض وجدة والدمام ونيوم وجميع مواقع المشاريع العملاقة.',
    localAuthority: 'SASO & SABER Certified',
    localAuthorityAr: 'معتمد من ساسو وسابر',
    metaTitle: 'UPVC Pipes & Fittings Saudi Arabia | SASO Certified | Vision 2030 Supplier',
    metaDesc: 'Crown Plastic Pipes — Saudi Arabia\'s trusted pipes and fittings solutions exporter. SASO & SABER certified UPVC, PPR, HDPE systems. Supplying NEOM, Riyadh, Jeddah & Dammam. BS EN 1452 compliant.',
    highlights: [
        { icon: 'truck', title: 'Containerized KSA Shipping', titleAr: 'شحن حاويات للسعودية', description: 'Regular shipments to Jeddah, Dammam, Jubail & Riyadh dry ports.', descriptionAr: 'شحنات منتظمة إلى جدة والدمام والجبيل والرياض.' },
        { icon: 'certified', title: 'SASO & SABER Certified', titleAr: 'معتمد من ساسو وسابر', description: 'Full SASO conformity and SABER platform registration for instant customs clearance.', descriptionAr: 'شهادة مطابقة ساسو وتسجيل منصة سابر.' },
        { icon: 'building', title: 'Vision 2030 Project Ready', titleAr: 'جاهز لمشاريع رؤية 2030', description: 'Supplying NEOM, THE LINE, Red Sea & major Saudi contractor networks.', descriptionAr: 'تزويد نيوم وذا لاين ومشروع البحر الأحمر.' },
    ],
    industrialZones: ['Jubail Industrial City', 'Yanbu Industrial City', 'Riyadh 2nd Industrial City', 'King Abdullah Economic City (KAEC)', 'Modon Industrial Clusters', 'NEOM Industrial Zone'],
    complianceSpecs: ['SASO Certified', 'SABER Registered', 'Saudi Building Code (SBC)', 'Aramco Vendor Approved', 'NWC Standards', 'BS EN 1452'],
    regionalChallenges: 'Saudi Arabia\'s Vision 2030 is generating the most ambitious infrastructure buildout the Middle East has ever seen. Giga-projects like NEOM, THE LINE, Qiddiya, and the Red Sea Tourism Corridor demand millions of linear meters of pipes and fittings solutions capable of surviving the Kingdom\'s brutal desert environment — where ambient temperatures routinely exceed 50°C, UV radiation is among the highest on the planet, and soil conditions range from hyper-arid sand to corrosive coastal sabkha along the Red Sea and Arabian Gulf coastlines. Simultaneously, Saudi Arabia is rapidly expanding its potable water distribution networks to serve a population projected to reach 50 million, requiring massive trunk main installations from desalination plants to inland cities like Riyadh and Abha. The Kingdom\'s stringent SASO standards and Saudi Building Code mandate that all imported pipes and fittings carry SABER platform conformity certificates, ensuring only internationally certified products enter the Saudi market. Crown Plastic Pipes meets every regulatory and environmental demand through our BS EN 1452 and DIN 8062 certified UPVC manufacturing, SASO-approved product lines, and a containerized export logistics program covering every Saudi port and dry terminal. Our vertically integrated pipes and fittings solutions — spanning UPVC pressure, PPR hot water, HDPE industrial, and PVC conduit systems — are purpose-built for the extreme thermal, UV, and chemical stresses of Saudi infrastructure.',
    regionalChallengesAr: 'تولد رؤية السعودية 2030 أكثر مشاريع البنية التحتية طموحًا في الشرق الأوسط. تتطلب المشاريع العملاقة ملايين الأمتار الطولية من حلول الأنابيب والتوصيلات القادرة على البقاء في بيئة الصحراء القاسية في المملكة.',
    specializedSolutions: [
        {
            title: 'UPVC Pressure Pipes & Fittings for Saudi Potable Water Networks',
            content: 'Saudi Arabia\'s National Water Company (NWC) is rolling out massive potable water distribution networks connecting coastal desalination plants to inland population centers. Crown\'s BS EN 1452 certified UPVC pressure pipes and fittings solutions provide the backbone for these critical water mains. Available in PN10 and PN16 pressure classes with sizes from 63mm to 400mm, our UPVC systems deliver leak-free, corrosion-proof water conveyance across hundreds of kilometers of Saudi desert terrain. The solvent-cement jointed fittings — tees, crosses, reducers, flanged adaptors, and repair couplings — enable rapid field assembly even in remote giga-project locations like NEOM and THE LINE where skilled labor availability can be limited.',
        },
        {
            title: 'PPR Pipes and Fittings Systems for Saudi Residential Mega-Projects',
            content: 'Saudi Arabia\'s housing boom — targeting 1.5 million new homes by 2030 — requires reliable hot and cold water pipes and fittings solutions inside every residential unit. Crown\'s PPR random copolymer systems in PN16 and PN20 handle the extreme roof-tank temperatures common in Riyadh, Jeddah, and Dammam homes where stored water regularly exceeds 65°C during summer. Our heat-fusion welded PPR fittings create permanent molecular bonds that eliminate the joint failures plaguing threaded metallic plumbing in Saudi environments. The complete Crown PPR fittings catalogue — elbows, tees, crosses, valves, and transition fittings to UPVC/metallic systems — enables Saudi plumbing contractors to deliver turnkey internal plumbing from a single manufacturer.',
        },
        {
            title: 'UPVC Drainage & Sewerage Pipes and Fittings for KSA Infrastructure',
            content: 'As Saudi cities expand rapidly under Vision 2030, the demand for robust drainage and sewerage pipes and fittings solutions is unprecedented. Crown\'s BS EN 1401 certified UPVC drainage systems provide the chemical resistance, smooth bore, and hydraulic efficiency required for Saudi Arabia\'s expanding municipal sewage collection networks. Our drainage fittings — including swept tees, access junctions, inspection chambers, and non-return valves — handle the aggressive hydrogen sulphide environments typical of deep Saudi sewer systems. The lightweight nature of UPVC dramatically reduces installation costs in Saudi Arabia, where labor and crane hire rates for heavy metallic pipe are significantly higher than in neighboring markets.',
        },
        {
            title: 'PVC Conduit Pipes for Saudi Smart Grid & Telecom Expansion',
            content: 'Saudi Arabia\'s ambitious fiber-to-the-home and smart grid programs require millions of meters of PVC conduit pipes and fittings solutions to protect electrical and telecommunications cabling nationwide. Crown manufactures Schedule 40 and Schedule 80 PVC conduit systems that meet ASTM D2466 and Saudi Electricity Company (SEC) specifications. Our conduit fittings deliver the flame-retardant, self-extinguishing cable protection demanded by Saudi Civil Defence codes across NEOM smart city infrastructure, Riyadh Metro station electrical fit-outs, and the Kingdom\'s expanding 5G tower network.',
        },
        {
            title: 'HDPE Pipes for Saudi Industrial & Desalination Plant Applications',
            content: 'Saudi Arabia\'s petrochemical heartland in Jubail and Yanbu, combined with the Kingdom\'s massive desalination infrastructure, demands industrial-grade pipes and fittings solutions with exceptional chemical resistance. Crown\'s HDPE pipe systems — available in PE80 and PE100 grades — handle the aggressive chemical profiles of Aramco refinery auxiliary lines, SWCC desalination plant brine discharge, and KAEC industrial district process water networks. The butt-fusion and electrofusion jointing of HDPE fittings provides fully restrained, leak-proof connections suitable for the seismic considerations along the Red Sea fault zone where NEOM and Red Sea Global projects are located.',
        },
    ],
    faqs: [
        { id: 'ksa-q1', question: 'Do you export pipes and fittings to Saudi Arabia?', answer: 'Yes. Crown Plastic Pipes is an established exporter of UPVC, PPR, and HDPE pipes and fittings solutions to Saudi Arabia, serving mega-projects across Riyadh, Jeddah, Dammam, and giga-project sites like NEOM and Qiddiya.' },
        { id: 'ksa-q2', question: 'What Saudi ports do you ship to?', answer: 'We ship containerized cargo to Jeddah Islamic Port, King Abdulaziz Port Dammam, and Jubail Commercial Port. We also arrange overland trucking directly to Riyadh and inland Saudi sites.' },
        { id: 'ksa-q3', question: 'Are your products SASO certified and SABER registered?', answer: 'Yes. All our products carry SASO conformity certificates and are fully registered on the SABER digital platform for seamless Saudi customs clearance without delays.' },
        { id: 'ksa-q4', question: 'What pipe sizes and lengths do you export?', answer: 'We export full metric sizes from 20mm to 400mm OD and imperial from 1/2" to 16". Standard pipe lengths are 6 meters, optimized for 40ft shipping container volume efficiency.' },
        { id: 'ksa-q5', question: 'Can you supply giga-projects like NEOM?', answer: 'Absolutely. Our factory produces thousands of tons annually and we specialize in sequenced delivery schedules required by master-planners at NEOM, THE LINE, and Red Sea Global.' },
        { id: 'ksa-q6', question: 'How long does shipping to Saudi Arabia take?', answer: 'Sea freight to Jeddah takes 5-7 days; to Dammam 3-5 days. Overland trucking to Riyadh is 2-3 business days. We optimize logistics for fastest delivery to your Saudi project site.' },
        { id: 'ksa-q7', question: 'Do your pipes withstand Saudi desert temperatures?', answer: 'Yes. Our pipes are formulated with titanium dioxide UV stabilizers and impact modifiers engineered for 50°C+ ambient temperatures. They resist warping, embrittlement, and UV degradation under direct Saudi sunlight.' },
        { id: 'ksa-q8', question: 'What export documentation do you provide?', answer: 'We provide Commercial Invoice, Packing List, Chamber of Commerce stamped Certificate of Origin, SASO certificate, SABER Product/Shipment Certificates, and comprehensive Material Test Certificates.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// ABU DHABI (Condensed — same structure, unique content)
// ═══════════════════════════════════════════════════════════════
const abuDhabi: RegionData = {
    slug: 'upvc-pipes-abu-dhabi',
    heroTitle: 'Abu Dhabi\'s Premier Pipes & Fittings Solutions Supplier',
    heroTitleAr: 'المورد الأول لحلول الأنابيب والتوصيلات في أبوظبي',
    heroSubtitle: 'ADM-compliant UPVC, PPR & HDPE pipes and fittings for the capital\'s mega-infrastructure, Yas Island developments, and ADNOC-adjacent projects.',
    heroSubtitleAr: 'أنابيب وتوصيلات متوافقة مع بلدية أبوظبي لمشاريع البنية التحتية الضخمة في العاصمة.',
    localAuthority: 'ADM Compliant',
    localAuthorityAr: 'متوافق مع بلدية أبوظبي',
    metaTitle: 'UPVC Pipes & Fittings Abu Dhabi | ADM Compliant | ISO 9001 Factory',
    metaDesc: 'Crown Plastic Pipes — Abu Dhabi\'s trusted pipes and fittings solutions supplier. ADM compliant UPVC, PPR & HDPE. Delivering to Mussafah, KIZAD, Yas Island & Al Ain.',
    highlights: [
        { icon: 'truck', title: 'Rapid Abu Dhabi Delivery', titleAr: 'توصيل سريع لأبوظبي', description: 'Direct logistics to Mussafah, KIZAD, Yas Island & Al Ain.', descriptionAr: 'لوجستيات مباشرة إلى مصفح وكيزاد وياس والعين.' },
        { icon: 'certified', title: 'ADM Compliant', titleAr: 'متوافق مع ADM', description: 'Full Abu Dhabi Municipality standards compliance.', descriptionAr: 'امتثال كامل لمعايير بلدية أبوظبي.' },
        { icon: 'building', title: 'Mega-Project Track Record', titleAr: 'سجل المشاريع الكبرى', description: 'Serving Yas Island, ADNOC infrastructure, and government tenders.', descriptionAr: 'خدمة جزيرة ياس والبنية التحتية لأدنوك.' },
    ],
    industrialZones: ['Mussafah Industrial Area', 'KIZAD (Khalifa Industrial Zone)', 'ICAD I, II, III', 'Al Ain Industrial City', 'Ruwais Industrial Complex'],
    complianceSpecs: ['Abu Dhabi Municipality (ADM)', 'ADSSC Approved', 'Estidama Compliant', 'ISO 9001:2015'],
    regionalChallenges: 'Abu Dhabi\'s ambitious capital infrastructure program demands pipes and fittings solutions that meet the highest municipal and environmental standards in the UAE. From ADNOC-adjacent industrial infrastructure in Ruwais to Saadiyat Cultural District\'s internationally prestigious developments, the capital requires corrosion-proof, heat-resistant piping systems certified to ADM and ADSSC specifications. The emirate\'s Estidama Pearl Rating system further mandates that all building materials — including plumbing pipes and fittings — contribute to measurable sustainability targets, favouring recyclable UPVC and PPR systems over conventional metallic alternatives. Crown Plastic Pipes delivers ADM-compliant pressure pipes, drainage systems, and conduit solutions optimized for Abu Dhabi\'s coastal high-salinity soils and extreme summer thermal loads.',
    regionalChallengesAr: 'يتطلب برنامج البنية التحتية الطموح في أبوظبي حلول أنابيب وتوصيلات تلبي أعلى المعايير البلدية والبيئية في الإمارات.',
    specializedSolutions: [
        { title: 'UPVC Pressure Pipes & Fittings for Abu Dhabi Municipal Networks', content: 'Crown supplies ADM-compliant UPVC pressure pipes and fittings solutions for Abu Dhabi\'s expanding potable water distribution networks. Our PN10 and PN16 rated systems serve municipal trunk mains from ADSSC treatment plants to residential communities across Khalifa City, Yas Island, and Al Ain, delivering corrosion-free water conveyance with a certified 50+ year service life in Abu Dhabi\'s aggressive coastal soil conditions.' },
        { title: 'PPR Hot Water Pipes and Fittings for Abu Dhabi Residences', content: 'Abu Dhabi\'s residential towers and villa estates require PPR pipes and fittings solutions that handle extreme solar-heated water temperatures. Crown\'s PN20 PPR systems deliver reliable hot water service at sustained 70°C operating temperatures, with heat-fusion welded fittings that eliminate the joint degradation common in Abu Dhabi\'s thermally demanding plumbing environments.' },
        { title: 'UPVC Drainage Solutions for Abu Dhabi Infrastructure', content: 'Crown\'s BS EN 1401 drainage pipes and fittings provide the hydraulic performance required for Abu Dhabi\'s stormwater management systems and sewerage networks. Our smooth-bore UPVC drainage systems resist the hydrogen sulphide corrosion environments present in deep Abu Dhabi sewer infrastructure while delivering superior flow rates compared to concrete alternatives.' },
        { title: 'HDPE Industrial Pipes for Ruwais & KIZAD Applications', content: 'For Abu Dhabi\'s heavy industrial zones, Crown supplies HDPE pipes and fittings solutions with exceptional chemical resistance for ADNOC-adjacent process water, cooling systems, and industrial effluent discharge at Ruwais and KIZAD facilities.' },
    ],
    faqs: [
        { id: 'ad-q1', question: 'Do you supply pipes and fittings in Abu Dhabi?', answer: 'Yes, we supply daily to Abu Dhabi\'s major zones including Mussafah, KIZAD, Yas Island, and Al Ain with full ADM compliance.' },
        { id: 'ad-q2', question: 'Are your pipes ADM compliant?', answer: 'Yes, all our pipes hold ADM approvals required for Abu Dhabi infrastructure projects.' },
        { id: 'ad-q3', question: 'How quickly can you deliver to Al Ain?', answer: 'We offer 24-48 hour delivery to Al Ain and remote Abu Dhabi regions from our Sharjah factory.' },
        { id: 'ad-q4', question: 'Do you meet Estidama sustainability requirements?', answer: 'Yes, our 100% recyclable UPVC and PPR pipes align with Estidama Pearl Rating requirements.' },
        { id: 'ad-q5', question: 'What pressure ratings are available?', answer: 'We stock PN6, PN10, and PN16 UPVC pressure ratings plus PN10-PN20 PPR for Abu Dhabi projects.' },
        { id: 'ad-q6', question: 'Do you supply for district cooling?', answer: 'Yes, our UPVC and HDPE systems are regularly specified for district cooling networks across the emirate.' },
        { id: 'ad-q7', question: 'Are your pipes suitable for Saadiyat Island?', answer: 'Yes, our pipes are naturally corrosion-proof and excel in coastal reclaimed land environments.' },
        { id: 'ad-q8', question: 'Do you participate in government tenders?', answer: 'Yes, we provide complete documentation support for Abu Dhabi local and federal government tenders.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SHARJAH
// ═══════════════════════════════════════════════════════════════
const sharjah: RegionData = {
    slug: 'upvc-pipes-sharjah',
    heroTitle: 'Factory-Direct Pipes & Fittings Solutions from Sharjah',
    heroTitleAr: 'حلول أنابيب وتوصيلات مباشرة من مصنع الشارقة',
    heroSubtitle: 'Visit our Sharjah factory and showroom for factory-direct pricing on BS EN 1452 certified UPVC, PPR & HDPE pipes and fittings. Instant pickup, zero middlemen.',
    heroSubtitleAr: 'زوروا مصنعنا وصالة العرض في الشارقة للحصول على أسعار مباشرة من المصنع.',
    localAuthority: 'Sharjah Municipality Approved',
    localAuthorityAr: 'معتمد من بلدية الشارقة',
    metaTitle: 'UPVC Pipes & Fittings Sharjah | Factory Direct | Visit Our Showroom',
    metaDesc: 'Crown Plastic Pipes — Sharjah-based manufacturer of pipes and fittings solutions. Factory-direct pricing, instant pickup. 30+ years manufacturing. ISO 9001:2015 certified.',
    highlights: [
        { icon: 'truck', title: 'Instant Factory Pickup', titleAr: 'استلام فوري', description: 'Walk-in pickup. Zero delivery wait for Sharjah contractors.', descriptionAr: 'استلام فوري. وقت انتظار صفر.' },
        { icon: 'certified', title: 'Sharjah Municipality Approved', titleAr: 'معتمد من بلدية الشارقة', description: 'ISO 9001:2015 and BS EN 1452 certified.', descriptionAr: 'معتمد ISO 9001:2015 و BS EN 1452.' },
        { icon: 'building', title: 'Factory Tours Available', titleAr: 'جولات المصنع متاحة', description: 'See our ISO-certified production lines in action.', descriptionAr: 'شاهد خطوط إنتاجنا المعتمدة.' },
    ],
    industrialZones: ['Sharjah Industrial Area 1-18', 'SAIF Zone', 'Hamriyah Free Zone', 'Emirates Industrial City', 'Al Saja\'a Industrial Oasis'],
    complianceSpecs: ['Sharjah Municipality', 'SEWA Compliant', 'ISO 9001:2015', 'BS EN 1452', 'DIN 8062'],
    regionalChallenges: 'As the UAE\'s manufacturing heartland, Sharjah demands pipes and fittings solutions that serve both its own vast industrial ecosystem and the neighboring emirates it supplies. Crown Plastic Pipes is headquartered here — our 6,550 sq.m factory in Sharjah Industrial Area produces the full range of UPVC, PPR, and HDPE systems certified to BS EN 1452 and DIN 8062 standards. Sharjah contractors benefit from factory-direct pricing, instant walk-in pickup, and technical consultation from our on-site engineering team.',
    regionalChallengesAr: 'بصفتها قلب التصنيع في الإمارات، تتطلب الشارقة حلول أنابيب وتوصيلات تخدم نظامها الصناعي الواسع والإمارات المجاورة.',
    specializedSolutions: [
        { title: 'Factory-Direct UPVC Pipes & Fittings for Sharjah Contractors', content: 'Sharjah contractors purchasing directly from our factory eliminate all middleman markup on UPVC pipes and fittings solutions. We stock the complete BS EN 1452 UPVC pressure range from 20mm to 250mm for immediate pickup, plus the full drainage fittings catalogue. Our Sharjah showroom displays every product Crown manufactures, enabling contractors to specify complete piping systems with expert guidance from our technical engineers.' },
        { title: 'PPR Systems for Sharjah Residential Developments', content: 'Crown supplies complete PPR pipes and fittings solutions for Sharjah\'s expanding residential communities including Al Zahia, Tilal City, and Aljada. Our PN16 and PN20 PPR systems handle the high water temperatures common in Sharjah homes, with heat-fusion welded joints that deliver decades of maintenance-free service.' },
        { title: 'Industrial Drainage for Sharjah Free Zones', content: 'SAIF Zone, Hamriyah Free Zone, and Emirates Industrial City require robust drainage pipes and fittings solutions designed for industrial effluent discharge. Crown\'s UPVC drainage systems provide the chemical resistance needed for the diverse manufacturing operations across Sharjah\'s industrial landscape.' },
        { title: 'PVC Conduit for SEWA & Sharjah Infrastructure', content: 'Crown manufactures PVC conduit pipes and fittings for Sharjah Electricity & Water Authority (SEWA) infrastructure projects, providing flame-retardant cable protection for the emirate\'s expanding power and telecommunications networks.' },
    ],
    faqs: [
        { id: 'shj-q1', question: 'Where is your factory in Sharjah?', answer: 'We are located in Sharjah Industrial Area, offering convenient access for walk-in pickups and factory tours.' },
        { id: 'shj-q2', question: 'Do you offer factory-direct pricing?', answer: 'Yes, purchasing from our Sharjah facility eliminates middleman costs, giving you the best price per meter in the UAE.' },
        { id: 'shj-q3', question: 'Can I pick up orders immediately?', answer: 'Yes, we maintain extensive stock for instant walk-in pickups of standard sizes.' },
        { id: 'shj-q4', question: 'Are your products SEWA approved?', answer: 'Yes, our UPVC pressure pipes meet SEWA requirements for Sharjah water infrastructure.' },
        { id: 'shj-q5', question: 'Can I tour the factory?', answer: 'Yes, we welcome contractor tours of our ISO-certified production facility.' },
        { id: 'shj-q6', question: 'What sizes are available for pickup?', answer: 'We hold stock of standard metric (20mm-250mm) and imperial sizes at our Sharjah yard.' },
        { id: 'shj-q7', question: 'Do you deliver to Hamriyah Free Zone?', answer: 'Yes, we provide daily rapid deliveries to Hamriyah and SAIF Zone.' },
        { id: 'shj-q8', question: 'Are your pipes suitable for industrial wastewater?', answer: 'Yes, our UPVC pipes offer superior chemical resistance ideal for Sharjah industrial effluent discharge applications.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// KUWAIT
// ═══════════════════════════════════════════════════════════════
const kuwait: RegionData = {
    slug: 'upvc-pipes-kuwait',
    heroTitle: 'Kuwait\'s Trusted Pipes & Fittings Solutions Partner',
    heroTitleAr: 'شريك حلول الأنابيب والتوصيلات الموثوق في الكويت',
    heroSubtitle: 'MEW-compliant UPVC, PPR & HDPE pipes and fittings exported to Kuwait since 1995. Containerized shipping to Shuwaikh and Shuaiba ports.',
    heroSubtitleAr: 'أنابيب وتوصيلات متوافقة مع وزارة الكهرباء والماء يتم تصديرها إلى الكويت منذ 1995.',
    localAuthority: 'Kuwait MEW Compliant',
    localAuthorityAr: 'متوافق مع وزارة الكهرباء والماء',
    metaTitle: 'UPVC Pipes & Fittings Kuwait | MEW Compliant | ISO Certified Manufacturer',
    metaDesc: 'Crown Plastic Pipes — Kuwait\'s trusted pipes and fittings solutions exporter. MEW compliant. BS EN 1452 certified. Shipping to Shuwaikh & Shuaiba ports.',
    highlights: [
        { icon: 'truck', title: 'Kuwait Port Shipping', titleAr: 'شحن إلى موانئ الكويت', description: 'Regular container schedules to Shuwaikh & Shuaiba.', descriptionAr: 'جداول حاويات منتظمة.' },
        { icon: 'certified', title: 'MEW Compliant', titleAr: 'متوافق مع MEW', description: 'Meeting Kuwait Ministry of Electricity & Water standards.', descriptionAr: 'تلبية معايير وزارة الكهرباء والماء.' },
        { icon: 'building', title: 'New Kuwait 2035 Ready', titleAr: 'جاهز لكويت 2035', description: 'Supporting Kuwait\'s national development vision.', descriptionAr: 'دعم رؤية الكويت التنموية.' },
    ],
    industrialZones: ['Shuaiba Industrial Area', 'Sabhan Industrial Area', 'Amghara Industrial Area', 'Mina Abdullah', 'Al Rai Industrial Area'],
    complianceSpecs: ['Kuwait MEW', 'Kuwait MPW', 'BS EN 1452', 'DIN 8062', 'ISO 9001:2015'],
    regionalChallenges: 'Kuwait\'s New Kuwait 2035 vision is driving unprecedented infrastructure expansion. The country\'s extreme summer temperatures exceeding 50°C and its arid, saline soil conditions demand pipes and fittings solutions with exceptional thermal stability and corrosion resistance. Crown Plastic Pipes has served Kuwait\'s construction sector for over two decades, delivering MEW-compliant UPVC, PPR, and HDPE systems through regular sea freight to Shuwaikh and Shuaiba ports.',
    regionalChallengesAr: 'تدفع رؤية كويت 2035 توسعًا غير مسبوق في البنية التحتية يتطلب حلول أنابيب وتوصيلات ذات استقرار حراري استثنائي.',
    specializedSolutions: [
        { title: 'UPVC Pressure Pipes & Fittings for Kuwait Water Networks', content: 'Crown supplies MEW-compliant UPVC pipes and fittings solutions for Kuwait\'s expanding potable water distribution networks. Our PN10 and PN16 rated systems serve municipal infrastructure across Kuwait City, Hawalli, and Farwaniya, delivering corrosion-free water conveyance engineered for Kuwait\'s extreme thermal and soil conditions.' },
        { title: 'PPR Pipes and Fittings for Kuwait Residential Projects', content: 'Kuwait\'s residential construction boom demands PPR pipes and fittings solutions that handle the intense roof-tank water temperatures. Crown\'s PN20 PPR systems deliver reliable hot water service with heat-fusion welded fittings that eliminate joint failures in Kuwait\'s thermally aggressive plumbing environments.' },
        { title: 'Drainage Pipes & Fittings for Kuwait Infrastructure', content: 'Crown\'s UPVC drainage pipes and fittings solutions provide the chemical resistance and hydraulic efficiency required for Kuwait\'s municipal sewerage and stormwater management systems serving the Ahmadi industrial corridor and expanding southern residential zones.' },
        { title: 'HDPE Systems for Kuwait Oil & Gas Infrastructure', content: 'For Kuwait\'s critical oil sector support infrastructure around Ahmadi and Mina Abdullah, Crown supplies HDPE pipes and fittings solutions with exceptional chemical resistance for process water, cooling systems, and industrial effluent applications.' },
    ],
    faqs: [
        { id: 'kwt-q1', question: 'Do you supply pipes and fittings to Kuwait?', answer: 'Yes, we are an established exporter of UPVC, PPR, and HDPE pipes and fittings to Kuwait via sea freight.' },
        { id: 'kwt-q2', question: 'Are your pipes MEW compliant?', answer: 'Yes, our pressure pipes meet all Kuwait Ministry of Electricity & Water specifications.' },
        { id: 'kwt-q3', question: 'Which Kuwait ports do you ship to?', answer: 'We ship to Shuwaikh and Shuaiba commercial ports via dedicated container schedules.' },
        { id: 'kwt-q4', question: 'How long does shipping take?', answer: 'Sea freight to Kuwait typically takes 4-6 business days from the UAE.' },
        { id: 'kwt-q5', question: 'Do you provide Certificates of Origin?', answer: 'Yes, all shipments include full export documentation including Chamber of Commerce stamped Certificates.' },
        { id: 'kwt-q6', question: 'Do you supply for Ahmadi oil infrastructure?', answer: 'Yes, our pipes provide excellent chemical resistance for oil sector secondary infrastructure.' },
        { id: 'kwt-q7', question: 'Can you handle Kuwait 2035 mega-project volumes?', answer: 'Yes, our 6,550 sq.m factory accommodates multi-container bulk orders.' },
        { id: 'kwt-q8', question: 'Do your pipes survive Kuwait summer heat?', answer: 'Yes, our UV stabilizers and heat-resistant formulations are engineered for 50°C+ Kuwait summers.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// QATAR
// ═══════════════════════════════════════════════════════════════
const qatar: RegionData = {
    slug: 'upvc-pipes-qatar',
    heroTitle: 'Qatar\'s Post-2022 Pipes & Fittings Solutions Provider',
    heroTitleAr: 'مزود حلول الأنابيب والتوصيلات لما بعد 2022 في قطر',
    heroSubtitle: 'Ashghal-compliant UPVC, PPR & HDPE pipes and fittings for Doha, Lusail, The Pearl, and Qatar\'s expanding post-World Cup infrastructure legacy.',
    heroSubtitleAr: 'أنابيب وتوصيلات متوافقة مع أشغال لمشاريع الدوحة ولوسيل واللؤلؤة.',
    localAuthority: 'Ashghal (PWA) Compliant',
    localAuthorityAr: 'متوافق مع أشغال',
    metaTitle: 'UPVC Pipes & Fittings Qatar | Ashghal Compliant | Lusail & Doha Supplier',
    metaDesc: 'Crown Plastic Pipes — Qatar\'s trusted pipes and fittings solutions supplier. Ashghal compliant. BS EN 1452 certified. Serving Doha, Lusail, The Pearl & Al Wakra.',
    highlights: [
        { icon: 'truck', title: 'Hamad Port Delivery', titleAr: 'توصيل ميناء حمد', description: 'Regular shipments with fast customs clearance.', descriptionAr: 'شحنات منتظمة مع تخليص جمركي سريع.' },
        { icon: 'certified', title: 'Ashghal Compliant', titleAr: 'متوافق مع أشغال', description: 'Meeting Qatar PWA specifications.', descriptionAr: 'تلبية مواصفات هيئة الأشغال العامة.' },
        { icon: 'building', title: 'Lusail & Legacy Projects', titleAr: 'لوسيل ومشاريع الإرث', description: 'Supplying Qatar\'s signature developments.', descriptionAr: 'تزويد المشاريع المميزة في قطر.' },
    ],
    industrialZones: ['Mesaieed Industrial City (MIC)', 'Ras Laffan Industrial City', 'Doha Industrial Area', 'Qatar Free Zones (Ras Bufontas & Umm Alhoul)'],
    complianceSpecs: ['Ashghal (PWA)', 'Kahramaa Standards', 'Qatar Civil Defense', 'BS EN 1452', 'ISO 9001:2015'],
    regionalChallenges: 'Qatar\'s post-2022 infrastructure legacy program is driving billions in new development across Lusail City, Doha Metro extensions, and emerging industrial zones. The country\'s hyper-arid, saline coastal environment demands pipes and fittings solutions that resist corrosion, thermal stress, and scaling. Ashghal (PWA) enforces stringent specifications for all piping materials used in Qatar\'s government and private sector infrastructure. Crown Plastic Pipes delivers Ashghal-compliant UPVC, PPR, and HDPE systems through regular containerized shipments to Hamad Port.',
    regionalChallengesAr: 'يدفع برنامج إرث البنية التحتية ما بعد 2022 في قطر مليارات في التطوير الجديد يتطلب حلول أنابيب وتوصيلات مقاومة للتآكل.',
    specializedSolutions: [
        { title: 'UPVC Pressure Pipes & Fittings for Qatar Water Infrastructure', content: 'Crown supplies Ashghal-compliant UPVC pipes and fittings solutions for Qatar\'s potable water distribution networks serving Lusail City, The Pearl, West Bay, and expanding Doha suburbs. Our PN10 and PN16 systems provide corrosion-free water conveyance with certified 50+ year service life in Qatar\'s saline coastal soils.' },
        { title: 'PPR Pipes and Fittings for Qatar Residential Towers', content: 'Qatar\'s luxury residential developments demand PPR pipes and fittings solutions that handle extreme hot water temperatures. Crown\'s heat-fusion welded PPR systems deliver leak-free hot and cold water plumbing for high-rise towers across Lusail and The Pearl Qatar developments.' },
        { title: 'Drainage Solutions for Qatar Mega-Projects', content: 'Crown\'s UPVC drainage pipes and fittings solutions provide the hydraulic performance and chemical resistance required for Qatar\'s expanding municipal sewerage networks and Lusail City stormwater management systems.' },
        { title: 'HDPE Pipes for Ras Laffan & Mesaieed Industrial Applications', content: 'For Qatar\'s petrochemical heartland, Crown supplies HDPE pipes and fittings solutions with exceptional chemical resistance for LNG facility auxiliary lines, desalination plant brine discharge, and industrial process water networks at Ras Laffan and Mesaieed.' },
    ],
    faqs: [
        { id: 'qat-q1', question: 'Do you supply pipes and fittings to Qatar?', answer: 'Yes, we are a major exporter of BS EN 1452 UPVC pipes and fittings to contractors across Qatar.' },
        { id: 'qat-q2', question: 'Are your pipes Ashghal compliant?', answer: 'Yes, our infrastructure-grade piping meets Qatar\'s Public Works Authority (Ashghal) specifications.' },
        { id: 'qat-q3', question: 'Which Qatar port do you ship to?', answer: 'We route containerized freight through Hamad Port for fast customs clearance.' },
        { id: 'qat-q4', question: 'What is the shipping lead time to Doha?', answer: 'Shipping from the UAE to Hamad Port takes 3-5 business days.' },
        { id: 'qat-q5', question: 'Do you supply to Lusail City?', answer: 'Yes, we supply premium pressure pipes for Lusail and The Pearl Qatar developments.' },
        { id: 'qat-q6', question: 'Do your products clear Qatar customs easily?', answer: 'Yes, with full MTCs and Certificates of Origin, our shipments clear customs seamlessly.' },
        { id: 'qat-q7', question: 'What pressure classes do you export?', answer: 'We export PN6 to PN16 metric and SCH 40/80 imperial pipe classes to Qatar.' },
        { id: 'qat-q8', question: 'Do your pipes handle Qatar summer heat?', answer: 'Yes, our UV-resistant formulations ensure dimensional stability in Doha\'s extreme summers.' },
    ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════
export const regionsMap: Record<string, RegionData> = {
    'upvc-pipes-dubai': dubai,
    'upvc-pipes-abu-dhabi': abuDhabi,
    'upvc-pipes-sharjah': sharjah,
    'upvc-pipes-saudi-arabia': saudiArabia,
    'upvc-pipes-kuwait': kuwait,
    'upvc-pipes-qatar': qatar,
};

export const allRegions: RegionData[] = [dubai, abuDhabi, sharjah, saudiArabia, kuwait, qatar];
