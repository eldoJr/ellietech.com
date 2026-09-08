import { GitFork, Link, Globe } from "lucide-react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/eldomacuacua",       icon: GitFork },
  { label: "LinkedIn",  href: "https://linkedin.com/in/eldomacuacua",  icon: Link    },
  { label: "Portfolio", href: "https://ellietech.com",                 icon: Globe   },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <span className="text-sm font-light tracking-[0.15em] uppercase" style={{ color: "var(--fg)" }}>
          ELLITEC
        </span>

        {/* Nav */}
        <nav className="flex flex-wrap gap-6">
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[0.65rem] uppercase tracking-[0.2em] font-light"
              style={{ color: "var(--fg-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-muted)"}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Socials + copyright */}
        <div className="flex items-center gap-5">
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
              <Icon size={14} />
            </a>
          ))}
          <span className="text-[0.6rem] font-light" style={{ color: "var(--fg-muted)" }}>
            © {new Date().getFullYear()} ELLITEC
          </span>
        </div>

      </div>
    </footer>
  );
}
