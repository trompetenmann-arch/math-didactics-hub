import { SectionHeading } from "@/components/SectionHeading";

const current = [
  {
    nr: "240339",
    title: "Daten, Häufigkeiten und Wahrscheinlichkeiten im Mathematikunterricht der Grundschule",
    href: "https://ekvv.uni-bielefeld.de/kvv_publ/publ/vd?id=651846566",
  },
  {
    nr: "240345",
    title: "Didaktik der Stochastik (HRSGe)",
    href: "https://ekvv.uni-bielefeld.de/kvv_publ/publ/vd?id=651846781",
  },
  {
    nr: "243362",
    title: "KI für den Mathematikunterricht — Entwicklung und Erprobung von Unterrichtsmaterialien",
    href: "https://ekvv.uni-bielefeld.de/kvv_publ/publ/vd?id=671633134",
  },
];

const overview = [
  { title: "Didaktik der Analysis", level: "Gym/Ge", count: "12×", inst: "Universität Bielefeld" },
  { title: "Didaktik der Linearen Algebra", level: "Gym/Ge", count: "3×", inst: "Universität Bielefeld" },
  { title: "Didaktik der Trigonometrie", level: "Gym/Ge", count: "2×", inst: "Universität Bielefeld" },
  { title: "Didaktik der Stochastik", level: "HRSGe", count: "1×", inst: "Universität Bielefeld" },
  { title: "Digitale Lernplattformen im Mathematikunterricht", level: "HRSGe", count: "2×", inst: "Universität Bielefeld" },
  { title: "Grundbegriffe der Mathematikdidaktik", level: "Gym/Ge", count: "3×", inst: "Universität Bielefeld" },
  { title: "Didaktik der Algebra", level: "HRSGe", count: "1×", inst: "Universität Bielefeld" },
  { title: "Vorbereitungsseminar Praxissemester", level: "HRSGe", count: "1×", inst: "Universität Bielefeld" },
  { title: "Daten, Häufigkeiten, Wahrscheinlichkeiten", level: "Primar", count: "1×", inst: "Universität Bielefeld" },
  { title: "Seminar C — Forschungsmethoden", level: "Gym/Ge", count: "1×", inst: "Universität Osnabrück" },
  { title: "Seminar LaG — Digitale Medien", level: "Gym/Ge", count: "2×", inst: "Universität Osnabrück" },
  { title: "Vorlesung Mathematikdidaktik", level: "HRSGe", count: "1×", inst: "Universität Osnabrück" },
  { title: "Calculus & lineare Algebra (Englisch)", level: "IBM", count: "2×", inst: "Hochschule Fresenius" },
  { title: "Vorkurs Mathematikdidaktik", level: "MINT", count: "3×", inst: "Hochschule OWL" },
];

const workshops = [
  { year: "2025", venue: "BI.Mathe Lehrerfortbildungstag", topic: "KI im Mathematikunterricht" },
  { year: "2025", venue: "BI.Mathe Lehrerfortbildungstag", topic: "Spielerisch Gespräche anregen" },
  { year: "2025", venue: "Netzwerktagung Mathematik 2025 (NLQ)", topic: "KI aus Schülerperspektive" },
  { year: "2024", venue: "MINT-Sommer (Uni Bielefeld)", topic: "Der Satz von Borsuk-Ulam — warum es am anderen Ende der Welt auch regnet" },
  { year: "2024", venue: "INEM (Universidad Católica del Norte, Chile)", topic: "Grundvorstellungen de las funciones trigonométricas & exponentiales" },
];

export const Teaching = () => (
  <section id="teaching" className="py-24 lg:py-32 bg-paper">
    <div className="container">
      <SectionHeading
        eyebrow="Lehre"
        title={<>Lehre, Didaktik und Mathematik</>}
        intro="Studierende erfahren Mathematikdidaktik nicht nur als Theorie, sondern als reflektierte Praxis, mit besonderem Augenmerk auf den sinnvollen Einsatz digitaler Hilfsmittel und KI-Tools."
      />

      <div className="grid lg:grid-cols-3 gap-10 mb-20">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-2xl mb-5">Aktuelle Lehre — SoSe 2026</h3>
          <div className="rounded-md border border-border/70 bg-card overflow-hidden shadow-soft">
            {current.map((c) => (
              <a
                key={c.nr}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 px-6 py-5 border-b border-border/50 last:border-0 items-start hover:bg-secondary/40 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider text-muted-foreground tabular-nums w-16 shrink-0 pt-1">
                  {c.nr}
                </span>
                <div className="flex-1">
                  <div className="font-medium leading-snug group-hover:text-highlight transition-colors">
                    {c.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">eKVV Universität Bielefeld →</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="p-6 rounded-md bg-primary text-primary-foreground">
            <h3 className="font-serif text-xl mb-3">Lehrprinzipien</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/85">
              <li className="flex gap-2"><span>·</span> Vorstellungsorientierung statt Kalkül</li>
              <li className="flex gap-2"><span>·</span> Theorie ↔ schulische Praxis verbinden</li>
              <li className="flex gap-2"><span>·</span> Reflektierter Einsatz digitaler Tools & KI</li>
              <li className="flex gap-2"><span>·</span> Eigene Lernerfahrungen reflektieren</li>
            </ul>
          </div>
          <a
            href="https://ekvv.uni-bielefeld.de/kvv_publ/publ/Lehrende_Veranstaltungen.jsp?personId=78762114"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-md border border-border bg-card hover:bg-secondary/40 transition-colors"
          >
            <h3 className="font-serif text-lg mb-2">Alle Veranstaltungen</h3>
            <p className="text-sm text-muted-foreground">
              Vollständige Liste der Lehrveranstaltungen an der Universität Bielefeld im eKVV →
            </p>
          </a>
        </aside>
      </div>

      <h3 className="font-serif text-2xl mb-5">Übersicht gehaltener Lehrveranstaltungen</h3>
      <div className="rounded-md border border-border/70 bg-card overflow-hidden shadow-soft mb-20">
        <div className="grid grid-cols-12 px-6 py-3 border-b border-border bg-secondary/40 text-xs uppercase tracking-wider text-muted-foreground">
          <div className="col-span-6">Veranstaltung</div>
          <div className="col-span-2">Schulform</div>
          <div className="col-span-1 text-right">Anzahl</div>
          <div className="col-span-3 text-right">Institution</div>
        </div>
        {overview.map((c) => (
          <div
            key={c.title + c.inst}
            className="grid grid-cols-12 px-6 py-4 border-b border-border/50 last:border-0 items-center hover:bg-secondary/30 transition-colors"
          >
            <div className="col-span-6 text-sm font-medium leading-snug">{c.title}</div>
            <div className="col-span-2 text-xs text-muted-foreground">{c.level}</div>
            <div className="col-span-1 text-right text-xs tabular-nums text-highlight font-medium">{c.count}</div>
            <div className="col-span-3 text-right text-xs text-muted-foreground">{c.inst}</div>
          </div>
        ))}
      </div>

      <h3 className="font-serif text-2xl mb-5">Workshops & Vorträge</h3>
      <div className="rounded-md border border-border/70 bg-card overflow-hidden shadow-soft">
        {workshops.map((w, i) => (
          <div
            key={i}
            className="grid grid-cols-12 px-6 py-5 gap-4 border-b border-border/50 last:border-0 items-baseline hover:bg-secondary/30 transition-colors"
          >
            <div className="col-span-2 md:col-span-1 font-serif text-xl text-highlight">{w.year}</div>
            <div className="col-span-10 md:col-span-5 text-sm font-medium">{w.venue}</div>
            <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground">{w.topic}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
