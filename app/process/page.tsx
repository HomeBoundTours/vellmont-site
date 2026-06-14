import type { Metadata } from "next";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPrestige from "@/components/sections/WhyPrestige";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See exactly how Prestige Consulting takes you from zero outbound to a predictable pipeline of qualified meetings — in four steps, in under 30 days.",
};

export default function ProcessPage() {
  return (
    <>
      <HowItWorks />
      <WhyPrestige />
    </>
  );
}
