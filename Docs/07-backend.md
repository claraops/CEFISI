# Backend : fonctionnement, architecture et tests

> Document de référence pour `Back/` (API Spring Boot). Il décrit les choix de l'équipe, à tenir pour tout nouveau code.

## 1. Stack

Java 21, Spring Boot 4.2, Maven (wrapper `./mvnw`), Spring Security, Spring Data JPA, H2 en développement, PostgreSQL en production.

## 2. Architecture : n-tier, découpée par fonctionnalité

Quatre couches. Chaque couche n'appelle que celle du dessous : un controller ne parle jamais directement à un repository.

| Couche | Rôle | Classes |
| --- | --- | --- |
| Présentation | Reçoit les requêtes HTTP, valide l'entrée, renvoie du JSON | `Controller`, DTO |
| Métier | Règles de gestion et droits d'accès (ex. étudiant inscrit) | `Service` |
| Accès aux données | Lecture et écriture en base | `Repository` (Spring Data JPA), entités |
| Base | Stockage | PostgreSQL (H2 en dev) |

On découpe d'abord par fonctionnalité, puis par couche à l'intérieur :

```
fr.upec.cefisi
├── auth/        connexion, blocage après échecs répétés
├── user/        Utilisateur, Role, Inscription
├── formation/   Formation, Session
├── intranet/    Dossier, Document, stockage des fichiers
├── content/     Page, MembreEquipe, Parametre
├── contact/     MessageContact
├── audit/       JournalConnexion, historique des modifications
└── common/      configuration, gestion des erreurs, sécurité
```

Chaque dossier contient ses `XxxController`, `XxxService`, `XxxRepository`, l'entité et ses DTO.

## 3. Règles de code

- **DTO** (de préférence des `record`) pour tout ce qui entre et sort de l'API. On n'expose jamais une entité JPA, notamment pour ne pas renvoyer un mot de passe haché.
- **Droits** vérifiés côté serveur, par rôle (`@PreAuthorize`). Une règle d'accès un peu complexe va dans un service dédié (ex. `DocumentAccessService`).
- **Erreurs** : un `@RestControllerAdvice` unique, format JSON commun, messages compréhensibles par le front.
- **Validation** : Bean Validation (`@Valid`) sur les DTO.
- **Stockage des PDF** : derrière une interface `FileStorage`, pour pouvoir changer l'implémentation sans toucher au métier.
- **Recherche** de formations : `Specification` JPA.
- Pas d'abstraction « au cas où » : pas d'interface `ServiceImpl` sans seconde implémentation.
- Les secrets viennent de variables d'environnement, jamais du code.

## 4. Tests

| Type | Outil | Usage |
| --- | --- | --- |
| Service (logique métier) | JUnit + Mockito (`@ExtendWith(MockitoExtension.class)`, `@Mock`, `@InjectMocks`) | Sans démarrer Spring : rapide. Les repositories sont simulés avec des mocks. |
| Controller et droits par rôle | `@SpringBootTest` + `@AutoConfigureMockMvc` + `@WithMockUser(roles = "...")` | Exemple : `SecurityTests`. |
| Repository | `@DataJpaTest` | Requêtes et mappings sur H2. |
| Couverture | JaCoCo | Rapport dans `Back/target/site/jacoco/index.html`. |

Conventions :
- Une classe de test par classe testée, dans le même package, suffixe `Tests`.
- Un test par comportement, nom en anglais qui se lit comme une phrase (`requestWithoutAuthenticationIsRejected`).
- Chaque règle d'accès du cahier des charges (F8 à F14) a au moins un test par rôle.

Commandes (depuis `Back/`) :

```bash
./mvnw test      # lance les tests
./mvnw verify    # tests + rapport JaCoCo
```

Aucun seuil de couverture n'est imposé pour l'instant : à fixer quand il y aura du code métier.

## 5. Docker

- Le `Dockerfile` du backend est dans `Back/` (build multi-étapes JDK 21 puis JRE 21, utilisateur non root, port 8080).
- Une copie identique est dans `Docker/back/Dockerfile`, pour le futur `docker-compose.yml`.
- Après toute modification de `Back/Dockerfile`, lancer `Docker/sync.sh` : la CI échoue si les deux fichiers diffèrent.

```bash
docker build -t cefisi-back ./Back
docker run --rm -p 8080:8080 cefisi-back
```

Une réponse 401 sur <http://localhost:8080> est normale : Spring Security protège toutes les routes par défaut.

## 6. CI

Le job `back` de `.github/workflows/ci.yml` s'exécute à chaque push et pull request : vérification de la copie du Dockerfile, puis `./mvnw -B verify` sur Java 21. Le rapport JaCoCo est publié en artefact.

## 7. Décisions encore ouvertes

- Session avec cookie HttpOnly et CSRF, ou JWT (voir [Architecture](./04-architecture.md)) : à trancher avec l'équipe.
- Seuil de couverture de tests.
- Migrations de base (Flyway) : à décider avec le responsable `Database/`.
