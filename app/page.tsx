import { buttonVariants } from "@/components/ui/button";
import { contenu } from "@/data/contenu";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-32 text-center">
      {/* Hero */}
      <div className="flex max-w-2xl flex-col items-center gap-4">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {contenu.hero.titre}
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">{contenu.hero.sousTitre}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href="#simulateur" className={buttonVariants({ size: "lg" })}>
          {contenu.hero.ctaPrincipal}
        </a>
        <a href="#centres" className={buttonVariants({ variant: "outline", size: "lg" })}>
          {contenu.hero.ctaSecondaire}
        </a>
      </div>
    </main>
  );
}
