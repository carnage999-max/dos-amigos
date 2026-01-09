import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingMobileNav from "@/components/FloatingMobileNav";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Dos Amigos - Mexican Food & Cantina | Pittsfield, Maine",
  description: "Authentic Mexican cuisine in Pittsfield, ME. Dine in, take out, or delivery. Serving tacos, burritos, chimichangas and more at 135 Main St.",
  keywords: ["Mexican food", "Pittsfield Maine", "restaurant", "tacos", "burritos", "cantina"],
  openGraph: {
    title: "Dos Amigos - Mexican Food & Cantina",
    description: "Authentic Mexican cuisine in Pittsfield, Maine",
    type: "website",
    locale: "en_US",
    siteName: "Dos Amigos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingMobileNav />
      </body>
    </html>
  );
}
