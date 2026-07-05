"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
const EASE = [0.22, 1, 0.36, 1] as const;
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

const line1 = ["We", "help", "B2B", "companies"];
const line2 = ["grow", "and", "run", "better."];

const headline = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const word = {
  hidden: { opacity: 0, y: "0.55em" },
  show: { opacity: 1, y: "0em", transition: { duration: 0.65, ease: EASE } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax: content drifts up and fades as the hero scrolls out.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  return (
    <section className="pc-hero pc-grain" id="hero" aria-labelledby="hero-heading" ref={ref}>
      <div className="pc-aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="pc-hero-overlay" aria-hidden="true" />

      <motion.div
        className="pc-hero-center"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y, opacity }}
      >
        <motion.div variants={item}>
          <div className="pc-hero-badge">
            <span className="pc-hero-badge-dot animate-pulse-pc" aria-hidden="true" />
            B2B Consulting · Growth &amp; Operations
          </div>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={headline}
          className="pc-hero-h1"
          aria-label="We help B2B companies grow and run better."
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

        <motion.p variants={item} className="pc-hero-sub">
          Vellmont Consulting is a B2B consulting firm. We run your outbound engine to book
          qualified meetings — then help you document SOPs and tighten operations, so your
          business grows and runs smoothly behind the scenes.
        </motion.p>

        <motion.div variants={item} className="pc-cta-row">
          <Magnetic strength={0.25}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="/connect"
                className="pc-btn-primary"
                aria-label="Connect with us now"
                style={{ textDecoration: "none" }}
              >
                Connect With Us Now →
              </Link>
            </motion.div>
          </Magnetic>
          <Magnetic strength={0.25}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link href="/process" className="pc-btn-ghost" style={{ textDecoration: "none" }}>
                See How It Works
              </Link>
            </motion.div>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="pc-hero-chips" role="list" aria-label="Key benefits">
          {[
            "No long-term contracts",
            "Senior-level attention",
            "Done-with-you delivery",
          ].map((text) => (
            <div key={text} className="pc-hero-chip" role="listitem">
              <span className="pc-hero-chip-dot" aria-hidden="true" />
              {text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
