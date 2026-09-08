import { motion } from "motion/react";

const LINES = ["We build", "digital", "experiences."];

export default function HeroHeadline() {
  return (
    <h1
      className="text-light leading-[0.92] tracking-tight"
      style={{
        fontSize:      "clamp(3.2rem, 9vw, 7.5rem)",
        letterSpacing: "-0.03em",
        color:         "var(--fg)",
      }}
    >
      {LINES.map((line, li) => (
        <span key={li} className="block overflow-hidden pb-[0.15em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: "0%"   }}
            transition={{
              delay:    0.3 + li * 0.12,
              duration: 0.85,
              ease:     [0.22, 1, 0.36, 1],
            }}
          >
            {line === "digital" ? (
              <em
                className="not-italic"
                style={{
                  background:              "linear-gradient(90deg, var(--fg) 0%, var(--accent) 60%, var(--fg) 100%)",
                  WebkitBackgroundClip:    "text",
                  WebkitTextFillColor:     "transparent",
                  backgroundClip:          "text",
                }}
              >
                {line}
              </em>
            ) : line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
