import { useLanguage } from '@/hooks/useLanguage';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';

const GiftRegistryPage = () => {
  const { language, setLanguage, t, isLoading, needsSelection } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {needsSelection && <LanguageModal onSelect={setLanguage} />}

      <div className={needsSelection ? 'blur-md pointer-events-none' : ''}>
        {language && (
          <>
            <Header language={language} onLanguageChange={setLanguage} t={t} />
            <FloralBorder position="top" variant="greenery" />
            
            <main className="pt-12 pb-24">
              <div className="container max-w-2xl text-center">
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                  {t.giftRegistry.title}
                </h1>
                <p className="text-muted-foreground font-sans">
                  {t.giftRegistry.linkPlaceholder}
                </p>
              </div>
            </main>

            <Footer language={language} onLanguageChange={setLanguage} t={t} />
            <FloralBorder position="bottom" />
          </>
        )}
      </div>
    </>
  );
};

export default GiftRegistryPage;
