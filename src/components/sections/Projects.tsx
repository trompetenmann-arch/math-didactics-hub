import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "VorstAna — Vorstellungen zur Analysis",
    period: "2023 – 2026",
    funder: "DFG-Einzelprojekt (in Antragstellung)",
    body: "Längsschnittstudie zur Entwicklung von Grundvorstellungen zentraler Analysisbegriffe in der Oberstufe.",
  },
  {
    title: "TriViz — Visualisierungen in der Trigonometrie",
    period: "2022 – 2024",
    funder: "Stiftung Innovation Hochschullehre",
    body: "Entwicklung und Evaluation digitaler Lernumgebungen mit GeoGebra zur Verknüpfung der Sinus-Vorstellungen.",
  },
  {
    title: "KI-Tutoring im Mathematikunterricht",
    period: "2024 – 2025",
    funder: "BMBF-Verbundprojekt",
    body: "Untersuchung des produktiven Einsatzes generativer KI als didaktisches Werkzeug — nicht als Antwortmaschine.",
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Projekte & Drittmittel"
        title="Aktuelle Forschungs­projekte"
        intro="Drittmittelgeförderte Vorhaben, in denen die Schwerpunkte zu konkreten Studien werden."
      />

      <div className="space-y-px rounded-md overflow-hidden border border-border/70 bg-card shadow-soft">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group grid md:grid-cols-12 gap-4 p-6 md:p-8 bg-card hover:bg-secondary/40 transition-colors"
          >
            <div className="md:col-span-2 text-sm text-muted-foreground">
              <span className="font-serif text-2xl text-highlight block">0{i + 1}</span>
              <span className="text-xs uppercase tracking-wider mt-1 block">{p.period}</span>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-highlight transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Förderung</span>
              <p className="text-sm font-medium mt-1">{p.funder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
