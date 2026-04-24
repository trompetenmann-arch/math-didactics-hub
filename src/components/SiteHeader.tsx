import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#research", label: "Forschung" },
  { href: "#projects", label: "Projekte" },
  { href: "#teaching", label: "Lehre" },
  { href: "#publications", label: "Publikationen" },
  { href: "#news", label: "Aktuelles" },
  { href: "#contact", label: "Kontakt" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/92 backdrop-blur-md shadow-soft"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-center h-16 relative">
        <a href="#top" className="absolute left-4 md:left-6 text-base font-bold tracking-tight text-foreground">
          V<span className="text-primary">·</span>Katter
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menü"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden absolute right-4 flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
