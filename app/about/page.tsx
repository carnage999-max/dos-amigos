"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Award } from "lucide-react";
import { restaurantInfo } from "@/lib/config";
import { CurvedDivider, SlantedDivider } from "@/components/SectionDivider";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Quality",
      description: "Fresh ingredients and traditional recipes in every dish",
    },
    {
      icon: Users,
      title: "Community",
      description: "Locally owned and proud to serve Pittsfield",
    },
    {
      icon: Award,
      title: "Consistency",
      description: "The same great taste every time you visit",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[#1a8754] via-[#0f5c38] to-[#1a8754] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(251, 191, 36, 0.3) 50px, rgba(251, 191, 36, 0.3) 100px),
              repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(220, 38, 38, 0.3) 50px, rgba(220, 38, 38, 0.3) 100px)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl text-white mb-6"
          >
            ABOUT DOS AMIGOS
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent mx-auto"
          />
        </div>
      </section>

      <CurvedDivider color="cream" />

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="space-y-8">
          {restaurantInfo.story.map((paragraph, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="text-xl leading-relaxed text-[#78350f] text-center sm:text-left">
                {paragraph}
              </p>
              {idx < restaurantInfo.story.length - 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1a8754]" />
                    <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                    <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <SlantedDivider direction="left" color="sand" />

      {/* Values Section */}
      <section className="bg-[#f5f0e8] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-center text-[#1a8754] mb-16"
          >
            WHAT DRIVES US
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1a8754] to-[#0f5c38] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#78350f] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[#78350f]/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SlantedDivider direction="right" color="cream" />

      {/* Visual Accent Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#fef9f3] to-[#f5f0e8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Restaurant Photo */}
              <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/restaurant-day.png"
                  alt="Dos Amigos Restaurant - Day"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                  <div className="text-center text-white">
                    <div className="font-[family-name:var(--font-display)] text-6xl mb-2">
                      2015
                    </div>
                    <p className="text-xl font-bold">Serving Since</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-8xl text-[#1a8754] opacity-20 font-serif">
                  "
                </div>
                <blockquote className="relative z-10 text-2xl text-[#78350f] italic leading-relaxed pl-8">
                  Every meal we serve is prepared with the same care and attention we'd give to our own family.
                </blockquote>
                <div className="mt-6 pl-8">
                  <p className="text-lg font-bold text-[#1a8754]">
                    — The Dos Amigos Team
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-[#78350f] mb-8"
          >
            READY TO EXPERIENCE IT YOURSELF?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/menu"
              className="px-10 py-4 bg-[#1a8754] text-white font-bold text-lg rounded-full hover:bg-[#0f5c38] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Our Menu
            </Link>
            <Link
              href="/location"
              className="px-10 py-4 bg-white text-[#1a8754] font-bold text-lg rounded-full border-2 border-[#1a8754] hover:bg-[#1a8754] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Visit Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
