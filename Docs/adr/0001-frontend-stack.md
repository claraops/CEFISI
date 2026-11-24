# ADR-0001 — Stack du frontend CEFISI

- **Statut** : accepté par l'équipe — **à valider par la cliente** (le cahier des charges précise que la stack est une proposition de l'équipe).
- **Date** : 2026-11-23
- **Décideurs** : équipe MOE, Master 1 Informatique

## Contexte

Le site doit être responsive, sécurisé, moderne, fidèle à une charte bleu ciel et modifiable sans code via un back-office. Le projet est réalisé en groupe avec une échéance courte (11 décembre 2026) et doit être déployable/démontrable. L'API sera développée en Java 21 / Spring Boot 4.

## Décision

Utiliser **React 19 + TypeScript + Vite + React Router** pour le front, **Tailwind CSS 4 + daisyUI 5** pour l'interface, avec un thème `cefisi` personnalisé (bleu ciel). Le code est versionné dans le dépôt `claraops/CEFISI`, avec lint, typecheck et build en CI GitHub Actions.

## Conséquences

**Positives**

- TypeScript fournit un contrat explicite avec l'API (12 entités typées), utile en groupe.
- Vite = démarrage rapide et build simple à conteneuriser (fichiers statiques).
- Tailwind + daisyUI permettent un thème bleu ciel centralisé dans un seul fichier CSS.
- CI verte sur chaque PR = garantie que `main` reste déployable (N9/N10).

**Négatives / risques**

- Tailwind 4 et daisyUI 5 sont des versions récentes : la syntaxe du thème doit être vérifiée au build (fait dans ce socle).
- React Router est utilisé en mode bibliothèque ; si la cliente demande du SSR, il faudra revoir (peu probable ici).
- Les données sont temporairement des mocks `Front/src/data/` : ils devront être remplacés par les endpoints réels au lot 3.

## Alternatives écartées

| Alternative            | Raison de l'écart                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| Site statique HTML/CSS | Back-office, rôles et documents protégés nécessitent une vraie application.                  |
| Next.js / SSR          | Complexité supplémentaire inutile : l'API Spring Boot sert déjà les données et les fichiers. |
| Angular / Vue          | Choix de l'équipe et composants daisyUI plus naturels avec React.                            |
| Bootstrap              | Personnalisation du thème bleu ciel moins centralisée que Tailwind + daisyUI.                |
| CSS pur                | Pas de système de composants cohérent pour un travail en groupe.                             |
