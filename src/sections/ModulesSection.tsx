import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, ChevronDown, Check, Clock, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ModulesSectionProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

interface ModuleData {
  num: string;
  duration: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  lessonsFr: string[];
  lessonsEn: string[];
}

const MODULES_DATA: ModuleData[] = [
  {
    num: '01',
    duration: '4 min',
    titleFr: 'Introduction & Fondations du Motion Design IA',
    titleEn: 'Introduction & Foundations of AI Motion Design',
    descFr:
      'Découvre le résultat final, la cible, la stack gratuite (Claude, ElevenLabs, CapCut, Navigateur) et le parcours complet en 6 modules pour devenir autonome.',
    descEn:
      'Discover the final deliverable, target audience, free tools stack (Claude, ElevenLabs, CapCut, Browser), and the 6-module roadmap to independence.',
    lessonsFr: [
      'Pourquoi le motion design IA surpasse les images statiques',
      'Le résultat attendu : analyse détaillée d’un clip vidéo professionnel',
      'Panorama des 4 outils gratuits utilisables immédiatement',
      'Comment contourner intelligemment les limites des versions gratuites',
    ],
    lessonsEn: [
      'Why AI motion design crushes static posts',
      'The target result: detailed teardown of an agency clip',
      'Overview of the 4 free tools you can use right away',
      'Smart workarounds to bypass free-tier limitations',
    ],
  },
  {
    num: '02',
    duration: '7 min',
    titleFr: 'Configuration du Studio & des 4 Outils IA',
    titleEn: 'Studio Setup & The 4 AI Tools Stack',
    descFr:
      'Configuration guidée : Claude (qui génère toute la vidéo avec ses effets sonores), ElevenLabs (pour la voix off) et CapCut (pour synchroniser la VO et la vidéo dans ton navigateur).',
    descEn:
      'Guided setup: Claude (generates the full video with all sound effects), ElevenLabs (for voiceover), and CapCut (to sync VO & video in your browser).',
    lessonsFr: [
      'Création et configuration des comptes 100% gratuits',
      'Claude : génération intégrale de la vidéo et de tous les effets sonores (SFX)',
      'ElevenLabs : génération de la voix off ultra-réaliste sans accent robotique',
      'CapCut : synchronisation millimétrée de la VO sur la vidéo (9:16 TikTok et 16:9)',
    ],
    lessonsEn: [
      '100% free account creation and studio setup',
      'Claude: generating the full video and all embedded sound effects (SFX)',
      'ElevenLabs: natural human voice presets without robotic feel',
      'CapCut: millisecond synchronization of VO onto video (9:16 TikTok & 16:9)',
    ],
  },
  {
    num: '03',
    duration: '3 min',
    titleFr: 'Préparation des Assets & Brief en 6 Lignes',
    titleEn: 'Asset Preparation & 6-Line Brief Prompting',
    descFr:
      'Rassemble tes captures d’écran, photos de produit, ton logo en PNG transparent et rédige un brief en 6 lignes qui guide Claude avec une précision chirurgicale.',
    descEn:
      'Gather your screenshots, product photos, transparent PNG logos, and craft a 6-line brief prompt that steers Claude with surgical precision.',
    lessonsFr: [
      'Détourage express et préparation des visuels haute définition',
      'Les 6 lignes indispensables à inclure dans chaque brief IA',
      'Choix de la palette graphique et cohérence de marque',
      'Préparation du storyboard scène par scène',
    ],
    lessonsEn: [
      'Instant background removal and HD asset prep',
      'The mandatory 6 lines to feed into every AI prompt',
      'Color palette selection & brand coherence',
      'Scene-by-scene storyboard structuring',
    ],
  },
  {
    num: '04',
    duration: '13 min',
    titleFr: 'Génération Complète de la Vidéo & des Effets Sonores dans Claude',
    titleEn: 'Full Video & Sound Effects Generation in Claude',
    descFr:
      'Le prompt exact dans Claude pour générer toute la vidéo d’un coup : scènes animées, mouvements caméra, transitions et tous les effets sonores (SFX) intégrés.',
    descEn:
      'The exact prompt formulas in Claude to generate the entire video at once: animated scenes, camera moves, transitions, and all embedded sound effects (SFX).',
    lessonsFr: [
      'Le prompt master dans Claude pour générer toute la vidéo et les effets sonores',
      'Animation des scènes, kinetic typography et calage des SFX',
      'Débogage pas à pas : comment relancer ou corriger une scène',
      'Exportation directe en haute résolution depuis le navigateur',
    ],
    lessonsEn: [
      'Master prompt formulas in Claude for entire video & sound design',
      'Scene motion design, kinetic typography, and embedded SFX timing',
      'Step-by-step troubleshooting when a scene stops or glitches',
      'Full HD direct export straight from your browser',
    ],
  },
  {
    num: '05',
    duration: '10 min',
    titleFr: 'Voix Off ElevenLabs & Synchronisation dans CapCut',
    titleEn: 'ElevenLabs Voiceover & CapCut VO-to-Video Sync',
    descFr:
      'Génération de la voix off naturelle dans ElevenLabs et synchronisation précise de la VO sur la vidéo générée par Claude à l’intérieur de CapCut.',
    descEn:
      'Generating natural voiceovers in ElevenLabs and precisely syncing the VO onto the Claude-generated video inside CapCut.',
    lessonsFr: [
      'Structure d’un script vidéo qui retient l’attention dès 3 secondes',
      'Génération de la voix off dynamique et humaine dans ElevenLabs',
      'Importation de la vidéo et de la VO dans CapCut pour synchronisation',
      'Ajustement du calage au millième de seconde et sous-titres automatiques',
    ],
    lessonsEn: [
      'Script formulas that hook viewers in the first 3 seconds',
      'Generating energetic, punchy ElevenLabs commercial voiceovers',
      'Importing video and voiceover into CapCut for synchronization',
      'Precision audio-to-motion beat synchronization & auto-captions',
    ],
  },
  {
    num: '06',
    duration: '4 min',
    titleFr: 'Bilan, Checklist de Production & Monétisation',
    titleEn: 'Checklist, Portfolio & Client Acquisition',
    descFr:
      'Ta checklist réutilisable à vie, la création de ton portfolio de démonstration, et comment vendre des vidéos motion design à 60 000 FCFA+ à des entreprises.',
    descEn:
      'Your lifetime production checklist, building a portfolio, and closing 60,000+ FCFA client deals.',
    lessonsFr: [
      'La checklist de contrôle qualité avant chaque livraison',
      'Comment packager tes meilleures vidéos en portfolio irrésistible',
      'Grille tarifaire : comment facturer entre 60 000 et 150 000 FCFA',
      'Stratégie de prospection WhatsApp et Instagram pour signer tes premiers clients',
    ],
    lessonsEn: [
      'The pre-flight QA checklist before every export',
      'How to package showcase clips into an irresistible portfolio',
      'Pricing strategy: charging $100 to $250 per client clip',
      'Direct outreach playbook via WhatsApp & Instagram to land clients',
    ],
  },
];

export default function ModulesSection({ lang }: ModulesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
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

  const toggleModule = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#111f38] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-[#FFD700]" />
            <span>{lang === 'fr' ? 'Programme Complet' : 'Curriculum'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                6 Modules Pratiques pour{' '}
                <span className="text-[#FFD700]">devenir 100% autonome</span>
              </>
            ) : (
              <>
                6 Hands-On Modules to{' '}
                <span className="text-[#FFD700]">gain total independence</span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-base sm:text-lg">
            {lang === 'fr'
              ? 'Format direct, dense et sans blabla : environ 41 minutes de pure pratique écran partagé à suivre à ton rythme.'
              : 'Direct, dense, zero fluff: ~41 minutes of pure screen-recorded practice you can follow at your own pace.'}
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {MODULES_DATA.map((mod, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={mod.num}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-[#1A2744] border-[#FFD700]/50 shadow-2xl shadow-black/30'
                    : 'bg-[#0A1628]/80 border-white/10 hover:border-white/25'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="text-2xl sm:text-3xl font-black text-[#FFD700] font-mono shrink-0">
                      {mod.num}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          {mod.duration}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
                        {lang === 'en' ? mod.titleEn : mod.titleFr}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FFD700] text-[#0A1628]' : 'text-white'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10">
                    <p className="text-sm text-white/80 leading-relaxed mb-5">
                      {lang === 'en' ? mod.descEn : mod.descFr}
                    </p>

                    <div className="space-y-2.5">
                      <p className="text-xs uppercase font-extrabold tracking-wider text-[#FFD700]">
                        {lang === 'fr' ? 'Ce que tu vas maîtriser :' : 'What you will master:'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(lang === 'en' ? mod.lessonsEn : mod.lessonsFr).map((lesson, lIdx) => (
                          <div
                            key={lIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/5"
                          >
                            <Check className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-white/90">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA with Direct Payment Link */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-base text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] shadow-xl shadow-[#FFD700]/25 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            <span>
              {lang === 'fr'
                ? 'Accéder aux 6 modules pour 4 500 FCFA →'
                : 'Get all 6 modules for 4,500 FCFA →'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
