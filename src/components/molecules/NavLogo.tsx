import { motion } from "motion/react";

export default function NavLogo() {
  return (
    <motion.a
      href="/"
      className="flex items-center gap-2 no-underline"
      style={{ opacity: 0.85 }}
      whileHover={{ opacity: 1 }}
    >
      <motion.span
        className="block h-1.5 w-1.5 rounded-full"
        style={{
          background: "linear-gradient(135deg, #a5b4fc, var(--fg), #818cf8)",
          boxShadow: "0 0 6px var(--accent)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <span
        className="text-[0.75rem] font-light uppercase tracking-[0.45em]"
        style={{ color: "var(--fg)" }}
      >
        EllieTech
      </span>
    </motion.a>
  );
}
