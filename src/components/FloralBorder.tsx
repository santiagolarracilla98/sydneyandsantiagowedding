import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    // Top border - long rectangle with centered smaller image
    return (
      <div className="w-full h-24 sm:h-32 flex items-center justify-center pointer-events-none bg-background">
        <img 
          src={headerFloral} 
          alt="" 
          className="h-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
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
