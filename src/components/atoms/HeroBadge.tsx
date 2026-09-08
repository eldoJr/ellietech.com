import { motion } from "motion/react";

export default function HeroBadge() {
  return (
    <motion.div
      className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        border:     "1px solid var(--border-strong)",
        background: "var(--surface)",
        color:      "var(--fg-dim)",
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0  }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span
        className="block h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
      />
      <span className="text-[0.65rem] uppercase tracking-[0.25em] font-light">
        Software Studio · Est. 2024
      </span>
    </motion.div>
  );
}
