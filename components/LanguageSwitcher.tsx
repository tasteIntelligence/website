"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`text-sm transition-colors duration-300 ${
          language === "en" ? "text-gray-900 font-medium" : "text-gray-400 hover:text-gray-600"
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">/</span>
      <button
        onClick={() => setLanguage("zh")}
        className={`text-sm transition-colors duration-300 ${
          language === "zh" ? "text-gray-900 font-medium" : "text-gray-400 hover:text-gray-600"
        }`}
      >
        中文
      </button>
    </div>
  );
}
