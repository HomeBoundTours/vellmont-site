"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & ICP Build",
    body: "We start with a deep-dive call to understand your offer, ideal customer profile, deal size, and sales cycle. Then we build hyper-targeted prospect lists of your exact buyers — title, company size, industry, and tech stack.",
    icon: "🎯",
  },
  {
    num: "02",
    title: "Campaign Setup & Copywriting",
    body: "Our team writes high-converting email and LinkedIn sequences tailored to your ICP's pain points. We configure your sending infrastructure, warm your domains, and get everything launch-ready in under 2 weeks.",
    icon: "✍️",
  },
  {
    num: "03",
    title: "Outreach & Follow-Up",
    body: "We launch multi-channel sequences across cold email and LinkedIn. Every reply gets a human response within hours. We handle all objections, nurture interested prospects, and qualify every lead before it reaches your calendar.",
    icon: "📤",
  },
  {
    num: "04",
    title: "Meetings Delivered & Optimized",
    body: "Qualified meetings land directly on your sales team's calendar with full context. Each week you receive a performance report. We continuously A/B test messaging and refine targeting to improve your cost-per-meeting.",
    icon: "📅",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  return (
    <section className="pc-section-mid pc-section-pad" id="how-it-works">
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          The process
        </motion.p>
        <motion.h2
          className="pc-section-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          From onboarding to<br />
          <em className="pc-hero-accent">booked meetings</em> in 30 days.
        </motion.h2>
        <motion.p
          className="pc-section-lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          Our proven four-step system takes you from zero outbound activity to a predictable
          pipeline of qualified meetings — without hiring, training, or managing an SDR team.
        </motion.p>

        <div className="pc-steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="pc-step"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.10 }}
            >
              <div style={{ fontSize: 32, marginBottom: 18 }}>{step.icon}</div>
              <div className="pc-step-num">
                <span className="pc-step-num-circle">{step.num}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1E2A44", marginBottom: 10, lineHeight: 1.25 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "#6B7488", lineHeight: 1.75, margin: 0 }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
