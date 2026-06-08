const fs = require('fs');
let c = fs.readFileSync('src/i18n/fr.ts', 'utf8');
const r = [
  // about.products.categories descriptions
  ["description: 'Above-ground and underground drainage pipe systems certified to BS EN 1329-1:2014 and BS EN 1401-1.',", "description: 'Systèmes de tuyauterie d\\'évacuation aérienne et enterrée certifiés BS EN 1329-1:2014 et BS EN 1401-1.',"],
  ["info: 'Above-ground soil and waste discharge drainage pipes certified to BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014.',", "info: 'Tuyaux d\\'évacuation aérienne eaux usées certifiés BS 5255/BS EN 1329-1:2014 et BS 4514/BS EN 1329-1:2014.',"],
  ["info: 'Underground drainage pipes certified to BS EN 1401-1 (supersedes BS 4660 & BS 5481).',", "info: 'Tuyaux d\\'évacuation enterrée certifiés BS EN 1401-1 (remplace BS 4660 et BS 5481).',"],
  ["info: 'Non-standard UPVC drainage pipes for specialized project requirements.',", "info: 'Tuyaux d\\'évacuation UPVC non standard pour exigences de projets spécialisés.',"],
  ["description: 'Drainage fittings certified to BS EN 1329-1:2014 and BS EN 1401, including push-fit solutions.',", "description: 'Raccords d\\'évacuation certifiés BS EN 1329-1:2014 et BS EN 1401, y compris les solutions à emboîtement.',"],
  ["info: 'Above-ground drainage fittings certified to BS EN 1329-1:2014 (supersedes BS 5255 & BS 4514).',", "info: 'Raccords d\\'évacuation aérienne certifiés BS EN 1329-1:2014 (remplace BS 5255 et BS 4514).',"],
  ["info: 'Underground drainage fittings certified to BS EN 1401 (supersedes BS 4660 & BS 5481).',", "info: 'Raccords d\\'évacuation enterrée certifiés BS EN 1401 (remplace BS 4660 et BS 5481).',"],
  ["info: 'Push-fit drainage fittings for quick-connect above-ground soil & waste systems.',", "info: 'Raccords d\\'évacuation à emboîtement rapide pour les systèmes aériens eaux usées.',"],
  ["description: 'High pressure PVC pipes in ISO, DIN, BS, and ASTM standards for potable water and industrial applications.',", "description: 'Tuyaux PVC haute pression selon les normes ISO, DIN, BS et ASTM pour l\\'eau potable et les applications industrielles.',"],
  ["description: 'High pressure PVC fittings and valves in DIN 8063 and BS EN 1452:3/BS 4346 standards.',", "description: 'Raccords et vannes PVC haute pression selon les normes DIN 8063 et BS EN 1452:3/BS 4346.',"],
  ["description: 'Schedule 40 PVC pressure fittings to ASTM D 2466 standard.',", "description: 'Raccords pression PVC Schedule 40 selon la norme ASTM D 2466.',"],
  ["description: 'Underground cable protection duct systems in NEMA, DIN, and BS standards, including Etisalat & DU approved.',", "description: 'Systèmes de gaines enterrées pour protection de câbles selon les normes NEMA, DIN et BS, y compris homologation Etisalat et DU.',"],
  ["info: 'Non-standard duct pipes for specialized projects", "info: 'Tuyaux de gaine non standard pour projets spécialisés"],
  ["description: 'Duct fittings for underground cable protection systems.',", "description: 'Raccords de gaine pour systèmes enterrés de protection de câbles.',"],
  ["info: 'Standard PVC duct socket for connecting duct pipe sections", "info: 'Manchon de gaine PVC standard pour raccorder les sections de tuyaux"],
  ["info: 'Weatherproof end caps for sealing and protecting open duct ends on UAE sites.',", "info: 'Bouchons étanches pour sceller et protéger les extrémités de gaine ouvertes sur les chantiers EAU.',"],
  ["info: 'Long radius 90° and 45° bends for smooth directional changes in underground duct runs.',", "info: 'Coudes à grand rayon 90° et 45° pour des changements de direction fluides dans les parcours de gaines enterrées.',"],
  ["info: '90° long radius bends for street lighting conduit", "info: 'Coudes à grand rayon 90° pour conduits d\\'éclairage public"],
  ["info: '90° long radius bends for lightning protection and earthing conduit systems.',", "info: 'Coudes à grand rayon 90° pour les systèmes de conduits de protection foudre et mise à la terre.',"],
  ["description: 'Rigid PVC electrical conduit pipes for building wiring systems. Available in compression force ratings and Schedule 40/80.',", "description: 'Tuyaux conduit PVC rigides pour systèmes de câblage de bâtiments. Disponibles en classes de résistance à la compression et Schedule 40/80.',"],
  ["description: 'Polypropylene Random pipes for hot and cold potable water. PN10-PN25 rated, DIN 8077/78 certified.',", "description: 'Tuyaux en polypropylène random pour eau potable chaude et froide. Classés PN10-PN25, certifiés DIN 8077/78.',"],
  ["description: 'High-density polyethylene pipes for irrigation, water distribution, and agricultural applications. PE63/80/100 grades.',", "description: 'Tuyaux en polyéthylène haute densité pour l\\'irrigation, la distribution d\\'eau et les applications agricoles. Grades PE63/80/100.',"],
  ["description: 'Cross-linked polyethylene pipes for hot and cold water distribution. PN 12.5 & PN 20 rated.',", "description: 'Tuyaux en polyéthylène réticulé pour la distribution d\\'eau chaude et froide. Classés PN 12.5 et PN 20.',"],
  ["description: 'Custom PVC/UPVC fabrications including Dubai Municipality approved grease traps and specialty accessories.',", "description: 'Fabrications PVC/UPVC sur mesure, y compris des séparateurs de graisse approuvés par la municipalité de Dubaï et des accessoires spécialisés.',"],
  ["description: 'PVC solvent cements for secure and durable pipe joints.',", "description: 'Colles solvant PVC pour des joints de tuyaux sûrs et durables.',"],
  // Duplicate keys in products.category and products.detail
  ["explore_range: 'Explore our complete range of products in this category.',", "explore_range: 'Explorez notre gamme complète de produits dans cette catégorie.',"],
  ["built_to_last_desc: '50+ year projected lifespan with corrosion-free performance in the harshest Gulf conditions.',", "built_to_last_desc: 'Durée de vie projetée de 50+ ans avec une performance sans corrosion dans les conditions les plus rudes du Golfe.',"],
  ["need_assistance: 'Need Technical Assistance?',", "need_assistance: 'Besoin d\\'Assistance Technique ?',"],
  ["assistance_desc: 'Our engineering team is here to help with product selection, technical queries, and project support.',", "assistance_desc: 'Notre équipe d\\'ingénierie est là pour vous aider dans la sélection des produits, les questions techniques et le support de projet.',"],
  ["view_all_products: 'View All Products',", "view_all_products: 'Voir Tous les Produits',"],
  ["tech_data_eyebrow: 'Technical Data',", "tech_data_eyebrow: 'Données Techniques',"],
  ["overview_title: 'Overview',", "overview_title: 'Présentation',"],
  ["features_title: 'Features',", "features_title: 'Caractéristiques',"],
  ["video_title: 'Product Video',", "video_title: 'Vidéo du Produit',"],
  ["nav_label: 'Solvents',", "nav_label: 'Colles et Solvants',"],
  ["info: 'BS 1972/67 | British standard',", "info: 'BS 1972/67 | Norme britannique',"],
  ["info: 'DIN 8072 | German standard',", "info: 'DIN 8072 | Norme allemande',"],
  // Fabrication second SEO duplicate
  ["hero_subtext: 'Custom-fabricated piping components and accessories manufactured in the UAE for specialized infrastructure projects.',", "hero_subtext: 'Composants de tuyauterie fabriqués sur mesure et accessoires manufacturés aux EAU pour les projets d\\'infrastructure spécialisés.',"],
  // detail_layout
  ["downloads_subtitle: 'Access comprehensive technical catalogues, dimensional specifications, and compliance documentation for',", "downloads_subtitle: 'Accédez aux catalogues techniques complets, spécifications dimensionnelles et documentation de conformité pour',"],
];

let n = 0;
r.forEach(([e, f]) => {
  if (c.includes(e)) {
    c = c.replace(e, f);
    n++;
  }
});

fs.writeFileSync('src/i18n/fr.ts', c);
console.log('Round 5: Applied ' + n + ' translations');
