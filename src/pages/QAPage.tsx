import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloralBorder } from '@/components/FloralBorder';
import { LanguageModal } from '@/components/LanguageModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function QAPage() {
  const { language, setLanguage, t, needsSelection } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (needsSelection) {
    return <LanguageModal onSelect={setLanguage} />;
  }

  if (!language) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.question.trim()) {
      toast({
        title: t.qa.form.errorTitle,
        description: t.qa.form.errorDescription,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t.qa.form.successTitle,
      description: t.qa.form.successDescription,
    });
    
    setFormData({ name: '', email: '', question: '' });
    setIsSubmitting(false);
  };

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
                {t.qa.title}
              </h1>
              <p className="font-serif text-sm md:text-base text-muted-foreground">
                {t.qa.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl lg:max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {t.qa.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="font-serif text-base md:text-lg text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-serif text-sm md:text-base text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <Card className="border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="font-serif text-xl md:text-2xl text-foreground">
                    {t.qa.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-serif text-sm">
                        {t.qa.form.nameLabel}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.qa.form.namePlaceholder}
                        className="font-serif"
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-serif text-sm">
                        {t.qa.form.emailLabel}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.qa.form.emailPlaceholder}
                        className="font-serif"
                        maxLength={255}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="question" className="font-serif text-sm">
                        {t.qa.form.questionLabel}
                      </Label>
                      <Textarea
                        id="question"
                        value={formData.question}
                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                        placeholder={t.qa.form.questionPlaceholder}
                        className="font-serif min-h-[120px]"
                        maxLength={1000}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full font-serif"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t.qa.form.submitting : t.qa.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} onLanguageChange={setLanguage} t={t} />
    </div>
  );
}
