"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon, { type IconName } from "@/components/Icon";

const services: {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
}[] = [
  {
    icon: "mail",
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
    icon: "linkedin",
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
    icon: "shuffle",
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
    icon: "headset",
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
    icon: "clipboard",
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
    icon: "settings",
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

function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return (
    <>
      <div className="pc-feature-icon"><Icon name={service.icon} size={22} /></div>
      <h3 className="pc-se-panel-title">{service.title}</h3>
      <p className="pc-se-panel-desc">{service.description}</p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
        {service.bullets.map((b) => (
          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#6B7488" }}>
            <span style={{ color: "#18553F", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
            {b}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section className="pc-section-pad" style={{ background: "#F7F5EF" }} id="services">
      <div className="pc-container">
        <div className="pc-se">
          {/* Left — index */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {services.map((s, i) => (
              <div key={s.title} className="pc-se-item">
                <button
                  className="pc-se-btn"
                  aria-expanded={active === i}
                  onClick={() => setActive(i)}
                >
                  <span className="pc-se-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pc-se-name">{s.title}</span>
                  <span className="pc-se-dot" aria-hidden="true" />
                </button>

                {/* Mobile: detail expands in place */}
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      className="pc-se-inline md:hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <ServiceDetail service={s} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Right — sticky detail panel (desktop) */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
          >
            <div className="pc-se-panel" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: EASE }}
                >
                  <ServiceDetail service={services[active]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
