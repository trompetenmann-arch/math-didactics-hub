import { SectionHeading } from "@/components/SectionHeading";

const areas = [
  {
    n: "01",
    title: "Grundvorstellungen zur Trigonometrie",
    body: "Wie bauen Lernende tragfähige Vorstellungen vom Sinus auf — zwischen Dreieck, Einheitskreis und periodischer Funktion? Untersuchungen zu Vorstellungswechseln und didaktischen Brücken.",
    tags: ["Sekundarstufe II", "Vorstellungswechsel"],
  },
  {
    n: "02",
    title: "Grundvorstellungen in der Stochastik",
    body: "Wahrscheinlichkeit verstehen heißt, mehrere Sichtweisen zu integrieren: frequentistisch, subjektiv, kombinatorisch. Wie gelingt das im Unterricht?",
    tags: ["Wahrscheinlichkeit", "Vorstellungsorientierung"],
  },
  {
    n: "03",
    title: "Grundvorstellungen in der Analysis",
    body: "Ableitung als lokale Änderungsrate, Integral als (re-)konstruierte Größe — empirische Studien zu Lernpfaden zentraler Begriffe.",
    tags: ["Ableitung", "Integral"],
  },
  {
    n: "04",
    title: "Digitale Medien im Mathematikunterricht",
    body: "Funktionale Verwendung von GeoGebra, dynamischen Visualisierungen und KI-gestützten Werkzeugen zur Förderung mathematischen Verständnisses.",
    tags: ["GeoGebra", "Visualisierung", "KI"],
  },
];

export const Research = () => (
  <section id="research" className="py-24 lg:py-32 bg-paper relative">
    <div className="container">
      <SectionHeading
        eyebrow="Forschung"
        title={<>Forschungs­schwerpunkte</>}
        intro="Vier verbundene Stränge — getragen von der Frage, wie sich mathematische Begriffe im Kopf der Lernenden bilden."
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
