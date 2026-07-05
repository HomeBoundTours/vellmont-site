import VellmontMark from "@/components/VellmontMark";

type VellmontLogoProps = {
  /** "dark" = for dark backgrounds (ivory text), "light" = for light backgrounds (navy text). */
  variant?: "dark" | "light";
  /** "md" for the header, "lg" for the footer. */
  size?: "md" | "lg";
  /** Hide the seal chip and show the wordmark only. */
  wordmarkOnly?: boolean;
};

/**
 * Vellmont brand lockup: seal + stacked wordmark
 * (VELLMONT over a green rule over CONSULTING).
 */
export default function VellmontLogo({
  variant = "dark",
  size = "md",
  wordmarkOnly = false,
}: VellmontLogoProps) {
  return (
    <span
      className={`pc-logo pc-logo-on-${variant}${size === "lg" ? " pc-logo-lg" : ""}`}
    >
      {!wordmarkOnly && <VellmontMark chip size={size === "lg" ? 40 : 34} />}
      <span className="pc-logo-stack">
        <span className="pc-logo-word">VELLMONT</span>
        <span className="pc-logo-rule" aria-hidden="true" />
        <span className="pc-logo-sub">CONSULTING</span>
      </span>
    </span>
  );
}
