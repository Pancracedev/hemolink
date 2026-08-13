import { contenu } from "@/data/contenu";

export function Pourquoi() {
  return (
    <section aria-labelledby="pourquoi-titre" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <h2
          id="pourquoi-titre"
          className="text-center font-heading text-3xl font-semibold sm:text-4xl"
        >
          {contenu.pourquoi.titre}
        </h2>

        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {contenu.pourquoi.chiffres.map((chiffre) => (
            <div key={chiffre.valeur} className="flex flex-col items-center gap-2 text-center">
              <dt className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {chiffre.valeur}
              </dt>
              <dd className="text-muted-foreground">{chiffre.description}</dd>
            </div>
          ))}
        </dl>

        <p className="font-heading-italic text-center text-xl italic">
          {contenu.pourquoi.fermeture}
        </p>
      </div>
    </section>
  );
}
