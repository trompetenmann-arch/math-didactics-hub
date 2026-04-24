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
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          V<span className="text-accent">·</span>Katter
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          aria-label="Menü"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
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
