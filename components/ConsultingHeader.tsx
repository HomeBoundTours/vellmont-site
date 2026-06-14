"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Process",  href: "/process" },
  { label: "Services", href: "/services" },
  { label: "FAQ",      href: "/faq" },
];

export default function ConsultingHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="pc-nav" role="banner">
      <div className="pc-nav-inner">
        <Link
          href="/"
          className="pc-nav-logo"
          aria-label="Prestige Consulting LLC home"
        >
          <span className="pc-nav-logo-dot" aria-hidden="true" />
          Prestige Consulting
        </Link>

        <nav className="pc-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pc-nav-link${pathname === link.href ? " pc-nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pc-nav-cta">
          <a
            href="/#book-call"
            className="pc-btn-primary hidden md:inline-flex"
            style={{ padding: "10px 20px", fontSize: 13.5, borderRadius: 10, textDecoration: "none" }}
          >
            Book a Discovery Call
          </a>

          <button
            className="pc-nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="pc-nav-toggle-bar" />
            <span className="pc-nav-toggle-bar" />
            <span className="pc-nav-toggle-bar" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="pc-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pc-mobile-link${pathname === link.href ? " pc-nav-link-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(228,199,107,0.18)" }}>
              <a
                href="/#book-call"
                onClick={() => setOpen(false)}
                className="pc-btn-primary"
                style={{ borderRadius: 10, justifyContent: "center", display: "flex", textDecoration: "none" }}
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
