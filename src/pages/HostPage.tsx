import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface GuestQuestion {
  id: string;
  name: string;
  email: string;
  question: string;
  created_at: string;
}

export default function HostPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<GuestQuestion[]>([]);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.functions.invoke('host-questions', {
      body: { password },
    });
    setLoading(false);

    if (error || (data as any)?.error) {
      toast({
        title: 'Access denied',
        description: 'Incorrect password.',
        variant: 'destructive',
      });
      setPassword('');
      return;
    }

    setQuestions((data as any)?.questions ?? []);
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
    setPassword('');
    setQuestions([]);
    navigate('/');
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-card border border-border rounded-lg p-8 shadow-sm"
        >
          <h1 className="font-serif text-2xl text-foreground text-center mb-2">
            Host View
          </h1>
          <p className="font-sans text-sm text-muted-foreground text-center mb-6">
            Enter the host password to continue.
          </p>
          <div className="space-y-2 mb-4">
            <Label htmlFor="host-password" className="font-sans">
              Password
            </Label>
            <Input
              id="host-password"
              ref={passwordRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading || !password}>
            {loading ? 'Checking…' : 'Enter'}
          </Button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-4 w-full text-xs font-sans text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="font-serif text-xl text-foreground">Host View — Guest Questions</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </header>

      <main className="container py-10 max-w-4xl">
        <p className="font-sans text-sm text-muted-foreground mb-6">
          {questions.length} {questions.length === 1 ? 'question' : 'questions'} submitted.
        </p>

        {questions.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground font-sans">
            No questions yet.
          </div>
        ) : (
          <ul className="space-y-4">
            {questions.map((q) => (
              <li
                key={q.id}
                className="border border-border rounded-lg p-5 bg-card"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <div>
                    <p className="font-serif text-lg text-foreground">{q.name}</p>
                    <a
                      href={`mailto:${q.email}`}
                      className="font-sans text-sm text-muted-foreground hover:text-foreground underline"
                    >
                      {q.email}
                    </a>
                  </div>
                  <time className="font-sans text-xs text-muted-foreground">
                    {new Date(q.created_at).toLocaleString()}
                  </time>
                </div>
                <p className="font-sans text-sm text-foreground whitespace-pre-wrap">
                  {q.question}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
