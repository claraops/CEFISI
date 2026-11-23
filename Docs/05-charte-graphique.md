# Charte graphique — CEFISI

> Objectif (N6) : bleu ciel du site actuel, design moderne, **sans copier-coller**. Les valeurs ci-dessous sont une proposition à faire valider par la cliente à partir du site existant.

## 1. Palette

| Rôle           | Nom           | Hex                   | Usage                                   |
| -------------- | ------------- | --------------------- | --------------------------------------- |
| Primaire       | Ciel CEFISI   | `#0EA5E9`             | CTA, liens, accents, état actif         |
| Primaire clair | Ciel pâle     | `#E0F2FE`             | Fonds de section, surlignages           |
| Primaire foncé | Ciel profond  | `#0369A1`             | Survols, titres sur fond clair          |
| Secondaire     | Nuit          | `#0F172A`             | Textes, pied de page, dark mode         |
| Neutre         | Blanc / Brume | `#FFFFFF` / `#F8FAFC` | Fonds de page et cartes                 |
| Accent         | Menthe        | `#10B981`             | Labels, badges « ouvert », confirmation |
| Alerte         | Ambre         | `#F59E0B`             | Appels à l'action secondaires, alertes  |

Contraste visé : **AA (RGAA)** — par exemple texte `#0F172A` sur `#FFFFFF` (≈ 16:1) et `#FFFFFF` sur `#0369A1` (≈ 5:1). Le bleu `#0EA5E9` sert de fond uniquement avec du texte blanc pour les grands textes/gras, ou avec du texte sombre sur fond clair.

## 2. Typographie

- **Titre** : `Inter`, semi-gras/gras, interlignage serré (1.1–1.2).
- **Corps** : `Inter`, 16 px minimum, interlignage 1.6, largeur de lecture ~70 caractères.
- **Taille** : échelle fluide via Tailwind (`text-3xl` → `text-5xl` pour les titres de page).
- Fallback système : `system-ui, -apple-system, "Segoe UI", sans-serif`.

## 3. Formes et rythme

- Rayon de bordure : `0.75rem` pour les cartes, `9999px` pour les badges/pills.
- Ombres légères : `shadow-sm` au repos, `shadow-md` au survol.
- Espacement : multiples de `0.25rem` (échelle Tailwind), sections espacées de `4rem` à `6rem`.
- Maximale de contenu : `1200px` centré (`container`).
- Animation : transitions 150–200 ms, **respect de `prefers-reduced-motion`**.

## 4. Composants daisyUI utilisés

| Composant                         | Usage                                                    |
| --------------------------------- | -------------------------------------------------------- |
| `btn btn-primary`                 | Candidater, envoyer, se connecter                        |
| `card`                            | Formations, rentrées, chiffres clés, membres de l'équipe |
| `badge`                           | Niveau, type de document, statut de recrutement          |
| `input` / `textarea` / `checkbox` | Formulaires de contact et de connexion                   |
| `navbar` / `footer`               | En-tête et pied de page publics                          |
| `alert`                           | Consentement RGPD, erreurs de formulaire                 |
| `tabs`                            | Alternance programme / blocs de compétences              |

Le thème `cefisi` est défini dans `Front/src/styles/index.css` via `@plugin "daisyui/theme"`.

## 5. Responsive

| Rupture       | Comportement                                                          |
| ------------- | --------------------------------------------------------------------- |
| `< 640 px`    | Navigation mobile (menu repliable), cartes en 1 colonne, hero compact |
| `640–1023 px` | Grilles en 2 colonnes, navigation compacte                            |
| `≥ 1024 px`   | Navigation complète, grilles en 3 ou 4 colonnes                       |

Aucun débordement horizontal ; cibles tactiles ≥ 44 × 44 px.

## 6. Accessibilité (N8)

- Navigation clavier complète et ordre de tabulation logique.
- `focus-visible` toujours visible (anneau bleu profond).
- Textes alternatifs pertinents sur photos et logos ; images décoratives avec `alt=""`.
- Structure sémantique : `header`, `nav`, `main`, `section`, `article`, `footer`, un seul `h1` par page.
- Liens explicites (« Voir la formation MOA en SI » plutôt que « Cliquez ici »).
- Pas de couleur comme seul indicateur d'état (toujours un texte ou une icône).
- Langue déclarée : `lang="fr"` dans `index.html`.

## 7. À faire / à ne pas faire

✅ Faire : aplats bleu ciel, cartes aérées, photos humaines de l'équipe, chiffres clés mis en évidence, CTA unique par section.
❌ Éviter : dégradés tape-à-l'œil, recopier l'ancien site, textes minuscules, menus à 12 entrées, animations automatiques, images sans alt, boutons sans libellé.
