import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { scrollToSection } from "@/lib/scroll";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { News } from "@/components/sections/News";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Teaching } from "@/components/sections/Teaching";
import { LearningMaterials } from "@/components/sections/LearningMaterials";
import { Publications } from "@/components/sections/Publications";
import { Contact, SiteFooter } from "@/components/sections/Contact";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

  // Sprung aus dem Menü einer Unterseite: nach dem Rendern zum Abschnitt scrollen.
  useEffect(() => {
    if (!scrollTo) return;
    requestAnimationFrame(() => scrollToSection(scrollTo));
    navigate(".", { replace: true, state: null });
  }, [scrollTo, navigate]);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <News />
      <Research />
      <Projects />
      <Teaching />
      <LearningMaterials />
      <Publications />
      <Contact />
      <SiteFooter />
    </main>
  );
};

export default Index;
