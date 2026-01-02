import footerCactus from '@/assets/footer-cactus.png';

interface FloralBorderProps {
  position: 'top' | 'bottom';
}

export function FloralBorder({ position }: FloralBorderProps) {
  if (position === 'top') {
    return (
      <div className="fixed top-0 left-0 right-0 h-20 z-50 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 80" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
          {/* Hanging vines and succulents */}
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`translate(${50 + i * 100}, 0)`}>
              {/* Main succulent cluster */}
              <ellipse cx="20" cy="15" rx="18" ry="12" fill="#8fbc8f" opacity="0.9" />
              <ellipse cx="35" cy="20" rx="14" ry="10" fill="#9acd9a" opacity="0.85" />
              <ellipse cx="5" cy="18" rx="12" ry="9" fill="#78a878" opacity="0.9" />
              <ellipse cx="20" cy="8" rx="10" ry="7" fill="#a8d5a8" opacity="0.8" />
              
              {/* Hanging vines */}
              <path 
                d={`M${15 + (i % 5) * 2},25 Q${10 + (i % 3) * 5},${40 + (i % 4) * 4} ${20 + (i % 6) * 2},${55 + (i % 5) * 4}`}
                stroke="#6b8e6b"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <path 
                d={`M${25 + (i % 4) * 2},22 Q${30 + (i % 3) * 3},${35 + (i % 4) * 2} ${25 + (i % 5) * 3},${50 + (i % 3) * 4}`}
                stroke="#7a9e7a"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              
              {/* Small leaves on vines */}
              <ellipse cx={18 + i % 3} cy={38 + (i % 4) * 3} rx="4" ry="6" fill="#8fbc8f" opacity="0.7" transform={`rotate(${-20 + i * 5})`} />
              <ellipse cx={28 + i % 2} cy={42 + (i % 3) * 2} rx="3" ry="5" fill="#9acd9a" opacity="0.6" transform={`rotate(${15 + i * 3})`} />
              
              {/* Tiny flowers */}
              {i % 3 === 0 && (
                <>
                  <circle cx={22 + i % 5} cy={50 + i % 8} r="2.5" fill="#f4a261" opacity="0.8" />
                  <circle cx={22 + i % 5} cy={50 + i % 8} r="1" fill="#e9c46a" />
                </>
              )}
              {i % 4 === 1 && (
                <>
                  <circle cx={30 + i % 4} cy={45 + i % 6} r="2" fill="#e76f51" opacity="0.75" />
                  <circle cx={30 + i % 4} cy={45 + i % 6} r="0.8" fill="#fcbf49" />
                </>
              )}
            </g>
          ))}
          
          {/* Additional cascading elements */}
          {[...Array(8)].map((_, i) => (
            <g key={`cascade-${i}`} transform={`translate(${80 + i * 140}, 0)`}>
              <path 
                d={`M40,18 Q50,45 ${35 + (i % 4) * 5},${65 + (i % 3) * 3}`}
                stroke="#88aa88"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              <ellipse cx={38 + i % 4} cy={55 + i % 5} rx="3" ry="4.5" fill="#9acd9a" opacity="0.65" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Bottom border - Using the cactus garden image
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <img 
        src={footerCactus} 
        alt="" 
        className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-cover object-top"
      />
    </div>
  );
}
