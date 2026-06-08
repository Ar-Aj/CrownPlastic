/**
 * fr.ts Mass Translation Script - Round 2
 * Covers: about.products.categories, products.*, markets.regional product items, 
 * products.hub/category/detail/detail_layout, and solvent/fittings/pipes sections
 */
const fs = require('fs');
let content = fs.readFileSync('src/i18n/fr.ts', 'utf8');

const translations = [
  // ── ABOUT > PRODUCTS > CATEGORIES ─────────────────────────────────────

  // UPVC Drainage Pipes
  [`name: 'UPVC Drainage Pipes',\n          description: 'Above-ground and underground drainage pipe systems certified to BS EN 1329-1:2014 and BS EN 1401-1.'`, 
   `name: 'Tuyaux d\\'Évacuation UPVC',\n          description: 'Systèmes de tuyauterie d\\'évacuation aérienne et enterrée certifiés BS EN 1329-1:2014 et BS EN 1401-1.'`],
  [`name: 'UPVC Drainage Pipes BS 5255/BS EN 1329-1:2014',\n              info: 'Above-ground soil and waste discharge drainage pipes certified to BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014.'`,
   `name: 'Tuyaux d\\'Évacuation UPVC BS 5255/BS EN 1329-1:2014',\n              info: 'Tuyaux d\\'évacuation aérienne eaux usées certifiés BS 5255/BS EN 1329-1:2014 et BS 4514/BS EN 1329-1:2014.'`],
  [`name: 'UPVC Drainage Pipes BS EN 1401-1',\n              info: 'Underground drainage pipes certified to BS EN 1401-1 (supersedes BS 4660 & BS 5481).'`,
   `name: 'Tuyaux d\\'Évacuation UPVC BS EN 1401-1',\n              info: 'Tuyaux d\\'évacuation enterrée certifiés BS EN 1401-1 (remplace BS 4660 et BS 5481).'`],
  [`name: 'UPVC Drainage Non-Standard Pipes',\n              info: 'Non-standard UPVC drainage pipes for specialized project requirements.'`,
   `name: 'Tuyaux d\\'Évacuation UPVC Non Standard',\n              info: 'Tuyaux d\\'évacuation UPVC non standard pour exigences de projets spécialisés.'`],

  // UPVC Drainage Fittings
  [`name: 'UPVC Drainage Fittings',\n          description: 'Drainage fittings certified to BS EN 1329-1:2014 and BS EN 1401, including push-fit solutions.'`,
   `name: 'Raccords d\\'Évacuation UPVC',\n          description: 'Raccords d\\'évacuation certifiés BS EN 1329-1:2014 et BS EN 1401, y compris les solutions à emboîtement.'`],
  [`name: 'UPVC Drainage Fittings BS EN 1329-1:2014',\n              info: 'Above-ground drainage fittings certified to BS EN 1329-1:2014 (supersedes BS 5255 & BS 4514).'`,
   `name: 'Raccords d\\'Évacuation UPVC BS EN 1329-1:2014',\n              info: 'Raccords d\\'évacuation aérienne certifiés BS EN 1329-1:2014 (remplace BS 5255 et BS 4514).'`],
  [`name: 'UPVC Drainage Fittings BS EN 1401',\n              info: 'Underground drainage fittings certified to BS EN 1401 (supersedes BS 4660 & BS 5481).'`,
   `name: 'Raccords d\\'Évacuation UPVC BS EN 1401',\n              info: 'Raccords d\\'évacuation enterrée certifiés BS EN 1401 (remplace BS 4660 et BS 5481).'`],
  [`name: 'UPVC Drainage Pushfit Fittings',\n              info: 'Push-fit drainage fittings for quick-connect above-ground soil & waste systems.'`,
   `name: 'Raccords d\\'Évacuation UPVC à Emboîtement',\n              info: 'Raccords d\\'évacuation à emboîtement rapide pour les systèmes aériens eaux usées.'`],

  // PVC HP Pipes description
  [`description: 'High pressure PVC pipes in ISO, DIN, BS, and ASTM standards for potable water and industrial applications.'`,
   `description: 'Tuyaux PVC haute pression selon les normes ISO, DIN, BS et ASTM pour l\\'eau potable et les applications industrielles.'`],
  [`info: 'PVC-U pressure pipes to ISO 4422-2:1996 — metric sizes for potable water & irrigation.'`,
   `info: 'Tuyaux pression PVC-U selon ISO 4422-2:1996 — tailles métriques pour eau potable et irrigation.'`],
  [`info: 'PVC-U pressure pipes to DIN 8061/62 — SASO 14/15 compliant, metric range.'`,
   `info: 'Tuyaux pression PVC-U selon DIN 8061/62 — conformes SASO 14/15, gamme métrique.'`],
  [`info: 'PVC-U pressure pipes to BS EN ISO 1452-2:2009 — imperial sizes for water supply.'`,
   `info: 'Tuyaux pression PVC-U selon BS EN ISO 1452-2:2009 — tailles impériales pour alimentation en eau.'`],
  [`info: 'PVC-U pressure pipes to BS 3505:1986 — imperial sizes for cold potable water.'`,
   `info: 'Tuyaux pression PVC-U selon BS 3505:1986 — tailles impériales pour eau potable froide.'`],
  [`info: 'PVC-U pressure pipes to BS 3506:1969 — industrial applications,`,
   `info: 'Tuyaux pression PVC-U selon BS 3506:1969 — applications industrielles,`],
  [`info: 'PVC-U pressure pipes to ASTM D 1785 — Schedule 40 & Schedule 80.'`,
   `info: 'Tuyaux pression PVC-U selon ASTM D 1785 — Schedule 40 et Schedule 80.'`],
  [`info: 'PVC-U pressure pipes to ASTM D 2241 — SDR-rated for multiple pressure classes.'`,
   `info: 'Tuyaux pression PVC-U selon ASTM D 2241 — classés SDR pour plusieurs classes de pression.'`],

  // PVC HP Fittings description
  [`description: 'High pressure PVC fittings and valves in DIN 8063 and BS EN 1452:3/BS 4346 standards.'`,
   `description: 'Raccords et vannes PVC haute pression selon les normes DIN 8063 et BS EN 1452:3/BS 4346.'`],
  [`info: 'PVC-U pressure fittings to DIN 8063 — PN 10/16, metric 20–200 mm.'`,
   `info: 'Raccords pression PVC-U selon DIN 8063 — PN 10/16, métrique 20–200 mm.'`],
  [`info: 'PVC-U pressure fittings to BS EN 1452:3/BS 4346 — Class E / PN 15,`,
   `info: 'Raccords pression PVC-U selon BS EN 1452:3/BS 4346 — Classe E / PN 15,`],
  [`name: 'PVC High Pressure Valves',\n              info: 'PVC-U industrial valves — unions, compact ball, true union, and single union types.'`,
   `name: 'Vannes PVC Haute Pression',\n              info: 'Vannes industrielles PVC-U — raccords union, robinets à bille compacts, vrais unions et unions simples.'`],

  // PVC SCH 40
  [`name: 'PVC SCH 40 Fittings',\n          description: 'Schedule 40 PVC pressure fittings to ASTM D 2466 standard.'`,
   `name: 'Raccords PVC SCH 40',\n          description: 'Raccords pression PVC Schedule 40 selon la norme ASTM D 2466.'`],
  [`info: 'ASTM D 2466 Schedule 40 PVC-U pressure fittings —`,
   `info: 'Raccords pression PVC-U Schedule 40 selon ASTM D 2466 —`],

  // PVC Duct Pipes
  [`name: 'PVC Duct Pipes',\n          description: 'Underground cable protection duct systems in NEMA, DIN, and BS standards, including Etisalat & DU approved.'`,
   `name: 'Tuyaux de Gaine PVC',\n          description: 'Systèmes de gaines enterrées pour protection de câbles selon les normes NEMA, DIN et BS, y compris homologation Etisalat et DU.'`],
  [`info: 'EPC 40/80 cable duct pipes to NEMA TC 2:2003`,
   `info: 'Tuyaux de gaine câbles EPC 40/80 selon NEMA TC 2:2003`],
  [`info: 'EB/DB duct pipes to NEMA TC 6 & 8 / ASTM F 512`,
   `info: 'Tuyaux de gaine EB/DB selon NEMA TC 6 et 8 / ASTM F 512`],
  [`info: 'Metric duct pipes to DIN 8062 — PN 4 to PN 16, 20–315 mm.'`,
   `info: 'Tuyaux de gaine métriques selon DIN 8062 — PN 4 à PN 16, 20–315 mm.'`],
  [`info: 'Telecom duct pipes approved for Etisalat & DU — D54/D56/D57.'`,
   `info: 'Tuyaux de gaine télécom homologués Etisalat et DU — D54/D56/D57.'`],
  [`info: 'Imperial duct pipes to BS 3505/06 — PN 6 to PN 15,`,
   `info: 'Tuyaux de gaine impériaux selon BS 3505/06 — PN 6 à PN 15,`],
  [`name: 'PVC Duct Non-Standard Pipes',\n              info: 'Non-standard duct pipes for specialized projects — 75–160 mm.'`,
   `name: 'Tuyaux de Gaine PVC Non Standard',\n              info: 'Tuyaux de gaine non standard pour projets spécialisés — 75–160 mm.'`],

  // PVC Duct Fittings
  [`name: 'PVC Duct Fittings',\n          description: 'Duct fittings for underground cable protection systems.'`,
   `name: 'Raccords de Gaine PVC',\n          description: 'Raccords de gaine pour systèmes enterrés de protection de câbles.'`],
  [`name: 'PVC Duct Socket / Coupler',\n              info: 'Standard PVC duct socket for connecting duct pipe sections — Etisalat & DU compliant.'`,
   `name: 'Manchon/Raccord de Gaine PVC',\n              info: 'Manchon de gaine PVC standard pour raccorder les sections de tuyaux — conforme Etisalat et DU.'`],
  [`name: 'PVC Duct Bellmouth',\n              info: 'PVC duct bellmouth for smooth cable entry — prevents abrasion in Etisalat & DU systems.'`,
   `name: 'Évasement de Gaine PVC',\n              info: 'Évasement de gaine PVC pour une entrée de câble fluide — prévient l\\'abrasion dans les systèmes Etisalat et DU.'`],
  [`name: 'PVC Duct End Caps',\n              info: 'Weatherproof end caps for sealing and protecting open duct ends on UAE sites.'`,
   `name: 'Bouchons de Gaine PVC',\n              info: 'Bouchons étanches pour sceller et protéger les extrémités de gaine ouvertes sur les chantiers EAU.'`],
  [`name: 'PVC Duct 90°/45° LR Bends',\n              info: 'Long radius 90° and 45° bends for smooth directional changes in underground duct runs.'`,
   `name: 'Coudes LR 90°/45° de Gaine PVC',\n              info: 'Coudes à grand rayon 90° et 45° pour des changements de direction fluides dans les parcours de gaines enterrées.'`],
  [`name: 'PVC Duct 90° Street Lighting LR Bends',\n              info: '90° long radius bends for street lighting conduit — UAE Roads Authority compliant.'`,
   `name: 'Coudes LR 90° Éclairage Public Gaine PVC',\n              info: 'Coudes à grand rayon 90° pour conduits d\\'éclairage public — conformes à l\\'autorité routière des EAU.'`],
  [`name: 'PVC Duct 90° Lightning LR Bends',\n              info: '90° long radius bends for lightning protection and earthing conduit systems.'`,
   `name: 'Coudes LR 90° Paratonnerre Gaine PVC',\n              info: 'Coudes à grand rayon 90° pour les systèmes de conduits de protection foudre et mise à la terre.'`],

  // PVC Conduit Pipes
  [`name: 'PVC Conduit Pipes',\n          description: 'Rigid PVC electrical conduit pipes for building wiring systems. Available in compression force ratings and Schedule 40/80.'`,
   `name: 'Tuyaux Conduit PVC',\n          description: 'Tuyaux conduit PVC rigides pour systèmes de câblage de bâtiments. Disponibles en classes de résistance à la compression et Schedule 40/80.'`],
  [`info: 'Fire-retardant PVC conduit pipes — Heavy (1250N), Medium (750N) & Light (320N) grades.'`,
   `info: 'Tuyaux conduit PVC ignifuges — grades Lourd (1250N), Moyen (750N) et Léger (320N).'`],
  [`info: 'Schedule 40 PVC electrical conduit`,
   `info: 'Conduit électrique PVC Schedule 40`],
  [`info: 'Heavy-duty Schedule 80 PVC electrical conduit`,
   `info: 'Conduit électrique PVC Schedule 80 haute résistance`],

  // PP-R Pipes
  [`name: 'PP-R Pipes',\n          description: 'Polypropylene Random pipes for hot and cold potable water. PN10-PN25 rated, DIN 8077/78 certified.'`,
   `name: 'Tuyaux PP-R',\n          description: 'Tuyaux en polypropylène random pour eau potable chaude et froide. Classés PN10-PN25, certifiés DIN 8077/78.'`],
  [`info: 'PP-R pipe SDR11/PN10 per DIN 8077/78 — for hot & cold water, HVAC, and aggressive fluids.'`,
   `info: 'Tuyau PP-R SDR11/PN10 selon DIN 8077/78 — pour eau chaude et froide, CVC et fluides agressifs.'`],
  [`info: 'PP-R pipe SDR7.4/PN16 per DIN 8077/78 — higher pressure class for potable water & aggressive fluids.'`,
   `info: 'Tuyau PP-R SDR7.4/PN16 selon DIN 8077/78 — classe de pression supérieure pour eau potable et fluides agressifs.'`],
  [`info: 'PP-R pipe SDR6/PN20 per DIN 8077/78 — highest pressure class for demanding hot & cold applications.'`,
   `info: 'Tuyau PP-R SDR6/PN20 selon DIN 8077/78 — classe de pression maximale pour applications chaudes et froides exigeantes.'`],
  [`info: 'PP-R pipe SDR5/PN25 per DIN 8077/78 — maximum pressure rating at 25 bar for industrial systems.'`,
   `info: 'Tuyau PP-R SDR5/PN25 selon DIN 8077/78 — pression nominale maximale de 25 bar pour systèmes industriels.'`],

  // HDPE Pipes
  [`name: 'HDPE Pipes',\n          description: 'High-density polyethylene pipes for irrigation, water distribution, and agricultural applications. PE63/80/100 grades.'`,
   `name: 'Tuyaux HDPE',\n          description: 'Tuyaux en polyéthylène haute densité pour l\\'irrigation, la distribution d\\'eau et les applications agricoles. Grades PE63/80/100.'`],
  [`name: 'Polyethylene Pipe Rolls (Class C / HD)',\n              info: 'Class C | HD Pipe Rolls'`,
   `name: 'Rouleaux de Tuyaux Polyéthylène (Classe C / HD)',\n              info: 'Classe C | Rouleaux de Tuyaux HD'`],

  // PEX Pipes
  [`name: 'PEX Pipes',\n          description: 'Cross-linked polyethylene pipes for hot and cold water distribution. PN 12.5 & PN 20 rated.'`,
   `name: 'Tuyaux PEX',\n          description: 'Tuyaux en polyéthylène réticulé pour la distribution d\\'eau chaude et froide. Classés PN 12.5 et PN 20.'`],

  // Fabrications & Accessories
  [`name: 'Fabrications & Accessories',\n          description: 'Custom PVC/UPVC fabrications including Dubai Municipality approved grease traps and specialty accessories.'`,
   `name: 'Fabrications et Accessoires',\n          description: 'Fabrications PVC/UPVC sur mesure, y compris des séparateurs de graisse approuvés par la municipalité de Dubaï et des accessoires spécialisés.'`],
  [`name: 'Grease Trap Type A',`,   `name: 'Séparateur de Graisse Type A',`],
  [`name: 'Grease Trap Type B',`,   `name: 'Séparateur de Graisse Type B',`],
  [`name: 'Grease Trap Type C',`,   `name: 'Séparateur de Graisse Type C',`],
  [`name: 'Grease Trap Type D',`,   `name: 'Séparateur de Graisse Type D',`],
  [`name: 'PVC/UPVC Fabrication Accessories',\n              info: 'Accessories | Custom fabrications'`,
   `name: 'Accessoires de Fabrication PVC/UPVC',\n              info: 'Accessoires | Fabrications sur mesure'`],

  // Solvents
  [`name: 'Solvents',\n          description: 'PVC solvent cements for secure and durable pipe joints.'`,
   `name: 'Colles et Solvants',\n          description: 'Colles solvant PVC pour des joints de tuyaux sûrs et durables.'`],
  [`name: 'PVC Solvents',\n              info: 'PVC Solvents | Pipe jointing'`,
   `name: 'Colles PVC',\n              info: 'Colles PVC | Assemblage de tuyaux'`],

  // ── PRODUCTS SECTION ──────────────────────────────────────────────────
  // category_names
  [`upvc_drainage_pipes: 'UPVC Drainage Pipes',`, `upvc_drainage_pipes: 'Tuyaux d\\'Évacuation UPVC',`],
  [`upvc_drainage_fittings: 'UPVC Drainage Fittings',`, `upvc_drainage_fittings: 'Raccords d\\'Évacuation UPVC',`],
  [`pvc_high_pressure_pipes: 'PVC High Pressure Pipes',`, `pvc_high_pressure_pipes: 'Tuyaux PVC Haute Pression',`],
  [`pvc_high_pressure_fittings: 'PVC High Pressure Fittings',`, `pvc_high_pressure_fittings: 'Raccords PVC Haute Pression',`],
  [`pvc_sch_40_fittings: 'PVC SCH 40 Fittings',`, `pvc_sch_40_fittings: 'Raccords PVC SCH 40',`],
  [`pvc_duct_pipes: 'PVC Duct Pipes',`, `pvc_duct_pipes: 'Tuyaux de Gaine PVC',`],
  [`pvc_duct_fittings: 'PVC Duct Fittings',`, `pvc_duct_fittings: 'Raccords de Gaine PVC',`],
  [`pvc_conduit_pipes: 'PVC Conduit Pipes',`, `pvc_conduit_pipes: 'Tuyaux Conduit PVC',`],
  [`ppr_pipes: 'PP-R Pipes',`, `ppr_pipes: 'Tuyaux PP-R',`],
  [`hdpe_pipes: 'HDPE Pipes',`, `hdpe_pipes: 'Tuyaux HDPE',`],
  [`pex_pipes: 'PEX Pipes',`, `pex_pipes: 'Tuyaux PEX',`],
  [`fabrications_accessories: 'Fabrications & Accessories',`, `fabrications_accessories: 'Fabrications et Accessoires',`],
  [`solvents: 'Solvents',`, `solvents: 'Colles et Solvants',`],

  // products.hub
  [`'50-Year Lifespan'`, `'Durée de Vie 50 Ans'`],
  [`'GCC Standards'`, `'Normes CCG'`],
  [`'Premium Plastic'`, `'Tuyaux / Raccords'`],
  [`'Pipes / Fittings'`, `'Plastiques Premium'`],
  [`'View Catalogue'`, `'Voir le Catalogue'`],
  [`'Core Product Families'`, `'Familles de Produits Principales'`],
  [`'Product Variants'`, `'Variantes de Produits'`],
  [`'Production Capabilities'`, `'Capacités de Production'`],
  [`'View Range'`, `'Voir la Gamme'`],
  [`'Need Technical Specifications?'`, `'Besoin de Spécifications Techniques ?'`],
  [`'Download Catalogues'`, `'Télécharger les Catalogues'`],
  [`'Contact Engineers'`, `'Contacter les Ingénieurs'`],

  // products.category
  [`breadcrumb_home: 'Home',`, `breadcrumb_home: 'Accueil',`],
  [`breadcrumb_products: 'Products',`, `breadcrumb_products: 'Produits',`],
  [`request_quote: 'Request Quote',`, `request_quote: 'Demander un Devis',`],
  [`download_catalogue: 'Download Catalogue',`, `download_catalogue: 'Télécharger le Catalogue',`],
  [`'Product Families'`, `'Familles de Produits'`],
  [`'Years Manufacturing Excellence'`, `'Années d\\'Excellence Manufacturière'`],
  [`'Products in'`, `'Produits dans'`],
  [`'View Details'`, `'Voir les Détails'`],
  [`'Technical Documents'`, `'Documents Techniques'`],
  [`'Built to Last'`, `'Construit pour Durer'`],
  [`'Fast Delivery'`, `'Livraison Rapide'`],
  [`'Need Technical Assistance?'`, `'Besoin d\\'Assistance Technique ?'`],
  [`'Our engineering team is here to help with product selection, technical queries, and project support.'`, `'Notre équipe d\\'ingénierie est là pour vous aider dans la sélection des produits, les questions techniques et le support de projet.'`],
  [`'View All Products'`, `'Voir Tous les Produits'`],

  // products.detail
  [`'Standards & Certifications'`, `'Normes et Certifications'`],
  [`'Key Features'`, `'Caractéristiques Clés'`],
  [`'Download Specs'`, `'Télécharger les Spécifications'`],
  [`'Technical Specifications'`, `'Spécifications Techniques'`],
  [`'Technical Data'`, `'Données Techniques'`],
  [`'Material'`, `'Matériau'`],
  [`'Unplasticized Polyvinyl Chloride (UPVC)'`, `'Polychlorure de Vinyle Non Plastifié (UPVC)'`],
  [`'Standards'`, `'Normes'`],
  [`'Color'`, `'Couleur'`],
  [`table_color_value: 'Grey'`, `table_color_value: 'Gris'`],
  [`'Size Range'`, `'Gamme de Tailles'`],
  [`'Pressure Rating'`, `'Classe de Pression'`],
  [`'Other Products in'`, `'Autres Produits dans'`],
  [`'Contact Us'`, `'Contactez-nous'`],
  [`'View All Resources'`, `'Voir Toutes les Ressources'`],
  [`'View Technical Document'`, `'Voir le Document Technique'`],
  [`'Loading document...'`, `'Chargement du document...'`],

  // products.tables
  [`'Mean Wall Thickness (mm) - Min'`, `'Épaisseur Moyenne de Paroi (mm) - Min'`],
  [`'Mean Wall Thickness (mm) - Max'`, `'Épaisseur Moyenne de Paroi (mm) - Max'`],

  // products.detail_layout
  [`'Premium Quality'`, `'Qualité Premium'`],
  [`'GCC Market Leader'`, `'Leader du Marché CCG'`],
  [`'52+ Countries'`, `'52+ Pays'`],
  [`'UV & Weather Resistant'`, `'Résistant UV et Intempéries'`],
  [`'Corrosion Free'`, `'Sans Corrosion'`],
  [`'Overview'`, `'Présentation'`],
  [`'Features'`, `'Caractéristiques'`],
  [`'Applications'`, `'Applications'`],
  [`'Product Configurations'`, `'Configurations du Produit'`],
  [`'Installation Guidelines'`, `'Guides d\\'Installation'`],
  [`'Product Video'`, `'Vidéo du Produit'`],
  [`'View Document'`, `'Voir le Document'`],

  // products.solvent
  [`'Available Sizes'`, `'Tailles Disponibles'`],
  [`overview: 'A premium, high-strength, clear, heavy-body PVC solvent cement formulated for secure and durable pipe joints. Exceeds ASTM D 2564 standards. Suitable for pipes up to 8 inches in diameter.'`,
   `overview: 'Une colle solvant PVC premium haute résistance, transparente et à corps épais, formulée pour des joints de tuyaux sûrs et durables. Dépasse les normes ASTM D 2564. Adaptée aux tuyaux jusqu\\'à 8 pouces de diamètre.'`],
  [`'Heavy Body Viscosity'`, `'Viscosité Corps Épais'`],
  [`'Fast Setting Time'`, `'Temps de Prise Rapide'`],
  [`'High-Strength Bond'`, `'Collage Haute Résistance'`],
  [`'ASTM D 2564 Certified'`, `'Certifié ASTM D 2564'`],
  [`'Raw Materials from U.S.A.'`, `'Matières Premières des États-Unis'`],
  [`'Industrial piping'`, `'Tuyauterie industrielle'`],
  [`'Irrigation systems'`, `'Systèmes d\\'irrigation'`],
  [`'Electrical conduits'`, `'Conduits électriques'`],
  [`'Pool and plumbing'`, `'Piscine et plomberie'`],
  [`'PVC foam core pipes'`, `'Tuyaux PVC à âme mousse'`],
  [`'Stir before use'`, `'Remuer avant utilisation'`],
  [`'Use the correct applicator size'`, `'Utiliser la taille d\\'applicateur correcte'`],
  [`'Apply primer before cementing'`, `'Appliquer l\\'apprêt avant le collage'`],
  [`'Do not thin with primer or other solvents'`, `'Ne pas diluer avec un apprêt ou d\\'autres solvants'`],
  [`'Do not use on wet pipes'`, `'Ne pas utiliser sur des tuyaux mouillés'`],

  // products.pipes
  [`'Pipe Specifications'`, `'Spécifications des Tuyaux'`],

  // products.fittings
  [`'Fittings & Accessories'`, `'Raccords et Accessoires'`],
  [`filter_all: 'All'`, `filter_all: 'Tous'`],
  [`'size(s) available'`, `'taille(s) disponible(s)'`],
  [`'Moulded Fittings'`, `'Raccords Moulés'`],
  [`'Fabricated Fittings'`, `'Raccords Fabriqués'`],
  [`'Brass Inserts'`, `'Inserts en Laiton'`],
  [`'Solvent Cement'`, `'Colle Solvant'`],
  [`'Other Fittings'`, `'Autres Raccords'`],

  // products.fitting_modal
  [`'Size (mm)'`, `'Taille (mm)'`],
  [`'Close modal'`, `'Fermer la fenêtre'`],
  [`'View Image'`, `'Voir l\\'Image'`],

  // products.nav
  [`overview: 'Overview'`, `overview: 'Présentation'`],
  [`features: 'Features'`, `features: 'Caractéristiques'`],
  [`applications: 'Applications'`, `applications: 'Applications'`],
  [`configurations: 'Configurations'`, `configurations: 'Configurations'`],
  [`pipes: 'Pipes'`, `pipes: 'Tuyaux'`],
  [`fittings: 'Fittings'`, `fittings: 'Raccords'`],
  [`video: 'Video'`, `video: 'Vidéo'`],
  [`dos_donts: "Do's & Don'ts"`, `dos_donts: "À Faire et À Éviter"`],
];

let count = 0;
translations.forEach(([eng, fr]) => {
  if (content.includes(eng)) {
    content = content.replace(eng, fr);
    count++;
  }
});

fs.writeFileSync('src/i18n/fr.ts', content);
console.log(`Round 2: Applied ${count} translations to fr.ts`);
