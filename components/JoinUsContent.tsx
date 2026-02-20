"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Slack } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function JoinUsContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Community Block */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Community</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Join our Xiaohongshu group to connect with fellow AI enthusiasts
          </p>
            <div className="flex justify-center">
            <div className="relative w-40 h-40 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="/website/xhscommunity.png"
                alt="Join our community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Slack Block */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
      >
        <Link
          href="https://join.slack.com/t/tasteintelligence/shared_invite/zt-3qijmgrgm-czV_mNsOtByuDEl2aiGWwQ"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Slack className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Slack</h3>
                <p className="text-sm text-gray-600">Join our Slack workspace</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </motion.div>

      {/* GitHub Block */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
      >
        <Link
          href="https://github.com/tasteIntelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Github className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                <p className="text-sm text-gray-600">Check out our open source projects</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </motion.div>

      {/* Email Block */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
      >
        <a
          href="mailto:possibleme2026@gmail.com"
          className="block p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">possibleme2026@gmail.com</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
