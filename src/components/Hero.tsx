import heroImage from '@/assets/hero-illustration.png';

interface HeroProps {
  t: {
    hero: {
      title: string;
      date: string;
      location: string;
    };
  };
}

export function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <img
            src={heroImage}
            alt="Illustrated scene of a couple in the Jardín Etnobotánico surrounded by cacti"
            className="w-full max-w-2xl mx-auto mb-10 md:mb-14"
          />
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.hero.title}
          </h1>
          
          <p className="font-sans text-sm md:text-base tracking-widest text-muted-foreground uppercase">
            {t.hero.date} <span className="mx-2">•</span> {t.hero.location}
          </p>
        </div>
      </div>
    </section>
  );
}
