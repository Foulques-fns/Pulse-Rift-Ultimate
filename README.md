# PULSE RIFT — ULTIMATE

Jeu arcade web complet, pensé pour GitHub Pages.

## Contenu
- identité/logo Pulse Rift intégrés
- 24 maps / 6 difficultés
- 42 skins / 32 trails
- boutique quotidienne avec remises
- défi quotidien + série
- pièces, progression, achievements, statistiques
- records locaux
- course 1v1 contre BOT
- architecture de vrai matchmaking WebSocket
- comptes sécurisés côté serveur avec bcrypt + JWT
- serveur Express + WebSocket fourni
- contrôles clavier/tactile
- particules, trails, screen shake, effets
- PWA
- aucune API payante

## GitHub Pages
Le dossier racine du jeu peut être publié directement sur GitHub Pages.

## Vrai online
GitHub Pages ne peut pas exécuter Node.js. Le dossier `server/` doit donc être déployé sur un hébergeur Node/WebSocket (Render, Railway, VPS, etc.).
Après déploiement, renseigne l'URL `wss://...` dans `js/online.js`.

Le serveur fourni contient :
- inscription / connexion
- hash bcrypt
- JWT
- matchmaking de deux joueurs
- synchronisation de progression
- déconnexion d'adversaire

Pour la production, définis `JWT_SECRET` et utilise une vraie base de données persistante. Le serveur de démonstration stocke les comptes en mémoire.
