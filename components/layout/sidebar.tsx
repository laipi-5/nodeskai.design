"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronRight } from "lucide-react";

const tocItems = [
  { id: "a0", label: "A 0 品牌理念与定位", level: 1, parent: null },
  { id: "a1", label: "A 1 标识 LOGO", level: 1, parent: null },
  { id: "a1-1", label: "A 1.1 标识使用规范", level: 2, parent: "a1" },
  { id: "a1-2", label: "A 1.2 英文标准标识", level: 2, parent: "a1" },
  { id: "a1-3", label: "A 1.3 墨稿与反白稿", level: 2, parent: "a1" },
  { id: "a1-4", label: "A 1.4 标识最小尺寸规范", level: 2, parent: "a1" },
  { id: "a1-5", label: "A 1.5 标识最小保护空间", level: 2, parent: "a1" },
  { id: "a1-6", label: "A 1.6 标识在社交媒体中的使用", level: 2, parent: "a1" },
  { id: "a1-7", label: "A 1.7 标识在背景上的使用", level: 2, parent: "a1" },
  { id: "a1-8", label: "A 1.8 标识错误使用示例", level: 2, parent: "a1" },
  { id: "a2", label: "A 2 色彩", level: 1, parent: null },
  { id: "a3", label: "A 3 字体", level: 1, parent: null },
  { id: "a4", label: "A 4 图形元素与图标", level: 1, parent: null },
  { id: "a5", label: "A 5 摄影与图片风格", level: 1, parent: null },
  { id: "a6", label: "A 6 语言与文案规范", level: 1, parent: null },
  { id: "a7", label: "A 7 动效规范", level: 1, parent: null },
  { id: "b", label: "B 应用规范", level: 1, parent: null },
  { id: "c1", label: "C 1 联合品牌规范", level: 1, parent: null },
  { id: "c2", label: "C 2 品牌资产管理", level: 1, parent: null },
];

const parentIds = [...new Set(tocItems.filter((i) => i.parent).map((i) => i.parent!))];

export function Sidebar() {
  const pathname = usePathname();
  const isBrandPage = pathname === "/design-system/brand";
  const [activeId, setActiveId] = useState("a0");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const isClickScrolling = useRef(false);

  const toggleExpand = useCallback((parentId: string) => {
    setExpanded((prev) => ({ ...prev, [parentId]: !prev[parentId] }));
  }, []);

  useEffect(() => {
    if (!isBrandPage) return;

    const container = document.querySelector("[data-scroll-container]") as HTMLElement | null;
    if (!container) return;

    const sectionEls = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: container,
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isBrandPage]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const container = document.querySelector("[data-scroll-container]") as HTMLElement | null;
    if (!el || !container) return;

    setActiveId(id);
    isClickScrolling.current = true;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const offset = elRect.top - containerRect.top + container.scrollTop - 24;

    container.scrollTo({ top: offset, behavior: "smooth" });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  if (!isBrandPage) return null;

  return (
    <aside className="hidden lg:flex w-56 flex-col border-r border-border-light bg-white shrink-0 overflow-y-auto">
      <div className="py-4 px-4">
        <p className="mb-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
          目录
        </p>
        <nav className="space-y-0.5">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            const hasChildren = parentIds.includes(item.id);
            const isExpanded = expanded[item.id];

            if (item.parent && !expanded[item.parent]) return null;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (hasChildren) toggleExpand(item.id);
                  scrollTo(item.id);
                }}
                className={`relative w-full text-left rounded-xl px-2 py-1.5 text-[13px] leading-snug transition-colors flex items-center gap-1 ${
                  item.level === 2 ? "pl-8" : ""
                } ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {item.level === 1 && (
                  <span className="shrink-0 w-3 flex items-center justify-center">
                    {hasChildren && (
                      <ChevronRight
                        size={12}
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    )}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
