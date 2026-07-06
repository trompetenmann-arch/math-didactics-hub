import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState, type ReactNode } from "react";

const INITIAL_NEWS_COUNT = 6;

const news: { date: string; tag: string; title: string; body: ReactNode; image?: string; imageAlt?: string }[] = [
  {
    date: "06.07.2026",
    tag: "Vortrag",
    title: "MINT-Sommer: Satz von Borsuk-Ulam",
    body: (
      <>
        Heute halte ich beim MINT-Sommer der Universität Bielefeld einen Vortrag zum Satz von Borsuk-Ulam —
        mit anschaulichen Zugängen zu einem klassischen Resultat der Topologie und seinen überraschenden
        Anwendungen.
      </>
    ),
    image: "/borsuk_ulam_linkedin.png",
    imageAlt: "Ankündigungsbild zum Vortrag über den Satz von Borsuk-Ulam beim MINT-Sommer der Universität Bielefeld",
  },
  {
    date: "05.07.2026",
    tag: "Workshop",
    title: "Zwei-Quadrate-Satz bei mathe+",
    body: (
      <>
        Im Rahmen von mathe+ an der Universität Bielefeld habe ich für Schülerinnen und Schüler der 9. und 10. Klasse
        den Workshop „Die Kunst, Zahlen in Quadrate zu zerlegen“ zum Zwei-Quadrate-Satz von Pierre de Fermat gehalten.
        Die von „Pi und die Primzahlen“ inspirierten Arbeitsblätter verbinden Zahlentheorie, Windmühlen und
        Punktegitter und stehen auf meiner Homepage zur Nutzung bereit.
      </>
    ),
    image: "/1781351791173.jpg",
    imageAlt: "Workshopmaterial zum Zwei-Quadrate-Satz im Rahmen von mathe+",
  },
  {
    date: "22.05.2026",
    tag: "Vortrag",
    title: "Online-Vortrag bei KIMAD",
    body: "Vorstellung von Math CaTS im Rahmen der KIMAD-Sitzung: „Chatbots als Tutoren in der Schule“ mit Fokus auf Prozessqualität und Interaktionsgranularität beim mathematischen Modellieren mit ChatGPT Voice.",
    image: "/KIMAD.png",
    imageAlt: "Bild zum Online-Vortrag bei KIMAD",
  },
  {
    date: "Mai 2026",
    tag: "Vortrag",
    title: "Mathematikdidaktisches Kolloquium in Siegen",
    body: "Vortrag zu Anwendungs- und Forschungsperspektiven von KI im Mathematikunterricht mit Einblicken in KIVIMA und Math-CaTs.",
    image: "/linkedin_post_uni_siegen.jpg",
    imageAlt: "LinkedIn-Post zum Vortrag im Mathematikdidaktischen Kolloquium der Universität Siegen",
  },
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
    image: "/mathematiklehren_255_linkedin.jpg",
    imageAlt: "Titelbild des Themenhefts 'mit Flächeninhalten Mathe verstehen' in mathematik lehren",
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
    image: "/kivima-logo.png",
    imageAlt: "KIVIMA-Logo",
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
    image: "/math_cats-logo.jpg",
    imageAlt: "Math CaTS-Logo",
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

export const News = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? news : news.slice(0, INITIAL_NEWS_COUNT);
  const hiddenNewsCount = news.length - INITIAL_NEWS_COUNT;

  return (
    <section id="news" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Aktuelles"
          title="Neuigkeiten & Termine"
          intro="Vorträge, Veröffentlichungen und Notizen aus Forschung und Lehre."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleNews.map((n) => (
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
              {n.image ? (
                <img
                  src={n.image}
                  alt={n.imageAlt ?? "Beitragsbild"}
                  className="w-full h-auto rounded-md mb-4 border border-border/70"
                  loading="lazy"
                />
              ) : null}
              <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
            </article>
          ))}
        </div>

        {hiddenNewsCount > 0 ? (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="outline"
              className="border-highlight/40 text-highlight hover:bg-highlight/10 hover:text-highlight"
              aria-expanded={showAllNews}
              onClick={() => setShowAllNews((current) => !current)}
            >
              {showAllNews ? "Ältere Neuigkeiten ausblenden" : `Ältere Neuigkeiten anzeigen (${hiddenNewsCount})`}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};
