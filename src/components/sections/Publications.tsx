import { SectionHeading } from "@/components/SectionHeading";

const pubs = [
  {
    year: "accepted",
    type: "Artikel · peer reviewed",
    co: "Katter, V.; Huget, J.",
    title: "Förderung digitaler Kompetenzen durch LLMs — Darstellungswechsel quadratischer Funktionen mit ChatGPT",
    venue: "mathematica didactica",
  },
  {
    year: "2025",
    type: "Artikel · peer reviewed",
    co: "Katter, V.",
    title: "Didaktisch orientierte Sachanalysen zur Ausdifferenzierung allgemeiner funktionaler Grundvorstellungen — exemplarisch durchgeführt an der Sinusfunktion",
    venue: "Journal für Mathematik-Didaktik",
  },
  {
    year: "2025",
    type: "Artikel",
    co: "Katter, V.; Barton, D.",
    title: "Wie sich Large Language Models im Mathematikunterricht bewähren — und woran sie (noch) scheitern",
    venue: "Mitteilungen der Gesellschaft für Didaktik der Mathematik 119",
  },
  {
    year: "2025",
    type: "Tagungsband",
    co: "Katter, V.; Salle, A.; Wolff, A.; Laun, M.",
    title: "Eine Untersuchung zum Einfluss von ChatGPT auf den Modellierungsprozess von Achtklässler*innen",
    venue: "Beiträge zum Mathematikunterricht 2025",
  },
  {
    year: "2025",
    type: "Tagungsband",
    co: "Katter, V.; Barton, D.",
    title: "\"Wo liegt mein Fehler?\" — Einsatz von generativer KI zur Fehlerreflexion. Erste Zwischenergebnisse des Projekts KIBEBA",
    venue: "Beiträge zum Mathematikunterricht 2025",
  },
  {
    year: "2024",
    type: "Tagungsband",
    co: "Katter, V.; Huget, J.",
    title: "ChatGPT und quadratische Funktionen: Fachdidaktische Perspektiven und Anwendungen",
    venue: "Beiträge zum Mathematikunterricht 2024",
  },
  {
    year: "2024",
    type: "Artikel",
    co: "Bulthaup, P.; Jetses, T.; Katter, V.",
    title: "Das digitale Federpendel — virtuell-enaktiv zu periodischen Prozessen",
    venue: "mathematik lehren 243, 31–34",
  },
  {
    year: "2023",
    type: "Monografie",
    co: "Katter, V.",
    title: "Historische, logische und individuelle Genese der Trigonometrie aus didaktischer Sicht",
    venue: "Springer Nature",
  },
  {
    year: "2023",
    type: "Artikel",
    co: "Katter, V.; Salle, A.",
    title: "Die Oszillationsvorstellung — eine Grundvorstellung für die reelle Sinusfunktion",
    venue: "Der Mathematikunterricht",
  },
  {
    year: "2023",
    type: "Artikel",
    co: "Katter, V.",
    title: "Schräger Schnitt und schöne Wellen — Ein Zugang zur Richtungsableitung von Funktionen in zwei Veränderlichen mithilfe von Zylinderschnitten",
    venue: "Der Mathematikunterricht",
  },
  {
    year: "2023",
    type: "Tagungsband",
    co: "Katter, V.",
    title: "Rekonstruktion von Denkprozessen zum Sinusbegriff in kooperativen Problemlösesituationen",
    venue: "Beiträge zum Mathematikunterricht 2022, Band 2",
  },
  {
    year: "2021",
    type: "Buchkapitel · peer reviewed",
    co: "Katter, V.; Alarcón Relmucao, N. A.",
    title: "Construyendo en clases las nociones básicas de la función exponencial y función seno",
    venue: "in: Matemática enactiva (Grao)",
  },
  {
    year: "2020",
    type: "Artikel",
    co: "Katter, V.",
    title: "Vom Dreieck über den Kreis zur Sinusfunktion",
    venue: "mathematik lehren 218, 23–26",
  },
  {
    year: "2020",
    type: "Tagungsband",
    co: "Katter, V.",
    title: "Inhaltliche Kompetenzen von Lehramtsstudierenden im Bereich Trigonometrie",
    venue: "Beiträge zum Mathematikunterricht 2020 (WTM-Verlag)",
  },
  {
    year: "2019",
    type: "Tagungsband",
    co: "Katter, V.",
    title: "The connection between angle measure and the understanding of sine",
    venue: "Proceedings of CERME 11",
  },
  {
    year: "2018",
    type: "Tagungsband",
    co: "Katter, V.",
    title: "Die Ableitung der Sinusfunktion — prozedurale und konzeptionelle Aspekte trigonometrischer Wissenselemente",
    venue: "Beiträge zum Mathematikunterricht 2018, Band 2",
  },
  {
    year: "2017",
    type: "Artikel",
    co: "Katter, V.",
    title: "Ableitung von sin und cos",
    venue: "mathematik lehren 204, 40–43",
  },
  {
    year: "2014",
    type: "Artikel · Mathematik",
    co: "Katter, V.; Mahrt, N.",
    title: "Reduced representations of rooted trees",
    venue: "Journal of Algebra 413, 41–49",
  },
];

export const Publications = () => (
  <section id="publications" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Publikationen"
        title="Veröffentlichungen"
        intro="Ausgewählte Beiträge aus Mathematikdidaktik und Mathematik."
      />

      <ol className="space-y-px">
        {pubs.map((p, i) => (
          <li
            key={i}
            className="group grid md:grid-cols-12 gap-4 py-7 border-b border-border first:border-t hover:bg-secondary/30 -mx-4 px-4 transition-colors rounded-sm"
          >
            <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1">
              <span className="font-serif text-2xl text-highlight">{p.year}</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground self-center md:self-start">
                {p.type}
              </span>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-serif text-lg md:text-xl leading-snug mb-2 group-hover:text-highlight transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground italic">{p.venue}</p>
              <p className="text-sm mt-1 text-foreground/75">{p.co}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <a
          href="https://www.researchgate.net/profile/Valentin-Katter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 hover:gap-4 transition-all"
        >
          Vollständiges Profil auf ResearchGate <span>→</span>
        </a>
      </div>
    </div>
  </section>
);
