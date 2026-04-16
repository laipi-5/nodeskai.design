"use client";

import { motion } from "framer-motion";
import { designTokens } from "@/lib/data";
import { ColorGroup } from "@/components/design-system/color-palette";
import {
  Check,
  X,
  Smartphone,
  Monitor,
  Globe,
  MessageCircle,
  Target,
  Users,
  Sparkles,
  Megaphone,
  Ban,
  StretchHorizontal,
  RotateCw,
  Scissors,
  Droplets,
  PaintBucket,
  Contrast,
  Camera,
  FileText,
  Handshake,
  Package,
  Briefcase,
  Share2,
  Printer,
  Play,
  Download,
  Type,
  Hexagon,
  Pen,
  Image,
} from "lucide-react";

const logoMinSizes = [
  { type: "英文标识", display: "100px", print: "20mm" },
  { type: "图标标识", display: "60px", print: "20mm" },
  { type: "组合标识", display: "80px", print: "20mm" },
];

const backgroundUsageRules = [
  {
    bg: "#FFCB00",
    label: "掀桌闪电黄背景",
    rule: "明度 0%-100% 时，使用零点暗质蓝色稿",
    allowed: true,
  },
  {
    bg: "#000E1A",
    label: "零点暗质蓝背景 (60%-100%)",
    rule: "使用掀桌闪电黄色稿",
    allowed: true,
  },
  {
    bg: "linear-gradient(135deg, rgba(0,14,26,0.5), rgba(0,14,26,0.4))",
    label: "零点暗质蓝背景 (40%-50%)",
    rule: "禁止使用品牌标识",
    allowed: false,
  },
  {
    bg: "rgba(0,14,26,0.2)",
    label: "零点暗质蓝背景 (0%-30%)",
    rule: "使用零点暗质蓝色稿",
    allowed: true,
  },
];

const typographySpecs = [
  {
    scene: "标题",
    western: "Roboto Bold",
    chinese: "思源黑体 Heavy/Bold",
    lineHeight: "120% ≤ 行间距 ≤ 200%",
  },
  {
    scene: "副标题",
    western: "Roboto Bold/Medium",
    chinese: "思源黑体 Bold/Medium",
    lineHeight: "120% ≤ 行间距 ≤ 200%",
  },
  {
    scene: "正文",
    western: "Roboto Regular",
    chinese: "思源黑体 Regular",
    lineHeight: "150% ≤ 行间距 ≤ 200%",
  },
  {
    scene: "标注",
    western: "Roboto Light",
    chinese: "思源黑体 Light",
    lineHeight: "120% ≤ 行间距 ≤ 150%",
  },
];

export default function BrandPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold text-text-primary">品牌设计规范</h1>
          <span className="px-2.5 py-1 text-xs font-medium bg-surface-alt text-text-secondary rounded-lg">
            Version 1.0
          </span>
          <span className="text-xs text-text-tertiary">2026.4</span>
        </div>
        <p className="mt-3 text-base text-text-secondary leading-relaxed">
          本规范手册呈现品牌所有的关键视觉元素，系统地阐述如何在多种不同应用形式下准确、统一地运用品牌标识、品牌色等视觉元素，以保持"NoDesk
          AI"的品牌视觉识别统一性。
        </p>
        <p className="mt-2 text-base text-text-secondary leading-relaxed">
          在遵循品牌统一性且不违背品牌视觉识别的基础上，使用者应尝试灵活运用其中的基本规则，从而衍生出更具创新性、个性化以及多元化的表达形式。
        </p>
      </div>

      {/* A0 品牌理念与定位 */}
      <motion.section
        id="a0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A0 · 品牌理念与定位
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌核心理念是所有视觉与传播行为的根基。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {[
            { icon: Target, title: "公司使命", content: "让AI 变成新质生产力服务千行百业。" },
            { icon: Sparkles, title: "公司愿景", content: "一家人和AI 共同经营的公司，以AI 作为新质生产力重塑生产关系，推动社会进步。" },
            { icon: Users, title: "目标受众", content: "追求效率的知识工作者、拥抱 AI 技术的创新团队、寻求数字化转型的企业决策者。" },
            { icon: Megaphone, title: "品牌口号", content: "「掀掉桌子，让 AI 上桌。」— 以颠覆精神和行动力为品牌核心表达。" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-2xl border border-border-light bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={22} className="text-text-secondary shrink-0" />
                  <h4 className="text-lg font-bold text-text-primary">{item.title}</h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
              </div>
            );
          })}
        </div>

        <div className="p-5 rounded-xl bg-surface-alt">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <h4 className="font-semibold text-text-primary mr-auto">品牌个性特征</h4>
            {["颠覆的", "果断的", "务实的", "前沿的", "可信赖的", "有温度的"].map((trait) => (
              <span key={trait} className="px-3 py-1.5 text-sm font-medium bg-[#FFCB00]/10 text-[#000E1A] rounded-full border border-[#FFCB00]/20">
                {trait}
              </span>
            ))}
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="font-anton">NoDesk AI</span> 的品牌个性融合了「敢于掀桌子」的颠覆基因与 AI 技术的理性务实，在专业可靠与活力创新之间取得平衡。可点击<a href="/portfolio/team-culture-2026-4" className="text-text-primary underline underline-offset-2 hover:text-[#FFCB00] transition-colors">公司团队文化</a>了解。
          </p>
        </div>
      </motion.section>

      {/* A1 标识 LOGO */}
      <motion.section
        id="a1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A1 · 标识 LOGO
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          &quot;NoDesk
          AI&quot;英文标识为核心视觉资产，品牌在传播场景应优先使用英文标识。
        </p>

        {/* A1.3 英文标准标识 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.3 英文标准标识
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border-light bg-white">
              <span className="text-xl text-[#000E1A] tracking-tight mb-3 font-anton">
                NoDesk AI
              </span>
              <span className="text-xs text-text-tertiary">原色</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border-light bg-white">
              <span className="text-xl text-[#000E1A] tracking-tight mb-3 font-anton">
                NoDesk AI
              </span>
              <span className="text-xs text-text-tertiary">浅色模式</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#000E1A]">
              <span className="text-xl text-[#FFCB00] tracking-tight mb-3 font-anton">
                NoDesk AI
              </span>
              <span className="text-xs text-[#FFCB00]/60">深色模式</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-surface-alt">
            <p className="text-sm text-text-secondary leading-relaxed">
              浅色/深色模式主要应用于公司网站标识、线上/线下海报、周边物料、机场广告等场景，
              <span className="font-medium text-text-primary">
                优先使用浅色模式
              </span>
              。不设置中文标识："没有桌子"中文名称主要用于小红书、微信、微博、boss直聘、地图、书面文件等渠道。
            </p>
          </div>
        </div>

        {/* A1.3.1 标识应用频率 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-6">
            标识应用频率
          </h3>

          <div className="p-6 rounded-2xl border border-border-light bg-white mb-6">
            <p className="text-xs text-text-tertiary mb-3 font-medium">2. 标识应用频率</p>
            {/* Proportion bar */}
            <div className="mb-6">
              <img src="/brand/proportion-bar.svg" alt="标识应用频率" className="w-full rounded-full" />
            </div>

            {/* Logo variants visual - widths match proportion bar above */}
            <div className="flex items-center">
              {/* 50% - 浅色标识 */}
              <div className="flex flex-col items-center px-1" style={{ width: "50%" }}>
                <div className="aspect-square rounded-2xl bg-[#FFCB00] flex items-center justify-center overflow-hidden w-full max-w-[180px]">
                  <img src="/brand/logo-light.svg" alt="浅色标识" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">浅色标识 50%</span>
              </div>

              {/* 25% - 标准标识 */}
              <div className="flex flex-col items-center px-1" style={{ width: "25%" }}>
                <div className="aspect-square rounded-2xl bg-white border border-border-light flex items-center justify-center overflow-hidden w-full max-w-[130px]">
                  <img src="/brand/logo-standard.svg" alt="标准标识" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">标准标识 25%</span>
              </div>

              {/* 15% - 暗色标识 */}
              <div className="flex flex-col items-center px-1" style={{ width: "15%" }}>
                <div className="aspect-square rounded-2xl bg-[#000E1A] flex items-center justify-center overflow-hidden w-full max-w-[100px]">
                  <img src="/brand/logo-dark.svg" alt="暗色标识" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">暗色标识 15%</span>
              </div>

              {/* 5% + 3% + 2% */}
              <div className="flex flex-col items-end gap-6 ml-auto">
                {[
                  { src: "/brand/logo-text.svg", alt: "纯文字", label: "纯文字 5%" },
                  { src: "/brand/logo-ink.svg", alt: "墨稿", label: "图标加文字 3%" },
                  { src: "/brand/logo-reverse.svg", alt: "反白稿", label: "图标加文字* 2%" },
                ].map((item) => (
                  <div key={item.alt} className="flex flex-col items-center">
                    <div className="rounded-lg bg-white border border-border-light overflow-hidden" style={{ width: "120px" }}>
                      <img src={item.src} alt={item.alt} className="w-full h-auto" />
                    </div>
                    <span className="text-[10px] text-text-tertiary mt-1.5 text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-border-light bg-white">
            <p className="text-xs text-text-tertiary mb-3 font-medium">3. 图标及应用频率</p>
            {/* Icon proportion bar */}
            <div className="flex h-7 rounded-full overflow-hidden mb-6 bg-[#FFCB00]/20">
              <div className="bg-[#FFCB00]/30 flex items-center justify-center border-r-2 border-[#FFCB00]" style={{ width: "80%" }}>
                <span className="text-[10px] font-medium text-[#000E1A]">80%</span>
              </div>
              <div className="bg-[#FFCB00]/30 flex items-center justify-center border-r-2 border-[#FFCB00]" style={{ width: "10%" }}>
                <span className="text-[10px] font-medium text-[#000E1A]">10%</span>
              </div>
              <div className="bg-[#FFCB00]/30 flex items-center justify-center" style={{ width: "10%" }}>
                <span className="text-[10px] font-medium text-[#000E1A]">10%</span>
              </div>
            </div>

            {/* Icon variants visual - aligned with proportion bar */}
            <div className="flex items-end">
              {/* 80% - 品牌图标 */}
              <div className="flex flex-col items-center px-1" style={{ width: "80%" }}>
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img src="/brand/icon-brand.svg" alt="品牌图标" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">主图标 80%</span>
              </div>

              {/* 10% - 线框图标 */}
              <div className="flex flex-col items-center px-1" style={{ width: "10%" }}>
                <div className="w-14 h-14 rounded-2xl bg-white border border-border-light flex items-center justify-center overflow-hidden p-2">
                  <img src="/brand/icon-outline.svg" alt="线框图标" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">线框图标 10%</span>
              </div>

              {/* 10% - 暗色图标 */}
              <div className="flex flex-col items-center px-1" style={{ width: "10%" }}>
                <div className="w-14 h-14 rounded-2xl overflow-hidden">
                  <img src="/brand/icon-dark.svg" alt="暗色图标" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] text-text-tertiary mt-1.5 text-center">暗色图标 10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* A1.4 墨稿与反白稿 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.4 墨稿与反白稿
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            在品牌传播中受条件制约不能使用标识彩色稿时，使用墨稿与反白稿来保证标识统一准确传播。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border-light bg-white overflow-hidden">
              <img src="/brand/logo-ink-full.svg" alt="墨稿" className="w-full h-auto" />
              <span className="text-xs text-text-tertiary pb-4">墨稿</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-black overflow-hidden">
              <img src="/brand/logo-reverse-full.svg" alt="反白稿" className="w-full h-auto" />
              <span className="text-xs text-white/50 pb-4">反白稿</span>
            </div>
          </div>
        </div>

        {/* A1.5 标识最小尺寸规范 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.5 标识最小尺寸规范
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            为保证品牌在对外传播过程中达到更好的效果，设定标识最小显示及印刷尺寸。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                    标识类型
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                    最小显示尺寸
                  </th>
                  <th className="text-left py-3 font-semibold text-text-primary">
                    最小打印尺寸
                  </th>
                </tr>
              </thead>
              <tbody>
                {logoMinSizes.map((item) => (
                  <tr key={item.type} className="border-b border-border-light">
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {item.type}
                    </td>
                    <td className="py-3 pr-4 font-mono text-text-secondary">
                      {item.display}
                    </td>
                    <td className="py-3 font-mono text-text-secondary">
                      {item.print}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* A1.6 标识最小保护空间 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.6 标识最小保护空间
          </h3>
          <div className="p-5 rounded-xl bg-surface-alt">
            <p className="text-sm text-text-secondary leading-relaxed">
              标识四周的不可侵犯区域内不得出现文字及图像，保证品牌识别性。保护空间为标识高度的
              <span className="font-mono font-medium text-text-primary">
                {" "}
                0.225x{" "}
              </span>
              （水平）和
              <span className="font-mono font-medium text-text-primary">
                {" "}
                y{" "}
              </span>
              （垂直）。
            </p>
          </div>
        </div>

        {/* A1.7 标识在社交媒体中的使用 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.7 标识在社交媒体中的使用
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            品牌标识在社交媒体的使用中，为保证企业形象的准确传播，在实际制作和使用时应严格遵循。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Globe, label: "网站" },
              { icon: MessageCircle, label: "微信/微博" },
              { icon: Smartphone, label: "小红书" },
              { icon: Monitor, label: "Boss直聘" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border-light bg-white"
                >
                  <Icon size={20} className="text-text-secondary" />
                  <span className="text-xs text-text-secondary">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* A1.8 标识在背景上的使用 */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A1.8 标识在背景上的使用
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            标识在背景上应清晰可见并规范使用品牌标准色彩。
          </p>
          <div className="space-y-3">
            {backgroundUsageRules.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-border-light bg-white"
              >
                <div
                  className="shrink-0 h-10 w-10 rounded-lg"
                  style={{ background: item.bg }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary">
                    {item.label}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {item.rule}
                  </p>
                </div>
                {item.allowed ? (
                  <Check size={18} className="shrink-0 text-green-500" />
                ) : (
                  <X size={18} className="shrink-0 text-red-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* A1.9 标识错误使用示例 */}
      <motion.section
        id="a1-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-16"
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          A1.9 标识错误使用示例
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          以下为品牌标识的禁止做法，任何场景下均不得出现以下变形或误用。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: StretchHorizontal, label: "禁止拉伸变形", desc: "不得改变标识的宽高比例" },
            { icon: RotateCw, label: "禁止旋转", desc: "标识必须水平放置" },
            { icon: PaintBucket, label: "禁止更改颜色", desc: "仅使用品牌规定的标准色" },
            { icon: Droplets, label: "禁止添加投影", desc: "不得为标识添加阴影或发光" },
            { icon: Pen, label: "禁止描边/渐变", desc: "不得为标识添加描边或渐变" },
            { icon: Scissors, label: "禁止裁切", desc: "标识必须完整展示" },
            { icon: Image, label: "禁止添加纹理", desc: "标识内不得填充图案或纹理" },
            { icon: Contrast, label: "禁止低对比", desc: "标识与背景须保持足够对比度" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-red-100 bg-red-50/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Ban size={14} className="text-red-400" />
                  <Icon size={16} className="text-red-400" />
                </div>
                <p className="text-xs font-medium text-text-primary">
                  {item.label}
                </p>
                <p className="text-xs text-text-tertiary mt-0.5">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* A2 色彩 */}
      <motion.section
        id="a2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A2 · 色彩
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌标准色运用在所有视觉传达设计的媒体上，通过色彩特有的知觉刺激与心理反应，表达企业的经营理念和精神。
        </p>

        {/* A2.1 品牌标准色彩 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A2.1 品牌标准色彩
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl border border-border-light flex flex-col justify-end" style={{ backgroundColor: "#FFCB00", minHeight: "282px" }}>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-[#000E1A]">掀桌闪电黄</h4>
                  <span className="text-sm font-bold text-[#000E1A]">应用占比 80%</span>
                </div>
                <p className="text-xs text-[#000E1A]/60 leading-relaxed">
                  致敬「敢于掀桌子」的颠覆精神，闪电象征决策速度
                </p>
                <div className="space-y-1 text-xs font-mono text-[#000E1A]/70">
                  <p>
                    Hex: <span className="text-[#000E1A]">#FFCB00</span>
                  </p>
                  <p>
                    RGB:{" "}
                    <span className="text-[#000E1A]">
                      rgba(255, 203, 0, 100%)
                    </span>
                  </p>
                  <p>
                    CMYK:{" "}
                    <span className="text-[#000E1A]">
                      C4.02 M25.84 Y88.84 K0
                    </span>
                  </p>
                  <p>
                    PANTONE: <span className="text-[#000E1A]">7548U</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#000E1A] flex flex-col justify-end" style={{ backgroundColor: "#000E1A", minHeight: "282px" }}>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white">零点暗质蓝</h4>
                  <span className="text-sm font-bold text-[#FFCB00]">应用占比 20%</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  融合「0day全球化」概念，暗物质象征AI的不可见生产力
                </p>
                <div className="space-y-1 text-xs font-mono text-white/60">
                  <p>
                    Hex: <span className="text-white">#000E1A</span>
                  </p>
                  <p>
                    RGB:{" "}
                    <span className="text-white">
                      rgba(0, 14, 26, 100%)
                    </span>
                  </p>
                  <p>
                    CMYK:{" "}
                    <span className="text-white">
                      C97.81 M90.37 Y74.83 K67.58
                    </span>
                  </p>
                  <p>
                    PANTONE: <span className="text-white">532C</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* A2.2 品牌辅助色（不透明度变体） */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A2.2 品牌辅助色（不透明度变体）
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            辅助品牌标准色塑造独特的品牌形象，通过不同不透明度创造丰富的层次。
          </p>
          <ColorGroup
            title="辅助色彩（不透明度变体）"
            colors={designTokens.colors.auxiliary}
          />
        </div>

        {/* A2.3 次级辅助色彩 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A2.3 次级辅助色彩
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            次级辅助色彩为辅助品牌标准色塑造独特的品牌形象而确定的色彩系统。
          </p>
          <div className="space-y-6">
            <ColorGroup colors={designTokens.colors.secondary.filter(c => c.variable.includes('purple'))} />
            <ColorGroup colors={designTokens.colors.secondary.filter(c => c.variable.includes('blue'))} />
            <ColorGroup colors={designTokens.colors.secondary.filter(c => c.variable.includes('green'))} />
            <ColorGroup colors={designTokens.colors.secondary.filter(c => c.variable.includes('red'))} />
            <ColorGroup colors={designTokens.colors.secondary.filter(c => c.variable.includes('orange'))} />
          </div>
        </div>

        {/* A2.4 色彩搭配与无障碍规则 */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A2.4 色彩搭配与无障碍规则
          </h3>

          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-surface-alt">
              <h4 className="font-semibold text-text-primary mb-3">推荐搭配</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { fg: "#000E1A", bg: "#FFCB00", label: "零点暗质蓝文字 + 掀桌闪电黄背景", ratio: "14.5:1" },
                  { fg: "#FFCB00", bg: "#000E1A", label: "掀桌闪电黄文字 + 零点暗质蓝背景", ratio: "14.5:1" },
                  { fg: "#000E1A", bg: "#FFFFFF", label: "零点暗质蓝文字 + 白色背景", ratio: "18.9:1" },
                  { fg: "#FFFFFF", bg: "#000E1A", label: "白色文字 + 零点暗质蓝背景", ratio: "18.9:1" },
                ].map((combo) => (
                  <div
                    key={combo.label}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border-light bg-white"
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ color: combo.fg, backgroundColor: combo.bg, border: combo.bg === "#FFFFFF" ? "1px solid #E5E7EB" : "none" }}
                    >
                      Aa
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-primary truncate">{combo.label}</p>
                      <p className="text-xs text-text-tertiary font-mono">对比度 {combo.ratio} · WCAG AAA</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-red-100 bg-red-50/30">
              <h4 className="font-semibold text-text-primary mb-3">禁止搭配</h4>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><X size={14} className="text-red-400 shrink-0" /> 掀桌闪电黄上不得使用白色文字（对比度仅 1.3:1）</li>
                <li className="flex items-center gap-2"><X size={14} className="text-red-400 shrink-0" /> 品牌色不得与高饱和度彩色（如纯红、纯绿）直接搭配</li>
                <li className="flex items-center gap-2"><X size={14} className="text-red-400 shrink-0" /> 次级辅助色的浅色变体不得作为文字颜色（对比度不足）</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-surface-alt">
              <h4 className="font-semibold text-text-primary mb-3">渐变规范</h4>
              <p className="text-sm text-text-secondary mb-3">
                品牌允许在特定场景中使用渐变，须遵循以下规则：
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li>• 渐变仅限品牌标准色与辅助色之间的过渡</li>
                <li>• 渐变方向限定为 0°（上→下）、90°（左→右）、135°（左上→右下）</li>
                <li>• 渐变背景上的标识须确保全区域对比度达标</li>
                <li>• 禁止在标识本身上使用渐变效果</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-surface-alt">
              <h4 className="font-semibold text-text-primary mb-3">无障碍性要求</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-text-primary">元素</th>
                      <th className="text-left py-2 pr-4 font-semibold text-text-primary">最低对比度</th>
                      <th className="text-left py-2 font-semibold text-text-primary">标准</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="py-2 pr-4 text-text-primary">正文文本</td>
                      <td className="py-2 pr-4 font-mono text-text-secondary">≥ 4.5:1</td>
                      <td className="py-2 text-text-secondary">WCAG 2.1 AA</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 pr-4 text-text-primary">大号文本（≥18px Bold）</td>
                      <td className="py-2 pr-4 font-mono text-text-secondary">≥ 3:1</td>
                      <td className="py-2 text-text-secondary">WCAG 2.1 AA</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="py-2 pr-4 text-text-primary">UI 组件/图标</td>
                      <td className="py-2 pr-4 font-mono text-text-secondary">≥ 3:1</td>
                      <td className="py-2 text-text-secondary">WCAG 2.1 AA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* A3 字体 */}
      <motion.section
        id="a3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A3 · 字体
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌字体规范确保文字内容的一致性和易读性。
        </p>

        {/* A3.1 中西字体 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A3.1 中西字体
          </h3>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-border-light bg-white">
              <h4 className="font-semibold text-text-primary mb-1">
                西文字体 · Roboto
              </h4>
              <p className="text-xs text-text-tertiary mb-4">Light / Regular / Bold</p>
              <div className="space-y-3">
                <p className="text-2xl font-light text-text-primary" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
                <p className="text-2xl font-normal text-text-primary" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
                <p className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border-light bg-white">
              <h4 className="font-semibold text-text-primary mb-1">
                数字字体 · D-DIN-PRO
              </h4>
              <p className="text-xs text-text-tertiary mb-4">
                Regular / Medium / Bold
              </p>
              <div className="space-y-3">
                <p className="text-3xl font-normal text-text-primary" style={{ fontFamily: '"D-DIN-PRO", "DIN Pro", "DIN", ui-monospace, monospace' }}>
                  1 2 3 4 5 6 7 8 9 0
                </p>
                <p className="text-3xl font-medium text-text-primary" style={{ fontFamily: '"D-DIN-PRO", "DIN Pro", "DIN", ui-monospace, monospace' }}>
                  1 2 3 4 5 6 7 8 9 0
                </p>
                <p className="text-3xl font-bold text-text-primary" style={{ fontFamily: '"D-DIN-PRO", "DIN Pro", "DIN", ui-monospace, monospace' }}>
                  1 2 3 4 5 6 7 8 9 0
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border-light bg-white">
              <h4 className="font-semibold text-text-primary mb-1">
                中文字体 · 思源黑体
              </h4>
              <p className="text-xs text-text-tertiary mb-4">
                Light / Regular / Medium / Bold / Heavy
              </p>
              <div className="space-y-3">
                <p className="text-lg font-light text-text-primary">
                  我们是一家人和AI共同经营的公司。掀掉桌子，让AI上桌。
                </p>
                <p className="text-lg font-normal text-text-primary">
                  我们是一家人和AI共同经营的公司。掀掉桌子，让AI上桌。
                </p>
                <p className="text-lg font-medium text-text-primary">
                  我们是一家人和AI共同经营的公司。掀掉桌子，让AI上桌。
                </p>
                <p className="text-lg font-bold text-text-primary">
                  我们是一家人和AI共同经营的公司。掀掉桌子，让AI上桌。
                </p>
                <p className="text-lg font-black text-text-primary">
                  我们是一家人和AI共同经营的公司。掀掉桌子，让AI上桌。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* A3.2 字体使用场景规范 */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A3.2 字体使用场景规范
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            在书面表达过程中，文字编辑要遵循以下规范标准，以保证文字内容的易读性。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                    场景
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                    英文字体
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-text-primary">
                    中文字体
                  </th>
                  <th className="text-left py-3 font-semibold text-text-primary">
                    行间距
                  </th>
                </tr>
              </thead>
              <tbody>
                {typographySpecs.map((spec) => (
                  <tr key={spec.scene} className="border-b border-border-light">
                    <td className="py-3 pr-4 font-medium text-text-primary">
                      {spec.scene}
                    </td>
                    <td className="py-3 pr-4 text-text-secondary">
                      {spec.western}
                    </td>
                    <td className="py-3 pr-4 text-text-secondary">
                      {spec.chinese}
                    </td>
                    <td className="py-3 font-mono text-xs text-text-secondary">
                      {spec.lineHeight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* A4 图形元素与图标风格 */}
      <motion.section
        id="a4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A4 · 图形元素与图标风格
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌辅助图形和图标系统构建统一的视觉语言。
        </p>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A4.1 图标绘制规范
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-border-light bg-white">
              <h4 className="font-semibold text-text-primary mb-3">绘制参数</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-text-secondary">线条粗细</span><span className="font-mono text-text-primary">1.5px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">端点样式</span><span className="font-mono text-text-primary">Round Cap</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">拐角样式</span><span className="font-mono text-text-primary">Round Join</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">图标网格</span><span className="font-mono text-text-primary">24 × 24px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">安全边距</span><span className="font-mono text-text-primary">2px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">圆角半径</span><span className="font-mono text-text-primary">依据视觉平衡</span></div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-border-light bg-white">
              <h4 className="font-semibold text-text-primary mb-3">尺寸规范</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-text-secondary">小图标（行内）</span><span className="font-mono text-text-primary">16px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">默认图标</span><span className="font-mono text-text-primary">20px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">标准图标</span><span className="font-mono text-text-primary">24px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">大图标（导航）</span><span className="font-mono text-text-primary">28px</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">超大图标（展示）</span><span className="font-mono text-text-primary">32px</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A4.2 品牌辅助图形
          </h3>
          <div className="p-5 rounded-xl bg-surface-alt">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              品牌辅助图形从「闪电」与「掀桌」的核心隐喻中提取，用于增强品牌识别。
            </p>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• <span className="font-medium text-text-primary">折线/闪电纹</span> — 源自品牌「闪电」意象，用于分割线、装饰条</li>
              <li>• <span className="font-medium text-text-primary">倾斜几何色块</span> — 15° 倾斜角度，呼应「掀桌」动态感</li>
              <li>• <span className="font-medium text-text-primary">网格点阵</span> — 象征 AI 的数据结构，用于背景纹理</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A4.3 插图风格
          </h3>
          <div className="p-5 rounded-xl bg-surface-alt">
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• 采用扁平化几何风格或像素风格，线条简洁利落</li>
              <li>• 色彩范围限定为品牌标准色与辅助色</li>
              <li>• 人物形象以抽象几何表达，不使用写实风格</li>

            </ul>
          </div>
        </div>
      </motion.section>

      {/* A5 摄影/图片风格 */}
      <motion.section
        id="a5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A5 · 摄影与图片风格
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌摄影风格指南，确保图片素材传达一致的品牌调性。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Camera, title: "风格基调", items: ["明亮通透，自然光线", "色温偏暖（呼应闪电黄）", "简洁干净的构图", "主体突出，背景克制"] },
            { icon: Users, title: "人物摄影", items: ["真实自然的工作场景", "展现人与技术的协作", "多元化团队面貌", "避免过度摆拍"] },
            { icon: Ban, title: "图片禁忌", items: ["不使用过度滤镜处理", "不使用低分辨率素材", "不使用与品牌调性冲突的暗沉色调", "不使用含争议性内容的素材"] },
          ].map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="p-5 rounded-2xl border border-border-light bg-white">
                <Icon size={20} className="text-text-secondary mb-3" />
                <h4 className="font-semibold text-text-primary mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary">• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="p-5 rounded-xl bg-surface-alt">
          <h4 className="font-semibold text-text-primary mb-2">图片处理规范</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div><span className="text-text-tertiary block text-xs">裁切比例</span><span className="text-text-primary font-mono">16:9 / 4:3 / 1:1</span></div>
            <div><span className="text-text-tertiary block text-xs">最低分辨率</span><span className="text-text-primary font-mono">72dpi（屏幕）</span></div>
            <div><span className="text-text-tertiary block text-xs">印刷分辨率</span><span className="text-text-primary font-mono">300dpi</span></div>
            <div><span className="text-text-tertiary block text-xs">叠加处理</span><span className="text-text-primary font-mono">品牌色遮罩 ≤ 30%</span></div>
          </div>
        </div>
      </motion.section>

      {/* A6 语言与文案规范 */}
      <motion.section
        id="a6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A6 · 语言与文案规范
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌语调和文案规范确保对外传播的一致性和专业性。
        </p>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A6.1 品牌语调
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "专业而不刻板", desc: "用通俗语言解释专业概念" },
              { label: "自信而不傲慢", desc: "传递实力，保持谦逊" },
              { label: "活泼而不轻浮", desc: "适度幽默，不失分寸" },
              { label: "简洁而不单薄", desc: "精炼表达，内容充实" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl border border-border-light bg-white">
                <p className="text-sm font-medium text-text-primary">{item.label}</p>
                <p className="text-xs text-text-tertiary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A6.2 中英文混排规则
          </h3>
          <div className="p-5 rounded-xl bg-surface-alt space-y-2 text-sm text-text-secondary">
            <p>• 中文与英文/数字之间须加一个半角空格：<span className="text-text-primary"><span className="font-anton">NoDesk AI</span> 是一家</span></p>
            <p>• 品牌名「<span className="font-anton">NoDesk AI</span>」始终使用英文原名，首字母大写</p>
            <p>• 中文标点使用全角，英文内容使用半角标点</p>
            <p>• 专有名词首次出现时标注英文：<span className="font-mono text-text-primary">设计变量（Design Token）</span></p>
            <p>• 数字统一使用半角阿拉伯数字，单位与数字之间加空格</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A6.3 产品命名与术语
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-text-primary">术语</th>
                  <th className="text-left py-2 pr-4 font-semibold text-text-primary">规范写法</th>
                  <th className="text-left py-2 font-semibold text-text-primary">说明</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { term: "品牌名", standard: "NoDesk AI", note: "英文场景下的标准名称" },
                  { term: "中文名", standard: "没有桌子", note: "限中文社交媒体和搜索场景" },
                  { term: "子产品", standard: "NoDesk AI [产品名]", note: "子产品统一以品牌名为前缀" },
                  { term: "AI 相关", standard: "AI（大写）", note: "不使用 Ai / ai / A.I." },
                ].map((row) => (
                  <tr key={row.term} className="border-b border-border-light">
                    <td className="py-2 pr-4 text-text-primary">{row.term}</td>
                    <td className={`py-2 pr-4 font-medium text-text-primary ${row.standard.includes("NoDesk") ? "font-anton" : "font-mono"}`}>{row.standard}</td>
                    <td className="py-2 text-text-secondary">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* A7 动效规范 */}
      <motion.section
        id="a7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          A7 · 动效规范
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌动效语言定义动画的节奏和调性，与品牌「快速决策」的精神一致。
        </p>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A7.1 动效参数
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-text-primary">类型</th>
                  <th className="text-left py-2 pr-4 font-semibold text-text-primary">时长</th>
                  <th className="text-left py-2 pr-4 font-semibold text-text-primary">缓动函数</th>
                  <th className="text-left py-2 font-semibold text-text-primary">适用场景</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "微交互", duration: "100-150ms", easing: "ease-out", usage: "按钮状态、悬停反馈" },
                  { type: "标准过渡", duration: "250-300ms", easing: "ease-in-out", usage: "展开折叠、菜单、切换" },
                  { type: "页面转场", duration: "400-500ms", easing: "spring(1, 80, 10)", usage: "路由切换、模态框" },
                  { type: "品牌展示", duration: "600-800ms", easing: "spring(1, 60, 8)", usage: "Hero 动画、Logo 动画" },
                ].map((row) => (
                  <tr key={row.type} className="border-b border-border-light">
                    <td className="py-2 pr-4 font-medium text-text-primary">{row.type}</td>
                    <td className="py-2 pr-4 font-mono text-text-secondary">{row.duration}</td>
                    <td className="py-2 pr-4 font-mono text-xs text-text-secondary">{row.easing}</td>
                    <td className="py-2 text-text-secondary">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            A7.2 Logo 动画规范
          </h3>
          <div className="p-5 rounded-xl bg-surface-alt space-y-1.5 text-sm text-text-secondary">
            <p>• Logo 入场动画时长不超过 1.2 秒，含缓入缓出</p>
            <p>• 加载状态可使用 Logo 图标的脉冲动画（opacity 0.3↔1.0）</p>
            <p>• 禁止为 Logo 添加弹跳、抖动等夸张动效</p>
            <p>• 视频片头 Logo 动画须搭配品牌标准色背景</p>
          </div>
        </div>
      </motion.section>

      {/* B 应用规范 */}
      <motion.section
        id="b"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          B · 应用规范
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌标识在各类物料中的标准化应用。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Briefcase,
              title: "办公商务物料",
              items: ["名片", "信纸 / 信封", "工作证 / 胸卡", "邮件签名模板", "PPT / Keynote 模板", "合同 / 文件头"],
            },
            {
              icon: Share2,
              title: "线上数字物料",
              items: ["社交媒体头像 / 封面", "网站 / App 品牌元素", "电子海报模板", "视频片头 / 片尾标版", "邮件营销模板", "广告投放素材"],
            },
            {
              icon: Printer,
              title: "线下实体物料",
              items: ["文化衫 / 周边", "马克杯 / 贴纸", "海报 / 展架 / 易拉宝", "机场广告", "办公空间导视", "活动背景板"],
            },
          ].map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="p-5 rounded-2xl border border-border-light bg-white">
                <Icon size={20} className="text-text-secondary mb-3" />
                <h4 className="font-semibold text-text-primary mb-2">{category.title}</h4>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary">• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-5 rounded-xl bg-[#FFCB00]/10 border border-[#FFCB00]/20">
          <p className="text-sm text-text-secondary">
            <span className="font-medium text-text-primary">注意：</span>B 应用部分的详细设计模板正在制作中，各物料的标准文件将在后续版本中补充。制作物料时请严格遵循 A1-A3 中的标识、色彩和字体规范。
          </p>
        </div>
      </motion.section>

      {/* 联合品牌规范 */}
      <motion.section
        id="c1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          C1 · 联合品牌规范
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          与合作伙伴联合展示时的品牌使用规则。
        </p>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-border-light bg-white">
            <div className="flex items-center gap-2 mb-3">
              <Handshake size={18} className="text-text-secondary" />
              <h4 className="font-semibold text-text-primary">Logo 并列规则</h4>
            </div>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• <span className="font-anton">NoDesk AI</span> Logo 与合作方 Logo 等高显示，间距不小于单个 Logo 宽度的 50%</li>
              <li>• 双方 Logo 之间以竖线「|」或「×」分隔</li>
              <li>• <span className="font-anton">NoDesk AI</span> 作为主办方时 Logo 置于左侧/上方</li>
              <li>• 作为协办/赞助方时 Logo 置于右侧/下方</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-surface-alt">
            <h4 className="font-semibold text-text-primary mb-2">赞助场景</h4>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• 赞助活动中 Logo 最小显示尺寸不低于 100px</li>
              <li>• 禁止将 <span className="font-anton">NoDesk AI</span> Logo 与竞品 Logo 并列展示</li>
              <li>• 联名产品需经品牌部门审批后方可使用</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 品牌资产管理 */}
      <motion.section
        id="c2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          C2 · 品牌资产管理
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          品牌文件的获取方式、格式规范与版本管理。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl border border-border-light bg-white">
            <div className="flex items-center gap-2 mb-3">
              <Download size={18} className="text-text-secondary" />
              <h4 className="font-semibold text-text-primary">文件格式</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">矢量源文件</span><span className="font-mono text-text-primary">.ai / .svg</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">位图文件</span><span className="font-mono text-text-primary">.png（透明底）</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">印刷文件</span><span className="font-mono text-text-primary">.eps / .pdf</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">动态格式</span><span className="font-mono text-text-primary">.json（Lottie）</span></div>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-border-light bg-white">
            <div className="flex items-center gap-2 mb-3">
              <Type size={18} className="text-text-secondary" />
              <h4 className="font-semibold text-text-primary">字体授权</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Roboto</span><span className="text-text-primary">Apache 2.0（免费）</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">D-DIN-PRO</span><span className="text-text-primary">商业授权（已购买）</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">思源黑体</span><span className="text-text-primary">SIL OFL（免费）</span></div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-surface-alt">
          <h4 className="font-semibold text-text-primary mb-2">版本管理</h4>
          <div className="space-y-1.5 text-sm text-text-secondary">
            <p>• 当前版本：<span className="font-mono font-medium text-text-primary">Version 1.0</span>（2026 年 4 月）</p>
            <p>• 品牌规范由设计团队统一维护，更新周期为季度</p>
            <p>• 重大变更需经品牌委员会审批，并在更新日志中记录</p>
            <p>• 所有品牌资产通过统一的品牌资源库分发，禁止使用过期版本</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
