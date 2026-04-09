import Link from "next/link";

const footerLinks = {
  设计规范: [
    { href: "/design-system/goals", label: "设计目标" },
    { href: "/design-system/brand", label: "品牌设计规范" },
    { href: "/design-system/assets", label: "Design Assets" },
  ],
  产品: [
    { href: "/portfolio", label: "产品设计集" },
    { href: "/changelog", label: "更新日志" },
  ],
  资源: [
    { href: "#", label: "Figma 资源" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "NPM 包" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-lg text-white tracking-tight">
                <span className="font-anton">NoDesk AI</span>
                <span className="text-white/50 font-sans font-bold">.design</span>
              </span>
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex justify-end">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} <span className="font-anton">NoDesk AI</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
