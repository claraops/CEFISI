# Plan de tests & recette

> Référence : cahier des charges, section 9. Objectif : prouver les **critères de recette** avant le 11 décembre 2026.
> Champion tests : à nommer. Statut : 🟦 à exécuter.

## 1. Stratégie

| Niveau          | Ce qui est testé                                    | Outil proposé                                               | Périmètre           |
| --------------- | --------------------------------------------------- | ----------------------------------------------------------- | ------------------- |
| Unitaires       | Calculs, formatage, validation de formulaire        | Vitest                                                      | Front + API         |
| Composants      | Rendu des composants React et accessibilité de base | Vitest + Testing Library                                    | Front               |
| Intégration     | Front ↔ API, contrôle d'accès                       | Vitest + Mock Service Worker (front), Spring MVC Test (API) | Les deux            |
| End-to-end      | Parcours complets par rôle                          | Playwright                                                  | Critères de recette |
| Non fonctionnel | Responsive, accessibilité, performance, sécurité    | Playwright, axe, Lighthouse                                 | Global              |

> Le socle initial fournit les scripts de test (Vitest) ; les tests et leur structure arrivent avec les lots 3 à 7.

## 2. Matrice de tests par rôle

| ID   | Rôle                 | Action attendue                                      | Résultat attendu                                        | Besoin   |
| ---- | -------------------- | ---------------------------------------------------- | ------------------------------------------------------- | -------- |
| R-01 | Visiteur             | Parcourir toutes les pages publiques                 | Aucune erreur, lien « Candidater » visible et cliquable | F1–F7    |
| R-02 | Visiteur             | Envoyer le formulaire sans consentement              | Envoi refusé, message d'erreur clair                    | F5, N4   |
| R-03 | Visiteur             | Envoyer avec consentement + honeypot rempli          | Envoi silencieusement rejeté (anti-spam)                | F5       |
| R-04 | Visiteur             | Ouvrir une URL de document protégé                   | Refus 401/403, aucun fichier servi                      | F14, N3  |
| R-05 | Étudiant inscrit     | Se connecter puis télécharger un PDF de sa formation | Téléchargement OK via URL protégée                      | F8, F13  |
| R-06 | Étudiant non inscrit | Tenter le même téléchargement                        | Refus 403                                               | F13, F14 |
| R-07 | Étudiant             | Tenter modifier/supprimer un document                | Action indisponible et refusée côté API                 | F13      |
| R-08 | Enseignant           | Déposer un PDF dans son dossier                      | Dépôt OK, auteur = enseignant                           | F12, H2  |
| R-09 | Enseignant           | Modifier le PDF d'un collègue                        | Refus (documents « les siens »)                         | H2       |
| R-10 | Admin                | Créer un compte + inscrire un étudiant               | Compte actif, inscription visible                       | F11, H1  |
| R-11 | Admin                | Créer/modifier une page sans code                    | Changement visible immédiatement sur le site public     | F16      |
| R-12 | Admin                | Débloquer un compte après 5 échecs                   | Compte réutilisable                                     | F10      |
| R-13 | Super admin          | Modifier le paramètre `candidature.url`              | Le bouton du site public pointe vers la nouvelle URL    | F6, H5   |
| R-14 | Admin                | Consulter les messages de contact                    | Liste lisible, consentement affiché                     | F18, N4  |
| R-15 | Visiteur             | Forcer un rôle admin dans le navigateur              | API refuse : rôle revérifié côté serveur                | N1       |

## 3. Tests fonctionnels (traçabilité)

| Besoin | Scénario minimal                           | Critère de succès                                                                           |
| ------ | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| F1     | Accueil sur desktop et mobile              | Rencontrent toutes les sections : recrutement, rentrées, chiffres, financement, partenaires |
| F2     | Recherche « blockchain » + filtre niveau   | Liste filtrée, état vide explicite si aucun résultat                                        |
| F3     | Ouvrir une fiche formation                 | Objectifs, programme, blocs, durée, financement, débouchés, plaquette présents              |
| F4     | Pages approche et équipe                   | Contenus et photos avec textes alternatifs                                                  |
| F5     | Formulaire contact                         | Consentement obligatoire, anti-spam, confirmation                                           |
| F6     | Cliquer « Candidater »                     | Redirection vers l'URL configurée dans le back-office                                       |
| F7     | Lien réunion d'information                 | Lien externe s'ouvre correctement                                                           |
| F8     | Connexion par identifiant **et** par email | Les deux fonctionnent ; mot de passe oublié accessible                                      |
| F9     | Chaque rôle                                | Voit uniquement ses écrans et actions                                                       |
| F10    | 5 échecs de connexion                      | Blocage temporaire + déblocage admin                                                        |
| F11    | Admin crée compte et inscription           | Étudiant peut ensuite accéder aux documents                                                 |
| F12    | Enseignant crée dossier et dépose PDF      | PDF visible dans l'arborescence                                                             |
| F13    | Étudiant inscrit télécharge                | Fichier conforme, nom conservé                                                              |
| F14    | Accès direct sans session                  | 401/403, même avec une URL connue                                                           |
| F15    | Tableau de bord                            | Indicateurs et accès rapides présents                                                       |
| F16    | Édition sans code                          | Contenu modifié visible immédiatement                                                       |
| F17    | Upload image/plaquette                     | Média disponible dans l'éditeur                                                             |
| F18    | Traitement message                         | Message lu/supprimé                                                                         |
| F19    | Historique                                 | Modification datée avec auteur                                                              |

## 4. Tests non fonctionnels

| Exigence            | Vérification                                                                     | Outil                         |
| ------------------- | -------------------------------------------------------------------------------- | ----------------------------- |
| N1 Sécurité         | Mots de passe hachés en base, HTTPS, pas de XSS/CSRF/injection, contrôle serveur | Revue + OWASP ZAP / tests API |
| N2 Anti force brute | Seuil de blocage (à valider) et déblocage admin                                  | Test E2E                      |
| N3 Documents        | Aucun fichier servi par le serveur statique du front                             | Test réseau                   |
| N4 RGPD             | Consentement tracé, politique accessible, suppression sur demande                | Test manuel + revue           |
| N5 Responsive       | 375 px, 768 px, 1440 px sans débordement                                         | Playwright / DevTools         |
| N6 Charte           | Bleu ciel cohérent, pas de copier-coller du site actuel                          | Revue design                  |
| N7 Performance      | Pages publiques < 2 s (connexion standard)                                       | Lighthouse                    |
| N8 Accessibilité    | Contrastes AA, navigation clavier, alt, focus visible                            | axe + test clavier            |
| N9 Maintenabilité   | `cd Front && npm ci && npm run dev` depuis un clone propre                                   | CI                            |
| N10 Déploiement     | `docker compose up` puis démo                                                    | CI / machine de démo          |

## 5. Checklist de recette (à faire signer par la MOA)

- [ ] Visiteur : toutes les pages publiques + lien candidatures.
- [ ] Admin : page créée/modifiée sans code, visible immédiatement.
- [ ] Enseignant : PDF déposé ; étudiant inscrit le télécharge ; non-inscrit et visiteur refusés.
- [ ] Connexion : blocage après plusieurs échecs + déblocage admin.
- [ ] Mobile et tablette : affichage correct.
- [ ] Contact : envoi sans consentement refusé.
- [ ] Docs projet et URL du dépôt transmis.

## 6. Processus de bug

1. Créer une issue avec le template **Bug report** (étapes de reproduction, rôle, navigateur, capture).
2. Labels : `bug` + `priorite:haute|moyenne|basse` + `lot-x`.
3. Corriger sur une branche `fix/<issue>-<slug>`, PR avec preuve (capture ou test ajouté).
4. Clore l'issue quand le test de non-régression passe en CI.
