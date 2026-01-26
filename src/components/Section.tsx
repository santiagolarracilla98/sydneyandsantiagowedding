import { useEffect, useRef, useState, ReactNode } from 'react';
interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  children: ReactNode;
}
export function Section({
  id,
  title,
  subtitle,
  image,
  children
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id={id} ref={sectionRef} className="py-8 md:py-12 mx-px my-0">
      <div className="container">
        <div className={`max-w-3xl lg:max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative divider */}
          <div className="w-12 h-px bg-border mx-auto mb-6" />
          
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
            {title}
          </h2>
          
          {subtitle && <p className="font-serif text-lg md:text-xl text-muted-foreground italic mb-8">
              {subtitle}
            </p>}
          
          {!subtitle && <div className="mb-8" />}
          
          {image && <div className="mb-8">
              <img src={image} alt="" className="w-full max-w-2xl lg:max-w-3xl mx-auto" />
            </div>}
          
          <div className="prose-wedding font-serif text-sm md:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>;
}