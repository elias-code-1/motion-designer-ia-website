import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalCTAProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function FinalCTA({ lang }: FinalCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Continuous float on Elias photo
      gsap.to(imgRef.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1628] via-[#111f38] to-[#0A1628] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/10 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#1A2744] via-[#142340] to-[#0d1a30] border-2 border-[#FFD700]/50 p-8 sm:p-14 shadow-2xl shadow-[#FFD700]/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column (7 cols) */}
            <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-6 shadow-md shadow-[#FFD700]/10">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span>{lang === 'fr' ? 'Dernière Étape' : 'Final Step'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                {lang === 'fr' ? (
                  <>
                    Qu’est-ce que tu attends pour{' '}
                    <span className="text-[#FFD700]">créer tes propres vidéos ?</span>
                  </>
                ) : (
                  <>
                    What are you waiting for to{' '}
                    <span className="text-[#FFD700]">build your video studio?</span>
                  </>
                )}
              </h2>

              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Arrête de perdre de l’attention avec des images statiques que personne ne regarde. Produis des vidéos motion design percutantes qui captivent tes prospects dès aujourd’hui.'
                  : 'Stop losing attention with static images. Start producing motion design videos that captivate your audience and convert today.'}
              </p>

              {/* Price Callout with 20 000 FCFA crossed out */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 px-6 rounded-2xl bg-[#0A1628] border border-[#FFD700]/40 shadow-xl">
                <div className="relative inline-block">
                  <span className="text-xl sm:text-2xl font-bold text-white/40 tracking-wider">
                    20 000 FCFA
                  </span>
                  <div className="absolute left-0 top-1/2 w-full h-1 bg-red-500 -rotate-6 transform shadow-sm" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                    4 500
                  </span>
                  <span className="text-lg font-extrabold text-[#FFD700]">FCFA</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-500 text-white font-black text-xs uppercase">
                  -77%
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                {/* DIRECT PAYMENT LINK */}
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>
                    {lang === 'fr'
                      ? 'Rejoindre la formation (4 500 FCFA) →'
                      : 'Enroll in the training (4,500 FCFA) →'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/22897347147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-bold text-sm sm:text-base text-white hover:text-[#25D366] bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp : +228 97 34 71 47</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                  <span>Paiement sécurisé Chariow</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FFD700]" />
                  <span>Accès instantané 24h/24</span>
                </div>
              </div>
            </div>

            {/* Elias Image Column (5 cols) Pointing Finger */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-sm flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/20 via-[#0A1628] to-transparent rounded-full blur-2xl opacity-60" />

                <img
                  ref={imgRef}
                  src="/assets/images/elias-pointing-nobg.png"
                  alt="Elias te montre la voie vers le Motion Design IA"
                  className="relative z-10 w-full max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                />

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-[#0A1628]/95 border border-[#FFD700]/50 backdrop-blur-md shadow-2xl text-center whitespace-nowrap">
                  <span className="text-xs font-black text-[#FFD700]">
                    {lang === 'fr' ? '👉 C’est à toi de passer à l’action !' : '👉 It’s your turn to take action!'}
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
