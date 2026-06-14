"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How quickly will we start seeing meetings on the calendar?",
    a: "Most clients see their first qualified meetings within 3–4 weeks of onboarding. Our setup process takes 10–14 days (ICP build, domain warming, sequence writing), then outreach begins. The first replies and bookings typically arrive in week 3–4. By month two, you're at full cadence.",
  },
  {
    q: "What types of businesses do you work best with?",
    a: "We specialize in B2B companies with a defined sales process and average deal sizes of $5,000+. Our clients span SaaS, professional services, staffing, financial services, healthcare IT, MSPs, commercial real estate, and more. If you sell to businesses and have a proven offer, we can build a pipeline for you.",
  },
  {
    q: "How do you define a 'qualified' meeting?",
    a: "A qualified meeting is one where the prospect matches your ICP (title, company size, industry, budget authority), has shown genuine interest in your offer, and has confirmed the meeting time. We don't book meetings with gatekeepers or people who haven't acknowledged interest — every calendar slot is pre-screened.",
  },
  {
    q: "Do you use AI to write the outreach?",
    a: "No. Every sequence is written by our experienced team of SDRs who understand B2B sales. We use research tools and personalization at scale, but the copy itself is human-crafted and tailored to your specific ICP and value proposition. AI-generated spam is detectable and doesn't convert — we don't use it.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Not much. We need a 60-minute onboarding call to understand your offer, ICP, and goals. From there, we handle everything: list building, domain setup, sequence writing, outreach, and reply management. You'll need to provide calendar access for booking and approve messaging before we launch.",
  },
  {
    q: "Are there long-term contracts?",
    a: "We offer both month-to-month and quarterly/annual options (with discounts for longer commitments). We don't believe in locking clients into contracts they can't exit — if we're not delivering results, you should be able to leave. That said, outbound is a compounding process and results improve significantly by month 2–3.",
  },
  {
    q: "What happens if we don't get any meetings?",
    a: "In the unlikely event that a campaign doesn't produce qualified meetings within 60 days, we work at no additional cost until it does. We're invested in your results. Our team will diagnose the issue, rewrite messaging, adjust targeting, and relaunch — at our expense.",
  },
  {
    q: "How is this different from buying leads?",
    a: "Buying leads gives you a contact list — you still have to do all the outreach, manage replies, and qualify prospects yourself. We handle the entire process end-to-end: list building, outreach, follow-up, objection handling, and qualification. The only thing you do is show up to the booked call.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pc-section-light pc-section-pad" id="faq">
      <div className="pc-container">
        <motion.p
          className="pc-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Common questions
        </motion.p>
        <motion.h2
          className="pc-section-h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
        >
          Everything you need<br />
          <em className="pc-hero-accent">to know.</em>
        </motion.h2>

        <div
          style={{ display: "grid", gap: 40, gridTemplateColumns: "1fr" }}
          className="md:grid-cols-[1fr_640px]"
        >
          <div />
          <motion.div
            className="pc-faq-list"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{ maxWidth: 720 }}
          >
            {faqs.map((faq, i) => (
              <div key={i} className="pc-faq-item">
                <button
                  className="pc-faq-btn"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {faq.q}
                  <span className="pc-faq-icon" aria-hidden="true">+</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="pc-faq-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
