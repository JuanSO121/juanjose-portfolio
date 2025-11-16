import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-background rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Juan Jose Sanchez Ocampo
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Software Developer & Product Designer
        </p>
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
          Creating innovative apps and websites that solve real problems. 
          Specializing in full-stack development and user-centered design.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToProjects}
            className="text-lg px-8"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Get In Touch
          </Button>
        </div>
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
