"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const tocItems = [
  { id: "a0", label: "A0 品牌理念与定位", level: 1 },
  { id: "a1", label: "A1 标识 LOGO", level: 1 },
  { id: "a1-8", label: "A1.8 错误使用示例", level: 2 },
  { id: "a2", label: "A2 色彩", level: 1 },
  { id: "a3", label: "A3 字体", level: 1 },
  { id: "a4", label: "A4 图形元素与图标", level: 1 },
  { id: "a5", label: "A5 摄影与图片风格", level: 1 },
  { id: "a6", label: "A6 语言与文案规范", level: 1 },
  { id: "a7", label: "A7 动效规范", level: 1 },
  { id: "b", label: "B 应用规范", level: 1 },
  { id: "c1", label: "C1 联合品牌规范", level: 1 },
  { id: "c2", label: "C2 品牌资产管理", level: 1 },
];

export function Sidebar() {
  const pathname = usePathname();
  const isBrandPage = pathname === "/design-system/brand";
  const [activeId, setActiveId] = useState("a0");
  const isClickScrolling = useRef(false);

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
      <div className="py-4 px-10">
        <p className="px-2 mb-3 text-xs font-semibold text-text-tertiary uppercase tracking-wider">
          目录
        </p>
        <nav className="space-y-0.5">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative w-full text-left rounded-lg px-2 py-1.5 text-[13px] leading-snug transition-colors ${
                  item.level === 2 ? "pl-5" : ""
                } ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
