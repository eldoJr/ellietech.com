import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SECTIONS = [
  { id: "hero",     label: "Home"     },
  { id: "services", label: "Services" },
  { id: "work",     label: "Work"     },
  { id: "about",    label: "About"    },
  { id: "contact",  label: "Contact"  },
];

export default function SectionDots() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  className="absolute right-6 text-[0.6rem] uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{ color: "var(--fg-dim)" }}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{    opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.button
              onClick={() => scrollTo(id)}
              aria-label={`Go to ${label}`}
              className="relative flex items-center justify-center bg-transparent border-0 cursor-pointer p-1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block rounded-full"
                animate={{
                  width:      isActive ? 6 : 4,
                  height:     isActive ? 6 : 4,
                  background: isActive ? "var(--fg)" : "var(--fg-muted)",
                  boxShadow:  isActive ? "0 0 8px var(--accent)" : "none",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
