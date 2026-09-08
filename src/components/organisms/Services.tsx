import { motion } from "motion/react";
import ServiceCard from "@/components/molecules/ServiceCard";

const SERVICES = [
  {
    title:       "Product Design",
    description: "Products and systems built from scratch from MVP to scale with code quality that stands the test of time.",
    tags:        ["Figma", "UX", "Design System"],
  },
  {
    title:       "Web & Internal Systems",
    description: "High-performance web platforms, portals, and internal tools, built for the way your operation works.",
    tags:        ["React", "Next.js", "TypeScript"],
  },
  {
    title:       "Mobile Development",
    description: "Cross-platform iOS and Android apps with native-quality experience and shared codebases.",
    tags:        ["React Native", "Expo", "Swift"],
  },
  {
    title:       "Integrations & APIs",
    description: "Connect systems, ERPs, and services using robust, documented, and secure APIs without rework or surprises.",
    tags:        ["REST", "GraphQL", "Webhooks"],
  },
  {
    title:       "Data & AI",
    description: "Data pipelines, models, and intelligent automation applied to real business problems.",
    tags:        ["OpenAI", "LangChain", "Python"],
  },
  {
    title:       "Consulting & Architecture",
    description: "Architecture reviews, technology roadmaps, team augmentation and hands-on technical strategy.",
    tags:        ["Strategy", "Audit", "Roadmap"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute"
        style={{
          width:      600,
          height:     600,
          top:        "10%",
          left:       "-10%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter:     "blur(48px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <motion.span
              className="text-[0.65rem] uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What we do
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
              End-to-end software<br />craftsmanship.
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
            From the first sketch to production infrastructure, we cover every layer of the stack.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              index={i + 1}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
