"use client";

import { useEffect, useRef, useState } from "react";

import { FormulaireEligibilite } from "@/components/simulateur/FormulaireEligibilite";
import { ResultatEligibilite } from "@/components/simulateur/ResultatEligibilite";
import { calculerEligibilite, type ProfilDon, type ResultatEligibilite as ResultatEligibiliteValeur } from "@/lib/eligibilite";

export function Simulateur() {
  const [resultat, setResultat] = useState<ResultatEligibiliteValeur | null>(null);
  const resultatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultat) {
      resultatRef.current?.focus();
    }
  }, [resultat]);

  function gererValidation(profil: ProfilDon) {
    setResultat(calculerEligibilite(profil));
  }

  function gererReinitialisation() {
    setResultat(null);
  }

  return (
    <div className="flex flex-col gap-8">
      <FormulaireEligibilite onValider={gererValidation} onReinitialiser={gererReinitialisation} />
      {resultat ? <ResultatEligibilite ref={resultatRef} resultat={resultat} /> : null}
    </div>
  );
}
