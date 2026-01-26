import { useState } from 'react';
import { X } from 'lucide-react';
import dressCodeWeddingImage from '@/assets/dress-code.jpeg';
import dressCodeWelcomeImage from '@/assets/dress-code-welcome.png';

interface DressCodeSection {
  subtitle: string;
  men: {
    label: string;
    description: string;
  };
  women: {
    label: string;
    description: string;
  };
}

interface DressCodeProps {
  t: {
    title: string;
    weddingDay: DressCodeSection;
    welcomeParty: DressCodeSection;
  };
}

export function DressCode({ t }: DressCodeProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const DressCodeCard = ({ 
    section, 
    image, 
    imageAlt 
  }: { 
    section: DressCodeSection; 
    image: string; 
    imageAlt: string;
  }) => (
    <div className="space-y-4">
      <h4 className="font-sans text-xs md:text-sm uppercase tracking-wider text-muted-foreground text-center">
        {section.subtitle}
      </h4>
      
      {/* Image */}
      <button
        onClick={() => setLightboxImage(image)}
        className="w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto rounded-lg shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-200"
        />
      </button>
      <p className="font-serif text-xs text-muted-foreground text-center italic">
        Click to enlarge
      </p>

      {/* Text */}
      <div className="space-y-3 pt-2">
        {/* Men */}
        <div>
          <h5 className="font-serif text-sm text-foreground mb-1">
            {section.men.label}
          </h5>
          <p className="font-serif text-xs text-muted-foreground">
            {section.men.description}
          </p>
        </div>

        {/* Women */}
        <div>
          <h5 className="font-serif text-sm text-foreground mb-1">
            {section.women.label}
          </h5>
          <p className="font-serif text-xs text-muted-foreground">
            {section.women.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Welcome Party - Left */}
        <DressCodeCard 
          section={t.welcomeParty} 
          image={dressCodeWelcomeImage} 
          imageAlt="Welcome party dress code reference" 
        />

        {/* Wedding Day - Right */}
        <DressCodeCard 
          section={t.weddingDay} 
          image={dressCodeWeddingImage} 
          imageAlt="Wedding day dress code reference" 
        />
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Dress code reference"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
