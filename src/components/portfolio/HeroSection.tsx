import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(13, 27, 42, 0.95), rgba(13, 27, 42, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Juan José Sánchez Ocampo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Ingeniero de Sistemas · Ingeniería Multimedia · IA & Software Developer
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Combino ingeniería, inteligencia artificial y creatividad digital para
            construir soluciones reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-base"
              onClick={() => scrollToSection("projects")}
            >
              Ver Proyectos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base"
              onClick={() => scrollToSection("contact")}
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
