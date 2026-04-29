import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '@/lib/translations';
import ssLogo from '@/assets/ss-logo.png';

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
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const clickTimer = useRef<number | null>(null);

  const handleLogoClick = () => {
    clickCount.current += 1;
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => {
      clickCount.current = 0;
    }, 800);

    if (clickCount.current >= 3) {
      clickCount.current = 0;
      if (clickTimer.current) window.clearTimeout(clickTimer.current);
      navigate('/host');
    }
  };

  return (
    <footer className="py-10 md:py-14 border-t border-border/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <img
            src={ssLogo}
            alt="S&S monogram"
            onClick={handleLogoClick}
            className="w-16 h-16 mx-auto mb-6 object-contain opacity-70 cursor-pointer select-none"
            draggable={false}
          />

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
