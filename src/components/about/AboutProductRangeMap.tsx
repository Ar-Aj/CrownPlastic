'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from '@/components/common/LocaleLink';
import { PRODUCT_MAP, type ProductCategory, type ProductItem } from '@/data/productMap';
import { PRODUCT_WHEEL_IMAGE_MAP, getCategoryAcronym } from '@/data/productWheelMap';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';
import { getCategoryBySlug } from '@/config/products';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT RANGE WHEEL SELECTOR - Perfectly Centered Circular Layout
// ═══════════════════════════════════════════════════════════════════════════════
//
// WHEEL CENTERING:
// • All positions (hub + nodes) are calculated from the center of the square wrapper
// • Center point: exactly 50% width and 50% height of the aspect-square container
// • Hub uses: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
// • Nodes positioned using: x = centerX + radius*cos(angle), y = centerY + radius*sin(angle)
//
// RESPONSIVE SIZING:
// • Mobile: 320px container, scaled down but same circular geometry
// • Tablet: 400px-520px container
// • Desktop: 520px-640px container, uses more horizontal space
// • All breakpoints render the SAME circular wheel, just scaled
//
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
    primaryDark: '#003B73',
    primary: '#0072BC',
    primaryLight: '#00a4e4',
    dark: '#1a1d23',
    accent: '#38bdf8',
    glowSubtle: 'rgba(56, 189, 248, 0.08)',
};

const START_ANGLE = -90; // Top position (12 o'clock)

// Maps productMap.ts category IDs → dictionary keys under about.galaxy.products
const CATEGORY_KEY_MAP: Record<string, string> = {
    'upvc-drainage-pipes': 'upvc_drainage_pipes',
    'upvc-drainage-fittings': 'upvc_drainage_fittings',
    'pvc-high-pressure-pipes': 'pvc_high_pressure_pipes',
    'pvc-high-pressure-fittings': 'pvc_high_pressure_fittings',
    'pvc-sch-40-fittings': 'pvc_sch_40_fittings',
    'pvc-duct-pipes': 'pvc_duct_pipes',
    'pvc-duct-fittings': 'pvc_duct_fittings',
    'pvc-conduit-pipes': 'pvc_conduit_pipes',
    'ppr-pipes': 'ppr_pipes',
    'hdpe-pipes': 'hdpe_pipes',
    'pex-pipes': 'pex_pipes',
    'fabrications-accessories': 'fabrications_accessories',
    'solvents': 'solvents',
};

// Maps productMap.ts item IDs → dictionary item keys
const ITEM_KEY_MAP: Record<string, string> = {
    // UPVC Drainage Pipes
    'upvc-drainage-pipes-bs5255-bs-en-1329': 'bs5255_bs_en_1329',
    'upvc-drainage-pipes-bs-en-1401': 'bs_en_1401',
    'upvc-drainage-pipes-non-standard': 'non_standard',
    // UPVC Drainage Fittings
    'upvc-drainage-fittings-bs-en-1329': 'bs_en_1329',
    'upvc-drainage-fittings-bs-en-1401': 'fittings_bs_en_1401',
    'upvc-drainage-fittings-pushfit': 'pushfit',
    // PVC High Pressure Pipes
    'pvc-hp-pipes-iso-4422': 'iso_4422',
    'pvc-hp-pipes-din-8061-62': 'din_8061_62',
    'pvc-hp-pipes-bs-en-iso-1452-2': 'bs_en_iso_1452_2',
    'pvc-hp-pipes-bs-3505': 'bs_3505',
    'pvc-hp-pipes-bs-3506': 'bs_3506',
    'pvc-hp-pipes-astm-d1785': 'astm_d1785',
    'pvc-hp-pipes-astm-d2241': 'astm_d2241',
    // PVC High Pressure Fittings
    'pvc-hp-fittings-din-8063': 'din_8063',
    'pvc-hp-fittings-bs-en-1452-3': 'bs_en_1452_3',
    'pvc-hp-fittings-valves': 'valves',
    // PVC SCH 40 Fittings
    'pvc-sch-40-fittings-astm-d2466': 'astm_d2466',
    // PVC Duct Pipes
    'pvc-duct-pipes-nema-tc-2': 'nema_tc_2',
    'pvc-duct-pipes-nema-tc-6-8': 'nema_tc_6_8',
    'pvc-duct-pipes-din-8062': 'din_8062',
    'pvc-duct-pipes-etisalat-du': 'etisalat_du',
    'pvc-duct-pipes-bs-3505-06': 'bs_3505_06',
    'pvc-duct-pipes-non-standard': 'duct_non_standard',
    // PVC Duct Fittings
    'pvc-duct-fittings-socket': 'socket',
    'pvc-duct-fittings-bellmouth': 'bellmouth',
    'pvc-duct-fittings-end-caps': 'end_caps',
    'pvc-duct-fittings-lr-bends-90-45': 'lr_bends_90_45',
    'pvc-duct-fittings-street-lighting-bends': 'street_lighting_bends',
    'pvc-duct-fittings-lightning-bends': 'lightning_bends',
    // PVC Conduit Pipes
    'pvc-conduit-pipes-compression-force': 'compression_force',
    'pvc-conduit-pipes-sch-40': 'sch_40',
    'pvc-conduit-pipes-sch-80': 'sch_80',
    // PP-R Pipes
    'ppr-pipes-sdr11-pn10': 'sdr11_pn10',
    'ppr-pipes-sdr7-4-pn16': 'sdr7_4_pn16',
    'ppr-pipes-sdr6-pn20': 'sdr6_pn20',
    'ppr-pipes-sdr5-pn25': 'sdr5_pn25',
    // HDPE Pipes
    'hdpe-pipes-5mpa-pe63': 'pe63_5mpa',
    'hdpe-pipes-6-3mpa-pe80': 'pe80_6_3mpa',
    'hdpe-pipes-8mpa-pe100': 'pe100_8mpa',
    'hdpe-pipes-din-8072': 'din_8072',
    'hdpe-pipes-asae-s435': 'asae_s435',
    'hdpe-pipes-aust-std-2698': 'aust_std_2698',
    'hdpe-pipes-bs-1972-67': 'bs_1972_67',
    // PEX Pipes
    'pex-pipes-pn-12-5-pn-20': 'pn_12_5_pn_20',
    // Fabrications & Accessories
    'fabrication-grease-trap-type-a': 'grease_trap_type_a',
    'fabrication-grease-trap-type-b': 'grease_trap_type_b',
    'fabrication-grease-trap-type-c': 'grease_trap_type_c',
    'fabrication-grease-trap-type-d': 'grease_trap_type_d',
    'fabrication-accessories': 'accessories',
    // Solvents
    'pvc-solvents': 'pvc_solvents',
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return prefersReducedMotion;
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Calculate node position from center using trigonometry
// ─────────────────────────────────────────────────────────────────────────────

function getNodePosition(
    index: number,
    total: number,
    radius: number,
    startAngle: number = START_ANGLE
): { x: number; y: number; angle: number } {
    const angle = startAngle + index * (360 / total);
    const radians = (angle * Math.PI) / 180;
    return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
        angle, // Return angle for quadrant-based label positioning
    };
}

/**
 * Determine label position based on node's angular position on the circle.
 * Returns CSS classes and styles for positioning labels radially outward.
 * 
 * Quadrants (angles normalized to -180 to 180):
 * - Top (-135 to -45): Label above node
 * - Right (-45 to 45): Label to the right
 * - Bottom (45 to 135): Label below node  
 * - Left (135 to 180 or -180 to -135): Label to the left
 */
function getLabelPosition(angle: number): {
    containerClass: string;
    textAlign: string;
} {
    // Normalize angle to -180 to 180 range
    let normalizedAngle = angle % 360;
    if (normalizedAngle > 180) normalizedAngle -= 360;
    if (normalizedAngle < -180) normalizedAngle += 360;

    // Top quadrant: label above
    if (normalizedAngle >= -135 && normalizedAngle < -45) {
        return {
            containerClass: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
            textAlign: 'text-center',
        };
    }
    // Right quadrant: label to the right
    if (normalizedAngle >= -45 && normalizedAngle < 45) {
        return {
            containerClass: 'left-full ml-2 top-1/2 -translate-y-1/2',
            textAlign: 'text-left',
        };
    }
    // Bottom quadrant: label below
    if (normalizedAngle >= 45 && normalizedAngle < 135) {
        return {
            containerClass: 'top-full mt-2 left-1/2 -translate-x-1/2',
            textAlign: 'text-center',
        };
    }
    // Left quadrant: label to the left
    return {
        containerClass: 'right-full mr-2 top-1/2 -translate-y-1/2',
        textAlign: 'text-right',
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** 
 * Central hub - positioned at exact center
 * CENTERING: Uses left/top 50% with margin offset (not transform) to avoid
 * conflict with Framer Motion scale animations which override CSS transforms.
 */
function CentralHub({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hubSize: _hubSize, // Kept for backwards compatibility but not strictly used for sizing anymore
    activeCategoryId,
    reducedMotion,
    hubLabel,
}: {
    hubSize: number;
    activeCategoryId: string;
    reducedMotion: boolean;
    hubLabel?: string;
}) {
    const [imageError, setImageError] = useState(false);
    const imageSrc = PRODUCT_WHEEL_IMAGE_MAP[activeCategoryId];
    const hasImage = imageSrc && !imageError;

    useEffect(() => {
        setImageError(false);
    }, [activeCategoryId]);

    const isSquare = activeCategoryId === 'pvc-duct-fittings';

    // Hub is centered using absolute positioning and translate on a static wrapper.
    // This avoids transform conflicts with the Framer Motion scale animation on the child.
    return (
        <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center justify-center">
            <motion.div
                className={`transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden p-0 rounded-2xl sm:rounded-3xl ${isSquare ? 'aspect-square' : 'aspect-video'} w-36 sm:w-48 md:w-52 lg:w-56 xl:w-64 2xl:w-72 max-w-sm md:max-w-md`}
                initial={reducedMotion ? {} : { scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: hasImage
                        ? COLORS.primaryDark
                        : `radial-gradient(circle at 35% 35%, ${COLORS.primaryLight}, ${COLORS.primary}, ${COLORS.primaryDark})`,
                    boxShadow: `
            0 0 0 3px ${COLORS.accent}35,
            0 0 30px rgba(56, 189, 248, 0.2),
            inset 0 2px 6px rgba(255,255,255,0.15)
          `,
                }}
            >
                {hasImage && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategoryId}
                            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={imageSrc}
                                alt="Active category"
                                fill
                                className="object-cover"
                                onError={() => setImageError(true)}
                                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 384px"
                            />
                        </motion.div>
                    </AnimatePresence>
                )}

                {!hasImage && (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                        <span className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight">Crown</span>
                        <span className="text-white/70 text-[10px] sm:text-xs lg:text-sm leading-tight mt-0.5">{hubLabel || 'Product Range'}</span>
                    </div>
                )}

                {hasImage && (
                    <div
                        className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                        style={{
                            background: 'linear-gradient(to bottom, transparent 55%, rgba(0,59,115,0.5) 100%)',
                        }}
                    />
                )}
            </motion.div>
        </div>
    );
}

/** 
 * Subtle centered glow
 * CENTERING: Uses negative margin to center without transform
 */
function CenteredGlow({ size, reducedMotion }: { size: number; reducedMotion: boolean }) {
    const glowSize = size * 1.4;
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none z-0"
            style={{
                left: '50%',
                top: '50%',
                width: glowSize,
                height: glowSize,
                marginLeft: -glowSize / 2,
                marginTop: -glowSize / 2,
                background: `radial-gradient(circle at center, ${COLORS.glowSubtle} 0%, transparent 70%)`,
            }}
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        />
    );
}

/** 
 * Orbit ring - the circle that nodes sit on
 * CENTERING: Uses negative margin to center without transform conflicts
 */
function OrbitRing({
    orbitRadius,
    reducedMotion,
}: {
    orbitRadius: number;
    reducedMotion: boolean;
}) {
    const diameter = orbitRadius * 2;

    return (
        <motion.div
            className="absolute rounded-full pointer-events-none z-0"
            style={{
                left: '50%',
                top: '50%',
                width: diameter,
                height: diameter,
                marginLeft: -orbitRadius,
                marginTop: -orbitRadius,
                border: `1px solid ${COLORS.accent}20`,
            }}
            initial={reducedMotion ? {} : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
        />
    );
}

/** 
 * Category node on orbit
 * CENTERING: Node position is calculated from container center (50%, 50%)
 * using trigonometry: x = cos(angle) * radius, y = sin(angle) * radius
 * Margin offset used instead of transform to avoid Framer Motion conflicts
 */
function WheelNode({
    category,
    position,
    index,
    nodeSize,
    isActive,
    isHovered,
    onClick,
    onMouseEnter,
    onMouseLeave,
    reducedMotion,
    language,
}: {
    category: ProductCategory;
    position: { x: number; y: number; angle: number };
    index: number;
    nodeSize: number;
    isActive: boolean;
    isHovered: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    reducedMotion: boolean;
    language: 'en' | 'ar' | 'fr';
}) {
    const [imageError, setImageError] = useState(false);
    const imageSrc = PRODUCT_WHEEL_IMAGE_MAP[category.id];
    const acronym = getCategoryAcronym(category.id);
    const hasImage = imageSrc && !imageError;

    const nodeScale = isActive ? 1.1 : isHovered ? 1.05 : 1;
    
    // Get quadrant-based label positioning
    const labelPos = getLabelPosition(position.angle);

    // Position node at center + offset, using margin to center the node itself
    return (
        <motion.button
            className="absolute z-10"
            style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
                width: nodeSize,
                height: nodeSize,
                marginLeft: -nodeSize / 2,
                marginTop: -nodeSize / 2,
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
            animate={{ scale: reducedMotion ? 1 : nodeScale, opacity: 1 }}
            transition={{ duration: 0.2, delay: reducedMotion ? 0 : index * 0.05 }}
            aria-pressed={isActive}
            aria-label={`Select ${category.name}`}
        >
            <div
                className="w-full h-full rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden"
                style={{
                    background: isActive
                        ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
                        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: isActive
                        ? `0 0 16px ${COLORS.accent}80, 0 3px 12px rgba(0,0,0,0.15)`
                        : '0 2px 10px rgba(0,0,0,0.08)',
                    border: isActive ? `2px solid ${COLORS.accent}` : '1.5px solid rgba(0,0,0,0.05)',
                }}
            >
                {hasImage ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={imageSrc}
                            alt={category.name}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                            sizes={`${nodeSize}px`}
                        />
                    </div>
                ) : (
                    <span
                        className={`font-bold text-sm sm:text-base lg:text-lg ${isActive ? 'text-white' : 'text-slate-700'}`}
                    >
                        {acronym}
                    </span>
                )}
            </div>

            {/* Label positioned radially based on quadrant */}
            <div
                className={`absolute z-30 pointer-events-none ${labelPos.containerClass}`}
            >
                <div
                    className={`px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-tight shadow-md transition-all duration-200 whitespace-normal max-w-[90px] sm:max-w-[100px] lg:max-w-[110px] ${labelPos.textAlign} ${isActive
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                    style={{ 
                        textWrap: 'balance',
                    }}
                >
                    {localizedValue(language, category.name, category.nameAr, category.nameFr)}
                </div>
            </div>

        </motion.button>
    );
}

/** Detail panel - mobile version (no scroll constraints) */
function DetailPanelMobile({
    category,
    reducedMotion,
    t,
    language,
}: {
    category: ProductCategory;
    reducedMotion: boolean;
    t: (key: string) => string;
    language: 'en' | 'ar' | 'fr';
}) {
    const catKey = CATEGORY_KEY_MAP[category.id] || category.id;
    return (
        <motion.div
            key={category.id}
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
        >
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 text-center mb-2">
                {localizedValue(language, category.name, category.nameAr, category.nameFr)}
            </h3>

            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-center">
                {t(`about.galaxy.products.${catKey}.description`)}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto">
                {category.items.map((item) => (
                    <ItemChip key={item.id} item={item} categoryId={category.id} reducedMotion={reducedMotion} language={language} t={t} />
                ))}
            </div>
        </motion.div>
    );
}

/** Detail panel - desktop version (with internal scroll for item grid) */
function DetailPanelDesktop({
    category,
    reducedMotion,
    t,
    language,
}: {
    category: ProductCategory;
    reducedMotion: boolean;
    t: (key: string) => string;
    language: 'en' | 'ar' | 'fr';
}) {
    const catKey = CATEGORY_KEY_MAP[category.id] || category.id;
    return (
        <motion.div
            key={category.id}
            layout
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ 
                duration: 0.2,
                layout: { duration: 0.3, ease: 'easeInOut' }
            }}
            className="w-full"
        >
            {/* Header section */}
            <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 text-center lg:text-left mb-2">
                    {localizedValue(language, category.name, category.nameAr, category.nameFr)}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl text-center lg:text-left">
                    {t(`about.galaxy.products.${catKey}.description`)}
                </p>
            </div>

            {/* Item grid - no scroll, natural height */}
            <div className="mt-4">
                <div className="grid gap-3 grid-cols-2 xl:grid-cols-3">
                    {category.items.map((item) => (
                        <ItemChip key={item.id} item={item} categoryId={category.id} reducedMotion={reducedMotion} language={language} t={t} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/** Item chip - entire card is clickable, links to specific sub-product detail page */
function ItemChip({
    item,
    categoryId,
    reducedMotion,
    language,
    t,
}: {
    item: ProductItem;
    categoryId: string;
    reducedMotion: boolean;
    language: 'en' | 'ar' | 'fr';
    t: (key: string) => string;
}) {
    const [imgError, setImgError] = useState(false);

    // Map category IDs to their product page slugs
    const categorySlugMap: Record<string, string> = {
        'upvc-drainage-pipes': 'upvc-drainage-pipes',
        'upvc-drainage-fittings': 'upvc-drainage-fittings',
        'pvc-high-pressure-pipes': 'pvc-high-pressure-pipes',
        'pvc-high-pressure-fittings': 'pvc-high-pressure-fittings',
        'pvc-sch-40-fittings': 'pvc-sch-40-fittings',
        'pvc-duct-pipes': 'pvc-duct-pipes',
        'pvc-duct-fittings': 'pvc-duct-fittings',
        'pvc-conduit-pipes': 'pvc-conduit-pipes',
        'ppr-pipes': 'ppr-pipes',
        'hdpe-pipes': 'hdpe-pipes',
        'pex-pipes': 'pex-pipes',
        'fabrications-accessories': 'fabrications-accessories',
        'solvents': 'solvents',
    };

    const categorySlug = categorySlugMap[categoryId] || categoryId;
    const catKey = CATEGORY_KEY_MAP[categoryId] || categoryId;
    const itemKey = ITEM_KEY_MAP[item.id] || item.id;

    // Link directly to the specific sub-product detail page using the item ID as the product slug
    const detailHref = `/products/${categorySlug}/${item.id}`;

    const hasImage = !!item.image && !imgError;
    
    const catData = getCategoryBySlug(categorySlug);
    const product = catData?.subProducts.find((p: { slug: string }) => p.slug === item.id);

    return (
        <Link href={detailHref} className="block group">
            <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
            >
                <div className="flex flex-col gap-0">

                    {/* Thumbnail image — 16:9 aspect ratio, full width across card top */}
                    {hasImage && (
                        <div className="relative w-full aspect-video overflow-hidden rounded-t-xl flex-shrink-0">
                            <Image
                                src={item.image!}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 280px, 320px"
                                className="object-contain group-hover:scale-105 transition-transform duration-300 bg-slate-100"
                                onError={() => setImgError(true)}
                            />
                            {/* subtle gradient overlay at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/5 pointer-events-none" />
                        </div>
                    )}

                    {/* Text content */}
                    <div className="flex-1 min-w-0 px-3 py-2.5 flex flex-col justify-between gap-1.5">
                        <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                                {product ? localizedValue(language, product.name, product.nameAr, product.nameFr) : localizedValue(language, item.name, item.nameAr, item.nameFr)}
                            </h4>
                            <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed mt-0.5 line-clamp-2">
                                {product ? localizedValue(language, product.shortDescription, product.shortDescriptionAr, product.shortDescriptionFr) : localizedValue(language, item.shortInfo || "", item.shortInfoAr, item.shortInfoFr)}
                            </p>
                        </div>

                        {/* Know More badge — bottom right */}
                        <div className="flex justify-end">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-gradient-to-r from-[#0072BC] to-[#003B73] text-white">
                                {t(`about.galaxy.products.${catKey}.items.${itemKey}.btn`)}
                            </span>
                        </div>
                    </div>

                </div>
            </motion.div>
        </Link>
    );
}



// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutProductRangeMap() {
    const [activeCategoryId, setActiveCategoryId] = useState<string>(PRODUCT_MAP[0]?.id ?? '');
    const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(null);
    const reducedMotion = useReducedMotion();
    const t = useT();
    const { isRTL, language } = useLanguage();

    const activeCategory = PRODUCT_MAP.find((c) => c.id === activeCategoryId) ?? PRODUCT_MAP[0];

    const totalCategories = PRODUCT_MAP.length;
    const totalItems = useMemo(
        () => PRODUCT_MAP.reduce((sum, c) => sum + c.items.length, 0),
        []
    );

    const handleCategoryClick = useCallback((id: string) => {
        setActiveCategoryId(id);
    }, []);

    // Responsive sizing for 13 category nodes - enlarged nodes and hub
    // Increased orbit radius to accommodate larger nodes + external labels
    const wheelConfig = {
        mobile: { containerSize: 380, hubSize: 90, hubImageSize: 65, orbitRadius: 140, nodeSize: 48, nodeImageSize: 26 },
        sm: { containerSize: 480, hubSize: 110, hubImageSize: 80, orbitRadius: 175, nodeSize: 56, nodeImageSize: 30 },
        lg: { containerSize: 640, hubSize: 130, hubImageSize: 95, orbitRadius: 240, nodeSize: 68, nodeImageSize: 36 },
        xl: { containerSize: 740, hubSize: 150, hubImageSize: 110, orbitRadius: 280, nodeSize: 78, nodeImageSize: 42 },
        '2xl': { containerSize: 840, hubSize: 170, hubImageSize: 125, orbitRadius: 320, nodeSize: 88, nodeImageSize: 48 },
    };

    return (
        <section
            id="crown-product-range"
            className="relative w-full max-w-full overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-12 md:pb-16 lg:pb-20"
            aria-labelledby="product-range-heading"
        >
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.dark} 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Main container */}
            <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">

                {/* HEADER - full width on all breakpoints */}
                <div className="text-center mb-6 lg:mb-10">
                    <motion.h2
                        id="product-range-heading"
                        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2"
                    >
                        {t('about.galaxy.title')}
                    </motion.h2>

                    <motion.p
                        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
                    >
                        {t('about.galaxy.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.1 }}
                        className="inline-flex items-center gap-2.5 mt-3 px-3 py-1.5 rounded-full bg-slate-800 text-white text-xs"
                    >
                        <span className="font-semibold">{totalCategories}</span>
                        <span className="text-slate-300">{t('about.galaxy.stats_systems')}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="font-semibold">{totalItems}</span>
                        <span className="text-slate-300">{t('about.galaxy.stats_products')}</span>
                    </motion.div>
                </div>

                {/* ═══════════════════════════════════════════════════════════════
            RESPONSIVE LAYOUT:
            • Mobile/Tablet (< lg): Vertical stack, compact wheel
            • Desktop (lg+): Horizontal grid, wheel left | card right
        ═══════════════════════════════════════════════════════════════ */}

                {/* Mobile/Tablet Layout (< lg): Vertical stack */}
                <div className="lg:hidden flex flex-col items-center w-full max-w-full overflow-x-hidden">
                    {/* Compact wheel for mobile/tablet */}
                    <div className="w-full max-w-full mb-4 sm:mb-6 overflow-hidden">
                        <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[460px] md:max-w-[520px] overflow-visible">
                            <CenteredGlow size={350} reducedMotion={reducedMotion} />
                            <OrbitRing orbitRadius={wheelConfig.mobile.orbitRadius} reducedMotion={reducedMotion} />
                            <CentralHub
                                hubSize={wheelConfig.mobile.hubSize}
                                activeCategoryId={activeCategoryId}
                                reducedMotion={reducedMotion}
                                hubLabel={t('about.galaxy.hub_label')}
                            />
                            {PRODUCT_MAP.map((category, index) => {
                                const position = getNodePosition(index, PRODUCT_MAP.length, wheelConfig.mobile.orbitRadius);
                                return (
                                    <WheelNode
                                        key={category.id}
                                        category={category}
                                        position={position}
                                        index={index}
                                        nodeSize={wheelConfig.mobile.nodeSize}
                                        isActive={activeCategoryId === category.id}
                                        isHovered={hoveredCategoryId === category.id}
                                        onClick={() => handleCategoryClick(category.id)}
                                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                                        onMouseLeave={() => setHoveredCategoryId(null)}
                                        reducedMotion={reducedMotion}
                                        language={language}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Detail card for mobile/tablet */}
                    <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                        className="w-full max-w-full rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-5 sm:px-6 sm:py-6 sm:max-w-[400px] md:max-w-[480px] mx-auto"
                    >
                        <AnimatePresence mode="wait">
                            {activeCategory && (
                                <DetailPanelMobile
                                    key={activeCategory.id}
                                    category={activeCategory}
                                    reducedMotion={reducedMotion}
                                    t={t as (key: string) => string}
                                    language={language}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Desktop Layout (lg+): Two-column grid - Wheel | Detail, reversed in RTL */}
                <div 
                    className={`hidden lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] gap-6 xl:gap-10 items-start lg:min-h-[620px] xl:min-h-[700px] 2xl:min-h-[780px] ${
                        isRTL ? 'direction-rtl' : ''
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    {/* Wheel column - order changes based on direction */}
                    <div className={`w-full flex items-center ${isRTL ? 'justify-end pr-0 xl:pr-4' : 'justify-start pl-0 xl:pl-4'} ${isRTL ? 'order-2' : 'order-1'}`}>
                        <div className="relative aspect-square w-full max-w-[580px] xl:max-w-[680px] 2xl:max-w-[780px] overflow-visible">
                            <CenteredGlow size={550} reducedMotion={reducedMotion} />
                            <OrbitRing orbitRadius={wheelConfig.lg.orbitRadius} reducedMotion={reducedMotion} />
                            <CentralHub
                                hubSize={wheelConfig.lg.hubSize}
                                activeCategoryId={activeCategoryId}
                                reducedMotion={reducedMotion}
                                hubLabel={t('about.galaxy.hub_label')}
                            />
                            {PRODUCT_MAP.map((category, index) => {
                                const position = getNodePosition(index, PRODUCT_MAP.length, wheelConfig.lg.orbitRadius);
                                return (
                                    <WheelNode
                                        key={category.id}
                                        category={category}
                                        position={position}
                                        index={index}
                                        nodeSize={wheelConfig.lg.nodeSize}
                                        isActive={activeCategoryId === category.id}
                                        isHovered={hoveredCategoryId === category.id}
                                        onClick={() => handleCategoryClick(category.id)}
                                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                                        onMouseLeave={() => setHoveredCategoryId(null)}
                                        reducedMotion={reducedMotion}
                                        language={language}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Detail card column - h-fit with smooth height transition */}
                    <motion.div
                        layout
                        initial={reducedMotion ? {} : { opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.35, 
                            delay: 0.15,
                            layout: { duration: 0.3, ease: 'easeInOut' }
                        }}
                        className={`w-full h-fit self-start max-h-[90vh] rounded-2xl bg-white shadow-lg border border-slate-100 px-6 py-6 overflow-y-auto ${isRTL ? 'order-1' : 'order-2'}`}
                        dir="ltr"
                    >
                        <AnimatePresence mode="wait">
                            {activeCategory && (
                                <DetailPanelDesktop
                                    key={activeCategory.id}
                                    category={activeCategory}
                                    reducedMotion={reducedMotion}
                                    t={t as (key: string) => string}
                                    language={language}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}