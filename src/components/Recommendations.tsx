import { Star } from 'lucide-react';

interface RecommendationItem {
  readonly name: string;
  readonly description: string;
}

interface Category {
  readonly name: string;
  readonly items: readonly RecommendationItem[];
}

interface RecommendationsProps {
  t: {
    recommendations: {
      readonly title: string;
      readonly subtitle: string;
      readonly intro: string;
      readonly categories: readonly Category[];
    };
  };
}

export function Recommendations({ t }: RecommendationsProps) {
  const { recommendations } = t;

  return (
    <section id="recommendations" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              {recommendations.title}
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              {recommendations.subtitle}
            </p>
          </div>

          <p className="text-muted-foreground font-sans leading-relaxed text-center mb-12">
            {recommendations.intro}
          </p>

          {/* Categories */}
          <div className="space-y-12">
            {recommendations.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-4 h-4 text-wedding-coral" />
                  <h3 className="font-serif text-xl text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-card border border-border rounded-lg p-5 hover:shadow-soft transition-shadow duration-300"
                    >
                      <h4 className="font-sans font-medium text-foreground mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
