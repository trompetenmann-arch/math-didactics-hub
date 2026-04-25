import { SectionHeading } from "@/components/SectionHeading";

const news = [
  {
    date: "SoSe 2026",
    tag: "Lehre",
    title: "Neues Seminar: KI für den Mathematikunterricht",
    body: "Entwicklung und Erprobung KI-gestützter Unterrichtsmaterialien — neu im Lehrangebot der Universität Bielefeld.",
  },
  {
    date: "2025",
    tag: "Drittmittel",
    title: "Math CaTS gestartet",
    body: "Vom Bielefelder Nachwuchsfond gefördertes Projekt zum Einsatz von ChatGPT in der Sek. I — Kooperation mit Prof. Salle und Prof. Wolff.",
  },
  {
    date: "2025",
    tag: "Publikation",
    title: "JMD-Artikel zur Sinusfunktion erschienen",
    body: "„Didaktisch orientierte Sachanalysen zur Ausdifferenzierung funktionaler Grundvorstellungen“ im Journal für Mathematik-Didaktik.",
  },
  {
    date: "2025",
    tag: "Vortrag",
    title: "Netzwerktagung Mathematik (NLQ)",
    body: "Vortrag „KI aus Schülerperspektive“ beim Niedersächsischen Landesinstitut für schulische Qualitätsentwicklung.",
  },
  {
    date: "2024",
    tag: "International",
    title: "INEM-Lehrerfortbildung in Chile",
    body: "Workshops zu „Grundvorstellungen de las funciones trigonométricas & exponentiales“ an der Universidad Católica del Norte, Antofagasta.",
  },
  {
    date: "2024",
    tag: "Praxis",
    title: "Federpendel-Beitrag in mathematik lehren",
    body: "„Das digitale Federpendel — virtuell-enaktiv zu periodischen Prozessen“ (mit Bulthaup & Jetses).",
  },
];

export const News = () => (
  <section id="news" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Aktuelles"
        title="Neuigkeiten & Termine"
        intro="Vorträge, Veröffentlichungen und Notizen aus Forschung und Lehre."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
