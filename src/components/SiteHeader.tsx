import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#news", label: "Aktuelles" },
  { href: "#research", label: "Forschung" },
  { href: "#teaching", label: "Lehre" },
  { href: "#publications", label: "Publikationen" },
  { href: "#contact", label: "Kontakt" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (href: string) => {
    const sectionId = href.replace("#", "");
    setOpen(false);

    // Auf Unterseiten (Impressum, Datenschutz) zuerst zur Startseite wechseln;
    // die Startseite scrollt dann zum gewünschten Abschnitt.
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() => goTo("#top")}
          aria-label="Zum Seitenanfang"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          V<span className="text-accent">·</span>Katter
        </button>

        <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => goTo(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav aria-label="Hauptnavigation mobil" className="container flex flex-col py-4">
            {links.map((l) => (
              <button
                key={l.href}
                type="button"
                onClick={() => goTo(l.href)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
