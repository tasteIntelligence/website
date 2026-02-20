"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinUsContent from "@/components/JoinUsContent";
import JoinUsContentZH from "@/components/JoinUsContentZH";
import { useLanguage } from "@/context/LanguageContext";

export default function JoinUsPage() {
  const { language } = useLanguage();
  const isZh = language === "zh";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              {isZh ? "加入我们" : "Join Us"}
            </h1>
            <p className="text-gray-600">
              {isZh
                ? "一起探索 AI 产品的无限可能"
                : "Explore the infinite possibilities of AI products together"}
            </p>
          </motion.div>

          {/* Contact Blocks */}
          {isZh ? <JoinUsContentZH /> : <JoinUsContent />}
        </div>
      </section>
      <Footer />
    </main>
  );
}
