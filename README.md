# DevMeet — page de soirée de conférences

Page d'une soirée de trois conférences courtes pour développeurs web, réalisée en HTML et Tailwind CSS 4.3.3, avec un petit script JavaScript pour déplier le programme.

## 1. Le besoin et les choix

**Public visé** : développeurs web, souvent sur téléphone, qui veulent savoir en quelques secondes si la soirée les intéresse et comment y aller.

**Objectif de DevMeet** : donner envie de venir à la soirée.

**Ce que le visiteur doit trouver facilement** : les informations les plus importantes: la date, le lieu, le programme (horaires, sujets, intervenants), le tarif et le contact.

**Ordre des sections**, du plus important au plus pratique :
1. **Présentation** : de quoi il s'agit, avec la date, la ville et l'argument « premier verre gratuit » mis en avant dans des pastilles, puis un bouton vers le programme.
2. **Programme** : les trois conférences dans l'ordre horaire. Seulement l'heure, le titre et l'intervenant sont visibles. La description se déplie au clic pour garder la liste courte.
3. **Infos pratiques** (footer) : lieu, horaires, tarif, contact, regroupés à la fin.

**Couleurs** (définies dans `@theme`, fichier `src/input.css`) :

| Nom | Valeur | Utilisation |
| --- | --- | --- |
| `fond` | `#F1FAFC` | fond de la page, bleu très clair, plus doux que le blanc |
| `primary` | `#1EAAB4` | barre de navigation, bouton, pastilles d'heure, titres de section : tout ce qui guide l'œil |
| `secondary` | `#187F88` | survol des liens et boutons, bordures, textes des pastilles : variante plus foncée de `primary` |

Les cartes du programme sont blanches (`bg-white`) pour se détacher du fond. Le footer est foncé (`bg-[#1C1C1C]`) pour marquer clairement la fin de la page.

**Espacements** : `max-w-5xl mx-auto` sur chaque section pour une largeur de lecture identique partout, `px-4` sur le `<main>` pour que le texte ne colle pas aux bords sur téléphone, `mt-12` entre les sections, `gap-4` entre les cartes du programme, `gap-6` entre les blocs du footer.

**Icônes** : Bootstrap Icons (chargé depuis un CDN)

## 2. La démarche

1. **Analyse du sujet** : repérage des contenus obligatoires (présentation, programme, infos pratiques) et des contraintes (responsive, ancres, navigation au clavier).
2. **Base** : branche `feat/cc1` partie d'un projet vide, avec seulement la configuration Tailwind et un `index.html`. Ajout des couleurs de la palette dans `@theme`.
3. **Design**: Réalisation d'une maquette (très rapide) sur Excalidraw (voir `public/maquette-excalidraw.png)
4. **Structure HTML** : écriture des sections avec leurs `id`, de la navigation et du footer, sans style.
5. **Mise en forme** : barre de navigation, présentation, puis programme et footer, en mobile d'abord puis avec `md:` pour l'ordinateur.
6. **Interaction** : `programme.js` pour déplier la description d'une conférence.
7. **Finitions** : barre de navigation fixée en haut, icônes, transitions des liens.
8. **Vérifications** : voir la partie 5.

**Problème rencontré : la barre fixe cachait les titres**
- *Problème* : après avoir fixé la barre de navigation en haut (`sticky top-0`), un clic sur « Programme » faisait défiler la page, mais le titre « Programme de la soirée » risquait de se retrouver caché sous la barre.
- *Cause* : le navigateur place le haut de la section ciblée tout en haut de l'écran, sans tenir compte de la barre qui reste par-dessus.
- *Solution testée* : `scroll-mt-32 md:scroll-mt-20` sur les sections et le footer. Le navigateur s'arrête plus tôt et laisse la place de la barre (plus haute sur téléphone, où les liens passent sous le titre).

## 3. Le lancement et les fichiers

**Prérequis** : Node.js et npm (testé avec Node 24.21.0 et npm 11.19.0), un navigateur, et une connexion internet pour les icônes.

**Dépendances** (`devDependencies`, versions exactes) : `tailwindcss@4.3.3` et `@tailwindcss/cli@4.3.3`.

**Commandes** :

```bash
npm ci          # installe les dépendances exactes de package-lock.json
npm run build   # compile src/input.css vers dist/output.css (minifié)
open index.html # ou double-cliquer sur index.html
```

Pendant le développement : `npm run dev`

**Fichiers** :

| Fichier / dossier | Rôle |
| --- | --- |
| `index.html` | la page : structure et classes Tailwind |
| `programme.js` | déplie / replie la description des conférences |
| `src/input.css` | **entrée CSS de Tailwind** : `@import "tailwindcss"` et les couleurs dans `@theme` |
| `dist/output.css` | **sortie compilée**, générée par `npm run build`. C'est le fichier chargé par le HTML (`<link rel="stylesheet" href="./dist/output.css">`). Non versionné. |
| `package.json` | dépendances et scripts `dev` / `build` |
| `.gitignore` | exclut `node_modules/` et `dist/` |

## 4. Les explications techniques

**Structure HTML et ancres**

Chaque bouton du programme a `aria-controls="programme-1"` (2, 3), qui correspond à l'`id` de sa description. `aria-expanded` indique aux lecteurs d'écran si elle est ouverte. Un `<button>` plutôt qu'un `<div>` cliquable : il s'atteint avec Tab et s'active avec Entrée ou Espace.

**Flexbox ou Grid**
- **Flexbox** pour ce qui s'aligne sur une seule ligne : la barre de navigation (titre et liens), les pastilles de la présentation, et l'intérieur de chaque bouton du programme (heure, texte, flèche).
- **Grid** pour le footer : quatre blocs de même importance rangés en lignes et en colonnes.

## 5. Les vérifications et les limites

> Colonne « Observé » : à remplir après avoir fait chaque test soi-même.

| Test | Attendu | Observé |
| --- | --- | --- |
| 390 px | une colonne, navigation centrée sur deux lignes, aucun défilement horizontal, footer empilé | Testé & validé |
| 1280 px | navigation sur une ligne, contenu centré sur 64 rem, footer en 2 × 2 | Testé & validé |
| Liens de navigation | chaque lien amène à sa section, titre visible sous la barre | Testé & validé |
| Bouton « Voir le programme » | amène à la section programme | Testé & validé |
| Contact | le lien ouvre la messagerie avec l'adresse `bonjour@devmeet.example` | Testé & validé |
| Programme | un clic déplie la description, la flèche pivote, un second clic replie | Testé & validé |
| Navigation avec Tab | on atteint les 3 liens, le bouton, les 3 conférences et le contact; le focus reste visible; Entrée déplie une conférence | Testé & validé |
| Chargement des styles | après `npm ci` puis `npm run build`, la page est mise en forme (sinon `dist/output.css` manque) | Testé & validé |

**Amélioration prioritaire** : corriger le contraste du texte blanc, car il concerne la navigation et le bouton principal, donc les éléments les plus utilisés. Utiliser `secondary` (`#187F88`) comme fond de ces éléments donne 4,7:1 avec du blanc, ce qui passe le seuil de 4,5:1 sans changer l'identité de la page.

UTILISATION IA: Pour intégrer le CDN Bootstrap pour les icones, et le `scroll-mt-*`

Carlos Guillermo Gomez