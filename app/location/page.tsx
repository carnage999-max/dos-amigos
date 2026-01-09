"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car } from "lucide-react";
import { restaurantInfo } from "@/lib/config";
import { WaveDivider, TextureDivider } from "@/components/SectionDivider";
import StructuredData from "@/components/StructuredData";
import { getLocalBusinessSchema } from "@/lib/structured-data";

export default function LocationPage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const daysOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const dayLabels: Record<string, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };

  const today = new Date().getDay();
  const todayKey = daysOrder[(today + 6) % 7]; // Adjust for Monday start

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <main className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(26, 135, 84, 0.3) 100px, rgba(26, 135, 84, 0.3) 200px)`,
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl text-[#78350f] mb-4"
          >
            LOCATION & HOURS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#78350f]/80 text-lg font-semibold"
          >
            Visit us in downtown Pittsfield
          </motion.p>
        </div>
      </section>

      <WaveDivider color="verde" />

      {/* Map and Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.${Math.random().toString().slice(2, 10)}!2d-69.3828!3d44.7792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzQ1LjEiTiA2OcKwMjInNTguMSJX!5e0!3m2!1sen!2sus!4v1234567890123`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Quick Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#1a8754] to-[#0f5c38] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-white/90 leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="group flex items-center gap-3 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#dc2626] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[#dc2626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#78350f]/70 font-semibold">Call Us</p>
                <p className="text-lg font-bold text-[#78350f] group-hover:text-[#dc2626] transition-colors">
                  {restaurantInfo.phoneDisplay}
                </p>
              </div>
            </a>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Get Directions</p>
                <p className="text-sm text-white/80">Open in Maps</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <TextureDivider />

      {/* Hours Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Clock className="w-12 h-12 text-[#1a8754] mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-[#78350f] mb-2">
            HOURS
          </h2>
          <p className="text-[#78350f]/70">We're here to serve you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#f5f0e8]"
        >
          <div className="divide-y-2 divide-[#f5f0e8]">
            {daysOrder.map((day, idx) => {
              const hours = restaurantInfo.hours[day as keyof typeof restaurantInfo.hours];
              const isToday = day === todayKey;

              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center justify-between px-8 py-5 transition-all ${
                    isToday
                      ? "bg-gradient-to-r from-[#1a8754]/10 to-transparent border-l-4 border-[#1a8754]"
                      : "hover:bg-[#fef9f3]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-bold text-lg ${
                        isToday ? "text-[#1a8754]" : "text-[#78350f]"
                      }`}
                    >
                      {dayLabels[day]}
                    </span>
                    {isToday && (
                      <span className="px-3 py-1 bg-[#1a8754] text-white text-xs font-bold rounded-full">
                        TODAY
                      </span>
                    )}
                  </div>
                  <div
                    className={`font-semibold ${
                      isToday ? "text-[#1a8754]" : "text-[#78350f]/70"
                    }`}
                  >
                    {hours.closed ? (
                      <span className="text-[#dc2626]">Closed</span>
                    ) : (
                      <span>
                        {hours.open} - {hours.close}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-[#78350f]/70"
        >
          <p>Hours may vary on holidays. Please call ahead to confirm.</p>
        </motion.div>
      </section>

      <WaveDivider color="amarillo" />

      {/* Parking & Access Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Car className="w-12 h-12 text-[#fbbf24] mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-[#78350f] mb-2">
            PARKING & ACCESS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#f5f0e8] to-[#fef9f3] rounded-3xl p-10 shadow-xl"
        >
          <ul className="space-y-4 text-lg text-[#78350f]">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#1a8754] rounded-full mt-2.5 flex-shrink-0" />
              <span>Free street parking available on Main Street</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#fbbf24] rounded-full mt-2.5 flex-shrink-0" />
              <span>Additional parking lot behind the building</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#dc2626] rounded-full mt-2.5 flex-shrink-0" />
              <span>Wheelchair accessible entrance on Main Street</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#1a8754] rounded-full mt-2.5 flex-shrink-0" />
              <span>Located in the heart of downtown Pittsfield</span>
            </li>
          </ul>
        </motion.div>
      </section>
    </main>
    </>
  );
}
