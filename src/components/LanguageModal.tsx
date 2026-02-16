import { useState, useEffect, useRef } from 'react';
import { Language } from '@/lib/translations';
import heroImage from '@/assets/hero-illustration.png';

interface LanguageModalProps {
  onSelect: (lang: Language) => void;
}

export function LanguageModal({ onSelect }: LanguageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const [step, setStep] = useState<'password' | 'language'>('password');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (step === 'password') {
      inputRef.current?.focus();
    } else {
      firstButtonRef.current?.focus();
    }
  }, [step]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll('button, input');
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

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

  const handlePasswordSubmit = () => {
    if (password === 'Mezcal2026') {
      setError(false);
      setTransitioning(true);
      setTimeout(() => {
        setStep('language');
        setTransitioning(false);
      }, 500);
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

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
        className="relative z-10 bg-card rounded-lg shadow-modal p-8 md:p-12 max-w-md w-[90%] text-center animate-modal-in overflow-hidden"
      >
        {/* Hero illustration */}
        <img
          src={heroImage}
          alt="Illustrated scene of a couple in the Jardín Etnobotánico surrounded by cacti"
          className="w-full max-w-xs mx-auto mb-6 grayscale"
        />

        {/* Password Step */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 'password' && !transitioning
              ? 'opacity-100 translate-y-0'
              : step === 'password' && transitioning
              ? 'opacity-0 -translate-y-6'
              : 'hidden'
          }`}
        >
          <h2 
            id="language-modal-title" 
            className="font-serif text-2xl md:text-3xl mb-2 text-foreground"
          >
            Welcome
          </h2>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-6">
            Bienvenidos
          </p>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Enter the password to continue
          </p>

          <div className="flex flex-col items-center gap-3 mb-4">
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              onKeyDown={handleKeyPress}
              placeholder="Password"
              className={`w-full max-w-[240px] px-4 py-3 border rounded-sm bg-background text-foreground text-center font-sans text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background transition-colors ${
                error ? 'border-destructive' : 'border-foreground/30'
              }`}
              aria-label="Enter password"
            />
            {error && (
              <p className="text-sm text-destructive font-sans animate-fade-in">
                Incorrect password. Try again.
              </p>
            )}
            <button
              onClick={handlePasswordSubmit}
              className="px-8 py-3 border border-foreground text-foreground font-sans text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            >
              Enter
            </button>
          </div>
        </div>

        {/* Language Step */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 'language'
              ? 'opacity-100 translate-y-0'
              : 'hidden'
          }`}
          style={{ animationDelay: '100ms' }}
        >
          <h2 
            className="font-serif text-2xl md:text-3xl mb-2 text-foreground animate-fade-in"
          >
            Choose your language
          </h2>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Elige tu idioma
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
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

          <p className="text-sm text-muted-foreground font-sans animate-fade-in" style={{ animationDelay: '300ms' }}>
            You can change this anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
