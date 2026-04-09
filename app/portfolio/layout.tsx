import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品设计集",
  description: "探索 NoDesk AI 设计团队的代表性产品设计项目，从策略到执行的完整设计案例。",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
