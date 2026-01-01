import { useEffect, useRef } from 'react';
import { Language } from '@/lib/translations';
import heroImage from '@/assets/hero-illustration.png';

interface LanguageModalProps {
  onSelect: (lang: Language) => void;
}

export function LanguageModal({ onSelect }: LanguageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Focus trap
    firstButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll('button');
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center animate-backdrop-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
    >
      {/* Frosted glass backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative z-10 bg-card rounded-lg shadow-modal p-8 md:p-12 max-w-md w-[90%] text-center animate-modal-in"
      >
        {/* Hero illustration */}
        <img
          src={heroImage}
          alt="Illustrated scene of a couple in the Jardín Etnobotánico surrounded by cacti"
          className="w-full max-w-xs mx-auto mb-6 grayscale"
        />

        <h2 
          id="language-modal-title" 
          className="font-serif text-2xl md:text-3xl mb-2 text-foreground"
        >
          Choose your language
        </h2>
        <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8">
          Elige tu idioma
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            ref={firstButtonRef}
            onClick={() => onSelect('en')}
            className="px-8 py-3 border border-foreground text-foreground font-sans text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Select English"
          >
            English
          </button>
          <button
            onClick={() => onSelect('es')}
            className="px-8 py-3 border border-foreground text-foreground font-sans text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Seleccionar Español"
          >
            Español
          </button>
        </div>

        <p className="text-sm text-muted-foreground font-sans">
          You can change this anytime.
        </p>
      </div>
    </div>
  );
}
