"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Slack icon component
const SlackIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
    <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5z" />
    <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
    <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
    <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    <path d="M10 9.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5z" />
    <path d="M8.5 5H10V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
  </svg>
);

export default function FooterZH() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="py-12 px-6 md:px-12 border-t border-gray-100"
    >
      <div className="max-w-2xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Email */}
          <a
            href="mailto:possibleme2026@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            <Mail size={18} />
            <span>possibleme2026@gmail.com</span>
          </a>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="/website/xhscommunity.png"
                alt="扫码加入社区"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-gray-400">扫码加入小红书群聊</span>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6 border-t border-gray-100">
          <Link
            href="https://github.com/tasteIntelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://join.slack.com/t/tasteintelligence/shared_invite/zt-3qijmgrgm-czV_mNsOtByuDEl2aiGWwQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            <SlackIcon size={18} />
            <span>Slack</span>
          </Link>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} tasteIntelligence
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
