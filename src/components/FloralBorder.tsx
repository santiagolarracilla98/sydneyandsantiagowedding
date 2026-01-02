interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  const flowers = [
    { color: '#e63946', size: 12, delay: 0 },    // Red
    { color: '#f4a261', size: 10, delay: 0.1 },  // Orange
    { color: '#e9c46a', size: 14, delay: 0.2 },  // Yellow
    { color: '#e76f51', size: 11, delay: 0.15 }, // Coral
    { color: '#d62828', size: 13, delay: 0.05 }, // Deep red
    { color: '#f77f00', size: 9, delay: 0.25 },  // Bright orange
    { color: '#fcbf49', size: 12, delay: 0.18 }, // Golden yellow
    { color: '#e63946', size: 10, delay: 0.22 }, // Red
    { color: '#f4a261', size: 14, delay: 0.08 }, // Orange
    { color: '#e9c46a', size: 11, delay: 0.12 }, // Yellow
    { color: '#d62828', size: 13, delay: 0.28 }, // Deep red
    { color: '#f77f00', size: 10, delay: 0.32 }, // Bright orange
  ];

  return (
    <div 
      className={`fixed left-0 right-0 h-16 z-50 pointer-events-none overflow-hidden ${
        position === 'top' ? 'top-0' : 'bottom-0'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-around">
        {flowers.map((flower, index) => (
          <svg
            key={index}
            width={flower.size * 2}
            height={flower.size * 2}
            viewBox="0 0 24 24"
            className="animate-pulse"
            style={{
              animationDelay: `${flower.delay}s`,
              transform: position === 'bottom' ? 'rotate(180deg)' : 'none',
            }}
          >
            {/* Flower petals */}
            <ellipse cx="12" cy="6" rx="3" ry="5" fill={flower.color} opacity="0.9" />
            <ellipse cx="12" cy="18" rx="3" ry="5" fill={flower.color} opacity="0.9" />
            <ellipse cx="6" cy="12" rx="5" ry="3" fill={flower.color} opacity="0.9" />
            <ellipse cx="18" cy="12" rx="5" ry="3" fill={flower.color} opacity="0.9" />
            {/* Center */}
            <circle cx="12" cy="12" r="3" fill="#2d3436" />
          </svg>
        ))}
        
        {/* Decorative leaves between flowers */}
        {[...Array(8)].map((_, i) => (
          <svg
            key={`leaf-${i}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: position === 'top' ? '60%' : '20%',
              transform: `rotate(${i % 2 === 0 ? 45 : -45}deg)`,
            }}
          >
            <path
              d="M12 2C8 6 6 10 6 14c0 4 2 6 6 8 4-2 6-4 6-8 0-4-2-8-6-12z"
              fill="#588157"
              opacity="0.7"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
