import portrait from "@/assets/portrait.png";
import type { MouseEvent } from "react";

export const Hero = () => {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 72;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-warm grain">
      {/* Decorative math curve */}
      <svg
        aria-hidden
        className="absolute -top-10 -right-20 w-[640px] h-[640px] opacity-[0.18] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          className="animate-draw"
          d="M 0 300 Q 75 100, 150 300 T 300 300 T 450 300 T 600 300"
          stroke="hsl(var(--highlight))"
          strokeWidth="1.5"
        />
        <path
          className="animate-draw"
          style={{ animationDelay: "0.5s" }}
          d="M 0 350 Q 75 150, 150 350 T 300 350 T 450 350 T 600 350"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
        />
        <circle cx="300" cy="300" r="220" stroke="hsl(var(--primary) / 0.15)" strokeDasharray="2 6" />
      </svg>

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Mathematikdidaktik · Forschung & Lehre
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance mb-6">
            Mathematik lernen —{" "}
            <span className="italic text-highlight">mit und ohne KI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-balance">
            Ich bin Postdoc am Institut für Didaktik der Mathematik (IDM) der{" "}
            <em className="text-foreground not-italic font-medium">Universität Bielefeld</em>{" "}
            und Lehrer an der Rudolf-Steiner Schule. Ich forsche zu Grundvorstellungen
            mathematischer Begriffe und zum Einsatz von Künstlicher Intelligenz im Mathematikunterricht.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-warm transition-all"
            >
              Forschung entdecken
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-all"
            >
              Kontakt aufnehmen
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-10">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Profile:</span>
            <a
              href="https://www.researchgate.net/profile/Valentin-Katter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border-b border-border hover:border-accent hover:text-foreground text-muted-foreground transition-colors pb-0.5"
            >
              ResearchGate
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-katter-74b142402/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border-b border-border hover:border-accent hover:text-foreground text-muted-foreground transition-colors pb-0.5"
            >
              LinkedIn
            </a>
            <a
              href="https://ekvv.uni-bielefeld.de/pers_publ/publ/PersonDetail.jsp?personId=78762114"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border-b border-border hover:border-accent hover:text-foreground text-muted-foreground transition-colors pb-0.5"
            >
              eKVV Bielefeld
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-accent-gradient opacity-20 blur-2xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-warm border border-border/60 bg-card">
              <img
                src={portrait}
                alt="Porträt von Dr. Valentin Katter, Mathematikdidaktiker"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-md px-4 py-3 shadow-soft">
              <p className="text-xs text-muted-foreground">Universität Bielefeld · IDM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
