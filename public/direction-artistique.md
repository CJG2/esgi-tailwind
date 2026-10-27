# Direction artistique — Heroes & Villains

## Intention

Une page sombre comme la pochette, où seul l'orange de la flamme attire l'œil vers l'action principale (Play).

## Palette

| Rôle | Couleur | Utilitaire |
| --- | --- | --- |
| Fond | Noir | `bg-neutral-950` |
| Texte principal | Blanc | `text-white` |
| Texte secondaire, séparateurs | Gris | `text-neutral-400`, `border-neutral-800` |
| **Accent** | Orange flamme `#f97316` (défini dans `@theme`) | `bg-flame`, `text-flame` |

## Hiérarchie

1. **Album** : `text-4xl font-bold`
2. **Artiste** : `text-xl`, en orange
3. **Année** et **artistes invités** : gris, plus petit

## Rythme d'espacement

- `mt-2` : à l'intérieur d'un groupe (album → artiste → année)
- `mt-6` : entre les éléments
- `mt-8` : entre les deux grands blocs (infos de l'album / liste des titres)

## Composants

- **Play** : seul bouton plein orange, c'est l'action principale.
- **Shuffle** et **Add to Library** : même forme que Play, avec juste une bordure grise.
- **Morceaux** : même style pour les 15 lignes (titre en blanc, invités en gris, trait fin en dessous).


## Responsive

- **Mobile (390 px)** : une colonne. Pochette, infos, bouton bibliothèque, lien, puis Play / Shuffle et la liste.
- **Grand écran (à partir de `md`, 768 px)** : `md:flex` sur le `main`. À gauche (`md:w-1/3`) la pochette, l'album, l'artiste, l'année et « Add to Library ». À droite (`md:flex-1`) Play, Shuffle et la liste des titres.
