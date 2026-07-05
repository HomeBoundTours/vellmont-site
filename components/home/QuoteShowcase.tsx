"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const quotes = [
  {
    quote:
      "Within the first 45 days we had 14 qualified meetings on the calendar. Vellmont Consulting completely transformed our outbound. I stopped worrying about top-of-funnel entirely.",
    name: "Marcus T.",
    title: "VP of Sales, B2B SaaS",
  },
  {
    quote:
      "We tried building an in-house SDR team for two years and burned through budget. Vellmont had us booking meetings in under a month at a fraction of the cost.",
    name: "Sarah K.",
    title: "Founder, Staffing Agency",
  },
  {
    quote:
      "The quality of the meetings is what surprised me most. These aren't tire-kickers — they're actual decision-makers who already understand what we do before the call.",
    name: "David R.",
    title: "CEO, Financial Services Firm",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const ROTATE_MS = 7000;

export default function QuoteShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const active = quotes[index];

  return (
    <section
      className="pc-section-pad"
      style={{ background: "#F7F5EF" }}
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Client results
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <div className="pc-qs-mark" aria-hidden="true">&ldquo;</div>

          <div style={{ minHeight: 280, position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
                style={{ margin: 0 }}
              >
                <blockquote className="pc-qs-quote" style={{ margin: "22px 0 34px" }}>
                  {active.quote}
                </blockquote>
                <figcaption>
                  <div className="pc-qs-author">{active.name}</div>
                  <div className="pc-qs-role">{active.title}</div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="pc-qs-nav" role="tablist" aria-label="Choose testimonial">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                className="pc-qs-dot"
                role="tab"
                aria-current={i === index}
                aria-label={`Testimonial ${i + 1} — ${q.name}`}
                onClick={() => setIndex(i)}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
