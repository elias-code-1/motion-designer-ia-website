import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { getNextIndex, getPrevIndex } from '../utils/carousel';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface VideoCarouselProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

interface VideoItem {
  src: string;
  thumb: string;
  titleFr: string;
  titleEn: string;
  categoryFr: string;
  categoryEn: string;
  badgeFr: string;
  badgeEn: string;
  descriptionFr: string;
  descriptionEn: string;
  isVertical?: boolean;
}

const VIDEOS: VideoItem[] = [
  {
    src: '/assets/videos/hero-promo.mp4',
    thumb: '/assets/images/thumb-hero-promo.webp',
    titleFr: 'Clip Promo Dynamique — By Elias',
    titleEn: 'Dynamic Promo Clip — By Elias',
    categoryFr: 'Showcase Studio By Elias • Format TikTok (9:16)',
    categoryEn: 'Showcase Studio By Elias • TikTok Format (9:16)',
    isVertical: true,
    badgeFr: 'Format TikTok (9:16)',
    badgeEn: 'TikTok Format (9:16)',
    descriptionFr:
      'Animation motion design percutante au format vertical 9:16 (TikTok, Instagram Reels, Shorts) avec kinetic typography, transitions rythmées et sound design immersif.',
    descriptionEn:
      'High-energy vertical 9:16 motion design teaser (TikTok, Instagram Reels, Shorts) with kinetic typography, punchy transitions, and immersive sound design.',
  },
  {
    src: '/assets/videos/carousel-3.mp4',
    thumb: '/assets/images/thumb-carousel-3.webp',
    titleFr: 'Alance — Teaser Kinetic Typography',
    titleEn: 'Alance — Kinetic Typography Teaser',
    categoryFr: 'Showcase Studio By Elias',
    categoryEn: 'Showcase Studio By Elias',
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
  const progressBarRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Track visibility so videos and timers only run when section is near viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '150px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Desktop-only entrance animation
  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => getNextIndex(prev, VIDEOS.length));
    setIsPlaying(true);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => getPrevIndex(prev, VIDEOS.length));
    setIsPlaying(true);
  }, []);

  // Auto-progress bar only runs when carousel is in view and not paused
  useEffect(() => {
    const bar = progressBarRef.current;
    if (!bar) return;

    if (isPausedByUser || !isInView) {
      gsap.killTweensOf(bar);
      return;
    }

    gsap.fromTo(
      bar,
      { width: '0%' },
      {
        width: '100%',
        duration: 7,
        ease: 'none',
        onComplete: handleNext,
      }
    );

    return () => {
      gsap.killTweensOf(bar);
    };
  }, [current, handleNext, isPausedByUser, isInView]);

  // Pause/play video automatically based on visibility
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isInView && isPlaying) {
      vid.play().catch(() => {});
    } else if (!isInView && !vid.paused) {
      vid.pause();
    }
  }, [isInView, current, isPlaying]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
      setIsPausedByUser(true);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  const activeVideo = VIDEOS[current];

  return (
    <section
      id="carousel"
      ref={sectionRef}
      onMouseEnter={() => setIsPausedByUser(true)}
      onMouseLeave={() => setIsPausedByUser(false)}
      className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-x-clip"
    >
      {/* Lightweight radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{lang === 'fr' ? 'Showcase & Réalisations' : 'Showcase & Work'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
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

          <p className="text-white/70 text-sm sm:text-lg">
            {lang === 'fr'
              ? `${VIDEOS.length} créations concrètes produites avec les outils 100% gratuits et la méthode enseignée.`
              : `${VIDEOS.length} real projects produced with the 100% free tools and step-by-step method.`}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto h-1.5 bg-white/10 rounded-full overflow-hidden mb-6 sm:mb-8">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFE033] rounded-full"
            style={{ width: '0%' }}
          />
        </div>

        {/* Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10">
          {/* Active Video Player (single video element at a time) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A121E] border-2 border-[#FFD700]/40 shadow-2xl aspect-video flex items-center justify-center">
              {/* Static CSS backdrop for vertical 9:16 videos (replaces 2nd heavy video decoder) */}
              {activeVideo.isVertical && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(255,215,0,0.16) 0%, rgba(15,23,42,0.95) 65%)',
                  }}
                />
              )}

              <video
                key={activeVideo.src}
                ref={videoRef}
                src={activeVideo.src}
                poster={activeVideo.thumb}
                preload="metadata"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className={
                  activeVideo.isVertical
                    ? 'relative z-10 h-full max-h-[500px] aspect-[9/16] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/20'
                    : 'w-full h-full object-cover relative z-10'
                }
              />

              {/* Top Controls Overlay */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
                {activeVideo.isVertical ? (
                  <span className="pointer-events-auto px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0A1628]/90 border border-pink-400/50 text-[11px] sm:text-xs font-black text-pink-300 shadow-lg flex items-center gap-1.5">
                    <span>📱</span> {lang === 'en' ? 'TikTok / Reels (9:16)' : 'Format TikTok / Reels (9:16)'}
                  </span>
                ) : (
                  <span className="pointer-events-auto px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0A1628]/90 border border-white/15 text-[11px] sm:text-xs font-bold text-white shadow-lg">
                    {lang === 'en' ? activeVideo.categoryEn : activeVideo.categoryFr}
                  </span>
                )}

                <button
                  onClick={toggleMute}
                  className="pointer-events-auto p-2.5 rounded-full bg-[#0A1628]/90 border border-white/15 text-white hover:text-[#FFD700] transition-colors shadow-lg"
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FFD700]" />}
                </button>
              </div>

              {/* Play / Pause Click Area */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors z-15"
                aria-label="Play or pause"
              >
                {!isPlaying && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD700] text-[#0A1628] flex items-center justify-center shadow-2xl pl-1">
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Metadata Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#1A2744] border border-white/15 shadow-2xl h-full">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30 text-xs font-black tracking-wide uppercase">
                  {lang === 'en' ? activeVideo.badgeEn : activeVideo.badgeFr}
                </span>
                {activeVideo.isVertical && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[11px] font-black uppercase">
                    📱 9:16 Vertical
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-white mb-3">
                {lang === 'en' ? activeVideo.titleEn : activeVideo.titleFr}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-5">
                {lang === 'en' ? activeVideo.descriptionEn : activeVideo.descriptionFr}
              </p>

              {activeVideo.isVertical && (
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-xs text-pink-200/90 mb-4 leading-snug">
                  <span className="font-bold text-pink-300">Format TikTok & Reels :</span>{' '}
                  {lang === 'fr'
                    ? 'Tu apprendras à produire ce format 9:16 optimisé pour exploser sur TikTok, Instagram et Shorts.'
                    : 'You will master producing high-retention 9:16 videos tailored for TikTok, Reels, and Shorts.'}
                </div>
              )}
            </div>

            <div className="pt-5 border-t border-white/10">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#FFD700] font-bold mb-1">
                  Studio Showcase
                </span>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {lang === 'fr' ? 'Création By Elias' : 'Created By Elias'}
                </div>
                <p className="text-[11px] text-white/50 mt-1">
                  {lang === 'fr'
                    ? 'Réalisé avec Claude, ElevenLabs & CapCut'
                    : 'Built with Claude, ElevenLabs & CapCut'}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#FFD700] text-white hover:text-[#0A1628] flex items-center justify-center transition-colors"
                    aria-label="Vidéo précédente"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-[#FFD700] text-white hover:text-[#0A1628] flex items-center justify-center transition-colors"
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

        {/* Selector Cards using lightweight WebP thumbnails (zero extra video decoders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-3.5 sm:gap-4 mb-8 sm:mb-10">
          {VIDEOS.map((vid, idx) => (
            <button
              key={vid.src}
              onClick={() => {
                setCurrent(idx);
                setIsPlaying(true);
              }}
              className={`p-3 rounded-2xl text-left transition-all flex sm:block items-center gap-3 ${
                current === idx
                  ? 'bg-[#1A2744] border-2 border-[#FFD700] shadow-xl shadow-[#FFD700]/10'
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/30'
              }`}
            >
              <div className="relative w-28 sm:w-full shrink-0 aspect-video rounded-xl overflow-hidden bg-black sm:mb-2.5 flex items-center justify-center">
                <img
                  src={vid.thumb}
                  width={320}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  alt={lang === 'en' ? vid.titleEn : vid.titleFr}
                  className={
                    vid.isVertical
                      ? 'h-full w-auto object-contain opacity-90'
                      : 'w-full h-full object-cover opacity-85'
                  }
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white/95" />
                </div>
                {vid.isVertical && (
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-pink-500/90 text-[9px] font-black text-white">
                    9:16
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-white truncate">
                  {lang === 'en' ? vid.titleEn : vid.titleFr}
                </p>
                <p className="text-[11px] text-[#FFD700] font-semibold mt-0.5">
                  {lang === 'fr' ? 'Showcase By Elias' : 'Showcase Elias'}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-2">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-full font-black text-sm sm:text-base text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/25 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <span>
              {lang === 'fr'
                ? 'Apprends à créer ces vidéos (4 500 FCFA)'
                : 'Learn to build these videos (4,500 FCFA)'}
            </span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
