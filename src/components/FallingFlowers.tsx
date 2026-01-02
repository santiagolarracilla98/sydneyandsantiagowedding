import { useEffect, useState, useRef } from 'react';

interface Flower {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
  swayAmount: number;
  swaySpeed: number;
}

const FLOWER_COLORS = [
  '#e63946', // Red
  '#f4a261', // Orange
  '#e9c46a', // Yellow
  '#e76f51', // Coral
  '#d62828', // Deep red
  '#f77f00', // Bright orange
  '#fcbf49', // Golden yellow
];

const createFlower = (id: number, startY: number = -50): Flower => ({
  id,
  x: Math.random() * 100,
  y: startY,
  size: 12 + Math.random() * 16,
  color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
  rotation: Math.random() * 360,
  speed: 0.3 + Math.random() * 0.4,
  swayAmount: 15 + Math.random() * 20,
  swaySpeed: 0.5 + Math.random() * 1,
});

export function FallingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const lastScrollY = useRef(0);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    // Initialize flowers
    const initialFlowers = Array.from({ length: 20 }, (_, i) => 
      createFlower(i, Math.random() * 100)
    );
    setFlowers(initialFlowers);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const scrollDirection = scrollDelta > 0 ? 1 : -1; // 1 = down, -1 = up
      
      setFlowers(prevFlowers => 
        prevFlowers.map(flower => {
          // Move flowers based on scroll direction
          let newY = flower.y + (scrollDelta * flower.speed * 0.1);
          
          // Reset flower position if it goes off screen
          if (newY > 120) {
            newY = -10;
          } else if (newY < -20) {
            newY = 110;
          }
          
          return {
            ...flower,
            y: newY,
            rotation: flower.rotation + (scrollDelta * 0.5),
          };
        })
      );
      
      lastScrollY.current = currentScrollY;
    };

    // Gentle ambient animation
    const animate = () => {
      timeRef.current += 0.016;
      
      setFlowers(prevFlowers => 
        prevFlowers.map(flower => ({
          ...flower,
          x: flower.x + Math.sin(timeRef.current * flower.swaySpeed) * 0.02,
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
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="absolute transition-transform duration-100"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <svg
            width={flower.size}
            height={flower.size}
            viewBox="0 0 24 24"
          >
            {/* Flower petals */}
            <ellipse cx="12" cy="5" rx="2.5" ry="4.5" fill={flower.color} opacity="0.85" />
            <ellipse cx="12" cy="19" rx="2.5" ry="4.5" fill={flower.color} opacity="0.85" />
            <ellipse cx="5" cy="12" rx="4.5" ry="2.5" fill={flower.color} opacity="0.85" />
            <ellipse cx="19" cy="12" rx="4.5" ry="2.5" fill={flower.color} opacity="0.85" />
            {/* Diagonal petals */}
            <ellipse cx="7" cy="7" rx="2" ry="4" fill={flower.color} opacity="0.7" transform="rotate(-45 7 7)" />
            <ellipse cx="17" cy="7" rx="2" ry="4" fill={flower.color} opacity="0.7" transform="rotate(45 17 7)" />
            <ellipse cx="7" cy="17" rx="2" ry="4" fill={flower.color} opacity="0.7" transform="rotate(45 7 17)" />
            <ellipse cx="17" cy="17" rx="2" ry="4" fill={flower.color} opacity="0.7" transform="rotate(-45 17 17)" />
            {/* Center */}
            <circle cx="12" cy="12" r="2.5" fill="#2d3436" />
            <circle cx="12" cy="12" r="1.5" fill="#636e72" />
          </svg>
        </div>
      ))}
    </div>
  );
}
