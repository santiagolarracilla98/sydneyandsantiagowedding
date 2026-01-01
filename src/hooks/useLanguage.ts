import { useState, useEffect, useCallback } from 'react';
import { Language, translations } from '@/lib/translations';

const STORAGE_KEY = 'wedding-language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      setLanguageState(stored);
    }
    setIsLoading(false);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  }, []);

  const t = language ? translations[language] : translations.en;

  return {
    language,
    setLanguage,
    t,
    isLoading,
    needsSelection: !isLoading && language === null,
  };
}
