import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const HOST_PASSWORD = "Peppermint";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const password = typeof body?.password === "string" ? body.password : "";

    if (password !== HOST_PASSWORD) {
      return new Response(
        JSON.stringify({ error: "Invalid password" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

    const [{ data: questions, error: qErr }, { data: visits, error: vErr }] =
      await Promise.all([
        admin
          .from("guest_questions")
          .select("id, name, email, question, created_at")
          .order("created_at", { ascending: false })
          .limit(1000),
        admin
          .from("guest_visits")
          .select("id, first_name, last_name, language, user_agent, created_at")
          .order("created_at", { ascending: false })
          .limit(2000),
      ]);

    if (qErr) throw qErr;
    if (vErr) throw vErr;

    return new Response(
      JSON.stringify({ questions: questions ?? [], visits: visits ?? [] }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
