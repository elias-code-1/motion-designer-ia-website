import { useEffect, useRef } from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, MessageCircle, Star, Sparkles } from 'lucide-react';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface HeroProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function Hero({ t, lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLImageElement>(null);
  const floatPill1 = useRef<HTMLDivElement>(null);
  const floatPill2 = useRef<HTMLDivElement>(null);
  const floatPill3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 })
        .fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.25')
        .fromTo(textRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, '-=0.35')
        .fromTo(priceRef.current, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45 }, '-=0.25')
        .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2')
        .fromTo(trustRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2')
        .fromTo(
          photoWrapperRef.current,
          { x: 30, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.55'
        );

      // Gentle ambient float on desktop only
      gsap.to(photoImgRef.current, {
        y: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(floatPill1.current, {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(floatPill2.current, {
        y: 10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.4,
      });
      gsap.to(floatPill3.current, {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToCarousel = () => {
    const el = document.querySelector('#carousel');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90svh] pt-24 pb-14 md:pt-32 md:pb-20 flex items-center overflow-x-clip bg-[#0A1628]"
    >
      {/* Lightweight CSS radial glows (zero GPU blur filter cost) */}
      <div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] md:w-[640px] md:h-[640px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.14) 0%, rgba(255,215,0,0) 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[380px] h-[380px] md:w-[600px] md:h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0) 70%)',
        }}
      />

      {/* Subtle grid dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,215,0,0.2) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-[11px] sm:text-sm font-bold tracking-wide uppercase mb-5 shadow-lg shadow-[#FFD700]/10"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]" />
              </span>
              <span>{t.hero?.badge || '🎬 Formation Motion Design IA'}</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white/90 font-medium hidden sm:inline">APEDO Elias</span>
            </div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-4"
            >
              {lang === 'fr' ? (
                <>
                  Crée ton Studio Vidéo{' '}
                  <span className="block mt-1.5 bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#FFA500] bg-clip-text text-transparent">
                    Motion Designer IA
                  </span>
                </>
              ) : (
                <>
                  Build Your Video Studio{' '}
                  <span className="block mt-1.5 bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#FFA500] bg-clip-text text-transparent">
                    AI Motion Designer
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle / Hook */}
            <p className="text-lg sm:text-2xl font-black text-[#FFD700] mb-3.5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFD700] shrink-0" />
              <span>{t.hero?.subtitle || 'Deviens libre grâce à l’IA !'}</span>
            </p>

            <p
              ref={textRef}
              className="text-sm sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-6"
            >
              {lang === 'fr'
                ? 'Fabrique des vidéos motion design de niveau agence avec des outils 100% gratuits, sans savoir monter, depuis ton ordinateur ou smartphone en quelques minutes.'
                : 'Create agency-level motion design videos with 100% free AI tools, without editing skills, directly from your computer in just minutes.'}
            </p>

            {/* Price Box */}
            <div
              ref={priceRef}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1A2744] via-[#142340] to-[#1A2744] border-2 border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/10 mb-6 sm:mb-8 w-full max-w-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#FFD700] font-black">
                  {lang === 'fr' ? '⚡ OFFRE SPÉCIALE DE LANCEMENT' : '⚡ SPECIAL LAUNCH OFFER'}
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-500 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-lg">
                  -77% RÉDUCTION
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 mt-1">
                <div className="relative inline-block">
                  <span className="text-xl sm:text-3xl font-extrabold text-white/40 tracking-wider">
                    20 000 FCFA
                  </span>
                  <div className="absolute left-0 top-1/2 w-full h-1 bg-red-500 -rotate-6 transform" />
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFD700]">
                    4 500
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#FFD700]">FCFA</span>
                </div>
              </div>

              <p className="text-xs text-white/65 mt-2 font-medium">
                {lang === 'fr'
                  ? 'Accès immédiat et illimité à vie • Zéro abonnement payant'
                  : 'Immediate lifetime unlimited access • Zero recurring fees'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8"
            >
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-full font-black text-sm sm:text-lg text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/25 hover:scale-[1.03] active:scale-95 transition-all duration-200"
              >
                <span>{lang === 'fr' ? 'Je veux apprendre (4 500 FCFA)' : 'Enroll Now (4,500 FCFA)'}</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={scrollToCarousel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white hover:text-[#FFD700] bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 transition-colors"
              >
                <Play className="w-4 h-4 fill-current shrink-0" />
                <span>{t.hero?.ctaSecondary || 'Voir les vidéos créées'}</span>
              </button>
            </div>

            {/* Featured AI & Tools Stack */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 mb-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FFD700] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                  {lang === 'fr' ? 'La Stack d’Outils IA 100% Gratuits :' : '100% Free AI & Tool Stack:'}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  {lang === 'fr' ? 'Zéro Logiciel Payant' : '$0 Software Fees'}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded-xl bg-[#0A1628]/90 border border-amber-500/30 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-black text-white">Claude</span>
                  </div>
                  <span className="text-[10px] text-amber-200/90 font-semibold leading-tight">
                    {lang === 'fr' ? 'Génère toute la vidéo & SFX' : 'Generates full video & SFX'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0A1628]/90 border border-blue-500/30 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-xs font-black text-white">ElevenLabs</span>
                  </div>
                  <span className="text-[10px] text-blue-200/90 font-semibold leading-tight">
                    {lang === 'fr' ? 'Génère la voix off réaliste' : 'Studio-grade voiceover'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0A1628]/90 border border-emerald-500/30 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-black text-white">CapCut</span>
                  </div>
                  <span className="text-[10px] text-emerald-200/90 font-semibold leading-tight">
                    {lang === 'fr' ? 'Synchronise la VO & la vidéo' : 'Syncs voiceover & video'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0A1628]/90 border border-purple-500/30 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-xs font-black text-white">{lang === 'fr' ? 'Navigateur' : 'Web Browser'}</span>
                  </div>
                  <span className="text-[10px] text-purple-200/90 font-semibold leading-tight">
                    {lang === 'fr' ? 'Exécute sans logiciel lourd' : 'Runs all directly in browser'}
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div
              ref={trustRef}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/80 font-medium leading-tight">
                  {lang === 'fr' ? 'Paiement Chariow' : 'Secure Chariow'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/80 font-medium leading-tight">
                  {lang === 'fr' ? 'Accès Immédiat' : 'Instant Access'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] shrink-0" />
                <span className="text-[11px] sm:text-xs text-white/80 font-medium leading-tight">
                  {lang === 'fr' ? 'Support WhatsApp' : 'WhatsApp Support'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Elias Cutout Photo */}
          <div
            ref={photoWrapperRef}
            className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0 pb-6 sm:pb-8 lg:pb-0"
          >
            {/* Lightweight radial halo */}
            <div
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,215,0,0.22) 0%, rgba(37,99,235,0.12) 45%, transparent 72%)',
              }}
            />
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-[#FFD700]/25 pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-md flex flex-col items-center">
              <div className="relative z-10 w-full flex justify-center">
                <img
                  ref={photoImgRef}
                  src="/assets/images/elias-pointing-nobg.webp"
                  width={672}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  alt="APEDO Elias - Formateur Motion Designer IA"
                  className="w-auto max-h-[380px] sm:max-h-[500px] object-contain select-none pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Floating Pill 1: 6 Modules */}
              <div
                ref={floatPill1}
                className="absolute top-4 left-0 sm:top-8 sm:-left-6 z-30 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#0A1628]/95 border border-[#FFD700]/50 shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FFD700]/20 flex items-center justify-center text-sm sm:text-base shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-white leading-tight">
                    {lang === 'fr' ? '6 Modules Clés' : '6 Turnkey Modules'}
                  </p>
                  <p className="text-[10px] text-[#FFD700] font-semibold">
                    {lang === 'fr' ? '100% Pratique (~41 min)' : '100% Hands-On (~41 min)'}
                  </p>
                </div>
              </div>

              {/* Floating Pill 2: Outils Gratuits */}
              <div
                ref={floatPill2}
                className="absolute bottom-12 right-0 sm:bottom-16 sm:-right-6 z-30 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#0A1628]/95 border border-emerald-500/50 shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm sm:text-base shrink-0">
                  🎯
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-white leading-tight">
                    {lang === 'fr' ? 'Outils 100% Gratuits' : '100% Free Tool Stack'}
                  </p>
                  <p className="text-[10px] text-emerald-400 font-semibold">
                    Claude • ElevenLabs • CapCut
                  </p>
                </div>
              </div>

              {/* Floating Pill 3: Formateur badge */}
              <div
                ref={floatPill3}
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#1A2744] border border-[#FFD700]/40 shadow-xl flex items-center gap-2 whitespace-nowrap"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFD700] text-[#0A1628] font-black text-[10px] sm:text-xs flex items-center justify-center">
                  AE
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-white">APEDO Elias</span>
                <span className="text-white/40">•</span>
                <div className="flex items-center gap-1 text-[#FFD700]">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  <span className="text-[11px] sm:text-xs font-bold text-white">
                    {lang === 'fr' ? 'Formateur' : 'Expert'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
