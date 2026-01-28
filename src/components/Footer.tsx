import { Language } from '@/lib/translations';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    footer: {
      message: string;
      names: string;
    };
  };
}

export function Footer({ language, onLanguageChange, t }: FooterProps) {
  return (
    <footer className="py-10 md:py-14 border-t border-border/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-border mx-auto mb-8" />
          
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-1">
            {t.footer.message}
          </p>
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-10">
            {t.footer.names}
          </p>

          <button
            onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            <span className={language === 'en' ? 'text-foreground' : ''}>EN</span>
            <span className="mx-2 text-border">/</span>
            <span className={language === 'es' ? 'text-foreground' : ''}>ES</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
