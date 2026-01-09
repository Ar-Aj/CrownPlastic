// Client & Partner Logo Configuration
// Used for trust signals across the site

export interface ClientLogo {
  name: string;
  nameAr?: string;
  image: string;
  url?: string;
  category?: 'government' | 'developer' | 'contractor' | 'distributor' | 'certification';
}

// ═══════════════════════════════════════════════════════════════════════════════
// CLIENT LOGOS - For Social Proof
// ═══════════════════════════════════════════════════════════════════════════════
// Note: Replace placeholder images with actual client logos
// Recommended: SVG format, 200x80px, grayscale-ready

export const clientLogos: ClientLogo[] = [
  // Government & Municipal
  {
    name: 'Dubai Municipality',
    nameAr: 'بلدية دبي',
    image: '/images/clients/dubai-municipality.svg',
    category: 'government',
  },
  {
    name: 'Abu Dhabi Municipality',
    nameAr: 'بلدية أبوظبي',
    image: '/images/clients/abudhabi-municipality.svg',
    category: 'government',
  },
  {
    name: 'Sharjah Municipality',
    nameAr: 'بلدية الشارقة',
    image: '/images/clients/sharjah-municipality.svg',
    category: 'government',
  },
  
  // Major Developers
  {
    name: 'Emaar Properties',
    nameAr: 'إعمار العقارية',
    image: '/images/clients/emaar.svg',
    url: 'https://www.emaar.com',
    category: 'developer',
  },
  {
    name: 'DAMAC Properties',
    nameAr: 'داماك العقارية',
    image: '/images/clients/damac.svg',
    url: 'https://www.damacproperties.com',
    category: 'developer',
  },
  {
    name: 'Nakheel',
    nameAr: 'نخيل',
    image: '/images/clients/nakheel.svg',
    url: 'https://www.nakheel.com',
    category: 'developer',
  },
  {
    name: 'Aldar Properties',
    nameAr: 'الدار العقارية',
    image: '/images/clients/aldar.svg',
    url: 'https://www.aldar.com',
    category: 'developer',
  },
  {
    name: 'Meraas',
    nameAr: 'مراس',
    image: '/images/clients/meraas.svg',
    category: 'developer',
  },
  
  // Construction & Contractors
  {
    name: 'Al Futtaim Group',
    nameAr: 'مجموعة الفطيم',
    image: '/images/clients/alfuttaim.svg',
    category: 'contractor',
  },
  {
    name: 'Arabtec Construction',
    nameAr: 'أرابتك للإنشاءات',
    image: '/images/clients/arabtec.svg',
    category: 'contractor',
  },
  {
    name: 'Drake & Scull',
    nameAr: 'دريك آند سكل',
    image: '/images/clients/drake-scull.svg',
    category: 'contractor',
  },
  {
    name: 'Al Naboodah',
    nameAr: 'النابوده',
    image: '/images/clients/alnaboodah.svg',
    category: 'contractor',
  },
  
  // Regional Partners
  {
    name: 'Saudi Binladin Group',
    nameAr: 'مجموعة بن لادن السعودية',
    image: '/images/clients/binladin.svg',
    category: 'contractor',
  },
  {
    name: 'Qatar Building Company',
    nameAr: 'شركة قطر للبناء',
    image: '/images/clients/qatar-building.svg',
    category: 'contractor',
  },
  {
    name: 'Kuwait Projects Company',
    nameAr: 'شركة كيبكو',
    image: '/images/clients/kipco.svg',
    category: 'contractor',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATION BADGES
// ═══════════════════════════════════════════════════════════════════════════════

export interface CertificationBadge {
  name: string;
  shortName: string;
  image: string;
  description: string;
  descriptionAr?: string;
}

export const certificationBadges: CertificationBadge[] = [
  {
    name: 'ISO 9001:2015',
    shortName: 'ISO 9001',
    image: '/images/certs/iso-9001.svg',
    description: 'Quality Management System',
    descriptionAr: 'نظام إدارة الجودة',
  },
  {
    name: 'ISO 14001:2015',
    shortName: 'ISO 14001',
    image: '/images/certs/iso-14001.svg',
    description: 'Environmental Management',
    descriptionAr: 'الإدارة البيئية',
  },
  {
    name: 'GSO EN 805',
    shortName: 'GSO',
    image: '/images/certs/gso.svg',
    description: 'Gulf Standards Organization',
    descriptionAr: 'هيئة التقييس الخليجية',
  },
  {
    name: 'SASO TR-BM-5',
    shortName: 'SASO',
    image: '/images/certs/saso.svg',
    description: 'Saudi Standards Authority',
    descriptionAr: 'هيئة المواصفات السعودية',
  },
  {
    name: 'BSI Kitemark',
    shortName: 'Kitemark',
    image: '/images/certs/kitemark.svg',
    description: 'British Standards Institution',
    descriptionAr: 'معهد المواصفات البريطانية',
  },
  {
    name: 'Dubai Central Lab',
    shortName: 'DCL',
    image: '/images/certs/dcl.svg',
    description: 'Dubai Municipality Approved',
    descriptionAr: 'معتمد من بلدية دبي',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PROJECT STATS
// ═══════════════════════════════════════════════════════════════════════════════

export const projectStats = {
  yearsExperience: 30,
  projectsCompleted: 5000,
  countriesServed: 25,
  happyCustomers: 10000,
  productsRange: 5000,
  certifications: 8,
};

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════

export interface Testimonial {
  id: string;
  quote: string;
  quoteAr?: string;
  author: string;
  authorAr?: string;
  role: string;
  roleAr?: string;
  company: string;
  companyAr?: string;
  rating: number;
  project?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Crown Plastic Pipes has been our trusted supplier for over 15 years. Their consistent quality and on-time delivery has made them an invaluable partner for our mega-projects in Dubai Marina.',
    quoteAr: 'كانت كراون بلاستيك بايبس موردنا الموثوق لأكثر من 15 عاماً. جودتهم المتسقة والتسليم في الوقت المحدد جعلهم شريكاً لا يقدر بثمن لمشاريعنا الكبرى في دبي مارينا.',
    author: 'Ahmed Al Maktoum',
    authorAr: 'أحمد المكتوم',
    role: 'Procurement Director',
    roleAr: 'مدير المشتريات',
    company: 'Emaar Properties',
    companyAr: 'إعمار العقارية',
    rating: 5,
    project: 'Dubai Marina Development',
  },
  {
    id: 'test-2',
    quote: 'The technical support from Crown is exceptional. Their team helped us specify the right pipe grades for our infrastructure project, ensuring full compliance with Abu Dhabi standards.',
    quoteAr: 'الدعم الفني من كراون استثنائي. ساعدنا فريقهم في تحديد درجات الأنابيب المناسبة لمشروع البنية التحتية لدينا، مما يضمن الامتثال الكامل لمعايير أبوظبي.',
    author: 'Khalid Hassan',
    authorAr: 'خالد حسن',
    role: 'Chief Engineer',
    roleAr: 'كبير المهندسين',
    company: 'Abu Dhabi Municipality',
    companyAr: 'بلدية أبوظبي',
    rating: 5,
    project: 'Saadiyat Infrastructure',
  },
  {
    id: 'test-3',
    quote: 'We switched to Crown for our Saudi projects due to their SASO certification. The quality matches European standards at competitive GCC pricing. Highly recommended for any large-scale construction.',
    quoteAr: 'انتقلنا إلى كراون لمشاريعنا السعودية بسبب شهادة ساسو. الجودة تتطابق مع المعايير الأوروبية بأسعار تنافسية في دول مجلس التعاون. موصى به بشدة لأي بناء واسع النطاق.',
    author: 'Fahad Al-Rashid',
    authorAr: 'فهد الراشد',
    role: 'Operations Manager',
    roleAr: 'مدير العمليات',
    company: 'Saudi Binladin Group',
    companyAr: 'مجموعة بن لادن السعودية',
    rating: 5,
    project: 'Riyadh Metro Stations',
  },
];
