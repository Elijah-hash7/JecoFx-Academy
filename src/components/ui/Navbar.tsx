// src/components/ui/Navbar.tsx
import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import useIsOverDarkHero from './useIsOverDarkHero';

const navLinks = [
    { name: 'About Us', href: '#about-us', sectionId: 'about-us' },
    { name: 'Services', href: '#services', sectionId: 'services' },
    { name: 'Pricing', href: '#stages', sectionId: 'stages' },
    { name: 'Contact Us', href: '#contact', sectionId: 'contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const isOverDarkHero = useIsOverDarkHero('section');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);

            // Scrollspy: mark active section in viewport.
            const fromTop = window.scrollY + 140;
            let current = '';
            for (const link of navLinks) {
                const section = document.getElementById(link.sectionId);
                if (!section) continue;
                if (section.offsetTop <= fromTop) {
                    current = link.sectionId;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine the color of text/icons based on scroll and hero state
    const isDarkTheme = isScrolled || isOverDarkHero;

    return (
        <>
            <nav className="fixed top-0 inset-x-0 z-[60] bg-transparent">
                <div
                    className={`w-full py-2 md:py-2 transition-all duration-300 border ${isScrolled
                        ? 'bg-black/20 border-white/10 backdrop-blur-md'
                        : 'bg-transparent border-transparent backdrop-blur-0'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                            <img
                                src="/img/logo.webp"
                                alt="Logo"
                                width={164}
                                height={32}
                                decoding="async"
                                className={`h-8 w-auto transition-[filter] duration-300 ${isDarkTheme ? '' : 'brightness-0 saturate-100'}`}
                            />
                            <span className={`font-black text-base md:text-lg tracking-[0.08em] leading-none transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>JECOFX</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center ml-auto gap-1 rounded-full px-1 py-1 transition-all duration-300">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-[15px] font-semibold tracking-[0.02em] transition-all duration-200 ${activeSection === link.sectionId
                                        ? 'bg-white/12 text-white'
                                        : isScrolled
                                            ? 'text-white/90 hover:text-white hover:bg-white/10'
                                            : isOverDarkHero
                                                ? 'text-white/90 hover:text-white hover:bg-white/10'
                                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* PREMIUM ANIMATED HAMBURGER MENU */}
                        <button
                            className={`md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-[5px] rounded-full transition-colors duration-300 ${isDarkTheme ? 'hover:bg-white/10' : 'hover:bg-slate-900/5'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-out ${isDarkTheme ? 'bg-white' : 'bg-slate-900'} ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-out ${isDarkTheme ? 'bg-white' : 'bg-slate-900'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ease-out ${isDarkTheme ? 'bg-white' : 'bg-slate-900'} ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay + Premium Slide Panel */}
            <div
                className={`md:hidden fixed inset-0 z-[65] transition-opacity duration-400 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {/* Background Dimmer */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                
                {/* Bottom Sheet Container */}
                <div
                    style={{
                        '--sheet-bg': '#FAFAFB',
                        '--sheet-border': 'rgba(203, 213, 225, 0.7)',
                        '--sheet-handle': 'rgba(148, 163, 184, 0.45)',
                    } as CSSProperties}
                    className={`absolute bottom-0 left-0 right-0 rounded-t-[20px] border-t border-x text-slate-900 shadow-[0_-18px_46px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                    aria-label="Mobile navigation sheet"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-[var(--sheet-bg)]/95 border-t border-x border-[var(--sheet-border)] rounded-t-[20px] px-6 pt-2.5 pb-5 flex flex-col">
                        {/* Interactive Drag Handle Indicator */}
                        <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-[var(--sheet-handle)]" />
                        
                        {/* Navigation Links */}
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-slate-200/40 hover:text-slate-900 transition-all duration-200 active:scale-[0.98]"
                                >
                                    <span>{link.name}</span>
                                    <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M7 4l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
