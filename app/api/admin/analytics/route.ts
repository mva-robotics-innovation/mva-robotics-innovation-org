import {NextResponse} from "next/server";
import {requireAdmin} from "@/lib/admin";
export async function POST(req:Request){const{user}=await requireAdmin();if(!user)return NextResponse.json({error:"Unauthorized"},{status:401});const body=await req.json();console.log("MVA analytics event",body);return NextResponse.json({ok:true})}
