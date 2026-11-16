interface ProofBandProps {
  t?: any;
  lang?: string;
}

export default function ProofBand({ lang }: ProofBandProps) {
  const itemsFr = [
    '✦ FORMATION 100% PRATIQUE',
    '✦ 6 MODULES CLÉS EN MAIN (~41 MIN)',
    '✦ CLAUDE : GÉNÈRE TOUTE LA VIDÉO + SFX',
    '✦ ELEVENLABS : GÉNÈRE LA VOIX OFF',
    '✦ CAPCUT : SYNCHRONISE LA VO & LA VIDÉO',
    '✦ 100% DANS TON NAVIGATEUR WEB',
    '✦ SUPPORT WHATSAPP 7J/7',
    '✦ ACCÈS IMMÉDIAT & À VIE',
    '✦ ÉCONOMISE 60 000+ FCFA / VIDÉO',
  ];

  const itemsEn = [
    '✦ 100% HANDS-ON TRAINING',
    '✦ 6 COMPACT MODULES (~41 MIN)',
    '✦ CLAUDE: FULL VIDEO & SFX GENERATION',
    '✦ ELEVENLABS: REALISTIC VOICEOVER',
    '✦ CAPCUT: VO & VIDEO SYNCHRONIZATION',
    '✦ 100% IN YOUR WEB BROWSER',
    '✦ 24/7 DIRECT WHATSAPP SUPPORT',
    '✦ IMMEDIATE LIFETIME ACCESS',
    '✦ SAVE $100+ PER VIDEO',
  ];

  const items = lang === 'en' ? itemsEn : itemsFr;

  return (
    <div className="relative py-4 bg-gradient-to-r from-[#FFD700] via-[#FFE033] to-[#FFD700] overflow-hidden shadow-xl select-none z-20">
      <div className="flex w-max animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-8 whitespace-nowrap px-4">
          {items.map((item, idx) => (
            <span
              key={`a-${idx}`}
              className="text-[#0A1628] font-black text-sm md:text-base tracking-wider uppercase flex items-center gap-3"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Second track (duplicate for seamless loop) */}
        <div className="flex items-center gap-8 whitespace-nowrap px-4">
          {items.map((item, idx) => (
            <span
              key={`b-${idx}`}
              className="text-[#0A1628] font-black text-sm md:text-base tracking-wider uppercase flex items-center gap-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
