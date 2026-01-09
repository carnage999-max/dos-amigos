"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-verde via-verde-dark to-verde"
        >
          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.3) 35px, rgba(251, 191, 36, 0.3) 70px),
                repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.3) 35px, rgba(220, 38, 38, 0.3) 70px)
              `,
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Tumbling Logo */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40"
            >
              <Image
                src="/dos-amigos-nobg.png"
                alt="Dos Amigos"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Restaurant Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-white tracking-wider drop-shadow-2xl"
            >
              DOS AMIGOS
            </motion.h1>

            {/* Progress Bar Container */}
            <div className="w-64 sm:w-80">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                {/* Progress bar background */}
                <div className="relative h-6 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border-2 border-white/30 shadow-xl">
                  {/* Progress bar fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amarillo via-rojo to-amarillo rounded-full"
                    style={{
                      width: `${progress}%`,
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Percentage Text - Handwritten style */}
                <motion.div
                  className="text-center mt-4"
                  animate={{
                    scale: progress === 100 ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg font-[family-name:var(--font-handwritten)]">
                    {Math.round(progress)}%
                  </span>
                </motion.div>
              </motion.div>

              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-4 text-white/90 font-semibold text-sm tracking-widest"
              >
                PREPARANDO SU EXPERIENCIA...
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-amarillo"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
