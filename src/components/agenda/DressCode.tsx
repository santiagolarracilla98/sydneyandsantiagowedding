import { useState } from 'react';
import { X } from 'lucide-react';

interface DressCodeProps {
  t: {
    title: string;
    men: {
      label: string;
      description: string;
    };
    women: {
      label: string;
      description: string;
    };
  };
}

export function DressCode({ t }: DressCodeProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Placeholder image - replace with actual dress code image
  const dressCodeImage = '/placeholder.svg';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text Column */}
        <div className="space-y-6">
          {/* Men */}
          <div>
            <h4 className="font-serif text-sm md:text-base text-foreground mb-2">
              {t.men.label}
            </h4>
            <p className="font-serif text-sm text-muted-foreground">
              {t.men.description}
            </p>
          </div>

          {/* Women */}
          <div>
            <h4 className="font-serif text-sm md:text-base text-foreground mb-2">
              {t.women.label}
            </h4>
            <p className="font-serif text-sm text-muted-foreground">
              {t.women.description}
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div>
          <button
            onClick={() => setLightboxOpen(true)}
            className="w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
          >
            <img
              src={dressCodeImage}
              alt="Dress code reference"
              className="w-full h-auto rounded-lg shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-200"
            />
          </button>
          <p className="font-serif text-xs text-muted-foreground text-center mt-2 italic">
            Click to enlarge
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={dressCodeImage}
            alt="Dress code reference"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}