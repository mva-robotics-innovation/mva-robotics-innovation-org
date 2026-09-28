import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT MVA</span>
          <h1>Empowering the next generation of innovators.</h1>
          <p>Rural Initiative, Tech India Mission — starting from Jharkhand and scaling for Bharat.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <SectionHeading eyebrow="01 / WHO WE ARE" title="Technology with purpose." />
            <p>
              MVA Robotics Innovation Organization is a technology-driven educational and innovation organization
              dedicated to empowering students, researchers, innovators, entrepreneurs, farmers and communities through
              practical technology learning and scientific innovation.
            </p>
            <p>
              Our focus spans Artificial Intelligence, Robotics, Embedded Systems, IoT, emerging technologies,
              research methodology, scientific innovation, product development and technology entrepreneurship.
            </p>
          </Reveal>
          <Reveal>
            <div className="image-frame">
              <Image src="/logo.jpeg" alt="MVA Robotics Innovation Organization official logo" width={700} height={700} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="02 / VISION" title="A technologically empowered India." text="We aim to nurture future scientists, researchers, innovators and entrepreneurs capable of solving real-world challenges through science and technology." />
          <div className="vision-grid">
            {[
              ["Learn", "Make advanced technology understandable and accessible."],
              ["Build", "Turn knowledge into working prototypes and products."],
              ["Research", "Encourage scientific thinking, experimentation and documentation."],
              ["Empower", "Take technology learning into communities, villages and farms."]
            ].map(([title, text]) => (
              <Reveal key={title}><article className="glass-card"><span className="mini-dot" /><h3>{title}</h3><p>{text}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container founder-grid">
          <Reveal>
            <div className="founder-portrait">
              <Image src="/logo.jpeg" alt="MVA official branding" width={500} height={500} />
              <span>ASHISH KUMAR / FOUNDER & DIRECTOR</span>
            </div>
          </Reveal>
          <Reveal className="founder-copy">
            <span className="eyebrow">03 / FOUNDER & DIRECTOR</span>
            <h2>Ashish Kumar</h2>
            <h3>Founder & Director, MVA Robotics Innovation Organization</h3>
            <p>
              Ashish Kumar is the Founder and Director of MVA Robotics Innovation Organization and a passionate young
              researcher and innovator committed to promoting technology, research and innovation among students and communities.
            </p>
            <p>
              He has actively contributed to research and innovation initiatives and has presented multiple research papers
              at national and international platforms. He has served as a Member of the Institution&apos;s Innovation Council
              (IIC) at Gulzar Group of Institutes and as the Student Convenor of IIC at Jharkhand Rai University.
            </p>
            <p>
              He has also participated in programs and events such as the All India Research Champion and Young Scientist
              Conclaves. Through MVA, he aims to foster scientific thinking, technological awareness and innovation-driven education.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
