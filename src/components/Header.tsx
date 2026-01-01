import { useState } from 'react';
import { Language } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    nav: {
      home: string;
      intro: string;
      oaxaca: string;
      venue: string;
      planYourTrip: string;
      recommendations: string;
    };
  };
}

export function Header({ language, onLanguageChange, t }: HeaderProps) {
  const [homeOpen, setHomeOpen] = useState(false);

  const homeSubItems = [
    { href: '#intro', label: t.nav.intro },
    { href: '#oaxaca', label: t.nav.oaxaca },
    { href: '#venue', label: t.nav.venue },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between py-4">
        <nav className="flex items-center gap-6 md:gap-8">
          {/* Home dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setHomeOpen(true)}
            onMouseLeave={() => setHomeOpen(false)}
          >
            <a
              href="#home"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
            >
              {t.nav.home}
              <ChevronDown className="w-3 h-3" />
            </a>
            
            {homeOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-md shadow-md py-2 min-w-[140px]">
                  {homeSubItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#plan-your-trip"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {t.nav.planYourTrip}
          </a>
          
          <a
            href="#recommendations"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {t.nav.recommendations}
          </a>
        </nav>

        <button
          onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
          className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
          aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
        >
          <span className={language === 'en' ? 'text-foreground font-medium' : ''}>EN</span>
          <span className="text-border">/</span>
          <span className={language === 'es' ? 'text-foreground font-medium' : ''}>ES</span>
        </button>
      </div>
    </header>
  );
}
