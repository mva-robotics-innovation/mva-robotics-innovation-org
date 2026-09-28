import {supabaseServer} from './supabase-server';
export async function requireAdmin(){const supabase=await supabaseServer();const {data:{user}}=await supabase.auth.getUser();if(!user) return {supabase,user:null};const {data:profile}=await supabase.from('profiles').select('role').eq('id',user.id).single();if(profile?.role!=='admin') return {supabase,user:null};return {supabase,user}}
