import { useEffect, useState, useRef, useCallback } from 'react';

interface Flower {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
  type: 'flower' | 'leaf' | 'petal';
}

const FLOWER_COLORS = [
  '#e63946', // Red
  '#f4a261', // Orange
  '#e9c46a', // Yellow
  '#e76f51', // Coral
  '#fcbf49', // Golden yellow
];

const LEAF_COLORS = [
  '#8fbc8f', // Sage green
  '#9acd9a', // Light sage
  '#78a878', // Medium green
];

const createFlower = (id: number, startY: number = -50): Flower => {
  const type = Math.random() > 0.6 ? 'flower' : Math.random() > 0.5 ? 'leaf' : 'petal';
  const colors = type === 'leaf' ? LEAF_COLORS : FLOWER_COLORS;
  
  return {
    id,
    x: Math.random() * 100,
    y: startY,
    size: type === 'flower' ? 16 + Math.random() * 12 : 10 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    speed: 0.2 + Math.random() * 0.3,
    type,
  };
};

function FlowerSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" opacity="0.35">
      {/* Soft flower petals with gradient effect */}
      <defs>
        <radialGradient id={`flowerGrad-${color.replace('#', '')}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <ellipse cx="12" cy="5" rx="3.5" ry="5.5" fill={`url(#flowerGrad-${color.replace('#', '')})`} />
      <ellipse cx="12" cy="19" rx="3.5" ry="5.5" fill={`url(#flowerGrad-${color.replace('#', '')})`} />
      <ellipse cx="5" cy="12" rx="5.5" ry="3.5" fill={`url(#flowerGrad-${color.replace('#', '')})`} />
      <ellipse cx="19" cy="12" rx="5.5" ry="3.5" fill={`url(#flowerGrad-${color.replace('#', '')})`} />
      {/* Diagonal petals */}
      <ellipse cx="7" cy="7" rx="3" ry="4.5" fill={color} opacity="0.3" transform="rotate(-45 7 7)" />
      <ellipse cx="17" cy="7" rx="3" ry="4.5" fill={color} opacity="0.3" transform="rotate(45 17 7)" />
      <ellipse cx="7" cy="17" rx="3" ry="4.5" fill={color} opacity="0.3" transform="rotate(45 7 17)" />
      <ellipse cx="17" cy="17" rx="3" ry="4.5" fill={color} opacity="0.3" transform="rotate(-45 17 17)" />
      {/* Soft center */}
      <circle cx="12" cy="12" r="2.5" fill="#d4a574" opacity="0.5" />
    </svg>
  );
}

function LeafSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" opacity="0.3">
      <defs>
        <linearGradient id={`leafGrad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C8 6 6 10 6 14c0 4 2 6 6 8 4-2 6-4 6-8 0-4-2-8-6-12z"
        fill={`url(#leafGrad-${color.replace('#', '')})`}
      />
      <path
        d="M12 6v12"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}

function PetalSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" opacity="0.3">
      <defs>
        <radialGradient id={`petalGrad-${color.replace('#', '')}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <ellipse cx="12" cy="12" rx="5" ry="10" fill={`url(#petalGrad-${color.replace('#', '')})`} />
    </svg>
  );
}

export function FallingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const lastScrollY = useRef(0);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

  const updateFlowersOnScroll = useCallback((scrollDelta: number) => {
    setFlowers(prevFlowers => 
      prevFlowers.map(flower => {
        let newY = flower.y + (scrollDelta * flower.speed * 0.08);
        
        // Reset flower position if it goes off screen
        if (newY > 115) {
          newY = -5;
        } else if (newY < -15) {
          newY = 105;
        }
        
        return {
          ...flower,
          y: newY,
          rotation: flower.rotation + (scrollDelta * 0.3),
        };
      })
    );
  }, []);

  useEffect(() => {
    // Initialize flowers scattered across the screen
    const initialFlowers = Array.from({ length: 25 }, (_, i) => 
      createFlower(i, Math.random() * 100)
    );
    setFlowers(initialFlowers);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      updateFlowersOnScroll(scrollDelta);
      lastScrollY.current = currentScrollY;
    };

    // Gentle ambient floating animation
    const animate = () => {
      timeRef.current += 0.016;
      
      setFlowers(prevFlowers => 
        prevFlowers.map(flower => ({
          ...flower,
          x: flower.x + Math.sin(timeRef.current * (0.3 + flower.speed)) * 0.015,
          rotation: flower.rotation + 0.05,
        }))
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateFlowersOnScroll]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `rotate(${flower.rotation}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {flower.type === 'flower' && <FlowerSVG color={flower.color} size={flower.size} />}
          {flower.type === 'leaf' && <LeafSVG color={flower.color} size={flower.size} />}
          {flower.type === 'petal' && <PetalSVG color={flower.color} size={flower.size} />}
        </div>
      ))}
    </div>
  );
}
