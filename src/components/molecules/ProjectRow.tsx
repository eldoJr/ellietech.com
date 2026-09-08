import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  index:   number;
}

export default function ProjectRow({ project, index }: Props) {
  const [hovered, setHovered] = useState(false);
  const ref    = useRef<HTMLAnchorElement>(null);
  const rawX   = useMotionValue(0);
  const rawY   = useMotionValue(0);
  const x      = useSpring(rawX, { stiffness: 200, damping: 24 });
  const y      = useSpring(rawY, { stiffness: 200, damping: 24 });

  const onMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX - 110);
    rawY.set(e.clientY - 75);
  };

  return (
    <motion.a
      ref={ref}
      href={project.live ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between gap-6 no-underline py-10 md:py-12"
      style={{ borderTop: "1px solid var(--border)" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background fill on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "var(--surface)" }}
      />

      {/* Left — index + title */}
      <div className="relative flex items-center gap-6 md:gap-10 min-w-0">
        <span
          className="hidden shrink-0 text-[0.6rem] uppercase tracking-[0.3em] md:block"
          style={{ color: "var(--fg-muted)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <motion.h3
          className="truncate font-light leading-none"
          style={{
            fontSize:      "clamp(1.4rem, 3.5vw, 2.4rem)",
            letterSpacing: "-0.02em",
            color:         "var(--fg)",
          }}
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Right — category + year + arrow */}
      <div className="relative flex shrink-0 items-center gap-6 md:gap-10">
        <span
          className="hidden text-[0.65rem] uppercase tracking-[0.2em] md:block"
          style={{ color: "var(--fg-dim)" }}
        >
          {project.category}
        </span>
        <span
          className="text-[0.65rem] uppercase tracking-[0.2em]"
          style={{ color: "var(--fg-muted)" }}
        >
          {project.year}
        </span>
        <motion.span
          className="text-sm"
          style={{ color: "var(--accent)" }}
          animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ↗
        </motion.span>
      </div>

      {/* Floating image thumbnail — rendered in a portal-like fixed layer */}
      <motion.div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          width:  220,
          height: 150,
          x,
          y,
          top:    0,
          left:   0,
        }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.88 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </motion.div>
    </motion.a>
  );
}
