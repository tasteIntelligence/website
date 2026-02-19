"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-gray-900 mb-8"
        >
          TASTE
          <br />
          INTELLIGENCE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-gray-500 tracking-wide"
        >
          Scaling the AI Product Taste
        </motion.p>
      </div>
    </section>
  );
}
