"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BookCall() {
  return (
    <section
      id="book-call"
      style={{
        background: "radial-gradient(130% 110% at 20% 110%, #27406f 0%, #1F3864 45%, #15294b 100%)",
        borderTop: "1px solid rgba(228,199,107,0.14)",
        padding: "80px 0 100px",
      }}
    >
      <div className="pc-container">
        <div
          style={{
            display: "grid",
            gap: 60,
            gridTemplateColumns: "1fr",
            alignItems: "start",
          }}
          className="lg:grid-cols-[440px_1fr]"
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
              Get started
            </motion.p>
            <motion.h2
              className="pc-section-h2"
              style={{ marginBottom: 16 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            >
              Let&apos;s talk about<br />
              <em className="pc-hero-accent">your business.</em>
            </motion.h2>
            <motion.p
              style={{ fontSize: 15, color: "rgba(241,245,249,0.58)", lineHeight: 1.75, marginBottom: 36, maxWidth: 380 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.14 }}
            >
              Book a free 30-minute consultation. We&apos;ll learn about your business, your goals, and
              where the friction is — then show you where we can help, from booking qualified meetings
              to documenting SOPs and tightening operations.
            </motion.p>

            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.22 }}
            >
              {[
                "30-minute call — no hard sell",
                "A custom look at your growth & operations",
                "Clear pricing and timeline estimate",
                "No obligation to move forward",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: "rgba(201,162,39,0.14)", border: "1px solid rgba(228,199,107,0.30)",
                    color: "#C9A227", fontSize: 12, fontWeight: 900,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>✓</span>
                  <span style={{ fontSize: 14, color: "rgba(241,245,249,0.70)" }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Cal.com inline booking */}
          <motion.div
            style={{
              border: "1px solid rgba(228,199,107,0.18)",
              borderRadius: 20,
              overflow: "hidden",
              height: 680,
              background: "#fff",
            }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          >
            <iframe
              src="https://cal.com/acconsulting/discoverycall?embed=true&hideEventTypeDetails=false&layout=month_view"
              style={{
                width: "100%",
                height: 780,
                border: "none",
                marginTop: -50,
                display: "block",
              }}
              title="Book your discovery call"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
