import { useLanguage } from '@/hooks/useLanguage';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { Recommendations } from '@/components/Recommendations';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';

const RecommendationsPage = () => {
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
            <FloralBorder position="top" />
            <Header language={language} onLanguageChange={setLanguage} t={t} />
            
            <main className="pt-12">
              <Recommendations t={t} />
            </main>

            <Footer language={language} onLanguageChange={setLanguage} t={t} />
            <FloralBorder position="bottom" />
          </>
        )}
      </div>
    </>
  );
};

export default RecommendationsPage;
