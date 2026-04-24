import { SectionHeading } from "@/components/SectionHeading";

const news = [
  {
    date: "April 2026",
    tag: "Vortrag",
    title: "Eingeladener Vortrag auf der GDM-Jahrestagung in Bremen",
    body: "Zum Thema »Vorstellungswechsel in der Trigonometrie — empirische Befunde und didaktische Konsequenzen«.",
  },
  {
    date: "März 2026",
    tag: "Publikation",
    title: "Neuer Artikel im Journal für Mathematik-Didaktik erschienen",
    body: "Eine empirische Rekonstruktion von Grundvorstellungen zum Sinus, gemeinsam mit A. Müller.",
  },
  {
    date: "Januar 2026",
    tag: "Lehre",
    title: "Neue Lernumgebung zur Stochastik veröffentlicht",
    body: "Frei verfügbare GeoGebra-Materialien für die Sek. I — entwickelt im Rahmen des TriViz-Projekts.",
  },
];

export const News = () => (
  <section id="news" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Aktuelles"
        title="Neuigkeiten & Termine"
        intro="Vorträge, Veröffentlichungen und kleine Notizen aus Forschung und Lehre."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <article
            key={n.title}
            className="group p-7 rounded-md border border-border bg-card hover:shadow-warm hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-5">
              <time className="text-xs uppercase tracking-wider text-muted-foreground">{n.date}</time>
              <span className="text-xs px-2.5 py-1 rounded-full bg-highlight/10 text-highlight font-medium">
                {n.tag}
              </span>
            </div>
            <h3 className="font-serif text-xl leading-snug mb-3 group-hover:text-highlight transition-colors">
              {n.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
