const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/eldomacuacua",      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" },
  { label: "LinkedIn", href: "https://linkedin.com/in/eldomacuacua", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "Website",  href: "https://ellietech.com",                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Main row */}
        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-light tracking-[0.2em] uppercase" style={{ color: "var(--fg)" }}>
              ELLIETECH
            </span>
            <p className="max-w-[18rem] text-xs font-light leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Systems that actually work. Built by a small, experienced team that stays close to the client.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] font-light mb-1" style={{ color: "var(--fg-muted)" }}>
              Navigation
            </span>
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.7rem] uppercase tracking-[0.15em] font-light w-fit"
                style={{ color: "var(--fg-dim)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-dim)"}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] font-light mb-1" style={{ color: "var(--fg-muted)" }}>
              Get in touch
            </span>
            <a
              href="mailto:hello@ellietech.com"
              className="text-[0.7rem] font-light w-fit"
              style={{ color: "var(--fg-dim)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-dim)"}
            >
              hello@ellietech.com
            </a>
            <div className="flex items-center gap-4 mt-2">
              {SOCIALS.map(({ label, href, d }) => (
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
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-[0.6rem] font-light uppercase tracking-[0.2em]" style={{ color: "var(--fg-muted)" }}>
            © {new Date().getFullYear()} ELLIETECH. All rights reserved.
          </span>
          <span className="text-[0.6rem] font-light" style={{ color: "var(--fg-muted)" }}>
            Designed & built by{" "}
            <a
              href="https://github.com/eldoJr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--fg-dim)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-dim)"}
            >
              Eldo
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
