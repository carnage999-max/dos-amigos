import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
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
              Authentic Mexican cuisine in Pittsfield, Maine since 2015.
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

        {/* Divider */}
        <div className="border-t border-cream/20 pt-6">
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
