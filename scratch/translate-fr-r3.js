/**
 * fr.ts Mass Translation Script - Round 3
 * Covers: innovation.hero, remaining about.products UI, products.seo.category_overrides,
 * products.hub remaining, products.category remaining, products.detail_layout remaining
 */
const fs = require('fs');
let content = fs.readFileSync('src/i18n/fr.ts', 'utf8');

const translations = [
  // ── INNOVATION HERO ──────────────────────────────────────────────────
  [`title_prefix: 'Innovation in '`, `title_prefix: 'L\\'Innovation dans '`],
  [`title_highlight: 'Every Pipes / Fittings'`, `title_highlight: 'Chaque Tuyau / Raccord'`],
  [`subtitle: 'Precision extrusion technology, rigorous quality testing, and continuous improvement in formulations and tooling. We engineer Pipes / Fittings systems for long-term performance in Gulf construction and infrastructure projects.'`, `subtitle: 'Technologie d\\'extrusion de précision, tests qualité rigoureux et amélioration continue des formulations et outillages. Nous concevons des systèmes de Tuyaux / Raccords pour une performance à long terme dans les projets de construction et d\\'infrastructure du Golfe.'`],
  [`cta_primary: 'Discuss Technical Requirements'`, `cta_primary: 'Discuter des Exigences Techniques'`],
  [`cta_secondary: 'Explore Product Range'`, `cta_secondary: 'Explorer la Gamme de Produits'`],
  [`extrusion: 'Precision Extrusion'`, `extrusion: 'Extrusion de Précision'`],
  [`testing: 'Quality Testing'`, `testing: 'Tests Qualité'`],
  [`process: 'Process Optimization'`, `process: 'Optimisation des Processus'`],

  // ── REMAINING ABOUT.PRODUCTS UI KEYS ──────────────────────────────
  [`stat_compliant: 'Compliant'`, `stat_compliant: 'Conforme'`],
  [`stat_diameters: 'Diameters'`, `stat_diameters: 'Diamètres'`],
  [`tech_documents_desc: 'View detailed specifications, standards, and installation guides'`, `tech_documents_desc: 'Voir les spécifications détaillées, normes et guides d\\'installation'`],
  [`quality_certified_desc: 'All products meet international standards'`, `quality_certified_desc: 'Tous les produits répondent aux normes internationales'`],
  [`built_to_last_desc: '50+ years of service life'`, `built_to_last_desc: '50+ ans de durée de vie'`],
  [`fast_delivery_desc: 'Nationwide delivery available'`, `fast_delivery_desc: 'Livraison nationale disponible'`],
  [`assistance_desc: 'Our team is ready to help with product selection and specifications.'`, `assistance_desc: 'Notre équipe est prête à vous aider dans la sélection des produits et les spécifications.'`],
  [`table_property: 'Property'`, `table_property: 'Propriété'`],
  [`table_value: 'Value'`, `table_value: 'Valeur'`],
  [`contact_for_specs: 'Contact for specifications'`, `contact_for_specs: 'Contactez-nous pour les spécifications'`],
  [`tech_docs_for: 'View detailed specifications, standards, and installation guides for'`, `tech_docs_for: 'Voir les spécifications détaillées, normes et guides d\\'installation pour'`],

  // ── PRODUCTS.SEO TEMPLATES ──────────────────────────────────────────
  [`hub_description: 'Explore 5,000+ UPVC, PPR, and HDPE piping solutions engineered for Gulf infrastructure. ISO 9001:2015 certified, 30+ years of manufacturing excellence.'`,
   `hub_description: 'Explorez plus de 5 000 solutions de tuyauterie UPVC, PPR et HDPE conçues pour les infrastructures du Golfe. Certifié ISO 9001:2015, 30+ ans d\\'excellence manufacturière.'`],
  [`category_description_template: 'Browse our complete range of {category}. International standards compliant. Available across the GCC.'`,
   `category_description_template: 'Parcourez notre gamme complète de {category}. Conforme aux normes internationales. Disponible dans tout le CCG.'`],
  [`product_description_template: 'Technical specifications, dimensions, and ordering information for {product}. {standards} compliant.'`,
   `product_description_template: 'Spécifications techniques, dimensions et informations de commande pour {product}. Conforme {standards}.'`],

  // ── PRODUCTS.SEO.CATEGORY_OVERRIDES (meta_title, h1, hero_subtext, FAQs) ──
  // PVC HP Pipes
  [`meta_title: 'PVC Pressure Pipes / Fittings in UAE | Crown Plastic Manufacturer',\n          h1: 'PVC Pressure Pipes / Fittings in UAE',\n          hero_subtext: 'Leading manufacturer of high-pressure PVC fluid distribution systems serving Dubai, Sharjah, Abu Dhabi, and the GCC.'`,
   `meta_title: 'Tuyaux / Raccords PVC Pression aux EAU | Fabricant Crown Plastic',\n          h1: 'Tuyaux / Raccords PVC Pression aux EAU',\n          hero_subtext: 'Fabricant leader de systèmes de distribution de fluides PVC haute pression desservant Dubaï, Charjah, Abou Dabi et le CCG.'`],
  [`q: 'What is the difference between PN10 and PN16 uPVC Pipes / Fittings?',\n              a: 'PN10 uPVC pipes are rated for 10 bar pressure, ideal for standard water distribution, while PN16 pipes withstand 16 bar, making them suitable for high-pressure industrial applications and high-rise plumbing in the UAE.'`,
   `q: 'Quelle est la différence entre les Tuyaux / Raccords uPVC PN10 et PN16 ?',\n              a: 'Les tuyaux uPVC PN10 sont calibrés pour une pression de 10 bar, idéaux pour la distribution d\\'eau standard, tandis que les tuyaux PN16 résistent à 16 bar, les rendant adaptés aux applications industrielles haute pression et à la plomberie en hauteur aux EAU.'`],
  [`q: 'What international standards do Crown Plastic uPVC pressure Pipes / Fittings comply with?',\n              a: 'Crown Plastic uPVC pressure Pipes / Fittings are manufactured to BS EN 1452, DIN 8061/62, ISO 4422-2, ASTM D 1785, and BS 3505/3506 standards. Our ISO 9001:2015 certified facility in Umm Al Quwain ensures consistent quality for GCC infrastructure projects.'`,
   `q: 'À quelles normes internationales les Tuyaux / Raccords uPVC pression Crown Plastic sont-ils conformes ?',\n              a: 'Les Tuyaux / Raccords uPVC pression Crown Plastic sont fabriqués selon les normes BS EN 1452, DIN 8061/62, ISO 4422-2, ASTM D 1785 et BS 3505/3506. Notre installation certifiée ISO 9001:2015 à Oumm al Qaïwaïn garantit une qualité constante pour les projets d\\'infrastructure du CCG.'`],
  [`q: 'What sizes are available for uPVC pressure Pipes / Fittings in the UAE?',\n              a: 'Crown Plastic manufactures uPVC pressure Pipes / Fittings from 20 mm to 400 mm in metric sizes and ½″ to 12″ in imperial sizes, covering pressure classes from PN 6 to PN 25 for residential, commercial, and municipal applications.'`,
   `q: 'Quelles tailles sont disponibles pour les Tuyaux / Raccords uPVC pression aux EAU ?',\n              a: 'Crown Plastic fabrique des Tuyaux / Raccords uPVC pression de 20 mm à 400 mm en tailles métriques et de ½″ à 12″ en tailles impériales, couvrant les classes de pression de PN 6 à PN 25 pour les applications résidentielles, commerciales et municipales.'`],

  // PVC HP Fittings
  [`meta_title: 'uPVC Pressure Pipes / Fittings in UAE | Crown Plastic Manufacturer',\n          h1: 'uPVC Pressure Pipes / Fittings in UAE',\n          hero_subtext: 'Leading manufacturer of high-pressure uPVC fluid distribution systems serving Dubai, Sharjah, Abu Dhabi, and the GCC.'`,
   `meta_title: 'Raccords Pression uPVC aux EAU | Fabricant Crown Plastic',\n          h1: 'Raccords Pression uPVC aux EAU',\n          hero_subtext: 'Fabricant leader de systèmes de distribution de fluides uPVC haute pression desservant Dubaï, Charjah, Abou Dabi et le CCG.'`],
  [`q: 'What types of uPVC pressure fittings does Crown Plastic manufacture?',\n              a: 'Crown Plastic produces a comprehensive range of uPVC pressure fittings including elbows, tees, reducers, couplings, end caps, and ball valves. Available in DIN 8063, BS EN 1452-3, and ASTM D2466 standards for complete system compatibility.'`,
   `q: 'Quels types de raccords pression uPVC Crown Plastic fabrique-t-il ?',\n              a: 'Crown Plastic produit une gamme complète de raccords pression uPVC incluant coudes, tés, réducteurs, manchons, bouchons et vannes à bille. Disponibles selon les normes DIN 8063, BS EN 1452-3 et ASTM D2466 pour une compatibilité système complète.'`],
  [`q: 'Are solvent cement joints or threaded joints recommended for uPVC pressure Pipes / Fittings?',\n              a: 'Solvent cement joints are recommended for uPVC pressure systems as they create permanent, high-strength connections rated up to PN 25. Threaded connections are used where disassembly is required, typically with brass-insert fittings for transitions to metallic systems.'`,
   `q: 'Les joints à colle solvant ou les joints filetés sont-ils recommandés pour les Tuyaux / Raccords uPVC pression ?',\n              a: 'Les joints à colle solvant sont recommandés pour les systèmes uPVC pression car ils créent des connexions permanentes haute résistance calibrées jusqu\\'à PN 25. Les connexions filetées sont utilisées lorsque le démontage est nécessaire, généralement avec des raccords à insert laiton pour les transitions vers les systèmes métalliques.'`],

  // SCH 40
  [`meta_title: 'uPVC Pressure Pipes / Fittings in UAE | Crown Plastic Manufacturer',\n          h1: 'PVC Schedule 40 Pipes / Fittings in UAE',\n          hero_subtext: 'Heavy-duty SCH 40 pressure fittings for potable water and industrial fluid transport across the UAE and GCC.'`,
   `meta_title: 'Raccords PVC Schedule 40 aux EAU | Fabricant Crown Plastic',\n          h1: 'Raccords PVC Schedule 40 aux EAU',\n          hero_subtext: 'Raccords pression SCH 40 haute résistance pour le transport d\\'eau potable et de fluides industriels dans les EAU et le CCG.'`],

  // UPVC Drainage Pipes
  [`meta_title: 'UPVC Drainage Pipes / Fittings in Dubai & UAE | Crown Plastic',\n          h1: 'UPVC Drainage Pipes / Fittings for UAE Projects',\n          hero_subtext: 'Top-tier acoustic and standard drainage solutions engineered for the UAE climate. Trusted by MEP contractors across the Middle East.',\n          faqs: [\n            {\n              q: 'Are UPVC drainage Pipes / Fittings suitable for the harsh UAE climate?',\n              a: 'Yes, our UPVC drainage systems are engineered with high UV resistance and structural integrity to withstand extreme temperatures, highly saline soils, and harsh environmental conditions typical in the GCC.'`,
   `meta_title: 'Tuyaux / Raccords d\\'Évacuation UPVC à Dubaï et EAU | Crown Plastic',\n          h1: 'Tuyaux / Raccords d\\'Évacuation UPVC pour les Projets EAU',\n          hero_subtext: 'Solutions d\\'évacuation acoustiques et standard de premier ordre conçues pour le climat des EAU. Approuvées par les entrepreneurs CVC à travers le Moyen-Orient.',\n          faqs: [\n            {\n              q: 'Les Tuyaux / Raccords d\\'évacuation UPVC sont-ils adaptés au climat rigoureux des EAU ?',\n              a: 'Oui, nos systèmes d\\'évacuation UPVC sont conçus avec une haute résistance UV et une intégrité structurelle pour résister aux températures extrêmes, aux sols fortement salins et aux conditions environnementales difficiles typiques du CCG.'`],
  [`q: 'What is the difference between BS EN 1329 and BS EN 1401 drainage Pipes / Fittings?',\n              a: 'BS EN 1329 covers above-ground soil and waste discharge pipes used inside buildings, while BS EN 1401 is designed for underground non-pressure drainage and sewerage. Crown Plastic manufactures Pipes / Fittings to both standards for complete drainage system solutions in the UAE.'`,
   `q: 'Quelle est la différence entre les Tuyaux / Raccords d\\'évacuation BS EN 1329 et BS EN 1401 ?',\n              a: 'BS EN 1329 couvre les tuyaux d\\'évacuation aérienne des eaux usées à l\\'intérieur des bâtiments, tandis que BS EN 1401 est conçu pour l\\'évacuation enterrée sans pression et l\\'assainissement. Crown Plastic fabrique des Tuyaux / Raccords selon les deux normes pour des solutions complètes de systèmes d\\'évacuation aux EAU.'`],
  [`q: 'What jointing method is used for UPVC drainage Pipes / Fittings?',\n              a: 'UPVC drainage Pipes / Fittings use solvent cement welding for above-ground installations (BS EN 1329), which creates permanent, leak-proof joints. Underground systems (BS EN 1401) typically use push-fit rubber ring joints that allow thermal expansion and easy assembly.'`,
   `q: 'Quelle méthode d\\'assemblage est utilisée pour les Tuyaux / Raccords d\\'évacuation UPVC ?',\n              a: 'Les Tuyaux / Raccords d\\'évacuation UPVC utilisent le soudage à la colle solvant pour les installations aériennes (BS EN 1329), créant des joints permanents et étanches. Les systèmes enterrés (BS EN 1401) utilisent généralement des joints à emboîtement avec bague en caoutchouc permettant la dilatation thermique et un assemblage facile.'`],

  // UPVC Drainage Fittings
  [`meta_title: 'UPVC Drainage Pipes / Fittings in Dubai & UAE | Crown Plastic',\n          h1: 'UPVC Drainage Pipes / Fittings for UAE Projects',\n          hero_subtext: 'Top-tier acoustic and standard drainage solutions engineered for the UAE climate. Trusted by MEP contractors across the Middle East.',\n          faqs: [\n            {\n              q: 'What types of UPVC drainage fittings are available from Crown Plastic?',\n              a: 'Crown Plastic supplies a full range of UPVC drainage fittings including bends (45° and 90°), tees, Y-branches, reducers, access pipes, traps, and inspection chambers. Available in BS EN 1329 (above-ground) and BS EN 1401 (underground) standards.'`,
   `meta_title: 'Raccords d\\'Évacuation UPVC à Dubaï et EAU | Crown Plastic',\n          h1: 'Raccords d\\'Évacuation UPVC pour les Projets EAU',\n          hero_subtext: 'Solutions d\\'évacuation acoustiques et standard de premier ordre conçues pour le climat des EAU. Approuvées par les entrepreneurs CVC à travers le Moyen-Orient.',\n          faqs: [\n            {\n              q: 'Quels types de raccords d\\'évacuation UPVC sont disponibles chez Crown Plastic ?',\n              a: 'Crown Plastic fournit une gamme complète de raccords d\\'évacuation UPVC incluant coudes (45° et 90°), tés, culottes, réducteurs, tuyaux d\\'accès, siphons et chambres d\\'inspection. Disponibles selon les normes BS EN 1329 (aérien) et BS EN 1401 (enterré).'`],

  // Duct Pipes
  [`meta_title: 'uPVC Conduit & Duct Pipes / Fittings | UAE Manufacturer',\n          h1: 'uPVC Conduit and Duct Pipes / Fittings',\n          hero_subtext: 'Durable electrical and telecom conduit systems compliant with local and international standards.',\n          faqs: [\n            {\n              q: 'What standards do Crown Plastic PVC duct Pipes / Fittings meet?',\n              a: 'Crown Plastic PVC duct Pipes / Fittings comply with NEMA TC 2, NEMA TC 6/8, DIN 8062, and Etisalat/du specifications. This ensures compatibility with all major UAE telecom and electrical infrastructure projects.'`,
   `meta_title: 'Tuyaux / Raccords Conduit et Gaine uPVC | Fabricant EAU',\n          h1: 'Tuyaux / Raccords Conduit et Gaine uPVC',\n          hero_subtext: 'Systèmes de conduits électriques et télécom durables conformes aux normes locales et internationales.',\n          faqs: [\n            {\n              q: 'À quelles normes les Tuyaux / Raccords de gaine PVC Crown Plastic répondent-ils ?',\n              a: 'Les Tuyaux / Raccords de gaine PVC Crown Plastic sont conformes aux normes NEMA TC 2, NEMA TC 6/8, DIN 8062, et aux spécifications Etisalat/du. Cela garantit la compatibilité avec tous les grands projets d\\'infrastructure télécom et électrique des EAU.'`],
  
  // Duct Fittings
  [`meta_title: 'uPVC Conduit & Duct Pipes / Fittings | UAE Manufacturer',\n          h1: 'uPVC Duct Pipes / Fittings',\n          hero_subtext: 'Durable electrical and telecom duct fittings compliant with local and international standards.'`,
   `meta_title: 'Raccords de Gaine et Conduit uPVC | Fabricant EAU',\n          h1: 'Raccords de Gaine uPVC',\n          hero_subtext: 'Raccords de gaine électriques et télécom durables conformes aux normes locales et internationales.'`],
  
  // Conduit Pipes
  [`meta_title: 'uPVC Conduit & Duct Pipes / Fittings | UAE Manufacturer',\n          h1: 'uPVC Conduit Pipes / Fittings',\n          hero_subtext: 'Durable electrical conduit systems compliant with local and international standards.'`,
   `meta_title: 'Tuyaux Conduit uPVC | Fabricant EAU',\n          h1: 'Tuyaux Conduit uPVC',\n          hero_subtext: 'Systèmes de conduits électriques durables conformes aux normes locales et internationales.'`],
  
  // PPR Pipes
  [`meta_title: 'PPR Hot & Cold Water Pipes / Fittings in UAE | Manufacturer',\n          h1: 'PPR Hot & Cold Water Pipes / Fittings',\n          hero_subtext: 'Premium PPR plumbing systems for residential and commercial water supply in the UAE.'`,
   `meta_title: 'Tuyaux / Raccords PPR Eau Chaude et Froide aux EAU | Fabricant',\n          h1: 'Tuyaux / Raccords PPR Eau Chaude et Froide',\n          hero_subtext: 'Systèmes de plomberie PPR premium pour l\\'alimentation en eau résidentielle et commerciale aux EAU.'`],
  [`q: 'What is the maximum temperature PPR Pipes / Fittings can handle?',\n              a: 'PPR Pipes / Fittings can handle continuous operating temperatures up to 70°C and short-term peaks up to 95°C, making them ideal for both hot and cold water supply systems in UAE residential and commercial buildings.'`,
   `q: 'Quelle est la température maximale que les Tuyaux / Raccords PPR peuvent supporter ?',\n              a: 'Les Tuyaux / Raccords PPR supportent des températures de fonctionnement continues jusqu\\'à 70°C et des pics courts jusqu\\'à 95°C, les rendant idéaux pour les systèmes d\\'alimentation en eau chaude et froide dans les bâtiments résidentiels et commerciaux des EAU.'`],
  [`q: 'What is the difference between PPR SDR11 PN10 and SDR6 PN20 Pipes / Fittings?',\n              a: 'PPR SDR11 PN10 pipes have a thinner wall for 10 bar applications like standard water distribution, while SDR6 PN20 pipes have thicker walls for 20 bar applications such as high-rise buildings and industrial hot water systems in the UAE.'`,
   `q: 'Quelle est la différence entre les Tuyaux / Raccords PPR SDR11 PN10 et SDR6 PN20 ?',\n              a: 'Les tuyaux PPR SDR11 PN10 ont une paroi plus fine pour les applications à 10 bar comme la distribution d\\'eau standard, tandis que les tuyaux SDR6 PN20 ont des parois plus épaisses pour les applications à 20 bar telles que les immeubles de grande hauteur et les systèmes d\\'eau chaude industriels aux EAU.'`],

  // HDPE Pipes
  [`meta_title: 'HDPE Pipes / Fittings Supplier in UAE & GCC | Crown Plastic',\n          h1: 'HDPE Pipes / Fittings',\n          hero_subtext: 'Heavy-duty HDPE infrastructure solutions manufactured in the UAE for water, gas, and industrial applications.'`,
   `meta_title: 'Fournisseur de Tuyaux / Raccords HDPE aux EAU et CCG | Crown Plastic',\n          h1: 'Tuyaux / Raccords HDPE',\n          hero_subtext: 'Solutions d\\'infrastructure HDPE haute résistance fabriquées aux EAU pour l\\'eau, le gaz et les applications industrielles.'`],
  [`q: 'What are HDPE Pipes / Fittings used for in the UAE?',\n              a: 'HDPE Pipes / Fittings are used for potable water supply, gas distribution, irrigation, industrial chemical transport, and sewerage systems across the UAE. Their flexibility, corrosion resistance, and butt-fusion jointing make them ideal for large-scale infrastructure projects.'`,
   `q: 'À quoi servent les Tuyaux / Raccords HDPE aux EAU ?',\n              a: 'Les Tuyaux / Raccords HDPE sont utilisés pour l\\'alimentation en eau potable, la distribution de gaz, l\\'irrigation, le transport de produits chimiques industriels et les systèmes d\\'assainissement à travers les EAU. Leur flexibilité, résistance à la corrosion et assemblage par fusion bout à bout les rendent idéaux pour les projets d\\'infrastructure à grande échelle.'`],
  [`q: 'What PE grades does Crown Plastic offer for HDPE Pipes / Fittings?',\n              a: 'Crown Plastic manufactures HDPE Pipes / Fittings in PE63 (5 MPa), PE80 (6.3 MPa), and PE100 (8 MPa) grades, compliant with ISO 4427, DIN 8074, and EN 12201 standards for varying pressure and performance requirements.'`,
   `q: 'Quels grades PE Crown Plastic propose-t-il pour les Tuyaux / Raccords HDPE ?',\n              a: 'Crown Plastic fabrique des Tuyaux / Raccords HDPE en grades PE63 (5 MPa), PE80 (6,3 MPa) et PE100 (8 MPa), conformes aux normes ISO 4427, DIN 8074 et EN 12201 pour différentes exigences de pression et de performance.'`],

  // PEX Pipes
  [`meta_title: 'PEX Pipes / Fittings Supplier in UAE | Crown Plastic',\n          h1: 'PEX Pipes / Fittings',\n          hero_subtext: 'High-performance PEX piping systems for hot and cold water supply, floor heating, and radiator connections in the UAE.'`,
   `meta_title: 'Fournisseur de Tuyaux / Raccords PEX aux EAU | Crown Plastic',\n          h1: 'Tuyaux / Raccords PEX',\n          hero_subtext: 'Systèmes de tuyauterie PEX haute performance pour l\\'alimentation en eau chaude et froide, le chauffage par le sol et les raccordements de radiateurs aux EAU.'`],
  [`q: 'What is the advantage of PEX Pipes / Fittings over copper in the UAE?',\n              a: 'PEX Pipes / Fittings are more cost-effective, corrosion-resistant, and flexible than copper. They resist scale build-up in hard UAE water, require fewer fittings due to flexibility, and have a lifespan exceeding 50 years — making them the preferred choice for modern plumbing in the GCC.'`,
   `q: 'Quel est l\\'avantage des Tuyaux / Raccords PEX par rapport au cuivre aux EAU ?',\n              a: 'Les Tuyaux / Raccords PEX sont plus économiques, résistants à la corrosion et flexibles que le cuivre. Ils résistent au dépôt de tartre dans l\\'eau dure des EAU, nécessitent moins de raccords grâce à leur flexibilité et ont une durée de vie dépassant 50 ans — en faisant le choix privilégié pour la plomberie moderne dans le CCG.'`],

  // Fabrications
  [`meta_title: 'Pipe Fabrications & Accessories in UAE | Crown Plastic',\n          h1: 'Pipe Fabrications & Accessories',\n          hero_subtext: 'Custom-fabricated piping components and accessories manufactured in the UAE for specialized infrastructure projects.'`,
   `meta_title: 'Fabrications et Accessoires de Tuyaux aux EAU | Crown Plastic',\n          h1: 'Fabrications et Accessoires de Tuyaux',\n          hero_subtext: 'Composants de tuyauterie fabriqués sur mesure et accessoires manufacturés aux EAU pour les projets d\\'infrastructure spécialisés.'`],

  // Solvents
  [`meta_title: 'PVC Solvent Cement & Adhesives in UAE | Crown Plastic',\n          h1: 'PVC Solvent Cement & Adhesives',\n          hero_subtext: 'Professional-grade solvent cements and jointing compounds for reliable PVC pipe connections across the UAE.'`,
   `meta_title: 'Colle Solvant et Adhésifs PVC aux EAU | Crown Plastic',\n          h1: 'Colle Solvant et Adhésifs PVC',\n          hero_subtext: 'Colles solvant et composés d\\'assemblage de qualité professionnelle pour des connexions fiables de tuyaux PVC à travers les EAU.'`],

  // ── REMAINING PRODUCTS.HUB ──────────────────────────────────────────
  [`hero_subtitle: 'Engineered for the Gulf. A complete portfolio of over 5,000 UPVC, PVC, PP-R, PEX and HDPE solutions built for decades of reliable performance in infrastructure, construction, and agriculture.'`,
   `hero_subtitle: 'Conçu pour le Golfe. Un portefeuille complet de plus de 5 000 solutions UPVC, PVC, PP-R, PEX et HDPE construites pour des décennies de performance fiable dans l\\'infrastructure, la construction et l\\'agriculture.'`],
  [`cta_subtitle: 'Download our complete technical catalogues or contact our engineering team for specialized project support.'`,
   `cta_subtitle: 'Téléchargez nos catalogues techniques complets ou contactez notre équipe d\\'ingénierie pour un support de projet spécialisé.'`],
];

let count = 0;
translations.forEach(([eng, fr]) => {
  if (content.includes(eng)) {
    content = content.replace(eng, fr);
    count++;
  }
});

fs.writeFileSync('src/i18n/fr.ts', content);
console.log(`Round 3: Applied ${count} translations to fr.ts`);
