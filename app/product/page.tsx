"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import ProductContent from "@/components/ProductContent";
import ProductContentZH from "@/components/ProductContentZH";

export default function ProductPage() {
  const { language } = useLanguage();
  const isZh = language === "zh";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              {isZh ? "产品" : "Products"}
            </h1>
            <p className="text-gray-600 max-w-2xl">
              {isZh
                ? "专为大学生打造的校园生活 AI 伙伴"
                : "Your AI companion for campus life, designed for university students"}
            </p>
          </motion.div>

          {/* Product Grid */}
          {isZh ? <ProductContentZH /> : <ProductContent />}
        </div>
      </section>
      <Footer />
    </main>
  );
}
