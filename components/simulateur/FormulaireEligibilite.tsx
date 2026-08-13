"use client";

import { useId, useRef, useState, type SubmitEvent } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { ProfilDon, Sexe } from "@/lib/eligibilite";

interface Erreurs {
  age?: string;
  poids?: string;
  sexe?: string;
  donAnterieur?: string;
  dateDernierDon?: string;
}

interface FormulaireEligibiliteProps {
  onValider: (profil: ProfilDon) => void;
  onReinitialiser: () => void;
}

function aujourdHuiISO(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

export function FormulaireEligibilite({
  onValider,
  onReinitialiser,
}: FormulaireEligibiliteProps) {
  const [age, setAge] = useState("");
  const [poids, setPoids] = useState("");
  const [sexe, setSexe] = useState<Sexe | "">("");
  const [donAnterieur, setDonAnterieur] = useState<"oui" | "non" | "">("");
  const [dateDernierDon, setDateDernierDon] = useState("");
  const [erreurs, setErreurs] = useState<Erreurs>({});

  const ageRef = useRef<HTMLInputElement>(null);
  const poidsRef = useRef<HTMLInputElement>(null);
  const sexeRef = useRef<HTMLFieldSetElement>(null);
  const donAnterieurRef = useRef<HTMLFieldSetElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const ageErrorId = useId();
  const poidsErrorId = useId();
  const sexeErrorId = useId();
  const donAnterieurErrorId = useId();
  const dateErrorId = useId();

  function valider(): Erreurs {
    const prochainesErreurs: Erreurs = {};

    const ageValeur = Number(age);
    if (age.trim() === "" || Number.isNaN(ageValeur)) {
      prochainesErreurs.age = "Indique ton âge.";
    } else if (ageValeur < 0 || ageValeur > 120) {
      prochainesErreurs.age = "L'âge doit être compris entre 0 et 120 ans.";
    }

    const poidsValeur = Number(poids);
    if (poids.trim() === "" || Number.isNaN(poidsValeur)) {
      prochainesErreurs.poids = "Indique ton poids.";
    } else if (poidsValeur < 0 || poidsValeur > 300) {
      prochainesErreurs.poids = "Le poids doit être compris entre 0 et 300 kg.";
    }

    if (!sexe) {
      prochainesErreurs.sexe = "Choisis une option.";
    }

    if (!donAnterieur) {
      prochainesErreurs.donAnterieur = "Choisis une option.";
    } else if (donAnterieur === "oui") {
      if (dateDernierDon.trim() === "") {
        prochainesErreurs.dateDernierDon = "Indique la date de ton dernier don.";
      } else {
        const dateValeur = new Date(dateDernierDon);
        if (Number.isNaN(dateValeur.getTime())) {
          prochainesErreurs.dateDernierDon = "Cette date n'est pas valide.";
        } else if (dateValeur.getTime() > Date.now()) {
          prochainesErreurs.dateDernierDon = "Cette date ne peut pas être dans le futur.";
        }
      }
    }

    return prochainesErreurs;
  }

  function gererSoumission(evenement: SubmitEvent<HTMLFormElement>) {
    evenement.preventDefault();
    const prochainesErreurs = valider();
    setErreurs(prochainesErreurs);

    if (prochainesErreurs.age) {
      ageRef.current?.focus();
      return;
    }
    if (prochainesErreurs.poids) {
      poidsRef.current?.focus();
      return;
    }
    if (prochainesErreurs.sexe) {
      sexeRef.current?.focus();
      return;
    }
    if (prochainesErreurs.donAnterieur) {
      donAnterieurRef.current?.focus();
      return;
    }
    if (prochainesErreurs.dateDernierDon) {
      dateRef.current?.focus();
      return;
    }

    onValider({
      age: Number(age),
      poidsKg: Number(poids),
      sexe: sexe as Sexe,
      dernierDon: donAnterieur === "oui" ? new Date(dateDernierDon) : null,
    });
  }

  function gererReinitialisation() {
    setAge("");
    setPoids("");
    setSexe("");
    setDonAnterieur("");
    setDateDernierDon("");
    setErreurs({});
    onReinitialiser();
    ageRef.current?.focus();
  }

  return (
    <form onSubmit={gererSoumission} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="age">Âge</Label>
        <Input
          ref={ageRef}
          id="age"
          type="number"
          inputMode="numeric"
          min={0}
          max={120}
          value={age}
          onChange={(evenement) => setAge(evenement.target.value)}
          aria-invalid={Boolean(erreurs.age)}
          aria-describedby={erreurs.age ? ageErrorId : undefined}
        />
        {erreurs.age ? (
          <p id={ageErrorId} className="text-sm text-destructive">
            {erreurs.age}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="poids">Poids (kg)</Label>
        <Input
          ref={poidsRef}
          id="poids"
          type="number"
          inputMode="decimal"
          min={0}
          max={300}
          step={0.1}
          value={poids}
          onChange={(evenement) => setPoids(evenement.target.value)}
          aria-invalid={Boolean(erreurs.poids)}
          aria-describedby={erreurs.poids ? poidsErrorId : undefined}
        />
        {erreurs.poids ? (
          <p id={poidsErrorId} className="text-sm text-destructive">
            {erreurs.poids}
          </p>
        ) : null}
      </div>

      <fieldset
        ref={sexeRef}
        tabIndex={-1}
        aria-describedby={erreurs.sexe ? sexeErrorId : undefined}
        className="flex flex-col gap-2"
      >
        <legend className="text-sm font-medium">Sexe</legend>
        <RadioGroup
          value={sexe}
          onValueChange={(valeur) => setSexe(valeur as Sexe)}
          className="flex flex-row gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="homme" id="sexe-homme" aria-label="Homme" />
            <Label htmlFor="sexe-homme">Homme</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="femme" id="sexe-femme" aria-label="Femme" />
            <Label htmlFor="sexe-femme">Femme</Label>
          </div>
        </RadioGroup>
        {erreurs.sexe ? (
          <p id={sexeErrorId} className="text-sm text-destructive">
            {erreurs.sexe}
          </p>
        ) : null}
      </fieldset>

      <fieldset
        ref={donAnterieurRef}
        tabIndex={-1}
        aria-describedby={erreurs.donAnterieur ? donAnterieurErrorId : undefined}
        className="flex flex-col gap-2"
      >
        <legend className="text-sm font-medium">As-tu déjà donné ton sang ?</legend>
        <RadioGroup
          value={donAnterieur}
          onValueChange={(valeur) => setDonAnterieur(valeur as "oui" | "non")}
          className="flex flex-row gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="oui" id="don-oui" aria-label="Oui" />
            <Label htmlFor="don-oui">Oui</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="non" id="don-non" aria-label="Non" />
            <Label htmlFor="don-non">Non</Label>
          </div>
        </RadioGroup>
        {erreurs.donAnterieur ? (
          <p id={donAnterieurErrorId} className="text-sm text-destructive">
            {erreurs.donAnterieur}
          </p>
        ) : null}
      </fieldset>

      {donAnterieur === "oui" ? (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="date-dernier-don">Date de ton dernier don</Label>
          <Input
            ref={dateRef}
            id="date-dernier-don"
            type="date"
            value={dateDernierDon}
            max={aujourdHuiISO()}
            onChange={(evenement) => setDateDernierDon(evenement.target.value)}
            aria-invalid={Boolean(erreurs.dateDernierDon)}
            aria-describedby={erreurs.dateDernierDon ? dateErrorId : undefined}
          />
          {erreurs.dateDernierDon ? (
            <p id={dateErrorId} className="text-sm text-destructive">
              {erreurs.dateDernierDon}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button type="submit" className={cn(buttonVariants({ size: "lg" }))}>
          Vérifie maintenant
        </button>
        <button
          type="button"
          onClick={gererReinitialisation}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Réinitialiser
        </button>
      </div>
    </form>
  );
}
