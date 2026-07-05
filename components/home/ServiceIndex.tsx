"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cold Email Outreach",
    desc: "Full infrastructure, verified lists, and human-managed replies that land meetings — not spam folders.",
  },
  {
    title: "LinkedIn Outreach",
    desc: "Sales Navigator targeting and personalized sequences that get responses from real decision-makers.",
  },
  {
    title: "Multi-Channel Campaigns",
    desc: "Email, LinkedIn, and direct mail coordinated for touchpoints that compound into replies.",
  },
  {
    title: "SDR as a Service",
    desc: "A dedicated appointment setter on your account — fully managed, zero hiring overhead.",
  },
  {
    title: "SOPs & Process Documentation",
    desc: "How your business actually runs, captured in step-by-step docs your team will use.",
  },
  {
    title: "Operations Consulting",
    desc: "Bottlenecks found, workflows tightened, and simple systems installed — ready to scale.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceIndex() {
  return (
    <section className="pc-section-dark pc-section-pad" id="services" style={{ background: "#0F1C30" }}>
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          What we offer
        </motion.p>
        <motion.h2
          className="pc-section-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          Six disciplines.<br />
          <em className="pc-hero-accent">One standard.</em>
        </motion.h2>
        <motion.p
          className="pc-section-lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          We fill your calendar with qualified meetings — and put the SOPs and systems in
          place so everything behind the scenes runs as well as the front of house.
        </motion.p>

        <div className="pc-si-list">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
            >
              <Link href="/services" className="pc-si-row" aria-label={`${s.title} — view services`}>
                <span className="pc-si-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pc-si-main">
                  <span className="pc-si-title">{s.title}</span>
                  <span className="pc-si-desc">{s.desc}</span>
                </span>
                <span className="pc-si-arrow" aria-hidden="true">↗</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
