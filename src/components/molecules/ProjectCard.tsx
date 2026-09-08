import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project:  Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.live ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex overflow-hidden rounded-2xl no-underline ${featured ? "flex-col md:flex-row" : "flex-col"}`}
      style={{
        border:     "1px solid var(--border)",
        background: "var(--surface)",
        transition: "border-color 0.3s ease",
        ...(hovered && { borderColor: "var(--border-strong)" }),
        minHeight:  featured ? 360 : 280,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${featured ? "md:w-1/2 h-56 md:h-auto" : "h-44"}`}
        style={{ background: "var(--surface-hover)" }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.3 : 0.5 }}
          style={{ background: "linear-gradient(to top, var(--bg), transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className={`relative flex flex-1 flex-col justify-between gap-4 p-6 ${featured ? "md:p-10" : ""}`}>

        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span
              className="text-[0.6rem] uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              {project.category}
            </span>
            <span
              className="text-[0.6rem] uppercase tracking-[0.2em]"
              style={{ color: "var(--fg-muted)" }}
            >
              {project.year}
            </span>
          </div>

          <h3
            className="font-light leading-snug"
            style={{
              fontSize:      featured ? "clamp(1.4rem, 3vw, 2rem)" : "1.2rem",
              letterSpacing: "-0.02em",
              color:         "var(--fg)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm font-light leading-relaxed"
            style={{ color: "var(--fg-dim)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="relative flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, featured ? 5 : 3).map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest"
                style={{
                  border:     "1px solid var(--border)",
                  color:      "var(--fg-muted)",
                  background: "var(--surface)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <motion.span
            className="shrink-0 text-base"
            style={{ color: "var(--accent)" }}
            animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            ↗
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}
