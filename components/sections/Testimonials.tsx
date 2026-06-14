"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Within the first 45 days we had 14 qualified meetings on the calendar. Prestige Consulting completely transformed our outbound. I stopped worrying about top-of-funnel entirely.",
    name: "Marcus T.",
    title: "VP of Sales, B2B SaaS",
    initials: "MT",
  },
  {
    quote:
      "We tried building an in-house SDR team for two years and burned through budget. Prestige had us booking meetings in under a month at a fraction of the cost.",
    name: "Sarah K.",
    title: "Founder, Staffing Agency",
    initials: "SK",
  },
  {
    quote:
      "The quality of the meetings is what surprised me most. These aren't tire-kickers — they're actual decision-makers who already understand what we do before the call.",
    name: "David R.",
    title: "CEO, Financial Services Firm",
    initials: "DR",
  },
  {
    quote:
      "Our close rate jumped because we were no longer wasting time on unqualified prospects. Prestige Consulting filters everything before it hits our calendar.",
    name: "Jennifer L.",
    title: "Director of Business Development",
    initials: "JL",
  },
  {
    quote:
      "I was skeptical about outsourcing outreach but the results spoke for themselves. 9 meetings in the first month, 3 closed in 90 days. ROI was instant.",
    name: "Carlos M.",
    title: "Owner, IT Managed Services",
    initials: "CM",
  },
  {
    quote:
      "The team at Prestige Consulting acts like an extension of our own sales org. The copy, the targeting, the follow-up — all dialed in from day one.",
    name: "Rachel W.",
    title: "Head of Growth, MarTech Company",
    initials: "RW",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Testimonials({ limit }: { limit?: number }) {
  const visible = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="pc-section-light pc-section-pad">
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
        <motion.h2
          className="pc-section-h2 pc-section-h2-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          Real meetings.<br />Real revenue.
        </motion.h2>
        <motion.p
          className="pc-section-lead pc-section-lead-dark"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          Our clients don&apos;t just get more meetings — they get better meetings with buyers who
          are already pre-qualified before they hit your calendar.
        </motion.p>

        <div className="pc-testimonial-grid">
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              className="pc-testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <div className="pc-stars">★★★★★</div>
              <p className="pc-quote">{t.quote}</p>
              <div className="pc-reviewer">
                <div className="pc-reviewer-avatar">{t.initials}</div>
                <div>
                  <div className="pc-reviewer-name">{t.name}</div>
                  <div className="pc-reviewer-title">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
