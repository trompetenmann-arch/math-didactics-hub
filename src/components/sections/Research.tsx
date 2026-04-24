import { SectionHeading } from "@/components/SectionHeading";

const areas = [
  {
    n: "01",
    title: "KI im Mathematikunterricht",
    body: "Wie beeinflussen Large Language Models die Entwicklung mathematischen Denkens und Handelns? Studien zu Modellierungsprozessen, Darstellungswechseln und individuellem Feedback durch generative KI — u. a. im Projekt KIBEBA zur Fehlerreflexion mit der BEBA-Strategie.",
    tags: ["LLMs", "Modellieren", "Feedback", "Design Research"],
  },
  {
    n: "02",
    title: "Stoffdidaktische Forschung",
    body: "Didaktisch orientierte Sachanalysen als Grundlage theoriegeleiteter Vermittlungskonzepte — empirisch validiert durch qualitative Fallstudien. Schwerpunkt auf funktionalem Denken, Differential- und Integralrechnung.",
    tags: ["Sachanalyse", "Qualitative Inhaltsanalyse"],
  },
  {
    n: "03",
    title: "Grundvorstellungen zur Trigonometrie",
    body: "Wie bauen Lernende tragfähige Vorstellungen vom Sinus auf — zwischen Dreieck, Einheitskreis und periodischer Funktion? Die Oszillationsvorstellung als Grundvorstellung für die reelle Sinusfunktion.",
    tags: ["Sinusfunktion", "Vorstellungswechsel", "Sek. II"],
  },
  {
    n: "04",
    title: "Funktionales Denken & Analysis",
    body: "Ableitung als lokale Änderungsrate, Richtungsableitung über Zylinderschnitte, periodische Prozesse mit dem digitalen Federpendel — enaktive Zugänge zu zentralen Begriffen der Analysis.",
    tags: ["Ableitung", "Funktionales Denken", "Enaktiv"],
  },
];

export const Research = () => (
  <section id="research" className="py-24 lg:py-32 bg-paper relative">
    <div className="container">
      <SectionHeading
        eyebrow="Forschung"
        title={<>Forschungs­schwerpunkte</>}
        intro="Zwei zentrale Themenbereiche: Einsatz von KI beim Mathematiklernen und stoffdidaktische Forschung — getragen von der Frage, wie sich mathematische Begriffe im Kopf der Lernenden bilden."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((a) => (
          <article
            key={a.n}
            className="group relative p-8 lg:p-10 rounded-md bg-card border border-border/70 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="font-serif text-sm text-accent">{a.n}</span>
              <span className="h-px flex-1 mt-3 ml-4 bg-border group-hover:bg-accent transition-colors" />
            </div>
            <h3 className="font-serif text-2xl mb-3 leading-tight">{a.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{a.body}</p>
            <div className="flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
