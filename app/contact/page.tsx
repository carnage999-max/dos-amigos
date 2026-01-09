"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, CheckCircle } from "lucide-react";
import { restaurantInfo } from "@/lib/config";
import { WaveDivider } from "@/components/SectionDivider";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission (replace with actual email service)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#dc2626] to-[#991b1b] px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl text-white mb-4"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <WaveDivider color="verde" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[#1a8754] mb-8">
                CONTACT INFO
              </h2>
              <p className="text-lg text-[#78350f]/70 leading-relaxed mb-8">
                Have a question or want to make a reservation? Reach out using any of the methods below, or send us a message using the form.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#1a8754] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a8754] to-[#0f5c38] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#78350f]/70 mb-1">
                    Phone
                  </p>
                  <p className="text-xl font-bold text-[#78350f] group-hover:text-[#1a8754] transition-colors">
                    {restaurantInfo.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#fbbf24] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#78350f]/70 mb-1">
                    Address
                  </p>
                  <p className="text-lg font-bold text-[#78350f] group-hover:text-[#fbbf24] transition-colors">
                    {restaurantInfo.address}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#dc2626] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dc2626] to-[#991b1b] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#78350f]/70 mb-1">
                    Email
                  </p>
                  <p className="text-lg font-bold text-[#78350f] group-hover:text-[#dc2626] transition-colors break-all">
                    {restaurantInfo.email}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#f5f0e8] to-[#fef9f3] rounded-3xl p-8 shadow-2xl">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#78350f] mb-6">
                SEND A MESSAGE
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#1a8754] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#1a8754] mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[#78350f]/70">
                    We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#78350f] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f5f0e8] focus:border-[#1a8754] focus:outline-none transition-colors bg-white text-[#78350f]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#78350f] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f5f0e8] focus:border-[#1a8754] focus:outline-none transition-colors bg-white text-[#78350f]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#78350f] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f5f0e8] focus:border-[#1a8754] focus:outline-none transition-colors bg-white text-[#78350f] resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a8754] to-[#0f5c38] text-white font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#78350f]/60 text-center">
                    Protected by spam filters. Your information is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
