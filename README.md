# Ma première fiche Tailwind

Fiche de présentation stylée avec Tailwind CSS v4.3.3 (CLI).

## Installer et compiler

```bash
npm ci
npm run build
```

Puis ouvrir `index.html` dans le navigateur.

Pendant le développement, `npm run dev` recompile automatiquement à chaque modification (`Ctrl+C` pour arrêter).

## Classes → effet observé

| Classe | Effet observé |
| --- | --- |
| `bg-accent` | Fond bleu du lien. Couleur définie dans le thème (`src/input.css`) : `--color-accent: #1d4ed8;` |
| `max-w-md` | La fiche ne dépasse pas une largeur moyenne (28rem), même sur grand écran |
| `mx-auto` | La fiche est centrée horizontalement dans la page |
| `mt-3` | Ajoute un espace au-dessus du paragraphe, sous le titre |

## Prédiction vs résultat

Prédiction : en remplaçant `bg-blue-700` par `bg-accent` avec `--color-accent: #1d4ed8`, le lien ne devait pas changer d'apparence.

Résultat : à l'œil, presque aucune différence, mais pas exactement la même couleur. Dans Tailwind v4, `blue-700` vaut `oklch(48.8% 0.243 264.376)`, un bleu un peu plus vif. `#1d4ed8` était la valeur de `blue-700` dans Tailwind v3. L'autre différence est que la couleur porte maintenant un nom qui a du sens (`accent`) et se modifie à un seul endroit.

---

SHA commits

TP1: f318a82bd475cc499e648d20f67244604ea3f293
TP2: 