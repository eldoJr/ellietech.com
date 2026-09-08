import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      style={{ color: "var(--fg-muted)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
      <div
        className="relative h-10 w-px overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ background: "var(--accent)", height: "40%" }}
          animate={{ y: ["0%", "250%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
