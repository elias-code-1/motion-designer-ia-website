interface FooterProps {
  t: any;
  lang: string;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#050c17] border-t border-white/10 text-white/70 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FFE55C] to-[#FFA500] p-[2px] shadow-lg shadow-[#FFD700]/25">
                <div className="w-full h-full bg-[#0A1628] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 via-transparent to-[#FFD700]/10" />
                  <svg
                    className="w-5 h-5 text-[#FFD700] relative z-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="4" />
                    <path d="M7 3v4" />
                    <path d="M17 3v4" />
                    <path d="M3 7h18" />
                    <polygon points="10 10 15 13 10 16 10 10" fill="currentColor" stroke="currentColor" />
                  </svg>
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-tight">
                  Motion Designer <span className="text-[#FFD700]">IA</span>
                </span>
                <span className="text-[#FFD700] text-xs font-semibold tracking-wider uppercase opacity-90">
                  by APEDO Elias
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-4">
              {lang === 'fr'
                ? 'La formation de référence pour fabriquer des vidéos motion design percutantes avec des outils IA 100% gratuits.'
                : 'The premier training to craft high-converting motion design videos with 100% free AI tools.'}
            </p>

            <p className="text-xs text-white/40">
              Lomé, Togo • Disponible Partout dans le Monde
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#FFD700] mb-4">
              {lang === 'fr' ? 'Navigation Rapide' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#modules" className="hover:text-[#FFD700] transition-colors">
                  {lang === 'fr' ? 'Programme (6 Modules)' : 'Curriculum (6 Modules)'}
                </a>
              </li>
              <li>
                <a href="#carousel" className="hover:text-[#FFD700] transition-colors">
                  {lang === 'fr' ? 'Exemples de Vidéos' : 'Video Showcase'}
                </a>
              </li>
              <li>
                <a href="#instructor" className="hover:text-[#FFD700] transition-colors">
                  {lang === 'fr' ? 'Le Formateur (Elias)' : 'The Instructor'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FFD700] transition-colors">
                  {lang === 'fr' ? 'Tarif & Inscription' : 'Pricing & Enrollment'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFD700] transition-colors">
                  {lang === 'fr' ? 'FAQ' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#FFD700] mb-4">
              {lang === 'fr' ? 'Contact & Assistance' : 'Contact & Support'}
            </h4>
            <p className="text-sm text-white/70 mb-3 leading-relaxed">
              {lang === 'fr'
                ? 'Une question ou besoin d’assistance avant de rejoindre la formation ?'
                : 'Questions or need assistance before joining the program?'}
            </p>
            <a
              href="https://wa.me/22897347147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-white font-bold text-sm transition-colors"
            >
              <span>WhatsApp : +228 97 34 71 47</span>
            </a>
            <p className="text-xs text-white/40 mt-3">
              {lang === 'fr' ? 'Réponse garantie sous 24h ouvrées' : 'Reply guaranteed within 24 business hours'}
            </p>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            {lang === 'fr'
              ? 'Ce site n’est en aucun cas affilié à Facebook, Instagram ou Meta. Les témoignages et exemples présentés reflètent des résultats réels mais ne garantissent pas des gains automatiques sans travail régulier.'
              : 'This site is not affiliated with Facebook, Instagram, or Meta. Examples and showcases demonstrate potential outcomes and require consistent application.'}
          </p>

          <p className="shrink-0 text-center md:text-right font-medium">
            © {CURRENT_YEAR} Motion Designer IA — by Elias. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
