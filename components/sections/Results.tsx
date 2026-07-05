"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";

type Metric = { value: number; prefix?: string; suffix?: string; decimals?: number };

const caseStudies: {
  industry: string;
  metric: Metric;
  unit: string;
  period: string;
  detail: string;
  tags: string[];
}[] = [
  {
    industry: "B2B SaaS",
    metric: { value: 127 },
    unit: "meetings",
    period: "in 90 days",
    detail:
      "A mid-market SaaS company came to us with zero outbound motion. We built their cold email + LinkedIn system from scratch. Within 90 days: 127 qualified meetings booked, 19 opportunities created, 6 deals closed.",
    tags: ["Cold Email", "LinkedIn", "Multi-Channel"],
  },
  {
    industry: "Staffing Agency",
    metric: { value: 4.2, suffix: "×", decimals: 1 },
    unit: "pipeline",
    period: "in 60 days",
    detail:
      "A national staffing firm needed to break into new verticals. We launched a targeted campaign to HR Directors and VPs of Operations. 4.2× increase in qualified pipeline within the first 60 days.",
    tags: ["Cold Email", "ICP Targeting"],
  },
  {
    industry: "Financial Services",
    metric: { value: 1.1, prefix: "$", suffix: "M", decimals: 1 },
    unit: "new ARR",
    period: "from 1 campaign",
    detail:
      "A wealth management RIA wanted to reach business owners with $5M+ AUM. Our direct outreach campaign generated 31 qualified meetings in 45 days — $1.1M in new assets under management within 6 months.",
    tags: ["Cold Email", "Direct Mail", "Multi-Channel"],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Results() {
  return (
    <section className="pc-section-dark pc-section-pad" id="results">
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Proven results
        </motion.p>
        <motion.h2
          className="pc-section-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          Numbers that move<br />
          <em className="pc-hero-accent">the needle.</em>
        </motion.h2>
        <motion.p
          className="pc-section-lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          We don&apos;t measure success in emails sent — we measure it in qualified meetings booked
          and revenue generated. Here&apos;s what that looks like across our client portfolio.
        </motion.p>

        <div className="pc-results-grid">
          {caseStudies.map((cs, i) => (
            <SpotlightCard
              key={cs.industry}
              className="pc-result-card"
              glow="rgba(95,178,147,0.10)"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(95,178,147,0.80)", marginBottom: 8 }}>
                {cs.industry}
              </div>
              <div className="pc-result-metric">
                <CountUp
                  value={cs.metric.value}
                  prefix={cs.metric.prefix}
                  suffix={cs.metric.suffix}
                  decimals={cs.metric.decimals}
                  duration={1.4}
                />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>{cs.unit}</span>
                <span style={{ fontSize: 13, color: "rgba(241,245,249,0.45)" }}>{cs.period}</span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(241,245,249,0.60)", lineHeight: 1.7, margin: "12px 0 16px" }}>
                {cs.detail}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11, fontWeight: 700, padding: "3px 10px",
                      borderRadius: 999, background: "rgba(30,107,82,0.12)",
                      border: "1px solid rgba(95,178,147,0.25)", color: "#5FB293",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
