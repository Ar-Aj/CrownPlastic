/**
 * fr.ts Mass Translation Script - Round 4 (CRLF-safe)
 * Handles remaining category_overrides SEO + remaining product categories + detail_layout
 */
const fs = require('fs');
let content = fs.readFileSync('src/i18n/fr.ts', 'utf8');

// Simple per-line replacements - more robust than multi-line matches
const lineReplacements = [
  // SEO Category Overrides
  [`meta_title: 'PVC Pressure Pipes / Fittings in UAE | Crown Plastic Manufacturer',`, `meta_title: 'Tuyaux / Raccords PVC Pression aux EAU | Fabricant Crown Plastic',`],
  [`h1: 'PVC Pressure Pipes / Fittings in UAE',`, `h1: 'Tuyaux / Raccords PVC Pression aux EAU',`],
  [`hero_subtext: 'Leading manufacturer of high-pressure PVC fluid distribution systems serving Dubai, Sharjah, Abu Dhabi, and the GCC.',`, `hero_subtext: 'Fabricant leader de systèmes de distribution de fluides PVC haute pression desservant Dubaï, Charjah, Abou Dabi et le CCG.',`],
  [`q: 'What is the difference between PN10 and PN16 uPVC Pipes / Fittings?',`, `q: 'Quelle est la différence entre les Tuyaux / Raccords uPVC PN10 et PN16 ?',`],
  [`a: 'PN10 uPVC pipes are rated for 10 bar pressure, ideal for standard water distribution, while PN16 pipes withstand 16 bar, making them suitable for high-pressure industrial applications and high-rise plumbing in the UAE.',`, `a: 'Les tuyaux uPVC PN10 sont calibrés pour une pression de 10 bar, idéaux pour la distribution d\\'eau standard, tandis que les tuyaux PN16 résistent à 16 bar, les rendant adaptés aux applications industrielles haute pression et à la plomberie en hauteur aux EAU.',`],
  [`q: 'What international standards do Crown Plastic uPVC pressure Pipes / Fittings comply with?',`, `q: 'À quelles normes internationales les Tuyaux / Raccords uPVC pression Crown Plastic sont-ils conformes ?',`],
  [`a: 'Crown Plastic uPVC pressure Pipes / Fittings are manufactured to BS EN 1452, DIN 8061/62, ISO 4422-2, ASTM D 1785, and BS 3505/3506 standards. Our ISO 9001:2015 certified facility in Umm Al Quwain ensures consistent quality for GCC infrastructure projects.',`, `a: 'Les Tuyaux / Raccords uPVC pression Crown Plastic sont fabriqués selon les normes BS EN 1452, DIN 8061/62, ISO 4422-2, ASTM D 1785 et BS 3505/3506. Notre installation certifiée ISO 9001:2015 à Oumm al Qaïwaïn garantit une qualité constante pour les projets d\\'infrastructure du CCG.',`],
  [`q: 'What sizes are available for uPVC pressure Pipes / Fittings in the UAE?',`, `q: 'Quelles tailles sont disponibles pour les Tuyaux / Raccords uPVC pression aux EAU ?',`],
  [`a: 'Crown Plastic manufactures uPVC pressure Pipes / Fittings from 20 mm to 400 mm in metric sizes`, `a: 'Crown Plastic fabrique des Tuyaux / Raccords uPVC pression de 20 mm à 400 mm en tailles métriques`],

  // PVC HP Fittings
  [`meta_title: 'uPVC Pressure Pipes / Fittings in UAE | Crown Plastic Manufacturer',`, `meta_title: 'Raccords Pression uPVC aux EAU | Fabricant Crown Plastic',`],
  [`h1: 'uPVC Pressure Pipes / Fittings in UAE',`, `h1: 'Raccords Pression uPVC aux EAU',`],
  [`hero_subtext: 'Leading manufacturer of high-pressure uPVC fluid distribution systems serving Dubai, Sharjah, Abu Dhabi, and the GCC.',`, `hero_subtext: 'Fabricant leader de systèmes de distribution de fluides uPVC haute pression desservant Dubaï, Charjah, Abou Dabi et le CCG.',`],
  [`q: 'What types of uPVC pressure fittings does Crown Plastic manufacture?',`, `q: 'Quels types de raccords pression uPVC Crown Plastic fabrique-t-il ?',`],
  [`a: 'Crown Plastic produces a comprehensive range of uPVC pressure fittings including elbows, tees, reducers, couplings, end caps, and ball valves. Available in DIN 8063, BS EN 1452-3, and ASTM D2466 standards for complete system compatibility.',`, `a: 'Crown Plastic produit une gamme complète de raccords pression uPVC incluant coudes, tés, réducteurs, manchons, bouchons et vannes à bille. Disponibles selon les normes DIN 8063, BS EN 1452-3 et ASTM D2466 pour une compatibilité système complète.',`],
  [`q: 'Are solvent cement joints or threaded joints recommended for uPVC pressure Pipes / Fittings?',`, `q: 'Les joints à colle solvant ou les joints filetés sont-ils recommandés pour les Tuyaux / Raccords uPVC pression ?',`],
  [`a: 'Solvent cement joints are recommended for uPVC pressure systems as they create permanent, high-strength connections rated up to PN 25. Threaded connections are used where disassembly is required, typically with brass-insert fittings for transitions to metallic systems.',`, `a: 'Les joints à colle solvant sont recommandés pour les systèmes uPVC pression car ils créent des connexions permanentes haute résistance calibrées jusqu\\'à PN 25. Les connexions filetées sont utilisées lorsque le démontage est nécessaire, généralement avec des raccords à insert laiton pour les transitions vers les systèmes métalliques.',`],

  // SCH 40  
  [`h1: 'PVC Schedule 40 Pipes / Fittings in UAE',`, `h1: 'Raccords PVC Schedule 40 aux EAU',`],
  [`hero_subtext: 'Heavy-duty SCH 40 pressure fittings for potable water and industrial fluid transport across the UAE and GCC.',`, `hero_subtext: 'Raccords pression SCH 40 haute résistance pour le transport d\\'eau potable et de fluides industriels dans les EAU et le CCG.',`],

  // Drainage Pipes
  [`meta_title: 'UPVC Drainage Pipes / Fittings in Dubai & UAE | Crown Plastic',`, `meta_title: 'Tuyaux / Raccords d\\'Évacuation UPVC à Dubaï et EAU | Crown Plastic',`],
  [`h1: 'UPVC Drainage Pipes / Fittings for UAE Projects',`, `h1: 'Tuyaux / Raccords d\\'Évacuation UPVC pour les Projets EAU',`],
  [`hero_subtext: 'Top-tier acoustic and standard drainage solutions engineered for the UAE climate. Trusted by MEP contractors across the Middle East.',`, `hero_subtext: 'Solutions d\\'évacuation acoustiques et standard de premier ordre conçues pour le climat des EAU. Approuvées par les entrepreneurs CVC à travers le Moyen-Orient.',`],
  [`q: 'Are UPVC drainage Pipes / Fittings suitable for the harsh UAE climate?',`, `q: 'Les Tuyaux / Raccords d\\'évacuation UPVC sont-ils adaptés au climat rigoureux des EAU ?',`],
  [`a: 'Yes, our UPVC drainage systems are engineered with high UV resistance and structural integrity to withstand extreme temperatures, highly saline soils, and harsh environmental conditions typical in the GCC.',`, `a: 'Oui, nos systèmes d\\'évacuation UPVC sont conçus avec une haute résistance UV et une intégrité structurelle pour résister aux températures extrêmes, aux sols fortement salins et aux conditions environnementales difficiles typiques du CCG.',`],
  [`q: 'What is the difference between BS EN 1329 and BS EN 1401 drainage Pipes / Fittings?',`, `q: 'Quelle est la différence entre les Tuyaux / Raccords d\\'évacuation BS EN 1329 et BS EN 1401 ?',`],
  [`a: 'BS EN 1329 covers above-ground soil and waste discharge pipes used inside buildings, while BS EN 1401 is designed for underground non-pressure drainage and sewerage. Crown Plastic manufactures Pipes / Fittings to both standards for complete drainage system solutions in the UAE.',`, `a: 'BS EN 1329 couvre les tuyaux d\\'évacuation aérienne des eaux usées à l\\'intérieur des bâtiments, tandis que BS EN 1401 est conçu pour l\\'évacuation enterrée sans pression et l\\'assainissement. Crown Plastic fabrique des Tuyaux / Raccords selon les deux normes pour des solutions complètes de systèmes d\\'évacuation aux EAU.',`],
  [`q: 'What jointing method is used for UPVC drainage Pipes / Fittings?',`, `q: 'Quelle méthode d\\'assemblage est utilisée pour les Tuyaux / Raccords d\\'évacuation UPVC ?',`],
  [`a: 'UPVC drainage Pipes / Fittings use solvent cement welding for above-ground installations (BS EN 1329), which creates permanent, leak-proof joints. Underground systems (BS EN 1401) typically use push-fit rubber ring joints that allow thermal expansion and easy assembly.',`, `a: 'Les Tuyaux / Raccords d\\'évacuation UPVC utilisent le soudage à la colle solvant pour les installations aériennes (BS EN 1329), créant des joints permanents et étanches. Les systèmes enterrés (BS EN 1401) utilisent généralement des joints à emboîtement avec bague en caoutchouc permettant la dilatation thermique et un assemblage facile.',`],

  // Drainage Fittings
  [`q: 'What types of UPVC drainage fittings are available from Crown Plastic?',`, `q: 'Quels types de raccords d\\'évacuation UPVC sont disponibles chez Crown Plastic ?',`],
  [`a: 'Crown Plastic supplies a full range of UPVC drainage fittings including bends (45°`, `a: 'Crown Plastic fournit une gamme complète de raccords d\\'évacuation UPVC incluant coudes (45°`],

  // Duct Pipes
  [`meta_title: 'uPVC Conduit & Duct Pipes / Fittings | UAE Manufacturer',`, `meta_title: 'Tuyaux / Raccords Conduit et Gaine uPVC | Fabricant EAU',`],
  [`h1: 'uPVC Conduit and Duct Pipes / Fittings',`, `h1: 'Tuyaux / Raccords Conduit et Gaine uPVC',`],
  [`hero_subtext: 'Durable electrical and telecom conduit systems compliant with local and international standards.',`, `hero_subtext: 'Systèmes de conduits électriques et télécom durables conformes aux normes locales et internationales.',`],
  [`q: 'What standards do Crown Plastic PVC duct Pipes / Fittings meet?',`, `q: 'À quelles normes les Tuyaux / Raccords de gaine PVC Crown Plastic répondent-ils ?',`],
  [`a: 'Crown Plastic PVC duct Pipes / Fittings comply with NEMA TC 2, NEMA TC 6/8, DIN 8062, and Etisalat/du specifications. This ensures compatibility with all major UAE telecom and electrical infrastructure projects.',`, `a: 'Les Tuyaux / Raccords de gaine PVC Crown Plastic sont conformes aux normes NEMA TC 2, NEMA TC 6/8, DIN 8062, et aux spécifications Etisalat/du. Cela garantit la compatibilité avec tous les grands projets d\\'infrastructure télécom et électrique des EAU.',`],

  // Duct Fittings
  [`h1: 'uPVC Duct Pipes / Fittings',`, `h1: 'Raccords de Gaine uPVC',`],
  [`hero_subtext: 'Durable electrical and telecom duct fittings compliant with local and international standards.',`, `hero_subtext: 'Raccords de gaine électriques et télécom durables conformes aux normes locales et internationales.',`],
  
  // Conduit Pipes  
  [`h1: 'uPVC Conduit Pipes / Fittings',`, `h1: 'Tuyaux Conduit uPVC',`],
  [`hero_subtext: 'Durable electrical conduit systems compliant with local and international standards.',`, `hero_subtext: 'Systèmes de conduits électriques durables conformes aux normes locales et internationales.',`],

  // PPR
  [`meta_title: 'PPR Hot & Cold Water Pipes / Fittings in UAE | Manufacturer',`, `meta_title: 'Tuyaux / Raccords PPR Eau Chaude et Froide aux EAU | Fabricant',`],
  [`h1: 'PPR Hot & Cold Water Pipes / Fittings',`, `h1: 'Tuyaux / Raccords PPR Eau Chaude et Froide',`],
  [`hero_subtext: 'Premium PPR plumbing systems for residential and commercial water supply in the UAE.',`, `hero_subtext: 'Systèmes de plomberie PPR premium pour l\\'alimentation en eau résidentielle et commerciale aux EAU.',`],
  [`q: 'What is the maximum temperature PPR Pipes / Fittings can handle?',`, `q: 'Quelle est la température maximale que les Tuyaux / Raccords PPR peuvent supporter ?',`],
  [`a: 'PPR Pipes / Fittings can handle continuous operating temperatures up to 70`, `a: 'Les Tuyaux / Raccords PPR supportent des températures de fonctionnement continues jusqu\\'à 70`],
  [`q: 'What is the difference between PPR SDR11 PN10 and SDR6 PN20 Pipes / Fittings?',`, `q: 'Quelle est la différence entre les Tuyaux / Raccords PPR SDR11 PN10 et SDR6 PN20 ?',`],
  [`a: 'PPR SDR11 PN10 pipes have a thinner wall for 10 bar applications like standard water distribution, while SDR6 PN20 pipes have thicker walls for 20 bar applications such as high-rise buildings and industrial hot water systems in the UAE.',`, `a: 'Les tuyaux PPR SDR11 PN10 ont une paroi plus fine pour les applications à 10 bar comme la distribution d\\'eau standard, tandis que les tuyaux SDR6 PN20 ont des parois plus épaisses pour les applications à 20 bar telles que les immeubles de grande hauteur et les systèmes d\\'eau chaude industriels aux EAU.',`],

  // HDPE
  [`meta_title: 'HDPE Pipes / Fittings Supplier in UAE & GCC | Crown Plastic',`, `meta_title: 'Fournisseur de Tuyaux / Raccords HDPE aux EAU et CCG | Crown Plastic',`],
  [`h1: 'HDPE Pipes / Fittings',`, `h1: 'Tuyaux / Raccords HDPE',`],
  [`hero_subtext: 'Heavy-duty HDPE infrastructure solutions manufactured in the UAE for water, gas, and industrial applications.',`, `hero_subtext: 'Solutions d\\'infrastructure HDPE haute résistance fabriquées aux EAU pour l\\'eau, le gaz et les applications industrielles.',`],
  [`q: 'What are HDPE Pipes / Fittings used for in the UAE?',`, `q: 'À quoi servent les Tuyaux / Raccords HDPE aux EAU ?',`],
  [`a: 'HDPE Pipes / Fittings are used for potable water supply, gas distribution, irrigation, industrial chemical transport, and sewerage systems across the UAE. Their flexibility, corrosion resistance, and butt-fusion jointing make them ideal for large-scale infrastructure projects.',`, `a: 'Les Tuyaux / Raccords HDPE sont utilisés pour l\\'alimentation en eau potable, la distribution de gaz, l\\'irrigation, le transport de produits chimiques industriels et les systèmes d\\'assainissement à travers les EAU. Leur flexibilité, résistance à la corrosion et assemblage par fusion bout à bout les rendent idéaux pour les projets d\\'infrastructure à grande échelle.',`],
  [`q: 'What PE grades does Crown Plastic offer for HDPE Pipes / Fittings?',`, `q: 'Quels grades PE Crown Plastic propose-t-il pour les Tuyaux / Raccords HDPE ?',`],
  [`a: 'Crown Plastic manufactures HDPE Pipes / Fittings in PE63 (5 MPa), PE80 (6.3 MPa), and PE100 (8 MPa) grades, compliant with ISO 4427, DIN 8074, and EN 12201 standards for varying pressure and performance requirements.',`, `a: 'Crown Plastic fabrique des Tuyaux / Raccords HDPE en grades PE63 (5 MPa), PE80 (6,3 MPa) et PE100 (8 MPa), conformes aux normes ISO 4427, DIN 8074 et EN 12201 pour différentes exigences de pression et de performance.',`],

  // PEX
  [`meta_title: 'PEX Pipes / Fittings Supplier in UAE | Crown Plastic',`, `meta_title: 'Fournisseur de Tuyaux / Raccords PEX aux EAU | Crown Plastic',`],
  [`h1: 'PEX Pipes / Fittings',`, `h1: 'Tuyaux / Raccords PEX',`],
  [`hero_subtext: 'High-performance PEX piping systems for hot and cold water supply, floor heating, and radiator connections in the UAE.',`, `hero_subtext: 'Systèmes de tuyauterie PEX haute performance pour l\\'alimentation en eau chaude et froide, le chauffage par le sol et les raccordements de radiateurs aux EAU.',`],
  [`q: 'What is the advantage of PEX Pipes / Fittings over copper in the UAE?',`, `q: 'Quel est l\\'avantage des Tuyaux / Raccords PEX par rapport au cuivre aux EAU ?',`],
  [`a: 'PEX Pipes / Fittings are more cost-effective, corrosion-resistant, and flexible than copper. They resist scale build-up in hard UAE water, require fewer fittings due to flexibility, and have a lifespan exceeding 50 years`, `a: 'Les Tuyaux / Raccords PEX sont plus économiques, résistants à la corrosion et flexibles que le cuivre. Ils résistent au dépôt de tartre dans l\\'eau dure des EAU, nécessitent moins de raccords grâce à leur flexibilité et ont une durée de vie dépassant 50 ans`],

  // Fabrications
  [`meta_title: 'Pipe Fabrications & Accessories in UAE | Crown Plastic',`, `meta_title: 'Fabrications et Accessoires de Tuyaux aux EAU | Crown Plastic',`],
  [`h1: 'Pipe Fabrications & Accessories',`, `h1: 'Fabrications et Accessoires de Tuyaux',`],
  [`hero_subtext: 'Custom-fabricated piping components and accessories manufactured in the UAE for specialized infrastructure projects.',`, `hero_subtext: 'Composants de tuyauterie fabriqués sur mesure et accessoires manufacturés aux EAU pour les projets d\\'infrastructure spécialisés.',`],

  // Solvents  
  [`meta_title: 'PVC Solvent Cement & Adhesives in UAE | Crown Plastic',`, `meta_title: 'Colle Solvant et Adhésifs PVC aux EAU | Crown Plastic',`],
  [`h1: 'PVC Solvent Cement & Adhesives',`, `h1: 'Colle Solvant et Adhésifs PVC',`],
  [`hero_subtext: 'Professional-grade solvent cements and jointing compounds for reliable PVC pipe connections across the UAE.',`, `hero_subtext: 'Colles solvant et composés d\\'assemblage de qualité professionnelle pour des connexions fiables de tuyaux PVC à travers les EAU.',`],

  // products.hub remaining
  [`hero_subtitle: 'Engineered for the Gulf. A complete portfolio of over 5,000 UPVC, PVC, PP-R, PEX and HDPE solutions built for decades of reliable performance in infrastructure, construction, and agriculture.',`, `hero_subtitle: 'Conçu pour le Golfe. Un portefeuille complet de plus de 5 000 solutions UPVC, PVC, PP-R, PEX et HDPE construites pour des décennies de performance fiable dans l\\'infrastructure, la construction et l\\'agriculture.',`],

  // products.detail_layout remaining
  [`crown_plastic_pipes: 'Crown Plastic Pipes',`, `crown_plastic_pipes: 'Crown Plastic Pipes',`], // Brand name stays
  [`iso_certified: 'ISO 9001:2015 Certified',`, `iso_certified: 'Certifié ISO 9001:2015',`],
  [`configurations_default: 'Product Configurations',`, `configurations_default: 'Configurations du Produit',`],
  [`dos_heading: "Do's",`, `dos_heading: "À Faire",`],
  [`donts_heading: "Don'ts",`, `donts_heading: "À Éviter",`],
  [`downloads_view_document: 'View Document',`, `downloads_view_document: 'Voir le Document',`],
  [`contact_us: 'Contact Us',`, `contact_us: 'Contactez-nous',`],
  [`view_all_resources: 'View All Resources',`, `view_all_resources: 'Voir Toutes les Ressources',`],

  // products.fitting_modal remaining
  [`tech_specifications: 'Technical Specifications',`, `tech_specifications: 'Spécifications Techniques',`],
];

let count = 0;
lineReplacements.forEach(([eng, fr]) => {
  if (content.includes(eng)) {
    content = content.replace(eng, fr);
    count++;
  }
});

fs.writeFileSync('src/i18n/fr.ts', content);
console.log(`Round 4: Applied ${count} line-level translations to fr.ts`);
