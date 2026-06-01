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
  description: string;
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
    description: 'Pioneering UPVC, PPR, and HDPE piping solutions from Umm Al Quwain, UAE. ISO-certified manufacturing serving GCC infrastructure projects for 30+ years.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing Excellence',
    subtitle: 'European Technology, Gulf Standards',
    description: 'State-of-the-art Battenfeld extrusion lines with in-house QC labs. Top-tier raw materials, multi-standard compliance (BS EN, DIN, ISO, ASTM).',
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
  { id: 'materials', icon: 'package', label: 'Materials', value: 'UPVC/PVC/PP-R/PEX/HDPE' },
  { id: 'virgin', icon: 'certified', label: 'Raw Materials', value: 'Top-tier' },
  { id: 'markets', icon: 'globe', label: 'Markets', value: 'GCC + Sub-continent' },
  { id: 'products', icon: 'box', label: 'Product Range', value: '5,000+ Variants' },
  { id: 'standards', icon: 'shield', label: 'Standards', value: 'BS EN • DIN • ISO • ASTM' },
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
    title: 'ISO 45001 & International Standards',
    description: 'Achieved ISO 45001:2018 Occupational Health & Safety certification and expanded international standards compliance, enabling broader market access.',
    stats: [
      { label: 'Certifications', value: 'ISO 45001' },
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
  { id: 'uae', name: 'United Arab Emirates', code: 'UAE', note: 'Headquarters & manufacturing hub in Umm Al Quwain', active: true },
  { id: 'ksa', name: 'Saudi Arabia', code: 'KSA', note: 'Major export market, ISO certified products' },
  { id: 'oman', name: 'Oman', code: 'OMN', note: 'Infrastructure & irrigation projects' },
  { id: 'qatar', name: 'Qatar', code: 'QAT', note: 'Construction & development sector' },
  { id: 'bahrain', name: 'Bahrain', code: 'BHR', note: 'Building & plumbing applications' },
  { id: 'kuwait', name: 'Kuwait', code: 'KWT', note: 'Municipal & industrial piping' },
  { id: 'other', name: 'Sub-continent & Other', code: 'INT', note: 'Export markets across Asia & Africa' },
];

export const certifications: Certification[] = [
  { id: 'nsf', code: 'NSF Certified', name: 'NSF Certification', scope: '', issuingBody: '', benefit: '', icon: 'certified' },
  { id: 'iso9001', code: 'ISO 9001:2015', name: 'Quality Management', scope: '', issuingBody: '', benefit: '', icon: 'certified' },
  { id: 'iso14001', code: 'ISO 14001:2015', name: 'Environmental Management', scope: '', issuingBody: '', benefit: '', icon: 'eco' },
  { id: 'iso45001', code: 'ISO 45001:2018', name: 'Occupational Health & Safety', scope: '', issuingBody: '', benefit: '', icon: 'shield' },
  { id: 'ohsas', code: 'OHSAS 18001:2007', name: 'Occupational Health & Safety', scope: '', issuingBody: '', benefit: '', icon: 'shield' },
  { id: 'bs_en_1452_2', code: 'BS EN 1452-2:2009', name: 'Pressure Pipe Systems', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'din_8061', code: 'DIN 8061:2009', name: 'PVC-U Pipe Quality', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'din_8062', code: 'DIN 8062:2009', name: 'PVC-U Pipe Dimensions', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'saso_14', code: 'SASO 14', name: 'Saudi Potable Water Pipes', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'saso_15', code: 'SASO 15', name: 'Saudi PVC Testing', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'iso_4422_2', code: 'ISO 4422-2', name: 'PVC Water Supply', scope: '', issuingBody: '', benefit: '', icon: 'certified' },
  { id: 'astm_d_1785', code: 'ASTM D 1785', name: 'PVC Pipe SCH40/80', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'astm_d_2241', code: 'ASTM D 2241', name: 'PVC SDR Pressure Pipe', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'astm_d_2467', code: 'ASTM D 2467', name: 'PVC Fittings SCH80', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'astm_d_2466', code: 'ASTM D 2466', name: 'PVC Fittings SCH40', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'astm_d_2464', code: 'ASTM D 2464', name: 'Threaded PVC Fittings', scope: '', issuingBody: '', benefit: '', icon: 'award' },
  { id: 'bs_3505', code: 'BS 3505:1986', name: 'PVC-U Cold Potable Water', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'bs_3506', code: 'BS 3506:1969', name: 'PVC Industrial Pipes', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'bs_4346', code: 'BS 4346:1982', name: 'PVC Joints & Fittings', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'din_8063', code: 'DIN 8063:2009', name: 'PVC-U Pressure Fittings', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'bs_en_1329_1', code: 'BS EN 1329-1:2014', name: 'Soil & Waste Discharge', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'bs_en_1401_1', code: 'BS EN 1401-1:2009', name: 'Underground Drainage', scope: '', issuingBody: '', benefit: '', icon: 'document' },
  { id: 'bs_en_61386_1', code: 'BS EN 61386-1:2008', name: 'Cable Conduit Systems', scope: '', issuingBody: '', benefit: '', icon: 'cog' },
  { id: 'bs_4607_1', code: 'BS 4607-1:1984', name: 'Non-Metallic Conduits', scope: '', issuingBody: '', benefit: '', icon: 'cog' },
];

export const standards: Standard[] = [
  { code: 'NSF Certified', description: 'Ensures products meet strict public health and safety standards for water treatment and distribution.' },
  { code: 'ISO 9001:2015', description: 'International standard for Quality Management Systems (QMS), ensuring consistent product quality and customer satisfaction.' },
  { code: 'ISO 14001:2015', description: 'Specifies requirements for an environmental management system, minimizing environmental impact and promoting industrial sustainability.' },
  { code: 'ISO 45001:2018', description: 'Global standard for occupational health and safety, providing a safe working environment and preventing workplace injuries.' },
  { code: 'OHSAS 18001:2007', description: 'Internationally recognized standard for occupational health and safety management systems.' },
  { code: 'BS EN 1452-2:2009', description: 'Plastics piping systems for water supply and for buried and above-ground drainage and sewerage under pressure. Unplasticized poly(vinyl chloride) (PVC U). Pipes' },
  { code: 'DIN 8061: 2009', description: 'Unplasticized polyvinyl chloride (PVC-U) pipes - General quality requirements and testing' },
  { code: 'DIN 8062: 2009', description: 'Unplasticized polyvinyl chloride (PVC-U) pipes - Dimensions' },
  { code: 'SASO 14', description: 'Pipes for Potable Water of Unplasticized Plastic (Poly Vinyl Chloride)' },
  { code: 'SASO 15', description: 'Methods of Testing of Unplasticized Polyvinyl Chloride (UPVC) Pipes for Potable Water' },
  { code: 'ISO 4422-2', description: 'uPVC Pipes and fittings for water supply Superseded by ISO 1452-2/ BS EN ISO 1452' },
  { code: 'ASTM D 1785', description: 'Standard Specification for Poly(Vinyl Chloride) (PVC) Plastic Pipe, Schedules 40, 80, and 120' },
  { code: 'ASTM D 2241', description: 'Standard Specification for Poly(Vinyl Chloride) (PVC) Pressure-Rated Pipe (SDR Series)' },
  { code: 'ASTM D 2467', description: 'Standard Specification for Poly(Vinyl Chloride) (PVC) Plastic Pipe Fittings, Schedule 80' },
  { code: 'ASTM D 2466', description: 'Standard Specification for Poly(Vinyl Chloride) (PVC) Plastic Pipe Fittings, Schedule 40' },
  { code: 'ASTM D 2464', description: 'Standard Specification for Threaded Poly(Vinyl Chloride) (PVC) Plastic Pipe Fittings, Schedule 80' },
  { code: 'BS 3505: 1986', description: 'Specification for unplasticized polyvinyl chloride (PVC-U) pressure pipes for cold potable water' },
  { code: 'BS 3506: 1969', description: 'Specification for unplasticized PVC pipe for industrial uses' },
  { code: 'BS 4346: 1982', description: 'Joints and fittings for use with unplasticized PVC pressure pipes. Specification for solvent cement' },
  { code: 'DIN 8063: 2009', description: 'Pipe joint assemblies and fittings for unplasticized polyvinyl chloride (PVC-U) pressure pipes; bushings, flanges, seals; dimensions' },
  { code: 'BS EN 1329-1:2014', description: 'Plastics piping systems for soil and waste discharge (low and high temperature) within the building structure. Unplasticized poly(vinyl chloride) (PVC-U). Specifications for pipes, fittings and the system' },
  { code: 'BS EN 1401-1:2009', description: 'Plastic piping systems for non-pressure underground drainage and sewerage. Unplasticized poly(vinyl chloride) (PVC-U). Specifications for pipes, fittings and the system' },
  { code: 'BS EN 61386-1:2008', description: 'Conduit systems for cable management. General requirements' },
  { code: 'BS 4607-1:1984+A2:2010', description: 'Non-metallic conduits and fittings for electrical installations. Specification for fittings and components of insulating material' },
];

export const innovationPillars: InnovationPillar[] = [
  {
    id: 'virgin-material',
    title: 'Top-tier Raw Material',
    description: 'All pipes manufactured from premium virgin uPVC compound, ensuring maximum strength, durability, and chemical resistance.',
    icon: 'certified',
    specs: [
      { property: 'Material Grade', value: 'Top-tier' },
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
    description: 'Third-party testing by accredited international laboratories confirms compliance with BS EN, DIN, ISO, NFS, and ASTM specifications.',
    icon: 'lab',
    specs: [
      { property: 'Accreditation', value: 'Certified' },
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
