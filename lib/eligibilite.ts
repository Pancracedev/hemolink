export type Sexe = "homme" | "femme";

export interface ProfilDon {
  age: number;
  poidsKg: number;
  sexe: Sexe;
  /** Date du dernier don, ou `null` si la personne n'a jamais donné. */
  dernierDon: Date | null;
}

export type ResultatEligibilite =
  | { statut: "eligible" }
  | { statut: "non-eligible"; motif: string }
  | { statut: "delai"; prochaineDateEligible: Date };

const AGE_MIN = 18;
const AGE_MAX = 65;
const POIDS_MIN_KG = 50;
const DELAI_MOIS_HOMME = 3;
const DELAI_MOIS_FEMME = 4;

/**
 * Ajoute des mois à une date en clampant le jour sur le dernier jour du mois
 * cible — évite le débordement classique (31 janvier + 1 mois ne doit pas
 * glisser sur le 3 mars).
 */
function ajouterMois(date: Date, mois: number): Date {
  const jour = date.getDate();
  const resultat = new Date(date.getFullYear(), date.getMonth() + mois, 1);
  const dernierJourDuMois = new Date(
    resultat.getFullYear(),
    resultat.getMonth() + 1,
    0,
  ).getDate();
  resultat.setDate(Math.min(jour, dernierJourDuMois));
  return resultat;
}

function debutDeJournee(date: Date): Date {
  const resultat = new Date(date);
  resultat.setHours(0, 0, 0, 0);
  return resultat;
}

/**
 * Applique l'algorithme d'éligibilité du brief. En cas de critères multiples
 * hors normes, l'âge est signalé avant le poids, avant le délai — ordre de
 * lecture naturel, le brief ne précise pas de priorité.
 */
export function calculerEligibilite(
  profil: ProfilDon,
  aujourdHui: Date = new Date(),
): ResultatEligibilite {
  if (profil.age < AGE_MIN || profil.age > AGE_MAX) {
    return {
      statut: "non-eligible",
      motif: `L'âge doit être compris entre ${AGE_MIN} et ${AGE_MAX} ans révolus.`,
    };
  }

  if (profil.poidsKg < POIDS_MIN_KG) {
    return {
      statut: "non-eligible",
      motif: `Le poids minimum requis est de ${POIDS_MIN_KG} kg.`,
    };
  }

  if (profil.dernierDon === null) {
    return { statut: "eligible" };
  }

  const delaiMois = profil.sexe === "homme" ? DELAI_MOIS_HOMME : DELAI_MOIS_FEMME;
  const prochaineDateEligible = ajouterMois(profil.dernierDon, delaiMois);

  if (debutDeJournee(aujourdHui) >= debutDeJournee(prochaineDateEligible)) {
    return { statut: "eligible" };
  }

  return { statut: "delai", prochaineDateEligible };
}
