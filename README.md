# CEFISI — Refonte du site web

[![CI](https://github.com/claraops/CEFISI/actions/workflows/ci.yml/badge.svg)](https://github.com/claraops/CEFISI/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Licence](https://img.shields.io/badge/licence-Usage%20p%C3%A9dagogique-lightgrey)](./LICENSE.md)

> Socle initial du frontend de la refonte du site **CEFISI** (organisme de formation en informatique, reconversion et alternance).
> Projet de Master 1 Informatique : MOA = l'enseignante (la cliente), MOE = l'équipe (nous).
> Dépôt : [github.com/claraops/CEFISI](https://github.com/claraops/CEFISI)
>
> État actuel : initialisation et mise en place de l'organisation du dépôt. Aucune page du site n'est implémentée.

---

## Périmètre

| Dans le périmètre                                            | Hors périmètre                            |
| ------------------------------------------------------------ | ----------------------------------------- |
| Site public : accueil, formations, approche, équipe, contact | Formulaire et suivi de candidatures       |
| Lien « Candidater » vers la plateforme existante             | Plateforme de candidatures (inchangée)    |
| Intranet : dossiers et PDF protégés par rôle/inscription     | Wiki, messagerie, groupes, offres d'emploi |
| Back-office : pages, contenus, comptes, messages             | SSO avec la plateforme de candidatures    |

Échéance : 11 décembre 2026 — cahier des charges, WBS, solution déployable et démonstration.

## Structure du dépôt

```
.
├── Docs/                  # Documents projet (cahier des charges, WBS, ADR) — branche docs
├── Front/                 # Application React/TypeScript/Vite — branche front
├── Back/                  # API Spring Boot — branche backend
├── Docker/                # Compose et déploiement — branche docker
├── Database/              # Scripts SQL et migrations — branche database
├── .github/               # CI, templates d'issues et de PR, CODEOWNERS
├── CONTRIBUTING.md        # Règles de travail en équipe
├── LICENSE.md             # Licence d'utilisation pédagogique
└── README.md
```

## Branches et organisation

| Branche    | Rôle                                 | Responsable                    |
| ---------- | ------------------------------------ | ------------------------------ |
| `main`     | Branche principale, référence stable | Équipe (validation uniquement) |
| `dev`      | Intégration et tests communs         | Équipe                         |
| `docs`     | Dossier `Docs/`                      | Responsable documentation      |
| `front`    | Dossier `Front/`                     | Responsable frontend           |
| `backend`  | Dossier `Back/`                      | Responsable API                |
| `database` | Dossier `Database/`                  | Responsable base de données    |
| `docker`   | Dossier `Docker/`                    | Responsable déploiement        |

Régime actuel : **pas de pull request pour l'instant**. Chacun pousse sur sa branche avec des commits commentés, la CI teste automatiquement, puis le groupe teste et valide. Les PR vers `dev` puis `main` seront utilisées plus tard, une fois les bases en place. Ne pas pousser directement sur `main`.

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour le détail.

## Stack (proposition de l'équipe, à valider par la cliente)

| Couche          | Choix                                                    |
| --------------- | -------------------------------------------------------- |
| Frontend        | React 19, TypeScript 5.9, Vite 8, React Router 7         |
| Interface       | Tailwind CSS 4, daisyUI 5, thème `cefisi` (bleu ciel)    |
| Qualité         | ESLint, Prettier, Vitest, GitHub Actions                 |
| Backend (lot 3) | Java 21, Spring Boot 4, Spring Security, Spring Data JPA |
| Base (lot 3)    | PostgreSQL (H2 en développement)                         |
| Déploiement     | Docker Compose, GitHub                                   |

Voir [ADR-0001](./Docs/adr/0001-frontend-stack.md).

## Démarrage rapide (frontend)

Prérequis : Node.js 22+ et npm 10+ (fichier `Front/.nvmrc`).

```bash
git clone https://github.com/claraops/CEFISI.git
cd CEFISI/Front
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
npm test             # Vitest (aucun test pour l'instant)
npm run build        # build de production dans Front/dist/
npm run preview      # prévisualiser le build
```

## Documentation

| Document                                                       | Contenu                                                                 |
| -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Cahier des charges](./Docs/01-cahier-des-charges.md)          | Contexte, périmètre, acteurs, besoins F1–F19, exigences N1–N10, recette |
| [WBS](./Docs/02-wbs.md)                                        | 7 lots + livraison, échéances, dépendances                              |
| [Plan de tests](./Docs/03-plan-de-tests.md)                    | Tests par rôle, traçabilité, checklist de recette                       |
| [Architecture](./Docs/04-architecture.md)                      | Flux front/API/base/fichiers, contrat API proposé                       |
| [Charte graphique](./Docs/05-charte-graphique.md)              | Palette bleu ciel, typographie, responsive, accessibilité               |
| [Hypothèses & questions](./Docs/06-hypotheses-et-questions.md) | Points à valider par la cliente, registre de décisions                  |

## Données et confidentialité

Le code est destiné au projet de cours. Les documents réels de CEFISI, les comptes et les données personnelles ne doivent jamais être commités. Le formulaire de contact et l'intranet seront implémentés avec un consentement RGPD et des PDF servis exclusivement par l'API protégée.

---

Maintenu par l'équipe CEFISI — [@claraops](https://github.com/claraops), [@Gaspard4i](https://github.com/Gaspard4i), [@edmilson9](https://github.com/edmilson9)
