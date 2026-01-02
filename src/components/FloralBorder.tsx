import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    // Top border - long rectangle with centered smaller image
    return (
      <div className="w-full h-32 sm:h-40 flex items-center justify-center pointer-events-none bg-background">
        <img 
          src={headerFloral} 
          alt="" 
          className="h-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
        />
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
