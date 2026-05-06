import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/Contact";

const Impressum = () => (
  <main className="min-h-screen bg-background">
    <SiteHeader />
    <section className="py-24 lg:py-32">
      <div className="container prose prose-neutral max-w-3xl dark:prose-invert">
        <h1>Impressum</h1>

        <p>Angaben gemäß § 5 DDG</p>

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

        <p>
          E-Mail: <a href="mailto:vkatter@math.uni-bielefeld.de">vkatter@math.uni-bielefeld.de</a>
          <br />
          Telefon: +49 521 106-5049
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>

        <p>
          Dr. Valentin Katter
          <br />
          Universitätsstraße 25
          <br />
          33615 Bielefeld
        </p>

        <h2>Haftung für Inhalte</h2>

        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>

        <h2>Haftung für Links</h2>

        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für
          diese fremden Inhalte auch keine Gewähr übernommen werden.
        </p>

        <h2>Urheberrecht</h2>

        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </section>
    <SiteFooter />
  </main>
);

export default Impressum;
