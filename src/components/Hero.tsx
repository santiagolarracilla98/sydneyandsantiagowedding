import heroImage from '@/assets/hero-couple-street.jpg';
import ssLogo from '@/assets/ss-logo.png';

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
    <section id="home" className="pt-8 md:pt-12 pb-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in mb-10 md:mb-12">
          <img 
            src={ssLogo} 
            alt="S&S monogram" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 object-contain"
          />
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            {t.hero.title}
          </h1>
          
          <p className="font-serif text-sm md:text-base tracking-widest text-muted-foreground uppercase">
            {t.hero.date} <span className="mx-2">•</span> {t.hero.location}
          </p>
        </div>

        <div className="px-2 md:px-4">
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
