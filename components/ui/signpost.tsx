"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SignItem {
  label: string;
  sublabel: string;
  href: string;
  bg: string;
  text: string;
  yOffset: number;
  initialRotateY: number;
}

const signs: SignItem[] = [
  {
    label: "设计目标",
    sublabel: "Design Goals →",
    href: "/goals",
    bg: "#0C0C0C",
    text: "#fff",
    yOffset: 0,
    initialRotateY: 180,
  },
  {
    label: "品牌设计规范",
    sublabel: "Brand Guidelines →",
    href: "/design-system/brand",
    bg: "#0C0C0C",
    text: "#fff",
    yOffset: 58,
    initialRotateY: 233,
  },
  {
    label: "Design Assets",
    sublabel: "设计资产 →",
    href: "/design-system/assets",
    bg: "#0C0C0C",
    text: "#fff",
    yOffset: 116,
    initialRotateY: 12,
  },
  {
    label: "设计集",
    sublabel: "Portfolio →",
    href: "/portfolio",
    bg: "#0C0C0C",
    text: "#fff",
    yOffset: 174,
    initialRotateY: 215,
  },
  {
    label: "更新日志",
    sublabel: "Changelog →",
    href: "/changelog",
    bg: "#0C0C0C",
    text: "#fff",
    yOffset: 232,
    initialRotateY: 310,
  },
];

const POLE_HEIGHT = 400;
const SIGN_W = 200;
const SIGN_H = 54;
const SIGN_SPACING = 58;
const POLE_COLOR_FRONT =
  "linear-gradient(90deg, #c8c8d0 0%, #e8e8ee 35%, #d8d8e0 65%, #b8b8c2 100%)";
const POLE_COLOR_BACK =
  "linear-gradient(90deg, #b8b8c2 0%, #d8d8e0 35%, #e8e8ee 65%, #c8c8d0 100%)";

function useSignRotations() {
  const rotations = signs.map((s) => {
    const raw = useMotionValue(s.initialRotateY);
    const spring = useSpring(raw, { stiffness: 100, damping: 18 });
    return { raw, spring };
  });
  return rotations;
}

function SignVisual({
  sign,
  index,
  rotation,
  isDragActive,
}: {
  sign: SignItem;
  index: number;
  rotation: ReturnType<typeof useSpring>;
  isDragActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.08,
        type: "spring",
        bounce: 0.25,
      }}
      className="absolute pointer-events-none"
      style={{
        left: "50%",
        top: sign.yOffset + 20,
        width: SIGN_W,
        height: SIGN_H,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative"
        style={{
          rotateY: rotation,
          transformStyle: "preserve-3d",
          transformOrigin: "0 center",
          width: SIGN_W,
          height: SIGN_H,
        }}
      >
        {/* Band ring */}
        <div
          className="absolute"
          style={{
            left: -3,
            top: "50%",
            marginTop: -4,
            width: 16,
            height: 8,
            background:
              "linear-gradient(180deg, #888 0%, #aaa 50%, #888 100%)",
            borderRadius: 2,
            transform: "translateZ(6px)",
          }}
        />

        {/* Front face */}
        <div
          className="absolute inset-0"
          style={{
            transform: "translateZ(3px)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className={`flex items-center h-full pl-2 transition-transform duration-150 origin-left ${isDragActive ? "scale-105" : ""}`}>
            <div className="relative">
              <svg
                width="190"
                height="46"
                viewBox="0 0 190 46"
                className="drop-shadow-sm"
              >
                <path
                  d="M0 5C0 2.24 2.24 0 5 0H162L186 23L162 46H5C2.24 46 0 43.76 0 41V5Z"
                  fill={isDragActive ? "#FFCB00" : sign.bg}
                  style={{ transition: isDragActive ? "fill 0.35s cubic-bezier(0.4,0,0.2,1)" : "fill 0.25s cubic-bezier(0.4,0,0.2,1)" }}
                />
                <path
                  d="M0 5C0 2.24 2.24 0 5 0H162L186 23"
                  fill="none"
                  stroke={isDragActive ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}
                  strokeWidth="1"
                  style={{ transition: "stroke 0.3s ease" }}
                />
              </svg>
              <div
                className="absolute inset-0 flex items-center pl-4 pr-10"
                style={{
                  color: isDragActive ? "#0C0C0C" : sign.text,
                  transition: isDragActive ? "color 0.35s cubic-bezier(0.4,0,0.2,1)" : "color 0.25s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div>
                  <div className="text-[13px] font-bold leading-tight tracking-tight">
                    {sign.label}
                  </div>
                  <div className="text-[10px] font-medium opacity-50 leading-tight mt-0.5">
                    {sign.sublabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back face — mirrored arrow so tip always points outward */}
        <div
          className="absolute inset-0"
          style={{
            transform: "translateZ(-3px) rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex items-center justify-end h-full pr-2">
            <div className="relative">
              <svg width="190" height="46" viewBox="0 0 190 46">
                <path
                  d="M190 5C190 2.24 187.76 0 185 0H28L4 23L28 46H185C187.76 46 190 43.76 190 41V5Z"
                  fill={isDragActive ? "#FFCB00" : sign.bg}
                  style={{ transition: isDragActive ? "fill 0.35s cubic-bezier(0.4,0,0.2,1)" : "fill 0.25s cubic-bezier(0.4,0,0.2,1)" }}
                />
                <path
                  d="M190 5C190 2.24 187.76 0 185 0H28L4 23"
                  fill="none"
                  stroke={isDragActive ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}
                  strokeWidth="1"
                  style={{ transition: "stroke 0.3s ease" }}
                />
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-end pl-10 pr-4"
                style={{
                  color: isDragActive ? "#0C0C0C" : sign.text,
                  transition: isDragActive ? "color 0.35s cubic-bezier(0.4,0,0.2,1)" : "color 0.25s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div className="text-right">
                  <div className="text-[13px] font-bold leading-tight tracking-tight">
                    {sign.label}
                  </div>
                  <div className="text-[10px] font-medium opacity-50 leading-tight mt-0.5">
                    {sign.sublabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Signpost() {
  const rotations = useSignRotations();
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dragSignIndex = useRef<number | null>(null);
  const [activeSignIndex, setActiveSignIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const baseRotation = useRef(0);
  const totalDragDelta = useRef(0);

  const getSignIndex = (clientX: number, clientY: number) => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const scaleY = rect.height / (POLE_HEIGHT + 60);
    const scaleX = rect.width / 480;
    const localX = (clientX - rect.left) / scaleX;
    const localY = (clientY - rect.top) / scaleY;
    const poleX = 240;
    const pad = 15;

    for (let i = 0; i < signs.length; i++) {
      const signTop = signs[i].yOffset + 20;
      if (localY < signTop || localY > signTop + SIGN_H) continue;

      const angle = (rotations[i].raw.get() % 360) * (Math.PI / 180);
      const reach = SIGN_W * Math.cos(angle);
      const minX = Math.min(poleX, poleX + reach) - pad;
      const maxX = Math.max(poleX, poleX + reach) + pad;

      if (localX >= minX && localX <= maxX) return i;
    }
    return null;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const idx = getSignIndex(e.clientX, e.clientY);
    if (idx === null) return;

    dragSignIndex.current = idx;
    setActiveSignIndex(idx);
    setIsDragging(true);
    totalDragDelta.current = 0;
    dragStartX.current = e.clientX;
    baseRotation.current = rotations[idx].raw.get();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragSignIndex.current !== null) {
      const dx = e.clientX - dragStartX.current;
      totalDragDelta.current = dx;
      rotations[dragSignIndex.current].raw.set(baseRotation.current + dx * 0.8);
    } else {
      const idx = getSignIndex(e.clientX, e.clientY);
      setActiveSignIndex(idx);
    }
  };

  const handlePointerUp = () => {
    const idx = dragSignIndex.current;
    if (idx !== null && Math.abs(totalDragDelta.current) <= 8) {
      router.push(signs[idx].href);
    }
    dragSignIndex.current = null;
    setActiveSignIndex(null);
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div
        ref={containerRef}
        className={`relative ${isDragging ? "cursor-grabbing" : activeSignIndex !== null ? "cursor-grab" : "cursor-default"}`}
        style={{
          perspective: "800px",
          perspectiveOrigin: "50% 35%",
          touchAction: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => { dragSignIndex.current = null; setActiveSignIndex(null); setIsDragging(false); }}
        onPointerCancel={() => { dragSignIndex.current = null; setActiveSignIndex(null); setIsDragging(false); }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            width: 480,
            height: POLE_HEIGHT + 60,
          }}
          className="relative mx-auto"
        >
          {/* Pole cap top */}
          <div
            className="absolute left-1/2 pointer-events-none"
            style={{
              top: -6,
              width: 18,
              height: 12,
              marginLeft: -9,
              background: "linear-gradient(180deg, #a0a0aa, #d0d0d8)",
              borderRadius: "4px 4px 0 0",
              transform: "translateZ(0)",
              boxShadow: "0 -2px 6px rgba(0,0,0,0.08)",
            }}
          />

          {/* Pole front */}
          <div
            className="absolute left-1/2 top-0 pointer-events-none"
            style={{
              width: 10,
              height: POLE_HEIGHT,
              marginLeft: -5,
              background: POLE_COLOR_FRONT,
              borderRadius: 3,
              transform: "translateZ(5px)",
            }}
          />
          {/* Pole back */}
          <div
            className="absolute left-1/2 top-0 pointer-events-none"
            style={{
              width: 10,
              height: POLE_HEIGHT,
              marginLeft: -5,
              background: POLE_COLOR_BACK,
              borderRadius: 3,
              transform: "translateZ(-5px)",
            }}
          />
          {/* Pole sides */}
          <div
            className="absolute left-1/2 top-0 pointer-events-none"
            style={{
              width: 10,
              height: POLE_HEIGHT,
              marginLeft: -5,
              background: "#b0b0ba",
              transform: "rotateY(90deg) translateZ(5px)",
            }}
          />
          <div
            className="absolute left-1/2 top-0 pointer-events-none"
            style={{
              width: 10,
              height: POLE_HEIGHT,
              marginLeft: -5,
              background: "#c0c0ca",
              transform: "rotateY(90deg) translateZ(-5px)",
            }}
          />

          {/* Signs - purely visual, pointer-events-none */}
          {signs.map((sign, i) => (
            <SignVisual
              key={sign.href}
              sign={sign}
              index={i}
              rotation={rotations[i].spring}
              isDragActive={activeSignIndex === i}
            />
          ))}

          {/* Hidden links for SEO/accessibility */}
          <div className="sr-only">
            {signs.map((sign) => (
              <Link key={`seo-${sign.href}`} href={sign.href}>
                {sign.label}
              </Link>
            ))}
          </div>

          {/* Pole base */}
          <div
            className="absolute left-1/2 pointer-events-none"
            style={{
              top: POLE_HEIGHT - 4,
              width: 28,
              height: 14,
              marginLeft: -14,
              background: "linear-gradient(180deg, #b0b0ba, #909098)",
              borderRadius: "0 0 6px 6px",
              transform: "translateZ(5px)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

    </div>
  );
}
