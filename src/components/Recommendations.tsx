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
export function Recommendations({
  t,
  language
}: RecommendationsProps) {
  const {
    recommendations,
    planYourTrip
  } = t;
  return <section id="recommendations" className="pt-6 pb-16 md:pt-8 md:pb-24">
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

          {/* Restaurants */}
          <div id="restaurants" className="scroll-mt-20">
            <RestaurantSection language={language} />
          </div>

          {/* Categories (excluding Food & Drink since it's replaced by RestaurantSection) */}
          <div className="space-y-12 mt-12">
            {recommendations.categories.filter(category => category.name !== 'Food & Drink' && category.name !== 'Comida y Bebida').map((category, categoryIndex) => {
              // Assign IDs based on category name
              const categoryId = category.name.toLowerCase().includes('culture') || category.name.toLowerCase().includes('historia') 
                ? 'culture' 
                : category.name.toLowerCase().includes('shopping') || category.name.toLowerCase().includes('artisan') || category.name.toLowerCase().includes('compras')
                ? 'shopping'
                : undefined;
              
              return (
                <div key={categoryIndex} id={categoryId} className={categoryId ? 'scroll-mt-20' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-4 h-4 text-wedding-coral" />
                    <h3 className="font-serif text-xl text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-card border border-border rounded-lg p-5 hover:shadow-soft transition-shadow duration-300">
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
              );
            })}
          </div>

          {/* Local Tips */}
          
        </div>
      </div>
    </section>;
}