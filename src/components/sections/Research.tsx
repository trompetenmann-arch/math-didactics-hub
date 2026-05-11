import { SectionHeading } from "@/components/SectionHeading";

const areas = [
  {
    title: "KI im Mathematikunterricht",
    body: "Wie beeinflussen Large Language Models die Entwicklung mathematischen Denkens und Handelns? Studien zu Modellierungsprozessen, Darstellungswechseln und individuellem Feedback durch generative KI u. a. in den Projekten CaTS und KIBEBA.",
    tags: ["LLMs", "Modellieren", "Feedback", "Design Research"],
  },
  {
    title: "Stoffdidaktische Forschung",
    body: "Didaktisch orientierte Sachanalysen zur theoriegeleiteten Herleitung von Grundvorstellungen, empirisch validiert durch qualitative Fallstudien. ",
    tags: ["Sachanalyse", "Qualitative Inhaltsanalyse"],
  },
  {
    title: "Grundvorstellungen zur Trigonometrie",
    body: "Wie bauen Lernende tragfähige Vorstellungen zum Sinus auf  zwischen Dreieck, Einheitskreis und periodischer Funktion? Die Oszillationsvorstellung als Grundvorstellung für die reelle Sinusfunktion.",
    tags: ["Sinusfunktion", "Vorstellungswechsel", "Sek. II"],
  },
  {
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
        
      />

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((a) => (
          <article
            key={a.title}
            className="group relative p-8 lg:p-10 rounded-md bg-card border border-border/70 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-5">
              <span className="h-px block w-full bg-border group-hover:bg-accent transition-colors" />
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
