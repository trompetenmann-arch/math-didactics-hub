import { SectionHeading } from "@/components/SectionHeading";

const pubs = [
  {
    year: "2025",
    type: "Artikel",
    title: "Grundvorstellungen zum Sinus zwischen Einheitskreis und Funktion — eine empirische Rekonstruktion",
    venue: "Journal für Mathematik-Didaktik, 46(2)",
    co: "Katter, V. & Müller, A.",
  },
  {
    year: "2024",
    type: "Buchkapitel",
    title: "Digitale Visualisierungen als Brücken zwischen mathematischen Vorstellungen",
    venue: "in: Digitalisierung im MU (Springer Spektrum)",
    co: "Katter, V.",
  },
  {
    year: "2024",
    type: "Artikel",
    title: "Wahrscheinlichkeitsvorstellungen in der Sek. I — eine Interviewstudie",
    venue: "mathematica didactica, 47(1)",
    co: "Katter, V., Schäfer, L. & Hoffmann, T.",
  },
  {
    year: "2023",
    type: "Tagungsband",
    title: "Vorstellungen zur lokalen Änderungsrate: drei Lernpfade",
    venue: "Beiträge zum Mathematikunterricht 2023",
    co: "Katter, V.",
  },
  {
    year: "2022",
    type: "Artikel",
    title: "GeoGebra-gestützte Lernumgebungen zur Trigonometrie — Design & Evaluation",
    venue: "Mathematik lehren, 234",
    co: "Katter, V. & Becker, S.",
  },
];

export const Publications = () => (
  <section id="publications" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Publikationen"
        title="Ausgewählte Veröffentlichungen"
        intro="Eine Auswahl peer-reviewter Beiträge aus den letzten Jahren. Vollständige Liste auf Anfrage."
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
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 hover:gap-4 transition-all"
        >
          Vollständige Publikationsliste anfragen <span>→</span>
        </a>
      </div>
    </div>
  </section>
);
