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
      { label: 'UPVC Pressure Pipes & Fittings', labelAr: 'أنابيب وتوصيلات الضغط UPVC', href: '/products/upvc-pressure', description: 'High-quality pressure piping systems', descriptionAr: 'أنظمة أنابيب الضغط عالية الجودة' },
      { label: 'UPVC Drainage Pipes & Fittings', labelAr: 'أنابيب وتوصيلات الصرف UPVC', href: '/products/upvc-drainage', description: 'Complete drainage solutions', descriptionAr: 'حلول صرف متكاملة' },
      { label: 'UPVC Duct Pipes & Accessories', labelAr: 'أنابيب وملحقات قنوات UPVC', href: '/products/upvc-duct', description: 'Cable ducting systems', descriptionAr: 'أنظمة قنوات الكابلات' },
      { label: 'PVC Conduit Pipes', labelAr: 'أنابيب القنوات PVC', href: '/products/pvc-conduit', description: 'Electrical conduit solutions', descriptionAr: 'حلول القنوات الكهربائية' },
      { label: 'PPR Pipes', labelAr: 'أنابيب PPR', href: '/products/ppr', description: 'Hot & cold water systems', descriptionAr: 'أنظمة المياه الساخنة والباردة' },
      { label: 'Polyethylene Pipe Systems', labelAr: 'أنظمة أنابيب البولي إيثيلين', href: '/products/polyethylene', description: 'HDPE & LDPE solutions', descriptionAr: 'حلول HDPE و LDPE' },
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
    label: 'News & Media',
    labelAr: 'الأخبار والإعلام',
    href: '/news-media',
  },
  {
    label: 'Resources',
    labelAr: 'الموارد',
    href: '/resources',
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
      { label: 'UPVC Pressure', labelAr: 'ضغط UPVC', href: '/products/upvc-pressure' },
      { label: 'UPVC Drainage', labelAr: 'صرف UPVC', href: '/products/upvc-drainage' },
      { label: 'UPVC Duct', labelAr: 'قنوات UPVC', href: '/products/upvc-duct' },
      { label: 'PVC Conduit', labelAr: 'قنوات PVC', href: '/products/pvc-conduit' },
      { label: 'PPR Pipes', labelAr: 'أنابيب PPR', href: '/products/ppr' },
      { label: 'Polyethylene', labelAr: 'البولي إيثيلين', href: '/products/polyethylene' },
    ],
  },
  {
    title: 'Corporate',
    titleAr: 'الشركة',
    links: [
      { label: 'News & Media', labelAr: 'الأخبار والإعلام', href: '/news-media' },
      { label: 'Resources', labelAr: 'الموارد', href: '/resources' },
      { label: 'Careers', labelAr: 'الوظائف', href: '/contact-us#careers' },
    ],
  },
  {
    title: 'Support',
    titleAr: 'الدعم',
    links: [
      { label: 'Contact Us', labelAr: 'اتصل بنا', href: '/contact-us' },
      { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'Sitemap', labelAr: 'خريطة الموقع', href: '/sitemap' },
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
  { path: '/news-media', label: 'News & Media', description: 'Latest news, press releases, and media' },
  { path: '/resources', label: 'Resources', description: 'Catalogues, technical documents, and guides' },
  { path: '/contact-us', label: 'Contact Us', description: 'Get in touch with Crown Plastic Pipes' },
  { path: '/privacy-policy', label: 'Privacy Policy', description: 'Our privacy policy' },
  { path: '/sitemap', label: 'Sitemap', description: 'Website sitemap' },
  // Products
  { path: '/products', label: 'Products', description: 'Complete range of plastic pipes and fittings' },
  { path: '/products/upvc-pressure', label: 'UPVC Pressure Pipes & Fittings', description: 'High-quality pressure piping' },
  { path: '/products/upvc-pressure/pipes-metric', label: 'UPVC Pressure Pipes - Metric', description: 'ISO 4422, BS EN 1452, DIN standards' },
  { path: '/products/upvc-pressure/pipes-inch', label: 'UPVC Pressure Pipes - Inch', description: 'BS 3505/3506, ASTM standards' },
  { path: '/products/upvc-pressure/fittings', label: 'UPVC Pressure Fittings', description: 'DIN 8063, BS EN 14523 fittings' },
  { path: '/products/upvc-drainage', label: 'UPVC Drainage Pipes & Fittings', description: 'Complete drainage solutions' },
  { path: '/products/upvc-drainage/pipes-above-ground', label: 'Above Ground Drainage', description: 'BS 5255, BS 4514 standards' },
  { path: '/products/upvc-drainage/pipes-underground', label: 'Underground Drainage', description: 'BS EN 1401, BS 4660 standards' },
  { path: '/products/upvc-drainage/pipes-non-standard', label: 'Non-Standard Drainage', description: 'Custom drainage solutions' },
  { path: '/products/upvc-drainage/fittings', label: 'Drainage Fittings', description: 'Complete range of fittings' },
  { path: '/products/upvc-duct', label: 'UPVC Duct Pipes & Accessories', description: 'Cable ducting systems' },
  { path: '/products/upvc-duct/pipes-din', label: 'Duct Pipes - DIN', description: 'DIN 8062 standard' },
  { path: '/products/upvc-duct/pipes-bs', label: 'Duct Pipes - BS', description: 'BS 3505/3506 standard' },
  { path: '/products/upvc-duct/pipes-nema', label: 'Duct Pipes - NEMA', description: 'NEMA TC-2 standard' },
  { path: '/products/upvc-duct/pipes-special-d54-d56-d57', label: 'Special Duct Pipes', description: 'D54, D56, D57 specifications' },
  { path: '/products/upvc-duct/pipes-telecom', label: 'Telecom Duct Pipes', description: 'Etisalat/DU specifications' },
  { path: '/products/upvc-duct/accessories', label: 'Duct Accessories', description: 'End caps, sockets, bends' },
  { path: '/products/pvc-conduit', label: 'PVC Conduit Pipes', description: 'Electrical conduit solutions' },
  { path: '/products/pvc-conduit/round-heavy', label: 'Round Heavy Conduit', description: '1250N rating' },
  { path: '/products/pvc-conduit/round-medium', label: 'Round Medium Conduit', description: '750N rating' },
  { path: '/products/pvc-conduit/round-light', label: 'Round Light Conduit', description: '320N rating' },
  { path: '/products/pvc-conduit/schedule-40', label: 'Schedule 40 Conduit', description: 'US standard' },
  { path: '/products/pvc-conduit/schedule-80', label: 'Schedule 80 Conduit', description: 'US standard heavy duty' },
  { path: '/products/ppr', label: 'PPR Pipes', description: 'Hot & cold water systems' },
  { path: '/products/ppr/sdr11-pn10', label: 'PPR SDR11 PN10', description: '10 bar pressure rating' },
  { path: '/products/ppr/sdr7-4-pn16', label: 'PPR SDR7.4 PN16', description: '16 bar pressure rating' },
  { path: '/products/ppr/sdr6-pn20', label: 'PPR SDR6 PN20', description: '20 bar pressure rating' },
  { path: '/products/polyethylene', label: 'Polyethylene Pipe Systems', description: 'HDPE & LDPE solutions' },
  { path: '/products/polyethylene/hdpe-pe63-pe80-pe100', label: 'HDPE PE63/PE80/PE100', description: 'ISO 4427, DIN 8074 standards' },
  { path: '/products/polyethylene/lldpe-ldpe-drip', label: 'LLDPE/LDPE Drip Irrigation', description: 'Agriculture applications' },
  { path: '/products/polyethylene/water-distribution', label: 'Water Distribution', description: 'Municipal water systems' },
  // Service Area Pages (LocalBusiness Schema)
  { path: '/upvc-pipes-dubai', label: 'UPVC Pipes Dubai', description: 'UPVC pipe supplier in Dubai' },
  { path: '/upvc-pipes-abu-dhabi', label: 'UPVC Pipes Abu Dhabi', description: 'UPVC pipe supplier in Abu Dhabi' },
  { path: '/upvc-pipes-sharjah', label: 'UPVC Pipes Sharjah', description: 'UPVC pipe manufacturer in Sharjah' },
  { path: '/upvc-pipes-saudi-arabia', label: 'UPVC Pipes Saudi Arabia', description: 'UPVC pipe exporter to Saudi Arabia' },
  { path: '/upvc-pipes-kuwait', label: 'UPVC Pipes Kuwait', description: 'UPVC pipe supplier to Kuwait' },
  { path: '/upvc-pipes-qatar', label: 'UPVC Pipes Qatar', description: 'UPVC pipe supplier to Qatar' },
];
