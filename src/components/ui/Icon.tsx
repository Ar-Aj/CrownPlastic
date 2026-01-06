'use client';

import {
  Factory,
  Droplets,
  Wrench,
  Zap,
  FlaskConical,
  Package,
  Shield,
  ShieldCheck,
  Award,
  BadgeCheck,
  Trophy,
  CheckCircle,
  CircleCheck,
  Truck,
  Calendar,
  Users,
  Globe,
  Building2,
  Cog,
  Microscope,
  Atom,
  Leaf,
  Recycle,
  Flame,
  ThermometerSun,
  Gauge,
  FileText,
  Download,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  Telescope,
  Settings,
  Bot,
  Cpu,
  Cable,
  Pipette,
  Waves,
  Plug,
  CircuitBoard,
  Search,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  ArrowRight,
  GitCompare,
  type LucideProps,
} from 'lucide-react';
import { forwardRef } from 'react';

// Semantic icon mapping for B2B industrial pipe manufacturer
const iconMap = {
  // Manufacturing & Factory
  factory: Factory,
  manufacturing: Factory,
  building: Building2,
  
  // Water & Plumbing
  water: Droplets,
  droplet: Droplets,
  plumbing: Pipette,
  waves: Waves,
  
  // Tools & Installation
  tools: Wrench,
  wrench: Wrench,
  settings: Settings,
  cog: Cog,
  
  // Electrical & Ducting
  electric: Zap,
  lightning: Zap,
  plug: Plug,
  cable: Cable,
  conduit: CircuitBoard,
  
  // Innovation & R&D
  innovation: FlaskConical,
  lab: FlaskConical,
  flask: FlaskConical,
  microscope: Microscope,
  atom: Atom,
  
  // Logistics & Products
  package: Package,
  box: Package,
  logistics: Truck,
  truck: Truck,
  delivery: Truck,
  
  // Quality & Certification
  quality: Shield,
  shield: Shield,
  certified: ShieldCheck,
  'shield-check': ShieldCheck,
  award: Award,
  badge: BadgeCheck,
  'badge-check': BadgeCheck,
  trophy: Trophy,
  check: CheckCircle,
  'check-circle': CircleCheck,
  verified: CircleCheck,
  
  // Company Stats
  calendar: Calendar,
  years: Calendar,
  users: Users,
  customers: Users,
  global: Globe,
  globe: Globe,
  countries: Globe,
  
  // Sustainability
  eco: Leaf,
  leaf: Leaf,
  recycle: Recycle,
  sustainable: Recycle,
  
  // Climate & Testing
  climate: ThermometerSun,
  temperature: ThermometerSun,
  heat: Flame,
  fire: Flame,
  gauge: Gauge,
  pressure: Gauge,
  
  // Vision & Mission
  mission: Target,
  target: Target,
  vision: Telescope,
  telescope: Telescope,
  
  // Documents
  document: FileText,
  file: FileText,
  download: Download,
  
  // Contact
  phone: Phone,
  email: Mail,
  mail: Mail,
  location: MapPin,
  'map-pin': MapPin,
  clock: Clock,
  hours: Clock,
  
  // Technology
  robot: Bot,
  automation: Bot,
  cpu: Cpu,
  technology: Cpu,
  
  // UI & Navigation (Phase 2 additions)
  search: Search,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  plus: Plus,
  minus: Minus,
  arrow: ArrowRight,
  arrowRight: ArrowRight,
  compare: GitCompare,
  tool: Wrench,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  size?: number | string;
  className?: string;
}

/**
 * Unified Icon component for consistent iconography across the site.
 * Uses Lucide React icons with semantic naming for B2B industrial context.
 * 
 * @example
 * <Icon name="factory" size={24} className="text-primary" />
 * <Icon name="quality" className="w-6 h-6 text-primary hover:text-accent" />
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, className = '', ...props }, ref) => {
    const IconComponent = iconMap[name];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in icon map`);
      return null;
    }
    
    return (
      <IconComponent
        ref={ref}
        size={size}
        className={`transition-colors duration-200 ${className}`}
        strokeWidth={1.5}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon, iconMap };
export default Icon;
