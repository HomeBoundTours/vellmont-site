"use client";

import { motion } from "framer-motion";
import IntakeForm from "@/components/IntakeForm";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ConnectIntro() {
  return (
    <section
      style={{
        background: "radial-gradient(130% 110% at 20% 110%, #223A5C 0%, #15263F 45%, #0F1C30 100%)",
        borderTop: "1px solid rgba(95,178,147,0.14)",
        padding: "72px 0 100px",
      }}
    >
      <div className="pc-container">
        <div
          style={{ display: "grid", gap: 56, gridTemplateColumns: "1fr", alignItems: "start" }}
          className="lg:grid-cols-[420px_1fr]"
        >
          {/* Left — copy */}
          <div>
            <motion.p
              className="pc-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Connect with us
            </motion.p>
            <motion.h1
              className="pc-section-h2"
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            >
              Tell us about<br />
              <em className="pc-hero-accent">your business.</em>
            </motion.h1>
            <motion.p
              style={{ fontSize: 15, color: "rgba(241,245,249,0.58)", lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.14 }}
            >
              Fill out this quick intake and we&apos;ll review your goals before we talk. It takes about
              three minutes, and there&apos;s no commitment — just a clear next step.
            </motion.p>

            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.22 }}
            >
              {[
                "We review your answers before we meet",
                "A tailored look at your growth & operations",
                "Clear pricing and timeline",
                "No obligation to move forward",
              ].map((itemText) => (
                <div key={itemText} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: "rgba(30,107,82,0.14)", border: "1px solid rgba(95,178,147,0.30)",
                    color: "#1E6B52", fontSize: 12, fontWeight: 900,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>✓</span>
                  <span style={{ fontSize: 14, color: "rgba(241,245,249,0.70)" }}>{itemText}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            style={{
              border: "1px solid rgba(95,178,147,0.18)",
              borderRadius: 20,
              padding: "30px 26px",
              background: "rgba(12,22,43,0.55)",
            }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          >
            <IntakeForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
