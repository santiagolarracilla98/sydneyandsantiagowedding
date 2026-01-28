import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      agenda: string;
      recommendations: string;
      giftRegistry: string;
      qa: string;
    };
  };
}

interface NavDropdownProps {
  label: string;
  to: string;
  isActive: boolean;
  subItems: { href: string; label: string }[];
  isHomePage: boolean;
}

function NavDropdown({ label, to, isActive, subItems, isHomePage }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={to}
        className={`text-sm font-sans transition-colors duration-200 flex items-center gap-1 ${
          isActive 
            ? 'text-foreground font-medium' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {label}
        <ChevronDown className="w-3 h-3" />
      </Link>
      
      {open && subItems.length > 0 && (
        <div className="absolute top-full left-0 pt-2">
          <div className="bg-card border border-border rounded-md shadow-md py-2 min-w-[140px]">
            {subItems.map((item) => (
              isActive || isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={`${to}${item.href}`}
                  className="block px-4 py-2 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({ language, onLanguageChange, t }: HeaderProps) {
  const [homeOpen, setHomeOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const homeSubItems = [
    { href: '#intro', label: t.nav.intro },
    { href: '#oaxaca', label: t.nav.oaxaca },
    { href: '#venue', label: t.nav.venue },
  ];

  const planYourTripSubItems = [
    { href: '#flights', label: language === 'en' ? 'Flights' : 'Vuelos' },
    { href: '#hotels', label: language === 'en' ? 'Hotels' : 'Hoteles' },
  ];

  const agendaSubItems = [
    { href: '#schedule', label: language === 'en' ? 'Schedule' : 'Horario' },
    { href: '#map', label: language === 'en' ? 'Map' : 'Mapa' },
    { href: '#dress-code', label: language === 'en' ? 'Dress Code' : 'Vestimenta' },
    { href: '#weather', label: language === 'en' ? 'Weather' : 'Clima' },
  ];

  const recommendationsSubItems = [
    { href: '#restaurants', label: language === 'en' ? 'Restaurants' : 'Restaurantes' },
    { href: '#culture', label: language === 'en' ? 'Culture & History' : 'Cultura e Historia' },
    { href: '#shopping', label: language === 'en' ? 'Shopping' : 'Compras' },
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
            {isHome ? (
              <a
                href="#home"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
              >
                {t.nav.home}
                <ChevronDown className="w-3 h-3" />
              </a>
            ) : (
              <Link
                to="/"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
              >
                {t.nav.home}
                <ChevronDown className="w-3 h-3" />
              </Link>
            )}
            
            {homeOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-md shadow-md py-2 min-w-[140px]">
                  {isHome ? (
                    homeSubItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ))
                  ) : (
                    homeSubItems.map((item) => (
                      <Link
                        key={item.href}
                        to={`/${item.href}`}
                        className="block px-4 py-2 text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <NavDropdown
            label={t.nav.planYourTrip}
            to="/plan-your-trip"
            isActive={location.pathname === '/plan-your-trip'}
            subItems={planYourTripSubItems}
            isHomePage={false}
          />

          <NavDropdown
            label={t.nav.agenda}
            to="/agenda"
            isActive={location.pathname === '/agenda'}
            subItems={agendaSubItems}
            isHomePage={false}
          />
          
          <NavDropdown
            label={t.nav.recommendations}
            to="/recommendations"
            isActive={location.pathname === '/recommendations'}
            subItems={recommendationsSubItems}
            isHomePage={false}
          />

          <Link
            to="/gift-registry"
            className={`text-sm font-sans transition-colors duration-200 ${
              location.pathname === '/gift-registry' 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.nav.giftRegistry}
          </Link>

          <Link
            to="/qa"
            className={`text-sm font-sans transition-colors duration-200 ${
              location.pathname === '/qa' 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.nav.qa}
          </Link>
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
