// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - ABOUT PAGE DATA TYPES & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

import { IconName } from '@/components/ui/Icon';

// ─────────────────────────────────────────────────────────────────────────────
// TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

export interface HeroFact {
  id: string;
  label: string;
  subtitle: string;
  description: string;
}

export interface GlanceItem {
  id: string;
  icon: IconName;
  label: string;
  value: string;
  highlight?: boolean;
}

export interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
  highlight?: boolean;
}

export interface GccMarket {
  id: string;
  name: string;
  code: string;
  note: string;
  active?: boolean;
}

export interface Certification {
  id: string;
  code: string;
  name: string;
  scope: string;
  issuingBody: string;
  benefit: string;
  icon: IconName;
}

export interface Standard {
  code: string;
  name: string;
  application: string;
  productTypes: string;
}

export interface InnovationPillar {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  specs?: { property: string; value: string }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONFIGURATIONS
// ─────────────────────────────────────────────────────────────────────────────

export const heroFacts: HeroFact[] = [
  {
    id: 'since-1995',
    label: 'Since 1995',
    subtitle: 'Three Decades of Excellence',
    description: 'Pioneering UPVC, PPR, and HDPE piping solutions from Sharjah, UAE. ISO-certified manufacturing serving GCC infrastructure projects for 30+ years.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing Excellence',
    subtitle: 'European Technology, Gulf Standards',
    description: 'State-of-the-art Battenfeld extrusion lines with in-house QC labs. 100% virgin materials, multi-standard compliance (BS EN, DIN, ISO, ASTM, SASO).',
  },
  {
    id: 'gcc-reach',
    label: 'GCC Reach',
    subtitle: 'Regional Distribution Network',
    description: 'Serving UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait and the sub-continent. Trusted by 10,000+ customers across irrigation, construction, and plumbing sectors.',
  },
];

export const heroPills = [
  { label: 'ISO 9001:2015', icon: 'certified' as IconName },
  { label: 'ISO 14001:2015', icon: 'eco' as IconName },
  { label: 'OHSAS 18001', icon: 'shield' as IconName },
  { label: 'GCC Exports', icon: 'globe' as IconName },
];

export const glanceItems: GlanceItem[] = [
  { id: 'founded', icon: 'calendar', label: 'Founded', value: '1995', highlight: true },
  { id: 'materials', icon: 'package', label: 'Materials', value: 'UPVC / PPRC / HDPE' },
  { id: 'virgin', icon: 'certified', label: 'Raw Materials', value: '100% Virgin uPVC' },
  { id: 'markets', icon: 'globe', label: 'Markets', value: 'GCC + Sub-continent' },
  { id: 'products', icon: 'box', label: 'Product Range', value: '5,000+ Variants' },
  { id: 'standards', icon: 'shield', label: 'Standards', value: 'BS EN • DIN • ISO • ASTM • SASO' },
  { id: 'customers', icon: 'users', label: 'Customers', value: '10,000+ Served' },
  { id: 'climate', icon: 'climate', label: 'Testing', value: 'Gulf Climate Certified' },
];

export const journeyEvents: JourneyEvent[] = [
  {
    year: '1995',
    title: 'Foundation in Sharjah, UAE',
    description: 'Crown Plastic Pipes Factory L.L.C. established with a vision to provide high-quality plastic piping solutions for the growing GCC infrastructure sector.',
    highlight: true,
  },
  {
    year: '1998',
    title: 'Production Expansion',
    description: 'Expanded manufacturing capacity with additional extrusion lines, increasing output to meet rising demand across UAE construction projects.',
  },
  {
    year: '2004',
    title: 'Industrial License & Standards',
    description: 'Secured comprehensive industrial license and began multi-standard production (BS EN, DIN, ISO specifications).',
  },
  {
    year: '2005',
    title: 'ISO 9001 Certification',
    description: 'Achieved ISO 9001 Quality Management certification, establishing rigorous quality control processes.',
    stats: [{ label: 'Certification', value: 'ISO 9001' }],
  },
  {
    year: '2008',
    title: 'Environmental Commitment',
    description: 'Obtained ISO 14001 Environmental Management certification, committing to sustainable manufacturing practices.',
    stats: [{ label: 'Certification', value: 'ISO 14001' }],
  },
  {
    year: '2010',
    title: 'PPR & HDPE Product Launch',
    description: 'Introduced PPR hot/cold water systems and HDPE irrigation pipes, significantly expanding the product portfolio.',
    stats: [
      { label: 'New Lines', value: 'PPR + HDPE' },
      { label: 'Applications', value: '+200%' },
    ],
  },
  {
    year: '2012',
    title: 'GCC Export Network',
    description: 'Established distribution partnerships across Saudi Arabia, Oman, and Qatar, extending regional reach.',
  },
  {
    year: '2015',
    title: '20 Years of Excellence',
    description: 'Celebrated two decades of operations with product range exceeding 3,000 variants and OHSAS 18001 safety certification.',
    stats: [
      { label: 'Products', value: '3,000+' },
      { label: 'Certification', value: 'OHSAS 18001' },
    ],
    highlight: true,
  },
  {
    year: '2018',
    title: 'European Technology Upgrade',
    description: 'Invested in state-of-the-art Battenfeld extrusion lines from Austria, enhancing precision and production efficiency.',
    stats: [{ label: 'Technology', value: 'Battenfeld' }],
  },
  {
    year: '2020',
    title: 'Automated Quality Systems',
    description: 'Implemented computer-controlled production processes and automated quality testing systems for consistent output.',
  },
  {
    year: '2022',
    title: 'GSO/SASO Certifications',
    description: 'Achieved Gulf Standards Organization and Saudi Standards certifications, enabling expanded market access.',
    stats: [
      { label: 'Certifications', value: 'GSO + SASO' },
      { label: 'Markets', value: 'Full GCC' },
    ],
  },
  {
    year: '2025',
    title: '30 Years, 5,000+ Products',
    description: 'Three decades of excellence with comprehensive product range, serving 10,000+ customers across GCC and sub-continent.',
    stats: [
      { label: 'Products', value: '5,000+' },
      { label: 'Customers', value: '10,000+' },
    ],
    highlight: true,
  },
];

export const gccMarkets: GccMarket[] = [
  { id: 'uae', name: 'United Arab Emirates', code: 'UAE', note: 'Headquarters & manufacturing hub in Sharjah', active: true },
  { id: 'ksa', name: 'Saudi Arabia', code: 'KSA', note: 'Major export market, SASO certified products' },
  { id: 'oman', name: 'Oman', code: 'OMN', note: 'Infrastructure & irrigation projects' },
  { id: 'qatar', name: 'Qatar', code: 'QAT', note: 'Construction & development sector' },
  { id: 'bahrain', name: 'Bahrain', code: 'BHR', note: 'Building & plumbing applications' },
  { id: 'kuwait', name: 'Kuwait', code: 'KWT', note: 'Municipal & industrial piping' },
  { id: 'other', name: 'Sub-continent & Other', code: 'INT', note: 'Export markets across Asia & Africa' },
];

export const certifications: Certification[] = [
  {
    id: 'iso9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management',
    scope: 'Design, manufacturing, and delivery of plastic piping systems',
    issuingBody: 'QAOC (Quality Austria)',
    benefit: 'Ensures consistent product quality and customer satisfaction through systematic processes',
    icon: 'certified',
  },
  {
    id: 'iso14001',
    code: 'ISO 14001:2015',
    name: 'Environmental Management',
    scope: 'Environmental impact reduction in manufacturing operations',
    issuingBody: 'QAOC (Quality Austria)',
    benefit: 'Minimizes environmental footprint with zero-discharge manufacturing and waste reduction',
    icon: 'eco',
  },
  {
    id: 'ohsas',
    code: 'OHSAS 18001:2007',
    name: 'Occupational Health & Safety',
    scope: 'Workplace safety and employee health protection',
    issuingBody: 'QAOC (Quality Austria)',
    benefit: 'Guarantees safe manufacturing environment and responsible production practices',
    icon: 'shield',
  },
  {
    id: 'gso',
    code: 'GSO Certified',
    name: 'Gulf Standards Organization',
    scope: 'Compliance with unified GCC technical regulations',
    issuingBody: 'GSO (GCC Standardization Organization)',
    benefit: 'Products meet regional quality requirements for seamless GCC market access',
    icon: 'award',
  },
  {
    id: 'saso',
    code: 'SASO Approved',
    name: 'Saudi Standards',
    scope: 'Saudi Arabian market compliance',
    issuingBody: 'Saudi Standards, Metrology and Quality Organization',
    benefit: 'Enables direct export and distribution in Saudi Arabia market',
    icon: 'document',
  },
  {
    id: 'kitemark',
    code: 'BSI Kitemark',
    name: 'British Standards Institution',
    scope: 'Third-party certification of product quality',
    issuingBody: 'BSI (British Standards Institution)',
    benefit: 'Independent verification that products meet stringent British and European standards',
    icon: 'check',
  },
  {
    id: 'nsf',
    code: 'NSF Certified',
    name: 'Public Health & Safety',
    scope: 'Products safe for potable water applications',
    issuingBody: 'NSF International',
    benefit: 'Certified safe for drinking water systems with no harmful substance leaching',
    icon: 'water',
  },
  {
    id: 'qcc',
    code: 'QCC Certified',
    name: 'Qatar Civil Defense',
    scope: 'Fire safety and building code compliance',
    issuingBody: 'Qatar Civil Defense Directorate',
    benefit: 'Approved for use in Qatar construction and infrastructure projects',
    icon: 'shield',
  },
];

export const standards: Standard[] = [
  { code: 'BS EN 1452', name: 'British/European Standard', application: 'Pressure pipes for water supply', productTypes: 'UPVC Pressure Pipes' },
  { code: 'DIN 8061/8062', name: 'German Industrial Standard', application: 'Rigid PVC pipes and dimensions', productTypes: 'UPVC, PVC Pipes' },
  { code: 'ISO 4422', name: 'International Standard', application: 'Pressure pipes and jointing', productTypes: 'All Pressure Systems' },
  { code: 'ASTM D1785', name: 'American Standard', application: 'PVC plastic pipe schedules', productTypes: 'Schedule 40/80 Pipes' },
  { code: 'SASO', name: 'Saudi Standard', application: 'Regional compliance', productTypes: 'All Export Products' },
  { code: 'NEMA TC-2', name: 'National Electrical', application: 'Electrical conduit systems', productTypes: 'PVC Conduits, Ducts' },
];

export const innovationPillars: InnovationPillar[] = [
  {
    id: 'virgin-material',
    title: '100% Virgin Material',
    description: 'All pipes manufactured from premium virgin uPVC compound, ensuring maximum strength, durability, and chemical resistance. Zero recycled content contamination.',
    icon: 'certified',
    specs: [
      { property: 'Material Purity', value: '100% Virgin' },
      { property: 'Contamination', value: 'Zero tolerance' },
    ],
  },
  {
    id: 'inhouse-qc',
    title: 'In-House Quality Control',
    description: 'Fully equipped testing laboratory validates every production batch. Dimensional accuracy, pressure rating, and impact resistance verified before shipment.',
    icon: 'microscope',
    specs: [
      { property: 'Testing Rate', value: '100% Batches' },
      { property: 'Parameters', value: '15+ Checks' },
    ],
  },
  {
    id: 'gulf-climate',
    title: 'Gulf Climate Testing',
    description: 'Products specifically engineered and tested for extreme Gulf conditions: 50°C+ temperatures, UV exposure, and thermal cycling for 50+ year service life.',
    icon: 'climate',
    specs: [
      { property: 'Vicat Softening', value: '≥79°C' },
      { property: 'Service Life', value: '50+ Years' },
    ],
  },
  {
    id: 'independent-lab',
    title: 'Independent Lab Validation',
    description: 'Third-party testing by accredited international laboratories confirms compliance with BS EN, DIN, ISO, and ASTM specifications.',
    icon: 'lab',
    specs: [
      { property: 'Accreditation', value: 'ISO 17025' },
      { property: 'Standards', value: '6+ Compliance' },
    ],
  },
  {
    id: 'chemical-resistance',
    title: 'Chemical Resistance',
    description: 'Comprehensive resistance to acids, alkalis, and solvents. Ideal for industrial, chemical processing, and aggressive water treatment applications.',
    icon: 'flask',
    specs: [
      { property: 'Acid Resistance', value: 'Excellent' },
      { property: 'Alkali Resistance', value: 'Excellent' },
    ],
  },
  {
    id: 'european-tech',
    title: 'European Extrusion Technology',
    description: 'State-of-the-art Battenfeld extrusion lines from Austria ensure precision manufacturing, consistent wall thickness, and superior surface finish.',
    icon: 'cog',
    specs: [
      { property: 'Equipment', value: 'Battenfeld' },
      { property: 'Tolerance', value: '±0.1mm' },
    ],
  },
];
