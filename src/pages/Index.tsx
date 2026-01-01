import { useLanguage } from '@/hooks/useLanguage';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';

const Index = () => {
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
      {/* Language selection modal */}
      {needsSelection && <LanguageModal onSelect={setLanguage} />}

      {/* Main content */}
      <div className={needsSelection ? 'blur-md pointer-events-none' : ''}>
        {language && (
          <>
            <Header language={language} onLanguageChange={setLanguage} t={t} />
            
            <main>
              <Hero t={t} />

              {/* Intro Section */}
              <Section id="intro" title={t.intro.title}>
                {t.intro.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <p className="font-serif text-foreground italic mt-8">
                  {t.intro.signature}
                </p>
              </Section>

              {/* Oaxaca Section */}
              <Section id="oaxaca" title={t.oaxaca.title}>
                {t.oaxaca.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Section>

              {/* Venue Section */}
              <Section id="venue" title={t.venue.title} subtitle={t.venue.subtitle}>
                {t.venue.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Section>
            </main>

            <Footer language={language} onLanguageChange={setLanguage} t={t} />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
