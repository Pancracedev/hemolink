export type GroupeSanguin = "O-" | "O+" | "A-" | "A+" | "B-" | "B+" | "AB-" | "AB+";
export type NiveauReserve = "critique" | "faible" | "satisfaisant";

export interface ReserveGroupe {
  groupe: GroupeSanguin;
  niveau: NiveauReserve;
  /** Pourcentage indicatif du stock cible, pour l'affichage en jauge. */
  pourcentage: number;
  phrase: string;
}

export const reserves: ReserveGroupe[] = [
  {
    groupe: "O-",
    niveau: "critique",
    pourcentage: 25,
    phrase: "Donneur universel. Ton sang peut être transfusé à tout le monde. Besoin permanent.",
  },
  {
    groupe: "O+",
    niveau: "faible",
    pourcentage: 45,
    phrase: "Groupe très demandé en urgence. Les réserves se renouvellent vite, et se vident aussi vite.",
  },
  {
    groupe: "A-",
    niveau: "faible",
    pourcentage: 40,
    phrase: "Compatible avec de nombreux receveurs. Les stocks restent tendus toute l'année.",
  },
  {
    groupe: "A+",
    niveau: "satisfaisant",
    pourcentage: 70,
    phrase: "Groupe le plus fréquent en France. Toujours utile.",
  },
  {
    groupe: "B-",
    niveau: "critique",
    pourcentage: 20,
    phrase: "Groupe rare. Chaque don compte particulièrement pour ce profil.",
  },
  {
    groupe: "B+",
    niveau: "satisfaisant",
    pourcentage: 65,
    phrase: "Stock stable. Le don reste utile pour maintenir ce niveau.",
  },
  {
    groupe: "AB-",
    niveau: "faible",
    pourcentage: 35,
    phrase: "Le plus rare des huit groupes. Receveur compatible avec peu de donneurs, donc précieux.",
  },
  {
    groupe: "AB+",
    niveau: "satisfaisant",
    pourcentage: 75,
    phrase: "Receveur universel. Ton plasma est particulièrement recherché.",
  },
];

/** Date statique, à mettre à jour manuellement — aucune API temps réel (hors scope). */
export const derniereMiseAJour = "2026-08-01";
