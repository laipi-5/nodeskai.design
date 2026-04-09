"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface ColorSwatchProps {
  name: string;
  value: string;
  variable: string;
  description?: string;
}

export function ColorSwatch({ name, value, variable, description }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border-light bg-surface hover:shadow-md transition-shadow text-left"
    >
      <div
        className="h-20 w-full"
        style={{ backgroundColor: value }}
      />
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-text-primary">
            {name}
          </span>
          {copied ? (
            <Check size={14} className="text-accent-green" />
          ) : (
            <Copy
              size={14}
              className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
            />
          )}
        </div>
        <p className="text-xs text-text-tertiary font-mono">{value}</p>
        <p className="text-xs text-text-tertiary font-mono">{variable}</p>
        {description && (
          <p className="text-xs text-text-tertiary">{description}</p>
        )}
      </div>
    </motion.button>
  );
}

interface ColorGroupProps {
  title?: string;
  colors: ColorSwatchProps[];
}

export function ColorGroup({ title, colors }: ColorGroupProps) {
  return (
    <div>
      {title && <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {colors.map((color) => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </div>
    </div>
  );
}
