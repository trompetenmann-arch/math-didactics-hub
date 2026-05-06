import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";

const Impressum = () => (
  <main className="min-h-screen bg-background">
    <SiteHeader />
    <section className="py-16 lg:py-24">
      <div className="container max-w-4xl space-y-8">
        <Button asChild size="lg" className="h-12 px-6 text-base font-semibold shadow-md">
          <Link to="/" aria-label="Zurück zur Startseite">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zur Startseite
          </Link>
        </Button>

        <article className="rounded-xl border bg-card p-6 md:p-8">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Impressum</h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Angaben gemäß § 5 DDG</p>

            <h2>Kontakt & Anbieter</h2>
            <p>
              Dr. Valentin Katter
              <br />
              valentinkatter.de
              <br />
              Universität Bielefeld
              <br />
              Fakultät für Mathematik / Institut für Didaktik der Mathematik (IDM)
              <br />
              Universitätsstraße 25
              <br />
              33615 Bielefeld
              <br />
              Deutschland
            </p>

            <ul>
              <li>
                E-Mail: <a href="mailto:vkatter@math.uni-bielefeld.de">vkatter@math.uni-bielefeld.de</a>
              </li>
              <li>Telefon: +49 521 106-5049</li>
            </ul>

            <h2>Inhaltlich verantwortlich nach § 18 Abs. 2 MStV</h2>
            <p>
              Dr. Valentin Katter
              <br />
              Universitätsstraße 25
              <br />
              33615 Bielefeld
            </p>

            <h2>Rechtliche Hinweise</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht.
              Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </article>
      </div>
    </section>
    <SiteFooter />
  </main>
);

export default Impressum;
