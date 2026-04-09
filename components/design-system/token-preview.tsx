"use client";

import { motion } from "framer-motion";

interface SpacingPreviewProps {
  spacing: { name: string; value: string }[];
}

export function SpacingPreview({ spacing }: SpacingPreviewProps) {
  return (
    <div className="space-y-3">
      {spacing.map((s) => (
        <div key={s.name} className="flex items-center gap-4">
          <span className="w-12 text-right text-sm font-mono text-text-tertiary">
            {s.name}
          </span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: s.value }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-6 rounded-md bg-foreground"
            style={{ minWidth: s.value }}
          />
          <span className="text-sm text-text-secondary font-mono">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}

interface RadiusPreviewProps {
  radii: { name: string; value: string; variable: string }[];
}

export function RadiusPreview({ radii }: RadiusPreviewProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 bg-foreground"
            style={{ borderRadius: r.value }}
          />
          <div className="text-center">
            <span className="block text-sm font-semibold text-text-primary">
              {r.name}
            </span>
            <span className="text-xs text-text-tertiary font-mono">
              {r.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

interface ShadowPreviewProps {
  shadows: { name: string; value: string; variable: string }[];
}

export function ShadowPreview({ shadows }: ShadowPreviewProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {shadows.map((s) => (
        <div key={s.name} className="flex flex-col items-center gap-3">
          <div
            className="w-24 h-24 bg-white rounded-xl"
            style={{ boxShadow: s.value }}
          />
          <div className="text-center">
            <span className="block text-sm font-semibold text-text-primary">
              {s.name}
            </span>
            <span className="text-xs text-text-tertiary font-mono break-all">
              {s.variable}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

interface TypographyPreviewProps {
  typography: {
    name: string;
    size: string;
    weight: string;
    lineHeight: string;
  }[];
}

export function TypographyPreview({ typography }: TypographyPreviewProps) {
  return (
    <div className="space-y-6">
      {typography.map((t) => (
        <div
          key={t.name}
          className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-6 border-b border-border-light last:border-0"
        >
          <div className="w-32 shrink-0">
            <span className="text-sm font-semibold text-text-primary">
              {t.name}
            </span>
            <p className="text-xs text-text-tertiary font-mono">
              {t.size} / {t.weight}
            </p>
          </div>
          <p
            className="text-text-primary"
            style={{
              fontSize: t.size,
              fontWeight: Number(t.weight),
              lineHeight: t.lineHeight,
            }}
          >
            设计创造价值
          </p>
        </div>
      ))}
    </div>
  );
}
