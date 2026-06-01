import { type ProductDetailConfig, type DosDonts, type Fitting } from '@/types/productDetail';

export const solventsList: Fitting[] = [
  {
    id: 'solvent-125ml',
    name: '125 ml / 4 Fl. Oz',
    family: 'solvent-cement',
    image: '/images/fittings/solvent/125ml.png',
    sizes: [],
    isDisplayOnly: true,
  },
  {
    id: 'solvent-250ml',
    name: '250 ml / 8 Fl. Oz',
    family: 'solvent-cement',
    image: '/images/fittings/solvent/250ml.png',
    sizes: [],
    isDisplayOnly: true,
  },
  {
    id: 'solvent-500ml',
    name: '500 ml / 16 Fl. Oz - 1 Pint',
    family: 'solvent-cement',
    image: '/images/fittings/solvent/500ml.png',
    sizes: [],
    isDisplayOnly: true,
  },
];

const solventDosDonts: DosDonts = {
  dos: [
    'Stir before use',
    'Use the correct applicator size',
    'Apply primer before cementing',
  ],
  donts: [
    'Do not thin with primer or other solvents',
    'Do not use on wet pipes',
  ],
};

const solventDosDontsAr: DosDonts = {
  dos: [
    'حرك العبوة جيداً قبل الاستخدام',
    'استخدم أداة التطبيق ذات الحجم المناسب',
    'ضع البرايمر التحضيري قبل الأسمنت',
  ],
  donts: [
    'لا تخفف باستخدام البرايمر أو أي مذيبات أخرى',
    'لا تستخدم على الأنابيب المبللة',
  ],
};

export const pvcSolventDetailConfig: ProductDetailConfig = {
  slug: 'pvc-solvents',
  categorySlug: 'solvents',
  title: 'Crown Weld Heavy Duty PVC Solvent Cement',
  titleAr: 'الأسمنت المذيب PVC فائق القوة من كراون ويلد',
  shortDescription: 'PVC solvent cements for secure and durable pipe joints.',
  shortDescriptionAr: 'أسمنت مذيب PVC للوصلات الآمنة والمتينة.',
  overview: 'A premium, high-strength, clear, heavy-body PVC solvent cement formulated for secure and durable pipe joints. Exceeds ASTM D 2564 standards. Suitable for pipes up to 8 inches in diameter.',
  overviewAr: 'أسمنت مذيب PVC شديد القوة وشفاف وكثيف القوام، مركب للحصول على وصلات أنابيب آمنة ومتينة. يتجاوز معايير ASTM D 2564. مناسب للأنابيب بقطر يصل إلى 8 بوصات.',
  features: [
    'Heavy Body Viscosity',
    'Fast Setting Time',
    'High-Strength Bond',
    'ASTM D 2564 Certified',
    'Raw Materials from U.S.A.',
  ],
  featuresAr: [
    'كثافة وقوام ثقيل',
    'وقت جفاف سريع',
    'تثبيت عالي القوة',
    'معتمد حسب معيار ASTM D 2564',
    'مواد خام من الولايات المتحدة الأمريكية',
  ],
  applications: [
    'Industrial piping',
    'Irrigation systems',
    'Electrical conduits',
    'Pool and plumbing',
    'PVC foam core pipes',
  ],
  applicationsAr: [
    'الأنابيب الصناعية',
    'أنظمة الري',
    'التمديدات الكهربائية',
    'السباكة وحمامات السباحة',
    'أنابيب PVC ذات القلب الرغوي',
  ],
  dosDonts: solventDosDonts,
  dosDontsAr: solventDosDontsAr,
  fittings: solventsList,
  fittingsTabLabelKey: 'products.solvent.nav_label',
  pipesTables: [],
  image: '/images/products/cover/solvent/Solventcover.png',
};
