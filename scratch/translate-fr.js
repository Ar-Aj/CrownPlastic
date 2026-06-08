/**
 * fr.ts Mass Translation Script
 * Replaces all remaining English values in fr.ts with professional B2B French translations.
 * Preserves: technical standards (BS EN, ISO, DIN, ASTM, NEMA), material abbreviations,
 * dimensions, brand claims, and template variables ({location}, {currency}, etc.)
 */
const fs = require('fs');

// Load the file
let content = fs.readFileSync('src/i18n/fr.ts', 'utf8');

// ==============================================================================
// TRANSLATION MAP: English value → French value
// Each entry is [exact_english_string, french_replacement]
// We use replace() which handles the first occurrence per call
// ==============================================================================

const translations = [
  // ── INNOVATION PAGE ──────────────────────────────────────────────────────
  // definition section
  [`'Our Approach'`, `'Notre Approche'`],
  [`'Innovation Means'`, `'L\\'Innovation Signifie'`],
  [`'Better Performance'`, `'Une Meilleure Performance'`],
  [`"At Crown Plastic, innovation isn't about marketing buzz—it's about engineering Pipes / Fittings systems that genuinely perform better, last longer, and require less maintenance over their service life."`, `"Chez Crown Plastic, l'innovation ne se résume pas à un discours marketing — il s'agit de concevoir des systèmes de Tuyaux / Raccords qui offrent réellement de meilleures performances, une plus grande longévité et une maintenance réduite tout au long de leur durée de vie."`],
  [`'Material & Formulation Expertise'`, `'Expertise en Matériaux et Formulation'`],
  [`'Deep understanding of compound behavior under Gulf conditions—optimizing additives, stabilizers, and impact modifiers for long-term performance.'`, `'Compréhension approfondie du comportement des composés dans les conditions du Golfe — optimisation des additifs, stabilisants et modificateurs d\\'impact pour une performance à long terme.'`],
  [`'Tooling & Process Optimization'`, `'Optimisation des Outillages et Procédés'`],
  [`'Continuous refinement of extrusion dies, calibration systems, and cooling processes to achieve consistent wall thickness and dimensional accuracy.'`, `'Amélioration continue des filières d\\'extrusion, des systèmes de calibrage et des processus de refroidissement pour obtenir une épaisseur de paroi constante et une précision dimensionnelle.'`],
  [`'Testing & Quality Assurance'`, `'Tests et Assurance Qualité'`],
  [`'Rigorous in-house testing protocols including hydrostatic pressure, impact resistance, and dimensional verification at every production stage.'`, `'Protocoles de tests internes rigoureux incluant la pression hydrostatique, la résistance aux chocs et la vérification dimensionnelle à chaque étape de production.'`],
  [`'Application Understanding'`, `'Compréhension des Applications'`],
  [`'Engineering systems specifically for pressure, drainage, and ducting applications in GCC construction—not generic one-size-fits-all products.'`, `'Conception de systèmes spécifiques pour les applications de pression, d\\'évacuation et de gaines dans la construction du CCG — pas de produits génériques universels.'`],

  // pillars section
  [`'Technology Pillars'`, `'Piliers Technologiques'`],
  [`'R&D Excellence in'`, `'Excellence R&D en'`],
  [`'Pipes / Fittings Technology'`, `'Technologie de Tuyaux / Raccords'`],
  [`'Four core technology areas drive our innovation—from material science to application support.'`, `'Quatre domaines technologiques fondamentaux guident notre innovation — de la science des matériaux à l\\'ingénierie d\\'application.'`],
  [`'Material Science & Formulation'`, `'Science des Matériaux et Formulation'`],
  [`'Our R&D focuses on compound optimization for extreme Gulf conditions—UV stabilization, heat resistance, and impact performance. Every formulation decision is backed by testing data.'`, `'Notre R&D se concentre sur l\\'optimisation des composés pour les conditions extrêmes du Golfe — stabilisation UV, résistance à la chaleur et performance aux chocs. Chaque décision de formulation est étayée par des données de tests.'`],
  [`'Tooling & Production Technology'`, `'Technologie d\\'Outillage et de Production'`],
  [`'State-of-the-art extrusion lines with precision temperature control, automated dimensional monitoring, and advanced die design ensure consistent quality across production runs.'`, `'Des lignes d\\'extrusion de pointe avec contrôle de température de précision, surveillance dimensionnelle automatisée et conception de filières avancée garantissent une qualité constante sur toutes les séries de production.'`],
  [`"In-house laboratory equipped for hydrostatic testing, impact resistance, Vicat softening point, and dimensional verification. Quality isn't inspected in—it's built in."`, `"Laboratoire interne équipé pour les tests hydrostatiques, la résistance aux chocs, le point de ramollissement Vicat et la vérification dimensionnelle. La qualité n'est pas inspectée — elle est intégrée dès la conception."`],
  [`'Application Engineering & Support'`, `'Ingénierie d\\'Application et Support'`],
  [`'Technical guidance for consultants and contractors—helping select the right products, specify correctly, and design Pipes / Fittings systems that perform as expected over decades.'`, `'Accompagnement technique pour les consultants et entrepreneurs — aide à la sélection des bons produits, à la spécification correcte et à la conception de systèmes de Tuyaux / Raccords performants sur des décennies.'`],

  // timeline section
  [`'Our Journey'`, `'Notre Parcours'`],
  [`'Continuous'`, `'Amélioration'`],
  [`'Improvement'`, `'Continue'`],
  [`'A commitment to getting better—refining processes, upgrading technology, and deepening our expertise year after year.'`, `'Un engagement à toujours progresser — perfectionner les processus, moderniser la technologie et approfondir notre expertise année après année.'`],
  [`'Foundation'`, `'Fondation'`],
  [`'Established with a commitment to quality Pipes / Fittings manufacturing for the Gulf market.'`, `'Création avec un engagement envers la fabrication de Tuyaux / Raccords de qualité pour le marché du Golfe.'`],
  [`'Scaling Production'`, `'Montée en Production'`],
  [`'Expanded capacity with modern extrusion lines and automated quality control systems.'`, `'Augmentation de la capacité avec des lignes d\\'extrusion modernes et des systèmes de contrôle qualité automatisés.'`],
  [`'Advanced QA'`, `'AQ Avancée'`],
  [`'In-house laboratory capabilities for comprehensive testing and formulation development.'`, `'Capacités de laboratoire interne pour des tests complets et le développement de formulations.'`],
  [`'Data-Driven Quality'`, `'Qualité Pilotée par les Données'`],
  [`'Digital monitoring of production parameters for consistent, traceable quality.'`, `'Surveillance numérique des paramètres de production pour une qualité constante et traçable.'`],
  [`'Future-Ready Systems'`, `'Systèmes Prêts pour l\\'Avenir'`],
  [`'Continuous R&D investment in materials, processes, and application engineering.'`, `'Investissement continu en R&D dans les matériaux, les processus et l\\'ingénierie d\\'application.'`],

  // showcase section
  [`'Technology in Action'`, `'La Technologie en Action'`],
  [`'Product Innovation'`, `'Innovation Produit'`],
  [`'Showcase'`, `'Vitrine'`],
  [`'From precision manufacturing to application engineering—see how technology translates into products that perform.'`, `'De la fabrication de précision à l\\'ingénierie d\\'application — découvrez comment la technologie se traduit en produits performants.'`],
  [`'Learn More'`, `'En Savoir Plus'`],
  [`'High Pressure Systems – Consistent, Long-Life Performance'`, `'Systèmes Haute Pression — Performance Constante et Longue Durée'`],
  [`'Precision wall thickness and pressure-rated formulations deliver predictable hydraulic performance over decades. Compatible with international standards for specification confidence.'`, `'L\\'épaisseur de paroi de précision et les formulations calibrées en pression offrent une performance hydraulique prévisible sur des décennies. Compatible avec les normes internationales pour une spécification en toute confiance.'`],
  [`'Drainage Systems – Engineered Flow Efficiency'`, `'Systèmes d\\'Évacuation — Efficacité de Débit Optimisée'`],
  [`'Smooth bore design and accurate joint tolerances ensure reliable drainage without blockages or leaks. Self-extinguishing and chemical resistant formulations.'`, `'La conception à alésage lisse et les tolérances de joint précises assurent une évacuation fiable sans obstructions ni fuites. Formulations auto-extinguibles et résistantes aux produits chimiques.'`],
  [`'Duct & Conduit – Cable Protection Excellence'`, `'Gaines et Conduits — Excellence en Protection de Câbles'`],
  [`'Impact-resistant, UV-stabilized conduit systems protect critical electrical and communications infrastructure. Easy installation with consistent dimensional accuracy.'`, `'Les systèmes de conduits résistants aux chocs et stabilisés UV protègent les infrastructures électriques et de communication critiques. Installation facile avec une précision dimensionnelle constante.'`],
  [`'PPR Hot & Cold – Thermal Performance'`, `'PPR Chaud et Froid — Performance Thermique'`],
  [`'Polypropylene random systems for demanding temperature applications up to 95°C. Reliable fusion-weld joints eliminate leak points for long-term reliability.'`, `'Systèmes en polypropylène random pour les applications de température exigeantes jusqu\\'à 95°C. Les joints par fusion éliminent les points de fuite pour une fiabilité à long terme.'`],
  [`'HDPE Systems – Flexibility & Durability'`, `'Systèmes HDPE — Flexibilité et Durabilité'`],
  [`'High-density polyethylene for buried applications, agriculture, and industrial use. Excellent chemical resistance and flexibility for challenging installations.'`, `'Polyéthylène haute densité pour les applications enterrées, l\\'agriculture et l\\'usage industriel. Excellente résistance chimique et flexibilité pour les installations complexes.'`],
  [`'Fabrications & Specials – Custom Engineering'`, `'Fabrications et Spécialités — Ingénierie Sur Mesure'`],
  [`"Custom fabricated fittings and special configurations when standard components don't fit the project requirements. Technical support from design to delivery."`, `"Raccords fabriqués sur mesure et configurations spéciales lorsque les composants standard ne conviennent pas aux exigences du projet. Support technique de la conception à la livraison."`],

  // quality section
  [`'Quality & Testing'`, `'Qualité et Tests'`],
  [`'Technology in'`, `'La Technologie au Service de'`],
  [`'Quality Assurance'`, `'l\\'Assurance Qualité'`],
  [`'Innovation means rigorous, repeatable processes—not marketing buzz. Our quality systems ensure every product performs as specified.'`, `'L\\'innovation signifie des processus rigoureux et reproductibles — pas des slogans marketing. Nos systèmes qualité garantissent que chaque produit fonctionne comme spécifié.'`],
  [`'Routine Testing & QC'`, `'Tests de Routine et CQ'`],
  [`'Every production batch undergoes dimensional verification, hydrostatic pressure testing, and visual inspection. Consistent quality is non-negotiable.'`, `'Chaque lot de production est soumis à une vérification dimensionnelle, des tests de pression hydrostatique et une inspection visuelle. La qualité constante est non négociable.'`],
  [`'Standards Compliance'`, `'Conformité aux Normes'`],
  [`'Products manufactured to BS EN 1452, ASTM D2466, DIN 8063, and other recognized international standards. ISO 9001:2015 certified quality management.'`, `'Produits fabriqués selon BS EN 1452, ASTM D2466, DIN 8063 et d\\'autres normes internationales reconnues. Gestion de la qualité certifiée ISO 9001:2015.'`],
  [`'Traceability & Documentation'`, `'Traçabilité et Documentation'`],
  [`'Complete batch traceability, test certificates, and technical submittals. The documentation consultants and contractors need for confident specification.'`, `'Traçabilité complète des lots, certificats de test et dossiers techniques. La documentation dont les consultants et entrepreneurs ont besoin pour spécifier en toute confiance.'`],
  [`'Supporting Specifications'`, `'Appui aux Spécifications'`],
  [`'Our testing and documentation help engineers and consultants specify with confidence—clear data, proven performance, reliable supply.'`, `'Nos tests et notre documentation aident les ingénieurs et consultants à spécifier en toute confiance — données claires, performances prouvées, approvisionnement fiable.'`],

  // support section
  [`'Collaboration'`, `'Collaboration'`],
  [`'Innovation in'`, `'Innovation en'`],
  [`'Support & Partnership'`, `'Support et Partenariat'`],
  [`"Technology alone isn't enough. We work closely with consultants, contractors, and developers to deliver Pipes / Fittings systems that perform as expected over decades."`, `"La technologie seule ne suffit pas. Nous travaillons en étroite collaboration avec les consultants, entrepreneurs et promoteurs pour fournir des systèmes de Tuyaux / Raccords performants comme prévu sur des décennies."`],
  [`'For Consultants'`, `'Pour les Consultants'`],
  [`'Technical datasheets for accurate specification'`, `'Fiches techniques pour une spécification précise'`],
  [`'Test certificates and compliance documentation'`, `'Certificats de test et documentation de conformité'`],
  [`'Product selection guidance for applications'`, `'Conseils de sélection de produits pour les applications'`],
  [`'Responsive technical queries support'`, `'Support réactif aux questions techniques'`],
  [`'For Contractors'`, `'Pour les Entrepreneurs'`],
  [`'Reliable delivery across UAE'`, `'Livraison fiable dans tout les EAU'`],
  [`'Consistent product quality batch-to-batch'`, `'Qualité produit constante d\\'un lot à l\\'autre'`],
  [`'Clear installation guidance'`, `'Guides d\\'installation clairs'`],
  [`'Technical support for site challenges'`, `'Support technique pour les défis sur chantier'`],
  [`'For Developers'`, `'Pour les Promoteurs'`],
  [`'Long-term performance for asset value'`, `'Performance à long terme pour la valeur de l\\'actif'`],
  [`'Reduced maintenance and replacement costs'`, `'Coûts de maintenance et de remplacement réduits'`],
  [`'Standards-compliant systems'`, `'Systèmes conformes aux normes'`],
  [`'Comprehensive product range coverage'`, `'Couverture complète de la gamme de produits'`],

  // cta section
  [`'Partner in Innovation'`, `'Partenaire en Innovation'`],
  [`'Bring Innovation Into '`, `'Intégrez l\\'Innovation dans '`],
  [`'Your Next Project'`, `'Votre Prochain Projet'`],
  [`'Technical discussions with consultants, contractors, and developers. Our team helps you select and specify Pipes / Fittings systems for long-term performance.'`, `'Discussions techniques avec les consultants, entrepreneurs et promoteurs. Notre équipe vous aide à sélectionner et spécifier des systèmes de Tuyaux / Raccords pour une performance à long terme.'`],
  [`'Schedule a Technical Consultation'`, `'Planifier une Consultation Technique'`],
  [`'Download Technical Catalogue'`, `'Télécharger le Catalogue Technique'`],
  [`'Support for consultants'`, `'Support pour les consultants'`],
  [`'Detailed technical data'`, `'Données techniques détaillées'`],
  [`'Focused on long-term performance'`, `'Axé sur la performance à long terme'`],

  // ── MARKETS PAGE ──────────────────────────────────────────────────────
  [`'UPVC Pipes Markets | GCC & Middle East Coverage | Crown Plastic Pipes'`, `'Marchés de Tuyaux UPVC | Couverture CCG et Moyen-Orient | Crown Plastic Pipes'`],
  [`'Crown Plastic Pipes serves markets across the GCC region including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. ISO certified products with regional delivery.'`, `'Crown Plastic Pipes dessert les marchés de la région du CCG, y compris les EAU, l\\'Arabie Saoudite, le Koweït, le Qatar, Bahreïn et Oman. Produits certifiés ISO avec livraison régionale.'`],
  [`'Market Not Found'`, `'Marché Non Trouvé'`],
  [`'Home'`, `'Accueil'`],
  [`'Markets'`, `'Marchés'`],
  [`'Regional Markets We Serve'`, `'Les Marchés Régionaux que Nous Desservons'`],
  [`'Crown Plastic exports certified UPVC, PVC, PP-R, PEX & HDPE Pipes / Fittings across the GCC region. ISO certified products with regional delivery and support.'`, `'Crown Plastic exporte des Tuyaux / Raccords certifiés UPVC, PVC, PP-R, PEX et HDPE dans toute la région du CCG. Produits certifiés ISO avec livraison et support régionaux.'`],
  [`'Regional Countries Served'`, `'Pays Régionaux Desservis'`],
  [`'Market Locations'`, `'Emplacements des Marchés'`],
  [`'Years Experience'`, `'Années d\\'Expérience'`],
  [`'ISO Certified'`, `'Certifié ISO'`],
  [`'Saudi Arabia'`, `'Arabie Saoudite'`],
  [`'United Arab Emirates'`, `'Émirats Arabes Unis'`],
  [`'Other GCC Markets'`, `'Autres Marchés du CCG'`],
  [`'Learn More →'`, `'En Savoir Plus →'`],
  [`"Don't See Your Market?"`, `"Vous ne Trouvez pas Votre Marché ?"`],
  [`'We export to additional markets across the Middle East, Africa, and Asia. Contact us for delivery to your location.'`, `'Nous exportons vers des marchés supplémentaires au Moyen-Orient, en Afrique et en Asie. Contactez-nous pour la livraison vers votre emplacement.'`],
  [`'Contact Our Export Team'`, `'Contacter Notre Équipe Export'`],

  // markets regional section
  [`'Call Now'`, `'Appeler Maintenant'`],
  [`'Certified Compliant'`, `'Conformité Certifiée'`],
  [`'Customer Rating'`, `'Note Client'`],
  [`'Certifications'`, `'Certifications'`],
  [`'Support Available'`, `'Support Disponible'`],
  [`'Why Choose Us'`, `'Pourquoi Nous Choisir'`],
  [`'Premium Quality for'`, `'Qualité Premium pour'`],
  [`'Certified Quality'`, `'Qualité Certifiée'`],
  [`'All Pipes / Fittings are ISO & OHSAS Certified'`, `'Tous les Tuyaux / Raccords sont certifiés ISO et OHSAS'`],
  [`'Fast Delivery'`, `'Livraison Rapide'`],
  [`'Competitive Pricing'`, `'Prix Compétitifs'`],
  [`'Bulk discounts available in {currency}'`, `'Remises en volume disponibles en {currency}'`],
  [`'Technical Support'`, `'Support Technique'`],
  [`'Expert consultation for your projects'`, `'Consultation experte pour vos projets'`],
  [`'Coverage Area'`, `'Zone de Couverture'`],
  [`'Delivering to'`, `'Livraison vers'`],
  [`'Our Products'`, `'Nos Produits'`],
  [`'Premium Pipes / Fittings Solutions'`, `'Solutions Premium de Tuyaux / Raccords'`],
  [`'Popular'`, `'Populaire'`],
  [`'View Details'`, `'Voir les Détails'`],

  // markets sidebar
  [`'Get a Quote'`, `'Obtenir un Devis'`],
  [`'Fast response guaranteed'`, `'Réponse rapide garantie'`],
  [`'Contact us for {location} pricing, bulk discounts, and delivery options.'`, `'Contactez-nous pour les tarifs {location}, remises en volume et options de livraison.'`],
  [`'Available 24/7'`, `'Disponible 24h/24, 7j/7'`],
  [`'Response within 2 hours'`, `'Réponse sous 2 heures'`],
  [`'Delivery Information'`, `'Informations de Livraison'`],
  [`'Delivery:'`, `'Livraison :'`],
  [`'Currency:'`, `'Devise :'`],
  [`'Free shipping on bulk orders'`, `'Livraison gratuite pour les commandes en gros'`],
  [`'Full export documentation'`, `'Documentation d\\'exportation complète'`],
  [`'Resources'`, `'Ressources'`],
  [`'BS EN 1452 Guide'`, `'Guide BS EN 1452'`],
  [`'Quality & ISO Certifications'`, `'Certifications Qualité et ISO'`],
  [`'Technical FAQs'`, `'FAQ Techniques'`],
  [`'Downloads & Catalogues'`, `'Téléchargements et Catalogues'`],

  // markets cta
  [`'Ready to Start?'`, `'Prêt à Commencer ?'`],
  [`'Transform Your'`, `'Transformez Votre'`],
  [`'Project'`, `'Projet'`],
  [`'Contact our {country} sales team for competitive pricing, bulk discounts, and premium delivery to your project location.'`, `'Contactez notre équipe commerciale {country} pour des prix compétitifs, des remises en volume et une livraison premium vers votre site de projet.'`],
  [`'30+ Years Experience'`, `'30+ Années d\\'Expérience'`],
  [`'ISO 9001:2015 Certified'`, `'Certifié ISO 9001:2015'`],
  [`'5,000+ Products'`, `'5 000+ Produits'`],
  [`'Back to top'`, `'Retour en haut'`],

  // markets catalog
  [`'Bulk Pricing Tiers'`, `'Niveaux de Prix en Gros'`],
  [`'Price Catalog'`, `'Catalogue de Prix'`],
  [`'Product'`, `'Produit'`],
  [`'Base Price'`, `'Prix de Base'`],
  [`'Bulk Price (-10%)'`, `'Prix en Gros (-10%)'`],
  [`'Min. Order'`, `'Commande Min.'`],
  [`'Orders of 100+ Units'`, `'Commandes de 100+ Unités'`],
  [`'For best wholesale pricing on large orders, please contact our sales team for a custom quote.'`, `'Pour les meilleurs prix de gros sur les commandes importantes, veuillez contacter notre équipe commerciale pour un devis personnalisé.'`],
  [`'Ready to Order?'`, `'Prêt à Commander ?'`],
  [`'Get a custom quote for your {region} project. Delivery in {deliveryTime}.'`, `'Obtenez un devis personnalisé pour votre projet {region}. Livraison en {deliveryTime}.'`],
  [`'Request Quote'`, `'Demander un Devis'`],

  // ── PRODUCTS SECTION (SEO & UI) ──────────────────────────────────────────
  [`'PVC High Pressure Pipes'`, `'Tuyaux PVC Haute Pression'`],
  [`'PVC High Pressure Fittings'`, `'Raccords PVC Haute Pression'`],
  [`'Premium Plastic Piping Systems | Crown Plastic Pipes'`, `'Systèmes Premium de Tuyauterie Plastique | Crown Plastic Pipes'`],
  [`'Explore 5,000+ UPVC, PPR, and HDPE piping solutions engineered for Gulf infrastructure. ISO 9001:2015 certified.'`, `'Explorez plus de 5 000 solutions de tuyauterie UPVC, PPR et HDPE conçues pour les infrastructures du Golfe. Certifié ISO 9001:2015.'`],
  [`'Browse our complete range of {category}. International standards compliant. Available for delivery across the GCC.'`, `'Parcourez notre gamme complète de {category}. Conforme aux normes internationales. Disponible pour livraison dans tout le CCG.'`],
  [`'Technical specifications, dimensions, and ordering information for {product}. {standard} compliant. Manufactured in the UAE.'`, `'Spécifications techniques, dimensions et informations de commande pour {product}. Conforme {standard}. Fabriqué aux EAU.'`],
  [`'Engineered for the Gulf. A complete portfolio of over 5,000 UPVC, PVC, PP-R, PEX & HDPE piping systems manufactured in the UAE for regional infrastructure.'`, `'Conçu pour le Golfe. Un portefeuille complet de plus de 5 000 systèmes de tuyauterie UPVC, PVC, PP-R, PEX et HDPE fabriqués aux EAU pour les infrastructures régionales.'`],
  [`'Explore Our Product Categories'`, `'Explorez Nos Catégories de Produits'`],
  [`'Comprehensive Pipes / Fittings solutions for every application sector.'`, `'Des solutions complètes de Tuyaux / Raccords pour chaque secteur d\\'application.'`],
  [`'Download our complete technical catalogues or contact our engineering team for specifications.'`, `'Téléchargez nos catalogues techniques complets ou contactez notre équipe d\\'ingénierie pour les spécifications.'`],
  [`'9001:2015 Certified'`, `'Certifié 9001:2015'`],
  [`'Explore our complete range of products in this category.'`, `'Explorez notre gamme complète de produits dans cette catégorie.'`],
  [`'Download technical specifications, catalogues, and data sheets.'`, `'Téléchargez les spécifications techniques, catalogues et fiches techniques.'`],
  [`'Quality Certified'`, `'Qualité Certifiée'`],
  [`'All products manufactured under ISO 9001:2015 quality management systems with rigorous testing protocols.'`, `'Tous les produits fabriqués sous les systèmes de gestion de la qualité ISO 9001:2015 avec des protocoles de tests rigoureux.'`],
  [`'50+ year projected lifespan with corrosion-free performance in the harshest Gulf environments.'`, `'Durée de vie projetée de 50+ ans avec une performance sans corrosion dans les environnements les plus rudes du Golfe.'`],
  [`'In-stock inventory with same-week dispatch to all GCC countries via our logistics network.'`, `'Stock disponible avec expédition dans la semaine vers tous les pays du CCG via notre réseau logistique.'`],
  [`'Our engineering team is here to help with product selection, technical queries, and project specifications.'`, `'Notre équipe d\\'ingénierie est là pour vous aider dans la sélection des produits, les questions techniques et les spécifications de projet.'`],
  [`'Contact for full specifications'`, `'Contactez-nous pour les spécifications complètes'`],
  [`'Technical documentation for'`, `'Documentation technique pour'`],
  [`'Need assistance with'`, `'Besoin d\\'aide avec'`],
  [`'Our technical team is here to help you select the right products for your project.'`, `'Notre équipe technique est là pour vous aider à sélectionner les bons produits pour votre projet.'`],

  // products.pipes table labels
  [`'Min Mean Outside Dia. (mm)'`, `'Dia. Ext. Moyen Min. (mm)'`],
  [`'Max Mean Outside Dia. (mm)'`, `'Dia. Ext. Moyen Max. (mm)'`],
  [`'Mean Outside Dia. (mm) - Min'`, `'Dia. Ext. Moyen (mm) - Min'`],
  [`'Mean Outside Dia. (mm) - Max'`, `'Dia. Ext. Moyen (mm) - Max'`],

  // products detail_layout
  [`'High Impact Strength'`, `'Haute Résistance aux Chocs'`],
  [`'Low Maintenance Life'`, `'Durée de Vie à Faible Maintenance'`],
  [`'Product introduction and key characteristics'`, `'Présentation du produit et caractéristiques clés'`],
  [`'Technical advantages and key benefits of this product range'`, `'Avantages techniques et bénéfices clés de cette gamme de produits'`],
  [`'Ideal use cases and industries for this product'`, `'Cas d\\'utilisation idéaux et industries pour ce produit'`],
  [`'Available design types and configurations'`, `'Types de conception et configurations disponibles'`],
  [`'Best practices for optimal performance and longevity'`, `'Meilleures pratiques pour une performance optimale et une longévité maximale'`],
  [`'Access comprehensive technical catalogues, dimensional specifications, and compliance documentation for this product range.'`, `'Accédez aux catalogues techniques complets, aux spécifications dimensionnelles et à la documentation de conformité pour cette gamme de produits.'`],
  [`'Available package sizes and volumes'`, `'Tailles et volumes de conditionnement disponibles'`],
  [`'Crown Weld Heavy Duty PVC Solvent Cement'`, `'Crown Weld Colle PVC Haute Résistance'`],
  [`'A premium, high-strength, clear, heavy-body PVC solvent cement formulated for secure, durable bonding of PVC pipe joints in plumbing, drainage, irrigation, and industrial applications.'`, `'Une colle PVC premium haute résistance, transparente et à corps épais, formulée pour un collage sûr et durable des joints de tuyaux PVC dans les applications de plomberie, d\\'évacuation, d\\'irrigation et industrielles.'`],

  // products.pipes
  [`'Technical dimensions and parameters for all pipe sizes'`, `'Dimensions techniques et paramètres pour toutes les tailles de tuyaux'`],
  [`'No data available. Table data will be populated from product specifications.'`, `'Aucune donnée disponible. Les données du tableau seront renseignées à partir des spécifications du produit.'`],
  [`'Complete range of fittings for this product line'`, `'Gamme complète de raccords pour cette ligne de produits'`],
  [`'No fittings found in this category.'`, `'Aucun raccord trouvé dans cette catégorie.'`],
  [`'Size data will be populated from product specifications.'`, `'Les données de taille seront renseignées à partir des spécifications du produit.'`],
];

// Apply all translations
let count = 0;
translations.forEach(([eng, fr]) => {
  if (content.includes(eng)) {
    content = content.replace(eng, fr);
    count++;
  }
});

fs.writeFileSync('src/i18n/fr.ts', content);
console.log(`Applied ${count} translations to fr.ts`);
