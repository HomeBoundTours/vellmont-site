"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
const EASE = [0.22, 1, 0.36, 1] as const;
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function Hero() {
  return (
    <section className="pc-hero" id="hero" aria-labelledby="hero-heading">
      <div className="pc-hero-overlay" aria-hidden="true" />

      <motion.div
        className="pc-hero-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <div className="pc-hero-badge">
            <span className="pc-hero-badge-dot animate-pulse-pc" aria-hidden="true" />
            B2B Consulting · Growth &amp; Operations
          </div>
        </motion.div>

        <motion.h1 id="hero-heading" variants={item} className="pc-hero-h1">
          We help B2B companies<br />
          <em className="pc-hero-accent">grow and run better.</em>
        </motion.h1>

        <motion.p variants={item} className="pc-hero-sub">
          Prestige Consulting is a B2B consulting firm. We run your outbound engine to book
          qualified meetings — then help you document SOPs and tighten operations, so your
          business grows and runs smoothly behind the scenes.
        </motion.p>

        <motion.div variants={item} className="pc-cta-row">
          <motion.a
            href="/services"
            className="pc-btn-primary"
            aria-label="Explore our consulting services"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: "none" }}
          >
            Explore Our Services →
          </motion.a>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/process" className="pc-btn-ghost" style={{ textDecoration: "none" }}>
              See How It Works
            </Link>
          </motion.div>
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
