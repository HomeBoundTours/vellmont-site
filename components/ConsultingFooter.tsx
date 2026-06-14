"use client";

import Link from "next/link";

export default function ConsultingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pc-footer" role="contentinfo">
      <div className="pc-container">
        <div className="pc-footer-grid">
          {/* Brand col */}
          <div>
            <div className="pc-footer-logo">
              <span className="pc-footer-logo-dot" aria-hidden="true" />
              Prestige Consulting LLC
            </div>
            <p className="pc-footer-tagline" style={{ maxWidth: 320 }}>
              B2B appointment setting done right. We build your outbound system, run your outreach,
              and deliver qualified meetings with decision-makers — so your team can focus on closing.
            </p>
          </div>

          {/* Services col */}
          <div>
            <p className="pc-footer-col-head">Services</p>
            <Link className="pc-footer-link" href="/services">Cold Email Outreach</Link>
            <Link className="pc-footer-link" href="/services">LinkedIn Outreach</Link>
            <Link className="pc-footer-link" href="/services">Multi-Channel Campaigns</Link>
            <Link className="pc-footer-link" href="/services">SDR as a Service</Link>
          </div>

          {/* Company col */}
          <div>
            <p className="pc-footer-col-head">Company</p>
            <Link className="pc-footer-link" href="/process">How It Works</Link>
            <Link className="pc-footer-link" href="/services">Results</Link>
            <Link className="pc-footer-link" href="/faq">FAQ</Link>
            <a className="pc-footer-link" href="/#book-call">Book a Call</a>
          </div>
        </div>

        <hr className="pc-footer-divider" />

        <div className="pc-footer-bottom">
          <span>© {year} Prestige Consulting LLC. All rights reserved.</span>
          <a
            href="https://homeboundtours.github.io/sterling-crest-landing-page"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(228,199,107,0.35)", paddingBottom: 1, transition: "border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(228,199,107,0.75)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(228,199,107,0.35)")}
          >
            Sterling Crest Holdings LLC — A Privately Held Family of Premium Brands
          </a>
        </div>
      </div>
    </footer>
  );
}
