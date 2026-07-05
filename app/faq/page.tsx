import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/sections/FAQ";
import BookCall from "@/components/sections/BookCall";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Vellmont Consulting's B2B appointment setting service — timelines, pricing, qualification, and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Common questions"
        title={
          <>
            Everything you need<br />
            <em className="pc-hero-accent">to know.</em>
          </>
        }
        lead="Timelines, qualification, pricing structure, and what to expect — answered."
      />
      <FAQ />
      <BookCall />
    </>
  );
}
