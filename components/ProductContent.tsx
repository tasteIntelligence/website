"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function ProductContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Left: Icon & Title */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            OpenCollege Agent
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Your AI companion for campus life. Designed specifically for university students 
            to make learning smarter and daily life easier. From course scheduling to 
            campus navigation, from study groups to career planning — all in one place.
          </p>

          <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Right: Preview Image Placeholder */}
        <div className="w-full md:w-80 h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">App Preview</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
