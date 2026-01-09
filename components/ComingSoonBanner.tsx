"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export default function ComingSoonBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8, delay: 3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rojo via-amarillo to-verde shadow-2xl"
    >
      <div className="relative overflow-hidden">
        {/* Animated pattern background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.3) 20px, rgba(255, 255, 255, 0.3) 40px)`,
            backgroundSize: "200% 200%",
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white">
            {/* Mobile layout */}
            <div className="flex items-center gap-2 sm:hidden">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" fill="white" />
              </motion.div>
              <span className="font-[family-name:var(--font-display)] text-xl tracking-wider">
                OPENING SOON
              </span>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" fill="white" />
              </motion.div>
            </div>

            {/* Desktop layout */}
            <motion.div
              className="hidden sm:flex items-center gap-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" fill="white" />
            </motion.div>

            <span className="hidden sm:inline font-[family-name:var(--font-display)] text-2xl lg:text-3xl tracking-wider drop-shadow-lg">
              GRAND OPENING SOON
            </span>

            <motion.div
              className="hidden sm:flex items-center gap-2"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" fill="white" />
            </motion.div>

            <div className="hidden sm:block h-6 lg:h-8 w-px bg-white/40" />

            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
