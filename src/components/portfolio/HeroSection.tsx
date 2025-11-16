import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-white/90 text-sm">
            <Sparkles size={16} className="text-accent" />
            <span>Disponible para nuevos proyectos</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ingeniero de Sistemas
            <span className="block text-accent">+ Multimedia</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Combino ingeniería, inteligencia artificial y creatividad digital para
            construir <span className="text-accent font-semibold">soluciones reales</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Proyectos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-base px-8"
              onClick={() => scrollToSection("contact")}
            >
              Contactar
            </Button>
          </div>

          {/* About inline */}
          <div className="mt-16 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-white/90 leading-relaxed">
              Soy estudiante de <strong>Ingeniería de Sistemas</strong> con doble programa en{" "}
              <strong>Ingeniería Multimedia</strong>. Me apasionan la inteligencia
              artificial, el desarrollo de software, la ciberseguridad y la creación de
              soluciones innovadoras que unan ingeniería y creatividad digital.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
