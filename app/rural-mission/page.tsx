import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MissionPillars } from "@/components/MissionPillars";

export const metadata = { title: "Rural Mission" };

export default function RuralMissionPage() {
  return (
    <>
      <section className="page-hero rural-page-hero"><div className="container"><span className="eyebrow">RURAL INITIATIVE / TECH INDIA MISSION</span><h1>We Start from Jharkhand. We Scale for Bharat.</h1><p>Transforming rural and urban communities from technology consumers into technology creators.</p></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="01 / FOUR PILLARS" title="Innovation should reach every community." /><Reveal><MissionPillars /></Reveal></div></section>
      <section className="section section-dark"><div className="container split-section"><Reveal className="split-copy"><span className="eyebrow">02 / DELIVERY MODEL</span><h2>How we deliver.</h2><p>Innovation Labs for idea generation and projects. Hands-on seminars, workshops and internships. Product development support. Placement-oriented pathways and opportunity awareness.</p></Reveal><Reveal><div className="process-stack">{["Innovation Labs", "Seminars / Workshops", "Online Internships", "Product Development", "Placement Support"].map((x, i) => <div className="process-row" key={x}><span>0{i+1}</span><strong>{x}</strong><i>→</i></div>)}</div></Reveal></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="03 / FARMER EMPOWERMENT" title="Low-cost technology for sustainable farming." text="Smart Irrigation, Soil Monitoring and Crop Automation are key areas for practical agricultural technology." /><div className="vision-grid">{["Smart Irrigation", "Soil Monitoring", "Crop Automation", "AI + IoT for Agriculture"].map(x => <Reveal key={x}><article className="glass-card"><span className="mini-dot" /><h3>{x}</h3><p>Designed as a practical innovation direction for community-focused agriculture technology.</p></article></Reveal>)}</div></div></section>
    </>
  );
}
