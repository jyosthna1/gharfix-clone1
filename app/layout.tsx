

import "./globals.css"
import type { Metadata } from "next";
import Header from "./components/Header"
import Footer from "./components/Footer"

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GharFix",
  "telephone": "+91-7506855407",
  "url": "https://gharfix.org",
  "areaServed": ["Mumbai","Navi Mumbai"],
  "serviceType": "Home Services",
  "priceRange": "₹₹"
}

export const metadata: Metadata = {
  openGraph: {
    siteName: 'GharFix',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}