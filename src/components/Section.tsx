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
  return;
}