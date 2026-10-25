import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <section className="flex-1 flex items-center pt-28 pb-16">
      <div className="container max-w-2xl text-center">
        <p className="font-serif text-7xl text-highlight mb-4">404</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-10">
          Die aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zur Startseite
          </Link>
        </Button>
      </div>
    </section>
    <SiteFooter />
  </main>
);

export default NotFound;
