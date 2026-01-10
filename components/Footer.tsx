import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { restaurantInfo } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brown to-brown-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-16 h-16">
                <Image
                  src="/dos-amigos-nobg.png"
                  alt="Dos Amigos"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-amarillo group-hover:text-verde transition-colors">
                  DOS AMIGOS
                </h3>
                <p className="text-sm text-cream/70">{restaurantInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-sm text-cream/80 text-center md:text-left">
              Bringing authentic Mexican cuisine to Pittsfield, Maine. Opening 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-amarillo">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-cream/80 hover:text-amarillo transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-cream/80 hover:text-amarillo transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-cream/80 hover:text-amarillo transition-colors">
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-amarillo transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-amarillo transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-amarillo">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-amarillo flex-shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-amarillo flex-shrink-0" />
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-cream/80 hover:text-amarillo transition-colors text-sm"
                >
                  {restaurantInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-amarillo flex-shrink-0" />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-cream/80 hover:text-amarillo transition-colors text-sm"
                >
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-cream/20">
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-amarillo">Follow Us</h4>
            <p className="text-sm text-cream/70 mb-4">Stay updated with special offers and news</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-amarillo flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-amarillo flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-amarillo flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://mylibertysocial.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                aria-label="Liberty Social"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/liberty-social.jpeg"
                    alt="Liberty Social"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Delivery Platforms */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-amarillo">Delivery Available!</h4>
            <p className="text-sm text-cream/70 mb-4">Order through your favorite platform</p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap items-center">
              <a
                href="https://www.doordash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-4 rounded-lg bg-white hover:bg-amarillo transition-all duration-300 hover:scale-105 flex items-center"
              >
                <div className="relative w-24 h-8">
                  <Image
                    src="/DoorDash_Logo.svg"
                    alt="DoorDash"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-4 rounded-lg bg-white hover:bg-amarillo transition-all duration-300 hover:scale-105 flex items-center"
              >
                <div className="relative w-24 h-8">
                  <Image
                    src="/UberEATS_logo.svg"
                    alt="Uber Eats"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/60">
              © {currentYear} Dos Amigos. All rights reserved.
            </p>
            <p className="text-xs text-cream/40">
              Made with ❤️ in Pittsfield, Maine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
