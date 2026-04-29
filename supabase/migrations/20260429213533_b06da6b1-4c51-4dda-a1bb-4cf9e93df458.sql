
DROP POLICY "Anyone can submit questions" ON public.guest_questions;

CREATE POLICY "Anyone can submit questions with limits"
  ON public.guest_questions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) > 0 AND length(name) <= 100
    AND length(email) > 0 AND length(email) <= 255
    AND length(question) > 0 AND length(question) <= 2000
  );
