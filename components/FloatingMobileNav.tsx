"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, BookOpen, ShoppingBag, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingMobileNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector("footer");
      if (!footer) return;

      // Get footer position
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide nav when footer enters viewport from bottom
      // Show nav when we scroll back up and footer exits viewport
      if (footerRect.top < windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Check initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "tel:+12075551234",
      icon: Phone,
      label: "Call",
      isActive: false,
    },
    {
      href: "/menu",
      icon: BookOpen,
      label: "Menu",
      isActive: pathname === "/menu",
    },
    {
      href: "/order",
      icon: ShoppingBag,
      label: "Order",
      isActive: pathname === "/order",
    },
    {
      href: "/location",
      icon: MapPin,
      label: "Directions",
      isActive: pathname === "/location",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-gradient-to-br from-[#1a8754] to-[#0f5c38] backdrop-blur-xl rounded-full shadow-2xl px-6 py-3 border border-[#fbbf24]/20">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isPhone = item.href.startsWith("tel:");

                return isPhone ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative group"
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="relative w-12 h-12 flex items-center justify-center"
                    >
                      <Icon
                        className="w-6 h-6 text-white transition-all duration-300 group-active:scale-90"
                        strokeWidth={2}
                      />
                    </motion.div>
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className="relative group">
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="relative w-12 h-12 flex items-center justify-center"
                    >
                      {item.isActive ? (
                        <>
                          {/* Hollow effect for active state - outer stroke only */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-11 h-11 rounded-full bg-white/20" />
                          </div>
                          <Icon
                            className="w-6 h-6 text-white relative z-10"
                            strokeWidth={2.5}
                            fill="none"
                          />
                        </>
                      ) : (
                        <Icon
                          className="w-6 h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                          strokeWidth={2}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
