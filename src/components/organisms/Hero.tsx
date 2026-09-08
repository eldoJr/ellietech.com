import { motion } from "motion/react";
import HeroBadge      from "@/components/atoms/HeroBadge";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";
import HeroHeadline    from "@/components/molecules/HeroHeadline";
import DotField        from "@/components/atoms/DotField";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Dot field background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotField dotRadius={1.5} dotSpacing={18} bulgeOnly bulgeStrength={60} glowRadius={180} />
      </div>

      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute"
        style={{
          width:      700,
          height:     700,
          top:        "-15%",
          right:      "-10%",
          background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)",
          filter:     "blur(48px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width:      500,
          height:     500,
          bottom:     "0%",
          left:       "-8%",
          background: "radial-gradient(circle, rgba(165,180,252,0.07) 0%, transparent 65%)",
          filter:     "blur(48px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <div className="flex flex-col gap-8 max-w-4xl">

          <HeroBadge />
          <HeroHeadline />

          <motion.p
            className="max-w-md text-base font-light leading-relaxed"
            style={{ color: "var(--fg-dim)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          >
            We design and engineer high-performance web products, from brand identity
            to scalable full-stack systems, for startups and forward-thinking companies.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[0.75rem] uppercase tracking-widest font-light no-underline"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Start a project
            </motion.a>

            <motion.a
              href="#work"
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
              View our work
              <span style={{ color: "var(--fg-muted)" }}>→</span>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      {/* Bottom edge fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />
    </section>
  );
}
