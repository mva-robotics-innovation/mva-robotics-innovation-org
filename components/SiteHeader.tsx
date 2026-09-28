 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Research", "/research"],
  ["Innovation Lab", "/innovation-lab"],
  ["Projects", "/projects"],
  ["Courses", "/courses"],
  ["Rural Mission", "/rural-mission"],
  ["Events", "/events"],
  ["Career", "/career"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="MVA Robotics home">
          <Image src="/logo.jpeg" alt="MVA Robotics Innovation Organization" width={48} height={48} priority />
          <span><strong>MVA</strong><small>ROBOTICS</small></span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link className={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "active" : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-nav" href="/admissions">Join the Mission <span>↗</span></Link>
          <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="container mobile-menu-inner">
          {links.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>
          ))}
          <Link className="btn btn-primary mobile-cta" href="/admissions">JOIN THE MISSION ↗</Link>
        </div>
      </div>
    </header>
  );
}
