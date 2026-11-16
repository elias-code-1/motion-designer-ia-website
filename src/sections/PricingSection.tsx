import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, MessageCircle, Star, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PricingSectionProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function PricingSection({ t, lang }: PricingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Chariow widget script and CSS if not present
    if (!document.querySelector('script[src*="chariowcdn"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.chariowcdn.com/v1/widget.min.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://js.chariowcdn.com/v1/widget.min.css';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardRef.current) return;
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features =
    lang === 'en'
      ? [
          '6 Complete Video Modules (~41 min hands-on)',
          'Claude: Generates Full Video & Sound FX (SFX)',
          'ElevenLabs: Realistic Voiceover Studio',
          'CapCut: Millisecond VO & Video Sync',
          'Battle-tested AI Prompts Pack',
          'Master Production Checklist',
          'Direct 1-on-1 WhatsApp Support with Elias',
          'Official Completion Certificate',
        ]
      : [
          '6 Modules Vidéo Complets (~41 min de pratique)',
          'Claude : Génère toute la vidéo & effets sonores (SFX)',
          'ElevenLabs : Voix off ultra-réaliste',
          'CapCut : Synchronisation millimétrée VO & vidéo',
          'Pack de Prompts IA pré-testés',
          'Checklist de Production pas à pas',
          'Assistance directe WhatsApp avec Elias',
          'Attestation de complétion officielle',
        ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#111f38] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#FFD700]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-[#FFD700]/10">
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>{t.pricing?.badge || (lang === 'fr' ? 'Tarif Unique' : 'Single Price')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {t.pricing?.title ||
              (lang === 'fr'
                ? 'Une seule offre, tout inclus à vie'
                : 'One single offer, all included for life')}
          </h2>

          <p className="text-white/70 text-base sm:text-lg">
            {t.pricing?.subtitle ||
              (lang === 'fr'
                ? 'Moins cher qu’une seule vidéo chez un prestataire (qui coûte 60 000 FCFA+).'
                : 'Far cheaper than paying an agency $100+ for a single clip.')}
          </p>
        </div>

        {/* Master Pricing Card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-[#0A1628] border-2 border-[#FFD700]/60 shadow-[0_0_80px_rgba(255,215,0,0.18)] p-6 sm:p-10"
        >
          {/* Top Pill */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFE033] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span>
              {lang === 'fr'
                ? 'Offre de Lancement — 30 Premiers Inscrits'
                : 'Launch Special — First 30 Members'}
            </span>
          </div>

          {/* Pricing Row with prominent 20 000 FCFA crossed out */}
          <div className="text-center pt-6 pb-6 border-b border-white/10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="relative inline-block">
                <span className="text-2xl sm:text-3xl font-black text-white/40 tracking-wider">
                  20 000 FCFA
                </span>
                <span className="absolute left-0 top-1/2 w-full h-1.5 bg-red-500 -rotate-6 transform shadow-sm" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-red-500 text-white font-black text-xs uppercase tracking-wider shadow-lg animate-pulse">
                -77% RÉDUCTION
              </span>
            </div>

            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-5xl sm:text-7xl font-black text-[#FFD700] tracking-tight drop-shadow-[0_0_35px_rgba(255,215,0,0.4)]">
                4 500
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#FFD700]">FCFA</span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 mt-2 font-medium">
              {lang === 'fr'
                ? 'Paiement unique • Accès immédiat illimité à vie • Zéro abonnement'
                : 'One-time payment • Immediate lifetime access • Zero monthly fees'}
            </p>
          </div>

          {/* Features Grid */}
          <div className="py-8">
            <p className="text-xs uppercase font-extrabold tracking-wider text-[#FFD700] mb-4">
              {lang === 'fr' ? 'Inclus dans ton accès immédiat :' : 'Included in your immediate access:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-white/95 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Direct CTA Button */}
          <div className="pt-6 border-t border-white/10 flex flex-col items-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-lg py-4 sm:py-5 px-8 rounded-full font-black text-base sm:text-xl text-[#0A1628] bg-gradient-to-r from-[#FFD700] via-[#FFE033] to-[#FFD700] hover:from-[#FFE033] hover:to-[#FFD700] shadow-2xl shadow-[#FFD700]/30 hover:shadow-[#FFD700]/50 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-6"
            >
              <span>{lang === 'fr' ? 'Acheter Maintenant (4 500 FCFA)' : 'Buy Now (4,500 FCFA)'}</span>
              <ArrowRight className="w-6 h-6" />
            </a>

            {/* Embedded Chariow Widget HTML Container */}
            <div className="w-full flex flex-col items-center justify-center mb-6">
              <p className="text-xs text-white/50 mb-3">
                {lang === 'fr' ? 'Ou utilise le widget de paiement direct ci-dessous :' : 'Or use direct checkout widget below:'}
              </p>
              <div
                id="chariow-widget"
                data-product-id="prd_s3l9gh89"
                data-store-domain="by-josue.mychariow.com"
                data-style="showcase"
                data-border-style="rounded"
                data-cta-width="xs"
                data-cta-animation="none"
                data-locale="en"
                data-background-color="#FFFFFF"
                data-position="bottom-right"
                className="w-full max-w-sm flex justify-center"
              />
            </div>

            {/* Trust Seals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-2 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                <span>Paiement 100% sécurisé Chariow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#FFD700]" />
                <span>Accès envoyé instantanément</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp : +228 97 34 71 47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
