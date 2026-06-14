const items = [
  "SaaS", "Professional Services", "Staffing & Recruiting", "Financial Services",
  "Healthcare IT", "Manufacturing", "Logistics", "Commercial Real Estate",
  "Insurance", "Marketing Agencies", "Legal Tech", "HR Tech",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="pc-marquee-wrap" aria-hidden="true">
      <div className="pc-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="pc-marquee-item">
            {item}
            <span className="pc-marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
