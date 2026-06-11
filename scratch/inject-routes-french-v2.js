/**
 * inject-routes-french-v2.js
 * 
 * Clean approach: read original routes.ts, build a new version with all French
 * translations injected correctly. Handles apostrophe escaping properly.
 */
const fs = require('fs');

const file = 'src/config/routes.ts';
let content = fs.readFileSync(file, 'utf8');

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1: Add labelFr to top-level nav items (multi-line objects with labelAr on own line)
// ─────────────────────────────────────────────────────────────────────────────
const topLevelFr = {
  'الرئيسية': 'Accueil',
  'من نحن': 'À Propos',
  'المنتجات': 'Produits',
  'الاستدامة': 'Durabilité',
  'الابتكار': 'Innovation',
  'الإعلام والمدونات': 'Médias et Blogs',
  'الأسواق': 'Marchés',
  'الموارد': 'Ressources',
  'اتصل بنا': 'Contact',
};

// Replace: labelAr: 'XX',\n → labelAr: 'XX', labelFr: 'YY',\n
// Only for lines that are standalone (not inline objects)
for (const [ar, fr] of Object.entries(topLevelFr)) {
  const pattern = `labelAr: '${ar}',\n`;
  const replacement = `labelAr: '${ar}', labelFr: '${fr}',\n`;
  content = content.replace(pattern, replacement);
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2: Add labelFr + descriptionFr to About children (inline objects)
// ─────────────────────────────────────────────────────────────────────────────
const aboutChildren = [
  { labelAr: 'نظرة عامة على الشركة', labelFr: 'Présentation de l\\\'Entreprise', descFr: 'Qui nous sommes, notre vision et mission' },
  { labelAr: 'مسيرتنا', labelFr: 'Notre Parcours', descFr: 'Étapes clés depuis 1995' },
  { labelAr: 'التصنيع', labelFr: 'Fabrication', descFr: 'Usine et réseau CCG' },
  { labelAr: 'الجودة والشهادات', labelFr: 'Qualité et Certifications', descFr: 'Certifications ISO et normes' },
  { labelAr: 'الابتكار', labelFr: 'Innovation', descFr: 'R&D et excellence en ingénierie' },
  { labelAr: 'مجرة منتجات كراون', labelFr: 'Galaxie des Produits Crown', descFr: '13 systèmes · 50+ produits' },
];

for (const child of aboutChildren) {
  // Add labelFr after labelAr
  content = content.replace(
    `labelAr: '${child.labelAr}', href:`,
    `labelAr: '${child.labelAr}', labelFr: '${child.labelFr}', href:`
  );
  // Add descriptionFr after descriptionAr (for About children only, which have descriptionAr)
  if (child.descFr) {
    // Find the line containing this labelFr and add descriptionFr after descriptionAr
    const re = new RegExp(
      `(labelFr: '${child.labelFr.replace(/[\\\/\[\](){}.*+?^$|]/g, '\\$&')}',.*?descriptionAr: '[^']*')`,
      'g'
    );
    content = content.replace(re, `$1, descriptionFr: '${child.descFr}'`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3: Add labelFr to Products children (inline, no descriptionAr)
// ─────────────────────────────────────────────────────────────────────────────
const productChildren = [
  ['أنابيب الصرف UPVC', 'Tuyaux de Drainage UPVC'],
  ['وصلات الصرف UPVC', 'Raccords de Drainage UPVC'],
  ['أنابيب الضغط العالي PVC', 'Tuyaux PVC Haute Pression'],
  ['وصلات الضغط العالي PVC', 'Raccords PVC Haute Pression'],
  ['وصلات PVC جدول 40', 'Raccords PVC SCH 40'],
  ['أنابيب مجاري PVC', 'Tuyaux de Gaine PVC'],
  ['وصلات مجاري PVC', 'Raccords de Gaine PVC'],
  ['أنابيب القنوات PVC', 'Tuyaux Conduit PVC'],
  ['أنابيب PP-R', 'Tuyaux PP-R'],
  ['أنابيب HDPE', 'Tuyaux HDPE'],
  ['أنابيب PEX', 'Tuyaux PEX'],
  ['التصنيعات والإكسسوارات', 'Fabrications et Accessoires'],
  ['المذيبات', 'Colles et Solvants'],
];

for (const [ar, fr] of productChildren) {
  content = content.replace(
    `labelAr: '${ar}', href:`,
    `labelAr: '${ar}', labelFr: '${fr}', href:`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 4: Add labelFr to Markets children
// ─────────────────────────────────────────────────────────────────────────────
const marketChildren = [
  ['جميع الأسواق', 'Tous les Marchés'],
  ['السعودية', 'Arabie Saoudite'],
];

for (const [ar, fr] of marketChildren) {
  content = content.replace(
    `labelAr: '${ar}', href:`,
    `labelAr: '${ar}', labelFr: '${fr}', href:`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 5: Add labelFr to Resources children
// ─────────────────────────────────────────────────────────────────────────────
const resourceChildren = [
  ['التحميلات والكتيبات', 'Téléchargements et Catalogues'],
  ['الأسئلة الشائعة التقنية', 'FAQ Techniques'],
  ['دليل BS EN 1452', 'Guide BS EN 1452'],
  ['دليل مقارنة الأنابيب', 'Guide Comparatif des Tuyaux'],
  ['دليل التركيب', 'Guide d\\\'Installation'],
  ['الجودة وشهادات ISO', 'Qualité et Certifications ISO'],
  ['حاسبة حجم الأنابيب', 'Calculateur de Diamètre de Tuyaux'],
];

for (const [ar, fr] of resourceChildren) {
  content = content.replace(
    `labelAr: '${ar}', href:`,
    `labelAr: '${ar}', labelFr: '${fr}', href:`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 6: Footer columns — add titleFr
// ─────────────────────────────────────────────────────────────────────────────
const footerTitles = [
  ['عن كراون', 'À Propos de Crown'],
  ['المنتجات', 'Produits'],
  ['الشركة', 'Entreprise'],
  ['الدعم', 'Assistance'],
  ['الأدلة التقنية', 'Guides Techniques'],
  ['مناطق الخدمة', 'Zones de Service'],
];

for (const [ar, fr] of footerTitles) {
  content = content.replace(
    `titleAr: '${ar}',\n`,
    `titleAr: '${ar}',\n    titleFr: '${fr}',\n`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 7: Footer links — add labelFr (reuse the same maps + new ones)
// ─────────────────────────────────────────────────────────────────────────────
const footerLinks = [
  // About Crown
  ['من نحن', 'À Propos', '/about-us'],
  ['الاستدامة', 'Durabilité', '/sustainability'],
  // These are already done by productChildren/resourceChildren (shared labelAr)
  // Corporate
  ['الإعلام والمدونات', 'Médias et Blogs'],
  ['الموارد', 'Ressources'],
  ['الوظائف', 'Carrières'],
  // Support
  ['اتصل بنا', 'Contactez-nous'],
  ['الأسئلة الشائعة', 'FAQ Techniques'],
  ['سياسة الخصوصية', 'Politique de Confidentialité'],
  ['خريطة الموقع', 'Plan du Site'],
  // Technical Guides
  ['مقارنة الأنابيب', 'Comparatif Tuyaux'],
  ['دليل حجم الأنابيب', 'Guide Dimensionnement'],
  // Service Areas
  ['أنابيب UPVC دبي', 'Tuyaux UPVC Dubaï'],
  ['أنابيب UPVC أبوظبي', 'Tuyaux UPVC Abou Dabi'],
  ['أنابيب UPVC الشارقة', 'Tuyaux UPVC Charjah'],
  ['أنابيب UPVC السعودية', 'Tuyaux UPVC Arabie Saoudite'],
  ['أنابيب UPVC الكويت', 'Tuyaux UPVC Koweït'],
  ['أنابيب UPVC قطر', 'Tuyaux UPVC Qatar'],
];

for (const [ar, fr] of footerLinks) {
  // Replace all occurrences of labelAr: 'AR', href: → labelAr: 'AR', labelFr: 'FR', href:
  // But only if labelFr doesn't already exist after it
  const pattern = `labelAr: '${ar}', href:`;
  const replacement = `labelAr: '${ar}', labelFr: '${fr}', href:`;
  // Replace all occurrences
  while (content.includes(pattern) && !content.includes(replacement)) {
    content = content.replace(pattern, replacement);
  }
}

fs.writeFileSync(file, content, 'utf8');

// ─── Stats ───
const frLabels = (content.match(/labelFr:/g) || []).length;
const frTitles = (content.match(/titleFr:/g) || []).length;
const frDescs = (content.match(/descriptionFr:/g) || []).length;
console.log(`✅ routes.ts — French translations injected (v2)`);
console.log(`   labelFr: ${frLabels}, titleFr: ${frTitles}, descriptionFr: ${frDescs}`);
