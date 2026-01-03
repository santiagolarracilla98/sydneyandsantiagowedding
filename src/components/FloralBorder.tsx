import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';
import headerGreenery from '@/assets/header-greenery.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
  variant?: 'default' | 'greenery';
}

export function FloralBorder({ position, variant = 'default' }: FloralBorderProps) {
  if (position === 'top') {
    if (variant === 'greenery') {
      // Greenery header for inner pages
      return (
        <div className="w-full pointer-events-none bg-background">
          <img 
            src={headerGreenery} 
            alt="" 
            className="w-full h-auto max-h-48 md:max-h-56 object-contain object-top"
          />
        </div>
      );
    }
    
    // Default floral header for home page
    return (
      <div className="w-full pt-6 flex items-center justify-center pointer-events-none bg-background">
        <img 
          src={headerFloral} 
          alt="" 
          className="h-48 sm:h-56 md:h-64 max-w-md sm:max-w-lg md:max-w-xl object-contain"
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
