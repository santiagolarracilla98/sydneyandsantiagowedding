import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    // Top border - larger centered image
    return (
      <div className="w-full py-8 flex items-center justify-center pointer-events-none bg-background">
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
