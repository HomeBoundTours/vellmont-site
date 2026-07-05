type VellmontMarkProps = {
  /** Rendered box size in px (chip size when chip=true). */
  size?: number;
  /** Wrap the mark in an ivory rounded chip so it stays legible on dark backgrounds. */
  chip?: boolean;
  title?: string;
  className?: string;
};

/**
 * The Vellmont seal — two-stroke "V" (navy front, emerald behind),
 * recreated as vector so it stays crisp at every size.
 */
export default function VellmontMark({ size = 28, chip = false, title, className }: VellmontMarkProps) {
  const glyph = (
    <svg
      viewBox="0 0 96 96"
      width={chip ? Math.round(size * 0.68) : size}
      height={chip ? Math.round(size * 0.68) : size}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={chip ? undefined : className}
    >
      {title && <title>{title}</title>}
      <polygon points="66,10 88,10 56,88 40,88" fill="#1B7A5B" />
      <polygon points="8,10 30,10 56,88 40,88" fill="#1E2D5C" />
    </svg>
  );

  if (!chip) return glyph;

  return (
    <span className={`pc-seal-chip${className ? ` ${className}` : ""}`} style={{ width: size, height: size }}>
      {glyph}
    </span>
  );
}
