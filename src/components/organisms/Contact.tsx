import { useState } from "react";
import { motion } from "motion/react";
import { Send, GitFork, Link, Globe } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as number[] },
});

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/eldomacuacua",       icon: GitFork },
  { label: "LinkedIn",  href: "https://linkedin.com/in/eldomacuacua",  icon: Link    },
  { label: "Portfolio", href: "https://ellietech.com",                 icon: Globe   },
];

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent]       = useState(false);

  const field = (name: string) => ({
    style: {
      width: "100%",
      background: "var(--surface)",
      border: `1px solid ${focused === name ? "var(--border-hover)" : "var(--border)"}`,
      borderRadius: 10,
      padding: "0.8rem 1rem",
      color: "var(--fg)",
      fontSize: "0.875rem",
      fontWeight: 300,
      fontFamily: "inherit",
      outline: "none",
      transition: "border-color 0.2s",
    } as React.CSSProperties,
    onFocus: () => setFocused(name),
    onBlur:  () => setFocused(null),
  });

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="pointer-events-none absolute" style={{ width: 700, height: 700, top: "0%", left: "-20%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)", filter: "blur(64px)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10">

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

          {/* ── Left: CTA ── */}
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <motion.span className="text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }} {...fadeUp()}>
                Get in touch
              </motion.span>
              <motion.h2
                className="font-light leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em", color: "var(--fg)" }}
                {...fadeUp(0.08)}
              >
                Let's build<br />
                <span style={{ color: "var(--fg-dim)" }}>something real.</span>
              </motion.h2>
              <motion.p className="text-sm font-light leading-[1.8] max-w-sm" style={{ color: "var(--fg-dim)" }} {...fadeUp(0.16)}>
                Have a project in mind? Send a message and we'll get back to you within 24 hours.
              </motion.p>
            </div>

            {/* Email + socials pinned to bottom */}
            <motion.div className="flex flex-col gap-5" {...fadeUp(0.22)}>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] block mb-2" style={{ color: "var(--fg-muted)" }}>Email</span>
                <a
                  href="mailto:hello@ellietech.com"
                  className="text-sm font-light"
                  style={{ color: "var(--fg)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
                >
                  hello@ellietech.com
                </a>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <span className="text-[0.6rem] uppercase tracking-[0.25em] block mb-3" style={{ color: "var(--fg-muted)" }}>Socials</span>
                <div className="flex items-center gap-4">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{ color: "var(--fg-muted)", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-muted)"}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.form
            onSubmit={e => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-4"
            {...fadeUp(0.12)}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "name",  label: "Name",  type: "text",  placeholder: "Your name"       },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com"  },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-2">
                  <label className="text-[0.6rem] uppercase tracking-[0.25em]" style={{ color: "var(--fg-muted)" }}>{label}</label>
                  <input type={type} name={name} required placeholder={placeholder} {...field(name)} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.6rem] uppercase tracking-[0.25em]" style={{ color: "var(--fg-muted)" }}>Message</label>
              <textarea
                name="message"
                required
                rows={7}
                placeholder="Tell us about your project..."
                {...field("message")}
                style={{ ...field("message").style, resize: "none" }}
              />
            </div>

            <div className="pt-2">
              {sent ? (
                <motion.p
                  className="text-sm font-light"
                  style={{ color: "var(--accent)" }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent. We'll be in touch soon.
                </motion.p>
              ) : (
                <motion.button
                  type="submit"
                  className="flex items-center gap-2 rounded-full px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] font-light cursor-pointer"
                  style={{ background: "var(--fg)", color: "var(--bg)", border: "none" }}
                  whileHover={{ opacity: 0.85 } as never}
                  whileTap={{ scale: 0.97 } as never}
                >
                  Send message <Send size={13} />
                </motion.button>
              )}
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
