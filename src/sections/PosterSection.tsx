import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Share2, Download, Check, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PosterSectionProps {
  t: any;
  lang: string;
}

export default function PosterSection({ t, lang }: PosterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!posterRef.current) return;
      gsap.fromTo(
        posterRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: posterRef.current,
            start: 'top 80%',
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-[#FFD700]" />
          <span>{lang === 'fr' ? 'Affiche Officielle' : 'Official Visual'}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          {t.poster?.title || (lang === 'fr' ? 'La formation en un coup d’œil' : 'The training at a glance')}
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">
          {t.poster?.subtitle ||
            (lang === 'fr'
              ? 'Partage cette affiche avec tes amis entrepreneurs et créateurs de contenu.'
              : 'Share this poster with your fellow entrepreneurs and creators.')}
        </p>

        {/* Poster Image Container */}
        <div ref={posterRef} className="inline-block relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#FFD700]/30 via-blue-600/20 to-[#FFD700]/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative rounded-3xl overflow-hidden border border-[#FFD700]/30 bg-[#1A2744] shadow-2xl">
            <img
              src="/assets/images/poster.png"
              alt="Affiche Officielle Formation Motion Designer IA"
              className="max-w-full sm:max-w-md w-full object-contain hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Actions row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-[#0A1628] border border-[#FFD700]/30 font-bold text-sm transition-all shadow-lg hover:scale-105"
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
            href="/assets/images/poster.png"
            download="Formation-Motion-Designer-IA-Elias.png"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Télécharger l’affiche' : 'Download poster'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
