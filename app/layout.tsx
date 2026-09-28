import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mva-robotics-innovation-org.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "MVA Robotics Innovation Organization", template: "%s | MVA Robotics Innovation Organization" },
  description: "MVA Robotics Innovation Organization is a Ranchi-based innovation organization focused on Artificial Intelligence, Robotics, IoT, research, technology education, rural innovation and sustainable farming technology.",
  keywords: ["MVA Robotics Innovation Organization", "AI", "robotics", "research", "rural technology", "Jharkhand", "India", "innovation"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: "MVA Robotics Innovation Organization | AI, Robotics, Research & Rural Technology", description: "Technology education, robotics, artificial intelligence, research and rural innovation for India.", siteName: "MVA Robotics Innovation Organization", url: siteUrl, images: [{ url: "/logo.jpeg", width: 1200, height: 1200, alt: "MVA Robotics Innovation Organization" }] },
  twitter: { card: "summary_large_image", title: "MVA Robotics Innovation Organization", description: "AI, robotics, research and rural technology.", images: ["/logo.jpeg"] },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Organization", name: "MVA Robotics Innovation Organization",
    alternateName: "MVA Robotics", url: siteUrl, logo: `${siteUrl}/logo.jpeg`,
    email: "mvaroboticsinnovation@gmail.com", telephone: "+91 62390 66177",
    sameAs: ["https://www.linkedin.com/in/mva-robotics-innovation-94b33a43b/", "https://www.youtube.com/@mvaroboticsinnovation", "https://wa.me/916239066177"],
    description: "Ranchi-based innovation organization focused on AI, robotics, IoT, research, technology education, rural innovation and sustainable farming technology."
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
