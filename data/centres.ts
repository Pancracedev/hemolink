import type { HorairesSemaine } from "@/lib/horaires";

export type TypeDon = "sang-total" | "plasma" | "plaquettes";

export interface Centre {
  id: string;
  nom: string;
  nature: string;
  ville: string;
  adresse: string;
  coordonnees: { lat: number; lng: number };
  horaires: HorairesSemaine;
  telephone: string;
  typesDons: TypeDon[];
  rdvObligatoire: boolean;
}

const HORAIRES_STANDARD: HorairesSemaine = {
  lundi: [{ ouverture: "08:00", fermeture: "13:00" }, { ouverture: "14:00", fermeture: "18:00" }],
  mardi: [{ ouverture: "08:00", fermeture: "13:00" }, { ouverture: "14:00", fermeture: "18:00" }],
  mercredi: [{ ouverture: "08:00", fermeture: "13:00" }, { ouverture: "14:00", fermeture: "18:00" }],
  jeudi: [{ ouverture: "08:00", fermeture: "13:00" }, { ouverture: "14:00", fermeture: "18:00" }],
  vendredi: [{ ouverture: "08:00", fermeture: "13:00" }, { ouverture: "14:00", fermeture: "18:00" }],
  samedi: [{ ouverture: "08:00", fermeture: "13:00" }],
};

const HORAIRES_ETENDUS: HorairesSemaine = {
  lundi: [{ ouverture: "08:00", fermeture: "19:30" }],
  mardi: [{ ouverture: "08:00", fermeture: "19:30" }],
  mercredi: [{ ouverture: "08:00", fermeture: "19:30" }],
  jeudi: [{ ouverture: "08:00", fermeture: "19:30" }],
  vendredi: [{ ouverture: "08:00", fermeture: "19:30" }],
  samedi: [{ ouverture: "09:00", fermeture: "17:00" }],
  dimanche: [{ ouverture: "09:00", fermeture: "13:00" }],
};

export const centres: Centre[] = [
  {
    id: "paris-republique",
    nom: "Centre de don République",
    nature: "Établissement de transfusion sanguine",
    ville: "Paris",
    adresse: "12 rue de la République, 75011 Paris",
    coordonnees: { lat: 48.8674, lng: 2.3719 },
    horaires: HORAIRES_ETENDUS,
    telephone: "01 42 71 18 20",
    typesDons: ["sang-total", "plasma", "plaquettes"],
    rdvObligatoire: false,
  },
  {
    id: "paris-montparnasse",
    nom: "Centre de don Montparnasse",
    nature: "Établissement de transfusion sanguine",
    ville: "Paris",
    adresse: "8 place Raoul Dautry, 75015 Paris",
    coordonnees: { lat: 48.8422, lng: 2.3211 },
    horaires: HORAIRES_STANDARD,
    telephone: "01 45 38 52 10",
    typesDons: ["sang-total", "plasma"],
    rdvObligatoire: true,
  },
  {
    id: "lyon-part-dieu",
    nom: "Centre de don Part-Dieu",
    nature: "Établissement de transfusion sanguine",
    ville: "Lyon",
    adresse: "5 rue Servient, 69003 Lyon",
    coordonnees: { lat: 45.7609, lng: 4.8567 },
    horaires: HORAIRES_ETENDUS,
    telephone: "04 72 68 15 30",
    typesDons: ["sang-total", "plasma", "plaquettes"],
    rdvObligatoire: false,
  },
  {
    id: "marseille-canebiere",
    nom: "Centre de don Canebière",
    nature: "Établissement de transfusion sanguine",
    ville: "Marseille",
    adresse: "34 la Canebière, 13001 Marseille",
    coordonnees: { lat: 43.2971, lng: 5.3799 },
    horaires: HORAIRES_STANDARD,
    telephone: "04 91 54 20 40",
    typesDons: ["sang-total", "plasma"],
    rdvObligatoire: false,
  },
  {
    id: "bordeaux-victoire",
    nom: "Centre de don Victoire",
    nature: "Établissement de transfusion sanguine",
    ville: "Bordeaux",
    adresse: "22 cours de la Somme, 33800 Bordeaux",
    coordonnees: { lat: 44.8267, lng: -0.5701 },
    horaires: HORAIRES_STANDARD,
    telephone: "05 56 90 12 45",
    typesDons: ["sang-total"],
    rdvObligatoire: true,
  },
  {
    id: "lille-grand-place",
    nom: "Centre de don Grand-Place",
    nature: "Établissement de transfusion sanguine",
    ville: "Lille",
    adresse: "15 rue Nationale, 59800 Lille",
    coordonnees: { lat: 50.6349, lng: 3.0626 },
    horaires: HORAIRES_STANDARD,
    telephone: "03 20 21 60 15",
    typesDons: ["sang-total", "plaquettes"],
    rdvObligatoire: false,
  },
  {
    id: "toulouse-capitole",
    nom: "Centre de don Capitole",
    nature: "Établissement de transfusion sanguine",
    ville: "Toulouse",
    adresse: "9 allées Jean Jaurès, 31000 Toulouse",
    coordonnees: { lat: 43.6062, lng: 1.4479 },
    horaires: HORAIRES_STANDARD,
    telephone: "05 61 22 33 40",
    typesDons: ["sang-total"],
    rdvObligatoire: false,
  },
  {
    id: "nantes-graslin",
    nom: "Centre de don Graslin",
    nature: "Établissement de transfusion sanguine",
    ville: "Nantes",
    adresse: "3 rue Voltaire, 44000 Nantes",
    coordonnees: { lat: 47.2136, lng: -1.5605 },
    horaires: HORAIRES_STANDARD,
    telephone: "02 40 48 25 10",
    typesDons: ["sang-total", "plasma"],
    rdvObligatoire: true,
  },
  {
    id: "strasbourg-cathedrale",
    nom: "Centre de don Cathédrale",
    nature: "Établissement de transfusion sanguine",
    ville: "Strasbourg",
    adresse: "6 rue des Hallebardes, 67000 Strasbourg",
    coordonnees: { lat: 48.5817, lng: 7.7508 },
    horaires: HORAIRES_STANDARD,
    telephone: "03 88 21 25 60",
    typesDons: ["sang-total"],
    rdvObligatoire: false,
  },
  {
    id: "rennes-republique",
    nom: "Centre de don République",
    nature: "Établissement de transfusion sanguine",
    ville: "Rennes",
    adresse: "4 place de la République, 35000 Rennes",
    coordonnees: { lat: 48.1113, lng: -1.6785 },
    horaires: HORAIRES_STANDARD,
    telephone: "02 99 78 30 20",
    typesDons: ["sang-total", "plasma"],
    rdvObligatoire: false,
  },
];
