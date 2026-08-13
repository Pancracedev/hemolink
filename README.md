# HemoLink

Landing page purement informative sur le don de sang. L'objectif : qu'un visiteur n'ayant jamais donné reparte avec trois certitudes — son éligibilité, le lieu de rendez-vous, le déroulement de l'expérience.

## Stack

- **Next.js 16** (App Router, `output: 'export'`) — export statique, pas de backend
- **TypeScript strict** (`noUncheckedIndexedAccess`)
- **Tailwind CSS v4** — tokens de design en CSS-first (`@theme` dans `app/globals.css`)
- **shadcn/ui** (primitives Base UI) — composants customisés
- **Leaflet + OpenStreetMap** — carte des centres de don
- **Framer Motion** — animations ciblées, `prefers-reduced-motion` respecté
- **Yarn Classic 1.22.22** — pinné via corepack

## Lancer en local

```bash
corepack prepare yarn@1.22.22 --activate
yarn install
yarn dev
```

Build de l'export statique :

```bash
yarn build
```

Le résultat est généré dans `out/`.

## Structure du projet

```
app/                  # routes App Router, layout, styles globaux
components/
  sections/           # sections de la landing page
  simulateur/          # simulateur d'éligibilité
  centres/            # carte et liste des centres
  ui/                 # primitives shadcn/ui customisées
lib/                  # logique métier (éligibilité, horaires, utils)
data/                 # données statiques (centres, FAQ, réserves, contenu)
public/               # assets statiques
```

## Licence

MIT — voir `LICENSE`.
