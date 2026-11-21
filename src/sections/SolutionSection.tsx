import { useEffect, useRef } from 'react';
import { Sparkles, Layers, Mic2, ArrowRight, Wand2, Globe } from 'lucide-react';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface SolutionSectionProps {
  t: any;
  lang: string;
}

export default function SolutionSection({ lang }: SolutionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -36,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from(imgRef.current, {
        x: 36,
        opacity: 0,
        duration: 0.75,
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

  const features = [
    {
      icon: <Wand2 className="w-6 h-6 text-[#FFD700]" />,
      title:
        lang === 'fr'
          ? '1. Claude (Génère toute la vidéo & SFX)'
          : '1. Claude (Full Video & Sound FX)',
      desc:
        lang === 'fr'
          ? 'Claude génère l’intégralité de la vidéo : toutes les scènes, la kinetic typography, les transitions et TOUS les effets sonores (SFX) sans coder.'
          : 'Claude generates the complete video: all scenes, kinetic typography, transitions, and ALL embedded sound effects (SFX) without coding.',
    },
    {
      icon: <Mic2 className="w-6 h-6 text-[#FFD700]" />,
      title:
        lang === 'fr'
          ? '2. ElevenLabs (La Voix Off Réaliste)'
          : '2. ElevenLabs (Studio-Grade Voiceover)',
      desc:
        lang === 'fr'
          ? 'Génère une voix off humaine ultra-naturelle, expressive et captivante, parfaitement calibrée pour donner vie à ton message.'
          : 'Generates a natural, human-grade, and energetic voiceover with zero robotic artifacts, calibrated to engage viewers.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#FFD700]" />,
      title:
        lang === 'fr'
          ? '3. CapCut (Synchronise la VO & la Vidéo)'
          : '3. CapCut (Syncs VO & Video)',
      desc:
        lang === 'fr'
          ? 'Sert à assembler et synchroniser parfaitement la voix off (VO) sur la vidéo générée par Claude, avec calage millimétré et sous-titres automatiques.'
          : 'Used to seamlessly align and synchronize the voiceover (VO) with Claude’s generated video, with precision timing and auto-captions.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FFD700]" />,
      title:
        lang === 'fr'
          ? '4. Un Navigateur Web (Chrome/Brave)'
          : '4. Web Browser (Chrome/Brave)',
      desc:
        lang === 'fr'
          ? 'Zéro logiciel lourd à installer, zéro carte graphique coûteuse : tout se pilote et s’exécute directement depuis ton navigateur web.'
          : 'Zero heavy software suites to install, zero expensive GPUs required: everything runs and previews directly in your web browser.',
    },
  ];

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#111f38] overflow-x-clip"
    >
      {/* Lightweight radial glows */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.09) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'fr' ? 'La Solution Pratique' : 'The Practical Solution'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {lang === 'fr' ? (
                <>
                  Une méthode pas à pas,{' '}
                  <span className="text-[#FFD700]">testée & validée à l’écran.</span>
                </>
              ) : (
                <>
                  A step-by-step method,{' '}
                  <span className="text-[#FFD700]">screen-recorded live.</span>
                </>
              )}
            </h2>

            <p className="text-white/70 text-sm sm:text-lg mb-8 leading-relaxed">
              {lang === 'fr'
                ? 'Pas de théorie abstraite. Dans cette formation, je te montre exactement comment faire la même chose pour ton activité, étape par étape, en manipulant les vrais outils sous tes yeux.'
                : 'Zero fluff or abstract theory. In this training, I share my screen and build real videos in front of you, from raw prompt to final exported video.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full mb-8">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0A1628]/80 border border-white/10 hover:border-[#FFD700]/40 transition-colors shadow-lg"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#modules"
              className="inline-flex items-center gap-2 text-[#FFD700] hover:text-white font-bold text-sm tracking-wide group transition-colors"
            >
              <span>{lang === 'fr' ? 'Explorer les 6 modules en détail' : 'Explore the 6 modules in detail'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Elias Explaining */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-[#0A1628]/90 p-5 sm:p-6 flex flex-col items-center shadow-2xl">
                <img
                  ref={imgRef}
                  src="/assets/images/elias-explaining-nobg.webp"
                  width={635}
                  height={850}
                  loading="lazy"
                  decoding="async"
                  alt="Elias explique la formation"
                  className="w-auto max-h-[360px] sm:max-h-[440px] object-contain"
                />

                <div className="w-full mt-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <p className="text-sm font-bold text-white mb-0.5">
                    {lang === 'fr' ? '« Je t’accompagne de A à Z »' : '“I guide you from A to Z”'}
                  </p>
                  <p className="text-xs text-[#FFD700]">
                    {lang === 'fr' ? 'Même si tu n’as jamais ouvert un logiciel' : 'Even if you never opened an editor'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
