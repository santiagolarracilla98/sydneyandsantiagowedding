import { useLanguage } from '@/hooks/useLanguage';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';
import rsvpQr from '@/assets/rsvp-qr.png';

const RSVPPage = () => {
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
              <div className="container max-w-3xl lg:max-w-4xl text-center">
                <div className="w-12 h-px bg-border mx-auto mb-6" />
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                  {t.rsvp.title}
                </h1>

                <div className="prose-wedding font-serif text-sm md:text-base space-y-4 mb-12">
                  {t.rsvp.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={rsvpQr}
                    alt={t.rsvp.qrCaption}
                    className="w-56 h-56 md:w-64 md:h-64 object-contain"
                  />
                  <p className="mt-4 font-sans text-sm text-muted-foreground">
                    {t.rsvp.qrCaption}
                  </p>
                </div>
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

export default RSVPPage;
