# Contribuer au projet CEFISI

Merci de contribuer ! Nous sommes quatre sur le projet : un dossier et une branche par périmètre pour éviter les conflits.

## 1. Principe général

Pour l'instant, **pas de pull request**. Le rythme est :

1. chacun travaille sur **sa** branche et pousse avec des commits bien commentés ;
2. la CI teste automatiquement à chaque push (front : typecheck, lint, build) ;
3. on teste ensemble, puis on valide ;
4. les PR vers `dev` puis `main` seront utilisées plus tard, quand les bases seront stables.

Ne pas pousser directement sur `main`.

## 2. Arborescence

```
CEFISI/
├── Docs/        # documentation projet        -> branche docs
├── Front/       # application React            -> branche front
├── Back/        # API Spring Boot              -> branche backend
├── Docker/      # déploiement                  -> branche docker
└── Database/    # scripts SQL                  -> branche database
```

Les dossiers `Back/`, `Docker/` et `Database/` contiennent un `.gitkeep` : ils sont prêts à recevoir le code de leur responsable.

## 3. Branches

| Branche    | Rôle                                 | Ne pas dériver sur              |
| ---------- | ------------------------------------ | ------------------------------- |
| `main`     | Branche principale, référence stable | aucune modification directe     |
| `dev`      | Intégration et tests communs         | —                               |
| `docs`     | Dossier `Docs/`                      | les autres dossiers             |
| `front`    | Dossier `Front/`                     | les autres dossiers             |
| `backend`  | Dossier `Back/`                      | les autres dossiers             |
| `database` | Dossier `Database/`                  | les autres dossiers             |
| `docker`   | Dossier `Docker/`                    | les autres dossiers             |

## 4. Workflow actuel (sans PR)

```bash
git switch front          # ou docs / backend / database / docker
git pull --rebase origin front
# ... modifications dans SON dossier uniquement ...
git add -A
git commit -m "feat(front): ajouter le composant X (F2)"
git push
```

Si vous travaillez sur plusieurs branches, pensez à `git switch` avant de modifier des fichiers. Un conflit se règle sur la branche de travail, jamais en écrasant `main`.

## 5. Commits (Conventional Commits)

Format : `type(portée) : description courte à l'impératif`

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
docs(wbs): préciser les dépendances entre lots
feat(front): ajouter le catalogue avec filtre par niveau (F2)
fix(front): refuser l'envoi sans consentement RGPD (F5)
chore(ci): adapter la CI au dossier Front/
```

Le commentaire de commit doit permettre de comprendre le besoin couvert (F1–F19 / N1–N10) sans lire le diff.

## 6. Qualité et tests

Avant de pousser :

```bash
cd Front
npm run check
```

- CI GitHub Actions : `typecheck`, `lint`, `build` uniquement (aucun test pour le moment ; Vitest est installé et prêt).
- TypeScript strict : pas de `any` sans justification, pas de variables inutilisées.
- ESLint / Prettier : `npm run lint:fix` puis `npm run format`.
- Quand des tests seront ajoutés : chaque correction de bug aura un test de non-régression et chaque besoin M du cahier des charges sera couvert par un scénario du [plan de tests](./Docs/03-plan-de-tests.md).
- Accessibilité : navigation clavier, contrastes, textes alternatifs (RGAA AA).
- Sécurité : aucun secret dans le code ni dans `.env` versionné ; les droits sont vérifiés côté API, jamais seulement dans le front.

## 7. Conventions de code (structure prévue)

Le dépôt est en initialisation : les dossiers ci-dessous décrivent la structure **prévue** du frontend, à créer dans `Front/` au moment de l'implémentation.

- Composants en PascalCase (ex. `FormationCard.tsx`), hooks et utilitaires en camelCase.
- Un composant par fichier ; structure prévue : `Front/src/components/`, `Front/src/features/`.
- Imports avec l'alias `@/` (déjà configuré dans `Front/vite.config.ts`).
- Libellés d'interface en français ; noms de variables en anglais.
- Pas de `fetch` éparpillé : un client API centralisé `Front/src/lib/api.ts` sera créé au lot 3.

## 8. Dossiers et PR (plus tard)

- Utilisez les templates fournis ; renseignez toujours le besoin (F1–F19 / N1–N10) concerné.
- Ajoutez les labels `lot-x` et `priorite:*`.
- Quand on repassera aux PR : une PR par tâche, vers `dev`, avec description, captures si UI et issue liée (`Closes #42`).

## 9. Décisions

Toute décision structurante (stack, modèle de données, sécurité) se note dans `Docs/adr/` en suivant le modèle de l'[ADR-0001](./Docs/adr/0001-frontend-stack.md). Les questions ouvertes vont dans [06-hypotheses-et-questions.md](./Docs/06-hypotheses-et-questions.md).

## 10. Confidentialité

Ne commitez jamais : mots de passe, tokens, données personnelles, PDF réels de CEFISI, fichiers `.env`. En cas de fuite, prévenez immédiatement l'équipe et rotationnez la valeur concernée.
