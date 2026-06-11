// Navigation and routes configuration for Crown Plastic Pipes
// Trilingual structure - English labels with Arabic & French translations

export interface NavItem {
  label: string;
  labelAr?: string;
  labelFr?: string;
  href: string;
  children?: NavItem[];
  description?: string;
  descriptionAr?: string;
  descriptionFr?: string;
}

export interface FooterColumn {
  title: string;
  titleAr?: string;
  titleFr?: string;
  links: { label: string; labelAr?: string; labelFr?: string; href: string }[];
}

// Main navigation items
export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    labelAr: 'الرئيسية',
    href: '/',
  },
  {
    label: 'About',
    labelAr: 'من نحن',
    href: '/about-us',
    children: [
      { label: 'Company Overview', labelAr: 'نظرة عامة على الشركة', labelFr: 'Présentation de l\'Entreprise', href: '/about-us#company-overview', description: 'Who we are, our vision & mission', descriptionAr: 'من نحن، رؤيتنا ومهمتنا', descriptionFr: 'Qui nous sommes, notre vision et mission' },
      { label: 'Our Journey', labelAr: 'مسيرتنا', labelFr: 'Notre Parcours', href: '/about-us#our-journey', description: 'Milestones since 1995', descriptionAr: 'مراحل التطور منذ ١٩٩٥', descriptionFr: 'Étapes clés depuis 1995' },
      { label: 'Manufacturing', labelAr: 'التصنيع', labelFr: 'Fabrication', href: '/about-us#manufacturing', description: 'Factory & GCC network', descriptionAr: 'المصنع وشبكة دول الخليج', descriptionFr: 'Usine et réseau CCG' },
      { label: 'Quality & Certifications', labelAr: 'الجودة والشهادات', labelFr: 'Qualité et Certifications', href: '/about-us#quality', description: 'ISO certifications & standards', descriptionAr: 'شهادات ISO والمعايير الدولية', descriptionFr: 'Certifications ISO et normes' },
      { label: 'Innovation', labelAr: 'الابتكار', labelFr: 'Innovation', href: '/about-us#innovation', description: 'R&D and engineering excellence', descriptionAr: 'البحث والتطوير والتميز الهندسي', descriptionFr: 'R&D et excellence en ingénierie' },
      { label: 'Crown Product Galaxy', labelAr: 'مجرة منتجات كراون', labelFr: 'Galaxie des Produits Crown', href: '/about-us#product-galaxy', description: '13 systems · 50+ products', descriptionAr: '١٣ نظام · ٥٠+ منتج', descriptionFr: '13 systèmes · 50+ produits' },
    ],
  },
  {
    label: 'Products',
    labelAr: 'المنتجات',
    href: '/products',
    children: [
      { label: 'UPVC Drainage Pipes', labelAr: 'أنابيب الصرف UPVC', labelFr: 'Tuyaux de Drainage UPVC', href: '/products/upvc-drainage-pipes', description: 'BS 5255 / BS EN 1329 | BS EN 1401' },
      { label: 'UPVC Drainage Fittings', labelAr: 'وصلات الصرف UPVC', labelFr: 'Raccords de Drainage UPVC', href: '/products/upvc-drainage-fittings', description: 'BS EN 1329 | BS EN 1401 | Pushfit' },
      { label: 'PVC High Pressure Pipes', labelAr: 'أنابيب الضغط العالي PVC', labelFr: 'Tuyaux PVC Haute Pression', href: '/products/pvc-high-pressure-pipes', description: 'ISO 4422 | DIN 8061/62 | BS EN ISO 1452 | ASTM' },
      { label: 'PVC High Pressure Fittings', labelAr: 'وصلات الضغط العالي PVC', labelFr: 'Raccords PVC Haute Pression', href: '/products/pvc-high-pressure-fittings', description: 'DIN 8063 | BS EN 1452:3 | Valves' },
      { label: 'PVC SCH 40 Fittings', labelAr: 'وصلات PVC جدول 40', labelFr: 'Raccords PVC SCH 40', href: '/products/pvc-sch-40-fittings', description: 'ASTM D 2466' },
      { label: 'PVC Duct Pipes', labelAr: 'أنابيب مجاري PVC', labelFr: 'Tuyaux de Gaine PVC', href: '/products/pvc-duct-pipes', description: 'NEMA TC | DIN 8062 | Etisalat & DU' },
      { label: 'PVC Duct Fittings', labelAr: 'وصلات مجاري PVC', labelFr: 'Raccords de Gaine PVC', href: '/products/pvc-duct-fittings', description: 'Cable protection fittings' },
      { label: 'PVC Conduit Pipes', labelAr: 'أنابيب القنوات PVC', labelFr: 'Tuyaux Conduit PVC', href: '/products/pvc-conduit-pipes', description: '1250N/750N/320N | SCH 40 | SCH 80' },
      { label: 'PP-R Pipes', labelAr: 'أنابيب PP-R', labelFr: 'Tuyaux PP-R', href: '/products/ppr-pipes', description: 'PN10 | PN16 | PN20 | PN25' },
      { label: 'HDPE Pipes', labelAr: 'أنابيب HDPE', labelFr: 'Tuyaux HDPE', href: '/products/hdpe-pipes', description: 'PE63 | PE80 | PE100 | DIN 8072' },
      { label: 'PEX Pipes', labelAr: 'أنابيب PEX', labelFr: 'Tuyaux PEX', href: '/products/pex-pipes', description: 'PN 12.5 & PN 20' },
      { label: 'Fabrications & Accessories', labelAr: 'التصنيعات والإكسسوارات', labelFr: 'Fabrications et Accessoires', href: '/products/fabrications-accessories', description: 'Grease Traps | Custom Fabrications' },
      { label: 'Solvents', labelAr: 'المذيبات', labelFr: 'Colles et Solvants', href: '/products/solvents', description: 'PVC solvent cements' },
    ],
  },
  {
    label: 'Sustainability',
    labelAr: 'الاستدامة',
    href: '/sustainability',
  },
  {
    label: 'Innovation',
    labelAr: 'الابتكار', labelFr: 'Innovation', href: '/innovation',
  },
  {
    label: 'Media & Blogs',
    labelAr: 'الإعلام والمدونات',
    href: '/media-blogs',
  },
  {
    label: 'Markets',
    labelAr: 'الأسواق',
    href: '/market',
    children: [
      { label: 'All Markets', labelAr: 'جميع الأسواق', labelFr: 'Tous les Marchés', href: '/market' },
      { label: 'Saudi Arabia', labelAr: 'السعودية', labelFr: 'Arabie Saoudite', href: '/market/saudi-arabia/overview' },
      { label: 'Riyadh', labelAr: 'الرياض', labelFr: 'Riyad', href: '/market/saudi-arabia/riyadh' },
      { label: 'Jeddah', labelAr: 'جدة', labelFr: 'Djeddah', href: '/market/saudi-arabia/jeddah' },
      { label: 'Dubai', labelAr: 'دبي', labelFr: 'Dubaï', href: '/market/uae/dubai' },
      { label: 'Abu Dhabi', labelAr: 'أبوظبي', labelFr: 'Abou Dabi', href: '/market/uae/abu-dhabi' },
      { label: 'Sharjah', labelAr: 'الشارقة', labelFr: 'Charjah', href: '/market/uae/sharjah' },
      { label: 'Ajman', labelAr: 'عجمان', labelFr: 'Ajman', href: '/market/uae/ajman' },
      { label: 'Umm Al Quwain', labelAr: 'أم القيوين', labelFr: 'Oumm al Qaïwaïn', href: '/market/uae/umm-al-quwain' },
      { label: 'Ras Al Khaimah', labelAr: 'رأس الخيمة', labelFr: 'Ras el Khaïmah', href: '/market/uae/ras-al-khaimah' },
      { label: 'Fujairah', labelAr: 'الفجيرة', labelFr: 'Fujaïrah', href: '/market/uae/fujairah' },
      { label: 'Kuwait City', labelAr: 'مدينة الكويت', labelFr: 'Koweït', href: '/market/kuwait/kuwait-city' },
      { label: 'Doha', labelAr: 'الدوحة', labelFr: 'Doha', href: '/market/qatar/doha' },
      { label: 'Manama', labelAr: 'المنامة', labelFr: 'Manama', href: '/market/bahrain/manama' },
      { label: 'Muscat', labelAr: 'مسقط', labelFr: 'Mascate', href: '/market/oman/muscat' },
    ],
  },
  {
    label: 'Resources',
    labelAr: 'الموارد',
    href: '/resources',
    children: [
      { label: 'Downloads & Catalogues', labelAr: 'التحميلات والكتيبات', labelFr: 'Téléchargements et Catalogues', href: '/resources' },
      { label: 'Technical FAQs', labelAr: 'الأسئلة الشائعة التقنية', labelFr: 'FAQ Techniques', href: '/support/faqs' },
      { label: 'BS EN 1452 Guide', labelAr: 'دليل BS EN 1452', labelFr: 'Guide BS EN 1452', href: '/technical/bs-en-1452-complete-guide' },
      { label: 'Pipe Comparison Guide', labelAr: 'دليل مقارنة الأنابيب', labelFr: 'Guide Comparatif des Tuyaux', href: '/technical/upvc-vs-pvc-vs-ppr-comparison' },
      { label: 'Installation Guide', labelAr: 'دليل التركيب', labelFr: 'Guide d\'Installation', href: '/technical/upvc-installation-best-practices' },
      { label: 'Quality & ISO Certifications', labelAr: 'الجودة وشهادات ISO', labelFr: 'Qualité et Certifications ISO', href: '/technical/certifications-compliance-guide' },
      { label: 'Pipe Sizing Calculator', labelAr: 'حاسبة حجم الأنابيب', labelFr: 'Calculateur de Diamètre de Tuyaux', href: '/technical/upvc-pipe-sizing-calculator-guide' },
    ],
  },
  {
    label: 'Contact',
    labelAr: 'اتصل بنا',
    href: '/contact-us',
  },
];

// Footer columns configuration
export const footerColumns: FooterColumn[] = [
  {
    title: 'About Crown',
    titleAr: 'عن كراون',
    titleFr: 'À Propos de Crown',
    links: [
      { label: 'About Us', labelAr: 'من نحن', labelFr: 'À Propos', href: '/about-us' },
      { label: 'Sustainability', labelAr: 'الاستدامة', labelFr: 'Durabilité', href: '/sustainability' },
      { label: 'Innovation', labelAr: 'الابتكار', labelFr: 'Innovation', href: '/innovation' },
      { label: 'Quality & Certifications', labelAr: 'الجودة والشهادات', labelFr: 'Qualité et Certifications', href: '/about-us#quality' },
    ],
  },
  {
    title: 'Products',
    titleAr: 'المنتجات',
    titleFr: 'Produits',
    links: [
      { label: 'UPVC Drainage Pipes', labelAr: 'أنابيب الصرف UPVC', labelFr: 'Tuyaux de Drainage UPVC', href: '/products/upvc-drainage-pipes' },
      { label: 'UPVC Drainage Fittings', labelAr: 'وصلات الصرف UPVC', labelFr: 'Raccords de Drainage UPVC', href: '/products/upvc-drainage-fittings' },
      { label: 'PVC High Pressure Pipes', labelAr: 'أنابيب الضغط العالي PVC', labelFr: 'Tuyaux PVC Haute Pression', href: '/products/pvc-high-pressure-pipes' },
      { label: 'PVC High Pressure Fittings', labelAr: 'وصلات الضغط العالي PVC', labelFr: 'Raccords PVC Haute Pression', href: '/products/pvc-high-pressure-fittings' },
      { label: 'PVC SCH 40 Fittings', labelAr: 'وصلات PVC جدول 40', labelFr: 'Raccords PVC SCH 40', href: '/products/pvc-sch-40-fittings' },
      { label: 'PVC Duct Pipes', labelAr: 'أنابيب مجاري PVC', labelFr: 'Tuyaux de Gaine PVC', href: '/products/pvc-duct-pipes' },
      { label: 'PVC Duct Fittings', labelAr: 'وصلات مجاري PVC', labelFr: 'Raccords de Gaine PVC', href: '/products/pvc-duct-fittings' },
      { label: 'PVC Conduit Pipes', labelAr: 'أنابيب القنوات PVC', labelFr: 'Tuyaux Conduit PVC', href: '/products/pvc-conduit-pipes' },
      { label: 'PP-R Pipes', labelAr: 'أنابيب PP-R', labelFr: 'Tuyaux PP-R', href: '/products/ppr-pipes' },
      { label: 'HDPE Pipes', labelAr: 'أنابيب HDPE', labelFr: 'Tuyaux HDPE', href: '/products/hdpe-pipes' },
      { label: 'PEX Pipes', labelAr: 'أنابيب PEX', labelFr: 'Tuyaux PEX', href: '/products/pex-pipes' },
      { label: 'Fabrications & Accessories', labelAr: 'التصنيعات والإكسسوارات', labelFr: 'Fabrications et Accessoires', href: '/products/fabrications-accessories' },
      { label: 'Solvents', labelAr: 'المذيبات', labelFr: 'Colles et Solvants', href: '/products/solvents' },
    ],
  },
  {
    title: 'Corporate',
    titleAr: 'الشركة',
    titleFr: 'Entreprise',
    links: [
      { label: 'Media & Blogs', labelAr: 'الإعلام والمدونات', labelFr: 'Médias et Blogs', href: '/media-blogs' },
      { label: 'Resources', labelAr: 'الموارد', labelFr: 'Ressources', href: '/resources' },
      { label: 'Careers', labelAr: 'الوظائف', labelFr: 'Carrières', href: '/join-us' },
    ],
  },
  {
    title: 'Support',
    titleAr: 'الدعم',
    titleFr: 'Assistance',
    links: [
      { label: 'Contact Us', labelAr: 'اتصل بنا', labelFr: 'Contactez-nous', href: '/contact-us' },
      { label: 'Technical FAQs', labelAr: 'الأسئلة الشائعة', labelFr: 'FAQ Techniques', href: '/support/faqs' },
      { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', labelFr: 'Politique de Confidentialité', href: '/privacy-policy' },
      { label: 'Sitemap', labelAr: 'خريطة الموقع', labelFr: 'Plan du Site', href: '/sitemap' },
    ],
  },
  {
    title: 'Technical Guides',
    titleAr: 'الأدلة التقنية',
    titleFr: 'Guides Techniques',
    links: [
      { label: 'BS EN 1452 Guide', labelAr: 'دليل BS EN 1452', labelFr: 'Guide BS EN 1452', href: '/technical/bs-en-1452-complete-guide' },
      { label: 'Pipe Comparison', labelAr: 'مقارنة الأنابيب', labelFr: 'Comparatif Tuyaux', href: '/technical/upvc-vs-pvc-vs-ppr-comparison' },
      { label: 'Installation Guide', labelAr: 'دليل التركيب', labelFr: 'Guide d\'Installation', href: '/technical/upvc-installation-best-practices' },
      { label: 'Quality & ISO Certifications', labelAr: 'الجودة وشهادات ISO', labelFr: 'Qualité et Certifications ISO', href: '/technical/certifications-compliance-guide' },
      { label: 'Pipe Sizing Guide', labelAr: 'دليل حجم الأنابيب', labelFr: 'Guide Dimensionnement', href: '/technical/upvc-pipe-sizing-calculator-guide' },
    ],
  },
  {
    title: 'Service Areas',
    titleAr: 'مناطق الخدمة',
    titleFr: 'Zones de Service',
    links: [
      { label: 'UPVC Pipes Dubai', labelAr: 'أنابيب UPVC دبي', labelFr: 'Tuyaux UPVC Dubaï', href: '/upvc-pipes-dubai' },
      { label: 'UPVC Pipes Abu Dhabi', labelAr: 'أنابيب UPVC أبوظبي', labelFr: 'Tuyaux UPVC Abou Dabi', href: '/upvc-pipes-abu-dhabi' },
      { label: 'UPVC Pipes Sharjah', labelAr: 'أنابيب UPVC الشارقة', labelFr: 'Tuyaux UPVC Charjah', href: '/upvc-pipes-sharjah' },
      { label: 'UPVC Pipes Saudi Arabia', labelAr: 'أنابيب UPVC السعودية', labelFr: 'Tuyaux UPVC Arabie Saoudite', href: '/upvc-pipes-saudi-arabia' },
      { label: 'UPVC Pipes Kuwait', labelAr: 'أنابيب UPVC الكويت', labelFr: 'Tuyaux UPVC Koweït', href: '/upvc-pipes-kuwait' },
      { label: 'UPVC Pipes Qatar', labelAr: 'أنابيب UPVC قطر', labelFr: 'Tuyaux UPVC Qatar', href: '/upvc-pipes-qatar' },
    ],
  },
];

// All public routes for sitemap generation
export const allRoutes = [
  // Core pages
  { path: '/', label: 'Home', description: 'Crown Plastic Pipes - Leading manufacturer' },
  { path: '/about-us', label: 'About Us', description: 'Learn about Crown Plastic Pipes' },
  { path: '/sustainability', label: 'Sustainability', description: 'Our commitment to sustainable practices' },
  { path: '/innovation', label: 'Innovation', description: 'Innovation and R&D at Crown' },
  { path: '/media-blogs', label: 'Media & Blogs', description: 'Latest media content, expert blogs, and company insights' },
  { path: '/resources', label: 'Resources', description: 'Catalogues, technical documents, and guides' },
  { path: '/contact-us', label: 'Contact Us', description: 'Get in touch with Crown Plastic Pipes' },
  { path: '/join-us', label: 'Join Us', description: 'Career opportunities at Crown Plastic Pipes' },
  { path: '/privacy-policy', label: 'Privacy Policy', description: 'Our privacy policy' },
  { path: '/sitemap', label: 'Sitemap', description: 'Website sitemap' },

  // Products - Hub
  { path: '/products', label: 'Products', description: 'Complete range of plastic pipes and fittings' },

  // 1) UPVC Drainage Pipes
  { path: '/products/upvc-drainage-pipes', label: 'UPVC Drainage Pipes', description: 'BS 5255 / BS EN 1329-1:2014 | BS EN 1401-1 drainage pipe systems' },
  { path: '/products/upvc-drainage-pipes/upvc-drainage-pipes-bs5255-bs-en-1329', label: 'UPVC Drainage Pipes BS 5255/BS EN 1329', description: 'Above-ground drainage pipes' },
  { path: '/products/upvc-drainage-pipes/upvc-drainage-pipes-bs-en-1401', label: 'UPVC Drainage Pipes BS EN 1401', description: 'Underground drainage pipes' },
  { path: '/products/upvc-drainage-pipes/upvc-drainage-pipes-non-standard', label: 'UPVC Drainage Non-Standard Pipes', description: 'Non-standard drainage pipes' },

  // 2) UPVC Drainage Fittings
  { path: '/products/upvc-drainage-fittings', label: 'UPVC Drainage Fittings', description: 'BS EN 1329 | BS EN 1401 | Pushfit drainage fittings' },
  { path: '/products/upvc-drainage-fittings/upvc-drainage-fittings-bs-en-1329', label: 'UPVC Drainage Fittings BS EN 1329', description: 'Above-ground drainage fittings' },
  { path: '/products/upvc-drainage-fittings/upvc-drainage-fittings-bs-en-1401', label: 'UPVC Drainage Fittings BS EN 1401', description: 'Underground drainage fittings' },
  { path: '/products/upvc-drainage-fittings/upvc-drainage-fittings-pushfit', label: 'UPVC Drainage Pushfit Fittings', description: 'Push-fit drainage fittings' },

  // 3) PVC High Pressure Pipes
  { path: '/products/pvc-high-pressure-pipes', label: 'PVC High Pressure Pipes', description: 'ISO 4422-2 | DIN 8061/62 | BS EN ISO 1452-2 | BS 3505 | ASTM' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-iso-4422', label: 'PVC HP Pipes ISO 4422-2', description: 'ISO 4422-2:1996 pressure pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-din-8061-62', label: 'PVC HP Pipes DIN 8061/62', description: 'DIN 8061/62 pressure pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-bs-en-iso-1452-2', label: 'PVC HP Pipes BS EN ISO 1452-2', description: 'BS EN ISO 1452-2 pressure pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-bs-3505', label: 'PVC HP Pipes BS 3505', description: 'BS 3505:1986 cold potable water pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-bs-3506', label: 'PVC HP Pipes BS 3506', description: 'BS 3506:1969 industrial pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-astm-d1785', label: 'PVC HP Pipes ASTM D 1785', description: 'ASTM D 1785 SCH40/SCH80 pipes' },
  { path: '/products/pvc-high-pressure-pipes/pvc-hp-pipes-astm-d2241', label: 'PVC HP Pipes ASTM D 2241', description: 'ASTM D 2241 pipes' },

  // 4) PVC High Pressure Fittings
  { path: '/products/pvc-high-pressure-fittings', label: 'PVC High Pressure Fittings', description: 'DIN 8063 | BS EN 1452:3/BS 4346 | Valves' },
  { path: '/products/pvc-high-pressure-fittings/pvc-hp-fittings-din-8063', label: 'PVC HP Fittings DIN 8063', description: 'DIN 8063 fittings' },
  { path: '/products/pvc-high-pressure-fittings/pvc-hp-fittings-bs-en-1452-3', label: 'PVC HP Fittings BS EN 1452:3', description: 'BS EN 1452:3/BS 4346 fittings' },
  { path: '/products/pvc-high-pressure-fittings/pvc-hp-fittings-valves', label: 'PVC HP Valves', description: 'PVC high pressure valves' },

  // 5) PVC SCH 40 Fittings
  { path: '/products/pvc-sch-40-fittings', label: 'PVC SCH 40 Fittings', description: 'ASTM D 2466 Schedule 40 fittings' },
  { path: '/products/pvc-sch-40-fittings/pvc-sch-40-fittings-astm-d2466', label: 'PVC SCH 40 Fittings ASTM D 2466', description: 'ASTM D 2466 SCH 40 fittings' },

  // 6) PVC Duct Pipes
  { path: '/products/pvc-duct-pipes', label: 'PVC Duct Pipes', description: 'NEMA TC | DIN 8062 | Etisalat & DU cable ducting' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-nema-tc-2', label: 'PVC Duct Pipes NEMA TC 2', description: 'NEMA TC 2:2003 duct pipes' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-nema-tc-6-8', label: 'PVC Duct Pipes NEMA TC 6 & 8', description: 'NEMA TC 6 & 8/ASTM F 512 duct pipes' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-din-8062', label: 'PVC Duct Pipes DIN 8062', description: 'DIN 8062 duct pipes' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-etisalat-du', label: 'PVC Duct Pipes Etisalat & DU', description: 'Etisalat & DU approved duct pipes' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-bs-3505-06', label: 'PVC Duct Pipes BS 3505/06', description: 'BS 3505/06 duct pipes' },
  { path: '/products/pvc-duct-pipes/pvc-duct-pipes-non-standard', label: 'PVC Duct Non-Standard Pipes', description: 'Non-standard duct pipes' },

  // 7) PVC Duct Fittings
  { path: '/products/pvc-duct-fittings', label: 'PVC Duct Fittings', description: 'Duct fittings for cable protection' },
  { path: '/products/pvc-duct-fittings/pvc-duct-fittings-standard', label: 'PVC Duct Fittings', description: 'PVC Duct fittings' },

  // 8) PVC Conduit Pipes
  { path: '/products/pvc-conduit-pipes', label: 'PVC Conduit Pipes', description: '1250N/750N/320N | SCH 40 | SCH 80 conduit' },
  { path: '/products/pvc-conduit-pipes/pvc-conduit-pipes-compression-force', label: 'PVC Conduit 1250N/750N/320N', description: 'Compression force rated conduit' },
  { path: '/products/pvc-conduit-pipes/pvc-conduit-pipes-sch-40', label: 'PVC Conduit SCH 40', description: 'Schedule 40 conduit pipes' },
  { path: '/products/pvc-conduit-pipes/pvc-conduit-pipes-sch-80', label: 'PVC Conduit SCH 80', description: 'Schedule 80 conduit pipes' },

  // 9) PP-R Pipes
  { path: '/products/ppr-pipes', label: 'PP-R Pipes', description: 'PN10 | PN16 | PN20 | PN25 hot & cold water systems' },
  { path: '/products/ppr-pipes/ppr-pipes-sdr11-pn10', label: 'PP-R Pipes SDR11/PN10', description: 'SDR11/PN10 DIN 8077/78' },
  { path: '/products/ppr-pipes/ppr-pipes-sdr7-4-pn16', label: 'PP-R Pipes SDR7.4/PN16', description: 'SDR7.4/PN16 DIN 8077/78' },
  { path: '/products/ppr-pipes/ppr-pipes-sdr6-pn20', label: 'PP-R Pipes SDR6/PN20', description: 'SDR6/PN20 DIN 8077/78' },
  { path: '/products/ppr-pipes/ppr-pipes-sdr5-pn25', label: 'PP-R Pipes SDR5/PN25', description: 'SDR5/PN25 DIN 8077/78' },

  // 10) HDPE Pipes
  { path: '/products/hdpe-pipes', label: 'HDPE Pipes', description: 'PE63 | PE80 | PE100 | DIN 8072 polyethylene systems' },
  { path: '/products/hdpe-pipes/hdpe-pipes-5mpa-pe63', label: 'HDPE Pipes 5 MPa (PE63)', description: 'PE63 grade HDPE pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-6-3mpa-pe80', label: 'HDPE Pipes 6.3 MPa (PE80)', description: 'PE80 grade HDPE pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-8mpa-pe100', label: 'HDPE Pipes 8 MPa (PE100)', description: 'PE100 grade HDPE pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-din-8072', label: 'HDPE Pipes DIN 8072', description: 'DIN 8072 HDPE pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-asae-s435', label: 'HDPE Pipes ASAE S435', description: 'ASAE S435 agricultural pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-aust-std-2698', label: 'HDPE Pipes AUST STD 2698-1', description: 'Australian standard HDPE pipes' },
  { path: '/products/hdpe-pipes/hdpe-pipes-bs-1972-67', label: 'HDPE Pipes BS 1972/67', description: 'BS 1972/67 HDPE pipes' },
  { path: '/products/hdpe-pipes/polyethylene-pipe-rolls', label: 'Polyethylene Pipe Rolls', description: 'Polyethylene pipe rolls for irrigation' },

  // 11) PEX Pipes
  { path: '/products/pex-pipes', label: 'PEX Pipes', description: 'PN 12.5 & PN 20 cross-linked polyethylene' },
  { path: '/products/pex-pipes/pex-pipes-pn-12-5-pn-20', label: 'PEX Pipes PN 12.5 & PN 20', description: 'PEX pipes PN 12.5 & PN 20' },

  // 12) Fabrications & Accessories
  { path: '/products/fabrications-accessories', label: 'Fabrications & Accessories', description: 'Grease Traps | Custom Fabrications' },
  { path: '/products/fabrications-accessories/fabrication-grease-trap-type-a', label: 'Grease Trap Type A', description: 'Single bucket grease trap' },
  { path: '/products/fabrications-accessories/fabrication-grease-trap-type-b', label: 'Grease Trap Type B', description: 'Dual bucket grease trap' },
  { path: '/products/fabrications-accessories/fabrication-grease-trap-type-c', label: 'Grease Trap Type C', description: 'Large baffle grease trap' },
  { path: '/products/fabrications-accessories/fabrication-grease-trap-type-d', label: 'Grease Trap Type D', description: 'Compact grease trap' },
  { path: '/products/fabrications-accessories/fabrication-accessories', label: 'Fabrication Accessories', description: 'Custom fabrication accessories' },

  // 13) Solvents
  { path: '/products/solvents', label: 'Solvents', description: 'PVC solvent cements' },
  { path: '/products/solvents/pvc-solvents', label: 'PVC Solvents', description: 'PVC solvent cements for pipe joints' },

  // Service Area Pages (LocalBusiness Schema)
  { path: '/upvc-pipes-dubai', label: 'UPVC Pipes Dubai', description: 'UPVC pipe supplier in Dubai' },
  { path: '/upvc-pipes-abu-dhabi', label: 'UPVC Pipes Abu Dhabi', description: 'UPVC pipe supplier in Abu Dhabi' },
  { path: '/upvc-pipes-sharjah', label: 'UPVC Pipes Sharjah', description: 'UPVC pipe manufacturer in Sharjah' },
  { path: '/upvc-pipes-saudi-arabia', label: 'UPVC Pipes Saudi Arabia', description: 'UPVC pipe exporter to Saudi Arabia' },
  { path: '/upvc-pipes-kuwait', label: 'UPVC Pipes Kuwait', description: 'UPVC pipe supplier to Kuwait' },
  { path: '/upvc-pipes-qatar', label: 'UPVC Pipes Qatar', description: 'UPVC pipe supplier to Qatar' },

  // Technical Guide Pages
  { path: '/support/faqs', label: 'FAQs', description: 'Frequently Asked Questions about UPVC, PVC, PPR pipes' },
  { path: '/technical/bs-en-1452-complete-guide', label: 'BS EN 1452 Guide', description: 'Complete guide to BS EN 1452 UPVC pipe standard' },
  { path: '/technical/upvc-vs-pvc-vs-ppr-comparison', label: 'UPVC vs PVC vs PPR', description: 'Comprehensive comparison of plastic pipe materials' },
  { path: '/technical/upvc-installation-best-practices', label: 'Installation Guide', description: 'Step-by-step UPVC pipe installation best practices' },
  { path: '/technical/certifications-compliance-guide', label: 'Quality & ISO Certifications', description: 'International standards and ISO certifications compliance guide' },
  { path: '/technical/upvc-pipe-sizing-calculator-guide', label: 'Pipe Sizing Guide', description: 'UPVC pipe sizing formulas and calculator' },
];
