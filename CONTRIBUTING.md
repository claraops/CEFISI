# Contribuer au projet CEFISI

Merci de contribuer ! Ce dépôt est utilisé par une équipe : les règles ci-dessous garantissent que `main` reste déployable et que chacun peut comprendre l'historique.

## 1. Prérequis

- Node.js **22+** (voir `.nvmrc`), npm 10+.
- Lire le [cahier des charges](./docs/01-cahier-des-charges.md) et le [WBS](./docs/02-wbs.md).
- Configurer votre environnement : `cp .env.example .env`.

## 2. Workflow Git

```
main       ← déployable à tout moment (jalons)
  └── develop ← branche d'intégration
        └── feat/42-filtre-formations ← branche de travail
```

1. Créez ou prenez une **issue** (bug, tâche, question client).
2. Créez votre branche depuis `develop` :

```bash
git switch develop
git pull
git switch -c feat/42-filtre-formations
```

3. Préfixes acceptés : `feat/`, `fix/`, `docs/`, `test/`, `refactor/`, `chore/`.
4. Ouvrez une **pull request** vers `develop`, pas directement vers `main`.
5. La CI doit être verte (typecheck, lint, tests, build).
6. Au moins **une review** d'un autre membre avant merge ; le merge se fait par squash.

## 3. Commits (Conventional Commits)

Format : `type(portée): description courte à l'impératif`

| Type       | Usage                                                  |
| ---------- | ------------------------------------------------------ |
| `feat`     | Nouvelle fonctionnalité                                |
| `fix`      | Correction de bug                                      |
| `docs`     | Documentation uniquement                               |
| `test`     | Ajout/modification de tests                            |
| `refactor` | Réorganisation du code sans changement de comportement |
| `chore`    | Configuration, dépendances, CI                         |

Exemples :

```
feat(formations): ajouter le filtre par niveau (F2)
fix(contact): refuser l'envoi sans consentement RGPD (F5)
docs(wbs): préciser les dépendances entre lots
```

## 4. Qualité

Avant de pousser :

```bash
npm run check
```

- **TypeScript strict** : pas de `any` (sauf justification en commentaire), pas de variables inutilisées.
- **ESLint / Prettier** : `npm run lint:fix` puis `npm run format`.
- **Tests** : chaque correction de bug ajoute un test de non-régression ; chaque besoin M du cahier des charges doit être couvert par un scénario du [plan de tests](./docs/03-plan-de-tests.md).
- **Accessibilité** : navigation clavier, contrastes, textes alternatifs (RGAA AA).
- **Sécurité** : aucun secret dans le code ni dans `.env` versionné ; les droits sont vérifiés côté API, jamais seulement dans le front.

## 5. Conventions de code

- Composants en **PascalCase** (`FormationCard.tsx`), hooks et utilitaires en **camelCase**.
- Un composant par fichier ; les composants partagés dans `src/components/`, le métier dans `src/features/`.
- Imports avec l'alias `@/` (ex. `import { Button } from '@/components/ui/Button'`).
- Libellés d'interface en **français** ; noms de variables en anglais.
- Pas de `fetch` dans les composants : passer par `src/lib/api.ts`.

## 6. Issues et PR

- Utilisez les templates fournis ; renseignez toujours le **besoin** (F1–F19 / N1–N10) concerné.
- Ajoutez les labels `lot-x` et `priorite:*`.
- Dans la PR : description, captures si UI, cases à cocher (tests, docs, accessibilité), issue liée (`Closes #42`).

## 7. Décisions

Toute décision structurante (stack, modèle de données, sécurité) se note dans `docs/adr/` en suivant le modèle de l'[ADR-0001](./docs/adr/0001-frontend-stack.md). Les questions ouvertes vont dans [06-hypotheses-et-questions.md](./docs/06-hypotheses-et-questions.md).

## 8. Confidentialité

Ne commitez **jamais** : mots de passe, tokens, données personnelles, PDF réels de CEFISI, fichiers `.env`. En cas de fuite, prévenez immédiatement l'équipe et rotationnez la valeur concernée.
