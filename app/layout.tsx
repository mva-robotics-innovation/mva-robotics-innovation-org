import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'MVA Robotics Innovation Org', template: '%s | MVA Robotics Innovation Org' },
  description: 'Robotics, artificial intelligence, research, innovation, education and technology initiatives by MVA Robotics Innovation Org.',
  keywords: ['MVA Robotics Innovation Org','robotics','AI','innovation','research','courses','projects','technology'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', title: 'MVA Robotics Innovation Org', description: 'Robotics, AI, research and innovation.', siteName: 'MVA Robotics Innovation Org' },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const jsonLd = { '@context':'https://schema.org', '@type':'Organization', name:'MVA Robotics Innovation Org', url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', description:'Robotics, AI, research and innovation organization.' };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
