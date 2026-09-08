import { motion } from "motion/react";
import { about } from "@/lib/about";

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function About() {
  const { company, values, tech, team } = about;

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute" style={{ width: 700, height: 700, top: "5%", right: "-15%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)", filter: "blur(56px)" }} />
      <div className="pointer-events-none absolute" style={{ width: 500, height: 500, bottom: "10%", left: "-10%", background: "radial-gradient(circle, rgba(165,180,252,0.06) 0%, transparent 65%)", filter: "blur(48px)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10">

        {/* ── 01 Company ── */}
        <div className="mb-32">
          <motion.span className="mb-6 block text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }} {...fadeUp()}>
            Who we are
          </motion.span>

          {/* Large statement */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
            <motion.h2
              className="col-span-7 font-light leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "var(--fg)" }}
              {...fadeUp(0.1)}
            >
              {company.name}.<br />
              <span style={{ color: "var(--fg-dim)" }}>{company.tagline}</span>
            </motion.h2>

            <div className="col-span-5 flex flex-col justify-end gap-5">
              {company.description.split("\n\n").map((para, i) => (
                <motion.p key={i} className="text-sm font-light leading-[1.8]" style={{ color: "var(--fg-dim)" }} {...fadeUp(0.2 + i * 0.08)}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

        </div>

        {/* ── 02 Values ── */}
        <div className="mb-32">
          <motion.span className="mb-12 block text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }} {...fadeUp()}>
            Our principles
          </motion.span>

          <div className="flex flex-col">
            {values.map((v, i) => (
              <motion.div
                key={v.index}
                className="grid grid-cols-12 items-start gap-6 border-t py-10"
                style={{ borderColor: "var(--border)" }}
                {...fadeUp(i * 0.1)}
              >
                {/* Large index */}
                <span
                  className="col-span-1 font-light leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--border-strong)", letterSpacing: "-0.03em" }}
                >
                  {v.index}
                </span>

                {/* Title */}
                <h3
                  className="col-span-11 text-xl font-light md:col-span-3"
                  style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
                >
                  {v.title}
                </h3>

                {/* Description */}
                <p className="col-span-11 col-start-2 text-sm font-light leading-[1.8] md:col-span-7 md:col-start-auto" style={{ color: "var(--fg-dim)" }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>

        {/* ── 03 Tech ── */}
        <div className="mb-32">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <motion.span className="text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }} {...fadeUp()}>
                Technology
              </motion.span>
              <motion.h3 className="font-light" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }} {...fadeUp(0.1)}>
                Tools we trust.
              </motion.h3>
            </div>
            <motion.p className="max-w-xs text-sm font-light leading-relaxed" style={{ color: "var(--fg-dim)" }} {...fadeUp(0.15)}>
              A curated stack chosen for reliability, performance and long-term maintainability.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                className="rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-widest font-light cursor-default"
                style={{ border: "1px solid var(--border)", color: "var(--fg-dim)", background: "var(--surface)", transition: "all 0.25s ease" }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.035 }}
                whileHover={{ borderColor: "var(--accent)", color: "var(--fg)", background: "var(--surface-hover)" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ── 04 Team ── */}
        <div>
          <div className="mb-12 flex flex-col gap-3">
            <motion.span className="text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }} {...fadeUp()}>
              The team
            </motion.span>
            <motion.h3 className="font-light" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }} {...fadeUp(0.1)}>
              Small team, deep expertise.
            </motion.h3>
          </div>

          <div className="flex flex-wrap gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group relative w-64 overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--border)", background: "var(--surface)", transition: "border-color 0.3s ease" }}
                {...fadeUp(i * 0.1)}
                whileHover={{ borderColor: "var(--border-strong)" } as never}
              >
                {/* Portrait */}
                <div className="relative h-72 w-full overflow-hidden" style={{ background: "var(--surface-hover)" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                  {/* subtle gradient overlay at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, var(--surface), transparent)" }} />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-light" style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      {member.name}
                    </h4>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                      {member.role}
                    </span>
                    <span className="text-[0.58rem] uppercase tracking-[0.15em]" style={{ color: "var(--fg-muted)" }}>
                      {member.education}
                    </span>
                  </div>
                  <p className="text-xs font-light leading-[1.75]" style={{ color: "var(--fg-dim)" }}>
                    {member.bio}
                  </p>
                  {/* Social links */}
                  <div className="flex items-center gap-4">
                    {[
                      member.linkedin && { href: member.linkedin, d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                      member.github   && { href: member.github,   d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                      member.portfolio && { href: member.portfolio, d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' },
                    ].filter(Boolean).map((link, i) => (
                      <a key={i} href={(link as {href:string}).href} target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--fg-muted)", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-muted)"}
                      >
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d={(link as {d:string}).d} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
