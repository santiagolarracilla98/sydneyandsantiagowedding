import { useLanguage } from '@/hooks/useLanguage';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { PlanYourTrip } from '@/components/PlanYourTrip';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';

const PlanYourTripPage = () => {
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
            <FloralBorder position="top" />
            
            <main className="pt-12">
              <PlanYourTrip t={t} language={language} />
            </main>

            <Footer language={language} onLanguageChange={setLanguage} t={t} />
            <FloralBorder position="bottom" />
          </>
        )}
      </div>
    </>
  );
};

export default PlanYourTripPage;
