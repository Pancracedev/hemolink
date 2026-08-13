export interface ChiffreImpact {
  valeur: string;
  description: string;
}

export interface EtapeDeroulement {
  titre: string;
  dureeLabel: string;
  description: string;
}

export interface ConseilsDeroulement {
  avant: string[];
  pendant: string[];
  apres: string[];
}

export interface CritereEligibilite {
  label: string;
  valeur: string;
}

export interface Contenu {
  hero: {
    titre: string;
    sousTitre: string;
    ctaPrincipal: string;
    ctaSecondaire: string;
  };
  pourquoi: {
    titre: string;
    chiffres: ChiffreImpact[];
    fermeture: string;
  };
  eligibilite: {
    titre: string;
    intro: string;
    criteres: CritereEligibilite[];
  };
  deroulement: {
    titre: string;
    intro: string;
    etapes: EtapeDeroulement[];
    conseils: ConseilsDeroulement;
  };
  simulateur: {
    labelEligible: string;
    labelNonEligible: string;
    labelDelai: string;
    messageEligible: string;
    messageNonEligibleContexte: string;
    messageDelaiIntro: string;
    messageDelaiConseil: string;
    ctaCentre: string;
  };
  disclaimerMedical: string;
}

export const contenu: Contenu = {
  hero: {
    titre: "Donner ton sang. Trois certitudes, quarante-cinq minutes.",
    sousTitre: "Peux-tu donner. Où aller. Comment ça se passe. Tout est ici.",
    ctaPrincipal: "Suis-je éligible ?",
    ctaSecondaire: "Voir les centres",
  },
  pourquoi: {
    titre: "Pourquoi c'est vital",
    chiffres: [
      {
        valeur: "1 poche = 3 vies",
        description:
          "Un don unique peut être séparé en globules, plasma et plaquettes.",
      },
      {
        valeur: "10 000 dons par jour",
        description: "C'est ce dont la France a besoin, chaque jour, sans exception.",
      },
      {
        valeur: "42 jours",
        description:
          "Durée de conservation des globules rouges. Après, il en faut de nouveaux.",
      },
    ],
    fermeture: "Le sang ne se fabrique pas en laboratoire. Il vient d'une seule source : toi.",
  },
  eligibilite: {
    titre: "Suis-je éligible ?",
    intro:
      "Trois critères simples déterminent ton éligibilité du jour. Vérifie ta situation en 30 secondes.",
    criteres: [
      { label: "Âge", valeur: "18 à 65 ans révolus" },
      { label: "Poids", valeur: "50 kg minimum" },
      { label: "Délai entre deux dons", valeur: "3 mois (homme), 4 mois (femme)" },
    ],
  },
  deroulement: {
    titre: "Comment ça se passe",
    intro: "Donner du sang prend 45 minutes. C'est tout. Voici comment se passe ta première fois.",
    etapes: [
      {
        titre: "Accueil",
        dureeLabel: "5 min",
        description: "Tu remplis un questionnaire et on vérifie ton identité.",
      },
      {
        titre: "Entretien médical",
        dureeLabel: "10 min",
        description:
          "Un professionnel de santé vérifie ton éligibilité du jour. C'est confidentiel.",
      },
      {
        titre: "Prélèvement",
        dureeLabel: "10 min",
        description: "L'aiguille pique une fois. C'est tout. Tu restes assis ou allongé.",
      },
      {
        titre: "Repos et collation",
        dureeLabel: "20 min",
        description:
          "Une collation t'attend. Certains ressentent un léger vertige après, elle est là pour ça.",
      },
      {
        titre: "Suivi",
        dureeLabel: "Après ta visite",
        description:
          "Tu reprends une activité normale. Évite l'effort physique intense dans les heures qui suivent.",
      },
    ],
    conseils: {
      avant: [
        "Mange normalement avant de venir. Le don à jeun augmente le risque de malaise.",
        "Bois de l'eau dans les heures qui précèdent.",
        "Apporte une pièce d'identité.",
      ],
      pendant: [
        "Signale tout malaise à l'équipe sur place.",
        "Détends tes bras pendant le prélèvement.",
        "Pose tes questions à l'entretien pré-don.",
      ],
      apres: [
        "Reste assis quelques minutes après le prélèvement.",
        "Prends la collation proposée sur place.",
        "Évite l'effort physique intense le reste de la journée.",
      ],
    },
  },
  simulateur: {
    labelEligible: "Éligible",
    labelNonEligible: "Non éligible",
    labelDelai: "Délai en cours",
    messageEligible:
      "Trois mois séparent chaque don pour un homme, quatre pour une femme. Prends note de ta date.",
    messageNonEligibleContexte: "Si ta situation change, tu pourras retenter le simulateur.",
    messageDelaiIntro: "Tu as donné trop récemment pour redonner aujourd'hui.",
    messageDelaiConseil: "Prévois de t'hydrater dans les jours qui précèdent ta prochaine visite.",
    ctaCentre: "Trouve un centre",
  },
  disclaimerMedical:
    "Ces informations sont simplifiées pour t'orienter. Seul un professionnel de santé, lors de l'entretien pré-don, peut confirmer ton aptitude au don.",
};
