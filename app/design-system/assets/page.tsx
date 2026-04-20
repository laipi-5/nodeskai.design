"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Component } from "lucide-react";
import { designTokens } from "@/lib/data";
import { ColorGroup } from "@/components/design-system/color-palette";
import {
  SpacingPreview,
  RadiusPreview,
  ShadowPreview,
  TypographyPreview,
} from "@/components/design-system/token-preview";
import {
  ButtonPreview,
  InputPreview,
  CardPreview,
  SelectPreview,
  BadgePreview,
  IconButtonPreview,
} from "@/components/design-system/component-preview";

const tabs = [
  { id: "tokens", label: "Design Tokens", icon: Palette },
  { id: "components", label: "组件库", icon: Component },
];

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState("tokens");

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-text-primary">Design Assets</h1>
        <p className="mt-3 text-lg text-text-secondary leading-relaxed">
          设计资产集合——从底层变量到上层组件，构建一致体验的完整工具箱。
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 p-1 bg-surface-alt rounded-xl mb-10 max-w-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                active ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="assets-tab"
                  className="absolute inset-0 bg-surface rounded-xl shadow-sm"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <Icon size={16} className="relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {activeTab === "tokens" ? (
          <motion.div
            key="tokens"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <TokensContent />
          </motion.div>
        ) : (
          <motion.div
            key="components"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ComponentsContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TokensContent() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-2">颜色</h2>
        <p className="text-sm text-text-tertiary mb-6">点击色块可复制色值</p>
        <div className="space-y-10">
          <ColorGroup title="品牌标准色" colors={designTokens.colors.brand} />
          <ColorGroup title="品牌辅助色" colors={designTokens.colors.auxiliary} />
          <ColorGroup title="次级辅助色" colors={designTokens.colors.secondary} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-6">字体排版</h2>
        <TypographyPreview typography={designTokens.typography} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-6">间距</h2>
        <SpacingPreview spacing={designTokens.spacing} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-6">圆角</h2>
        <RadiusPreview radii={designTokens.radii} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-6">阴影</h2>
        <ShadowPreview shadows={designTokens.shadows} />
      </section>
    </div>
  );
}

function ComponentsContent() {
  return (
    <div className="space-y-8">
      <ButtonPreview />
      <InputPreview />
      <SelectPreview />
      <CardPreview />
      <BadgePreview />
      <IconButtonPreview />
    </div>
  );
}
