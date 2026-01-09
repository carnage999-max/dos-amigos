"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { menuData } from "@/lib/config";
import { SlantedDivider, TextureDivider } from "@/components/SectionDivider";
import StructuredData from "@/components/StructuredData";
import { getMenuSchema } from "@/lib/structured-data";

export default function MenuPage() {
  const menuSchema = getMenuSchema();
  const [openSection, setOpenSection] = useState<string | null>("entrees");

  const sections = [
    { id: "aLaCarte", title: "Á La Carte", items: menuData.aLaCarte },
    { id: "appetizers", title: "Appetizers", items: menuData.appetizers },
    { id: "entrees", title: "Entrées", items: menuData.entrees },
    { id: "sides", title: "Side Dishes", items: menuData.sides },
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <StructuredData data={menuSchema} />
      <main className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#1a8754] to-[#0f5c38] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(251, 191, 36, 0.5) 20px, rgba(251, 191, 36, 0.5) 40px)`,
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl text-white text-center mb-4"
          >
            OUR MENU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-white/90 text-lg"
          >
            Authentic Mexican cuisine made fresh daily
          </motion.p>
        </div>
      </section>

      <SlantedDivider direction="right" color="cream" />

      {/* Mobile Accordion Menu */}
      <section className="lg:hidden max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-4">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#f5f0e8]"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-[#fef9f3] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#fef9f3] transition-all"
              >
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#1a8754]">
                  {section.title}
                </h2>
                <motion.div
                  animate={{ rotate: openSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#1a8754]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-6 space-y-4">
                      {section.items.map((item: any) => (
                        <div
                          key={item.number}
                          className="pb-4 border-b border-[#f5f0e8] last:border-0 last:pb-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-xs font-bold text-[#78350f]/50">
                                  #{item.number}
                                </span>
                                <h3 className="text-lg font-bold text-[#78350f]">
                                  {item.name}
                                </h3>
                              </div>
                              {item.description && (
                                <p className="text-sm text-[#78350f]/70">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <span className="text-xl font-bold text-[#dc2626] ml-4">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Desktop Two-Column Layout */}
      <section className="hidden lg:block max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="break-inside-avoid"
            >
              <div className="mb-8">
                <h2 className="font-[family-name:var(--font-display)] text-4xl text-[#1a8754] mb-2">
                  {section.title}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#1a8754] to-transparent" />
              </div>

              <div className="space-y-6">
                {section.items.map((item: any) => (
                  <div
                    key={item.number}
                    className="group hover:bg-[#fef9f3] p-4 rounded-xl transition-all duration-300 -mx-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs font-bold text-[#78350f]/50">
                            #{item.number}
                          </span>
                          <h3 className="text-xl font-bold text-[#78350f] group-hover:text-[#1a8754] transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        {item.description && (
                          <p className="text-sm text-[#78350f]/70 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="text-2xl font-bold text-[#dc2626] ml-6 min-w-[80px] text-right">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <TextureDivider />

      {/* Footer Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="bg-[#f5f0e8] rounded-2xl p-8">
          <p className="text-[#78350f] font-semibold mb-4 text-lg">
            No substitutions. Prices subject to change.
          </p>
          <p className="text-sm text-[#78350f]/70">
            Please inform your server of any food allergies. While we take precautions, we cannot guarantee that our kitchen is completely allergen-free.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
