import Link from 'next/link';
import Image from 'next/image';

interface CardItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  tags?: string[];
  image?: string;
  alt?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ items, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden"
        >
          {/* Product Image */}
          {item.image ? (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt || `${item.title} product shot`}
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="h-32 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
              <span className="text-5xl">{item.icon || '📦'}</span>
            </div>
          )}

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
