import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    // Top border - long rectangle with centered image and title
    return (
      <div className="w-full py-8 flex flex-col items-center justify-center pointer-events-none bg-background">
        <img 
          src={headerFloral} 
          alt="" 
          className="h-32 sm:h-40 max-w-sm sm:max-w-md md:max-w-lg object-contain"
        />
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
          Sydney & Santiago
        </h1>
      </div>
    );
  }

  // Bottom border - Using the cactus garden image (flows with content)
  return (
    <div className="w-full pointer-events-none">
      <img 
        src={footerCactus} 
        alt="" 
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
