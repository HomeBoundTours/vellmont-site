"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "85+", label: "B2B Clients Served", suffix: "" },
  { num: "12", label: "Industries Covered", suffix: "+" },
  { num: "1,200+", label: "Meetings Booked", suffix: "" },
  { num: "72", label: "Avg. Show Rate", suffix: "%" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function StatsBar() {
  return (
    <section className="pc-section-dark pc-section-pad">
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          By the numbers
        </motion.p>

        <motion.div
          className="pc-stats-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="pc-stat-cell">
              <div className="pc-stat-num">
                {s.num}<span>{s.suffix}</span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(241,245,249,0.45)", fontWeight: 600, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
