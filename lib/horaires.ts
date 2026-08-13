export type JourSemaine =
  | "dimanche"
  | "lundi"
  | "mardi"
  | "mercredi"
  | "jeudi"
  | "vendredi"
  | "samedi";

export interface CreneauHoraire {
  /** Format "HH:mm", 24h. */
  ouverture: string;
  fermeture: string;
}

export type HorairesSemaine = Partial<Record<JourSemaine, CreneauHoraire[]>>;

// Index aligné sur Date.prototype.getDay() (0 = dimanche).
const JOURS: JourSemaine[] = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

function versMinutes(heure: string): number {
  const [h, m] = heure.split(":");
  return Number(h ?? "0") * 60 + Number(m ?? "0");
}

export function isOuvert(horaires: HorairesSemaine, date: Date = new Date()): boolean {
  const jour = JOURS[date.getDay()];
  if (!jour) {
    return false;
  }

  const creneaux = horaires[jour];
  if (!creneaux || creneaux.length === 0) {
    return false;
  }

  const minutesActuelles = date.getHours() * 60 + date.getMinutes();

  return creneaux.some((creneau) => {
    const debut = versMinutes(creneau.ouverture);
    const fin = versMinutes(creneau.fermeture);
    return minutesActuelles >= debut && minutesActuelles < fin;
  });
}
