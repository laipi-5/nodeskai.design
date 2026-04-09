"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/goals", label: "设计目标" },
  { href: "/design-system", label: "品牌设计规范" },
  { href: "/portfolio", label: "产品设计集" },
  { href: "/changelog", label: "更新日志" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(pathname !== "/");

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setShowLinks(true);
      return;
    }

    setShowLinks(false);

    const handleScroll = () => {
      const signpostSection = document.querySelector("section");
      if (!signpostSection) return;
      const rect = signpostSection.getBoundingClientRect();
      setShowLinks(rect.bottom <= 64);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center group">
          <span className="text-lg text-text-primary tracking-tight transition-colors duration-300 group-hover:text-[#FFCB00]">
            <span className="font-anton">NoDesk AI</span>
            <span className="font-sans font-bold text-text-secondary group-hover:text-[#FFCB00] transition-colors duration-300">.design</span>
          </span>
        </Link>

        <AnimatePresence>
          {showLinks && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="hidden md:flex items-center gap-1"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-text-tertiary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId={`navbar-indicator-${item.href}`}
                        className="absolute inset-0 rounded-full bg-foreground/5"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {showLinks && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-hover transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </nav>

      <AnimatePresence>
        {mobileOpen && showLinks && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border-light bg-white"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-foreground/5 text-foreground"
                        : "text-text-tertiary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
