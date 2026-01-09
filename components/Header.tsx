"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order Online" },
    { href: "/location", label: "Location" },
    { href: "/about", label: "Hours" },
  ];

  return (
    <motion.header
      style={{ height: headerHeight }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#fef9f3]/95 shadow-lg"
          : "bg-[#fef9f3]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            animate={{
              scale: isScrolled ? 0.85 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src="/dos-amigos-nobg.png"
              alt="Dos Amigos Logo"
              width={isScrolled ? 45 : 55}
              height={isScrolled ? 45 : 55}
              className="object-contain transition-all duration-300"
              priority
            />
          </motion.div>
          <div className="relative">
            <h1
              className={`font-[family-name:var(--font-display)] tracking-wider transition-all duration-300 ${
                isScrolled ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
              } text-verde group-hover:text-rojo`}
            >
              DOS AMIGOS
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-verde via-amarillo to-rojo w-0 group-hover:w-full transition-all duration-500" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-[#78350f] hover:text-[#dc2626] transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dc2626] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - Hidden on mobile as we use floating nav */}
        <div className="md:hidden">
          <Link
            href="/menu"
            className="text-sm font-bold text-[#1a8754] hover:text-[#dc2626] transition-colors"
          >
            MENU
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
