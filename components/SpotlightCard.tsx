"use client";

import { useRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type SpotlightCardProps = HTMLMotionProps<"div"> & {
  /** Spotlight tint, defaults to emerald. */
  glow?: string;
};

/**
 * Card that tracks the cursor and reveals a soft radial glow under it.
 * Sets CSS custom props --mx / --my consumed by `.pc-spotlight::before`.
 */
export default function SpotlightCard({
  glow = "rgba(30,107,82,0.16)",
  className = "",
  children,
  style,
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`pc-spotlight ${className}`}
      style={{ ["--spot" as string]: glow, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
