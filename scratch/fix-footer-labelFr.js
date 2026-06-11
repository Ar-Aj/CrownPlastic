/**
 * fix-footer-labelFr.js
 *
 * Adds labelFr to all footer link entries that are still missing it.
 * Uses a context-aware approach: if a line contains "labelAr: 'X', href:" without
 * "labelFr:", inject the French translation.
 */
const fs = require('fs');

const file = 'src/config/routes.ts';
let content = fs.readFileSync(file, 'utf8');

const translations = {
  'الابتكار': 'Innovation',
  'الجودة والشهادات': 'Qualité et Certifications',
  'أنابيب الصرف UPVC': 'Tuyaux de Drainage UPVC',
  'وصلات الصرف UPVC': 'Raccords de Drainage UPVC',
  'أنابيب الضغط العالي PVC': 'Tuyaux PVC Haute Pression',
  'وصلات الضغط العالي PVC': 'Raccords PVC Haute Pression',
  'وصلات PVC جدول 40': 'Raccords PVC SCH 40',
  'أنابيب مجاري PVC': 'Tuyaux de Gaine PVC',
  'وصلات مجاري PVC': 'Raccords de Gaine PVC',
  'أنابيب القنوات PVC': 'Tuyaux Conduit PVC',
  'أنابيب PP-R': 'Tuyaux PP-R',
  'أنابيب HDPE': 'Tuyaux HDPE',
  'أنابيب PEX': 'Tuyaux PEX',
  'التصنيعات والإكسسوارات': 'Fabrications et Accessoires',
  'المذيبات': 'Colles et Solvants',
  'دليل BS EN 1452': 'Guide BS EN 1452',
  'دليل التركيب': 'Guide d\\\'Installation',
  'الجودة وشهادات ISO': 'Qualité et Certifications ISO',
  'دليل حجم الأنابيب': 'Guide Dimensionnement',
  // Market cities (handled by t() hook, but adding for completeness)
  'الرياض': 'Riyad',
  'جدة': 'Djeddah',
  'دبي': 'Dubaï',
  'أبوظبي': 'Abou Dabi',
  'الشارقة': 'Charjah',
  'عجمان': 'Ajman',
  'أم القيوين': 'Oumm al Qaïwaïn',
  'رأس الخيمة': 'Ras el Khaïmah',
  'الفجيرة': 'Fujaïrah',
  'مدينة الكويت': 'Koweït',
  'الدوحة': 'Doha',
  'المنامة': 'Manama',
  'مسقط': 'Mascate',
};

// Find all occurrences of "labelAr: 'X', href:" without labelFr and inject
for (const [ar, fr] of Object.entries(translations)) {
  const pattern = new RegExp(
    `labelAr: '${ar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*href:`,
    'g'
  );
  content = content.replace(pattern, (match) => {
    return `labelAr: '${ar}', labelFr: '${fr}', href:`;
  });
}

fs.writeFileSync(file, content, 'utf8');

const frLabels = (content.match(/labelFr:/g) || []).length;
const frTitles = (content.match(/titleFr:/g) || []).length;
const frDescs = (content.match(/descriptionFr:/g) || []).length;

// Check any remaining lines missing labelFr
const lines = content.split('\n');
const missing = lines.filter(l => l.includes('labelAr:') && l.includes('href:') && !l.includes('labelFr:'));
console.log(`✅ Footer labelFr injection complete`);
console.log(`   labelFr: ${frLabels}, titleFr: ${frTitles}, descriptionFr: ${frDescs}`);
console.log(`   Lines still missing labelFr: ${missing.length}`);
if (missing.length > 0) {
  missing.forEach(l => console.log('   MISS: ' + l.trim().substring(0, 100)));
}
