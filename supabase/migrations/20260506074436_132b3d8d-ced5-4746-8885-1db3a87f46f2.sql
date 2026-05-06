CREATE TABLE public.guest_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  language TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.guest_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a visit with limits"
ON public.guest_visits
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(first_name) > 0 AND length(first_name) <= 100
  AND length(last_name) > 0 AND length(last_name) <= 100
  AND (language IS NULL OR length(language) <= 10)
  AND (user_agent IS NULL OR length(user_agent) <= 500)
);

CREATE INDEX idx_guest_visits_created_at ON public.guest_visits (created_at DESC);