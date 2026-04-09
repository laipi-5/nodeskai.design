"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Zap,
  Heart,
  Shield,
  Smartphone,
  Monitor,
  Accessibility,
  MousePointer,
} from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "清晰优先",
    description:
      "信息层级清晰，内容一目了然。减少认知负担，让用户快速找到所需。避免装饰性元素干扰核心信息。",
  },
  {
    icon: Zap,
    title: "高效流畅",
    description:
      "减少操作步骤，优化交互路径。利用合理的默认值和智能推荐，让用户以最少的操作完成目标。",
  },
  {
    icon: Heart,
    title: "愉悦体验",
    description:
      "通过精心设计的微交互和动效，为用户带来愉悦感。在不影响效率的前提下，增添趣味性和个性化。",
  },
  {
    icon: Shield,
    title: "可信赖",
    description:
      "提供一致的反馈和可预期的行为。错误处理优雅，操作可撤销，让用户始终有掌控感。",
  },
];

const accessibilityItems = [
  {
    title: "颜色对比度",
    description: "所有文本与背景的对比度符合 WCAG 2.1 AA 标准（正文 ≥ 4.5:1，大号文本 ≥ 3:1）",
  },
  {
    title: "键盘导航",
    description: "所有交互元素可通过 Tab 键访问，焦点指示器清晰可见",
  },
  {
    title: "屏幕阅读器",
    description: "合理使用 ARIA 属性，确保辅助技术能准确传达界面信息",
  },
  {
    title: "触摸目标",
    description: "交互元素最小触摸区域为 44×44px，按钮间距不小于 8px",
  },
];

const breakpoints = [
  { name: "Mobile", icon: Smartphone, range: "< 640px", cols: "1 列" },
  { name: "Tablet", icon: Smartphone, range: "640 - 1024px", cols: "2 列" },
  { name: "Desktop", icon: Monitor, range: "1024 - 1440px", cols: "3-4 列" },
  { name: "Wide", icon: Monitor, range: "> 1440px", cols: "4+ 列" },
];

const motionGuidelines = [
  {
    name: "快速过渡",
    duration: "150ms",
    usage: "按钮状态、颜色变化",
    easing: "ease-out",
  },
  {
    name: "标准过渡",
    duration: "300ms",
    usage: "展开/折叠、菜单打开",
    easing: "ease-in-out",
  },
  {
    name: "复杂动画",
    duration: "500ms",
    usage: "页面转场、模态框",
    easing: "spring(1, 80, 10)",
  },
  {
    name: "强调动画",
    duration: "800ms",
    usage: "Hero 动画、引导",
    easing: "spring(1, 60, 8)",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function GuidelinesPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary">设计原则</h1>
        <p className="mt-3 text-base text-text-secondary leading-relaxed">
          指导设计决策的核心原则和最佳实践，确保产品体验的一致性和高品质。
        </p>
      </div>

      {/* Core Principles */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-6">核心原则</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-border-light bg-white hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Accessibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <Accessibility size={24} className="text-text-primary" />
          <h2 className="text-2xl font-bold text-text-primary">可访问性</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {accessibilityItems.map((a) => (
            <motion.div
              key={a.title}
              variants={item}
              className="p-5 rounded-xl border border-border-light bg-white"
            >
              <h4 className="font-semibold text-text-primary">{a.title}</h4>
              <p className="mt-1 text-sm text-text-secondary">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Responsive */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          响应式设计
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {breakpoints.map((bp) => {
            const Icon = bp.icon;
            return (
              <div
                key={bp.name}
                className="p-5 rounded-xl border border-border-light bg-white text-center"
              >
                <Icon size={24} className="mx-auto text-text-primary mb-3" />
                <h4 className="font-semibold text-text-primary text-sm">
                  {bp.name}
                </h4>
                <p className="text-xs text-text-tertiary font-mono mt-1">
                  {bp.range}
                </p>
                <p className="text-xs text-text-secondary mt-2">{bp.cols}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Motion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <MousePointer size={24} className="text-text-primary" />
          <h2 className="text-2xl font-bold text-text-primary">动效规范</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                  类型
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                  时长
                </th>
                <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                  缓动函数
                </th>
                <th className="text-left py-3 font-semibold text-text-primary">
                  适用场景
                </th>
              </tr>
            </thead>
            <tbody>
              {motionGuidelines.map((m) => (
                <tr key={m.name} className="border-b border-border-light">
                  <td className="py-3 pr-4 font-medium text-text-primary">
                    {m.name}
                  </td>
                  <td className="py-3 pr-4 font-mono text-text-secondary">
                    {m.duration}
                  </td>
                  <td className="py-3 pr-4 font-mono text-text-secondary text-xs">
                    {m.easing}
                  </td>
                  <td className="py-3 text-text-secondary">{m.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
}
