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
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {t.hero.title}
          </h1>
          
          <p className="font-serif text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
            {t.hero.date} <span className="mx-2">•</span> {t.hero.location}
          </p>
        </div>
      </div>
    </section>
  );
}
