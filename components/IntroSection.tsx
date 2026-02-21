"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function IntroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 px-6 md:px-12"
    >
      <div className="max-w-2xl mx-auto">
        {/* Mission Statement */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed text-gray-700 mb-8"
        >
          tasteIntelligence is a community research lab dedicated to scaling the
          AI product taste. We bridge the gap between foundational AI agent
          research and real-world AI application innovation, creating a space
          where cutting-edge research meets practical implementation.
        </motion.p>

        {/* Description Paragraph 1 */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-6"
        >
          While AI capabilities have advanced dramatically, the gap between
          research breakthroughs and product excellence continues to widen. The
          knowledge of how to build truly exceptional AI products remains
          concentrated within a few organizations, limiting both public
          discourse and people&apos;s ability to leverage AI effectively. To bridge
          this gap, we&apos;re building tasteIntelligence to make AI product
          development more widely understood, customizable, and impactful.
        </motion.p>

        {/* Product Taste Insight */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-6"
        >
          Look at Manus, Doubao GUI Agent, Cowork, OpenClaw — the underlying
          tech stacks behind these products have existed long before they
          shipped. This proves something crucial: in the agentic era, product
          taste matters more than research or engineering prowess alone. Taste
          is the new intelligence. We see this unfolding across IP-enabled
          toys, AI glasses, otome games, elderly companionship — vertical
          agents that actually connect with users. We need more playful,
          delightful agents.
        </motion.p>

        {/* Description Paragraph 2 */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-12"
        >
          We are researchers, engineers, and builders who believe that the
          future of AI lies not just in scaling models, but in developing the
          taste to create products that genuinely serve human needs. Our work
          spans from foundational agent architectures to user-facing
          applications, always with an eye toward what makes AI truly valuable.
        </motion.p>

        {/* Philosophy Section */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
            Research is better when shared
          </h2>
          <p className="text-base leading-relaxed text-gray-600 italic">
            Scientific progress is a collective effort. We believe that we&apos;ll
            most effectively advance the field by openly sharing our research,
            collaborating with the broader community, and building tools that
            empower others to innovate.
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div variants={itemVariants} className="pt-8 mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Our Focus Areas
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">01</span>
              <div>
                <h4 className="text-gray-900 font-medium">Foundation</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Agentic systems, RL infra, context learning, continuous learning, self-evolve,datageneration,self-evolve evaluation,environment generation
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">02</span>
              <div>
                <h4 className="text-gray-900 font-medium">Application</h4>
                <p className="text-sm text-gray-600 mt-1">
                  User experience design, product-market fit, and AI-native
                  application patterns
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">03</span>
              <div>
                <h4 className="text-gray-900 font-medium">Community</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Open research collaboration, knowledge sharing, and developer
                  empowerment
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
