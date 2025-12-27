import Link from 'next/link';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  showBackLink?: boolean;
}

/**
 * Reusable "Coming Soon" placeholder component
 * Used when COMING_SOON_MODE is enabled for specific routes
 */
export default function ComingSoon({
  title = 'Coming Soon',
  subtitle = 'This section will be available shortly.',
  showBackLink = true,
}: ComingSoonProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Animated icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-primary animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            {subtitle}
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>

          {/* Back link */}
          {showBackLink && (
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
