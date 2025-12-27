interface Stat {
  value: string;
  label: string;
  icon?: string;
}

interface StatsStripProps {
  stats: Stat[];
  variant?: 'light' | 'dark' | 'primary';
}

export default function StatsStrip({ stats, variant = 'primary' }: StatsStripProps) {
  const bgClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-white',
  };

  const valueClasses = {
    light: 'text-primary',
    dark: 'text-accent',
    primary: 'text-accent',
  };

  const labelClasses = {
    light: 'text-gray-600',
    dark: 'text-gray-400',
    primary: 'text-white/80',
  };

  return (
    <section className={`${bgClasses[variant]} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon && <span className="text-3xl mb-2">{stat.icon}</span>}
              <p className={`text-3xl md:text-4xl font-bold ${valueClasses[variant]}`}>
                {stat.value}
              </p>
              <p className={`text-sm mt-1 ${labelClasses[variant]}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
