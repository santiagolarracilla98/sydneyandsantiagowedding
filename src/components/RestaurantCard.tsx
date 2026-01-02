import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Restaurant {
  name: string;
  price: string;
  description: string;
  link?: string;
  image: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:shadow-soft transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <h4 className="font-serif text-lg text-white drop-shadow-md">
            {restaurant.name}
          </h4>
          <span className="text-white/90 font-sans text-sm font-medium bg-black/40 px-2 py-1 rounded">
            {restaurant.price}
          </span>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="p-4 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {restaurant.description}
            </p>
            {restaurant.link && (
              <a
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-sm font-sans text-foreground hover:text-muted-foreground transition-colors"
              >
                View details
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expand indicator */}
      <div className="flex justify-center py-2 border-t border-border bg-muted/30">
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </div>
    </div>
  );
}
