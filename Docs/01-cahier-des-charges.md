# Cahier des charges — Refonte du site web CEFISI

> Synthèse structurée et traçable du document source : `Cahier des charges refonte du site web CEFISI.pdf` (9 nov. 2026, @Gaspard).
> Ce fichier est la **référence textuelle versionnée** du projet. Toute divergence avec le PDF doit être signalée et validée par la maîtrise d'ouvrage.

## 1. Contexte et objectifs

CEFISI est un organisme de formation en informatique (reconversion et alternance). Le projet refonte le **site d'information** pour le rendre plus moderne, sécurisé et modifiable sans développeur.

- **Cadre** : Master 1 Informatique — l'enseignante est la **maîtrise d'ouvrage (MOA)**, l'équipe la **maîtrise d'œuvre (MOE)**.
- **Site actuel** : deux outils distincts — un site d'information et une plateforme sécurisée de gestion des candidatures. **Seul le site d'information est refondu** ; la plateforme de candidatures reste en l'état.
- **Sources** : site actuel + visio de cadrage avec la cliente.

### Objectifs de la refonte

| #   | Objectif                                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O1  | Présenter les formations (MOA en SI, concepteur développeur d'applications, no code, blockchain) et rassurer les candidats : financements, labels, débouchés. |
| O2  | Orienter les visiteurs vers la plateforme de candidatures par un simple lien de redirection.                                                                  |
| O3  | Donner aux enseignants un intranet pour déposer cours, TD et TP, et aux étudiants inscrits un accès en lecture/téléchargement.                                |
| O4  | Permettre à l'administration de modifier contenus, pages et utilisateurs **sans code**.                                                                       |
| O5  | Proposer un design moderne, responsive et fidèle à la charte **bleu ciel**, sans copier-coller de l'existant.                                                 |

## 2. Périmètre

| Domaine     | Dans le périmètre                                                                               | Hors périmètre                                                   |
| ----------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Site public | Pages, formations, équipe, contact, lien vers les candidatures                                  | Formulaire de candidature, suivi des dossiers                    |
| Intranet    | Dossiers et documents PDF (cours, TD, TP), accès par rôle                                       | Wiki, messagerie, amis, groupes                                  |
| Back-office | Édition des pages/contenus, gestion des utilisateurs, rôles et inscriptions, dépôt de documents | Offres d'emploi, plateforme de candidatures existante            |
| Sécurité    | Authentification, rôles, blocage après tentatives répétées, RGPD                                | Authentification unique (SSO) avec la plateforme de candidatures |

### Hypothèses retenues (à valider par la cliente)

- **H1** : les comptes sont créés par un administrateur, **sans auto-inscription**.
- **H2** : l'enseignant dépose, modifie et supprime **ses propres** documents.
- **H3** : l'étudiant consulte et télécharge uniquement les documents des formations auxquelles il est inscrit.
- **H4** : les fonctions jamais évoquées par la cliente (wiki, messagerie, groupes, offres d'emploi) sont abandonnées.
- **H5** : le lien vers les candidatures est une **URL configurable depuis le back-office**.

## 3. Acteurs et rôles

Cinq profils : **visiteur** (non authentifié), **étudiant**, **enseignant**, **admin**, **super admin**. Quatre rôles de compte ; seul le droit de l'étudiant a été précisé par la cliente, les autres sont des hypothèses.

Légende : **V** voir · **T** télécharger · **C** créer · **M** modifier · **S** supprimer.

| Fonctionnalité                                          | Visiteur | Étudiant | Enseignant                | Admin         | Super admin   |
| ------------------------------------------------------- | -------- | -------- | ------------------------- | ------------- | ------------- |
| Pages publiques                                         | V        | V        | V                         | V, C, M, S    | V, C, M, S    |
| Envoi d'un message de contact                           | C        | C        | C                         | C             | C             |
| Messages de contact reçus                               | —        | —        | V, S                      | V, S          | —             |
| Documents de cours (PDF)                                | —        | V, T     | V, T, C, M, S (les siens) | V, T, C, M, S | V, T, C, M, S |
| Dossiers de l'intranet                                  | —        | V        | V, C, M (les siens)       | V, C, M, S    | V, C, M, S    |
| Profil personnel                                        | —        | V, M     | V, M                      | V, M          | V, M          |
| Utilisateurs et inscriptions                            | —        | —        | —                         | V, C, M, S    | V, C, M, S    |
| Rôles et droits                                         | —        | —        | —                         | V             | V, C, M, S    |
| Paramètres et sécurité (IP bloquées, lien candidatures) | —        | —        | —                         | —             | V, M          |

> ⚠️ Les droits « messages reçus », « rôles et droits » et « paramètres » sont à confirmer : le tableau ci-dessus reproduit les hypothèses du PDF.

## 4. Besoins fonctionnels

Priorité : **M** = indispensable (MVP du 11 décembre) · **S** = souhaitable.

### Site public

| Id  | Besoin                                                                                                       | Priorité |
| --- | ------------------------------------------------------------------------------------------------------------ | -------- |
| F1  | Page d'accueil : recrutement ouvert, prochaines rentrées, chiffres clés, financement, partenaires et labels  | M        |
| F2  | Catalogue des formations avec recherche et filtre par niveau                                                 | M        |
| F3  | Fiche formation : objectifs, programme et blocs de compétences, durée, financement, débouchés, plaquette PDF | M        |
| F4  | Pages approche pédagogique et équipe                                                                         | M        |
| F5  | Formulaire de contact avec consentement RGPD et protection anti-spam                                         | M        |
| F6  | Lien « Candidater » vers la plateforme de candidatures, modifiable en back-office                            | M        |
| F7  | Inscription à une réunion d'information (lien externe)                                                       | S        |

### Comptes et sécurité

| Id  | Besoin                                                                              | Priorité |
| --- | ----------------------------------------------------------------------------------- | -------- |
| F8  | Connexion par identifiant ou email + mot de passe, réinitialisation du mot de passe | M        |
| F9  | Quatre rôles : super admin, admin, enseignant, étudiant, avec droits distincts      | M        |
| F10 | Blocage temporaire après tentatives de connexion répétées, déblocage par un admin   | M        |
| F11 | Création des comptes et inscription aux formations par un admin                     | M        |

### Intranet de documents

| Id  | Besoin                                                                           | Priorité |
| --- | -------------------------------------------------------------------------------- | -------- |
| F12 | Création de dossiers et dépôt de PDF (cours, TD, TP) par l'enseignant et l'admin | M        |
| F13 | Consultation et téléchargement par les étudiants inscrits, sans modification     | M        |
| F14 | Accès protégé : aucun document accessible sans connexion ni droit                | M        |

### Back-office

| Id  | Besoin                                                                                  | Priorité |
| --- | --------------------------------------------------------------------------------------- | -------- |
| F15 | Tableau de bord administrateur                                                          | M        |
| F16 | Création et modification des pages et contenus (formations, équipe, rentrées) sans code | M        |
| F17 | Gestion des médias (images, plaquettes PDF)                                             | S        |
| F18 | Lecture et traitement des messages de contact                                           | S        |
| F19 | Historique des modifications de contenu                                                 | S        |

## 5. Exigences non fonctionnelles

| Id  | Exigence                 | Détail                                                                                                             | Origine |
| --- | ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------- |
| N1  | Sécurité                 | Mots de passe hachés, protection injection / XSS / CSRF, HTTPS, contrôle d'accès **côté serveur**                  | Client  |
| N2  | Anti force brute         | Blocage temporaire après plusieurs échecs, déblocage par un admin (seuil à valider)                                | Client  |
| N3  | Protection des documents | Téléchargement via **URL protégée**, jamais un lien public                                                         | Équipe  |
| N4  | RGPD                     | Consentement dans les formulaires, politique de confidentialité, minimisation des données, suppression sur demande | Client  |
| N5  | Responsive               | Affichage adapté au téléphone et à la tablette                                                                     | Client  |
| N6  | Charte graphique         | Bleu ciel du site actuel, design moderne, pas de copier-coller                                                     | Client  |
| N7  | Performance              | Pages publiques < 2 s sur connexion standard (seuil proposé, à valider)                                            | Équipe  |
| N8  | Accessibilité            | Contrastes, navigation clavier, textes alternatifs — viser **RGAA AA** (proposé)                                   | Équipe  |
| N9  | Maintenabilité           | Contenu modifiable sans code, code versionné sur GitHub, documentation d'installation                              | Client  |
| N10 | Déploiement              | Solution déployable avec démonstration le jour de la soutenance                                                    | Client  |

## 6. Modèle de données (12 entités)

> Modèle proposé par l'équipe, à affiner au cadrage.

| Entité           | Attributs principaux                                               | Relations                                           |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| Utilisateur      | nom, prénom, email, mot de passe haché, actif                      | un rôle ; plusieurs inscriptions                    |
| Rôle             | super admin, admin, enseignant, étudiant                           | plusieurs utilisateurs                              |
| Formation        | titre, niveau, durée, financement, programme, débouchés, plaquette | plusieurs sessions ; plusieurs dossiers             |
| Session          | dates, lieu, statut du recrutement                                 | une formation ; plusieurs inscriptions              |
| Inscription      | date, statut                                                       | un utilisateur ; une session                        |
| Dossier          | nom, parent éventuel                                               | une formation ; plusieurs documents ; sous-dossiers |
| Document         | titre, fichier PDF, type (cours, TD, TP), date de dépôt            | un dossier ; un auteur                              |
| Page             | adresse, titre, contenu, publiée, dates                            | un auteur                                           |
| MessageContact   | nom, email, objet, message, date, consentement                     | aucune                                              |
| MembreEquipe     | nom, fonction, biographie, photo                                   | aucune                                              |
| Paramètre        | clé, valeur (ex. URL des candidatures)                             | aucune                                              |
| JournalConnexion | adresse IP, date, résultat, blocage                                | un utilisateur (facultatif)                         |

**Règle d'accès clé** : un étudiant voit un document **seulement s'il est inscrit à une session de la formation du dossier**.

## 7. Architecture et choix techniques

Le front React interroge une **API Spring Boot**, seule à accéder à la base et aux fichiers (protection des données demandée par la cliente). L'API vérifie le rôle à chaque requête. La plateforme de candidatures reste hors périmètre, atteinte par un simple lien.

| Couche      | Choix proposé                                            | Raison                                            |
| ----------- | -------------------------------------------------------- | ------------------------------------------------- |
| Frontend    | React, TypeScript, Vite, React Router                    | Choix de l'équipe, application responsive         |
| Interface   | Tailwind CSS, DaisyUI                                    | Composants prêts, thème bleu ciel personnalisable |
| Backend     | Java 21, Spring Boot 3, Spring Security, Spring Data JPA | Gestion native des rôles et de l'authentification |
| Base        | PostgreSQL (H2 en développement)                         | Relationnelle fiable, installation simple         |
| Fichiers    | Stockage disque servi par l'API                          | Aucun lien public vers les documents              |
| Déploiement | GitHub, Docker Compose                                   | Déployable et reproductible                       |

> La stack est une **proposition de l'équipe, à valider par la cliente** (cf. `./adr/0001-frontend-stack.md`).

## 8. Planning, livrables et WBS

- **Échéance commune : 11 décembre 2026** — cahier des charges, WBS, solution déployable sur GitHub et démonstration.
- Si le projet n'est pas terminé : **devoir sur table** ce jour-là, puis **soutenance fin janvier / début février**.
- Le back-office et l'intranet avancent en parallèle.
- Voir le détail dans [`02-wbs.md`](./02-wbs.md).

## 9. Risques et questions ouvertes

| Risque                                                       | Impact                        | Parade                                                                |
| ------------------------------------------------------------ | ----------------------------- | --------------------------------------------------------------------- |
| Périmètre mal compris (candidatures confondues avec le site) | Travail inutile               | Faire valider ce document **par écrit** par la cliente                |
| Délai court avant le 11 décembre                             | Livrable incomplet            | Livrer d'abord les besoins **M** ; soutenance reportée si besoin      |
| Fuite de documents ou droits mal appliqués                   | Données exposées              | Contrôle d'accès côté serveur + tests par rôle                        |
| Droits enseignant et espace étudiant non précisés            | Refonte tardive               | Confirmer les hypothèses H1–H5                                        |
| Contenu du site actuel obsolète ou contradictoire            | Informations fausses en ligne | Demander le contenu de référence à la cliente                         |
| Édition de contenu sans code trop ambitieuse                 | Retard back-office            | Éditeur simple + modèles de pages, pas de constructeur visuel complet |

**Questions prioritaires** (détail dans [`06-hypotheses-et-questions.md`](./06-hypotheses-et-questions.md)) :

1. Droits exacts de l'enseignant sur les documents ?
2. Contenu de l'espace personnel de l'étudiant au-delà des documents ?
3. Qui crée comptes et inscriptions, et l'auto-inscription est-elle possible ?
4. Faut-il garder wiki, messagerie, groupes ou offres d'emploi ?
5. Quel hébergement est attendu pour la solution déployable ?
6. Quelle est l'URL finale de la plateforme de candidatures, et le SSO est-il exclu ?

## 10. Critères de recette

- [ ] Un visiteur parcourt toutes les pages publiques et atteint le lien vers les candidatures.
- [ ] Un admin crée et modifie une page sans code ; le changement est visible immédiatement.
- [ ] Un enseignant dépose un PDF : un étudiant inscrit le télécharge ; un étudiant non inscrit et un visiteur sont refusés.
- [ ] Après plusieurs échecs de connexion, l'accès est bloqué temporairement et un admin peut débloquer.
- [ ] Le site s'affiche correctement sur téléphone et tablette.
- [ ] Le formulaire de contact refuse un envoi sans consentement.

## 11. Traçabilité besoins → livrables

> Le dépôt est **initialisé uniquement** : aucune page ni logique métier n'est codée. Le tableau ci-dessous indique le lot auquel chaque besoin sera rattaché.

| Besoins | Lot WBS                  | État dans le dépôt                                                            |
| ------- | ------------------------ | ----------------------------------------------------------------------------- |
| F1–F7   | Site public              | À implémenter (lot 4)                                                         |
| F8–F11  | API, comptes et sécurité | À implémenter (lot 3)                                                         |
| F12–F14 | Intranet                 | À implémenter (lot 6)                                                         |
| F15–F19 | Back-office              | À implémenter (lot 5)                                                         |
| N1–N10  | Tests et déploiement     | Outillage en place : CI GitHub Actions, charte, plan de tests, `.env.example` |
