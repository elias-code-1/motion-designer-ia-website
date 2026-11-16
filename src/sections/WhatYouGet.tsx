import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Copy, Terminal, CheckSquare, ShieldCheck, MessageCircle, Gift, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WhatYouGetProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function WhatYouGet({ lang }: WhatYouGetProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 30, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      icon: <Video className="w-8 h-8 text-[#FFD700]" />,
      badge: lang === 'fr' ? 'Accès Immédiat' : 'Immediate Access',
      title: lang === 'fr' ? '6 Modules Vidéo Pratiques' : '6 Practical Video Modules',
      desc:
        lang === 'fr'
          ? 'Enregistrés en direct écran partagé. Tu vois chaque clic, chaque prompt et le rendu final en temps réel.'
          : 'Recorded live screen-share. You see every prompt, setting, and final render in real-time.',
    },
    {
      icon: <Copy className="w-8 h-8 text-[#FFD700]" />,
      badge: lang === 'fr' ? 'Copier-Coller' : 'Copy-Paste',
      title: lang === 'fr' ? 'Le Pack de Prompts Testés' : 'The Battle-Tested Prompt Pack',
      desc:
        lang === 'fr'
          ? 'Des formules prêtes à l’emploi pour générer des animations fluides sans te casser la tête à chercher les mots.'
          : 'Ready-to-use formulas to generate fluid animations without brainstorming complex wording.',
    },
    {
      icon: <Terminal className="w-8 h-8 text-[#FFD700]" />,
      badge: lang === 'fr' ? 'Fichier Prêt à l’Emploi' : 'Plug & Play File',
      title: lang === 'fr' ? 'Le Skill GitHub pour Claude' : 'Claude Custom Skill',
      desc:
        lang === 'fr'
          ? 'Le skill préconfiguré à importer dans Claude pour qu’il applique directement la méthode exacte de production.'
          : 'The pre-configured skill file to import into Claude so it automatically enforces the exact production method.',
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-[#FFD700]" />,
      badge: lang === 'fr' ? 'Zéro Oubli' : 'Zero Mistakes',
      title: lang === 'fr' ? 'La Checklist de Production' : 'The Master Production Checklist',
      desc:
        lang === 'fr'
          ? 'La feuille de route pas à pas pour ne rater aucune étape : du cadrage initial jusqu’à l’export final.'
          : 'The step-by-step roadmap so you never skip a beat: from initial scoping to final export.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FFD700]" />,
      badge: lang === 'fr' ? '100% Gratuit' : '100% Free',
      title: lang === 'fr' ? 'Gestion des Limites des Outils' : 'Free Tier Limit Bypass Guides',
      desc:
        lang === 'fr'
          ? 'Les astuces concrètes pour travailler sans payer d’abonnements logiciels coûteux (Midjourney, etc.).'
          : 'Insider workarounds to work seamlessly without expensive software subscriptions.',
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />,
      badge: lang === 'fr' ? 'Support Dédié' : 'Dedicated Support',
      title: lang === 'fr' ? 'Assistance WhatsApp Directe' : 'Direct WhatsApp Mentorship',
      desc:
        lang === 'fr'
          ? 'Un blocage ? Une question sur ton projet ? Écris directement à APEDO Elias sur WhatsApp (+228 97 34 71 47).'
          : 'Stuck? Question on your video? Message APEDO Elias directly on WhatsApp (+228 97 34 71 47).',
    },
  ];

  return (
    <section
      id="what-you-get"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFD700]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-[#FFD700]/10">
            <Gift className="w-4 h-4 text-[#FFD700]" />
            <span>{lang === 'fr' ? 'Le Contenu du Pack' : 'Pack Deliverables'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                Ce que tu reçois en rejoignant{' '}
                <span className="text-[#FFD700]">la formation aujourd’hui</span>
              </>
            ) : (
              <>
                Everything included when{' '}
                <span className="text-[#FFD700]">you enroll today</span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-base sm:text-lg">
            {lang === 'fr'
              ? 'Un kit complet clé en main pour démarrer et publier ta première vidéo dès aujourd’hui.'
              : 'A turnkey production toolkit to launch and publish your very first motion video today.'}
          </p>
        </div>

        {/* 6 Cards Grid - ALWAYS VISIBLE */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#1A2744] border-2 border-white/10 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-[#FFD700]/10 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A1628] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FFD700]/60 transition-all shadow-inner">
                    {item.icon}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lang === 'fr' ? 'Inclus à vie dans l’accès' : 'Lifetime access included'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Direct Payment Link */}
        <div className="text-center pt-4">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-base text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/25 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            <span>
              {lang === 'fr'
                ? 'Recevoir tout le pack pour 4 500 FCFA →'
                : 'Get the full pack for 4,500 FCFA →'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
