import { Simulateur } from "@/components/simulateur/Simulateur";
import { contenu } from "@/data/contenu";

export function Eligibilite() {
  return (
    <section id="simulateur" aria-labelledby="eligibilite-titre" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 id="eligibilite-titre" className="font-heading text-3xl font-semibold sm:text-4xl">
            {contenu.eligibilite.titre}
          </h2>
          <p className="text-muted-foreground">{contenu.eligibilite.intro}</p>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contenu.eligibilite.criteres.map((critere) => (
            <div key={critere.label} className="rounded-lg border border-border p-4 text-center">
              <dt className="text-sm text-muted-foreground">{critere.label}</dt>
              <dd className="mt-1 font-medium">{critere.valeur}</dd>
            </div>
          ))}
        </dl>

        <Simulateur />
      </div>
    </section>
  );
}
