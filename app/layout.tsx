import type { Metadata } from "next";
import { Inter, Bebas_Neue, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingMobileNav from "@/components/FloatingMobileNav";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mydosamigos.com"),
  title: {
    default: "Dos Amigos - Mexican Food & Cantina | Pittsfield, Maine",
    template: "%s | Dos Amigos - Mexican Food & Cantina",
  },
  description: "Authentic Mexican cuisine in Pittsfield, ME. Dine in, take out, or delivery. Serving tacos, burritos, chimichangas and more at 135 Main St.",
  keywords: ["Mexican food", "Pittsfield Maine", "restaurant", "tacos", "burritos", "cantina", "authentic mexican cuisine", "dine-in", "takeout", "delivery"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dos Amigos - Mexican Food & Cantina",
    description: "Authentic Mexican cuisine in Pittsfield, Maine. Dine in, take out, or delivery.",
    url: "https://www.mydosamigos.com",
    siteName: "Dos Amigos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dos Amigos Mexican Food & Cantina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dos Amigos - Mexican Food & Cantina",
    description: "Authentic Mexican cuisine in Pittsfield, Maine. Dine in, take out, or delivery.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import HiringButton from "@/components/HiringButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <LoadingAnimation />
        <ComingSoonBanner />
        <Header />
        {children}
        <Script 
          src="https://now-hiring-eta.vercel.app/widget.js" 
          strategy="afterInteractive" 
          data-manual="true"
          data-trigger=".taco-hiring-trigger"
        />
        <Footer />
        <FloatingMobileNav />
      </body>
    </html>
  );
}
