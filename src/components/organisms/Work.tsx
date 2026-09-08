import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import ProjectRow   from "@/components/molecules/ProjectRow";

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          width:      600,
          height:     600,
          top:        "20%",
          right:      "-10%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter:     "blur(48px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10">

        {/* Header */}
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <motion.span
              className="text-[0.65rem] uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Selected work
            </motion.span>

            <motion.h2
              className="font-light leading-tight"
              style={{
                fontSize:      "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                color:         "var(--fg)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Projects that<br />speak for themselves.
            </motion.h2>
          </div>

          <motion.p
            className="max-w-xs text-sm font-light leading-relaxed"
            style={{ color: "var(--fg-dim)" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of real products we designed, built and shipped.
          </motion.p>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[0.75rem] uppercase tracking-widest font-light no-underline"
            style={{
              border:     "1px solid var(--border-strong)",
              color:      "var(--fg-dim)",
              background: "transparent",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            whileHover={{ color: "var(--fg)", borderColor: "var(--border-hover)" }}
            whileTap={{ scale: 0.97 }}
          >
            Start your project
            <span style={{ color: "var(--fg-muted)" }}>→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
