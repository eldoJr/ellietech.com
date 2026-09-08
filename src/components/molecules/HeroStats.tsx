import { motion } from "motion/react";

const STATS = [
  { value: "40+",  label: "Projects delivered" },
  { value: "98%",  label: "Client satisfaction" },
  { value: "5yrs", label: "Industry experience" },
];

export default function HeroStats() {
  return (
    <motion.div
      className="flex flex-wrap gap-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0  }}
      transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
    >
      {STATS.map(({ value, label }, i) => (
        <div key={i} className="flex flex-col gap-1">
          <span
            className="text-2xl font-light"
            style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            {value}
          </span>
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em]"
            style={{ color: "var(--fg-muted)" }}
          >
            {label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
