import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import WhyVellmont from "@/components/process/WhyVellmont";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See exactly how Vellmont Consulting takes you from zero outbound to a predictable pipeline of qualified meetings — in four steps, in under 30 days.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The process"
        title={
          <>
            From onboarding to<br />
            <em className="pc-hero-accent">booked meetings</em> in 30 days.
          </>
        }
        lead="Four steps take you from zero outbound activity to a predictable pipeline — without hiring, training, or managing an SDR team."
      />
      <ProcessTimeline />
      <WhyVellmont />
      <CTABand title="See it for yourself." />
    </>
  );
}
