# Motion Designer IA — by Elias | Documentation & Suivi de Projet

> Fichier de référence, d'architecture et de progression pour les futures sessions d'IA et de développement.

---

## 📌 1. Vue d'Ensemble du Projet
- **Nom du Produit** : Formation « Crée ton Studio Vidéo Motion Designer IA — Deviens libre grâce à l'IA ! »
- **Auteur & Formateur** : **APEDO Elias** (Développeur Web & Motion Designer IA, Lomé, Togo)
- **Objectif** : Landing page e-commerce haute conversion, ultra-animée (motion design interactif), multilingue (FR / EN).
- **Plateforme & Stack** : React 19, TypeScript, Vite 8, Tailwind CSS v4, GSAP 3 (ScrollTrigger), Framer Motion, Lucide Icons.
- **Offre & Monétisation** :
  - **Prix affiché** : **8 500 FCFA**
  - **Prix barré bien visible** : **20 000 FCFA** avec slash rouge — Réduction -57% (Offre de lancement pour les 30 premiers inscrits)
  - **Lien officiel Checkout Direct** : `https://by-josue.mychariow.com/formation-motion-design/checkout`
  - **Intégré dans TOUS les boutons CTA** (Navbar, Hero, ForWho, Modules, Pricing, FinalCTA).
  - **Widget officiel Chariow** : Intégré sous la section Pricing (`prd_s3l9gh89`, domaine `by-josue.mychariow.com`).
  - **Support Direct WhatsApp** : `+228 97 34 71 47` (accessible partout via bouton flottant interactif).

---

## ⏱️ 2. Durées EXACTES & Arrondies par Excès des 6 Modules Vidéo
Vérifié avec `ffprobe` directement sur les fichiers de la formation, et arrondies par excès (plafond à la minute supérieure) :
- **Module 1 : Introduction** → 3 min 55 s → **4 min**
- **Module 2 : Configuration du Studio & Outils IA** → 6 min 14 s → **7 min**
- **Module 3 : Préparer les assets** → 2 min 56 s → **3 min**
- **Module 4 : Génération de la vidéo** → 12 min 34 s → **13 min**
- **Module 5 : Voix off et synchronisation** → 9 min 17 s → **10 min**
- **Module 6 : Bilan et conseils** → 3 min 10 s → **4 min**
- **Total Arrondi par Excès** : **41 minutes** de formation ultra-condensée, 100% pratique, enregistrée écran partagé sans blabla.

---

## 🛠️ 2.bis. Rôle EXACT des 4 Outils 100% Gratuits
Mise en avant explicite et systématique sur toute la landing page :
1. **Claude** : **Génère TOUTE la vidéo de A à Z avec TOUS les effets sonores (SFX)**, les animations fluides, la kinetic typography, les transitions cinématiques via le prompt master (sans coder).
2. **ElevenLabs** : **Génère la voix off ultra-réaliste**, humaine, captivante et dynamique, sans aucun accent robotique.
3. **CapCut** : **Sert à synchroniser la voix off (VO) et la vidéo**, caler le rythme au millième de seconde et ajouter les sous-titres animés automatiques.
4. **Un Navigateur Web** (Chrome, Brave, Edge) : **Exécute et prévisualise l'ensemble directement en ligne**, zéro logiciel lourd à installer, aucun PC gamer requis.

---

## 🎬 3. Carrousel Vidéo Moderne & Tarification
Les 4 vidéos du carrousel avec le lecteur interactif moderne :
1. **Clip Promo Dynamique — By Elias** (`hero-promo.mp4`) : Format **TikTok / Instagram Reels / Shorts (9:16 vertical, 1080x1920)** avec affichage adapté (halo d'ambiance flouté cinématographique en arrière-plan et vidéo verticale nette sans rognage du texte ni de la kinetic typography). Showcase Studio By Elias (Projet personnel, aucun prix).
2. **Spot Commercial Café & Food** (`video-cafe.mp4`) : Facturation Client : **70 000 FCFA** *(sans mentionner que c'est une estimation)*.
3. **Alance — Démo Plateforme Freelance** (`carousel-2.mp4` / `alance-demo.mp4`) : Showcase Studio By Elias (Projet personnel, aucun prix).
4. **Alance — Teaser Kinetic Typography** (`carousel-3.mp4` / `alance-preview.mp4`) : Showcase Personnel By Elias (Projet personnel, aucun prix).
- **Fonctionnalités du Carrousel** : Barre de progression animée automatique (7s avec pause au survol), contrôles de volume Mute/Unmute, bouton Play/Pause central, miniatures interactives avec badge 9:16 TikTok, transition GSAP fluide sur chaque changement.

---

## 🖼️ 4. Hero Section, Logo & Identité Visuelle
- **Hero** : Titre traduit dynamiquement en anglais au switch EN (« Build Your Video Studio / AI Motion Designer »), aura dorée animée, pills flottantes animées avec GSAP, et affichage de la stack des 4 outils gratuits.
- **Logo Navbar & Footer** : Emblème studio vidéo premium au format clapperboard cinématographique doré avec bouton play prismatique et étincelle IA animée.
- **Suppression totale** de toute mention "100+ étudiants formés" et du badge "+500 vidéos IA" sur l'ensemble du site.

---

## ⚡ 5. Commandes Utiles
```bash
# Se placer dans le projet
cd "/home/elias/Téléchargements/dossier formation/website"

# Lancer le serveur local
npm run dev

# Compiler le build de production (validé sans aucune erreur)
npm run build
```
