"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📧",
    title: "Cold Email Outreach",
    description:
      "We build and manage your entire cold email infrastructure — domain setup, inbox warming, list building, sequence writing, and deliverability monitoring. You get replies from interested prospects, not spam folders.",
    bullets: [
      "Dedicated sending domains & inbox warming",
      "ICP-targeted prospect lists (verified emails)",
      "A/B tested email sequences (5–8 touches)",
      "Human-managed reply handling & qualification",
    ],
  },
  {
    icon: "💼",
    title: "LinkedIn Outreach",
    description:
      "We leverage LinkedIn Sales Navigator to identify and engage your exact buyers. Our team handles connection requests, personalized DMs, and follow-up sequences that actually get responses from decision-makers.",
    bullets: [
      "Sales Navigator ICP targeting",
      "Personalized connection & message sequences",
      "Profile optimization & positioning",
      "Content engagement to boost visibility",
    ],
  },
  {
    icon: "🔀",
    title: "Multi-Channel Campaigns",
    description:
      "The most effective outreach hits prospects on multiple fronts. We coordinate cold email + LinkedIn + direct mail to maximize touchpoints, increase brand familiarity, and dramatically improve reply rates.",
    bullets: [
      "Synchronized email + LinkedIn sequences",
      "Touchpoint coordination & timing strategy",
      "Prospect scoring based on engagement",
      "Higher conversion than single-channel alone",
    ],
  },
  {
    icon: "🚀",
    title: "SDR as a Service",
    description:
      "Need a full-time outbound motion without the hiring headache? Our SDR-as-a-Service package gives you a dedicated appointment setter working exclusively on your account — fully managed, no benefits, no overhead.",
    bullets: [
      "Dedicated full-time outbound rep",
      "Full account management & reporting",
      "Weekly strategy calls & optimization",
      "Scales with your pipeline goals",
    ],
  },
  {
    icon: "📋",
    title: "SOPs & Process Documentation",
    description:
      "We turn how your business actually runs into clear, step-by-step standard operating procedures your team can follow — and new hires can learn from on day one. No more processes living only in someone's head.",
    bullets: [
      "Process mapping & workflow audits",
      "Step-by-step SOPs your team will actually use",
      "Training-ready docs that speed up onboarding",
      "A documented SOP library you own and can edit",
    ],
  },
  {
    icon: "⚙️",
    title: "Operations Consulting",
    description:
      "We find the bottlenecks, tighten your workflows, and put simple systems and tools in place so work runs consistently and is ready to scale — not just when you're watching.",
    bullets: [
      "Operations & bottleneck assessment",
      "Workflow design and standardization",
      "Tooling & systems recommendations",
      "Implementation support, not just a report",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section className="pc-section-light pc-section-pad" id="services">
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
          Growth and operations,<br />
          <em className="pc-hero-accent">under one roof.</em>
        </motion.h2>
        <motion.p
          className="pc-section-lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        >
          Prestige Consulting is more than outreach. We fill your calendar with qualified meetings —
          and help you document SOPs and tighten operations so the business runs smoothly behind the scenes.
        </motion.p>

        <div className="pc-services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="pc-service-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.10 }}
            >
              <div className="pc-service-icon">{service.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "#1E2A44", marginBottom: 10, letterSpacing: "-0.01em" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 14.5, color: "#6B7488", lineHeight: 1.75, marginBottom: 20 }}>
                {service.description}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {service.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#6B7488" }}>
                    <span style={{ color: "#9A7A12", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
