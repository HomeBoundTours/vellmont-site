"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import CountUp from "@/components/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const headline = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: "0em", transition: { duration: 0.6, ease: EASE } },
};

const line1 = ["Growth,", "engineered."];
const line2 = ["Operations,", "refined."];

const stats = [
  { value: 85, suffix: "+", separator: false, label: "B2B Clients Served" },
  { value: 1200, suffix: "+", separator: true, label: "Meetings Booked" },
  { value: 72, suffix: "%", separator: false, label: "Avg. Show Rate" },
  { value: 12, suffix: "+", separator: false, label: "Industries Covered" },
];

export default function EditorialHero() {
  return (
    <section className="pc-edh" id="hero" aria-labelledby="hero-heading">
      <div className="pc-container" style={{ position: "relative" }}>
        <div className="pc-edh-badge" aria-hidden="true">
          <svg viewBox="0 0 132 132">
            <defs>
              <path
                id="pc-badge-circle"
                d="M66,66 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0"
                fill="none"
              />
            </defs>
            <circle cx="66" cy="66" r="64" fill="none" stroke="rgba(194,163,107,0.45)" strokeWidth="1" />
            <text>
              <textPath href="#pc-badge-circle">
                VELLMONT CONSULTING · GROWTH · OPERATIONS ·
              </textPath>
            </text>
          </svg>
          <span className="pc-edh-badge-center">V</span>
        </div>

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="pc-eyebrow">
            B2B Growth &amp; Operations Consulting
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={headline}
            className="pc-edh-h1"
            aria-label="Growth, engineered. Operations, refined."
          >
            <span aria-hidden="true">
              {line1.map((w, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={word}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {w}
                  {i < line1.length - 1 ? " " : ""}
                </motion.span>
              ))}
              <br />
              <em className="pc-hero-accent">
                {line2.map((w, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={word}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {w}
                    {i < line2.length - 1 ? " " : ""}
                  </motion.span>
                ))}
              </em>
            </span>
          </motion.h1>

          <motion.p variants={item} className="pc-edh-sub">
            Vellmont Consulting runs your outbound engine to book qualified meetings —
            then documents the SOPs and systems that keep your business running smoothly
            behind the scenes.
          </motion.p>

          <motion.div variants={item} className="pc-cta-row" style={{ justifyContent: "flex-start", marginBottom: 0 }}>
            <Magnetic strength={0.25}>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/connect"
                  className="pc-btn-primary"
                  aria-label="Book a discovery call"
                  style={{ textDecoration: "none" }}
                >
                  Book a Discovery Call →
                </Link>
              </motion.div>
            </Magnetic>
            <Link href="/process" className="pc-edh-link">
              See how it works
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="pc-edh-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="pc-edh-stat">
              <div className="pc-edh-stat-num">
                <CountUp value={s.value} suffix={s.suffix} separator={s.separator} duration={1.8} />
              </div>
              <div className="pc-edh-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
