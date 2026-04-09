import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "更新日志",
  description: "追踪 NoDesk AI 设计系统的每一次演进，了解最新的功能更新和改进。",
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
