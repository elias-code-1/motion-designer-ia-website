import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  t: any;
  lang: string;
  toggleLang?: () => void;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function Navbar({ t, lang, toggleLang }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav?.modules || 'Modules', href: '#modules' },
    { label: lang === 'fr' ? 'Exemples Vidéos' : 'Video Showcase', href: '#carousel' },
    { label: t.nav?.instructor || 'Formateur', href: '#instructor' },
    { label: t.nav?.pricing || 'Tarifs', href: '#pricing' },
    { label: t.nav?.faq || 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top-=80',
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(10,22,40,0.95)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
            borderBottom: '1px solid rgba(255,215,0,0.25)',
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(10,22,40,1)',
            backdropFilter: 'blur(0px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            duration: 0.3,
          });
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      });
    }
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628] border-b border-white/5 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            {/* Modern Motion Studio Emblem */}
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FFE55C] to-[#FFA500] p-[2px] shadow-lg shadow-[#FFD700]/25 group-hover:shadow-[#FFD700]/50 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#0A1628] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 via-transparent to-[#FFD700]/10" />
                <svg
                  className="w-5 h-5 text-[#FFD700] relative z-10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="4" />
                  <path d="M7 3v4" />
                  <path d="M17 3v4" />
                  <path d="M3 7h18" />
                  <polygon points="10 10 15 13 10 16 10 10" fill="currentColor" stroke="currentColor" />
                </svg>
                {/* Sparkling AI Star */}
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-ping" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base md:text-lg tracking-tight leading-tight">
                Motion Designer <span className="text-[#FFD700]">IA</span>
              </span>
              <span className="text-[#FFD700] text-xs font-semibold tracking-wider uppercase opacity-90">
                by APEDO Elias
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white/80 hover:text-[#FFD700] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            {toggleLang && (
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold hover:bg-[#FFD700]/10 transition-all hover:scale-105"
                title="Changer de langue"
              >
                <span>{lang.toUpperCase()}</span>
                <span className="text-white/40">|</span>
                <span className="text-white/70">{lang === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            )}

            {/* Direct Checkout CTA Button */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-lg shadow-[#FFD700]/25 hover:shadow-[#FFD700]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#0A1628]" />
              <span>{t.nav?.cta || "Je m'inscris (4 500 FCFA)"}</span>
              <ArrowRight className="w-4 h-4 text-[#0A1628]" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            {toggleLang && (
              <button
                onClick={toggleLang}
                className="px-2.5 py-1 rounded-full border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold"
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            )}
            <button
              className="text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        ref={mobileMenuRef}
        className="overflow-hidden md:hidden bg-[#0A1628]/95 backdrop-blur-xl border-t border-white/10"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col px-6 py-5 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white/90 hover:text-[#FFD700] text-base font-semibold py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 bg-[#FFD700] text-[#0A1628] font-black text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#FFD700]/20"
            >
              <Sparkles className="w-4 h-4 text-[#0A1628]" />
              <span>{t.nav?.cta || "Je m'inscris (4 500 FCFA)"}</span>
              <ArrowRight className="w-4 h-4 text-[#0A1628]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
