import { Star, Lightbulb } from 'lucide-react';
import { RestaurantSection } from './RestaurantSection';

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
    planYourTrip: {
      readonly tips: {
        readonly title: string;
        readonly items: readonly string[];
      };
    };
  };
  language: 'en' | 'es';
}

export function Recommendations({ t, language }: RecommendationsProps) {
  const { recommendations, planYourTrip } = t;

  return (
    <section id="recommendations" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
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

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* Restaurants */}
          <RestaurantSection language={language} />

          {/* Local Tips */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-foreground" />
              <h3 className="font-serif text-xl text-foreground">
                {planYourTrip.tips.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {planYourTrip.tips.items.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground font-sans leading-relaxed"
                >
                  <span className="text-wedding-coral mt-1">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
