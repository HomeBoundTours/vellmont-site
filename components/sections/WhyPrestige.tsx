"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    icon: "⚡",
    title: "Live in under 2 weeks",
    body: "Most agencies take 6–8 weeks to get started. We're running campaigns within 10–14 days of signing — because your pipeline can't wait.",
  },
  {
    icon: "🎯",
    title: "We only book qualified meetings",
    body: "Every prospect is vetted before hitting your calendar. If someone doesn't meet your ICP criteria or show genuine interest, they don't become a meeting.",
  },
  {
    icon: "💬",
    title: "Human-written, human-managed",
    body: "No generic AI spam. Every sequence is written by experienced SDRs and managed by a real human who handles replies, objections, and qualification personally.",
  },
  {
    icon: "📊",
    title: "Full transparency & reporting",
    body: "Weekly reports show you exactly what was sent, who replied, what was said, and what meetings were booked. No black box — you see everything.",
  },
  {
    icon: "🔄",
    title: "Continuous optimization",
    body: "We A/B test subject lines, messaging angles, and CTAs every week. What's working gets scaled; what isn't gets cut. Your cost-per-meeting drops over time.",
  },
  {
    icon: "🤝",
    title: "No long-term lock-in",
    body: "We don't do 12-month contracts that trap you. Month-to-month options are available because we believe in earning your business with results, not paperwork.",
  },
];

const comparison = [
  { feature: "Time to first meeting", prestige: "~30 days", inhouse: "90–180 days", agency: "45–90 days" },
  { feature: "Monthly cost", prestige: "Fixed retainer", inhouse: "$8–12K/mo (salary + benefits)", agency: "Varies + high margins" },
  { feature: "Infrastructure setup", prestige: "Included", inhouse: "You build it", agency: "Often excluded" },
  { feature: "Copywriting", prestige: "Included", inhouse: "You manage it", agency: "Extra cost" },
  { feature: "Reply management", prestige: "Full service", inhouse: "SDR handles it", agency: "Often self-serve" },
  { feature: "Reporting", prestige: "Weekly, detailed", inhouse: "Depends on rep", agency: "Monthly summaries" },
  { feature: "Flexibility", prestige: "Month-to-month", inhouse: "Annual salary commitment", agency: "6–12 month contracts" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyPrestige() {
  return (
    <section className="pc-section-mid pc-section-pad">
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Why Prestige Consulting
        </motion.p>
        <motion.h2
          className="pc-section-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          Built different.<br />
          <em className="pc-hero-accent">Results first.</em>
        </motion.h2>
        <motion.p
          className="pc-section-lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          We built this company because we were frustrated by agencies that overpromised and
          underdelivered. Every decision we make — from how we write copy to how we report results —
          is designed around one thing: meetings that actually close.
        </motion.p>

        {/* Differentiator grid */}
        <div
          style={{
            display: "grid", gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            marginBottom: 80,
          }}
        >
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D4",
                borderRadius: 16,
                padding: "26px 22px",
                boxShadow: "0 1px 3px rgba(31,56,100,0.05), 0 4px 16px rgba(31,56,100,0.06)",
              }}
            >
              <div style={{ fontSize: 26, marginBottom: 14 }}>{d.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1E2A44", marginBottom: 8, letterSpacing: "-0.01em" }}>
                {d.title}
              </h3>
              <p style={{ fontSize: 14, color: "#6B7488", lineHeight: 1.75, margin: 0 }}>
                {d.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            overflowX: "auto",
            borderRadius: 16,
            border: "1px solid #E7E1D4",
            background: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(31,56,100,0.05), 0 4px 16px rgba(31,56,100,0.06)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #E7E1D4" }}>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#6B7488", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  Feature
                </th>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 800, color: "#9A7A12", letterSpacing: "0.10em", textTransform: "uppercase", background: "rgba(201,162,39,0.07)" }}>
                  Prestige Consulting
                </th>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#6B7488", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  In-House SDR
                </th>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#6B7488", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  Other Agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{ borderBottom: i < comparison.length - 1 ? "1px solid #E7E1D4" : "none" }}
                >
                  <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 600, color: "#1E2A44" }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 700, color: "#9A7A12", background: "rgba(201,162,39,0.04)" }}>
                    {row.prestige}
                  </td>
                  <td style={{ padding: "14px 20px", fontSize: 14, color: "#6B7488" }}>
                    {row.inhouse}
                  </td>
                  <td style={{ padding: "14px 20px", fontSize: 14, color: "#6B7488" }}>
                    {row.agency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
