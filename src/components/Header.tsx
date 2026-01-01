import { Language } from '@/lib/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    nav: {
      home: string;
      intro: string;
      oaxaca: string;
      venue: string;
    };
  };
}

export function Header({ language, onLanguageChange, t }: HeaderProps) {
  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#intro', label: t.nav.intro },
    { href: '#oaxaca', label: t.nav.oaxaca },
    { href: '#venue', label: t.nav.venue },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between py-4">
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
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
