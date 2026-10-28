# Atelier Sass

Projet Sass autonome (sans Tailwind) : une fiche HTML stylée à partir de sources Sass modulaires.

## Lancer et compiler

```bash
cd atelier-sass
npm ci
npm run build   # ou npm run dev pour recompiler à chaque modification
```

Puis ouvrir `index.html`. La page charge `./dist/sass.css`, généré par Sass (non versionné).

## Trajet complet

```
index.html
  └─ <link href="./dist/sass.css">      ← fichier généré par npm run build
       ↑ compilé depuis
src/scss/app.scss                       ← entrée : @use "composants" + styles du body
  └─ @use "composants" → _composants.scss
       ├─ @function espace($steps)       ← calcule tokens.$unit × $steps
       ├─ @mixin panneau($color)         ← padding, bordure gauche, arrondi
       ├─ .fiche { @include panneau(…) }
       ├─ .note  { @include panneau(…) }
       └─ @use "tokens" → _tokens.scss
            ├─ $accent: #be123c
            └─ $unit: 0.25rem
```

`@use` charge un module et préfixe ses membres par son nom : dans `_composants.scss`, la couleur s'écrit `tokens.$accent`.

## Calculs : padding avant / après

`espace($steps)` renvoie `$unit × $steps`, avec `$unit = 0.25rem`.

| Appel | Calcul | Prédiction | Valeur dans `dist/sass.css` |
| --- | --- | --- | --- |
| `espace(4)` (border-radius) | 0.25rem × 4 | 1rem | `border-radius: 1rem;` |
| `espace(6)` (padding, **avant**) | 0.25rem × 6 | 1.5rem | `padding: 1.5rem;` |
| `espace(8)` (padding, **après**) | 0.25rem × 8 | 2rem | `padding: 2rem;` |

## Modifications (étape 3)

1. **Token `$accent` : `#1d4ed8` → `#be123c`.** Deux effets visuels : la bordure gauche de la fiche passe du bleu au rouge, et le titre `h1` aussi. Une seule variable change, et les deux règles qui l'utilisent suivent.
2. **Padding : `espace(6)` → `espace(8)`.** Prédiction : 2rem. Le CSS généré contient bien `padding: 2rem;`, et la fiche a plus d'espace intérieur.
3. **Nouvel élément `.note`** (`<aside class="note">` dans `index.html`). Sa règle réutilise `@include panneau(tokens.$accent)` avec un fond différent (`#fff1f2`). Le mixin est donc utilisé par deux sélecteurs, `.fiche` et `.note`, qui ont exactement le même padding, la même bordure et le même arrondi dans le CSS généré.

## Fonction ou mixin ?

- Une **fonction** (`@function espace`) **renvoie une valeur** (ici une longueur). On l'utilise à droite d'une propriété : `padding: espace(8);`.
- Un **mixin** (`@mixin panneau`) **produit des déclarations CSS** (plusieurs propriétés d'un coup). On l'insère dans une règle avec `@include panneau(...)`.

## Résultat observé

À compléter après `npm run build` et rechargement de la page.

## Capture

`capture.png` : à ajouter.

## Aide reçue

À compléter. L'énoncé demande de noter l'aide reçue d'un chat et les vérifications faites.
