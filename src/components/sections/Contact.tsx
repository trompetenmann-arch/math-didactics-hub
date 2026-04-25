import { SectionHeading } from "@/components/SectionHeading";

export const Contact = () => (
  <section id="contact" className="py-24 lg:py-32 bg-warm grain relative overflow-hidden">
    <svg
      aria-hidden
      className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-[0.12] pointer-events-none"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle cx="200" cy="200" r="180" stroke="hsl(var(--primary))" strokeDasharray="2 8" />
      <path d="M 20 200 Q 110 50, 200 200 T 380 200" stroke="hsl(var(--highlight))" strokeWidth="1.5" />
    </svg>

    <div className="container relative grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="KONTAKT"
          title={<>Im Gespräch <em className="italic text-highlight">bleiben</em>.</>}
          intro={<>Für Kooperationen, Anfragen zu Vorträgen, Betreuungsanfragen oder fachlichen Austausch.<br /><br />Ich freue mich, von Ihnen zu hören.</>}
        />
      </div>

      <div className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-px rounded-md overflow-hidden border border-border bg-border">
          {[
            {
              label: "E-MAIL",
              value: "vkatter@uni-bielefeld.de",
              href: "mailto:vkatter@uni-bielefeld.de",
            },
            {
              label: "INSTITUT",
              value: "Institut für Didaktik der Mathematik (IDM)\nUniversität Bielefeld",
            },
            {
              label: "SCHULE",
              value: "Rudolf-Steiner-Schule Bielefeld",
            },
            {
              label: "EKVV BIELEFELD",
              value: "Profil ansehen →",
              href: "https://ekvv.uni-bielefeld.de/pers_publ/publ/PersonDetail.jsp?personId=78762114",
            },
            {
              label: "RESEARCHGATE",
              value: "Valentin Katter →",
              href: "https://www.researchgate.net/profile/Valentin-Katter",
            },
            {
              label: "LINKEDIN",
              value: "Profil ansehen →",
              href: "https://www.linkedin.com/in/valentin-katter-74b142402/",
            },
          ].map((c) => {
            const Inner = (
              <>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{c.label}</div>
                <div className="font-serif text-lg whitespace-pre-line leading-snug">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-6 bg-card hover:bg-secondary/50 transition-colors group"
              >
                {Inner}
              </a>
            ) : (
              <div key={c.label} className="p-6 bg-card">
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export const SiteFooter = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Dr. Valentin Katter · Mathematikdidaktik</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
        <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
      </div>
    </div>
  </footer>
);
