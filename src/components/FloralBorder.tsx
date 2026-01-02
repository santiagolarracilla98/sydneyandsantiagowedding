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
                d={`M${15 + Math.random() * 10},25 Q${10 + Math.random() * 15},${40 + Math.random() * 15} ${20 + Math.random() * 10},${55 + Math.random() * 20}`}
                stroke="#6b8e6b"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <path 
                d={`M${25 + Math.random() * 10},22 Q${30 + Math.random() * 10},${35 + Math.random() * 10} ${25 + Math.random() * 15},${50 + Math.random() * 15}`}
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
                d={`M40,18 Q50,45 ${35 + Math.random() * 20},${65 + Math.random() * 10}`}
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

  // Bottom border - Oaxacan cactus garden style
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 z-50 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1200 96" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
        {/* Ground line */}
        <rect x="0" y="90" width="1200" height="6" fill="#d4c4a8" opacity="0.4" />
        
        {/* Left cactus cluster */}
        <g transform="translate(50, 0)">
          {/* Prickly pear cactus */}
          <ellipse cx="40" cy="70" rx="20" ry="15" fill="#8fbc8f" />
          <ellipse cx="55" cy="55" rx="16" ry="12" fill="#9acd9a" />
          <ellipse cx="25" cy="58" rx="14" ry="11" fill="#78a878" />
          <ellipse cx="45" cy="42" rx="12" ry="10" fill="#a8d5a8" />
          <ellipse cx="60" cy="38" rx="10" ry="8" fill="#8fbc8f" />
          {/* Yellow flower on cactus */}
          <circle cx="62" cy="30" r="4" fill="#e9c46a" />
          <circle cx="62" cy="30" r="2" fill="#f4a261" />
          
          {/* Organ pipe cacti */}
          <rect x="80" y="25" width="5" height="65" rx="2" fill="#7a9e7a" />
          <rect x="88" y="35" width="4" height="55" rx="2" fill="#8fbc8f" />
          <rect x="95" y="20" width="5" height="70" rx="2" fill="#6b8e6b" />
          <rect x="103" y="40" width="4" height="50" rx="2" fill="#88aa88" />
        </g>
        
        {/* Center cactus arrangement */}
        <g transform="translate(500, 0)">
          {/* Tall organ pipe cacti */}
          <rect x="80" y="15" width="6" height="75" rx="3" fill="#7a9e7a" />
          <rect x="90" y="25" width="5" height="65" rx="2" fill="#8fbc8f" />
          <rect x="98" y="10" width="7" height="80" rx="3" fill="#6b8e6b" />
          <rect x="108" y="20" width="5" height="70" rx="2" fill="#88aa88" />
          <rect x="116" y="30" width="4" height="60" rx="2" fill="#9acd9a" />
          
          {/* Prickly pear on sides */}
          <ellipse cx="50" cy="70" rx="18" ry="13" fill="#8fbc8f" />
          <ellipse cx="40" cy="58" rx="14" ry="11" fill="#9acd9a" />
          <ellipse cx="60" cy="55" rx="12" ry="9" fill="#78a878" />
          <circle cx="42" cy="48" r="3" fill="#f4a261" />
          
          <ellipse cx="150" cy="72" rx="16" ry="12" fill="#8fbc8f" />
          <ellipse cx="160" cy="60" rx="13" ry="10" fill="#9acd9a" />
          <ellipse cx="145" cy="56" rx="11" ry="9" fill="#78a878" />
          <circle cx="163" cy="50" r="3.5" fill="#e9c46a" />
        </g>
        
        {/* Right cactus cluster */}
        <g transform="translate(950, 0)">
          {/* Organ pipes */}
          <rect x="50" y="20" width="5" height="70" rx="2" fill="#7a9e7a" />
          <rect x="58" y="30" width="4" height="60" rx="2" fill="#8fbc8f" />
          <rect x="65" y="15" width="6" height="75" rx="3" fill="#6b8e6b" />
          
          {/* Prickly pear */}
          <ellipse cx="100" cy="68" rx="22" ry="16" fill="#8fbc8f" />
          <ellipse cx="85" cy="55" rx="16" ry="12" fill="#9acd9a" />
          <ellipse cx="115" cy="52" rx="14" ry="10" fill="#78a878" />
          <ellipse cx="95" cy="42" rx="12" ry="9" fill="#a8d5a8" />
          {/* Orange flower */}
          <circle cx="118" cy="42" r="4" fill="#e76f51" />
          <circle cx="118" cy="42" r="1.5" fill="#fcbf49" />
          
          {/* Wild grasses */}
          <path d="M140,90 Q145,70 142,50" stroke="#b8c8a8" strokeWidth="1" fill="none" />
          <path d="M145,90 Q148,65 150,45" stroke="#a8b898" strokeWidth="1" fill="none" />
          <path d="M150,90 Q152,72 148,55" stroke="#c8d8b8" strokeWidth="1" fill="none" />
        </g>
        
        {/* Scattered small plants */}
        {[200, 350, 750, 880].map((x, i) => (
          <g key={`small-${i}`} transform={`translate(${x}, 0)`}>
            <ellipse cx="0" cy="78" rx="10" ry="8" fill="#8fbc8f" opacity="0.8" />
            <ellipse cx="8" cy="72" rx="8" ry="6" fill="#9acd9a" opacity="0.75" />
            {i % 2 === 0 && <circle cx="10" cy="66" r="2.5" fill="#e9c46a" opacity="0.85" />}
          </g>
        ))}
        
        {/* Small grasses throughout */}
        {[150, 300, 450, 650, 800, 1050].map((x, i) => (
          <g key={`grass-${i}`} transform={`translate(${x}, 0)`}>
            <path d={`M0,90 Q${2 + i % 3},${75 - i % 5} ${-2 + i % 4},${60 + i % 8}`} stroke="#b8c8a8" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d={`M4,90 Q${5 + i % 2},${78 - i % 4} ${3 + i % 3},${65 + i % 6}`} stroke="#a8b898" strokeWidth="0.8" fill="none" opacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
