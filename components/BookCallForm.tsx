"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  website: string;
  monthlyRevenue: string;
  challenge: string;
}

const INITIAL: FormData = {
  firstName: "", lastName: "", email: "", company: "",
  title: "", website: "", monthlyRevenue: "", challenge: "",
};

const REVENUE_OPTIONS = [
  "Under $50K/mo",
  "$50K–$200K/mo",
  "$200K–$500K/mo",
  "$500K–$1M/mo",
  "$1M+/mo",
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BookCallForm() {
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
    if (!form.title.trim()) e.title = "Required";
    if (!form.monthlyRevenue) e.monthlyRevenue = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/maqzanpn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submission failed");
      setSubmitted(true);
    } catch {
      setErrors((e) => ({ ...e, email: "Submission failed — please try again." }));
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
        <h3 style={{ fontSize: 24, fontWeight: 900, color: "#f1f5f9", margin: 0 }}>
          You&apos;re on the calendar.
        </h3>
        <p style={{ fontSize: 15, color: "rgba(241,245,249,0.60)", maxWidth: 400, lineHeight: 1.7, margin: 0 }}>
          We&apos;ll reach out within one business day to confirm your discovery call time and send
          a short pre-call questionnaire so we can make the most of our time together.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="pc-form" onSubmit={handleSubmit} noValidate>
      <div className="pc-form-row">
        <label className="pc-label">
          First Name
          <input
            className={`pc-input${errors.firstName ? " pc-input-error" : ""}`}
            placeholder="John"
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            autoComplete="given-name"
          />
          {errors.firstName && <span className="pc-error-msg">{errors.firstName}</span>}
        </label>
        <label className="pc-label">
          Last Name
          <input
            className={`pc-input${errors.lastName ? " pc-input-error" : ""}`}
            placeholder="Smith"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            autoComplete="family-name"
          />
          {errors.lastName && <span className="pc-error-msg">{errors.lastName}</span>}
        </label>
      </div>

      <div className="pc-form-row">
        <label className="pc-label">
          Work Email
          <input
            type="email"
            className={`pc-input${errors.email ? " pc-input-error" : ""}`}
            placeholder="john@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
          {errors.email && <span className="pc-error-msg">{errors.email}</span>}
        </label>
        <label className="pc-label">
          Company Name
          <input
            className={`pc-input${errors.company ? " pc-input-error" : ""}`}
            placeholder="Acme Corp"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            autoComplete="organization"
          />
          {errors.company && <span className="pc-error-msg">{errors.company}</span>}
        </label>
      </div>

      <div className="pc-form-row">
        <label className="pc-label">
          Your Title
          <input
            className={`pc-input${errors.title ? " pc-input-error" : ""}`}
            placeholder="VP of Sales"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
          />
          {errors.title && <span className="pc-error-msg">{errors.title}</span>}
        </label>
        <label className="pc-label">
          Company Website
          <input
            type="url"
            className="pc-input"
            placeholder="https://yourcompany.com"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
            autoComplete="url"
          />
        </label>
      </div>

      <label className="pc-label">
        Monthly Revenue
        <select
          className={`pc-input${errors.monthlyRevenue ? " pc-input-error" : ""}`}
          value={form.monthlyRevenue}
          onChange={(e) => set("monthlyRevenue", e.target.value)}
          style={{ cursor: "pointer" }}
        >
          <option value="">Select range…</option>
          {REVENUE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.monthlyRevenue && <span className="pc-error-msg">{errors.monthlyRevenue}</span>}
      </label>

      <label className="pc-label">
        What&apos;s your biggest outbound challenge right now?
        <textarea
          className="pc-input"
          placeholder="e.g. We have no outbound motion, or our emails go to spam, or we can't scale our SDR team…"
          rows={4}
          value={form.challenge}
          onChange={(e) => set("challenge", e.target.value)}
          style={{ resize: "vertical", lineHeight: 1.65 }}
        />
      </label>

      <button
        type="submit"
        className="pc-btn-primary"
        disabled={loading}
        style={{ marginTop: 8, justifyContent: "center" }}
      >
        {loading ? "Submitting…" : "Book My Discovery Call →"}
      </button>

      <p style={{ fontSize: 12, color: "rgba(241,245,249,0.35)", textAlign: "center", margin: 0 }}>
        No commitment required. We&apos;ll reach out within 1 business day to schedule.
      </p>
    </form>
  );
}
