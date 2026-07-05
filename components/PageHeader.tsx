"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } };

type PageHeaderProps = {
  eyebrow: string;
  /** Title content; wrap the accent phrase in <em className="pc-hero-accent"> */
  title: React.ReactNode;
  lead?: string;
};

/** Ivory editorial page header used at the top of interior pages. */
export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="pc-ph">
      <motion.div className="pc-container" variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="pc-eyebrow">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={item} className="pc-ph-title">
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={item} className="pc-ph-lead">
            {lead}
          </motion.p>
        )}
      </motion.div>
    </header>
  );
}
