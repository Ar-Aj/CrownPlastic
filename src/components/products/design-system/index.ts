// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PRODUCT DESIGN SYSTEM - Exports
// ═══════════════════════════════════════════════════════════════════════════════
//
// Unified design system for all product-related pages in Crown Plastic Pipes.
//
// USAGE:
// import { ProductSection, ProductCardSurface, ... } from '@/components/products/design-system';
//
// ═══════════════════════════════════════════════════════════════════════════════

// Theme constants
export * from './theme';

// Section wrapper
export { 
  default as ProductSection,
  ProductSection as ProductSectionComponent,
  ProductSectionHeader,
  type ProductSectionProps,
  type SectionBackground,
  type SectionSize,
  type SectionHeaderProps,
} from './ProductSection';

// Card surface
export {
  default as ProductCardSurface,
  ProductCardSurface as ProductCardSurfaceComponent,
  ProductCardHeader,
  ProductCardImage,
  ProductCardFooter,
  type ProductCardSurfaceProps,
  type CardVariant,
  type AccentColor,
  type CardHeaderProps,
  type CardImageProps,
  type CardFooterProps,
} from './ProductCardSurface';

// Background pattern
export {
  default as ProductBackgroundPattern,
  ProductBackgroundPattern as ProductBackgroundPatternComponent,
  PatternOverlay,
  RadialGlowOverlay,
  SectionDivider,
  PipeBorderWrapper,
  type ProductBackgroundPatternProps,
  type PatternOverlayProps,
  type RadialGlowOverlayProps,
  type SectionDividerProps,
  type PipeBorderWrapperProps,
  type PatternStyle,
  type GlowIntensity,
} from './ProductBackgroundPattern';

// Hero badges
export {
  default as ProductHeroBadge,
  ProductHeroBadge as ProductHeroBadgeComponent,
  ProductBadgeRow,
  ProductStatBadge,
  FloatingBadgeGroup,
  type ProductHeroBadgeProps,
  type BadgeRowProps,
  type StatBadgeProps,
  type FloatingBadgeGroupProps,
  type BadgeVariant,
  type BadgeSize,
} from './ProductHeroBadge';

// Tables
export {
  default as ProductTable,
  ProductTable as ProductTableComponent,
  ProductSpecsTable,
  TableHeaderBadge,
  type ProductTableProps,
  type TableColumn,
  type ProductSpecsTableProps,
  type SpecItem,
  type TableHeaderBadgeProps,
} from './ProductTable';
