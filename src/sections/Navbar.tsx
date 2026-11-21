import { useEffect, useState } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  t: any;
  lang: string;
  toggleLang?: () => void;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function Navbar({ t, lang, toggleLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t.nav?.modules || 'Modules', href: '#modules' },
    { label: lang === 'fr' ? 'Exemples Vidéos' : 'Video Showcase', href: '#carousel' },
    { label: t.nav?.instructor || 'Formateur', href: '#instructor' },
    { label: t.nav?.pricing || 'Tarifs', href: '#pricing' },
    { label: t.nav?.faq || 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A1628]/95 shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-b border-[#FFD700]/25'
          : 'bg-[#0A1628] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FFE55C] to-[#FFA500] p-[2px] shadow-lg shadow-[#FFD700]/20">
              <div className="w-full h-full bg-[#0A1628] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-5 h-5 text-[#FFD700] relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="4" />
                  <path d="M7 3v4" />
                  <path d="M17 3v4" />
                  <path d="M3 7h18" />
                  <polygon points="10 10 15 13 10 16 10 10" fill="currentColor" stroke="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-white font-extrabold text-sm sm:text-lg tracking-tight leading-tight truncate">
                Motion Designer <span className="text-[#FFD700]">IA</span>
              </span>
              <span className="text-[#FFD700] text-[10px] sm:text-xs font-semibold tracking-wider uppercase opacity-90">
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

            {toggleLang && (
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold hover:bg-[#FFD700]/10 transition-colors"
                title="Changer de langue"
              >
                <span>{lang.toUpperCase()}</span>
                <span className="text-white/40">|</span>
                <span className="text-white/70">{lang === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            )}

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-lg shadow-[#FFD700]/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#0A1628]" />
              <span>{t.nav?.cta || "Je m'inscris (4 500 FCFA)"}</span>
              <ArrowRight className="w-4 h-4 text-[#0A1628]" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2.5 md:hidden shrink-0">
            {toggleLang && (
              <button
                onClick={toggleLang}
                className="px-2.5 py-1 rounded-full border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold"
                aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            )}
            <button
              className="text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 shadow-2xl">
          <div className="flex flex-col px-5 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white/90 hover:text-[#FFD700] text-base font-semibold py-1.5 transition-colors"
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
      )}
    </nav>
  );
}
