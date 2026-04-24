import { SectionHeading } from "@/components/SectionHeading";

export const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <div className="container grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Über mich"
          title={<>Mathematik <em className="italic text-highlight">verstehen</em> heißt: Vorstellungen aufbauen.</>}
        />
      </div>
      <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85 lg:pt-2">
        <p>
          Als Mathematikdidaktiker beschäftige ich mich mit der Frage, wie aus formalen
          Symbolen tragfähige mentale Modelle werden — und wie wir Lernumgebungen so gestalten,
          dass Schülerinnen und Schüler Mathematik nicht nur anwenden, sondern{" "}
          <em>begreifen</em>.
        </p>
        <p>
          Mein Forschungsinteresse gilt dem Konzept der{" "}
          <em className="text-highlight not-italic font-medium">Grundvorstellungen</em>{" "}
          insbesondere in den Bereichen Trigonometrie, Stochastik und Analysis. In der Lehre verbinde ich
          fachdidaktische Theorie mit konkreter Unterrichtspraxis und einem reflektierten Einsatz digitaler Medien.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 pt-6 not-prose">
          {[
            { y: "seit 2022", t: "Akadem. Rat, Mathematikdidaktik" },
            { y: "2021", t: "Promotion (Dr. rer. nat.)" },
            { y: "2018–2021", t: "Wiss. Mitarbeiter" },
            { y: "2017", t: "1./2. Staatsexamen Lehramt" },
          ].map((cv) => (
            <li
              key={cv.t}
              className="border-l-2 border-accent/60 pl-4 py-1"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{cv.y}</div>
              <div className="text-sm font-medium">{cv.t}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
