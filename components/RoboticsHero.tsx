'use client';
import dynamic from 'next/dynamic';
const RobotScene = dynamic(()=>import('./RobotScene'),{ssr:false,loading:()=> <div style={{height:'100%',display:'grid',placeItems:'center'}} className="muted">Initializing robotics visualization…</div>});
export default function RoboticsHero(){return <div className="hero-art"><RobotScene/></div>}
