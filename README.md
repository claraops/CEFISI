# CEFISI — Refonte du site web

[![CI](https://github.com/claraops/CEFISI/actions/workflows/ci.yml/badge.svg)](https://github.com/claraops/CEFISI/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/licence-Usage%20interne-lightgrey)](./CONTRIBUTING.md)

> Socle initial du frontend de la refonte du site **CEFISI** (organisme de formation en informatique — reconversion et alternance).
> Projet de Master 1 Informatique : **MOA** = l'enseignante (la cliente), **MOE** = l'équipe (nous).
> Dépôt : [github.com/claraops/CEFISI](https://github.com/claraops/CEFISI)

---

## 🎯 Périmètre

| ✅ Dans le périmètre                                         | ❌ Hors périmètre                          |
| ------------------------------------------------------------ | ------------------------------------------ |
| Site public : accueil, formations, approche, équipe, contact | Formulaire et suivi de candidatures        |
| Lien « Candidater » vers la plateforme existante             | Plateforme de candidatures (inchangée)     |
| Intranet : dossiers et PDF protégés par rôle/inscription     | Wiki, messagerie, groupes, offres d'emploi |
| Back-office : pages, contenus, comptes, messages             | SSO avec la plateforme de candidatures     |

**Échéance : 11 décembre 2026** — cahier des charges, WBS, solution déployable et démonstration.

## 🧰 Stack

| Couche          | Choix                                                    |
| --------------- | -------------------------------------------------------- |
| Frontend        | React 19, TypeScript 5.9, Vite 8, React Router 7         |
| Interface       | Tailwind CSS 4, daisyUI 5, thème `cefisi` (bleu ciel)    |
| Icônes          | lucide-react                                             |
| Qualité         | ESLint, Prettier, Vitest, GitHub Actions                 |
| Backend (lot 3) | Java 21, Spring Boot 3, Spring Security, Spring Data JPA |
| Base (lot 3)    | PostgreSQL (H2 en développement)                         |
| Déploiement     | Docker Compose, GitHub                                   |

> La stack est une **proposition de l'équipe**, à valider par la cliente — voir [ADR-0001](./docs/adr/0001-frontend-stack.md).

## 🚀 Démarrage rapide

Prérequis : **Node.js 22+** et npm 10+ (fichier `.nvmrc` fourni).

```bash
git clone https://github.com/claraops/CEFISI.git
cd CEFISI
npm ci
cp .env.example .env
npm run dev
```

Ouvrir <http://localhost:5173>. Le proxy Vite redirige `/api` vers `http://localhost:8080` dès que l'API Spring Boot démarre.

```bash
npm run check        # typecheck + lint + tests + build
npm run typecheck    # vérification des types
npm run lint         # ESLint
npm run format       # Prettier
npm test             # Vitest
npm run build        # build de production dans dist/
npm run preview      # prévisualiser le build
```

## 🗂️ Structure du dépôt

```
.
├── docs/                  # Documents projet (source de vérité)
│   ├── 01-cahier-des-charges.md
│   ├── 02-wbs.md
│   ├── 03-plan-de-tests.md
│   ├── 04-architecture.md
│   ├── 05-charte-graphique.md
│   ├── 06-hypotheses-et-questions.md
│   └── adr/               # Décisions d'architecture
├── .github/               # CI, templates d'issues et de PR, CODEOWNERS
├── public/                # Favicon, robots.txt
├── src/
│   ├── app/               # Routeur, layouts, providers
│   ├── components/        # Composants partagés (layout, ui)
│   ├── features/          # Découpages métier
│   ├── pages/             # Pages routées
│   ├── data/              # Données de démonstration (temporaires)
│   ├── lib/               # Client API et utilitaires
│   ├── config/            # Variables d'environnement typées
│   ├── types/             # Modèle de données (12 entités)
│   └── styles/            # Tailwind + thème daisyUI
├── .env.example
└── package.json
```

## 🧭 État d'avancement

- [x] Socle React/TypeScript/Vite + Tailwind/daisyUI et CI
- [x] Documentation projet (cahier des charges, WBS, plan de tests, architecture, charte)
- [x] Site public : pages statiques avec données de démonstration
- [ ] Branchement API Spring Boot (lots 3 à 6)
- [ ] Authentification et rôles
- [ ] Intranet de documents protégés
- [ ] Back-office sans code
- [ ] Déploiement Docker Compose + démo

## 🤝 Travailler en groupe

Branches : `main` (déployable) · `develop` (intégration) · `feat/*`, `fix/*`, `docs/*`.
Commits : **Conventional Commits** (`feat:`, `fix:`, `docs:`, `test:`, `chore:`, `refactor:`).
Chaque tâche = une issue liée à une PR ; au moins une review avant merge.

👉 Lisez [CONTRIBUTING.md](./CONTRIBUTING.md) avant votre première PR.

## 📚 Documentation

| Document                                                       | Contenu                                                                 |
| -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Cahier des charges](./docs/01-cahier-des-charges.md)          | Contexte, périmètre, acteurs, besoins F1–F19, exigences N1–N10, recette |
| [WBS](./docs/02-wbs.md)                                        | 7 lots + livraison, échéances, dépendances                              |
| [Plan de tests](./docs/03-plan-de-tests.md)                    | Tests par rôle, traçabilité, checklist de recette                       |
| [Architecture](./docs/04-architecture.md)                      | Flux front/API/base/fichiers, contrat API proposé                       |
| [Charte graphique](./docs/05-charte-graphique.md)              | Palette bleu ciel, typographie, responsive, accessibilité               |
| [Hypothèses & questions](./docs/06-hypotheses-et-questions.md) | Points à valider par la cliente, registre de décisions                  |

## 🔒 Données et confidentialité

Le code et les documents de démonstration sont destinés au projet de cours. Les documents réels de CEFISI, les comptes et les données personnelles ne doivent **jamais** être commités. Le formulaire de contact enregistre un consentement RGPD et les PDF sont servis exclusivement par l'API protégée.

---

Maintenu par l'équipe CEFISI — [@claraops](https://github.com/claraops).
