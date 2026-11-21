import { useEffect, useRef, useState } from 'react';
import { Share2, Download, Check, Sparkles } from 'lucide-react';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface PosterSectionProps {
  t: any;
  lang: string;
}

export default function PosterSection({ t, lang }: PosterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      if (!posterRef.current) return;
      gsap.fromTo(
        posterRef.current,
        { opacity: 0, y: 36, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: posterRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Motion Designer IA — by Elias',
          text:
            lang === 'fr'
              ? 'Crée ton Studio Vidéo Motion Designer IA pour 4 500 FCFA avec APEDO Elias !'
              : 'Create your AI Motion Design Video Studio for 4,500 FCFA with APEDO Elias!',
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="poster"
      ref={sectionRef}
      className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-x-clip"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-[#FFD700]" />
          <span>{lang === 'fr' ? 'Affiche Officielle' : 'Official Visual'}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          {t.poster?.title || (lang === 'fr' ? 'La formation en un coup d’œil' : 'The training at a glance')}
        </h2>

        <p className="text-white/70 text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
          {t.poster?.subtitle ||
            (lang === 'fr'
              ? 'Partage cette affiche avec tes amis entrepreneurs et créateurs de contenu.'
              : 'Share this poster with your fellow entrepreneurs and creators.')}
        </p>

        <div ref={posterRef} className="inline-block relative group max-w-full">
          <div className="relative rounded-3xl overflow-hidden border border-[#FFD700]/30 bg-[#1A2744] shadow-2xl">
            <img
              src="/assets/images/poster.webp"
              width={900}
              height={1125}
              loading="lazy"
              decoding="async"
              alt="Affiche Officielle Formation Motion Designer IA"
              className="max-w-full sm:max-w-md w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-[#0A1628] border border-[#FFD700]/30 font-bold text-sm transition-colors shadow-lg"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>
              {copied
                ? lang === 'fr'
                  ? 'Lien copié dans le presse-papier !'
                  : 'Link copied to clipboard!'
                : lang === 'fr'
                ? 'Partager cette formation'
                : 'Share this training'}
            </span>
          </button>

          <a
            href="/assets/images/poster.jpg"
            download="Formation-Motion-Designer-IA-Elias.jpg"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Télécharger l’affiche' : 'Download poster'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
