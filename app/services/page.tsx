import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cold email, LinkedIn outreach, multi-channel campaigns, SDR as a Service, plus SOP documentation and operations consulting — Prestige Consulting books qualified meetings and helps your business run smoothly behind the scenes.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <Results />
    </>
  );
}
