import { SectionHeading } from "@/components/SectionHeading";

const theses = {
  promotion: [
    { name: "M. Weber", title: "Vorstellungen zur Stetigkeit in der Sek. II", status: "laufend" },
  ],
  master: [
    { name: "L. Schmidt", title: "GeoGebra-Lernumgebungen zur Sinus­funktion", status: "2025" },
    { name: "J. Krause", title: "Wahrscheinlichkeitsbegriff in Klasse 8", status: "2025" },
    { name: "P. Lange", title: "KI-Chatbots als Lernpartner im MU", status: "2024" },
    { name: "S. Bauer", title: "Lernpfade zum Integralbegriff", status: "2024" },
  ],
  bachelor: [
    { name: "T. Vogel", title: "Vorstellungen zur Ableitung — Lehrbuchanalyse", status: "2025" },
    { name: "A. Roth", title: "Dynamische Visualisierungen in der Geometrie", status: "2024" },
    { name: "K. Maier", title: "Beweisverständnis im Anfangsunterricht", status: "2024" },
  ],
};

const Block = ({ title, items }: { title: string; items: typeof theses.master }) => (
  <div>
    <h3 className="font-serif text-xl mb-5 flex items-baseline gap-3">
      {title}
      <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">
        {items.length} Arbeit{items.length !== 1 && "en"}
      </span>
    </h3>
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-4 py-3 border-b border-border/50 last:border-0">
          <span className="text-xs text-muted-foreground tabular-nums w-16 shrink-0 pt-0.5">{t.status}</span>
          <div>
            <div className="text-sm font-medium">{t.title}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t.name}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const Supervision = () => (
  <section id="supervision" className="py-24 lg:py-32 bg-paper">
    <div className="container">
      <SectionHeading
        eyebrow="Betreute Arbeiten"
        title="Abschluss- & Qualifikations­arbeiten"
        intro="Eine Auswahl betreuter Abschlussarbeiten — von der Bachelorarbeit bis zur Promotion."
      />
      <div className="grid lg:grid-cols-3 gap-12">
        <Block title="Promotion" items={theses.promotion} />
        <Block title="Masterarbeiten" items={theses.master} />
        <Block title="Bachelorarbeiten" items={theses.bachelor} />
      </div>
    </div>
  </section>
);
