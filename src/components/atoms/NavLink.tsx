import { motion } from "motion/react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300"
      style={{ color: "var(--fg-dim)" }}
      whileHover={{ color: "var(--fg)" }}
    >
      {children}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px w-0 origin-left"
        style={{ background: "var(--border-hover)" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.a>
  );
}
