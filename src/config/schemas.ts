// Schema configuration for Crown Plastic Pipes - AEO Implementation
// All structured data definitions for JSON-LD schemas

export const companyInfo = {
  name: 'Crown Plastic Pipes Factory L.L.C.',
  legalName: 'Crown Plastic Pipes Factory L.L.C.',
  alternateName: 'Crown Plastic Pipes',
  brand: 'Aquel Bathware',
  description: 'Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical conduits, and irrigation since 1995.',
  slogan: 'Excellence in Every Pipe',
  foundingDate: '1995',
  url: 'https://crownplasticuae.com',
  logo: 'https://crownplasticuae.com/images/logo.png',
  image: 'https://crownplasticuae.com/images/og-image.jpg',
  telephone: '+971 6 543 6781',
  faxNumber: '+971 6 543 6798',
  email: 'info@crownplasticuae.com',
  priceRange: '$$',
  numberOfEmployees: '100-500',
  
  address: {
    streetAddress: 'Industrial Area No. 6',
    addressLocality: 'Sharjah',
    addressRegion: 'Sharjah',
    postalCode: '63576',
    addressCountry: 'AE',
  },
  
  geo: {
    latitude: 25.2867,
    longitude: 55.4508,
  },
  
  social: {
    linkedin: 'https://linkedin.com/company/crown-plastic-pipes',
    facebook: 'https://facebook.com/crownplasticpipes',
    twitter: 'https://twitter.com/crownpipes',
    youtube: 'https://youtube.com/@crownplasticpipes',
    instagram: 'https://instagram.com/crownplasticpipes',
  },
};

// Markets served
export const marketsServed = [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'QA', name: 'Qatar' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'OM', name: 'Oman' },
];

// Certifications for organization schema
export const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { name: 'OHSAS 18001:2007', description: 'Occupational Health & Safety' },
  { name: 'BS EN 1452', description: 'UPVC Pressure Pipes for Water Supply' },
  { name: 'DIN 8062', description: 'UPVC Pipes - Dimensions' },
  { name: 'GSO EN 805', description: 'GCC Water Supply Requirements' },
  { name: 'SASO TR-BM-5', description: 'Saudi Standards Organization' },
  { name: 'ISO 1452', description: 'Plastics Piping Systems for Water Supply' },
  { name: 'NSF/ANSI 61', description: 'Drinking Water System Components' },
  { name: 'BSI Kitemark', description: 'British Standards Quality Mark' },
];

// Product standards
export const productStandards = {
  upvcPressure: ['BS EN 1452', 'DIN 8061/62', 'ISO 4422', 'ASTM D1785'],
  upvcDrainage: ['BS EN 1329', 'BS EN 1401', 'BS 5255', 'BS 4514'],
  ppr: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
  hdpe: ['ISO 4427', 'DIN 8074', 'EN 12201'],
  conduit: ['NEMA TC-2', 'UL 651'],
  duct: ['DIN 8062', 'NEMA TC-2', 'Etisalat/DU Specifications'],
};

// UPVC Pressure Pipe specifications for Product schemas
export interface ProductSpecification {
  sku: string;
  name: string;
  nameAr: string;
  diameter: string;
  pressureRating: string;
  material: string;
  standards: string[];
  temperatureRange: string;
  color: string;
  length: string;
  wallThickness?: string;
  application: string[];
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
}

// Generate UPVC Pressure Pipe product variants
export const upvcPressurePipeSpecs: ProductSpecification[] = [
  // 20mm variants
  { sku: 'UPVC-BS1452-20-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 20mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 20مم PN10', diameter: '20mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'Irrigation', 'Industrial water transport'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-20-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 20mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 20مم PN16', diameter: '20mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'High-pressure systems'], availability: 'InStock' },
  
  // 25mm variants
  { sku: 'UPVC-BS1452-25-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 25mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 25مم PN10', diameter: '25mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'Irrigation'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-25-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 25mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 25مم PN16', diameter: '25mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'High-pressure systems'], availability: 'InStock' },
  
  // 32mm variants
  { sku: 'UPVC-BS1452-32-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 32mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 32مم PN10', diameter: '32mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'Residential plumbing'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-32-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 32mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 32مم PN16', diameter: '32mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Potable water supply', 'Commercial buildings'], availability: 'InStock' },
  
  // 50mm variants
  { sku: 'UPVC-BS1452-50-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 50mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 50مم PN10', diameter: '50mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Water distribution', 'Industrial piping'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-50-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 50mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 50مم PN16', diameter: '50mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['High-pressure water supply', 'Municipal systems'], availability: 'InStock' },
  
  // 63mm variants
  { sku: 'UPVC-BS1452-63-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 63mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 63مم PN10', diameter: '63mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['Water distribution', 'Agriculture irrigation'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-63-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 63mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 63مم PN16', diameter: '63mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '3m, 5m, 6m', application: ['High-pressure systems', 'Infrastructure projects'], availability: 'InStock' },
  
  // 110mm variants
  { sku: 'UPVC-BS1452-110-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 110mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 110مم PN10', diameter: '110mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['Municipal water supply', 'Large-scale irrigation'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-110-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 110mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 110مم PN16', diameter: '110mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['High-pressure mains', 'Commercial projects'], availability: 'InStock' },
  
  // 160mm variants
  { sku: 'UPVC-BS1452-160-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 160mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 160مم PN10', diameter: '160mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['Water transmission', 'Infrastructure'], availability: 'InStock' },
  { sku: 'UPVC-BS1452-160-PN16', name: 'UPVC Pressure Pipe BS EN 1452 - 160mm PN16', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 160مم PN16', diameter: '160mm', pressureRating: 'PN16', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['High-pressure transmission', 'Industrial'], availability: 'InStock' },
  
  // 200mm variant
  { sku: 'UPVC-BS1452-200-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 200mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 200مم PN10', diameter: '200mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['Main distribution', 'Municipal projects'], availability: 'InStock' },
  
  // 250mm variant
  { sku: 'UPVC-BS1452-250-PN10', name: 'UPVC Pressure Pipe BS EN 1452 - 250mm PN10', nameAr: 'أنبوب ضغط UPVC بمعيار BS EN 1452 - 250مم PN10', diameter: '250mm', pressureRating: 'PN10', material: 'Unplasticized Polyvinyl Chloride (UPVC)', standards: ['BS EN 1452', 'DIN 8062', 'ISO 1452'], temperatureRange: '-10°C to +40°C', color: 'Grey', length: '5m, 6m', application: ['Trunk mains', 'Large infrastructure'], availability: 'InStock' },
];

// Service area configurations for LocalBusiness schemas
export interface ServiceArea {
  slug: string;
  city: string;
  cityAr: string;
  country: string;
  countryCode: string;
  region?: string;
  districts: string[];
  telephone: string;
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  description: string;
  descriptionAr: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'upvc-pipes-dubai',
    city: 'Dubai',
    cityAr: 'دبي',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Dubai',
    districts: ['Business Bay', 'Downtown Dubai', 'Jebel Ali', 'Dubai Industrial City', 'Al Quoz', 'Deira', 'Jumeirah', 'Dubai Marina', 'Silicon Oasis', 'Al Barsha'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Dubai - Leading supplier of UPVC, PPR, HDPE pipes and fittings for construction, plumbing, and infrastructure projects in Dubai. BS EN 1452 certified. Same-day delivery available.',
    descriptionAr: 'Crown Plastic Pipes دبي - المورد الرائد لأنابيب وتوصيلات UPVC و PPR و HDPE لمشاريع البناء والسباكة والبنية التحتية في دبي. معتمد BS EN 1452. التوصيل في نفس اليوم متاح.',
  },
  {
    slug: 'upvc-pipes-abu-dhabi',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Abu Dhabi',
    districts: ['Mussafah', 'Al Reem Island', 'Yas Island', 'Saadiyat Island', 'Khalifa City', 'Al Ain', 'Al Dhafra', 'Corniche'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Abu Dhabi - Premium UPVC pressure pipes and fittings supplier for Abu Dhabi construction and infrastructure projects. ISO 9001:2015 certified manufacturer. Delivering to Mussafah, Al Ain, and all Emirates.',
    descriptionAr: 'Crown Plastic Pipes أبوظبي - مورد أنابيب وتوصيلات الضغط UPVC الممتازة لمشاريع البناء والبنية التحتية في أبوظبي. مصنع معتمد ISO 9001:2015. التوصيل إلى مصفح والعين وجميع الإمارات.',
  },
  {
    slug: 'upvc-pipes-sharjah',
    city: 'Sharjah',
    cityAr: 'الشارقة',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Sharjah',
    districts: ['Industrial Area', 'Al Nahda', 'Al Majaz', 'Al Khan', 'Al Qasimia', 'Muwaileh', 'University City', 'Sharjah Airport Free Zone'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Sharjah - Factory direct UPVC, PPR, HDPE pipe manufacturer in Sharjah Industrial Area. 30+ years manufacturing excellence. Visit our showroom or request factory tours.',
    descriptionAr: 'Crown Plastic Pipes الشارقة - مصنع أنابيب UPVC و PPR و HDPE مباشر في المنطقة الصناعية بالشارقة. 30+ عام من التميز في التصنيع. قم بزيارة صالة العرض لدينا أو اطلب جولات المصنع.',
  },
  {
    slug: 'upvc-pipes-saudi-arabia',
    city: 'Saudi Arabia',
    cityAr: 'المملكة العربية السعودية',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    districts: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Khobar', 'Jubail', 'Yanbu', 'Tabuk', 'Abha'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Saudi Arabia - SASO certified UPVC pipe supplier for KSA construction projects. BS EN 1452, DIN 8062 compliant. Export to Riyadh, Jeddah, Dammam, and all Saudi cities.',
    descriptionAr: 'Crown Plastic Pipes المملكة العربية السعودية - مورد أنابيب UPVC معتمد من SASO لمشاريع البناء في المملكة. متوافق مع BS EN 1452 و DIN 8062. التصدير إلى الرياض وجدة والدمام وجميع المدن السعودية.',
  },
  {
    slug: 'upvc-pipes-kuwait',
    city: 'Kuwait',
    cityAr: 'الكويت',
    country: 'Kuwait',
    countryCode: 'KW',
    districts: ['Kuwait City', 'Hawalli', 'Farwaniya', 'Ahmadi', 'Jahra', 'Mubarak Al-Kabeer', 'Salmiya', 'Fahaheel'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Kuwait - GSO certified UPVC, PPR, HDPE pipe exporter for Kuwait infrastructure and construction. ISO 9001:2015 quality. Container shipments to Kuwait ports.',
    descriptionAr: 'Crown Plastic Pipes الكويت - مصدر أنابيب UPVC و PPR و HDPE معتمد من GSO للبنية التحتية والبناء في الكويت. جودة ISO 9001:2015. شحنات حاويات إلى موانئ الكويت.',
  },
  {
    slug: 'upvc-pipes-qatar',
    city: 'Qatar',
    cityAr: 'قطر',
    country: 'Qatar',
    countryCode: 'QA',
    districts: ['Doha', 'Al Wakra', 'Al Khor', 'Lusail', 'The Pearl', 'West Bay', 'Industrial Area', 'Mesaieed'],
    telephone: '+971 6 543 6781',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], opens: '08:00', closes: '19:00' },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '11:30' },
      { dayOfWeek: ['Friday'], opens: '13:00', closes: '19:00' },
    ],
    description: 'Crown Plastic Pipes Qatar - Premium UPVC pipe supplier for Qatar construction and FIFA World Cup infrastructure legacy projects. BS EN 1452 certified. Bulk orders for Doha and Lusail.',
    descriptionAr: 'Crown Plastic Pipes قطر - مورد أنابيب UPVC الممتازة لمشاريع البناء في قطر ومشاريع إرث البنية التحتية لكأس العالم FIFA. معتمد BS EN 1452. طلبات بالجملة للدوحة ولوسيل.',
  },
];

// Generate helper functions for schema data
export function getProductSchemaData(spec: ProductSpecification, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${baseUrl}/products/upvc-pressure/${spec.sku.toLowerCase()}#product`,
    name: spec.name,
    description: `${spec.name} - ${spec.material} pipe for ${spec.application.join(', ')}. Compliant with ${spec.standards.join(', ')}. Pressure rating: ${spec.pressureRating}. Temperature range: ${spec.temperatureRange}.`,
    sku: spec.sku,
    mpn: spec.sku,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
    },
    manufacturer: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.url,
    },
    category: 'Plumbing Pipes > UPVC Pressure Pipes',
    material: spec.material,
    color: spec.color,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Diameter', value: spec.diameter },
      { '@type': 'PropertyValue', name: 'Pressure Rating', value: spec.pressureRating },
      { '@type': 'PropertyValue', name: 'Standards', value: spec.standards.join(', ') },
      { '@type': 'PropertyValue', name: 'Temperature Range', value: spec.temperatureRange },
      { '@type': 'PropertyValue', name: 'Length', value: spec.length },
      { '@type': 'PropertyValue', name: 'Application', value: spec.application.join(', ') },
    ],
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/products/upvc-pressure/${spec.sku.toLowerCase()}`,
      priceCurrency: 'AED',
      price: '0',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: `https://schema.org/${spec.availability}`,
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
      },
      eligibleRegion: marketsServed.map(m => ({ '@type': 'Country', name: m.name })),
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: marketsServed.map(m => m.code),
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Organization',
        name: 'BSI Kitemark Certification',
      },
      reviewBody: 'Certified to BS EN 1452 standards for potable water applications.',
    },
  };
}

export function getLocalBusinessSchemaData(area: ServiceArea, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/${area.slug}#localbusiness`,
    name: `Crown Plastic Pipes - ${area.city}`,
    alternateName: companyInfo.alternateName,
    description: area.description,
    url: `${baseUrl}/${area.slug}`,
    telephone: area.telephone,
    email: companyInfo.email,
    image: companyInfo.image,
    logo: companyInfo.logo,
    priceRange: companyInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: area.city,
        containedInPlace: {
          '@type': 'Country',
          name: area.country,
        },
      },
      ...area.districts.map(district => ({
        '@type': 'Place',
        name: district,
      })),
    ],
    serviceType: ['Pipe Supplier', 'Plumbing Materials', 'Construction Materials', 'UPVC Pipes', 'PPR Pipes', 'HDPE Pipes'],
    openingHoursSpecification: area.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plastic Pipes & Fittings Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'UPVC Pressure Pipes' },
        { '@type': 'OfferCatalog', name: 'UPVC Drainage Pipes' },
        { '@type': 'OfferCatalog', name: 'PPR Hot & Cold Water Pipes' },
        { '@type': 'OfferCatalog', name: 'HDPE Pipes' },
        { '@type': 'OfferCatalog', name: 'PVC Conduit Pipes' },
      ],
    },
    sameAs: Object.values(companyInfo.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
      bestRating: '5',
    },
  };
}
