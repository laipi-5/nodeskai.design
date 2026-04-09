import { Sidebar } from "@/components/layout/sidebar";

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <Sidebar />
      <div className="flex-1 overflow-y-auto" data-scroll-container>
        <div className="mx-auto max-w-5xl px-6 py-12">{children}</div>
      </div>
    </div>
  );
}
