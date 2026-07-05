"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import Icon, { type IconName } from "@/components/Icon";

const steps: { num: string; title: string; body: string; icon: IconName }[] = [
  {
    num: "01",
    title: "Discovery & ICP Build",
    body: "A deep-dive call to understand your offer, ideal customer profile, deal size, and sales cycle. Then we build hyper-targeted prospect lists of your exact buyers — title, company size, industry, and tech stack.",
    icon: "search",
  },
  {
    num: "02",
    title: "Campaign Setup & Copywriting",
    body: "Our team writes high-converting email and LinkedIn sequences tailored to your ICP's pain points. We configure your sending infrastructure, warm your domains, and get everything launch-ready in under 2 weeks.",
    icon: "pen",
  },
  {
    num: "03",
    title: "Outreach & Follow-Up",
    body: "Multi-channel sequences launch across cold email and LinkedIn. Every reply gets a human response within hours — objections handled, interested prospects nurtured, every lead qualified before it reaches your calendar.",
    icon: "send",
  },
  {
    num: "04",
    title: "Meetings Delivered & Optimized",
    body: "Qualified meetings land directly on your sales team's calendar with full context. Weekly performance reports, continuous A/B testing, and targeting refinements keep improving your cost-per-meeting.",
    icon: "calendar-check",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The gold-to-emerald line draws downward as the timeline scrolls through view.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <section className="pc-section-pad" style={{ background: "#F7F5EF" }} id="how-it-works">
      <div className="pc-container">
        <div className="pc-tl" ref={ref}>
          <div className="pc-tl-line" aria-hidden="true" />
          <motion.div
            className="pc-tl-progress"
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="pc-tl-step"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.05 }}
            >
              <span className="pc-tl-dot" aria-hidden="true" />
              <span className="pc-tl-num">STEP {step.num}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                <span className="pc-feature-icon" style={{ marginBottom: 0, width: 40, height: 40 }}>
                  <Icon name={step.icon} size={20} />
                </span>
                <h3 className="pc-tl-title" style={{ margin: 0 }}>{step.title}</h3>
              </div>
              <p className="pc-tl-body">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
