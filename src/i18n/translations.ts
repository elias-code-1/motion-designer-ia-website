export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      modules: 'Modules',
      instructor: 'Formateur',
      pricing: 'Tarifs',
      faq: 'FAQ',
      cta: 'Je m\'inscris',
      langToggle: 'EN',
    },

    // Hero
    hero: {
      badge: '🎬 Formation Motion Design IA',
      title: 'Crée ton Studio Vidéo\nMotion Designer IA',
      subtitle: 'Deviens libre grâce à l\'IA !',
      description:
        'Apprends à créer des vidéos motion design professionnelles en quelques clics, sans logiciels complexes, sans payer un prestataire.',
      ctaPrimary: 'Je veux apprendre →',
      ctaSecondary: 'Voir les vidéos créées',
      priceLabel: 'Accès complet',
      price: '4 500 FCFA',
      priceOld: '20 000 FCFA',
    },

    // ProofBand
    proof: {
      students: 'Formation Pratique',
      modules: '6 Modules complets',
      videos: 'Vidéos incluses',
      support: 'Support WhatsApp',
      lifetime: 'Accès à vie',
      tools: 'Outils IA inclus',
    },

    // ProblemSection
    problem: {
      badge: '😩 Le vrai problème',
      title: 'Tu postes des images… pendant que tes concurrents postent des vidéos',
      items: [
        'Une image fixe = ignorée en 2 secondes sur les réseaux',
        'Une vidéo animée = 10x plus de vues, de partages, de clients',
        'Un motion designer professionnel coûte 50 000 à 200 000 FCFA par vidéo',
        'Tu n\'as pas le budget ni le temps d\'apprendre After Effects',
      ],
      conclusion:
        'Et si tu pouvais créer des vidéos professionnelles toi-même, en moins d\'une heure ?',
    },

    // SolutionSection
    solution: {
      badge: '✅ La solution',
      title: 'Une formation complète pour créer tes propres vidéos motion design avec l\'IA',
      description:
        'Pas besoin d\'être développeur ou designer. Avec les bons outils IA et les bonnes méthodes, tu peux créer des vidéos de niveau agence en quelques clics.',
      features: [
        'Outils IA gratuits et accessibles',
        'Méthodes testées et validées',
        'Résultats dès le premier module',
        'Communauté et support inclus',
      ],
    },

    // VideoCarousel
    carousel: {
      title: 'Des vidéos créées par nos étudiants',
      subtitle: 'Regarde ce que tu seras capable de créer après la formation',
    },

    // ModulesSection
    modules: {
      badge: '📚 Programme',
      title: 'Les 6 modules de la formation',
      subtitle: 'De débutant à motion designer IA en 6 étapes claires',
      list: [
        {
          number: '01',
          title: 'Introduction',
          description:
            'Comprendre le motion design IA, ses débouchés et comment cette formation va transformer ta création de contenu.',
          duration: '4 min',
        },
        {
          number: '02',
          title: 'Configuration du Studio & des Outils IA',
          description:
            'Configuration guidée : Claude pour générer toute la vidéo et ses effets sonores, ElevenLabs pour la voix off et CapCut pour synchroniser la VO et la vidéo.',
          duration: '7 min',
        },
        {
          number: '03',
          title: 'Préparer les assets',
          description:
            'Apprends à créer et préparer tes images, fonds, personnages et éléments graphiques avec l\'IA.',
          duration: '3 min',
        },
        {
          number: '04',
          title: 'Génération Complète de la Vidéo & des SFX dans Claude',
          description:
            'Claude génère l\'intégralité de la vidéo : scènes, animations, transitions et tous les effets sonores (SFX) intégrés via le prompt master.',
          duration: '13 min',
        },
        {
          number: '05',
          title: 'Voix Off ElevenLabs & Synchronisation dans CapCut',
          description:
            'Génération de la voix off naturelle dans ElevenLabs et synchronisation précise de la VO sur la vidéo générée par Claude dans CapCut.',
          duration: '10 min',
        },
        {
          number: '06',
          title: 'Bilan et conseils',
          description:
            'Stratégies pour monétiser tes compétences, trouver des clients et continuer à progresser.',
          duration: '4 min',
        },
      ],
    },

    // WhatYouGet
    whatYouGet: {
      badge: '🎁 Ce que tu reçois',
      title: 'Tout ce dont tu as besoin pour réussir',
      items: [
        { icon: '🎬', title: 'Accès à toutes les vidéos', desc: '~41 min de formation pratique condensée' },
        { icon: '📝', title: 'Prompts IA prêts à l\'emploi', desc: 'Bibliothèque de prompts testés' },
        { icon: '✅', title: 'Checklist de production', desc: 'Ne rate plus aucune étape' },
        { icon: '💬', title: 'Support WhatsApp', desc: 'Réponse sous 24h' },
        { icon: '🔄', title: 'Mises à jour incluses', desc: 'Accès aux nouvelles vidéos' },
        { icon: '🏆', title: 'Certificat de completion', desc: 'Valide tes nouvelles compétences' },
      ],
    },

    // ForWhoSection
    forWho: {
      badge: '🎯 Pour qui ?',
      title: 'Cette formation est faite pour toi si…',
      forList: [
        'Tu veux créer du contenu vidéo professionnel pour ton business',
        'Tu es entrepreneur et tu veux te démarquer avec des vidéos animées',
        'Tu veux proposer un service de motion design à des clients',
        'Tu n\'as pas de budget pour payer un motion designer',
        'Tu es créateur de contenu et tu veux monter en gamme',
      ],
      notForTitle: 'Pas pour toi si…',
      notForList: [
        'Tu cherches une solution magique sans effort',
        'Tu n\'as pas accès à internet',
        'Tu veux apprendre After Effects traditionnel',
      ],
    },

    // InstructorSection
    instructor: {
      badge: '👨‍🏫 Ton formateur',
      name: 'APEDO Elias',
      title: 'Motion Designer IA & Entrepreneur Digital',
      bio: 'Passionné par l\'IA et le motion design, Elias utilise ces méthodes au quotidien pour ses projets et ses clients. Il croit que chaque entrepreneur mérite d\'avoir accès aux mêmes outils et à la même qualité que les grandes agences.',
      stats: [
        { value: '6', label: 'Modules complets' },
        { value: '4', label: 'Outils 100% gratuits' },
        { value: '~41 min', label: 'Formation condensée' },
      ],
    },

    // PricingSection
    pricing: {
      badge: '💰 Tarif',
      title: 'Une seule offre, tout inclus',
      subtitle: 'Accès complet à vie',
      price: '4 500 FCFA',
      priceOld: '20 000 FCFA',
      discount: '-77%',
      features: [
        '✅ 6 modules complets (~41 min de pratique)',
        '✅ Claude : génère toute la vidéo & effets sonores (SFX)',
        '✅ ElevenLabs : création de la voix off ultra-réaliste',
        '✅ CapCut : synchronisation millimétrée de la VO & vidéo',
        '✅ Checklist de production & Pack de Prompts',
        '✅ Support direct WhatsApp avec Elias',
        '✅ Certificat de complétion officiel',
      ],
      cta: 'Accéder à la formation →',
      guarantee: '🔒 Paiement 100% sécurisé via Chariow',
      whatsapp: 'Des questions ? WhatsApp : +228 97 34 71 47',
    },

    // PosterSection
    poster: {
      title: 'L\'affiche officielle de la formation',
      subtitle: 'Partage avec tes amis entrepreneurs',
    },

    // FAQSection
    faq: {
      badge: '❓ FAQ',
      title: 'Questions fréquentes',
      list: [
        {
          q: 'Faut-il des compétences techniques ?',
          a: 'Non ! La formation est conçue pour les débutants complets. Si tu sais utiliser un smartphone ou un ordinateur, tu peux suivre cette formation pas à pas.',
        },
        {
          q: 'Quels outils sont utilisés et quel est leur rôle ?',
          a: 'Le flux repose sur des outils gratuits : Claude génère toute la vidéo de A à Z avec l\'ensemble des effets sonores (SFX) ; ElevenLabs génère la voix off humaine ultra-réaliste ; et CapCut sert à synchroniser la voix off avec la vidéo et ajouter les sous-titres automatiques. Tout tourne directement dans ton navigateur !',
        },
        {
          q: 'Combien de temps faut-il par jour ?',
          a: 'La formation dure ~41 minutes en tout. En moins de 2 heures de pratique, tu peux créer et exporter ta toute première vidéo motion design pro.',
        },
        {
          q: 'Y a-t-il un remboursement ?',
          a: 'En raison du contenu numérique accessible immédiatement, il n\'y a pas de remboursement. Contacte-nous sur WhatsApp (+228 97 34 71 47) avant d\'acheter si tu as des questions.',
        },
        {
          q: 'Comment accéder à la formation ?',
          a: 'Dès validation de ton paiement de 4 500 FCFA sur Chariow, tu es immédiatement redirigé vers ton espace de formation et tu reçois ton accès par email.',
        },
        {
          q: 'Le support WhatsApp est-il inclus ?',
          a: 'Oui ! Tu bénéficies d\'un accès direct à Elias via WhatsApp pour toutes tes questions et retours sur tes créations.',
        },
      ],
    },

    // FinalCTA
    finalCta: {
      title: 'Tu attends quoi ?',
      subtitle: 'Rejoins les entrepreneurs qui créent déjà leurs vidéos avec l\'IA',
      cta: 'Je veux créer mes vidéos maintenant →',
      price: '4 500 FCFA seulement',
      whatsapp: 'Besoin d\'aide ? WhatsApp +228 97 34 71 47',
    },

    // Footer
    footer: {
      tagline: 'Crée ton Studio Vidéo Motion Designer IA',
      links: ['Accueil', 'Modules', 'Formateur', 'Tarifs', 'FAQ'],
      contact: 'Contact : WhatsApp +228 97 34 71 47',
      rights: '© 2026 Motion Designer IA — by Elias. Tous droits réservés.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      modules: 'Modules',
      instructor: 'Instructor',
      pricing: 'Pricing',
      faq: 'FAQ',
      cta: 'Enroll Now',
      langToggle: 'FR',
    },

    hero: {
      badge: '🎬 AI Motion Design Masterclass',
      title: 'Build Your Video Studio\nAI Motion Designer',
      subtitle: 'Unlock Financial Freedom with AI!',
      description:
        'Learn to create professional motion design videos in a few clicks — no complex software, no expensive freelancers.',
      ctaPrimary: 'I want to learn →',
      ctaSecondary: 'See created videos',
      priceLabel: 'Full access',
      price: '4,500 FCFA',
      priceOld: '20,000 FCFA',
    },

    proof: {
      students: 'Hands-On Training',
      modules: '6 Complete Modules',
      videos: 'Videos Included',
      support: 'WhatsApp Support',
      lifetime: 'Lifetime Access',
      tools: 'AI Tools Included',
    },

    problem: {
      badge: '😩 The Real Problem',
      title: 'You post images… while your competitors post videos',
      items: [
        'A static image = ignored in 2 seconds on social media',
        'An animated video = 10x more views, shares, customers',
        'A professional motion designer costs 50,000 to 200,000 FCFA per video',
        'You don\'t have the budget or time to learn After Effects',
      ],
      conclusion:
        'What if you could create professional videos yourself, in under an hour?',
    },

    solution: {
      badge: '✅ The Solution',
      title: 'A complete training to create your own motion design videos with AI',
      description:
        'No need to be a developer or designer. With the right AI tools and methods, you can create agency-level videos in a few clicks.',
      features: [
        'Free and accessible AI tools',
        'Tested and validated methods',
        'Results from the first module',
        'Community and support included',
      ],
    },

    carousel: {
      title: 'Videos created by our students',
      subtitle: 'See what you\'ll be able to create after the training',
    },

    modules: {
      badge: '📚 Curriculum',
      title: 'The 6 training modules',
      subtitle: 'From beginner to AI motion designer in 6 clear steps',
      list: [
        {
          number: '01',
          title: 'Introduction',
          description:
            'Understand AI motion design, its opportunities, and how this training will transform your content creation.',
          duration: '4 min',
        },
        {
          number: '02',
          title: 'Studio Setup & AI Tool Stack',
          description:
            'Hands-on setup: Claude (generates the full video with all sound effects), ElevenLabs (for voiceover), and CapCut (to sync VO & video in your browser).',
          duration: '7 min',
        },
        {
          number: '03',
          title: 'Preparing Assets',
          description:
            'Learn to create and prepare images, backgrounds, characters, and graphic elements with AI.',
          duration: '3 min',
        },
        {
          number: '04',
          title: 'Full Video & Sound FX Generation in Claude',
          description:
            'Claude generates the complete video: animated scenes, kinetic transitions, and all embedded sound effects (SFX) via master prompts.',
          duration: '13 min',
        },
        {
          number: '05',
          title: 'ElevenLabs Voiceover & CapCut Video Sync',
          description:
            'Generate hyper-realistic voiceovers in ElevenLabs and precisely sync the VO onto Claude’s generated video inside CapCut.',
          duration: '10 min',
        },
        {
          number: '06',
          title: 'Recap & Advice',
          description:
            'Strategies to monetize your skills, find clients, and keep growing.',
          duration: '4 min',
        },
      ],
    },

    whatYouGet: {
      badge: '🎁 What You Get',
      title: 'Everything you need to succeed',
      items: [
        { icon: '🎬', title: 'Access to all videos', desc: '~41 min practical condensed training' },
        { icon: '📝', title: 'Ready-to-use AI prompts', desc: 'Library of tested prompts' },
        { icon: '✅', title: 'Production checklist', desc: 'Never miss a step again' },
        { icon: '💬', title: 'WhatsApp support', desc: 'Reply within 24h' },
        { icon: '🔄', title: 'Updates included', desc: 'Access to new videos' },
        { icon: '🏆', title: 'Completion certificate', desc: 'Validate your new skills' },
      ],
    },

    forWho: {
      badge: '🎯 Who Is It For?',
      title: 'This training is made for you if…',
      forList: [
        'You want to create professional video content for your business',
        'You\'re an entrepreneur who wants to stand out with animated videos',
        'You want to offer motion design services to clients',
        'You don\'t have a budget for a motion designer',
        'You\'re a content creator who wants to level up',
      ],
      notForTitle: 'Not for you if…',
      notForList: [
        'You\'re looking for a magic solution with no effort',
        'You don\'t have internet access',
        'You want to learn traditional After Effects',
      ],
    },

    instructor: {
      badge: '👨‍🏫 Your Instructor',
      name: 'APEDO Elias',
      title: 'AI Motion Designer & Digital Entrepreneur',
      bio: 'Passionate about AI and motion design, Elias uses these production methods every day for his own businesses and clients. He believes every entrepreneur deserves access to the exact tools and quality as top creative agencies.',
      stats: [
        { value: '6', label: 'Full Modules' },
        { value: '4', label: '100% Free Tools' },
        { value: '~41 min', label: 'Condensed Training' },
      ],
    },

    pricing: {
      badge: '💰 Pricing',
      title: 'One offer, everything included',
      subtitle: 'Lifetime full access',
      price: '4,500 FCFA',
      priceOld: '20,000 FCFA',
      discount: '-77%',
      features: [
        '✅ 6 complete modules (~41 min practical)',
        '✅ Claude: full video & sound effects (SFX) generation',
        '✅ ElevenLabs: hyper-realistic studio voiceover',
        '✅ CapCut: precision sync of VO & generated video',
        '✅ Production checklist & Prompt formulas',
        '✅ Direct 1-on-1 WhatsApp support with Elias',
        '✅ Official completion certificate',
      ],
      cta: 'Access the training →',
      guarantee: '🔒 100% secure payment via Chariow',
      whatsapp: 'Questions? WhatsApp: +228 97 34 71 47',
    },

    poster: {
      title: 'The official training poster',
      subtitle: 'Share with your entrepreneur friends',
    },

    faq: {
      badge: '❓ FAQ',
      title: 'Frequently Asked Questions',
      list: [
        {
          q: 'Do I need technical skills?',
          a: 'No! The training is designed for complete beginners. If you can use a smartphone, you can follow this training.',
        },
        {
          q: 'What tools are used and what does each do?',
          a: 'The workflow uses 100% free accessible tools: Claude generates the entire video from scratch along with all sound effects (SFX); ElevenLabs generates the hyper-realistic human voiceover; and CapCut is used to synchronize the voiceover onto the video and add auto-captions. Everything runs in your browser!',
        },
        {
          q: 'How much time per day?',
          a: 'The full course is ~41 minutes of dense screen-recorded practice. In under 2 hours, you can create and export your first pro video.',
        },
        {
          q: 'Is there a refund?',
          a: 'Due to the immediate digital nature of the content, there are no refunds. Contact us via WhatsApp (+228 97 34 71 47) before purchasing if you have questions.',
        },
        {
          q: 'How do I access the training?',
          a: 'Right after your 4,500 FCFA payment is confirmed via Chariow, you are immediately redirected to your training member portal and receive access by email.',
        },
        {
          q: 'Is WhatsApp support included?',
          a: 'Yes! You get direct 1-on-1 access to Elias via WhatsApp for all your project questions and feedback.',
        },
      ],
    },

    finalCta: {
      title: 'What are you waiting for?',
      subtitle: 'Join ambitious entrepreneurs already creating videos with AI',
      cta: 'I want to create my videos now →',
      price: 'Only 4,500 FCFA',
      whatsapp: 'Need help? WhatsApp +228 97 34 71 47',
    },

    footer: {
      tagline: 'Build Your AI Motion Design Studio',
      links: ['Home', 'Modules', 'Instructor', 'Pricing', 'FAQ'],
      contact: 'Contact: WhatsApp +228 97 34 71 47',
      rights: '© 2026 Motion Designer IA — by Elias. All rights reserved.',
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;
