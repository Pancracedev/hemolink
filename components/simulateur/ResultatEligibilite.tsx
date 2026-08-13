import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { contenu } from "@/data/contenu";
import type { ResultatEligibilite as ResultatEligibiliteValeur } from "@/lib/eligibilite";
import { cn, formaterDateFr } from "@/lib/utils";

interface ResultatEligibiliteProps extends ComponentProps<"div"> {
  resultat: ResultatEligibiliteValeur;
}

function Badge({ children, className }: { children: string; className: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ResultatEligibilite({
  resultat,
  className,
  ref,
  ...props
}: ResultatEligibiliteProps) {
  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      tabIndex={-1}
      className={cn(
        "rounded-lg border bg-background p-6 outline-none",
        resultat.statut === "eligible" && "border-success/40",
        resultat.statut === "non-eligible" && "border-destructive/40",
        resultat.statut === "delai" && "border-warning/50",
        className,
      )}
      {...props}
    >
      {resultat.statut === "eligible" ? (
        <>
          <Badge className="bg-success text-success-foreground">
            {contenu.simulateur.labelEligible}
          </Badge>
          <p className="mt-3 text-lg font-medium">Tu es a priori éligible.</p>
          <p className="mt-2 text-muted-foreground">{contenu.simulateur.messageEligible}</p>
          <p className="mt-4 text-sm text-muted-foreground">{contenu.disclaimerMedical}</p>
          <a href="#centres" className={cn(buttonVariants({ size: "default" }), "mt-4")}>
            {contenu.simulateur.ctaCentre}
          </a>
        </>
      ) : null}

      {resultat.statut === "non-eligible" ? (
        <>
          <Badge className="bg-destructive text-destructive-foreground">
            {contenu.simulateur.labelNonEligible}
          </Badge>
          <p className="mt-3 text-lg font-medium">{resultat.motif}</p>
          <p className="mt-2 text-muted-foreground">
            {contenu.simulateur.messageNonEligibleContexte}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{contenu.disclaimerMedical}</p>
        </>
      ) : null}

      {resultat.statut === "delai" ? (
        <>
          <Badge className="bg-warning text-warning-foreground">
            {contenu.simulateur.labelDelai}
          </Badge>
          <p className="mt-3 text-lg font-medium">{contenu.simulateur.messageDelaiIntro}</p>
          <p className="mt-2 text-muted-foreground">
            Tu pourras redonner le {formaterDateFr(resultat.prochaineDateEligible)}.{" "}
            {contenu.simulateur.messageDelaiConseil}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{contenu.disclaimerMedical}</p>
        </>
      ) : null}
    </div>
  );
}
