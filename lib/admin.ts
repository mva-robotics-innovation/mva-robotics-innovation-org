import { supabaseServer } from "./supabase-server";

export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export async function requireAdmin() {
  if (!isSupabaseConfigured()) return { supabase: null, user: null, configured: false, reason: "Supabase is not configured." };
  const supabase = await supabaseServer();
  if (!supabase) return { supabase: null, user: null, configured: false, reason: "Supabase is not configured." };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { supabase, user: null, configured: true, reason: "Not authenticated." };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (profile?.role !== "admin") return { supabase, user: null, configured: true, reason: "This account does not have admin access." };
  return { supabase, user, configured: true, reason: "" };
}
