import { SectionHeading } from "@/components/SectionHeading";

const academic = [
  { y: "2016 – 2022", t: "Promotion Didaktik der Mathematik (magna cum laude), Universität Bielefeld" },
  { y: "2010 – 2013", t: "Diplom Mathematik, Universität Bielefeld" },
  { y: "2006 – 2010", t: "Bachelor (Lehramt) Mathematik / Philosophie, Universität Bielefeld" },
];

const career = [
  { y: "seit 04/2025", t: "Lehrkraft, Rudolf Steiner Schule Bielefeld" },
  { y: "seit 04/2023", t: "Postdoc, Institut für Didaktik der Mathematik, Universität Bielefeld" },
  { y: "04/2024 – 09/2024", t: "Vertretung W2-Professur, Universität Osnabrück" },
  { y: "06/2022 – 09/2023", t: "Gastdozent, Hochschule Fresenius Düsseldorf" },
];

const intl = [
  { y: "Kooperationen", t: "Chile, Kap Verde, Italien, Portugal, Brasilien, Argentinien" },
  { y: "Formate", t: "Gastvorträge, Lehrkräftefortbildungen, internationale Konsortien" },
];

export const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Über mich"
            title={<>Mathematik <em className="italic text-highlight">verstehen</em> heißt: Vorstellungen aufbauen.</>}
          />
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85 lg:pt-2">
          <p>
            In meiner Forschung beschäftige ich mich mit{" "}
            <em className="text-highlight not-italic font-medium">stoffdidaktischen Fragestellungen</em>{" "}
            und mit Grundvorstellungen als zentralem Zugang dazu, wie Lernende mathematische
            Begriffe verstehen und entwickeln.
          </p>
          <p>
            Ein besonderer Fokus liegt auf dem Einsatz von Künstlicher Intelligenz im
            Mathematikunterricht. Dabei untersuche ich, wie Large Language Models Lernprozesse
            unterstützen und neue Perspektiven auf mathematisches Modellieren eröffnen können.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Akademische Ausbildung", items: academic },
          { title: "Beruflicher Werdegang", items: career },
          { title: "Internationale Erfahrung", items: intl },
        ].map((block) => (
          <div key={block.title} className="p-7 rounded-md border border-border bg-card shadow-soft">
            <h3 className="font-serif text-xl mb-5">{block.title}</h3>
            <ul className="space-y-4">
              {block.items.map((it) => (
                <li key={it.t} className="border-l-2 border-accent/60 pl-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.y}</div>
                  <div className="text-sm font-medium leading-snug mt-1">{it.t}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
