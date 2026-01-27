// Navigation and routes configuration for Crown Plastic Pipes
// Bilingual structure - English labels with Arabic translations

export interface NavItem {
  label: string;
  labelAr?: string;
  href: string;
  children?: NavItem[];
  description?: string;
  descriptionAr?: string;
}

export interface FooterColumn {
  title: string;
  titleAr?: string;
  links: { label: string; labelAr?: string; href: string }[];
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
      { label: 'Company Overview', labelAr: 'نظرة عامة على الشركة', href: '/about-us#company-overview' },
      { label: 'Mission & Vision', labelAr: 'المهمة والرؤية', href: '/about-us#mission-vision' },
      { label: 'Manufacturing', labelAr: 'التصنيع', href: '/about-us#manufacturing' },
      { label: 'Quality & Certifications', labelAr: 'الجودة والشهادات', href: '/about-us#quality' },
      { label: 'Our Journey', labelAr: 'مسيرتنا', href: '/about-us#timeline' },
    ],
  },
  {
    label: 'Products',
    labelAr: 'المنتجات',
    href: '/products',
    children: [
      { label: 'PVC Pressure Pipes & Fittings', labelAr: 'أنابيب وتوصيلات الضغط PVC', href: '/products/upvc-pressure', description: 'DIN 8063, BS EN 1452, ASTM D2466', descriptionAr: 'أنظمة أنابيب الضغط عالية الجودة' },
      { label: 'UPVC Drainage Pipes & Fittings', labelAr: 'أنابيب وتوصيلات الصرف UPVC', href: '/products/upvc-drainage', description: 'BS EN 1329, BS EN 1401', descriptionAr: 'حلول صرف متكاملة' },
      { label: 'UPVC Conduit Pipes', labelAr: 'أنابيب القنوات UPVC', href: '/products/pvc-conduit', description: 'SCH 40 & SCH 80', descriptionAr: 'حلول القنوات الكهربائية' },
      { label: 'PPR Pipes', labelAr: 'أنابيب PPR', href: '/products/ppr', description: 'PN10, PN16, PN20', descriptionAr: 'أنظمة المياه الساخنة والباردة' },
      { label: 'UPVC Duct Pipes & Accessories', labelAr: 'أنابيب وملحقات قنوات UPVC', href: '/products/upvc-duct', description: 'Black Pipes / Fittings', descriptionAr: 'أنظمة قنوات الكابلات' },
      { label: 'HDPE Pipe Systems', labelAr: 'أنظمة أنابيب HDPE', href: '/products/polyethylene', description: 'Polyethylene solutions', descriptionAr: 'حلول البولي إيثيلين' },
    ],
  },
  {
    label: 'Sustainability',
    labelAr: 'الاستدامة',
    href: '/sustainability',
  },
  {
    label: 'Innovation',
    labelAr: 'الابتكار',
    href: '/innovation',
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
      { label: 'All Markets', labelAr: 'جميع الأسواق', href: '/market' },
      { label: 'Saudi Arabia - SASO Certified', labelAr: 'السعودية - معتمد ساسو', href: '/market/saudi-arabia/upvc-pipes-saso-certified' },
      { label: 'Riyadh Distributor', labelAr: 'موزع الرياض', href: '/market/saudi-arabia/riyadh-upvc-distributor' },
      { label: 'Jeddah Wholesale', labelAr: 'جملة جدة', href: '/market/saudi-arabia/jeddah-upvc-wholesale' },
      { label: 'Dubai Commercial', labelAr: 'دبي التجارية', href: '/market/uae/upvc-pipes-dubai-commercial' },
      { label: 'Abu Dhabi Government', labelAr: 'حكومة أبوظبي', href: '/market/uae/upvc-pipes-abu-dhabi-government' },
      { label: 'Kuwait', labelAr: 'الكويت', href: '/market/kuwait/upvc-pipes-supplier' },
      { label: 'Qatar', labelAr: 'قطر', href: '/market/qatar/upvc-pipes-doha' },
    ],
  },
  {
    label: 'Resources',
    labelAr: 'الموارد',
    href: '/resources',
    children: [
      { label: 'Downloads & Catalogues', labelAr: 'التحميلات والكتيبات', href: '/resources' },
      { label: 'Technical FAQs', labelAr: 'الأسئلة الشائعة التقنية', href: '/support/faqs' },
      { label: 'BS EN 1452 Guide', labelAr: 'دليل BS EN 1452', href: '/technical/bs-en-1452-complete-guide' },
      { label: 'Pipe Comparison Guide', labelAr: 'دليل مقارنة الأنابيب', href: '/technical/upvc-vs-pvc-vs-ppr-comparison' },
      { label: 'Installation Guide', labelAr: 'دليل التركيب', href: '/technical/upvc-installation-best-practices' },
      { label: 'GSO/SASO Compliance', labelAr: 'الامتثال GSO/SASO', href: '/technical/gso-saso-compliance-guide' },
      { label: 'Pipe Sizing Calculator', labelAr: 'حاسبة حجم الأنابيب', href: '/technical/upvc-pipe-sizing-calculator-guide' },
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
    links: [
      { label: 'About Us', labelAr: 'من نحن', href: '/about-us' },
      { label: 'Sustainability', labelAr: 'الاستدامة', href: '/sustainability' },
      { label: 'Innovation', labelAr: 'الابتكار', href: '/innovation' },
      { label: 'Quality & Certifications', labelAr: 'الجودة والشهادات', href: '/about-us#quality' },
    ],
  },
  {
    title: 'Products',
    titleAr: 'المنتجات',
    links: [
      { label: 'PVC Pressure', labelAr: 'ضغط PVC', href: '/products/upvc-pressure' },
      { label: 'UPVC Drainage', labelAr: 'صرف UPVC', href: '/products/upvc-drainage' },
      { label: 'UPVC Conduit', labelAr: 'قنوات UPVC', href: '/products/pvc-conduit' },
      { label: 'PPR Pipes', labelAr: 'أنابيب PPR', href: '/products/ppr' },
      { label: 'UPVC Duct', labelAr: 'قنوات UPVC', href: '/products/upvc-duct' },
      { label: 'HDPE Systems', labelAr: 'أنظمة HDPE', href: '/products/polyethylene' },
    ],
  },
  {
    title: 'Corporate',
    titleAr: 'الشركة',
    links: [
      { label: 'Media & Blogs', labelAr: 'الإعلام والمدونات', href: '/media-blogs' },
      { label: 'Resources', labelAr: 'الموارد', href: '/resources' },
      { label: 'Careers', labelAr: 'الوظائف', href: '/contact-us#careers' },
    ],
  },
  {
    title: 'Support',
    titleAr: 'الدعم',
    links: [
      { label: 'Contact Us', labelAr: 'اتصل بنا', href: '/contact-us' },
      { label: 'Technical FAQs', labelAr: 'الأسئلة الشائعة', href: '/support/faqs' },
      { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'Sitemap', labelAr: 'خريطة الموقع', href: '/sitemap' },
    ],
  },
  {
    title: 'Technical Guides',
    titleAr: 'الأدلة التقنية',
    links: [
      { label: 'BS EN 1452 Guide', labelAr: 'دليل BS EN 1452', href: '/technical/bs-en-1452-complete-guide' },
      { label: 'Pipe Comparison', labelAr: 'مقارنة الأنابيب', href: '/technical/upvc-vs-pvc-vs-ppr-comparison' },
      { label: 'Installation Guide', labelAr: 'دليل التركيب', href: '/technical/upvc-installation-best-practices' },
      { label: 'GSO/SASO Compliance', labelAr: 'امتثال GSO/SASO', href: '/technical/gso-saso-compliance-guide' },
      { label: 'Pipe Sizing Guide', labelAr: 'دليل حجم الأنابيب', href: '/technical/upvc-pipe-sizing-calculator-guide' },
    ],
  },
  {
    title: 'Service Areas',
    titleAr: 'مناطق الخدمة',
    links: [
      { label: 'UPVC Pipes Dubai', labelAr: 'أنابيب UPVC دبي', href: '/upvc-pipes-dubai' },
      { label: 'UPVC Pipes Abu Dhabi', labelAr: 'أنابيب UPVC أبوظبي', href: '/upvc-pipes-abu-dhabi' },
      { label: 'UPVC Pipes Sharjah', labelAr: 'أنابيب UPVC الشارقة', href: '/upvc-pipes-sharjah' },
      { label: 'UPVC Pipes Saudi Arabia', labelAr: 'أنابيب UPVC السعودية', href: '/upvc-pipes-saudi-arabia' },
      { label: 'UPVC Pipes Kuwait', labelAr: 'أنابيب UPVC الكويت', href: '/upvc-pipes-kuwait' },
      { label: 'UPVC Pipes Qatar', labelAr: 'أنابيب UPVC قطر', href: '/upvc-pipes-qatar' },
    ],
  },
];

// All public routes for sitemap generation
export const allRoutes = [
  { path: '/', label: 'Home', description: 'Crown Plastic Pipes - Leading manufacturer' },
  { path: '/about-us', label: 'About Us', description: 'Learn about Crown Plastic Pipes' },
  { path: '/sustainability', label: 'Sustainability', description: 'Our commitment to sustainable practices' },
  { path: '/innovation', label: 'Innovation', description: 'Innovation and R&D at Crown' },
  { path: '/media-blogs', label: 'Media & Blogs', description: 'Latest media content, expert blogs, and company insights' },
  { path: '/resources', label: 'Resources', description: 'Catalogues, technical documents, and guides' },
  { path: '/contact-us', label: 'Contact Us', description: 'Get in touch with Crown Plastic Pipes' },
  { path: '/privacy-policy', label: 'Privacy Policy', description: 'Our privacy policy' },
  { path: '/sitemap', label: 'Sitemap', description: 'Website sitemap' },
  // Products - Categories
  { path: '/products', label: 'Products', description: 'Complete range of plastic pipes and fittings' },
  // PVC Pressure Pipes & Fittings
  { path: '/products/upvc-pressure', label: 'PVC Pressure Pipes & Fittings', description: 'DIN 8063, BS EN 1452, ASTM D2466 standards' },
  { path: '/products/upvc-pressure/pvc-pressure-din-8063', label: 'PVC Pressure DIN 8063', description: 'DIN 8063 pressure pipes & fittings' },
  { path: '/products/upvc-pressure/pvc-pressure-bs-en-1452', label: 'PVC Pressure BS EN 1452', description: 'BS EN 1452:23 / BS 4346 PN15' },
  { path: '/products/upvc-pressure/pvc-pressure-astm-d2466', label: 'PVC Pressure ASTM D2466', description: 'ASTM D 2466 SCH-40 standard' },
  // UPVC Drainage Pipes & Fittings
  { path: '/products/upvc-drainage', label: 'UPVC Drainage Pipes & Fittings', description: 'BS EN 1329, BS EN 1401 standards' },
  { path: '/products/upvc-drainage/upvc-drainage-bs-en-1329', label: 'UPVC Drainage BS EN 1329', description: 'BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4515)' },
  { path: '/products/upvc-drainage/upvc-drainage-bs-en-1401', label: 'UPVC Drainage BS EN 1401', description: 'BS EN 1401 (Supersedes BS 4660 & BS 5481)' },
  // UPVC Conduit Pipes
  { path: '/products/pvc-conduit', label: 'UPVC Conduit Pipes', description: 'SCH 40 & SCH 80 electrical conduit' },
  { path: '/products/pvc-conduit/upvc-conduit-sch-40', label: 'UPVC Conduit SCH 40', description: 'Schedule 40 conduit pipes' },
  { path: '/products/pvc-conduit/upvc-conduit-sch-80', label: 'UPVC Conduit SCH 80', description: 'Schedule 80 heavy duty conduit' },
  // PPR Pipes
  { path: '/products/ppr', label: 'PPR Pipes', description: 'Hot & cold water systems PN10/16/20' },
  { path: '/products/ppr/ppr-sdr11-pn10', label: 'PPR SDR11 PN10', description: 'SDR11 / PN 10 pressure rating' },
  { path: '/products/ppr/ppr-sdr7-4-pn16', label: 'PPR SDR7.4 PN16', description: 'SDR7.4 / PN 16 pressure rating' },
  { path: '/products/ppr/ppr-sdr6-pn20', label: 'PPR SDR6 PN20', description: 'SDR6 / PN 20 pressure rating' },
  // UPVC Duct Pipes & Accessories
  { path: '/products/upvc-duct', label: 'UPVC Duct Pipes & Accessories', description: 'Cable ducting systems' },
  { path: '/products/upvc-duct/upvc-duct-black', label: 'UPVC Duct Black Pipes', description: 'Black Pipes / Fittings' },
  // HDPE Pipe Systems (category only - no subProducts)
  { path: '/products/polyethylene', label: 'HDPE Pipe Systems', description: 'Polyethylene pipe solutions' },
  // Service Area Pages (LocalBusiness Schema)
  { path: '/upvc-pipes-dubai', label: 'UPVC Pipes Dubai', description: 'UPVC pipe supplier in Dubai' },
  { path: '/upvc-pipes-abu-dhabi', label: 'UPVC Pipes Abu Dhabi', description: 'UPVC pipe supplier in Abu Dhabi' },
  { path: '/upvc-pipes-sharjah', label: 'UPVC Pipes Sharjah', description: 'UPVC pipe manufacturer in Sharjah' },
  { path: '/upvc-pipes-saudi-arabia', label: 'UPVC Pipes Saudi Arabia', description: 'UPVC pipe exporter to Saudi Arabia' },
  { path: '/upvc-pipes-kuwait', label: 'UPVC Pipes Kuwait', description: 'UPVC pipe supplier to Kuwait' },
  { path: '/upvc-pipes-qatar', label: 'UPVC Pipes Qatar', description: 'UPVC pipe supplier to Qatar' },
  // Phase 2 AEO: Support & FAQ Pages
  { path: '/support/faqs', label: 'FAQs', description: 'Frequently Asked Questions about UPVC, PVC, PPR pipes' },
  // Phase 2 AEO: Technical Guide Pages (Featured Snippet Optimization)
  { path: '/technical/bs-en-1452-complete-guide', label: 'BS EN 1452 Guide', description: 'Complete guide to BS EN 1452 UPVC pipe standard' },
  { path: '/technical/upvc-vs-pvc-vs-ppr-comparison', label: 'UPVC vs PVC vs PPR', description: 'Comprehensive comparison of plastic pipe materials' },
  { path: '/technical/upvc-installation-best-practices', label: 'Installation Guide', description: 'Step-by-step UPVC pipe installation best practices' },
  { path: '/technical/gso-saso-compliance-guide', label: 'GSO SASO Guide', description: 'Gulf and Saudi standards compliance guide' },
  { path: '/technical/upvc-pipe-sizing-calculator-guide', label: 'Pipe Sizing Guide', description: 'UPVC pipe sizing formulas and calculator' },
];
