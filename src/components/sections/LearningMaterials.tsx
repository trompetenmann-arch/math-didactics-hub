import { SectionHeading } from "@/components/SectionHeading";

export const LearningMaterials = () => (
  <section id="learning-materials" className="py-24 lg:py-32 bg-secondary/30">
    <div className="container">
      <SectionHeading
        eyebrow="Lernmaterial"
        title={<>Arbeitsblätter zu figurierten Zahlen</>}
        intro="Hier finden Sie frei zugängliche Lernmaterialien für den Mathematikunterricht."
      />

      <div className="rounded-md border border-border/70 bg-card p-6 md:p-8 shadow-soft max-w-3xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-serif text-2xl mb-3">Figurierte Zahlen</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Die Arbeitsblätter richten sich an Schülerinnen und Schüler der 9. und 10. Klasse.
              Ich habe das Material für den mathe+ Workshop an der Universität Bielefeld entwickelt.
            </p>
          </div>

          <a
            href="/Lernmaterial/Figurierte%20Zahlen.pdf"
            download
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Arbeitsblätter herunterladen
          </a>
        </div>
      </div>
    </div>
  </section>
);
