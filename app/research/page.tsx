import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Research Center" };

const items = [
  ["Research Paper Development", "Structure, document and communicate technology research."],
  ["Scientific Innovation", "Turn observations and ideas into testable technology concepts."],
  ["Prototype Development", "Build proof-of-concept systems using modern hardware and software."],
  ["Research Mentorship", "Support students and young innovators through research-oriented guidance."],
  ["Patent & Innovation Support", "Understand innovation documentation and pathways toward intellectual property."],
  ["Young Scientist Programs", "Encourage students to participate in research, innovation and scientific forums."]
];

export default function ResearchPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">RESEARCH CENTER</span><h1>Research that moves from question to prototype.</h1><p>Creating a culture where curiosity becomes experimentation, evidence and innovation.</p></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="01 / RESEARCH ECOSYSTEM" title="A practical path for young researchers." />
        <div className="research-grid">{items.map(([title, text], i) => <Reveal key={title}><article className="research-card"><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </div></section>
    </>
  );
}
