# Front — CEFISI

Application frontend React/TypeScript/Vite du projet CEFISI. Ce dossier appartient à la branche `front`.

## Démarrage

```bash
cd Front
npm ci
cp .env.example .env
npm run dev
```

Le serveur écoute sur <http://localhost:5173> et le proxy `/api` pointe vers `http://localhost:8080` (API Spring Boot, dossier `Back/`).

## Commandes

| Commande            | Rôle                                   |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Serveur de développement               |
| `npm run typecheck` | Vérification TypeScript                |
| `npm run lint`      | ESLint                                 |
| `npm run format`    | Prettier                               |
| `npm test`          | Vitest (aucun test pour l'instant)     |
| `npm run build`     | Build de production dans `Front/dist/` |
| `npm run check`     | typecheck + lint + tests + build       |

## État

Socle initial uniquement : `src/app/App.tsx` est une page minimaliste. Les écrans du site seront ajoutés par l'équipe selon le cahier des charges (`Docs/01-cahier-des-charges.md`) et le WBS (`Docs/02-wbs.md`).

## Règles

- Ne modifier que ce dossier quand on est sur la branche `front`.
- Commits commentés avec un type Conventional Commits (voir `CONTRIBUTING.md` à la racine).
- Aucun secret : les variables `VITE_*` sont publiques dans le navigateur. L'URL de candidature reste à valider par la cliente (`A_VALIDER_PAR_LA_CLIENTE`).
