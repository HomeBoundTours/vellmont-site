import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import Results from "@/components/sections/Results";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cold email, LinkedIn outreach, multi-channel campaigns, SDR as a Service, plus SOP documentation and operations consulting — Vellmont Consulting books qualified meetings and helps your business run smoothly behind the scenes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title={
          <>
            Growth and operations,<br />
            <em className="pc-hero-accent">under one roof.</em>
          </>
        }
        lead="Six disciplines, one standard. Select a service to see exactly what's included."
      />
      <ServiceExplorer />
      <Results />
      <CTABand title="Ready when you are." />
    </>
  );
}
