"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check, ShoppingBag } from "lucide-react";
import { restaurantInfo } from "@/lib/config";
import { CurvedDivider } from "@/components/SectionDivider";

interface OrderPlatform {
  name: string;
  url: string;
  available: boolean;
}

export default function OrderPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const availablePlatforms = Object.entries(restaurantInfo.orderPlatforms)
    .filter(([_, platform]) => (platform as OrderPlatform).available)
    .map(([key, platform]) => ({ key, ...(platform as OrderPlatform) }));

  // Auto-redirect if only one platform available
  useEffect(() => {
    if (availablePlatforms.length === 1) {
      const timer = setTimeout(() => {
        window.location.href = availablePlatforms[0].url;
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [availablePlatforms]);

  if (availablePlatforms.length === 1) {
    return (
      <main className="min-h-screen pt-24 pb-32 flex items-center justify-center bg-gradient-to-br from-[#fef9f3] to-[#f5f0e8]">
        <div className="text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <ShoppingBag className="w-20 h-20 text-[#1a8754] mx-auto mb-6" />
          </motion.div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl text-[#78350f] mb-4">
            REDIRECTING...
          </h1>
          <p className="text-lg text-[#78350f]/70">
            Taking you to {availablePlatforms[0].name}
          </p>
          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-[#1a8754] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-[#fbbf24] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-[#dc2626] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#dc2626] to-[#991b1b] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl text-white mb-4"
          >
            ORDER ONLINE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg"
          >
            Choose your preferred delivery platform
          </motion.p>
        </div>
      </section>

      <CurvedDivider color="cream" />

      {/* Platform Selection */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availablePlatforms.map((platform, idx) => (
            <motion.a
              key={platform.key}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedPlatform(platform.key)}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#1a8754] overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a8754]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-4xl text-[#78350f] mb-2 group-hover:text-[#1a8754] transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-[#78350f]/70">
                      Order for delivery or pickup
                    </p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-[#78350f]/40 group-hover:text-[#1a8754] group-hover:scale-110 transition-all" />
                </div>

                <div className="flex items-center gap-3 text-sm text-[#1a8754]">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Available now</span>
                </div>
              </div>

              {/* Platform indicator */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#fbbf24]/10 to-transparent rounded-tl-full" />
            </motion.a>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#f5f0e8] via-[#fef9f3] to-[#f5f0e8] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#1a8754] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-[#78350f]">
                Coming Soon: Direct Ordering
              </h3>
            </div>
            <p className="text-[#78350f]/70 leading-relaxed">
              We're working on a direct ordering system that will save you money on fees.
              Check back soon for the best deals when you order straight from us.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Call Option */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a8754] to-[#0f5c38] rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.3) 35px, rgba(251, 191, 36, 0.3) 70px)`,
            }}
          />
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl mb-4">
              PREFER TO CALL?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Order by phone for pickup
            </p>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-block px-10 py-4 bg-white text-[#1a8754] font-bold text-xl rounded-full hover:bg-[#fbbf24] hover:text-[#78350f] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {restaurantInfo.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
