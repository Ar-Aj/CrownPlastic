// Regional Markets Configuration for Crown Plastic Pipes - Phase 3 AEO
// Market-specific pages with LocalBusiness schema and regional targeting

export interface RegionalMarket {
  slug: string;
  country: string;
  countryCode: string;
  city?: string;
  cityAr?: string;
  countryAr: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  keywords: string[];
  focus: string; // e.g., 'SASO compliance', 'commercial projects'
  certifications: string[];
  cta: {
    text: string;
    textAr: string;
    link: string;
  };
  districts?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  deliveryTime: string;
  currency: string;
}

// ============================================
// SAUDI ARABIA MARKET PAGES
// ============================================

export const saudiMarkets: RegionalMarket[] = [
  {
    slug: 'saudi-arabia/upvc-pipes-saso-certified',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    countryAr: 'المملكة العربية السعودية',
    title: 'SASO Certified UPVC Pipes for Saudi Arabia',
    titleAr: 'أنابيب UPVC معتمدة من ساسو للسعودية',
    description: 'Crown Plastic Pipes offers SASO TR-BM-5 certified UPVC pipes for the Saudi Arabian market. Full compliance with Saudi building codes, GSO standards, and local certification requirements. Bulk export to all Saudi cities.',
    descriptionAr: 'تقدم كراون بلاستيك بايبس أنابيب UPVC معتمدة من ساسو TR-BM-5 للسوق السعودي. التوافق الكامل مع أكواد البناء السعودية ومعايير GSO ومتطلبات الشهادات المحلية.',
    keywords: ['SASO certified UPVC pipes', 'Saudi Arabia pipe supplier', 'SASO TR-BM-5', 'Saudi building materials', 'UPVC pipes KSA', 'GSO certified pipes Saudi'],
    focus: 'SASO compliance and certification',
    certifications: ['SASO TR-BM-5', 'GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
    cta: {
      text: 'Get SASO-Certified Pipes',
      textAr: 'احصل على أنابيب معتمدة من ساسو',
      link: '/contact-us?market=saudi-saso',
    },
    districts: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Khobar', 'Jubail'],
    geo: { latitude: 24.7136, longitude: 46.6753 },
    telephone: '+971 6 543 6781',
    deliveryTime: '3-5 business days',
    currency: 'SAR',
  },
  {
    slug: 'saudi-arabia/riyadh-upvc-distributor',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    city: 'Riyadh',
    cityAr: 'الرياض',
    countryAr: 'المملكة العربية السعودية',
    title: 'UPVC Pipe Distributor in Riyadh, Saudi Arabia',
    titleAr: 'موزع أنابيب UPVC في الرياض',
    description: 'Leading UPVC pipe distributor serving Riyadh and Central Region of Saudi Arabia. Fast delivery to Riyadh construction projects, competitive pricing, SASO certified products. Serving contractors, developers, and government projects.',
    descriptionAr: 'موزع أنابيب UPVC الرائد في خدمة الرياض والمنطقة الوسطى. توصيل سريع لمشاريع البناء في الرياض، أسعار تنافسية، منتجات معتمدة من ساسو.',
    keywords: ['UPVC pipes Riyadh', 'Riyadh pipe distributor', 'plastic pipes Riyadh', 'construction materials Riyadh', 'UPVC supplier Central Region'],
    focus: 'Riyadh delivery and pricing',
    certifications: ['SASO TR-BM-5', 'GSO EN 805', 'BS EN 1452'],
    cta: {
      text: 'Request Quote for Riyadh Delivery',
      textAr: 'اطلب عرض سعر للتوصيل إلى الرياض',
      link: '/contact-us?market=riyadh',
    },
    districts: ['Al Olaya', 'Al Malaz', 'Al Naseem', 'Al Sulay', 'Al Rawdah', 'Industrial City', 'King Abdullah Financial District'],
    geo: { latitude: 24.7136, longitude: 46.6753 },
    telephone: '+971 6 543 6781',
    deliveryTime: '3-5 business days',
    currency: 'SAR',
  },
  {
    slug: 'saudi-arabia/jeddah-upvc-wholesale',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    city: 'Jeddah',
    cityAr: 'جدة',
    countryAr: 'المملكة العربية السعودية',
    title: 'UPVC Pipes Wholesale Supplier in Jeddah',
    titleAr: 'مورد أنابيب UPVC بالجملة في جدة',
    description: 'Wholesale UPVC pipe supplier for Jeddah and Western Region of Saudi Arabia. Container-load shipments, bulk pricing, port delivery to Jeddah Islamic Port. Serving large construction and infrastructure projects.',
    descriptionAr: 'مورد أنابيب UPVC بالجملة لجدة والمنطقة الغربية. شحنات حاويات، أسعار بالجملة، توصيل لميناء جدة الإسلامي.',
    keywords: ['UPVC pipes wholesale Jeddah', 'Jeddah pipe supplier', 'bulk pipes Jeddah', 'construction materials Western Region', 'Jeddah Islamic Port delivery'],
    focus: 'Bulk orders and wholesale',
    certifications: ['SASO TR-BM-5', 'GSO EN 805', 'BS EN 1452'],
    cta: {
      text: 'Bulk Order Form for Jeddah',
      textAr: 'نموذج طلب بالجملة لجدة',
      link: '/contact-us?market=jeddah-wholesale',
    },
    districts: ['Al Hamra', 'Al Rawdah', 'Al Safa', 'Industrial City', 'Jeddah Port Area', 'North Jeddah', 'South Jeddah'],
    geo: { latitude: 21.4858, longitude: 39.1925 },
    telephone: '+971 6 543 6781',
    deliveryTime: '3-5 business days via port',
    currency: 'SAR',
  },
];

// ============================================
// UAE MARKET PAGES (Additional to Phase 1)
// ============================================

export const uaeMarkets: RegionalMarket[] = [
  {
    slug: 'uae/upvc-pipes-dubai-commercial',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    city: 'Dubai',
    cityAr: 'دبي',
    countryAr: 'الإمارات العربية المتحدة',
    title: 'UPVC Pipes for Dubai Commercial Projects',
    titleAr: 'أنابيب UPVC لمشاريع دبي التجارية',
    description: 'Premium UPVC pipe supplier for commercial construction projects in Dubai. Serving Dubai Marina, Downtown Dubai, Business Bay, DIFC, and major developments. Same-day delivery, project consultation, bulk pricing.',
    descriptionAr: 'مورد أنابيب UPVC الممتازة لمشاريع البناء التجارية في دبي. خدمة دبي مارينا، داون تاون دبي، بزنس باي والمشاريع الكبرى.',
    keywords: ['UPVC pipes Dubai commercial', 'Dubai construction materials', 'Business Bay pipes', 'Downtown Dubai supplier', 'commercial plumbing Dubai'],
    focus: 'Commercial projects in Dubai',
    certifications: ['BS EN 1452', 'DIN 8062', 'GSO EN 805', 'Dubai Municipality Approved'],
    cta: {
      text: 'Commercial Project Inquiry',
      textAr: 'استفسار مشروع تجاري',
      link: '/contact-us?market=dubai-commercial',
    },
    districts: ['Dubai Marina', 'Downtown Dubai', 'Business Bay', 'DIFC', 'JLT', 'Dubai Hills', 'Meydan'],
    geo: { latitude: 25.2048, longitude: 55.2708 },
    telephone: '+971 6 543 6781',
    deliveryTime: 'Same day - 24 hours',
    currency: 'AED',
  },
  {
    slug: 'uae/upvc-pipes-abu-dhabi-government',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    countryAr: 'الإمارات العربية المتحدة',
    title: 'UPVC Pipes for Abu Dhabi Government & Municipal Projects',
    titleAr: 'أنابيب UPVC لمشاريع حكومة أبوظبي والبلدية',
    description: 'Certified UPVC pipe supplier for Abu Dhabi government, municipal, and infrastructure projects. ITC approved, Abu Dhabi Quality Mark eligible, extensive experience with ADNOC, Mubadala, and government contractors.',
    descriptionAr: 'مورد أنابيب UPVC معتمد لمشاريع حكومة أبوظبي والبلدية والبنية التحتية. معتمد من ITC، مؤهل لعلامة جودة أبوظبي.',
    keywords: ['Abu Dhabi government pipes', 'municipal projects Abu Dhabi', 'ITC approved pipes', 'Abu Dhabi infrastructure', 'ADNOC contractors'],
    focus: 'Government and municipal projects',
    certifications: ['BS EN 1452', 'Abu Dhabi Quality Mark', 'ITC Approved', 'ISO 9001:2015'],
    cta: {
      text: 'Government Bidding Support',
      textAr: 'دعم العطاءات الحكومية',
      link: '/contact-us?market=abudhabi-government',
    },
    districts: ['Mussafah', 'KIZAD', 'Yas Island', 'Saadiyat', 'Al Reem Island', 'Khalifa City'],
    geo: { latitude: 24.4539, longitude: 54.3773 },
    telephone: '+971 6 543 6781',
    deliveryTime: 'Same day - 48 hours',
    currency: 'AED',
  },
];

// ============================================
// OTHER GCC MARKET PAGES
// ============================================

export const gccMarkets: RegionalMarket[] = [
  {
    slug: 'kuwait/upvc-pipes-supplier',
    country: 'Kuwait',
    countryCode: 'KW',
    city: 'Kuwait City',
    cityAr: 'مدينة الكويت',
    countryAr: 'الكويت',
    title: 'UPVC Pipes Supplier for Kuwait',
    titleAr: 'مورد أنابيب UPVC للكويت',
    description: 'GSO certified UPVC pipe exporter for Kuwait construction and infrastructure projects. Container shipments to Shuwaikh Port, competitive bulk pricing, full documentation for Kuwaiti customs clearance.',
    descriptionAr: 'مصدر أنابيب UPVC معتمد من GSO لمشاريع البناء والبنية التحتية في الكويت. شحنات حاويات إلى ميناء الشويخ.',
    keywords: ['UPVC pipes Kuwait', 'Kuwait pipe supplier', 'GSO certified Kuwait', 'Shuwaikh Port delivery', 'Kuwait construction materials'],
    focus: 'Kuwait market export',
    certifications: ['GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
    cta: {
      text: 'Request Kuwait Export Quote',
      textAr: 'اطلب عرض سعر تصدير للكويت',
      link: '/contact-us?market=kuwait',
    },
    districts: ['Kuwait City', 'Hawalli', 'Farwaniya', 'Ahmadi', 'Jahra', 'Salmiya'],
    geo: { latitude: 29.3759, longitude: 47.9774 },
    telephone: '+971 6 543 6781',
    deliveryTime: '5-7 business days',
    currency: 'KWD',
  },
  {
    slug: 'qatar/upvc-pipes-doha',
    country: 'Qatar',
    countryCode: 'QA',
    city: 'Doha',
    cityAr: 'الدوحة',
    countryAr: 'قطر',
    title: 'UPVC Pipes for Qatar Construction Projects',
    titleAr: 'أنابيب UPVC لمشاريع البناء في قطر',
    description: 'Premium UPVC pipe supplier for Qatar. Serving Doha, Lusail, The Pearl, and major infrastructure projects. Experience with World Cup legacy developments. QCS compliant products with full technical support.',
    descriptionAr: 'مورد أنابيب UPVC الممتازة لقطر. خدمة الدوحة ولوسيل واللؤلؤة ومشاريع البنية التحتية الكبرى.',
    keywords: ['UPVC pipes Qatar', 'Doha pipe supplier', 'Lusail construction', 'Qatar World Cup projects', 'QCS compliant pipes'],
    focus: 'Qatar infrastructure projects',
    certifications: ['GSO EN 805', 'BS EN 1452', 'QCS Compliant'],
    cta: {
      text: 'Qatar Project Inquiry',
      textAr: 'استفسار مشروع قطر',
      link: '/contact-us?market=qatar',
    },
    districts: ['Doha', 'Lusail', 'The Pearl', 'West Bay', 'Al Wakra', 'Industrial Area'],
    geo: { latitude: 25.2854, longitude: 51.5310 },
    telephone: '+971 6 543 6781',
    deliveryTime: '5-7 business days',
    currency: 'QAR',
  },
  {
    slug: 'bahrain/upvc-pipes-manama',
    country: 'Bahrain',
    countryCode: 'BH',
    city: 'Manama',
    cityAr: 'المنامة',
    countryAr: 'البحرين',
    title: 'UPVC Pipes Supplier for Bahrain',
    titleAr: 'مورد أنابيب UPVC للبحرين',
    description: 'UPVC pipe supplier for Bahrain construction industry. Quick delivery via King Fahd Causeway or Khalifa Bin Salman Port. Serving Manama, Muharraq, and industrial areas. GSO certified products.',
    descriptionAr: 'مورد أنابيب UPVC لصناعة البناء في البحرين. توصيل سريع عبر جسر الملك فهد أو ميناء خليفة بن سلمان.',
    keywords: ['UPVC pipes Bahrain', 'Manama pipe supplier', 'Bahrain construction materials', 'King Fahd Causeway delivery'],
    focus: 'Bahrain market',
    certifications: ['GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
    cta: {
      text: 'Bahrain Delivery Quote',
      textAr: 'عرض سعر توصيل البحرين',
      link: '/contact-us?market=bahrain',
    },
    districts: ['Manama', 'Muharraq', 'Riffa', 'Hamad Town', 'Isa Town', 'Sitra'],
    geo: { latitude: 26.2285, longitude: 50.5860 },
    telephone: '+971 6 543 6781',
    deliveryTime: '2-4 business days',
    currency: 'BHD',
  },
  {
    slug: 'oman/upvc-pipes-muscat',
    country: 'Oman',
    countryCode: 'OM',
    city: 'Muscat',
    cityAr: 'مسقط',
    countryAr: 'عُمان',
    title: 'UPVC Pipes for Oman Construction Projects',
    titleAr: 'أنابيب UPVC لمشاريع البناء في عُمان',
    description: 'UPVC pipe exporter for Oman construction and infrastructure. Serving Muscat, Sohar, Salalah, and all Omani governorates. Delivery to Sultan Qaboos Port. GSO and Oman standards compliant.',
    descriptionAr: 'مصدر أنابيب UPVC للبناء والبنية التحتية في عُمان. خدمة مسقط وصحار وصلالة وجميع المحافظات العمانية.',
    keywords: ['UPVC pipes Oman', 'Muscat pipe supplier', 'Oman construction materials', 'Sultan Qaboos Port delivery', 'Sohar industrial'],
    focus: 'Oman market',
    certifications: ['GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
    cta: {
      text: 'Oman Export Inquiry',
      textAr: 'استفسار تصدير عُمان',
      link: '/contact-us?market=oman',
    },
    districts: ['Muscat', 'Sohar', 'Salalah', 'Nizwa', 'Sur', 'Duqm'],
    geo: { latitude: 23.5880, longitude: 58.3829 },
    telephone: '+971 6 543 6781',
    deliveryTime: '3-5 business days',
    currency: 'OMR',
  },
];

// ============================================
// ALL REGIONAL MARKETS COMBINED
// ============================================

export const allRegionalMarkets: RegionalMarket[] = [
  ...saudiMarkets,
  ...uaeMarkets,
  ...gccMarkets,
];

// Helper function to get market by slug
export function getMarketBySlug(slug: string): RegionalMarket | undefined {
  return allRegionalMarkets.find(market => market.slug === slug);
}

// Get markets by country
export function getMarketsByCountry(countryCode: string): RegionalMarket[] {
  return allRegionalMarkets.filter(market => market.countryCode === countryCode);
}
