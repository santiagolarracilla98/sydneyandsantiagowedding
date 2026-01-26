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
      // Greenery header for inner pages - full width, no gap
      return (
        <div className="w-full pointer-events-none bg-background -mt-[1px]">
          <img 
            src={headerGreenery} 
            alt="" 
            className="w-full h-auto object-cover object-top"
          />
        </div>
      );
    }
    
    // Default floral header for home page - full width rectangular
    return (
      <div className="w-full pointer-events-none bg-background">
        <img 
          src={headerFloral} 
          alt="" 
          className="w-full h-auto object-cover"
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
