import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShieldAlert, CheckCircle2, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface InstructorSectionProps {
  t: any;
  lang: string;
}

export default function InstructorSection({ lang }: InstructorSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      val: '6',
      labelFr: 'Modules Pratiques',
      labelEn: 'Practical Modules',
    },
    {
      val: '4',
      labelFr: 'Outils 100% Gratuits',
      labelEn: 'Free AI Tools Stack',
    },
    {
      val: '~41 min',
      labelFr: 'Formation Dense & Directe',
      labelEn: 'Dense & Direct Content',
    },
    {
      val: '24/7',
      labelFr: 'Support WhatsApp Réactif',
      labelEn: 'Direct WhatsApp Support',
    },
  ];

  return (
    <section
      id="instructor"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#FFD700]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo of Elias Confident (arms crossed) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Golden frame background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FFD700]/20 to-blue-600/20 blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden border border-[#FFD700]/30 bg-[#1A2744] p-6 shadow-2xl flex flex-col items-center">
                <img
                  ref={imgRef}
                  src="/assets/images/elias-confident-nobg.png"
                  alt="APEDO Elias - Formateur Motion Designer IA"
                  className="w-full max-h-[480px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />

                <div className="w-full mt-4 p-4 rounded-2xl bg-[#0A1628] border border-white/10 text-center">
                  <h3 className="text-xl font-black text-white">APEDO Elias</h3>
                  <p className="text-xs font-bold text-[#FFD700] tracking-wide uppercase mt-0.5">
                    {lang === 'fr'
                      ? 'Développeur Web & Motion Designer IA'
                      : 'Web Developer & AI Motion Designer'}
                  </p>
                  <p className="text-[11px] text-white/50 mt-1">Lomé, Togo & International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-[#FFD700]" />
              <span>{lang === 'fr' ? 'À Propos du Formateur' : 'About the Instructor'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {lang === 'fr' ? (
                <>
                  Pourquoi me faire confiance ?{' '}
                  <span className="text-[#FFD700]">Zéro théorie, du concret.</span>
                </>
              ) : (
                <>
                  Why trust this course?{' '}
                  <span className="text-[#FFD700]">Real skills, zero fluff.</span>
                </>
              )}
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              {lang === 'fr'
                ? 'Je suis développeur web et entrepreneur digital. Tout ce que je montre dans cette formation, je l’ai testé moi-même et je l’utilise quotidiennement pour mes propres projets et clients. Tu me vois le faire en direct sur mon écran, de la configuration initiale jusqu’au rendu HD.'
                : 'I am a web developer and digital entrepreneur. Everything I teach, I have personally tested and run every single day for real clients and internal businesses. You watch me perform every action on-screen, from blank prompt to final render.'}
            </p>

            {/* Transparency Highlight Box */}
            <div className="p-6 rounded-2xl bg-[#1A2744] border border-[#FFD700]/30 mb-8 w-full">
              <div className="flex items-center gap-2.5 mb-3 text-[#FFD700]">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h4 className="font-extrabold text-sm sm:text-base uppercase tracking-wide">
                  {lang === 'fr'
                    ? 'La transparence, parce que c’est fondamental :'
                    : 'Radical transparency matters:'}
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Les outils utilisés sont 100% gratuits avec des quotas. Je t’enseigne exactement comment contourner ces quotas pour ne jamais être bloqué.'
                      : 'The tools used are 100% free with quotas. I teach you the exact methods to rotate and bypass quotas seamlessly.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Tu paies mon accompagnement structuré, les prompts et le skill, pas les outils.'
                      : 'You are investing in structured mentorship, prompt engineering and custom skills, not software fees.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'fr'
                      ? 'Je suis accessible en personne sur WhatsApp pour débloquer chacun de tes projets.'
                      : 'I remain directly accessible on WhatsApp to troubleshoot and review your project.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-black text-[#FFD700]">{s.val}</p>
                  <p className="text-[11px] text-white/60 font-semibold mt-1">
                    {lang === 'en' ? s.labelEn : s.labelFr}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Contact Button */}
            <a
              href="https://wa.me/22897347147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {lang === 'fr' ? 'Poser une question à Elias (+228 97 34 71 47)' : 'Chat with Elias (+228 97 34 71 47)'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
