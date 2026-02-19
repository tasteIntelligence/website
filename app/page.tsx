"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroZH from "@/components/HeroZH";
import IntroSection from "@/components/IntroSection";
import IntroSectionZH from "@/components/IntroSectionZH";
import Footer from "@/components/Footer";
import FooterZH from "@/components/FooterZH";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const isZh = language === "zh";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {isZh ? <HeroZH /> : <Hero />}
      {isZh ? <IntroSectionZH /> : <IntroSection />}
      {isZh ? <FooterZH /> : <Footer />}
    </main>
  );
}
