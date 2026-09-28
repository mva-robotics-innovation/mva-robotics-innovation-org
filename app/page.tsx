import Image from "next/image";
import Link from "next/link";
import RoboticsHero from "@/components/RoboticsHero";
import NeuralNetwork from "@/components/NeuralNetwork";
import { Reveal } from "@/components/Reveal";
import { MissionPillars } from "@/components/MissionPillars";

const technologies = [
  ["AI", "Artificial Intelligence & intelligent systems"],
  ["ROBOTICS", "Humanoid, industrial and educational robotics"],
  ["RESEARCH", "Scientific thinking, methodology and publications"],
  ["IoT", "Connected systems, sensors and automation"],
  ["INNOVATION", "Prototypes, products and entrepreneurship"],
  ["RURAL TECH", "Technology awareness for villages and farms"],
];

const programs = [
  ["Artificial Intelligence", "AI, machine learning, generative AI and computer vision."],
  ["Robotics & Embedded Systems", "Robotics, Arduino, Raspberry Pi, ESP32 and automation."],
  ["Smart Agriculture", "IoT agriculture, soil monitoring and smart irrigation."],
  ["Research & Innovation", "Research methodology, prototypes, publications and mentorship."],
];

const projects = ["PRALAYA-X", "RAKSHAK-AI TRINITY", "SATQUERY AI", "BIOREVIVE 360°", "PRIYA AI", "CHRONOAI", "NYAYA BUILDER"];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">RURAL INITIATIVE • TECH INDIA MISSION</span>
            <h1>BUILDING SCIENTISTS, <span>INNOVATORS</span> &amp; TECHNOLOGY LEADERS</h1>
            <p className="hero-lead">Empowering Rural &amp; Urban India Through Robotics, Artificial Intelligence, Innovation and Scientific Research.</p>
            <div className="hero-statement">We Start from Jharkhand, We Scale for Bharat.</div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/programs">Explore Programs <span>↗</span></Link>
              <Link className="btn btn-outline-light" href="/admissions">Join the Mission</Link>
            </div>
            <Link className="text-link" href="/innovation-lab">Explore Innovation Lab <span>→</span></Link>
          </div>
          <div className="hero-visual">
            <RoboticsHero />
            <div className="hero-orbit-label label-one">AI / 01</div>
            <div className="hero-orbit-label label-two">MVA / IN</div>
            <div className="hero-orbit-label label-three">LAB / 03</div>
          </div>
        </div>
        <div className="container technology-strip">
          {technologies.map(([title, text], i) => (
            <div className="tech-strip-card" key={title}><span>0{i + 1}</span><strong>{title}</strong><small>{text}</small></div>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container intro-grid">
          <Reveal><span className="eyebrow dark-eyebrow">ABOUT MVA ROBOTICS</span><h2 className="section-title dark">Technology should create opportunity everywhere.</h2></Reveal>
          <Reveal><p className="large-copy">MVA Robotics Innovation Organization is a technology-driven educational and innovation organization dedicated to empowering students, researchers, innovators, entrepreneurs, farmers and communities through emerging technologies and scientific learning.</p><p>Our work spans Artificial Intelligence, Robotics, Embedded Systems, IoT, Research Methodology, Scientific Innovation, Emerging Technologies and practical technology development.</p><Link className="text-link dark-link" href="/about">Discover our mission →</Link></Reveal>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="section-head-row"><div><span className="eyebrow">OUR MISSION</span><h2 className="section-title">Innovation without boundaries.</h2></div><p className="section-side-copy">RURAL INITIATIVE • TECH INDIA MISSION<br/><strong>We Start from Jharkhand, We Scale for Bharat.</strong></p></div>
          <MissionPillars />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head-row"><div><span className="eyebrow">HOW WE DELIVER</span><h2 className="section-title">From idea to impact.</h2></div><p className="section-side-copy">A practical ecosystem that connects learning, laboratories, research and real-world opportunity.</p></div>
          <div className="process-line">{["IDEA", "INNOVATION LAB", "HANDS-ON TRAINING", "PROTOTYPE", "PRODUCT DEVELOPMENT", "RESEARCH", "OPPORTUNITY"].map((x, i) => <div className="process-step" key={x}><span>{String(i + 1).padStart(2, "0")}</span><strong>{x}</strong>{i < 6 && <i>→</i>}</div>)}</div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head-row"><div><span className="eyebrow dark-eyebrow">TECHNOLOGY PROGRAMS</span><h2 className="section-title dark">Learn. Build. Research.</h2></div><Link className="btn btn-dark" href="/courses">View all courses ↗</Link></div>
          <div className="program-grid">{programs.map(([title, text], i) => <Reveal key={title}><article className="program-card"><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><Link href="/courses">Explore <span>→</span></Link></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section research-banner">
        <div className="container research-banner-grid">
          <div><span className="eyebrow">RESEARCH &amp; INNOVATION CENTER</span><h2 className="section-title">Turn curiosity into evidence, prototypes and new possibilities.</h2><p>Research Paper Development, Scientific Publications, Research Methodology, Research Mentorship, Prototype Development, Patent Guidance, Innovation Incubation and Young Scientist Programs.</p><Link className="btn btn-primary" href="/research">Start Research ↗</Link></div>
          <div className="network-frame"><NeuralNetwork /><div className="network-caption">MVA / RESEARCH NETWORK</div></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head-row"><div><span className="eyebrow dark-eyebrow">PROJECT SHOWCASE</span><h2 className="section-title dark">Ideas becoming technology.</h2></div><Link className="text-link dark-link" href="/projects">View all projects →</Link></div>
          <div className="project-marquee">{projects.map((p, i) => <Link href="/projects" className="project-tile" key={p}><span>PROJECT 0{i + 1}</span><strong>{p}</strong><small>Explore project profile →</small></Link>)}</div>
        </div>
      </section>

      <section className="section village-section">
        <div className="container village-grid">
          <div><span className="eyebrow">TECHNOLOGY FOR EVERY VILLAGE</span><h2 className="section-title">Transforming villages into innovation hubs.</h2><p>Digital Literacy • AI Awareness • Smart Agriculture • IoT • Digital Payments • Water Conservation • Smart Irrigation • Soil Health • Drone Agriculture.</p></div>
          <div className="impact-flow">{["VILLAGE CHALLENGE", "TECHNOLOGY", "INNOVATION", "IMPACT"].map((x, i) => <div key={x} className="impact-node"><span>0{i + 1}</span><strong>{x}</strong>{i < 3 && <b>→</b>}</div>)}</div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container founder-home">
          <div className="founder-home-image"><Image src="/logo.jpeg" alt="MVA Robotics Innovation Organization official logo" width={560} height={560} /></div>
          <div><span className="eyebrow dark-eyebrow">FOUNDER &amp; DIRECTOR</span><h2 className="section-title dark">Ashish Kumar</h2><p className="large-copy">A young researcher and innovator committed to promoting technology, research and innovation among students and communities.</p><p>Through MVA Robotics Innovation Organization, Ashish Kumar aims to empower urban and rural communities by fostering scientific thinking, technological awareness and innovation-driven education.</p><Link className="text-link dark-link" href="/about">Meet the founder →</Link></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner"><div><span className="eyebrow">READY TO BUILD?</span><h2>Join the MVA Innovation Mission.</h2><p>Learn, research, build and create meaningful technology for India.</p></div><Link className="btn btn-primary" href="/admissions">Join the Mission ↗</Link></div>
      </section>
    </>
  );
}
