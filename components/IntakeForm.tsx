"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  sells: string;
  idealCustomer: string;
  dealSize: string;
  geography: string;
  service: string;
  budget: string;
  timeline: string;
  goal: string;
  bottleneck: string;
}

const INITIAL: FormData = {
  firstName: "", lastName: "", email: "", phone: "", company: "", website: "",
  sells: "", idealCustomer: "", dealSize: "", geography: "",
  service: "", budget: "", timeline: "", goal: "", bottleneck: "",
};

const SERVICES = [
  "Appointment setting / lead gen",
  "SOPs & process documentation",
  "Operations consulting",
  "Not sure yet",
];
const BUDGETS = ["Under $2,500", "$2,500 – $4,000", "$4,000 – $6,000", "$6,000+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within 30 days", "60–90 days", "Just exploring"];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IntakeForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.sells.trim()) e.sells = "Required";
    if (!form.idealCustomer.trim()) e.idealCustomer = "Required";
    if (!form.service) e.service = "Required";
    if (!form.goal.trim()) e.goal = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const payload = {
      _subject: "New Vellmont Consulting intake",
      Name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      Phone: form.phone,
      Company: form.company,
      Website: form.website,
      "What they sell": form.sells,
      "Ideal customer": form.idealCustomer,
      "Average deal size": form.dealSize,
      Geography: form.geography,
      "Service interest": form.service,
      "Monthly budget": form.budget,
      Timeline: form.timeline,
      "90-day goal": form.goal,
      "Biggest bottleneck": form.bottleneck,
    };
    try {
      const res = await fetch("https://formspree.io/f/maqzanpn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrors((er) => ({ ...er, email: "Submission failed — please try again." }));
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="pc-success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="pc-success-icon" aria-hidden="true">✓</div>
        <h3 style={{ fontSize: 24, fontWeight: 900, color: "#f1f5f9", margin: 0 }}>Thank you — we&apos;ve got it.</h3>
        <p style={{ fontSize: 15, color: "rgba(241,245,249,0.60)", maxWidth: 420, lineHeight: 1.7, margin: 0 }}>
          Your intake is in. We&apos;ll review your answers and follow up within one business day to confirm
          next steps and find a time to talk.
        </p>
      </motion.div>
    );
  }

  const err = (k: keyof FormData) => errors[k] ? <span className="pc-error-msg">{errors[k]}</span> : null;
  const cls = (k: keyof FormData) => `pc-input${errors[k] ? " pc-input-error" : ""}`;

  return (
    <form className="pc-form" onSubmit={handleSubmit} noValidate>
      <div className="pc-form-row">
        <label className="pc-label">First Name
          <input className={cls("firstName")} placeholder="John" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} autoComplete="given-name" />
          {err("firstName")}
        </label>
        <label className="pc-label">Last Name
          <input className={cls("lastName")} placeholder="Smith" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} autoComplete="family-name" />
          {err("lastName")}
        </label>
      </div>

      <div className="pc-form-row">
        <label className="pc-label">Work Email
          <input type="email" className={cls("email")} placeholder="john@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
          {err("email")}
        </label>
        <label className="pc-label">Phone
          <input className="pc-input" placeholder="(602) 555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        </label>
      </div>

      <div className="pc-form-row">
        <label className="pc-label">Company
          <input className={cls("company")} placeholder="Acme Corp" value={form.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" />
          {err("company")}
        </label>
        <label className="pc-label">Website
          <input type="url" className="pc-input" placeholder="https://yourcompany.com" value={form.website} onChange={(e) => set("website", e.target.value)} autoComplete="url" />
        </label>
      </div>

      <label className="pc-label">What do you sell?
        <textarea className={cls("sells")} rows={2} placeholder="Your product or service in a sentence or two" value={form.sells} onChange={(e) => set("sells", e.target.value)} style={{ resize: "vertical", lineHeight: 1.65 }} />
        {err("sells")}
      </label>

      <label className="pc-label">Who is your ideal customer?
        <textarea className={cls("idealCustomer")} rows={2} placeholder="Industries, company size, and job titles you want to reach" value={form.idealCustomer} onChange={(e) => set("idealCustomer", e.target.value)} style={{ resize: "vertical", lineHeight: 1.65 }} />
        {err("idealCustomer")}
      </label>

      <div className="pc-form-row">
        <label className="pc-label">Average Deal Size
          <input className="pc-input" placeholder="$" value={form.dealSize} onChange={(e) => set("dealSize", e.target.value)} />
        </label>
        <label className="pc-label">Where You Serve
          <input className="pc-input" placeholder="e.g., Phoenix metro, US" value={form.geography} onChange={(e) => set("geography", e.target.value)} />
        </label>
      </div>

      <label className="pc-label">Which service are you interested in?
        <select className={cls("service")} value={form.service} onChange={(e) => set("service", e.target.value)} style={{ cursor: "pointer" }}>
          <option value="">Select…</option>
          {SERVICES.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {err("service")}
      </label>

      <div className="pc-form-row">
        <label className="pc-label">Monthly Budget
          <select className="pc-input" value={form.budget} onChange={(e) => set("budget", e.target.value)} style={{ cursor: "pointer" }}>
            <option value="">Select…</option>
            {BUDGETS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label className="pc-label">Timeline to Start
          <select className="pc-input" value={form.timeline} onChange={(e) => set("timeline", e.target.value)} style={{ cursor: "pointer" }}>
            <option value="">Select…</option>
            {TIMELINES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <label className="pc-label">Your goal in the next 90 days
        <textarea className={cls("goal")} rows={2} placeholder="What does a win look like?" value={form.goal} onChange={(e) => set("goal", e.target.value)} style={{ resize: "vertical", lineHeight: 1.65 }} />
        {err("goal")}
      </label>

      <label className="pc-label">Biggest bottleneck right now
        <textarea className="pc-input" rows={3} placeholder="What's slowing growth or eating your time?" value={form.bottleneck} onChange={(e) => set("bottleneck", e.target.value)} style={{ resize: "vertical", lineHeight: 1.65 }} />
      </label>

      <button type="submit" className="pc-btn-primary" disabled={loading} style={{ marginTop: 8, justifyContent: "center" }}>
        {loading ? "Sending…" : "Submit & Connect →"}
      </button>
      <p style={{ fontSize: 12, color: "rgba(241,245,249,0.35)", textAlign: "center", margin: 0 }}>
        No commitment required. We&apos;ll reach out within 1 business day.
      </p>
    </form>
  );
}
