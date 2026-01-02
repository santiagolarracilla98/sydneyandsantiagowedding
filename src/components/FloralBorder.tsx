import footerCactus from '@/assets/footer-cactus.png';
import headerFloral from '@/assets/header-floral.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    // Top border - scrolls with page, not fixed
    return (
      <div className="w-full pointer-events-none">
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
