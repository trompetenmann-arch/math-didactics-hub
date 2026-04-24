import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Teaching } from "@/components/sections/Teaching";
import { Publications } from "@/components/sections/Publications";
import { Supervision } from "@/components/sections/Supervision";
import { News } from "@/components/sections/News";
import { Contact, SiteFooter } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Teaching />
      <Publications />
      <Supervision />
      <News />
      <Contact />
      <SiteFooter />
    </main>
  );
};

export default Index;
