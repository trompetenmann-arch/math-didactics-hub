import { SectionHeading } from "@/components/SectionHeading";

const courses = [
  { sem: "SoSe 2026", title: "Didaktik der Analysis", level: "M.Ed.", type: "Seminar" },
  { sem: "SoSe 2026", title: "Einführung in die Mathematikdidaktik", level: "B.Ed.", type: "Vorlesung" },
  { sem: "WiSe 25/26", title: "Digitale Medien im MU", level: "M.Ed.", type: "Seminar" },
  { sem: "WiSe 25/26", title: "Stochastik unterrichten", level: "M.Ed.", type: "Seminar" },
  { sem: "SoSe 2025", title: "Begleitseminar Praxissemester", level: "M.Ed.", type: "Seminar" },
];

export const Teaching = () => (
  <section id="teaching" className="py-24 lg:py-32 bg-paper">
    <div className="container">
      <SectionHeading
        eyebrow="Lehre"
        title={<>Lehre als <em className="italic text-highlight">Werkstatt</em>.</>}
        intro="Meine Lehrveranstaltungen verstehen sich als didaktische Werkstätten: Studierende erfahren Mathematikdidaktik nicht nur als Theorie, sondern als reflektierte Praxis."
      />

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="rounded-md border border-border/70 bg-card overflow-hidden shadow-soft">
            <div className="grid grid-cols-12 px-6 py-3 border-b border-border bg-secondary/40 text-xs uppercase tracking-wider text-muted-foreground">
              <div className="col-span-3">Semester</div>
              <div className="col-span-6">Veranstaltung</div>
              <div className="col-span-3 text-right">Format</div>
            </div>
            {courses.map((c) => (
              <div
                key={c.sem + c.title}
                className="grid grid-cols-12 px-6 py-5 border-b border-border/50 last:border-0 items-center hover:bg-secondary/30 transition-colors"
              >
                <div className="col-span-3 text-sm text-muted-foreground">{c.sem}</div>
                <div className="col-span-6">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.level}</div>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent-foreground">
                    {c.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="p-6 rounded-md bg-primary text-primary-foreground">
            <h3 className="font-serif text-xl mb-3">Sprechstunde</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Donnerstags, 14–16 Uhr<br />
              Raum 3.215 oder digital — bitte um Anmeldung per Mail.
            </p>
          </div>
          <div className="p-6 rounded-md border border-border bg-card">
            <h3 className="font-serif text-xl mb-3">Lehrprinzipien</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent">·</span> Vorstellungsorientierung statt Kalkül</li>
              <li className="flex gap-2"><span className="text-accent">·</span> Vom Beispiel zur Theorie</li>
              <li className="flex gap-2"><span className="text-accent">·</span> Reflexion eigener Lernerfahrungen</li>
              <li className="flex gap-2"><span className="text-accent">·</span> Digitale Tools als Denkwerkzeuge</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
);
