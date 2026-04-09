import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="text-8xl font-extrabold text-foreground mb-4">404</div>
      <h1 className="text-2xl font-bold text-text-primary mb-2">
        页面未找到
      </h1>
      <p className="text-text-secondary mb-8 max-w-md">
        抱歉，你访问的页面不存在或已被移动。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-semibold rounded-full hover:opacity-90 transition-all"
      >
        返回首页
      </Link>
    </div>
  );
}
