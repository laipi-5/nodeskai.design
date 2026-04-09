"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { changelog } from "@/lib/data";

const typeLabels: Record<string, string> = {
  feature: "新功能",
  improvement: "改进",
  fix: "修复",
  breaking: "重大变更",
};

const filterOptions = [
  { value: "all", label: "全部" },
  { value: "feature", label: "新功能" },
  { value: "improvement", label: "改进" },
  { value: "fix", label: "修复" },
  { value: "breaking", label: "重大变更" },
];

export default function ChangelogPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? changelog : changelog.filter((e) => e.type === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-text-primary">
          更新日志
        </h1>
        <p className="mt-3 text-base text-text-secondary leading-relaxed">
          追踪 <span className="font-anton">NoDesk AI</span> 设计系统的每一次演进，了解最新的功能和改进。
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              filter === opt.value
                ? "bg-foreground text-white"
                : "bg-white border border-border text-text-secondary hover:text-text-primary hover:bg-surface-hover"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-light" />

        <AnimatePresence mode="popLayout">
          {filtered.map((entry, i) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-[3px] border-background bg-foreground" />

              <div className="p-6 rounded-2xl border border-border-light bg-white hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant={entry.type}>{entry.version}</Badge>
                  <Badge variant={entry.type}>
                    {typeLabels[entry.type]}
                  </Badge>
                  <span className="text-xs text-text-tertiary ml-auto">
                    {entry.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-primary">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {entry.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {entry.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
