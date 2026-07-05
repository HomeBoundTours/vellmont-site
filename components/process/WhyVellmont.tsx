"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Only qualified meetings",
    body: "Every prospect is vetted before hitting your calendar. If someone doesn't meet your ICP criteria or show genuine interest, they don't become a meeting.",
  },
  {
    title: "Human-written, human-managed",
    body: "No generic AI spam. Every sequence is written by experienced SDRs and managed by a real human who handles replies, objections, and qualification personally.",
  },
  {
    title: "No long-term lock-in",
    body: "We don't do 12-month contracts that trap you. Month-to-month options are available because we earn your business with results, not paperwork.",
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

export default function WhyVellmont() {
  return (
    <section className="pc-section-pad" style={{ background: "#FCFBF6", borderTop: "1px solid rgba(21,38,63,0.10)" }}>
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Why Vellmont Consulting
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

        <motion.div
          className="pc-principles"
          style={{ margin: "48px 0 72px" }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
        >
          {principles.map((p, i) => (
            <div key={p.title} className="pc-principle">
              <span className="pc-principle-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pc-principle-title">{p.title}</h3>
              <p className="pc-principle-body">{p.body}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            overflowX: "auto",
            borderRadius: 16,
            border: "1px solid rgba(21,38,63,0.10)",
            background: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(21,38,63,0.05), 0 4px 16px rgba(21,38,63,0.06)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #DDE3EA" }}>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#6B7488", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  Feature
                </th>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 11, fontWeight: 800, color: "#18553F", letterSpacing: "0.10em", textTransform: "uppercase", background: "rgba(30,107,82,0.07)" }}>
                  Vellmont Consulting
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
                  style={{ borderBottom: i < comparison.length - 1 ? "1px solid #DDE3EA" : "none" }}
                >
                  <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 600, color: "#18202B" }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 700, color: "#18553F", background: "rgba(30,107,82,0.04)" }}>
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
