import { SectionHeading } from "@/components/SectionHeading";
import type { ReactNode } from "react";

const news: { date: string; tag: string; title: string; body: ReactNode }[] = [
  {
    date: "Mai 2026",
    tag: "Publikation",
    title: "Themenheft in mathematik lehren erschienen",
    body: (
      <>
        Das Themenheft „mit Flächeninhalten Mathe verstehen“ der Zeitschrift „mathematik lehren“ ist erschienen,
        gemeinsam herausgegeben mit Daniel Frohn.
      </>
    ),
  },
  {
    date: "SoSe 2026",
    tag: "Lehre",
    title: "Neues Seminar: KI für den Mathematikunterricht",
    body: (
      <>
        Entwicklung und Erprobung KI-gestützter Unterrichtsmaterialien — neu im Lehrangebot der Universität
        Bielefeld, gefördert vom Qualitätsfond für Lehre.{" "}
        <a href="https://kivima.eu" target="_blank" rel="noreferrer" className="text-highlight hover:underline">
          kivima.eu
        </a>
      </>
    ),
  },
  {
    date: "2025",
    tag: "Drittmittel",
    title: "Math CaTS gestartet",
    body: (
      <>
        Vom Bielefelder Nachwuchsfond gefördertes Projekt zum Einsatz von ChatGPT in der Sek. I — Kooperation mit
        Prof. Salle und Prof. Wolff.{" "}
        <a
          href="https://www.uni-bielefeld.de/fakultaeten/psychologie/abteilung/arbeitseinheiten/16/projekte/laufende/cats/"
          target="_blank"
          rel="noreferrer"
          className="text-highlight hover:underline"
        >
          Mehr zu Math CaTS
        </a>
      </>
    ),
  },
  {
    date: "2025",
    tag: "Publikation",
    title: "JMD-Artikel zur Sinusfunktion erschienen",
    body: (
      <>
        „Didaktisch orientierte Sachanalysen zur Ausdifferenzierung funktionaler Grundvorstellungen“ im Journal für
        Mathematik-Didaktik.{" "}
        <a
          href="https://link.springer.com/article/10.1007/s13138-024-00244-6"
          target="_blank"
          rel="noreferrer"
          className="text-highlight hover:underline"
        >
          Zum Artikel
        </a>
      </>
    ),
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
