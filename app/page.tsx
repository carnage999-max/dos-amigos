"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ShoppingBag } from "lucide-react";
import { CurvedDivider, WaveDivider, TextureDivider } from "@/components/SectionDivider";
import { restaurantInfo, signatureItems } from "@/lib/config";
import StructuredData from "@/components/StructuredData";
import { getRestaurantSchema } from "@/lib/structured-data";

export default function Home() {
  const restaurantSchema = getRestaurantSchema();
  return (
    <>
      <StructuredData data={restaurantSchema} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Textured Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a8754] via-[#0f5c38] to-[#1a8754]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.3) 35px, rgba(251, 191, 36, 0.3) 70px),
                repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.3) 35px, rgba(220, 38, 38, 0.3) 70px)
              `,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 flex flex-col items-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <Image
                  src="/dos-amigos-nobg.png"
                  alt="Dos Amigos Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl text-white drop-shadow-2xl tracking-wider mb-4">
              DOS AMIGOS
            </h1>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-amarillo to-transparent mb-6" />
            <p className="text-2xl sm:text-3xl text-amarillo font-semibold tracking-wide drop-shadow-lg">
              {restaurantInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/90 mb-12"
          >
            <MapPin className="w-5 h-5" />
            <p className="text-lg">{restaurantInfo.address}</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/menu"
              className="group relative px-10 py-4 bg-white text-[#1a8754] font-bold text-lg rounded-full shadow-2xl hover:shadow-[#fbbf24]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-[#fbbf24] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link
              href="/order"
              className="group relative px-10 py-4 bg-[#dc2626] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#dc2626]/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Order Online</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <CurvedDivider color="cream" />

      {/* What We Serve */}
      <section className="py-20 bg-[#fef9f3] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-center text-[#1a8754] mb-16"
          >
            WHAT WE SERVE
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["TACOS", "BURRITOS", "CHIMICHANGAS"].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  href="/menu"
                  className="block relative h-64 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      idx === 0
                        ? "from-[#dc2626] to-[#991b1b]"
                        : idx === 1
                        ? "from-[#fbbf24] to-[#f59e0b]"
                        : "from-[#1a8754] to-[#0f5c38]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="relative h-full flex items-center justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-5xl text-white drop-shadow-2xl tracking-wider group-hover:scale-110 transition-transform">
                      {item}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TextureDivider />

      {/* Signature Items */}
      <section className="py-20 bg-[#f5f0e8] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-center text-[#78350f] mb-4"
          >
            SIGNATURE ITEMS
          </motion.h2>
          <p className="text-center text-[#78350f]/70 mb-12 text-lg">
            Customer favorites from our menu
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureItems.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#1a8754] group hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-bold text-[#78350f]/50">
                    #{item.number}
                  </span>
                  <span className="text-2xl font-bold text-[#dc2626]">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#78350f] group-hover:text-[#1a8754] transition-colors">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-3 bg-[#1a8754] text-white font-bold rounded-full hover:bg-[#0f5c38] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="verde" />

      {/* Local Credibility */}
      <section className="py-20 bg-gradient-to-br from-[#fef9f3] to-[#f5f0e8] px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-[#1a8754] mb-8"
          >
            PROUDLY SERVING PITTSFIELD, MAINE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-8 h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.${Math.random().toString().slice(2, 10)}!2d-69.3828!3d44.7792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzQ1LjEiTiA2OcKwMjInNTguMSJX!5e0!3m2!1sen!2sus!4v1234567890123`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#78350f] text-white font-bold rounded-full hover:bg-[#451a03] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      <CurvedDivider flip color="sand" />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#dc2626] to-[#991b1b] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 100px)`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl text-white mb-8 drop-shadow-2xl"
          >
            DINE IN • TAKE OUT • DELIVERY
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#dc2626] font-bold text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
            <Link
              href="/order"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#fbbf24] text-[#78350f] font-bold text-lg rounded-full shadow-2xl hover:shadow-[#fbbf24]/50 transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Order Online
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}
