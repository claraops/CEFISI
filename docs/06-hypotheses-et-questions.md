# Hypothèses, questions ouvertes et registre de décisions

> Objectif : transformer les zones d'ombre du cahier des charges en **décisions écrites** validées par la cliente (MOA). À faire valider avant d'implémenter les lots 3, 5 et 6.

## 1. Hypothèses à confirmer

| Id  | Hypothèse                                                     | Impact si faux                            | Statut       |
| --- | ------------------------------------------------------------- | ----------------------------------------- | ------------ |
| H1  | Comptes créés par un admin, pas d'auto-inscription            | Écran d'inscription à ajouter (F11)       | ⏳ À valider |
| H2  | Enseignant = ses propres documents seulement                  | Règle de propriété à revoir dans l'API    | ⏳ À valider |
| H3  | Étudiant = documents des formations auxquelles il est inscrit | Règle d'accès centrale (F13/F14) à revoir | ⏳ À valider |
| H4  | Wiki, messagerie, groupes, offres d'emploi abandonnés         | Périmètre à réouvrir → risque de délai    | ⏳ À valider |
| H5  | URL de candidatures configurable en back-office               | Valeur figée dans le code acceptable      | ⏳ À valider |

## 2. Questions prioritaires pour la cliente

| #   | Question                                                                            | Pourquoi c'est bloquant                                          | Réponse reçue |
| --- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------- |
| Q1  | Quels sont les droits exacts de l'enseignant sur les documents ?                    | Détermine F12 et les tests R-08/R-09                             | —             |
| Q2  | Que contient l'espace personnel de l'étudiant au-delà des documents ?               | Dimensionne l'écran « Profil » (F8)                              | —             |
| Q3  | Qui crée les comptes et les inscriptions, et l'auto-inscription est-elle possible ? | Conditionne F11 et H1                                            | —             |
| Q4  | Faut-il garder wiki, messagerie, groupes ou offres d'emploi ?                       | Périmètre (H4)                                                   | —             |
| Q5  | Quel hébergement est attendu pour la solution déployable ?                          | Conditionne N10 et Docker Compose                                | —             |
| Q6  | Quelle est l'URL finale de la plateforme de candidatures, et le SSO est-il exclu ?  | Conditionne F6 et la valeur par défaut de `VITE_CANDIDATURE_URL` | —             |

**Points secondaires à clarifier** : seuil exact de blocage après échecs (F10), contenu de référence du site actuel (durées, dates, lieu), nominal du/des responsables par lot, format des plaquettes PDF, politique de suppression RGPD.

## 3. Registre des décisions (log)

| Date       | Décision                                                              | Prise par | Référence               |
| ---------- | --------------------------------------------------------------------- | --------- | ----------------------- |
| 2026-11-09 | Refonte du site d'information uniquement ; candidatures = simple lien | Cliente   | Cahier des charges §1–2 |
| 2026-11-09 | Stack proposée : React/TS/Vite + Spring Boot/PostgreSQL               | Équipe    | `adr/0001`              |
| 2026-11-23 | Socle initial du dépôt GitHub créé (front React, docs, CI)            | Équipe    | ce dépôt                |

> Quand une réponse arrive : mettre à jour la cellule « Réponse reçue », passer l'hypothèse en ✅/❌, ouvrir une issue `question-client` et, si besoin, écrire un nouvel ADR.

## 4. Modèle d'ADR

Les décisions structurantes se notent dans `docs/adr/` :

```markdown
# ADR-000X — Titre court

- Statut : proposé | accepté | rejeté | remplacé
- Contexte : ...
- Décision : ...
- Conséquences : positives / négatives
- Alternatives écartées : ...
```
