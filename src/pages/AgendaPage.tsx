import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';
import { LanguageModal } from '@/components/LanguageModal';
import { WeatherBox } from '@/components/agenda/WeatherBox';
import { ScheduleBlock } from '@/components/agenda/ScheduleBlock';
import { AgendaMap } from '@/components/agenda/AgendaMap';
import { DressCode } from '@/components/agenda/DressCode';
import { Calendar, PartyPopper, Heart } from 'lucide-react';

export default function AgendaPage() {
  const { language, setLanguage, t, needsSelection } = useLanguage();

  if (needsSelection) {
    return <LanguageModal onSelect={setLanguage} />;
  }

  if (!language) return null;

  const scheduleItems = [
    {
      day: t.agenda.schedule.thursday.day,
      title: t.agenda.schedule.thursday.title,
      description: t.agenda.schedule.thursday.description,
      icon: Calendar,
    },
    {
      day: t.agenda.schedule.friday.day,
      title: t.agenda.schedule.friday.title,
      description: t.agenda.schedule.friday.description,
      icon: PartyPopper,
    },
    {
      day: t.agenda.schedule.saturday.day,
      title: t.agenda.schedule.saturday.title,
      description: t.agenda.schedule.saturday.description,
      icon: Heart,
    },
  ];

  const anchorLinks = [
    { href: '#weather', label: t.agenda.anchors.weather },
    { href: '#schedule', label: t.agenda.anchors.schedule },
    { href: '#map', label: t.agenda.anchors.map },
    { href: '#dress-code', label: t.agenda.anchors.dressCode },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header language={language} onLanguageChange={setLanguage} t={t} />
      <FloralBorder position="top" variant="greenery" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-0 pb-8">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
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

        {/* Weather Section */}
        <section id="weather" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <WeatherBox t={t.agenda.weather} />
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto space-y-6">
              {scheduleItems.map((item, index) => (
                <ScheduleBlock
                  key={index}
                  day={item.day}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
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
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6 text-center">
                {t.agenda.dressCode.title}
              </h2>
              <DressCode t={t.agenda.dressCode} />
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} onLanguageChange={setLanguage} t={t} />
    </div>
  );
}