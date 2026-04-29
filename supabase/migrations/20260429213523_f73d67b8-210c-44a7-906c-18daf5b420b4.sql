
CREATE TABLE public.guest_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  question TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.guest_questions ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can insert a question
CREATE POLICY "Anyone can submit questions"
  ON public.guest_questions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No public SELECT policy — reads happen only through the secure edge function
