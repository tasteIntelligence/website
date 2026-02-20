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

export default function IntroSectionZH() {
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
          tasteIntelligence 是一个社区驱动的 AI 研究实验室，专注探索 AI 产品的方法论。
          我们连接基础 Agent 研究与实际应用创新，做既有前沿探索又能落地的事情。
        </motion.p>

        {/* Description Paragraph 1 */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-6"
        >
          AI 能力突飞猛进，但真正做出好产品的能力却没跟上。
          怎么把模型能力转化为用户真正需要的产品，这事儿的 know-how 还只掌握在少数人手里。
          我们想改变这个现状，让 AI 产品怎么做这件事更透明、更可操作。
        </motion.p>

        {/* Product Taste Insight */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-6"
        >
          看看 Manus、豆包 GUI Agent、Cowork、OpenClaw —— 这些产品背后的技术栈其实在产品出现前就已经存在了。
          这恰恰说明：在 Agentic 时代，产品品味比研究能力或工程实力更重要。品味即智能。
          我们看到这种趋势正在 IP 玩偶、AI 眼镜、乙女游戏、老人陪伴等场景中落地 —— 真正和用户产生连接的垂直 Agent。
          我们需要更好玩、更有意思的 Agent！
        </motion.p>

        {/* Description Paragraph 2 */}
        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-gray-600 mb-12"
        >
          我们是一群做研究、写代码、做产品的人，相信 AI 的下一步不只是堆算力、冲榜分数，
          而是能做出真正解决用户问题的产品。
          从底层 Agent 架构到上层用户体验，我们都在折腾。
        </motion.p>

        {/* Philosophy Section */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
            开源共享，一起搞事情
          </h2>
          <p className="text-base leading-relaxed text-gray-600 italic">
            研究这东西，藏着掖着没意思。我们相信把成果开放出来、
            和更多人一起碰撞，才能真的把这事往前推。
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div variants={itemVariants} className="pt-8 mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            我们在搞什么
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">01</span>
              <div>
                <h4 className="text-gray-900 font-medium">底层技术</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Agentic 系统、强化学习基建、上下文学习、持续学习、自我进化，数据合成
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">02</span>
              <div>
                <h4 className="text-gray-900 font-medium">产品应用</h4>
                <p className="text-sm text-gray-600 mt-1">
                  用户体验设计、产品市场契合、AI-Native 应用范式
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 font-light">03</span>
              <div>
                <h4 className="text-gray-900 font-medium">社区共建</h4>
                <p className="text-sm text-gray-600 mt-1">
                  开放研究协作、知识沉淀、开发者赋能
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
