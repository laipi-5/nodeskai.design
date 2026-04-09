"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Handshake,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const goals = [
  {
    icon: Handshake,
    number: "01",
    title: "建立信任",
    subtitle: "Build Human-AI Trust",
    description:
      "信任是人机协作的基石。设计必须让用户在每一次交互中感到安全和可控——AI 是可靠的助手，而非失控的代理。用户始终拥有最终决策权。",
    keyPoints: [
      "关键操作交由用户确认，AI 不擅自执行不可逆动作",
      "AI 输出始终标注置信度，坦诚不确定性",
      "提供纠错和回退机制，错误可修复",
    ],
  },
  {
    icon: Gauge,
    number: "02",
    title: "驱动效率跃迁",
    subtitle: "Drive Efficiency Leap",
    description:
      "AI 产品的核心价值在于让用户做到过去做不到的事，或以十倍速完成过去耗时的任务。设计的每一个流程都应追问：「这一步能否让 AI 代劳？」",
    keyPoints: [
      "识别并消除重复性操作，AI 自动补全和预测",
      "复杂任务拆解为可编排的 AI 工作流",
      "缩短从意图到结果的路径，减少中间步骤",
    ],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "降低认知门槛",
    subtitle: "Lower Cognitive Barrier",
    description:
      "AI 能力再强大，如果用户不知道怎么用，就等于不存在。设计应让 AI 功能的发现和使用像日常对话一样自然，不需要用户学习 prompt 工程或理解模型原理。",
    keyPoints: [
      "以自然语言为主要交互方式，辅以结构化引导",
      "智能推荐下一步操作，降低选择成本",
      "渐进式暴露复杂功能，新手和专家各取所需",
    ],
  },
  {
    icon: Sparkles,
    number: "04",
    title: "创造情感共鸣",
    subtitle: "Create Emotional Resonance",
    description:
      "AI 不应该冰冷。在保持效率的同时，通过有温度的表达、恰到好处的个性化和令人愉悦的细节，让用户感受到「这个 AI 懂我」，而不只是「这个工具能用」。",
    keyPoints: [
      "AI 的语气风格可感知且一致，而非机械模板",
      "根据用户习惯和偏好自适应交互方式",
      "在关键时刻（完成、里程碑、错误）提供有温度的反馈",
    ],
  },
  {
    icon: Brain,
    number: "05",
    title: "让 AI 可感知",
    subtitle: "Make AI Perceivable",
    description:
      "AI 不应是黑箱。用户需要理解 AI 在做什么、为什么这么做。通过可视化的推理过程、透明的决策路径和清晰的能力边界，让 AI 的智能从「不可见」变为「可感知」。",
    keyPoints: [
      "AI 状态实时可见：思考中、执行中、已完成",
      "决策依据可追溯，输出结果可解释",
      "能力边界明确告知，避免用户产生过高预期",
    ],
  },
];

export default function GoalsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h1 className="text-4xl font-bold text-text-primary">
          设计目标
        </h1>
        <p className="mt-3 text-base text-text-primary leading-relaxed">
          作为一家 AI 应用创新型公司，
          <span className="font-anton">NoDesk AI</span>{" "}
          的设计目标定义了产品体验的方向——我们希望通过设计，让 AI
          从技术能力转化为用户价值。
        </p>
      </motion.header>

      {/* North Star */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mb-24"
      >
        <div className="flex items-baseline justify-between mb-6 border-b border-border pb-4">
          <p className="text-xs font-mono tracking-widest text-text-tertiary uppercase">
            North Star Metric
          </p>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
          <span className="inline-block w-3 h-3 bg-[#FFCB00] rounded-full mr-2 align-middle" />
          从用户意图到结果获取的时间
        </p>
        <p className="mt-4 text-sm text-text-primary leading-[1.8]">
          无论是生成一份报告、完成一次协作还是做出一个决策，AI
          应当持续压缩这段距离。这是{" "}
          <span className="font-anton">NoDesk AI</span>{" "}
          「掀掉桌子」精神在产品设计中的量化体现。
        </p>
      </motion.section>

      {/* Goals — editorial grid */}
      <section className="mb-24">
        <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-text-primary">五大设计目标</h2>
          <span className="text-xs font-mono text-text-tertiary">01 — 05</span>
        </div>

        <div className="space-y-0">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <motion.article
                key={goal.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                className={`grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_14rem] gap-x-6 gap-y-1 py-10 ${
                  idx < goals.length - 1 ? "border-b border-border-light" : ""
                }`}
              >
                {/* Number column */}
                <div className="flex flex-col items-center gap-3 pt-1">
                  <span className="text-2xl font-mono font-light text-text-tertiary">
                    {goal.number}
                  </span>
                  <Icon size={18} className="text-text-tertiary" />
                </div>

                {/* Main content */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {goal.title}
                  </h3>
                  <p className="mt-4 text-sm text-text-primary leading-[1.8]">
                    {goal.description}
                  </p>
                </div>

                {/* Key points — aside column on desktop, below on mobile */}
                <div className="col-start-2 md:col-start-3 mt-4 md:mt-0 md:pt-1">
                  <p className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-3 hidden md:block">
                    Key Points
                  </p>
                  <ul className="space-y-2">
                    {goal.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-text-secondary leading-[1.8] pl-3 border-l border-border-light"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Relationship — two-column comparison, no cards */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-text-primary">
            目标与原则的关系
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-3">
              设计目标
            </h3>
            <p className="text-sm text-text-secondary leading-[1.8]">
              回答「我们要达成什么」——是产品体验的战略方向和成功标准。设计目标与公司的
              AI 业务战略直接挂钩，指引团队将技术能力转化为用户可感知的价值。
            </p>
          </div>
          <div>
            <p className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-3">
              Design Principles
            </p>
            <h3 className="text-lg font-bold text-text-primary mb-3">
              设计原则
            </h3>
            <p className="text-sm text-text-secondary leading-[1.8]">
              回答「我们怎么做到」——是日常设计决策的行为准则。当面临取舍时，设计原则帮助团队快速做出一致的判断，确保每一个交互细节都服务于更高层的设计目标。
            </p>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-border-light text-xs text-text-tertiary leading-relaxed">
          目标驱动原则，原则落地目标。例如：设计目标「让 AI
          可感知」落地到设计原则中的「清晰优先」——信息层级清晰、状态一目了然。
        </p>
      </motion.section>
    </div>
  );
}
