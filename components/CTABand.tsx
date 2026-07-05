"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Slim editorial call-to-action band for the bottom of interior pages. */
export default function CTABand({ title = "Ready when you are." }: { title?: string }) {
  return (
    <section className="pc-cta-band" aria-label="Get started">
      <div className="pc-container">
        <motion.div
          className="pc-cta-band-inner"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <h2 className="pc-cta-band-title">
            {title}<br />
            <em className="pc-hero-accent">Let&apos;s talk about your business.</em>
          </h2>
          <Magnetic strength={0.25}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link href="/connect" className="pc-btn-primary" style={{ textDecoration: "none" }}>
                Book a Discovery Call →
              </Link>
            </motion.div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
