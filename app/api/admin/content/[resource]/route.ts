import {NextResponse} from "next/server";
import {requireAdmin} from "@/lib/admin";

const allowed = {
  courses: ["title","slug","description","price","published"],
  projects: ["title","slug","description","status"],
  events: ["title","event_date","venue","description","published"],
  media: ["title","storage_path","alt_text"],
  blog: ["title","slug","excerpt","content","published"],
  admissions: ["name","email","phone","program","message","status"],
  contact: ["name","email","phone","message","status"]
} as const;

type Resource = keyof typeof allowed;

function isResource(value:string): value is Resource { return value in allowed; }

export async function GET(_req:Request,{params}:{params:Promise<{resource:string}>}) {
  const {resource}=await params;
  if(!isResource(resource)) return NextResponse.json({error:"Unsupported resource"},{status:404});
  const {supabase,user,configured}=await requireAdmin();
  if(!configured||!user||!supabase)return NextResponse.json({error:"Unauthorized"},{status:401});
  const table=resource==="blog"?"posts":resource==="admissions"?"applications":resource==="contact"?"contact_enquiries":resource;
  const {data,error}=await supabase.from(table).select("*").order("created_at",{ascending:false}).limit(100);
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({items:data||[]});
}

export async function POST(req:Request,{params}:{params:Promise<{resource:string}>}) {
  const {resource}=await params;
  if(!isResource(resource))return NextResponse.json({error:"Unsupported resource"},{status:404});
  const {supabase,user}=await requireAdmin();
  if(!user||!supabase)return NextResponse.json({error:"Unauthorized"},{status:401});
  if(["admissions","contact"].includes(resource))return NextResponse.json({error:"This module is review-only for new records."},{status:405});
  const body=await req.json();
  const payload=Object.fromEntries(allowed[resource].filter((key)=>body[key]!==undefined).map((key)=>[key,body[key]]));
  if(resource==="courses"&&!payload.title)return NextResponse.json({error:"Title is required"},{status:400});
  if(resource==="projects"&&!payload.title)return NextResponse.json({error:"Title is required"},{status:400});
  const table=resource==="blog"?"posts":resource;
  const {data,error}=await supabase.from(table).insert(resource==="blog"?{...payload,author_id:user.id}:payload).select("*").single();
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({item:data},{status:201});
}

export async function PATCH(req:Request,{params}:{params:Promise<{resource:string}>}) {
  const {resource}=await params;
  if(!isResource(resource))return NextResponse.json({error:"Unsupported resource"},{status:404});
  const {supabase,user}=await requireAdmin();
  if(!user||!supabase)return NextResponse.json({error:"Unauthorized"},{status:401});
  const body=await req.json();
  if(!body.id)return NextResponse.json({error:"id is required"},{status:400});
  const payload=Object.fromEntries(allowed[resource].filter((key)=>body[key]!==undefined).map((key)=>[key,body[key]]));
  const table=resource==="blog"?"posts":resource==="admissions"?"applications":resource==="contact"?"contact_enquiries":resource;
  const {data,error}=await supabase.from(table).update(payload).eq("id",body.id).select("*").single();
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({item:data});
}

export async function DELETE(req:Request,{params}:{params:Promise<{resource:string}>}) {
  const {resource}=await params;
  if(!isResource(resource))return NextResponse.json({error:"Unsupported resource"},{status:404});
  const {supabase,user}=await requireAdmin();
  if(!user||!supabase)return NextResponse.json({error:"Unauthorized"},{status:401});
  const body=await req.json();
  if(!body.id)return NextResponse.json({error:"id is required"},{status:400});
  if(["admissions","contact"].includes(resource))return NextResponse.json({error:"Review records cannot be deleted from this interface."},{status:405});
  const table=resource==="blog"?"posts":resource;
  const {error}=await supabase.from(table).delete().eq("id",body.id);
  if(error)return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({ok:true});
}
