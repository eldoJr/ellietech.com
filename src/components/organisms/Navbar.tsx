import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavLogo from "@/components/molecules/NavLogo";
import NavLink from "@/components/atoms/NavLink";
import ThemeToggle from "@/components/atoms/ThemeToggle";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:           scrolled ? "var(--nav-bg-scrolled)" : "transparent",
          backdropFilter:       scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:         scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <NavLogo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex list-none m-0 p-0">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop right group */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[0.7rem] uppercase tracking-widest font-light no-underline"
              style={{
                border:     "1px solid var(--border-strong)",
                color:      "var(--fg)",
                background: "var(--surface)",
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{
                background:   "var(--surface-hover)",
                borderColor:  "var(--border-hover)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
              <span style={{ color: "var(--fg-muted)" }}>→</span>
            </motion.a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-0 cursor-pointer p-0"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-px w-5 origin-center"
                style={{ background: "var(--fg)" }}
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-5"
                style={{ background: "var(--fg)" }}
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-5 origin-center"
                style={{ background: "var(--fg)" }}
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 md:hidden"
            style={{
              background:           "var(--overlay-bg)",
              backdropFilter:       "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0   }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{    opacity: 0, y: 8  }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              >
                <NavLink href={href} onClick={() => setMenuOpen(false)}>
                  <span className="text-2xl font-light tracking-widest" style={{ color: "var(--fg)" }}>
                    {label}
                  </span>
                </NavLink>
              </motion.div>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full px-8 py-3 text-[0.7rem] uppercase tracking-widest font-light no-underline"
              style={{
                border:     "1px solid var(--border-strong)",
                color:      "var(--fg)",
                background: "var(--surface)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
            >
              Get started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
