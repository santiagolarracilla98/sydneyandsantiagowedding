import heroCouple from '@/assets/hero-couple.png';

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
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.hero.title}
          </h1>
          
          <p className="font-sans text-sm md:text-base tracking-widest text-muted-foreground uppercase mb-8">
            {t.hero.date} <span className="mx-2">•</span> {t.hero.location}
          </p>
          
          <div className="mt-6">
            <img 
              src={heroCouple} 
              alt="Sydney & Santiago" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
