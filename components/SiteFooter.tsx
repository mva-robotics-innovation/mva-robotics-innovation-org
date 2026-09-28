import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["About", "/about"], ["Programs", "/programs"], ["Research", "/research"],
  ["Innovation Lab", "/innovation-lab"], ["Projects", "/projects"], ["Courses", "/courses"],
  ["Rural Mission", "/rural-mission"], ["Events", "/events"], ["Contact", "/contact"]
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src="/logo.jpeg" alt="MVA Robotics Innovation Organization" width={72} height={72} />
          <div>
            <strong>MVA ROBOTICS INNOVATION ORGANIZATION</strong>
            <span>RURAL INITIATIVE • TECH INDIA MISSION</span>
          </div>
        </div>
        <div className="footer-quote">“We Start from Jharkhand, We Scale for Bharat.”</div>
      </div>

      <div className="container footer-grid">
        <div>
          <h3>About MVA</h3>
          <p>MVA Robotics Innovation Organization is a technology-driven educational and innovation organization focused on AI, robotics, research, emerging technology and community innovation.</p>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/mva-robotics-innovation-94b33a43b/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@mvaroboticsinnovation" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://wa.me/916239066177" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">{quickLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
        </div>
        <div>
          <h3>Connect</h3>
          <p><a href="tel:+916239066177">+91 62390 66177</a><br/><a href="mailto:mvaroboticsinnovation@gmail.com">mvaroboticsinnovation@gmail.com</a></p>
          <Link className="btn btn-outline" href="/contact">Connect with MVA ↗</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} MVA Robotics Innovation Organization. All Rights Reserved.</span>
        <span>AI • ROBOTICS • RESEARCH • INNOVATION • RURAL INDIA</span>
      </div>
    </footer>
  );
}
