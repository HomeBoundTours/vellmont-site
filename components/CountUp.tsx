"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  /** Final numeric value, e.g. 1200 */
  value: number;
  /** Rendered before the number, e.g. "$" */
  prefix?: string;
  /** Rendered after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Insert thousands separators */
  separator?: boolean;
  duration?: number;
  decimals?: number;
};

/** Animates a number from 0 → value once it scrolls into view. */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  separator = false,
  duration = 1.6,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setDisplay(value * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = display
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator ? "," : "");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
