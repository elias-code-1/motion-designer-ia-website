import { useEffect, useRef } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface ProblemSectionProps {
  t: any;
  lang: string;
}

export default function ProblemSection({ lang }: ProblemSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from([card1Ref.current, card2Ref.current], {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from(imgRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-x-clip"
    >
      {/* Lightweight radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(153,27,27,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>{lang === 'fr' ? 'Le Constat Réel' : 'The Real Struggle'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                Tes publications se perdent dans le fil ?{' '}
                <span className="text-[#FFD700]">L’image fixe est morte.</span>
              </>
            ) : (
              <>
                Are your posts getting lost in the feed?{' '}
                <span className="text-[#FFD700]">Static images are dead.</span>
              </>
            )}
          </h2>
          <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
            {lang === 'fr'
              ? 'Sur TikTok, Instagram, Facebook ou LinkedIn, une image passe inaperçue en 2 secondes. Une vidéo animée avec du son, du mouvement et du rythme arrête le pouce net.'
              : 'On TikTok, Instagram, Facebook or LinkedIn, a static picture is scrolled past in 2 seconds. An animated video with motion, voiceover, and sound effects stops the thumb.'}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 sm:mb-16">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#131f33] border border-red-500/20 shadow-xl relative"
          >
            <div className="inline-block sm:absolute sm:top-4 sm:right-4 mb-3 sm:mb-0 px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-extrabold text-xs">
              {lang === 'fr' ? 'La galère classique' : 'The Old Way'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">❌</span>
              <span>{lang === 'fr' ? 'Prestataires & Logiciels lourds' : 'Agencies & Heavy Softwares'}</span>
            </h3>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/80">
                  {lang === 'fr'
                    ? 'Un prestataire facture entre 60 000 FCFA et 200 000 FCFA par seule vidéo.'
                    : 'Agencies charge $100 to $300 for a single short animated video.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/80">
                  {lang === 'fr'
                    ? 'After Effects & Premiere demandent des mois d’apprentissage complexe.'
                    : 'Traditional software requires months of painful tutorials and steep learning curves.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/80">
                  {lang === 'fr'
                    ? 'Délais interminables : 5 à 10 jours d’aller-retours pour 20 secondes.'
                    : 'Endless delays: 5 to 10 days of back-and-forth for a 20-second clip.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/80">
                  {lang === 'fr'
                    ? 'Budget marketing épuisé avant même d’avoir testé tes offres.'
                    : 'Marketing budget drained before you can even test your offers.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Center Column: Elias Thinking */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative">
            <div className="relative w-44 sm:w-48 lg:w-56 flex flex-col items-center">
              <img
                ref={imgRef}
                src="/assets/images/elias-thinking-nobg.webp"
                width={523}
                height={700}
                loading="lazy"
                decoding="async"
                alt="Elias - Pourquoi payer une fortune ?"
                className="w-full h-auto object-contain"
              />
              <div className="text-center mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30 text-xs font-bold">
                  {lang === 'fr' ? 'Et si tu pouvais faire mieux ?' : 'What if you could do it yourself?'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A2744] to-[#12233f] border border-[#FFD700]/40 shadow-2xl relative"
          >
            <div className="inline-block sm:absolute sm:top-4 sm:right-4 mb-3 sm:mb-0 px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] font-black text-xs">
              {lang === 'fr' ? 'La Révolution IA' : 'The AI Method'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">✨</span>
              <span>{lang === 'fr' ? 'Studio Motion Design IA' : 'AI Motion Design Studio'}</span>
            </h3>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white">
                  {lang === 'fr'
                    ? 'Zéro logiciel payant : uniquement des outils gratuits et accessibles.'
                    : 'Zero paid software: only free and highly accessible AI tools.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white">
                  {lang === 'fr'
                    ? 'Vidéos prêtes en quelques minutes depuis ton simple ordinateur.'
                    : 'Videos ready in minutes straight from your regular laptop.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white">
                  {lang === 'fr'
                    ? 'Voix off ultra-réaliste, sound design et animations synchronisées.'
                    : 'Hyper-realistic voiceovers, sound design, and perfectly synced animations.'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-bold text-[#FFD700]">
                  {lang === 'fr'
                    ? 'Formation complète à 4 500 FCFA une fois pour toutes.'
                    : 'Full training for just 4,500 FCFA once and for all.'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-[#1A2744] to-blue-900/30 border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-xl font-bold text-white mb-1">
              {lang === 'fr'
                ? 'Une seule vidéo produite rentabilise immédiatement la formation.'
                : 'Just one produced video pays for the entire course immediately.'}
            </h4>
            <p className="text-sm text-white/60">
              {lang === 'fr' ? 'Tu économises dès le premier jour.' : 'You save money from day one.'}
            </p>
          </div>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0A1628] text-white font-bold text-sm transition-colors shrink-0"
          >
            <span>{lang === 'fr' ? 'Découvrir la solution' : 'See the solution'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
