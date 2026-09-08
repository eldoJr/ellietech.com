import { useState } from "react";
import { motion } from "motion/react";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({ index, title, description, tags }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col justify-between gap-6 rounded-2xl p-8 cursor-default overflow-hidden"
      style={{
        border:     "1px solid var(--border)",
        background: "var(--surface)",
        transition: "border-color 0.3s ease, background 0.3s ease",
        ...(hovered && {
          borderColor: "var(--border-strong)",
          background:  "var(--surface-hover)",
        }),
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col gap-4">
        {/* Index */}
        <span
          className="text-[0.6rem] uppercase tracking-[0.3em]"
          style={{ color: "var(--fg-muted)" }}
        >
          {String(index).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3
          className="text-xl font-light leading-snug"
          style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "var(--fg-dim)" }}
        >
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest"
              style={{
                border:     "1px solid var(--border)",
                color:      "var(--fg-muted)",
                background: "var(--surface)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.span
          className="text-base shrink-0"
          style={{ color: "var(--accent)" }}
          animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
}
