import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavDropdown from './ui/nav-dropdown';

// --- Nav data ---

const aboutLinks = {
  col1: [
    { label: 'How we work', href: '/about#how-we-work' },
    { label: 'Team', href: '/about#team' },
    { label: 'Tech stack', href: '/about#tech-stack' },
  ],
  col2: [
    { label: 'Our values', href: '/about#values' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '#contact' },
  ],
};

const servicesLeft = {
  title: 'Full-cycle software development services',
  col1: [
    'IT consulting & advisory', 'Web development', 'Mobile development',
    'Embedded software development', 'Custom software development', 'MVP development',
    'Cloud development', 'ERP development', 'Mainframe support', 'Legacy modernization',
  ],
  col2: [
    'UI/UX design', '3D design', 'Software testing and QA', 'Security testing',
    'Database administration', 'DevOps', 'DevSecOps', 'Network',
    'IT staff augmentation', 'Dedicated team',
  ],
};

const servicesRight = {
  title: 'Advanced technologies implementation',
  col1: [
    'Big data', 'Data management', 'Data analytics', 'Data engineering',
    'Data visualization', 'Business intelligence', 'Machine learning',
    'Artificial intelligence', 'Data science', 'Sustainability & ESG',
  ],
  col2: [
    'Digital transformation', 'Business process automation', 'Robotic process automation',
    'Cybersecurity', 'Internet of things', 'Blockchain', 'NFT', 'Metaverse', 'AR & VR',
  ],
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close lang dropdown on click outside
  useEffect(() => {
    if (!langOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <motion.header
        onMouseEnter={() => {
          if (hoverTimeout.current) { clearTimeout(hoverTimeout.current); hoverTimeout.current = null; }
          setHovered(true);
        }}
        onMouseLeave={() => {
          hoverTimeout.current = setTimeout(() => setHovered(false), 200);
        }}
        animate={{
          borderRadius: scrolled || hovered ? 12 : 0,
          marginTop: scrolled || hovered ? 12 : 0,
          width: scrolled || hovered ? 'calc(100% - 80px)' : '100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative max-w-[1440px] w-full"
      >
        {/* Glass background */}
        <motion.div
          animate={{
            opacity: scrolled || hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-lg border border-white/20 dark:border-gray-700/30 overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        />

        {/* Orange light glow — animated */}
        <motion.div
          animate={{
            opacity: scrolled || hovered ? 0.5 : 0,
            x: scrolled || hovered ? ['-20%', '120%'] : '0%',
          }}
          transition={{
            opacity: { duration: 0.3 },
            x: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        >
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent blur-2xl" />
        </motion.div>

        <motion.div
          className="relative z-10 flex items-stretch justify-between h-14 px-6 md:px-8"
        >
          {/* Logo — always visible */}
          <a href="/" className="flex items-center shrink-0 self-center">
            <img
              src="/logo-b.svg"
              alt="EllieTech"
              width={110}
              height={32}
              className="dark:hidden"
            />
            <img
              src="/logo.svg"
              alt="EllieTech"
              width={110}
              height={32}
              className="hidden dark:block"
            />
          </a>

          {/* Nav links */}
          {!searchOpen && (
            <nav className="hidden lg:flex items-stretch gap-6 xl:gap-8 h-full ml-10 mr-auto">
              {/* About us */}
              <NavDropdown label="About us" href="/about">
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr] gap-8">
                  <div className="border border-border/30 overflow-hidden">
                    <img src="/logo.svg" alt="EllieTech" className="h-full w-full object-contain bg-surface-elevated p-6 dark:block hidden" />
                    <img src="/logo-b.svg" alt="EllieTech" className="h-full w-full object-contain bg-surface-elevated p-6 dark:hidden block" />
                  </div>
                  <div className="flex items-start">
                    <p className="text-sm leading-relaxed text-text-secondary">
                      EllieTech is a full-stack software startup specializing in modern web platforms, mobile applications, AI-powered systems, and scalable digital infrastructure.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {aboutLinks.col1.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-text-secondary transition-colors hover:text-primary">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-3">
                    {aboutLinks.col2.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-text-secondary transition-colors hover:text-primary">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavDropdown>

              {/* Services */}
              <NavDropdown label="Services" href="#services">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="mb-5 text-sm font-semibold text-text-primary">{servicesLeft.title}</h3>
                    <div className="grid grid-cols-2 gap-x-6 border-l border-border/50 pl-5">
                      <ul className="flex flex-col gap-3">
                        {servicesLeft.col1.map((item) => (
                          <li key={item}><a href="#services" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                      <ul className="flex flex-col gap-3">
                        {servicesLeft.col2.map((item) => (
                          <li key={item}><a href="#services" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-5 text-sm font-semibold text-text-primary">{servicesRight.title}</h3>
                    <div className="grid grid-cols-2 gap-x-6 border-l border-border/50 pl-5">
                      <ul className="flex flex-col gap-3">
                        {servicesRight.col1.map((item) => (
                          <li key={item}><a href="#services" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                      <ul className="flex flex-col gap-3">
                        {servicesRight.col2.map((item) => (
                          <li key={item}><a href="#services" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              {/* Technologies */}
              <NavDropdown label="Technologies" href="#tech-stack">
                <div className="grid grid-cols-5 gap-8">
                  {[
                    { title: 'Front-end', items: ['React', 'Angular', 'Vue.js', 'JavaScript', 'TypeScript', 'Next.js'] },
                    { title: 'Back-end', items: ['Java', '.NET', 'Python', 'PHP', 'Rust', 'C/C++', 'Node.js', 'Ruby', 'Golang'] },
                    { title: 'Mobile', items: ['iOS', 'Android', 'Flutter', 'React Native', 'Swift', 'Kotlin'] },
                    { title: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
                    { title: 'ERP & CRM', items: ['SAP', 'MS Dynamics 365', 'Odoo', 'Salesforce', 'HubSpot'] },
                  ].map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">{group.title}</h4>
                      <ul className="flex flex-col gap-2.5 border-l border-border/50 pl-4">
                        {group.items.map((item) => (
                          <li key={item}><a href="#tech-stack" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavDropdown>

              {/* Industries */}
              <NavDropdown label="Industries" href="#industries">
                <div className="grid grid-cols-4 gap-8">
                  {[
                    ['Finance', 'Banking', 'Trading', 'Insurance', 'eCommerce', 'Retail'],
                    ['Healthcare', 'Pharmaceutics', 'Education', 'Telecommunications', 'Media & Entertainment'],
                    ['Enterprise', 'Manufacturing', 'Automotive', 'Logistics', 'Transportation', 'Marketing'],
                    ['Government', 'Energy & Utilities', 'Oil & Gas', 'Construction', 'Real Estate', 'Agriculture'],
                  ].map((col, i) => (
                    <ul key={i} className="flex flex-col gap-3">
                      {col.map((item) => (
                        <li key={item}><a href="#work" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                      ))}
                    </ul>
                  ))}
                </div>
              </NavDropdown>

              {/* Portfolio */}
              <NavDropdown label="Portfolio" href="#work">
                <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
                  <div>
                    <h3 className="mb-5 text-sm font-semibold text-text-primary">Case studies</h3>
                    <div className="grid grid-cols-2 gap-x-6 border-l border-border/50 pl-5">
                      <ul className="flex flex-col gap-3">
                        {['Banking', 'Finance', 'Healthcare', 'Pharma'].map((item) => (
                          <li key={item}><a href="#work" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                      <ul className="flex flex-col gap-3">
                        {['eCommerce', 'Retail', 'Manufacturing', 'Enterprise'].map((item) => (
                          <li key={item}><a href="#work" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-5 text-sm font-semibold text-text-primary">Our platforms</h3>
                    <ul className="flex flex-col gap-3 border-l border-border/50 pl-5">
                      {['Applicant tracking system (ATS)', 'HRM system', 'Learning management system (LMS)', 'Workspace booking system'].map((item) => (
                        <li key={item}><a href="#work" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavDropdown>

              {/* Hire us */}
              <NavDropdown label="Hire us" href="#contact">
                <div className="grid grid-cols-4 gap-8">
                  {[
                    { title: 'Dedicated developers', items: ['IT staff augmentation', 'Dedicated teams', 'Offshore developers'] },
                    { title: 'Web developers', items: ['Angular', 'React.js', 'Vue.js', '.NET', 'Java', 'PHP', 'Python', 'Golang'] },
                    { title: 'Mobile developers', items: ['iOS', 'Android', 'Kotlin', 'React Native', 'Swift'] },
                    { title: 'Other engineers', items: ['AI', 'Cloud', 'AWS', 'Azure', 'DevOps', 'QA', 'SAP', 'Salesforce'] },
                  ].map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">{group.title}</h4>
                      <ul className="flex flex-col gap-2.5 border-l border-border/50 pl-4">
                        {group.items.map((item) => (
                          <li key={item}><a href="#contact" className="text-xs text-text-secondary transition-colors hover:text-primary">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavDropdown>
            </nav>
          )}

          {/* Search bar — replaces nav + right actions */}
          {searchOpen && (
            <div className="flex items-center gap-3 flex-1 ml-10 mr-4 max-w-[600px] self-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  onKeyDown={(e) => { if (e.key === 'Escape') setSearchOpen(false); }}
                  className="w-full bg-transparent border-b border-border/50 py-1.5 pr-8 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary transition-colors"
                />
                <button onClick={() => setSearchOpen(false)} className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 text-text-muted transition-colors hover:text-text-primary">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <svg className="h-4 w-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          )}

          {!searchOpen && (
            <div className="flex items-center gap-4 self-center">
              <a
                href="#contact"
                className="hidden lg:flex items-center bg-primary px-5 h-14 text-xs font-medium text-white transition-all duration-200 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
              >
                Contact us
              </a>

              <button onClick={() => setSearchOpen(true)} className="hidden lg:block p-1.5 text-text-secondary transition-colors duration-200 hover:text-text-primary cursor-pointer">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const next = !document.documentElement.classList.contains('dark');
                  document.documentElement.classList.toggle('dark', next);
                  localStorage.setItem('theme', next ? 'dark' : 'light');
                }}
                className="hidden lg:block relative p-1.5 transition-colors text-text-secondary hover:text-text-primary cursor-pointer"
              >
                <div className="relative w-4 h-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity dark:opacity-100 opacity-0">
                    <div className="w-[22px] h-[1.5px] bg-current rotate-45 rounded-full" />
                  </div>
                </div>
              </button>

              <div ref={langRef} className="hidden lg:block relative">
                <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary cursor-pointer">
                  EN
                  <svg className="h-2.5 w-2.5 transition-transform duration-200" style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-4 w-44 dark:bg-[#111116] bg-white border dark:border-white/[0.08] border-black/[0.06] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50 py-3 px-3">
                    <p className="text-[9px] font-mono text-text-muted/40 uppercase tracking-wider mb-2 px-1">Select language</p>
                    <div className="flex flex-col gap-1">
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04] border border-primary/20 bg-primary/[0.03]"><span className="font-semibold text-primary">EN</span><span className="text-text-secondary">English</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">DE</span><span className="text-text-muted">Deutsch</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">FR</span><span className="text-text-muted">Français</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">ES</span><span className="text-text-muted">Español</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">IT</span><span className="text-text-muted">Italiano</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">PT</span><span className="text-text-muted">Português</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">NL</span><span className="text-text-muted">Nederlands</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">PL</span><span className="text-text-muted">Polski</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">SV</span><span className="text-text-muted">Svenska</span></a>
                      <a href="#" className="flex items-center gap-2 px-2.5 py-2 text-xs transition-all duration-200 hover:bg-white/[0.04]"><span className="font-medium text-text-primary">NB</span><span className="text-text-muted">Norsk</span></a>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMobileOpen(true)}
                className="flex items-center justify-center p-2 text-text-secondary lg:hidden"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </motion.header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div >
  );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-surface overflow-y-auto lg:hidden">
      <div className="flex items-center justify-between border-b border-border/50 px-6 py-3">
        <a href="/" className="flex-shrink-0">
          <img src="/logo-b.svg" alt="EllieTech" className="h-7 w-auto dark:hidden" />
          <img src="/logo.svg" alt="EllieTech" className="h-7 w-auto hidden dark:block" />
        </a>
        <button onClick={onClose} className="p-2 text-text-secondary">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="px-6 py-6 space-y-1">
        <a href="/about" className="block py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">About us</a>
        <a href="#services" className="block py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">Services</a>
        <a href="#tech-stack" className="block py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">Technologies</a>
        <a href="#industries" className="block py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">Industries</a>
        <a href="#work" className="block py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">Portfolio</a>
        <a href="#contact" className="flex items-center gap-2 py-3 text-sm text-text-secondary border-b border-border/30 transition-colors active:text-primary">
          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Hire us
        </a>
        <div className="pt-6">
          <a href="#contact" className="block w-full bg-primary py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-light">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
