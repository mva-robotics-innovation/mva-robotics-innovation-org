import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow">CONNECT WITH MVA</span><h1>Join the Innovation Mission.</h1><p>For programs, research, collaboration, internships, innovation activities or technology initiatives, connect with us.</p></div></section>
      <section className="section"><div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="01 / CONTACT" title="Let’s build something meaningful." />
          <div className="contact-cards">
            <a className="contact-card" href="tel:+916239066177"><span>PHONE</span><strong>+91 62390 66177</strong><small>Click to call</small></a>
            <a className="contact-card" href="mailto:mvaroboticsinnovation@gmail.com"><span>EMAIL</span><strong>mvaroboticsinnovation@gmail.com</strong><small>Click to email</small></a>
            <a className="contact-card" href="https://wa.me/916239066177" target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>+91 62390 66177</strong><small>Open WhatsApp</small></a>
            <a className="contact-card" href="https://www.linkedin.com/in/mva-robotics-innovation-94b33a43b/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>MVA Robotics Innovation</strong><small>Open LinkedIn profile</small></a>
            <a className="contact-card" href="https://www.youtube.com/@mvaroboticsinnovation" target="_blank" rel="noreferrer"><span>YOUTUBE</span><strong>MVA Robotics Innovation</strong><small>Watch our channel</small></a>
          </div>
        </div>
        <div className="contact-form-wrap">
          <form className="contact-form" action="mailto:mvaroboticsinnovation@gmail.com" method="post" encType="text/plain">
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
            <label>Phone<input name="phone" placeholder="+91..." /></label>
            <label>Message<textarea name="message" required rows={6} placeholder="Tell us how we can help..." /></label>
            <button className="button primary" type="submit">Send Enquiry ↗</button>
            <p className="form-note">This starter uses your email client for enquiries. Later we can connect a production form service without exposing credentials.</p>
          </form>
        </div>
      </div></section>

      <section className="section section-dark">
        <div className="container qr-section">
          <div><SectionHeading eyebrow="02 / SOCIAL" title="Follow the mission." text="Use the QR code to connect with the MVA Robotics Innovation social presence." /><div className="hero-actions"><a className="button secondary" href="https://www.linkedin.com/in/mva-robotics-innovation-94b33a43b/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="button secondary" href="https://www.youtube.com/@mvaroboticsinnovation" target="_blank" rel="noreferrer">YouTube ↗</a></div></div>
          <div className="qr-card"><Image src="/mva-instagram-qr.png" alt="MVA Robotics Innovation social QR code" width={330} height={380} /><span>SCAN TO CONNECT</span></div>
        </div>
      </section>
    </>
  );
}
