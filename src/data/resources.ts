// ═══════════════════════════════════════════════════════════════════════════════
// CROWN TECHNICAL LIBRARY — Resource Data
// Categorized PDF resource entries for the /resources page
// ═══════════════════════════════════════════════════════════════════════════════

export interface ResourceItem {
    id: string;
    title: string;
    titleAr: string;
    category: ResourceCategory;
    description: string;
    descriptionAr: string;
    standard?: string;
    path: string;
    size: string;
}

export type ResourceCategory =
    | 'Corporate Profile'
    | 'Product Catalogues'
    | 'Technical Certifications'
    | 'Technical Specifications'
    | 'Installation & Standards';

export interface CategoryMeta {
    id: ResourceCategory;
    icon: string; // Emoji for simplicity; could be swapped for SVG
    description: string;
    descriptionAr: string;
}

export const CATEGORY_META: CategoryMeta[] = [
    {
        id: 'Technical Certifications',
        icon: '🛡️',
        description: 'ISO management system certificates',
        descriptionAr: 'شهادات نظام الإدارة ISO',
    },
    {
        id: 'Product Catalogues',
        icon: '📘',
        description: 'Complete product range catalogues with specifications',
        descriptionAr: 'كتالوجات مجموعة المنتجات الكاملة مع المواصفات',
    },
    {
        id: 'Technical Specifications',
        icon: '📐',
        description: 'Material properties, fittings, and technical data',
        descriptionAr: 'خصائص المواد والتوصيلات والبيانات الفنية',
    },
    {
        id: 'Installation & Standards',
        icon: '📋',
        description: 'Standards compliance and installation references',
        descriptionAr: 'الامتثال للمعايير ومراجع التركيب',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// All resources — maps to actual PDFs in /public/pdfs/ (URL-encoded)
// ─────────────────────────────────────────────────────────────────────────────

export const resources: ResourceItem[] = [
    // ── Technical Certifications ──────────────────────────────────────────────
    {
        id: 'cert-iso-9001',
        title: 'ISO 9001:2015 Certificate',
        titleAr: 'شهادة ISO 9001:2015',
        category: 'Technical Certifications',
        description: 'Quality Management System certification for Crown Plastic Pipes Factory.',
        descriptionAr: 'شهادة نظام إدارة الجودة لمصنع كراون للأنابيب البلاستيكية.',
        standard: 'ISO 9001:2015',
        path: '/pdfs/CERTIFICATE%20ISO%209001_2015.pdf',
        size: '0.4 MB',
    },
    {
        id: 'cert-iso-14001',
        title: 'ISO 14001:2015 Certificate',
        titleAr: 'شهادة ISO 14001:2015',
        category: 'Technical Certifications',
        description: 'Environmental Management System certification.',
        descriptionAr: 'شهادة نظام الإدارة البيئية.',
        standard: 'ISO 14001:2015',
        path: '/pdfs/CERTIFICATE%20ISO%2014001_2015.pdf',
        size: '0.4 MB',
    },
    {
        id: 'cert-iso-45001',
        title: 'ISO 45001:2018 Certificate',
        titleAr: 'شهادة ISO 45001:2018',
        category: 'Technical Certifications',
        description: 'Occupational Health & Safety Management System certification.',
        descriptionAr: 'شهادة نظام إدارة الصحة والسلامة المهنية.',
        standard: 'ISO 45001:2018',
        path: '/pdfs/CERTIFICATE%20ISO%2045001_2018.pdf',
        size: '0.4 MB',
    },

    // ── Product Catalogues ────────────────────────────────────────────────────
    {
        id: 'cat-pressure-pipes',
        title: 'UPVC Pressure Pipes Catalogue',
        titleAr: 'كتالوج أنابيب الضغط UPVC',
        category: 'Product Catalogues',
        description: 'Metric & inch series pressure pipes — PN6 to PN16 ratings, BS EN 1452, DIN 8061/62.',
        descriptionAr: 'أنابيب الضغط بالسلسلة المترية والبوصة — تصنيفات PN6 إلى PN16.',
        standard: 'BS EN 1452 / ASTM D1785',
        path: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf',
        size: '2.4 MB',
    },
    {
        id: 'cat-drainage-pipes',
        title: 'UPVC Drainage Pipes Catalogue',
        titleAr: 'كتالوج أنابيب الصرف UPVC',
        category: 'Product Catalogues',
        description: 'Above & underground drainage pipe systems with full size tables.',
        descriptionAr: 'أنظمة أنابيب الصرف الأرضية وتحت الأرض مع جداول الأحجام الكاملة.',
        standard: 'BS EN 1329 / BS EN 1401',
        path: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf',
        size: '1.2 MB',
    },
    {
        id: 'cat-conduit-pipes',
        title: 'PVC Conduit Pipes Catalogue',
        titleAr: 'كتالوج أنابيب قنوات PVC',
        category: 'Product Catalogues',
        description: 'Schedule 40 & 80 electrical conduit pipes — 320N to 1250N crush resistance.',
        descriptionAr: 'أنابيب قنوات كهربائية جدول 40 و 80 — مقاومة سحق 320N إلى 1250N.',
        standard: 'BS 4607',
        path: '/pdfs/UPVC%20CONDUIT%20PIPE.pdf',
        size: '0.7 MB',
    },
    {
        id: 'cat-duct-pipes',
        title: 'PVC Duct Pipes & Accessories',
        titleAr: 'أنابيب وملحقات قنوات UPVC',
        category: 'Product Catalogues',
        description: 'Telecom & electrical cable protection duct systems.',
        descriptionAr: 'أنظمة قنوات حماية كابلات الاتصالات والكهرباء.',
        standard: 'BS EN 61386',
        path: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf',
        size: '1.8 MB',
    },
    {
        id: 'cat-ppr-pipes',
        title: 'PPR Pipes Catalogue',
        titleAr: 'كتالوج أنابيب PPR',
        category: 'Product Catalogues',
        description: 'Hot & cold water PPR pipe systems — PN10, PN16, PN20.',
        descriptionAr: 'أنظمة أنابيب المياه الساخنة والباردة PPR — PN10، PN16، PN20.',
        standard: 'DIN 8077/78',
        path: '/pdfs/PPR%20PIPES.pdf',
        size: '1.4 MB',
    },
    {
        id: 'cat-hdpe-system',
        title: 'Polyethylene Pipe Systems',
        titleAr: 'أنظمة أنابيب البولي إيثيلين',
        category: 'Product Catalogues',
        description: 'HDPE PE63/80/100 pipes for irrigation & water distribution.',
        descriptionAr: 'أنابيب HDPE PE63/80/100 للري وتوزيع المياه.',
        standard: 'ISO 4427',
        path: '/pdfs/POLYETHYLENE%20PIPE%20SYSTEM.pdf',
        size: '2.0 MB',
    },
    {
        id: 'cat-fabrication',
        title: 'UPVC Fabrication & Accessories',
        titleAr: 'التصنيع والملحقات UPVC',
        category: 'Product Catalogues',
        description: 'Custom fabrication options and system accessories catalogue.',
        descriptionAr: 'خيارات التصنيع المخصصة وكتالوج ملحقات النظام.',
        path: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf',
        size: '1.1 MB',
    },

    // ── Technical Specifications ──────────────────────────────────────────────
    {
        id: 'tech-pressure-fittings-astm',
        title: 'Pressure Fittings — ASTM D2466',
        titleAr: 'توصيلات الضغط — ASTM D2466',
        category: 'Technical Specifications',
        description: 'ASTM D2466 Schedule 40 fittings for inch series systems.',
        descriptionAr: 'توصيلات ASTM D2466 جدول 40 لسلسلة البوصة.',
        standard: 'ASTM D 2466 SCH-40',
        path: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20ASTM%20D%202466%20SCH-40.pdf',
        size: '2.1 MB',
    },
    {
        id: 'tech-pressure-fittings-bs',
        title: 'Pressure Fittings — BS EN 14523',
        titleAr: 'توصيلات الضغط — BS EN 14523',
        category: 'Technical Specifications',
        description: 'BS EN 14523 & BS 4346 PN15 fittings specifications.',
        descriptionAr: 'مواصفات توصيلات BS EN 14523 و BS 4346 PN15.',
        standard: 'BS EN 14523 / BS 4346',
        path: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20BS%20EN%2014523%20-%20BS%204346%20PN%2015.pdf',
        size: '2.5 MB',
    },
    {
        id: 'tech-pressure-fittings-din',
        title: 'Pressure Fittings — DIN 8063',
        titleAr: 'توصيلات الضغط — DIN 8063',
        category: 'Technical Specifications',
        description: 'DIN 8063 fittings for metric pressure systems.',
        descriptionAr: 'توصيلات DIN 8063 لأنظمة الضغط المترية.',
        standard: 'DIN 8063',
        path: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20DIN%208063.pdf',
        size: '2.1 MB',
    },
    {
        id: 'tech-drainage-fittings-1329',
        title: 'Drainage Fittings — BS EN 1329',
        titleAr: 'توصيلات الصرف — BS EN 1329',
        category: 'Technical Specifications',
        description: 'Above ground drainage fittings (supersedes BS 5255 & BS 4514).',
        descriptionAr: 'توصيلات صرف أرضية (تحل محل BS 5255 و BS 4514).',
        standard: 'BS EN 1329-1:2014',
        path: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%2C2014%20-%20SUPERSEDED%20BS%205255%20AND%20BS4514.pdf',
        size: '2.7 MB',
    },
    {
        id: 'tech-drainage-fittings-1401',
        title: 'Drainage Fittings — BS EN 1401',
        titleAr: 'توصيلات الصرف — BS EN 1401',
        category: 'Technical Specifications',
        description: 'Underground drainage fittings (supersedes BS 4660 & BS 5481).',
        descriptionAr: 'توصيلات صرف تحت الأرض (تحل محل BS 4660 و BS 5481).',
        standard: 'BS EN 1401',
        path: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20AND%20BS%205481.pdf',
        size: '1.3 MB',
    },
    {
        id: 'tech-material-properties',
        title: 'Technical Specifications & Material Properties',
        titleAr: 'المواصفات الفنية وخصائص المواد',
        category: 'Technical Specifications',
        description: 'Material properties, chemical resistance & testing data for UPVC systems.',
        descriptionAr: 'خصائص المواد ومقاومة المواد الكيميائية وبيانات الاختبار لأنظمة UPVC.',
        standard: 'ASTM / BS EN / DIN',
        path: '/pdfs/UPVC%20TECHNICAL%20SPECIFICATIONS%20AND%20MATERIAL%20PROPERTIES.pdf',
        size: '3.2 MB',
    },

    // ── Installation & Standards ──────────────────────────────────────────────
    {
        id: 'std-pipes-fittings',
        title: 'UPVC Pipes & Fittings Standards',
        titleAr: 'معايير أنابيب وتوصيلات UPVC',
        category: 'Installation & Standards',
        description: 'Complete standards compliance index for all UPVC piping systems.',
        descriptionAr: 'فهرس الامتثال الكامل للمعايير لجميع أنظمة أنابيب UPVC.',
        standard: 'BS / DIN / ASTM / ISO',
        path: '/pdfs/UPVC%20PIPES%20AND%20FITTINGS%20STANDARDS.pdf',
        size: '0.6 MB',
    },
];
