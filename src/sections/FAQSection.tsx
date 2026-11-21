import { useState, useRef, useEffect } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { gsap, isCompactViewport, prefersReducedMotion } from '../utils/gsapConfig';

interface FAQSectionProps {
  t: any;
  lang: string;
}

interface FAQItem {
  qFr: string;
  qEn: string;
  aFr: string;
  aEn: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    qFr: 'Est-ce que les outils utilisés sont vraiment gratuits ?',
    qEn: 'Are the tools used really 100% free?',
    aFr:
      'Oui ! Tous les outils présentés dans la formation possèdent des versions gratuites qui te permettent de créer tes vidéos sans jamais débourser un centime de logiciel. Si tu atteins les quotas d’utilisation, je t’enseigne dans le module 2 et le module 6 les méthodes exactes pour contourner et réinitialiser ces limites sans frais.',
    aEn:
      'Yes! All the tools demonstrated in the training offer free tiers enabling you to produce full videos without software subscription fees. If you reach quota limits, I teach you the exact methods in modules 2 and 6 to rotate and bypass them seamlessly.',
  },
  {
    qFr: 'Je n’y connais rien en vidéo ni en montage, puis-je réussir ?',
    qEn: 'I have zero video editing background, can I really follow?',
    aFr:
      'Absolument. La formation a été spécialement conçue pour les débutants totaux. Tu n’as besoin d’aucune compétence en montage (After Effects / Premiere) ni d’aucune notion de code. Tout se fait via des instructions simples guidées en direct à l’écran.',
    aEn:
      'Absolutely. The training is tailored specifically for complete beginners. No complex keyframing, timeline headache, or coding required. Everything is driven by clear instructions shown live on-screen.',
  },
  {
    qFr: 'Combien de temps faut-il pour créer ma première vidéo ?',
    qEn: 'How long until I finish my first motion design video?',
    aFr:
      'En suivant la méthode pas à pas, tu auras généré, assemblé et exporté ta toute première vidéo de niveau professionnel en moins de 2 heures.',
    aEn:
      'By following the step-by-step walkthrough, you will generate, assemble, and export your very first agency-grade video in under 2 hours.',
  },
  {
    qFr: 'De quel matériel ai-je besoin ?',
    qEn: 'What equipment and computer specs do I need?',
    aFr:
      'Un simple ordinateur (Windows, Mac ou Linux), une connexion internet et un navigateur moderne (Chrome, Edge ou Firefox). Pas besoin d’une machine puissante ni d’une carte graphique dédiée, l’IA tourne sur les serveurs distants.',
    aEn:
      'A regular computer (Windows, Mac, or Linux), an internet connection, and a web browser. No expensive gaming PC or graphics card needed, as all AI rendering runs on cloud servers.',
  },
  {
    qFr: 'Comment se passe l’accès après mon paiement ?',
    qEn: 'How do I access the training after purchasing?',
    aFr:
      'Dès que ton paiement de 4 500 FCFA est validé sur Chariow (par Mobile Money ou Carte), tu es immédiatement redirigé vers ton espace formation et tu reçois l’accès complet à vie par email.',
    aEn:
      'The moment your payment of 4,500 FCFA is confirmed via Chariow (Mobile Money or Card), you are instantly redirected to your member portal and receive lifetime access via email.',
  },
  {
    qFr: 'Que faire si je suis bloqué ou si j’ai une question ?',
    qEn: 'What if I get stuck or need help on my project?',
    aFr:
      'Tu bénéficies d’un support direct avec APEDO Elias sur WhatsApp (+228 97 34 71 47). Tu peux envoyer tes questions, tes briefs ou tes rendus pour obtenir des conseils personnalisés.',
    aEn:
      'You get direct personal support with APEDO Elias on WhatsApp (+228 97 34 71 47). You can share your prompts, assets, or renders for immediate troubleshooting and feedback.',
  },
];

export default function FAQSection({ lang }: FAQSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    if (isCompactViewport() || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 36,
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

  const toggle = (i: number) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-x-clip"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#FFD700]" />
            <span>FAQ</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                Questions <span className="text-[#FFD700]">Fréquentes</span>
              </>
            ) : (
              <>
                Frequently <span className="text-[#FFD700]">Asked Questions</span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-sm sm:text-lg">
            {lang === 'fr'
              ? 'Toutes les réponses à tes questions avant de commencer.'
              : 'Clear answers to everything you need to know before joining.'}
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-4 mb-10 sm:mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-colors border ${
                  isOpen
                    ? 'bg-[#1A2744] border-[#FFD700]/40 shadow-xl'
                    : 'bg-[#111f38]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-lg text-white leading-snug">
                    {lang === 'en' ? item.qEn : item.qFr}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FFD700] text-[#0A1628]' : 'text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-base text-white/75 leading-relaxed border-t border-white/5">
                    {lang === 'en' ? item.aEn : item.aFr}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-5 sm:p-6 rounded-3xl bg-[#1A2744] border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {lang === 'fr' ? 'Tu as une autre question ?' : 'Have a different question?'}
              </p>
              <p className="text-xs text-white/60">
                {lang === 'fr'
                  ? 'Écris-moi directement sur WhatsApp, je réponds personnellement.'
                  : 'Message me directly on WhatsApp, I personally respond.'}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/22897347147"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-colors shrink-0 shadow-lg shadow-[#25D366]/20"
          >
            +228 97 34 71 47
          </a>
        </div>
      </div>
    </section>
  );
}
