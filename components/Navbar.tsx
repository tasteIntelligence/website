"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navItemsEn = [
  { name: "Blog", href: "#blog" },
  { name: "Join Us", href: "#join" },
];

const navItemsZh = [
  { name: "博客", href: "#blog" },
  { name: "加入我们", href: "#join" },
];

export default function Navbar() {
  const { language } = useLanguage();
  const navItems = language === "zh" ? navItemsZh : navItemsEn;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-end px-8 py-6 md:px-12"
    >
      <div className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={item.href}
              className="text-sm font-normal text-gray-600 transition-colors duration-300 hover:text-gray-900 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <LanguageSwitcher />
        </motion.div>
      </div>
    </motion.nav>
  );
}
