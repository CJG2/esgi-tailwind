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

# TP2 — Page d'album (`mission.html`)

Page de l'album *Heroes and Villains* de Metro Boomin. Compiler avec `npm ci` puis `npm run build`, et ouvrir `mission.html`.

## Mini-DA

- **Intention** : une page sombre comme la pochette, où seul l'orange de la flamme attire l'œil vers l'action principale (Play).
- **Palette** : fond noir `neutral-950`, texte blanc, texte secondaire gris `neutral-400`, accent orange flamme `#f97316` défini dans `@theme` (`--color-flame`).
- **Hiérarchie** : album (`text-4xl font-bold`), artiste (`text-xl`, orange), année et artistes invités (gris, plus petits).
- **Rythme d'espacement** : `mt-2` dans un groupe, `mt-6` entre les éléments, `mt-8` / `gap-12` entre les deux grands blocs.

Le détail est dans `public/direction-artistique.md`.

## Trois choix expliqués

| Choix | Classe | Effet |
| --- | --- | --- |
| Hiérarchie du titre | `text-4xl font-bold` sur le `<h1>` | Le nom de l'album est le texte le plus grand et le plus gras de la page : on le lit en premier. L'artiste vient juste après en `text-xl`, en orange. |
| Rythme des espacements | `mt-6` | Même écart entre chaque élément de la colonne de gauche (infos, description, bouton, lien) et entre les boutons et la liste : la page respire de façon régulière. `mt-2` resserre ce qui va ensemble (album, artiste, année). |
| Couleur de l'action | `bg-flame` sur Play | Play est le seul bouton plein, en orange : c'est l'action principale. Shuffle et Add to Library n'ont qu'une bordure grise (`border-neutral-600`). |


## Captures

- Mobile (390 px) : `public/assets/tp2-mobile-capture.png` `public/assets/tp2-mobile2-capture.png`
- Grand écran (1280 px) : `public/assets/tp2-pc-capture.png`

---

SHA commits

TP1: f318a82bd475cc499e648d20f67244604ea3f293
TP2: 5010c33bbce31655b6e782d07f9cc6b8659a270c