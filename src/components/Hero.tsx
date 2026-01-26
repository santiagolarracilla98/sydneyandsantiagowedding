import heroImage from '@/assets/hero-couple-street.jpg';

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
    <section id="home" className="pt-0 pb-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in mb-6">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.hero.title}
          </h1>
          
          <p className="font-serif text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
            {t.hero.date} <span className="mx-2">•</span> {t.hero.location}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <img 
            src={heroImage} 
            alt="Sydney and Santiago walking through colorful Oaxaca streets" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
