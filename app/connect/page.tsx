import type { Metadata } from "next";
import ConnectIntro from "@/components/sections/ConnectIntro";

export const metadata: Metadata = {
  title: "Connect With Us",
  description:
    "Tell us about your business and we'll show you where we can help — from booking qualified meetings to documenting SOPs and tightening operations. Quick 3-minute intake, no commitment.",
};

export default function ConnectPage() {
  return <ConnectIntro />;
}
