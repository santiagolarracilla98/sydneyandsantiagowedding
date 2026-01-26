import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';
import { LanguageModal } from '@/components/LanguageModal';
import { WeatherBox } from '@/components/agenda/WeatherBox';
import { WeekendSchedule } from '@/components/agenda/WeekendSchedule';
import { AgendaMap } from '@/components/agenda/AgendaMap';
import { DressCode } from '@/components/agenda/DressCode';

export default function AgendaPage() {
  const { language, setLanguage, t, needsSelection } = useLanguage();

  if (needsSelection) {
    return <LanguageModal onSelect={setLanguage} />;
  }

  if (!language) return null;

  const anchorLinks = [
    { href: '#schedule', label: t.agenda.anchors.schedule },
    { href: '#map', label: t.agenda.anchors.map },
    { href: '#dress-code', label: t.agenda.anchors.dressCode },
    { href: '#weather', label: t.agenda.anchors.weather },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header language={language} onLanguageChange={setLanguage} t={t} />
      <FloralBorder position="top" variant="greenery" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-0 pb-8">
          <div className="container">
            <div className="max-w-4xl lg:max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t.agenda.title}
              </h1>
              <p className="font-serif text-sm md:text-base text-muted-foreground mb-6">
                {t.agenda.subtitle}
              </p>
              
              {/* Anchor Links */}
              <nav className="flex flex-wrap justify-center gap-4 text-sm">
                {anchorLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Weekend Schedule Section */}
        <section id="schedule" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <WeekendSchedule t={t.agenda.weekendSchedule} />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6 text-center">
                {t.agenda.map.title}
              </h2>
              <AgendaMap t={t.agenda.map} />
            </div>
          </div>
        </section>

        {/* Dress Code Section */}
        <section id="dress-code" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6 text-center">
                {t.agenda.dressCode.title}
              </h2>
              <DressCode t={t.agenda.dressCode} />
            </div>
          </div>
        </section>

        {/* Weather Section */}
        <section id="weather" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <WeatherBox t={t.agenda.weather} />
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} onLanguageChange={setLanguage} t={t} />
    </div>
  );
}