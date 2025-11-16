import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectPlant from "@/assets/project-plant-diagnosis.jpg";
import projectProductivity from "@/assets/project-productivity.jpg";
import projectRequest from "@/assets/project-request.jpg";

const projects = [
  {
    title: "Diagnóstico de Plantas con Deep Learning",
    description:
      "Aplicación móvil con backend en FastAPI para clasificación de enfermedades en plantas usando IA. Sistema completo de diagnóstico automatizado.",
    image: projectPlant,
    tags: ["FastAPI", "TensorFlow", "Flutter", "PostgreSQL", "Deep Learning"],
    featured: true,
  },
  {
    title: "Productivity+ Platform",
    description:
      "Plataforma de productividad académica con automatización mediante IA generativa. Incluye arquitectura técnica completa y diseño UI/UX moderno.",
    image: projectProductivity,
    tags: ["IA Generativa", "Flask", "UI/UX Design", "Python"],
    featured: true,
  },
  {
    title: "Request - Análisis de Requerimientos con IA",
    description:
      "Sistema de procesamiento inteligente de requerimientos usando Gemini API. Automatiza el análisis y documentación de requisitos de software.",
    image: projectRequest,
    tags: ["Flask", "Python", "Gemini API", "IA Generativa"],
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Soluciones innovadoras que combinan IA, desarrollo full-stack y diseño centrado en el usuario
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project - Takes 2 columns on large screens */}
          <Card
            className="lg:col-span-2 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-fade-up border-border"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="relative overflow-hidden h-64 lg:h-full">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white">Destacado</Badge>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                  {projects[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
                    <ExternalLink size={18} />
                    Ver Demo
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium">
                    <Github size={18} />
                    Código
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Regular Projects */}
          {projects.slice(1).map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-fade-up border-border"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-white">Destacado</Badge>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium">
                    <ExternalLink size={16} />
                    Ver Demo
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
                    <Github size={16} />
                    Código
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
