"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, Search, Bell, Heart } from "lucide-react";

function PreviewWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border-light overflow-hidden">
      <div className="px-4 py-3 bg-surface-alt border-b border-border-light">
        <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
      </div>
      <div className="p-6 bg-white">{children}</div>
    </div>
  );
}

export function ButtonPreview() {
  return (
    <PreviewWrapper title="Button 按钮">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
            变体
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-foreground text-white text-sm font-semibold rounded-full hover:opacity-90 transition-all">
              Primary
            </button>
            <button className="px-5 py-2.5 bg-white border border-border text-text-primary text-sm font-semibold rounded-full hover:bg-surface-hover transition-all">
              Secondary
            </button>
            <button className="px-5 py-2.5 text-text-primary text-sm font-semibold rounded-full hover:bg-surface-alt transition-all">
              Ghost
            </button>
            <button className="px-5 py-2.5 bg-foreground/80 text-white text-sm font-semibold rounded-full hover:bg-foreground transition-all">
              Danger
            </button>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
            尺寸
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-3 py-1.5 bg-foreground text-white text-xs font-semibold rounded-full">
              Small
            </button>
            <button className="px-5 py-2.5 bg-foreground text-white text-sm font-semibold rounded-full">
              Medium
            </button>
            <button className="px-7 py-3 bg-foreground text-white text-base font-semibold rounded-full">
              Large
            </button>
          </div>
        </div>
      </div>
    </PreviewWrapper>
  );
}

export function InputPreview() {
  return (
    <PreviewWrapper title="Input 输入框">
      <div className="space-y-4 max-w-sm">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            用户名
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="请输入用户名"
              className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-xl outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            搜索
          </label>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
            />
            <input
              type="text"
              placeholder="搜索..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-border rounded-xl outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
            />
          </div>
        </div>
      </div>
    </PreviewWrapper>
  );
}

export function CardPreview() {
  return (
    <PreviewWrapper title="Card 卡片">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border-light p-5 hover:shadow-md transition-shadow">
          <div className="h-24 rounded-xl bg-surface-alt mb-4" />
          <h5 className="font-semibold text-text-primary text-sm">
            卡片标题
          </h5>
          <p className="mt-1 text-xs text-text-secondary">
            这是卡片的描述文本，简洁明了。
          </p>
        </div>
        <div className="rounded-2xl border border-border-light p-5 hover:shadow-md transition-shadow">
          <div className="h-24 rounded-xl bg-surface-alt mb-4" />
          <h5 className="font-semibold text-text-primary text-sm">
            卡片标题
          </h5>
          <p className="mt-1 text-xs text-text-secondary">
            这是卡片的描述文本，简洁明了。
          </p>
        </div>
      </div>
    </PreviewWrapper>
  );
}

export function SelectPreview() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("选择一个选项");
  const options = ["选项一", "选项二", "选项三"];

  return (
    <PreviewWrapper title="Select 选择器">
      <div className="max-w-sm relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2.5 text-sm bg-white border border-border rounded-xl hover:border-foreground/30 transition-colors"
        >
          <span
            className={
              selected === "选择一个选项"
                ? "text-text-tertiary"
                : "text-text-primary"
            }
          >
            {selected}
          </span>
          <ChevronDown
            size={16}
            className={`text-text-tertiary transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-10"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-text-primary hover:bg-surface-hover transition-colors"
              >
                {opt}
                {selected === opt && (
                  <Check size={14} className="text-foreground" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </PreviewWrapper>
  );
}

export function BadgePreview() {
  return (
    <PreviewWrapper title="Badge 标签">
      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-foreground/8 text-text-primary text-xs font-semibold rounded-full">
          默认
        </span>
        <span className="px-3 py-1 bg-foreground/8 text-text-primary text-xs font-semibold rounded-full">
          成功
        </span>
        <span className="px-3 py-1 bg-foreground/8 text-text-primary text-xs font-semibold rounded-full">
          警告
        </span>
        <span className="px-3 py-1 bg-foreground/8 text-text-primary text-xs font-semibold rounded-full">
          错误
        </span>
        <span className="px-3 py-1 bg-foreground/8 text-text-primary text-xs font-semibold rounded-full">
          信息
        </span>
      </div>
    </PreviewWrapper>
  );
}

export function IconButtonPreview() {
  return (
    <PreviewWrapper title="IconButton 图标按钮">
      <div className="flex flex-wrap items-center gap-3">
        <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-foreground text-white hover:opacity-90 transition-all">
          <Bell size={18} />
        </button>
        <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-border text-text-primary hover:bg-surface-hover transition-all">
          <Search size={18} />
        </button>
        <button className="h-10 w-10 flex items-center justify-center rounded-xl text-text-primary hover:bg-surface-alt transition-all">
          <Heart size={18} />
        </button>
        <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-surface-alt text-text-primary hover:bg-border-light transition-all">
          <Check size={18} />
        </button>
      </div>
    </PreviewWrapper>
  );
}
