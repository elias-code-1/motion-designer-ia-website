import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface VideoCarouselProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

interface VideoItem {
  src: string;
  titleFr: string;
  titleEn: string;
  categoryFr: string;
  categoryEn: string;
  price?: string;
  badgeFr: string;
  badgeEn: string;
  descriptionFr: string;
  descriptionEn: string;
  isVertical?: boolean;
}

const VIDEOS: VideoItem[] = [
  {
    src: '/assets/videos/hero-promo.mp4',
    titleFr: 'Clip Promo Dynamique — By Elias',
    titleEn: 'Dynamic Promo Clip — By Elias',
    categoryFr: 'Showcase Studio By Elias • Format TikTok (9:16)',
    categoryEn: 'Showcase Studio By Elias • TikTok Format (9:16)',
    isVertical: true,
    // No price: personal project
    badgeFr: 'Format TikTok (9:16)',
    badgeEn: 'TikTok Format (9:16)',
    descriptionFr:
      'Animation motion design percutante au format vertical 9:16 (TikTok, Instagram Reels, Shorts) avec kinetic typography, transitions rythmées et sound design immersif.',
    descriptionEn:
      'High-energy vertical 9:16 motion design teaser (TikTok, Instagram Reels, Shorts) with kinetic typography, punchy transitions, and immersive sound design.',
  },
  {
    src: '/assets/videos/video-cafe.mp4',
    titleFr: 'Spot Commercial Café & Food',
    titleEn: 'Commercial Ad — Coffee & Food Brand',
    categoryFr: 'Prestation Client E-Commerce',
    categoryEn: 'Client Commercial Project',
    price: '70 000 FCFA',
    badgeFr: 'Prestation Client',
    badgeEn: 'Client Project',
    descriptionFr:
      'Mise en valeur cinématique d’un produit café : éclairage dynamique, animation 3D réaliste et ambiance sonore premium.',
    descriptionEn:
      'Cinematic coffee product commercial: dynamic lighting, realistic motion, and premium audio branding.',
  },
  {
    src: '/assets/videos/carousel-2.mp4',
    titleFr: 'Alance — Démo Application & Plateforme',
    titleEn: 'Alance — App & Platform Experience',
    categoryFr: 'Showcase Studio By Elias',
    categoryEn: 'Showcase Studio By Elias',
    // No price: personal project
    badgeFr: 'Projet Interne By Elias',
    badgeEn: 'Internal Project By Elias',
    descriptionFr:
      'Présentation vidéo interactive de l’interface web Alance, avec zoom fluide sur les fonctionnalités clés.',
    descriptionEn:
      'Interactive video walkthrough of Alance web interface, featuring smooth camera pans across key features.',
  },
  {
    src: '/assets/videos/carousel-3.mp4',
    titleFr: 'Alance — Teaser Kinetic Typography',
    titleEn: 'Alance — Kinetic Typography Teaser',
    categoryFr: 'Showcase Studio By Elias',
    categoryEn: 'Showcase Studio By Elias',
    // No price: personal project
    badgeFr: 'Showcase Personnel',
    badgeEn: 'Personal Showcase',
    descriptionFr:
      'Animation textuelle ultra-rythmée conçue pour capter et retenir l’attention dès les premières secondes.',
    descriptionEn:
      'Rhythmic kinetic text animation engineered to hook viewers instantly in social media feeds.',
  },
];

export default function VideoCarousel({ lang }: VideoCarouselProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(VIDEOS.map(() => true));
  const [isMuted, setIsMuted] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Entrance GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Slide transition animation
  const animateSlide = useCallback(() => {
    if (!cardRef.current || !detailsRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { scale: 0.96, opacity: 0.8 },
      { scale: 1, opacity: 1, duration: 0.45, ease: 'power2.out' }
    );
    gsap.fromTo(
      detailsRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % VIDEOS.length);
    animateSlide();
  }, [animateSlide]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    animateSlide();
  }, [animateSlide]);

  // Auto-progress timer
  useEffect(() => {
    if (isPausedByUser) return;

    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 7,
          ease: 'none',
          onComplete: () => {
            handleNext();
          },
        }
      );
    }

    return () => {
      if (progressBarRef.current) {
        gsap.killTweensOf(progressBarRef.current);
      }
    };
  }, [current, handleNext, isPausedByUser]);

  const togglePlay = (index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setIsPlaying((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    } else {
      vid.pause();
      setIsPlaying((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = !isMuted;
    });
  };

  return (
    <section
      id="carousel"
      ref={sectionRef}
      onMouseEnter={() => setIsPausedByUser(true)}
      onMouseLeave={() => setIsPausedByUser(false)}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-hidden"
    >
      {/* Background glow & floating elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#FFD700]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-[#FFD700]/10">
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{lang === 'fr' ? 'Showcase & Réalisations' : 'Showcase & Work'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                Ce que tu vas fabriquer{' '}
                <span className="text-[#FFD700]">avec la formation</span>
              </>
            ) : (
              <>
                What you will build{' '}
                <span className="text-[#FFD700]">with the training</span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-base sm:text-lg">
            {lang === 'fr'
              ? '4 créations concrètes produites avec les outils 100% gratuits et la méthode enseignée.'
              : '4 real projects produced with the 100% free tools and step-by-step method.'}
          </p>
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="w-full max-w-md mx-auto h-1.5 bg-white/10 rounded-full overflow-hidden mb-8">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFE033] rounded-full"
            style={{ width: '0%' }}
          />
        </div>

        {/* Carousel Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Active Big Video Showcase (8 Cols) */}
          <div className="lg:col-span-8">
            <div
              ref={cardRef}
              className="relative rounded-3xl overflow-hidden bg-[#0A121E] border-2 border-[#FFD700]/40 shadow-[0_15px_50px_rgba(0,0,0,0.8)] group aspect-video flex items-center justify-center"
            >
              {/* Blurred background backdrop for vertical TikTok videos */}
              {VIDEOS[current].isVertical && (
                <video
                  key={`bg-${VIDEOS[current].src}`}
                  src={VIDEOS[current].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none select-none"
                />
              )}

              {/* Main Player Video */}
              <video
                key={`fg-${VIDEOS[current].src}`}
                ref={(el) => {
                  videoRefs.current[current] = el;
                }}
                src={VIDEOS[current].src}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className={
                  VIDEOS[current].isVertical
                    ? 'relative z-10 h-full max-h-[500px] aspect-[9/16] object-contain rounded-2xl shadow-2xl border border-white/20'
                    : 'w-full h-full object-cover relative z-10'
                }
              />

              {/* Top Controls Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                {VIDEOS[current].isVertical ? (
                  <span className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-pink-500/25 backdrop-blur-md border border-pink-400/50 text-xs font-black text-pink-300 shadow-lg flex items-center gap-1.5">
                    <span>📱</span> {lang === 'en' ? 'TikTok / Reels Format (9:16)' : 'Format TikTok / Reels (9:16)'}
                  </span>
                ) : (
                  <span className="pointer-events-auto px-4 py-1.5 rounded-full bg-[#0A1628]/90 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg">
                    {lang === 'en' ? VIDEOS[current].categoryEn : VIDEOS[current].categoryFr}
                  </span>
                )}

                <button
                  onClick={toggleMute}
                  className="pointer-events-auto p-2.5 rounded-full bg-[#0A1628]/90 backdrop-blur-md border border-white/15 text-white hover:text-[#FFD700] hover:scale-110 transition-all shadow-lg"
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FFD700]" />}
                </button>
              </div>

              {/* Play / Pause Overlay Button on click */}
              <button
                onClick={() => togglePlay(current)}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors z-20"
                aria-label="Play or pause"
              >
                {!isPlaying[current] && (
                  <div className="w-20 h-20 rounded-full bg-[#FFD700] text-[#0A1628] flex items-center justify-center shadow-2xl pl-1 animate-pulse">
                    <Play className="w-9 h-9 fill-current" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Video Metadata Card (4 Cols) */}
          <div
            ref={detailsRef}
            className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#1A2744] border border-white/15 shadow-2xl h-full"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30 text-xs font-black tracking-wide uppercase">
                  {lang === 'en' ? VIDEOS[current].badgeEn : VIDEOS[current].badgeFr}
                </span>
                {VIDEOS[current].isVertical && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[11px] font-black uppercase">
                    📱 9:16 Vertical
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                {lang === 'en' ? VIDEOS[current].titleEn : VIDEOS[current].titleFr}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {lang === 'en' ? VIDEOS[current].descriptionEn : VIDEOS[current].descriptionFr}
              </p>

              {VIDEOS[current].isVertical && (
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-xs text-pink-200/90 mb-4 leading-snug">
                  <span className="font-bold text-pink-300">Format TikTok & Reels :</span>{' '}
                  {lang === 'fr'
                    ? 'Tu apprendras à produire ce format 9:16 optimisé pour exploser sur TikTok, Instagram et Shorts.'
                    : 'You will master producing high-retention 9:16 videos tailored for TikTok, Reels, and Shorts.'}
                </div>
              )}
            </div>

            {/* Price section (ONLY if defined: 70 000 FCFA for video-cafe) */}
            <div className="pt-6 border-t border-white/10">
              {VIDEOS[current].price ? (
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-1">
                    {lang === 'fr' ? 'Facturation Client' : 'Client Invoicing'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                      {VIDEOS[current].price}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50 mt-1">
                    {lang === 'fr'
                      ? 'Tarif standard facturé pour ce type de vidéo'
                      : 'Market standard rate for this caliber of animation'}
                  </p>
                </div>
              ) : (
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#FFD700] font-bold mb-1">
                    {lang === 'fr' ? 'Studio Showcase' : 'Studio Showcase'}
                  </span>
                  <div className="text-xl font-bold text-white">
                    {lang === 'fr' ? 'Création By Elias' : 'Created By Elias'}
                  </div>
                  <p className="text-[11px] text-white/50 mt-1">
                    {lang === 'fr'
                      ? 'Projet de marque personnel (non facturé)'
                      : 'Internal brand asset & portfolio piece'}
                  </p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#FFD700] text-white hover:text-[#0A1628] flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Vidéo précédente"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#FFD700] text-white hover:text-[#0A1628] flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Vidéo suivante"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <span className="text-xs text-[#FFD700] font-mono font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  {current + 1} / {VIDEOS.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Interactive Selector Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {VIDEOS.map((vid, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                animateSlide();
              }}
              className={`p-3.5 rounded-2xl text-left transition-all ${
                current === idx
                  ? 'bg-[#1A2744] border-2 border-[#FFD700] shadow-xl shadow-[#FFD700]/15 scale-[1.03]'
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/30 hover:scale-[1.01]'
              }`}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-2.5 flex items-center justify-center">
                {vid.isVertical && (
                  <video src={vid.src} muted playsInline className="absolute inset-0 w-full h-full object-cover blur-sm opacity-35" />
                )}
                <video
                  src={vid.src}
                  muted
                  playsInline
                  className={
                    vid.isVertical
                      ? 'relative z-10 h-full aspect-[9/16] object-contain opacity-90'
                      : 'w-full h-full object-cover opacity-80'
                  }
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                  <Play className="w-5 h-5 text-white/90" />
                </div>
                {vid.isVertical && (
                  <span className="absolute bottom-1 right-1 z-30 px-1.5 py-0.5 rounded bg-pink-500/90 text-[9px] font-black text-white">
                    9:16 TikTok
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-white truncate">
                {lang === 'en' ? vid.titleEn : vid.titleFr}
              </p>
              <p className="text-[11px] text-[#FFD700] font-semibold mt-0.5">
                {vid.price || (lang === 'fr' ? 'Showcase By Elias' : 'Showcase Elias')}
              </p>
            </button>
          ))}
        </div>

        {/* Carousel Bottom CTA with Direct Payment Link */}
        <div className="text-center pt-4">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-sm sm:text-base text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/25 hover:scale-105 active:scale-95 transition-all"
          >
            <span>{lang === 'fr' ? 'Apprends à créer ces vidéos pour 4 500 FCFA →' : 'Learn to build these videos for 4,500 FCFA →'}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
