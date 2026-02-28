// src/components/ui/Navbar.tsx
import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

const navLinks = [
  { name: 'About',    href: '#about-us', sectionId: 'about-us' },
  { name: 'Services', href: '#services', sectionId: 'services' },
  { name: 'Pricing',  href: '#stages',   sectionId: 'stages'   },
  { name: 'Contact',  href: '#contact',  sectionId: 'contact'  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);
  const [activeSection, setActiveSection]   = useState('');
  const [isRevealed, setIsRevealed]         = useState(false);

  useEffect(() => {
    setIsRevealed(true);
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const fromTop = window.scrollY + 140;
      let current = '';
      for (const link of navLinks) {
        const s = document.getElementById(link.sectionId);
        if (s && s.offsetTop <= fromTop) current = link.sectionId;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav 
        className="fixed top-0 inset-x-0 z-[60] navbar-reveal"
        data-revealed={isRevealed ? 'true' : undefined}
      >
        <div
          className={`w-full h-14 md:h-[60px] transition-all duration-300 ${
            isScrolled
              ? 'bg-[#030509]/70 border-b border-white/[0.06] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]'
              : 'bg-transparent border-b border-transparent'
          }`}
        >
          {/* Full-width inner — logo left, nav + cta pushed right */}
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full h-full flex items-center">

            {/* Logo — left anchored */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <img
                src="/img/logo.webp"
                alt="JECOFX Logo"
                width={28}
                height={28}
                decoding="async"
                className="h-6 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span className="font-black text-[15px] tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                JECOFX
              </span>
            </a>

            {/* Spacer pushes everything right */}
            <div className="flex-1" />

            {/* Desktop nav links — right side */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === link.sectionId
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/90'
                  }`}
                >
                  {link.name}
                  {/* Active underline dot */}
                  {activeSection === link.sectionId && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4a7cf7]" />
                  )}
                </a>
              ))}

              {/* Divider */}
              <div className="w-px h-4 bg-white/10 mx-3" />

              {/* Enroll CTA */}
              <a
                href="#stages"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
              >
                Enroll Now
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative h-9 w-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/8 transition-colors duration-200"
              onClick={() => setMobileMenu(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[65] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenu(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#07090f]/95 border-t border-x border-white/[0.07] rounded-t-[20px] backdrop-blur-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-5 pt-3 pb-8 flex flex-col">
            {/* Handle */}
            <div className="mx-auto mb-5 h-[3px] w-9 rounded-full bg-white/15" />

            {/* Label */}
            <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/25 mb-3 px-1">
              Navigation
            </p>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[13px] font-medium transition-all duration-200 active:scale-[0.98] ${
                    activeSection === link.sectionId
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="tracking-[0.06em] uppercase text-[11px] font-bold">{link.name}</span>
                  <svg className="h-3.5 w-3.5 text-white/25" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <path d="M6 3l5 5-5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}

              <div className="h-px bg-white/[0.06] my-2" />

              <a
                href="#stages"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
              >
                Enroll Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
