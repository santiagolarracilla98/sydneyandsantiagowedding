import { useState } from 'react';
import { ExternalLink, MapPin, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Hotel {
  name: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  website: string;
  address: string;
  mapsUrl: string;
  image: string;
  discountCode?: string;
}

interface HotelCardProps {
  hotel: Hotel;
  language: 'en' | 'es';
}

const labels = {
  en: {
    viewDetails: 'View details',
    website: 'Website',
    location: 'Location',
    discountNote: 'Special discount for wedding guests:',
    close: 'Close',
  },
  es: {
    viewDetails: 'Ver detalles',
    website: 'Sitio web',
    location: 'Ubicación',
    discountNote: 'Descuento especial para invitados:',
    close: 'Cerrar',
  },
};

export function HotelCard({ hotel, language }: HotelCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = labels[language];

  return (
    <>
      {/* Card */}
      <div
        className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <h4 className="font-serif text-sm md:text-base text-white drop-shadow-md leading-tight pr-2">
              {hotel.name}
            </h4>
            <span className="text-white font-sans text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full whitespace-nowrap">
              {hotel.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {hotel.shortDescription}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-sans text-foreground hover:text-muted-foreground transition-colors">
            {t.viewDetails}
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-background rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <h3 className="font-serif text-lg md:text-xl text-white drop-shadow-md leading-tight pr-2">
                  {hotel.name}
                </h3>
                <span className="text-white font-sans text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap">
                  {hotel.price}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
                aria-label={t.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto max-h-[50vh]">
              <p className="text-muted-foreground font-serif leading-relaxed">
                {hotel.longDescription}
              </p>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-sans">{hotel.address}</span>
              </div>

              {/* Discount Code */}
              {hotel.discountCode && (
                <div className="bg-muted border border-border rounded-lg p-4">
                  <p className="text-sm font-sans text-muted-foreground">
                    {t.discountNote}
                  </p>
                  <p className="font-mono font-medium text-foreground mt-1">
                    {hotel.discountCode}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg font-sans text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  {t.website}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
