import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, XCircle, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ForWhoSectionProps {
  t: any;
  lang: string;
}

const CHECKOUT_URL = 'https://by-josue.mychariow.com/formation-motion-design/checkout';

export default function ForWhoSection({ lang }: ForWhoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([colLeftRef.current, colRightRef.current], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from(imgRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const forWhoListFr = [
    'Tu as une entreprise, un commerce, une application ou des services à promouvoir sur les réseaux.',
    'Tu es débutant complet : zéro compétence en montage vidéo ni en informatique n’est requise.',
    'Tu es prêt à pratiquer en même temps que moi sur ton écran, pas seulement à regarder des vidéos passivement.',
    'Tu veux créer du contenu captivant qui retient l’attention sans payer un monteur à chaque fois.',
    'Tu es freelance ou créateur et tu souhaites proposer un nouveau service très demandé à tes clients.',
  ];

  const forWhoListEn = [
    'You have a business, e-commerce shop, SaaS app, or service to promote on social channels.',
    'You are a complete beginner: zero prior video editing or coding knowledge required.',
    'You are ready to take action alongside me on your screen, not just watch passively.',
    'You want scroll-stopping content that converts without paying thousands to freelance editors.',
    'You are a freelancer or agency owner looking to add high-ticket AI motion design to your offers.',
  ];

  const notForWhoListFr = [
    'Tu cherches à produire des documentaires ou des vidéos YouTube de 45 minutes : ici on crée des clips percutants de 15 à 30 secondes.',
    'Tu veux un bouton magique sans faire aucun effort personnel.',
    'Tu attends des promesses d’argent facile : je n’en fais pas, ton succès dépend de ton travail.',
    'Tu cherches un cours sur Adobe After Effects classique.',
  ];

  const notForWhoListEn = [
    'You want to produce 45-minute YouTube documentaries: we focus on ultra-effective 15 to 30 second viral clips.',
    'You expect a magical push-button solution with zero personal work.',
    'You are looking for get-rich-quick guarantees: results come from consistency and implementation.',
    'You want a classic tutorial on traditional Adobe After Effects keyframing.',
  ];

  const forList = lang === 'en' ? forWhoListEn : forWhoListFr;
  const notForList = lang === 'en' ? notForWhoListEn : notForWhoListFr;

  return (
    <section
      id="for-who"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#111f38] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#FFD700]" />
            <span>{lang === 'fr' ? 'Profil Cible' : 'Target Profile'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'fr' ? (
              <>
                Est-ce que cette formation est{' '}
                <span className="text-[#FFD700]">faite pour toi ?</span>
              </>
            ) : (
              <>
                Is this training{' '}
                <span className="text-[#FFD700]">the right fit for you?</span>
              </>
            )}
          </h2>

          <p className="text-white/70 text-base sm:text-lg">
            {lang === 'fr'
              ? 'Transparence totale. Regarde ci-dessous avant de nous rejoindre.'
              : 'Complete transparency. Review the criteria below before enrolling.'}
          </p>
        </div>

        {/* 2 Columns: Pour Qui vs Pas Pour Qui */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* C'est pour toi */}
          <div
            ref={colLeftRef}
            className="p-8 sm:p-10 rounded-3xl bg-[#0A1628]/90 border border-emerald-500/30 shadow-2xl relative flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-xs uppercase tracking-wider">
              {lang === 'fr' ? 'Recommandé' : 'Recommended'}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {lang === 'fr' ? 'C’est fait pour toi si…' : 'Made for you if…'}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold">
                    {lang === 'fr' ? 'Tu as l’esprit d’action' : 'You are ready to take action'}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {forList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-[#0A1628] bg-gradient-to-r from-[#FFD700] to-[#FFE033] hover:from-[#FFE033] hover:to-[#FFD700] transition-all hover:scale-105 active:scale-95"
              >
                <span>{lang === 'fr' ? 'Rejoindre la formation (4 500 FCFA) →' : 'Enroll now (4,500 FCFA) →'}</span>
              </a>
            </div>
          </div>

          {/* Ce n'est PAS pour toi */}
          <div
            ref={colRightRef}
            className="p-8 sm:p-10 rounded-3xl bg-[#0A1628]/90 border border-red-500/30 shadow-2xl relative flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full bg-red-500/20 text-red-400 font-black text-xs uppercase tracking-wider">
              {lang === 'fr' ? 'À éviter' : 'Avoid'}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {lang === 'fr' ? 'Ce n’est PAS pour toi si…' : 'NOT for you if…'}
                  </h3>
                  <p className="text-xs text-red-400 font-semibold">
                    {lang === 'fr' ? 'Pas de fausses promesses' : 'No false expectations'}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {notForList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/20">
              <p className="text-center text-xs text-white/50">
                {lang === 'fr'
                  ? 'Nous préférons des étudiants engagés qui appliquent la méthode.'
                  : 'We focus exclusively on committed students who execute the playbook.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
