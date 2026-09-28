const labs = [
  ["AI LAB", "Artificial intelligence, machine learning and generative AI exploration."],
  ["ROBOTICS LAB", "Robotic systems, mechanisms, control and hands-on prototyping."],
  ["IoT LAB", "Sensors, connected systems, embedded devices and automation."],
  ["EMBEDDED SYSTEMS", "Arduino, Raspberry Pi, ESP32 and practical hardware development."],
  ["COMPUTER VISION", "Vision systems for intelligent machines and applied research."],
  ["SMART AGRICULTURE", "Technology concepts for soil, water, crops and sustainable farming."]
];
export const metadata = { title: "Innovation Lab" };
export default function InnovationLab() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow">MVA INNOVATION LAB</span><h1>A place to experiment, prototype and learn by building.</h1><p>Explore the technology areas that connect MVA learning, research and practical innovation.</p></div></section><section className="section section-light"><div className="container"><div className="grid grid-3">{labs.map(([title,text],i)=><article className="card" key={title}><span className="badge">LAB {String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p className="muted">{text}</p><a className="text-link dark-link" href="/contact">Enter Innovation Lab →</a></article>)}</div></div></section><section className="section section-dark"><div className="container"><span className="eyebrow">LAB ECOSYSTEM</span><h2 className="section-title">Idea → prototype → research.</h2><div className="process-line">{["Explore", "Experiment", "Prototype", "Test", "Document", "Research", "Share"].map((x,i)=><div className="process-step" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section></>;
}
