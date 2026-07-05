"use client";

/**
 * Cohesive Lucide-style stroke icon set (24×24, currentColor).
 * Replaces emoji icons across the site for a world-class, professional look.
 * Color & size are inherited from the parent (`color` + `width/height`).
 */

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export type IconName =
  | "mail"
  | "linkedin"
  | "shuffle"
  | "headset"
  | "clipboard"
  | "settings"
  | "zap"
  | "target"
  | "message"
  | "chart"
  | "refresh"
  | "handshake"
  | "search"
  | "pen"
  | "send"
  | "calendar-check";

const PATHS: Record<IconName, React.ReactNode> = {
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 6 9-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
      <path d="M7 10v7M7 7v0" />
      <path d="M11.5 17v-3.5a2 2 0 0 1 4 0V17M11.5 10v7" />
    </>
  ),
  shuffle: (
    <>
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4l5 5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="7" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="7" rx="1.5" />
      <path d="M20 18v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v1H9z" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.8A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.5 11.5h7M8.5 8.5h4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4M12 16V8M17 16v-6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4.5L3 9" />
      <path d="M3 4v5h5" />
      <path d="M4 13a8 8 0 0 0 14 4.5L21 15" />
      <path d="M21 20v-5h-5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.5 1.5 0 0 0 2.1 0l3.9-3.9" />
      <path d="M3 11.5 7 7.5l3.5 3.5a1.5 1.5 0 0 0 2.1 0l.9-.9 5.5 5.4" />
      <path d="M7.5 8 11 4.5a2 2 0 0 1 2.8 0L17 7.5" />
      <path d="M3 11.5v3.5l2 2M21 11.5v3.5l-2 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  pen: (
    <>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      <path d="m14 6 3 3" />
    </>
  ),
  send: (
    <>
      <path d="M21.5 2.5 11 13" />
      <path d="M21.5 2.5 15 21l-4-8-8-4z" />
    </>
  ),
  "calendar-check": (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
};

export default function Icon({ name, className, size = 24, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
