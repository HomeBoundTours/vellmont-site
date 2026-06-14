import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import BookCall from "@/components/sections/BookCall";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Prestige Consulting's B2B appointment setting service — timelines, pricing, qualification, and more.",
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
      <BookCall />
    </>
  );
}
