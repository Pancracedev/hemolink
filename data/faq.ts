export type CategorieFAQ = "pratique" | "idees-recues";

export interface QuestionFAQ {
  id: string;
  categorie: CategorieFAQ;
  question: string;
  reponse: string;
}

export const faq: QuestionFAQ[] = [
  {
    id: "a-jeun",
    categorie: "pratique",
    question: "Peux-tu donner à jeun ?",
    reponse:
      "Non, mange normalement avant. Le don à jeun augmente le risque de malaise. Un vrai repas dans les 4h qui précèdent, c'est parfait.",
  },
  {
    id: "duree",
    categorie: "pratique",
    question: "Combien de temps ça prend au total ?",
    reponse:
      "45 minutes, accueil et collation compris. Le prélèvement lui-même dure 10 minutes.",
  },
  {
    id: "documents",
    categorie: "pratique",
    question: "Quels documents apporter ?",
    reponse:
      "Une pièce d'identité. C'est tout ce qu'il faut pour un premier don.",
  },
  {
    id: "traitement",
    categorie: "pratique",
    question: "Tu prends un traitement, tu peux quand même donner ?",
    reponse:
      "Ça dépend du traitement. L'entretien pré-don avec un professionnel de santé confirmera si c'est compatible.",
  },
  {
    id: "apres-don",
    categorie: "pratique",
    question: "Que faire juste après le don ?",
    reponse:
      "Reste assis quelques minutes, prends la collation proposée sur place. Évite l'effort physique intense dans les heures qui suivent.",
  },
  {
    id: "douleur",
    categorie: "idees-recues",
    question: "On dit : le don de sang, ça fait mal.",
    reponse:
      "En réalité : l'aiguille pique une fois. C'est tout. Certains ressentent un léger inconfort, rien de plus.",
  },
  {
    id: "grossir",
    categorie: "idees-recues",
    question: "On dit : le don de sang, ça fait grossir.",
    reponse:
      "En réalité : non. Le corps compense les 450 ml prélevés en quelques heures. Aucun impact sur le poids.",
  },
  {
    id: "fatigue-longue",
    categorie: "idees-recues",
    question: "On dit : on reste fatigué pendant plusieurs jours.",
    reponse:
      "En réalité : la plupart des donneurs reprennent une activité normale dans la journée. Certains ressentent un léger vertige après, la collation est là pour ça.",
  },
  {
    id: "tatouage",
    categorie: "idees-recues",
    question: "On dit : un tatouage récent interdit le don à vie.",
    reponse:
      "En réalité : c'est temporaire. Un délai s'applique après un tatouage ou un piercing. L'entretien pré-don précisera lequel dans ta situation.",
  },
  {
    id: "groupe-rare",
    categorie: "idees-recues",
    question: "On dit : seuls les groupes rares sont utiles.",
    reponse:
      "En réalité : tous les groupes sont utiles. A+ est le plus fréquent en France et reste demandé en continu.",
  },
];
