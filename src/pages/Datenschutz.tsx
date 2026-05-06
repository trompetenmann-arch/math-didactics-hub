import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";

const Datenschutz = () => (
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
            <h1>Datenschutzerklärung</h1>

            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Dr. Valentin Katter
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
            </ul>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird über GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr St,
              San Francisco, CA 94107, USA.
            </p>
            <p>
              Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten
              Server-Logfiles erfasst. Dies sind insbesondere:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>
            <p>Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung und Sicherheit der Website.</p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:{" "}
              <a
                href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Privacy Statement
              </a>
            </p>

            <h2>3. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
              bzw. TLS-Verschlüsselung.
            </p>

            <h2>4. Ihre Rechte</h2>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p>Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>

            <h2>5. Kontaktaufnahme</h2>
            <p>
              Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für
              mögliche Anschlussfragen gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>

            <h2>6. Änderungen</h2>
            <p>
              Diese Datenschutzerklärung kann angepasst werden, wenn sich technische oder rechtliche
              Rahmenbedingungen ändern.
            </p>
          </div>
        </article>
      </div>
    </section>
    <SiteFooter />
  </main>
);

export default Datenschutz;
