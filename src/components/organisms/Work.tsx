import type React from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="pointer-events-none absolute"
        style={{
          width: 600, height: 600,
          top: "20%", right: "-10%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10">

        {/* Header */}
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <motion.span
              className="text-[0.65rem] uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
              {...fade()}
            >
              Selected work
            </motion.span>
            <motion.h2
              className="font-light leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}
              {...fade(0.1)}
            >
              Projects that<br />speak for themselves.
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs text-sm font-light leading-relaxed"
            style={{ color: "var(--fg-dim)" }}
            {...fade(0.2)}
          >
            A selection of real products we designed, built and shipped.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-28">
          {projects.map((project, i) => {
            const imageLeft = i % 2 !== 0;
            return (
              <motion.article
                key={project.slug}
                {...fade(i * 0.1)}
                className={`group grid gap-8 lg:gap-16 items-center ${imageLeft ? "lg:grid-cols-[3fr_5fr]" : "lg:grid-cols-[5fr_3fr]"}`}
              >
                {/* Image */}
                <div className={`relative ${imageLeft ? "lg:order-first" : "lg:order-last"}`}>
                  <span
                    className="absolute -top-8 font-light select-none pointer-events-none z-10 leading-none"
                    style={{
                      fontSize: "8rem",
                      color: "rgba(99,102,241,0.05)",
                      left: imageLeft ? "auto" : "-0.2em",
                      right: imageLeft ? "-0.2em" : "auto",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none"
                      style={{ borderTop: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
                    <span className="absolute bottom-0 right-0 w-8 h-8 z-10 pointer-events-none"
                      style={{ borderBottom: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: "linear-gradient(to top, rgba(99,102,241,0.1), transparent)" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-6 ${imageLeft ? "lg:order-last" : "lg:order-first"}`}>

                  {/* Category + year */}
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest"
                      style={{ border: "1px solid var(--accent)", color: "var(--accent)", background: "var(--surface)" }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest"
                      style={{ border: "1px solid var(--border)", color: "var(--fg-muted)", background: "var(--surface)" }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="font-light leading-tight"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}
                  >
                    {project.title}
                  </h3>

                  <span className="h-px w-full" style={{ backgroundColor: "var(--border)" }} />

                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--fg-dim)" }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-widest"
                        style={{ border: "1px solid var(--border)", color: "var(--fg-muted)", background: "var(--surface)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View project */}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-widest font-light no-underline"
                      style={{
                        border: "1px solid var(--border-strong)",
                        color: "var(--fg-dim)",
                        background: "var(--surface)",
                        transition: "color 0.25s ease, border-color 0.25s ease",
                      }}
                      whileHover={{ color: "var(--fg)", borderColor: "var(--border-hover)" } as React.CSSProperties}
                    >
                      View project
                      <span style={{ color: "var(--accent)" }}>↗</span>
                    </motion.a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div className="mt-24 flex justify-center" {...fade()}>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[0.75rem] uppercase tracking-widest font-light no-underline"
            style={{
              border: "1px solid var(--border-strong)",
              color: "var(--fg-dim)",
              background: "var(--surface)",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            whileHover={{ color: "var(--fg)", borderColor: "var(--border-hover)" } as React.CSSProperties}
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
