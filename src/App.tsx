import { useEffect } from 'react';
import './index.css';
import { useTranslation } from './hooks/useTranslation';

// Components
import WhatsAppButton from './components/WhatsAppButton';

// Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProofBand from './sections/ProofBand';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import VideoCarousel from './sections/VideoCarousel';
import ModulesSection from './sections/ModulesSection';
import WhatYouGet from './sections/WhatYouGet';
import ForWhoSection from './sections/ForWhoSection';
import InstructorSection from './sections/InstructorSection';
import PricingSection from './sections/PricingSection';
import PosterSection from './sections/PosterSection';
import FAQSection from './sections/FAQSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

/**
 * Motion Designer IA — by Elias
 * Complete Landing Page & Sales Funnel for APEDO Elias.
 *
 * Product: Formation Motion Designer IA
 * Price: 4 500 FCFA (barré: 20 000 FCFA)
 * WhatsApp: +228 97 34 71 47
 * Platform: React 19 + TypeScript + Tailwind CSS v4 + GSAP
 */
export default function App() {
  const { t, lang, toggleLang } = useTranslation();

  // Update browser tab title based on language
  useEffect(() => {
    document.title =
      lang === 'fr'
        ? 'Motion Designer IA — by Elias | Crée ton Studio Vidéo'
        : 'AI Motion Designer — by Elias | Build Your Video Studio';
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0A1628] text-white selection:bg-[#FFD700] selection:text-[#0A1628]">
      {/* 1. Sticky Navigation with Language Toggle */}
      <Navbar t={t} lang={lang} toggleLang={toggleLang} />

      {/* 2. Hero — kinetic typography, promo teaser, Elias transparent photo pointing */}
      <Hero t={t} lang={lang} />

      {/* 3. Proof Band — continuous animated gold marquee banner */}
      <ProofBand t={t} lang={lang} />

      {/* 4. Problem Section — static image vs animated video, agency cost */}
      <ProblemSection t={t} lang={lang} />

      {/* 5. Solution Section — Elias explaining, step-by-step method */}
      <SolutionSection t={t} lang={lang} />

      {/* 6. Video Carousel — 4 best motion design videos with market prices & studio showcase */}
      <VideoCarousel t={t} lang={lang} />

      {/* 7. Modules Section — 6 practical modules with interactive accordions */}
      <ModulesSection t={t} lang={lang} />

      {/* 8. What You Get — video access, prompts, Claude skill, checklists */}
      <WhatYouGet t={t} lang={lang} />

      {/* 9. For Who Section — clear target criteria with Elias thinking photo */}
      <ForWhoSection t={t} lang={lang} />

      {/* 10. Instructor Section — APEDO Elias presentation, stats, confident photo */}
      <InstructorSection t={t} lang={lang} />

      {/* 11. Pricing Section — launch offer, 8 500 FCFA, Chariow checkout widget */}
      <PricingSection t={t} lang={lang} />

      {/* 12. Poster Section — high-res official poster & share tools */}
      <PosterSection t={t} lang={lang} />

      {/* 13. FAQ Section — interactive accordion for top objections */}
      <FAQSection t={t} lang={lang} />

      {/* 14. Final CTA — ultimate conversion call with Elias pointing finger */}
      <FinalCTA t={t} lang={lang} />

      {/* 15. Footer — links, copyright 2026, WhatsApp */}
      <Footer t={t} lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
