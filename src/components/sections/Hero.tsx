import portrait from "@/assets/portrait.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-warm">
      <div className="container relative max-w-3xl mx-auto text-center animate-fade-up">
        {/* Round portrait */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-accent-gradient opacity-15 blur-2xl rounded-full" />
            <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-full overflow-hidden ring-4 ring-card shadow-warm bg-card">
              <img
                src={portrait}
                alt="Porträt von Dr. Valentin Katter, Mathematikdidaktiker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-primary font-bold tracking-wide mb-3">Dr. Valentin Katter</p>

        {/* Profile pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="https://www.researchgate.net/profile/Valentin-Katter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="h-10 w-10 rounded-full bg-card shadow-soft flex items-center justify-center text-sm font-semibold text-foreground hover:shadow-warm transition-all"
          >
            R<sup className="text-[0.6rem]">G</sup>
          </a>
          <a
            href="https://www.linkedin.com/in/valentin-katter-74b142402/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full bg-[#0A66C2] text-white shadow-soft flex items-center justify-center text-sm font-bold hover:shadow-warm transition-all"
          >
            in
          </a>
          <a
            href="https://ekvv.uni-bielefeld.de/pers_publ/publ/PersonDetail.jsp?personId=78762114"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Universität Bielefeld"
            className="h-10 px-3 rounded-full bg-card shadow-soft flex items-center justify-center text-xs font-semibold text-foreground hover:shadow-warm transition-all"
          >
            Uni Bielefeld
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance mb-8 text-foreground">
          Mathematik lernen
          <br />
          — mit und ohne KI
        </h1>

        <div className="space-y-5 max-w-2xl mx-auto text-left md:text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Ich bin Postdoc am Institut für Didaktik der Mathematik (IDM) der Uni Bielefeld
            und Lehrer an der Rudolf-Steiner Schule. In meiner Forschung beschäftige ich mich
            mit stoffdidaktischen Fragestellungen und mit Grundvorstellungen als zentralem
            Zugang dazu, wie Lernende mathematische Begriffe verstehen und entwickeln.
          </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Ein besonderer Fokus meiner Arbeit liegt auf dem Einsatz von Künstlicher
            Intelligenz im Mathematikunterricht. Dabei untersuche ich, wie Large Language
            Models Lernprozesse unterstützen und neue Perspektiven auf mathematisches
            Modellieren eröffnen können.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-warm transition-all"
          >
            Projekte ansehen
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-semibold hover:bg-secondary transition-all"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};
