import { SectionHeading } from "@/components/SectionHeading";

const current = [
  {
    title: "Math CaTS — Chatbots als Tutor in Schulen",
    period: "seit 2025",
    funder: "Bielefelder Nachwuchsfond (15.000 €)",
    body: "Untersuchung, wie ChatGPT die mathematische Leistung von Lernenden der Sekundarstufe I beeinflusst — in Kooperation mit Prof. Dr. Alexander Salle (Mathematikdidaktik) und Prof. Dr. Fabian Wolff (Psychologie).",
  },
  {
    title: "DiLeMath — Digitale Lernplattformen im Mathematikunterricht",
    period: "seit 2024",
    funder: "Qualitätsfond für Lehre (10.000 €)",
    body: "Studierende sammeln Erfahrungen mit digitalen Plattformen und KI-Tools (fobizz, bettermarks, studyly, mathegym, Anton u. v. m.) und entwickeln Kriterien für eine kritische Bewertung.",
  },
  {
    title: "KIVIMA — KI-gestützte Visualisierungen im Mathematikunterricht",
    period: "ab 2026",
    funder: "Qualitätsfond für Lehre (beantragt, 10.000 €)",
    body: "Praxisorientierte Lerngelegenheiten im Lehramtsstudium Mathematik: KI-gestützte Entwicklung und Erprobung dynamischer Visualisierungen.",
  },
];

const past = [
  {
    title: "INEM — International Network for Enactive Mathematics",
    period: "2024",
    funder: "Agencia Nacional de Investigación y Desarrollo (Chile)",
    body: "Wissenschaftlicher Mitarbeiter — Planung und Durchführung von Lehrerfortbildungen in Chile. Kooperation mit PUCV, UCN und Universidad Austral de Chile.",
  },
  {
    title: "EnaMath — Enactive Learning Environments in Mathematics",
    period: "2023",
    funder: "DAAD Fact Finding Mission",
    body: "Wissenschaftlicher Mitarbeiter — Forschungsvorträge in Kap Verde, Kooperation mit der University of Cape Verde.",
  },
  {
    title: "Promath enactiva",
    period: "2017 – 2022",
    funder: "DAAD",
    body: "Projektkoordination, wissenschaftlicher Austausch und Gastvorträge in Chile (PUCV, USACH, U. de Chile, U. Viña del Mar). Gemeinsame Publikation.",
  },
  {
    title: "SOLIDARIS",
    period: "2018 – 2021",
    funder: "Erasmus+ CBHE",
    body: "Kontaktperson und Organisation. Konsortium mit Università Roma Tre, U. Lisboa, U. Viña del Mar, U. Estadual da Paraíba, U. Tres de Febrero und U. del Salvador.",
  },
];

const Item = ({ p, i }: { p: typeof current[number]; i: number }) => (
  <div className="group grid md:grid-cols-12 gap-4 p-6 md:p-8 bg-card hover:bg-secondary/40 transition-colors">
    <div className="md:col-span-2 text-sm text-muted-foreground">
      <span className="font-serif text-2xl text-highlight block">{String(i + 1).padStart(2, "0")}</span>
      <span className="text-xs uppercase tracking-wider mt-1 block">{p.period}</span>
    </div>
    <div className="md:col-span-7">
      <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-highlight transition-colors leading-snug">
        {p.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{p.body}</p>
    </div>
    <div className="md:col-span-3 md:text-right">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">Förderung</span>
      <p className="text-sm font-medium mt-1">{p.funder}</p>
    </div>
  </div>
);

export const Projects = () => (
  <section id="projects" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Projekte & Drittmittel"
        title="Aktuelle Forschungs­projekte"
        intro="Drittmittelgeförderte Vorhaben, in denen die Schwerpunkte zu konkreten Studien werden."
      />

      <div className="space-y-px rounded-md overflow-hidden border border-border/70 bg-card shadow-soft">
        {current.map((p, i) => (
          <Item key={p.title} p={p} i={i} />
        ))}
      </div>

      <h3 className="font-serif text-2xl mt-16 mb-6">Abgeschlossene Projekte</h3>
      <div className="space-y-px rounded-md overflow-hidden border border-border/70 bg-card shadow-soft">
        {past.map((p, i) => (
          <Item key={p.title} p={p} i={i} />
        ))}
      </div>
    </div>
  </section>
);
