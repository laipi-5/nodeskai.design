"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const THUMB_W = 46;

type Props = {
  src: string;
  documentTitle: string;
};

async function renderToCanvas(page: any, canvas: HTMLCanvasElement, targetWidth: number) {
  const baseVp = page.getViewport({ scale: 1 });
  const scale = targetWidth / baseVp.width;
  const vp = page.getViewport({ scale });
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(vp.width * dpr);
  canvas.height = Math.floor(vp.height * dpr);
  canvas.style.width = `${Math.floor(vp.width)}px`;
  canvas.style.height = `${Math.floor(vp.height)}px`;
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  await page.render({ canvasContext: ctx, viewport: vp }).promise;
}

export function PdfDocumentView({ src, documentTitle }: Props) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [mainWidth, setMainWidth] = useState(720);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading");

  const pdfDoc = useRef<any>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainCanvases = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const thumbCanvases = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const widthRef = useRef(720);
  const isScrolling = useRef(false);
  const renderedThumbs = useRef<Set<number>>(new Set());
  const renderedMains = useRef<Set<string>>(new Set());

  useEffect(() => {
    function waitForPdfjs(cb: (lib: any) => void) {
      const lib = (window as any).pdfjsLib;
      if (lib) { cb(lib); return; }
      const existing = document.querySelector('script[src="/pdfjs/pdf.min.js"]');
      if (!existing) {
        const s = document.createElement("script");
        s.src = "/pdfjs/pdf.min.js";
        document.body.appendChild(s);
      }
      const iv = setInterval(() => {
        const l = (window as any).pdfjsLib;
        if (l) { clearInterval(iv); cb(l); }
      }, 100);
      return iv;
    }

    let done = false;
    const iv = waitForPdfjs((lib) => {
      if (done) return;
      lib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";
      lib.getDocument(src).promise.then((doc: any) => {
        if (done) return;
        pdfDoc.current = doc;
        setNumPages(doc.numPages);
        setLoadState("ready");
      }).catch((e: any) => {
        if (!done) { console.error("[PDF]", e); setLoadState("error"); }
      });
    });

    return () => { done = true; if (iv) clearInterval(iv); };
  }, [src]);

  useEffect(() => {
    const node = outerRef.current;
    if (!node) return;
    const measure = () => {
      const next = Math.min(880, Math.floor(node.clientWidth - 64 - 24));
      if (Math.abs(next - widthRef.current) > 4) {
        widthRef.current = next;
        setMainWidth(next);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const doc = pdfDoc.current;
    if (!doc || numPages < 1) return;
    thumbCanvases.current.forEach((canvas, n) => {
      if (renderedThumbs.current.has(n)) return;
      renderedThumbs.current.add(n);
      doc.getPage(n).then((p: any) => renderToCanvas(p, canvas, THUMB_W));
    });
  }, [numPages]);

  useEffect(() => {
    const doc = pdfDoc.current;
    if (!doc || numPages < 1) return;
    mainCanvases.current.forEach((canvas, n) => {
      const key = `${n}-${mainWidth}`;
      if (renderedMains.current.has(key)) return;
      renderedMains.current.add(key);
      doc.getPage(n).then((p: any) => renderToCanvas(p, canvas, mainWidth));
    });
  }, [numPages, mainWidth]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || numPages < 1) return;
    const visible = new Map<number, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.pageIdx);
          if (!idx) continue;
          if (e.intersectionRatio > 0) visible.set(idx, e.intersectionRatio);
          else visible.delete(idx);
        }
        if (isScrolling.current) return;
        let best = 1, bestR = 0;
        visible.forEach((r, i) => { if (r > bestR) { bestR = r; best = i; } });
        if (bestR > 0) setPage(best);
      },
      { root: container, threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    const timer = setTimeout(() => {
      container.querySelectorAll<HTMLElement>("[data-page-idx]").forEach((el) => io.observe(el));
    }, 200);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, [numPages, mainWidth]);

  const scrollToPage = useCallback((n: number) => {
    const el = scrollRef.current?.querySelector<HTMLElement>(`[data-page-idx="${n}"]`);
    if (!el) return;
    isScrolling.current = true;
    setPage(n);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isScrolling.current = false; }, 600);
  }, []);

  const pages = numPages > 0 ? Array.from({ length: numPages }, (_, i) => i + 1) : [];

  return (
    <div className="rounded-2xl border border-border-light overflow-hidden bg-[#525659] pdf-viewer">
      <div className="flex items-center justify-between gap-3 px-3 py-2 bg-[#3e4346] text-white/90 text-sm border-b border-black/20">
        <span className="truncate font-medium">{documentTitle}</span>
        <div className="flex items-center gap-1 shrink-0">
          <button type="button" disabled={page <= 1} onClick={() => scrollToPage(Math.max(1, page - 1))} className="p-1.5 rounded-md hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronLeft size={18} />
          </button>
          <span className="tabular-nums px-1 text-xs text-white/80">{numPages > 0 ? `${page} / ${numPages}` : "—"}</span>
          <button type="button" disabled={numPages < 1 || page >= numPages} onClick={() => scrollToPage(Math.min(numPages, page + 1))} className="p-1.5 rounded-md hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={outerRef} className="flex h-[min(80vh,900px)]">
        {loadState === "loading" && <div className="flex flex-1 items-center justify-center py-24 text-white/80 text-sm">正在加载 PDF…</div>}
        {loadState === "error" && <div className="flex flex-1 items-center justify-center py-24 text-white/80 text-sm px-4 text-center">无法加载 PDF，请尝试使用上方「下载 PDF」保存到本地查看。</div>}
        {loadState === "ready" && (
          <>
            <div className="w-16 shrink-0 overflow-y-auto border-r border-black/25 bg-[#474747] py-2 pl-1 pr-0.5">
              {pages.map((n) => (
                <button key={n} type="button" onClick={() => scrollToPage(n)} className={`mb-2 w-full rounded-sm overflow-hidden border-2 transition-colors ${page === n ? "border-[#FFCB00] ring-1 ring-[#FFCB00]/50" : "border-transparent hover:border-white/20"}`}>
                  <canvas ref={(el) => { if (el) thumbCanvases.current.set(n, el); }} className="w-full bg-white block" />
                  <span className="block text-center text-[10px] leading-tight py-0.5 text-white/70 tabular-nums">{n}</span>
                </button>
              ))}
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#525659] flex flex-col items-center gap-4 p-3 min-w-0">
              {pages.map((n) => (
                <div key={n} data-page-idx={n}>
                  <canvas ref={(el) => { if (el) mainCanvases.current.set(n, el); }} className="shadow-lg bg-white block" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
