interface Award {
  title: string;
  organization?: string;
  year?: string;
  icon?: string;
}

interface AwardsListProps {
  awards: Award[];
  title?: string;
}

export default function AwardsList({ awards, title = 'Awards & Certifications' }: AwardsListProps) {
  return (
    <section className="py-12">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">{award.icon || '🏆'}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{award.title}</h3>
            {award.organization && (
              <p className="text-sm text-gray-500">{award.organization}</p>
            )}
            {award.year && (
              <p className="text-xs text-primary mt-2">{award.year}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
