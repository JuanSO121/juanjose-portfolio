import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import plantDiagnosis from "@/assets/project-plant-diagnosis.jpg";
import productivity from "@/assets/project-productivity.jpg";
import request from "@/assets/project-request.jpg";

const projects = [
  {
    title: "Diagnóstico de plantas con Deep Learning y LLM",
    description:
      "Aplicación móvil con backend en FastAPI que utiliza Deep Learning para clasificar enfermedades en plantas. Integra modelos de IA para proporcionar diagnósticos precisos y recomendaciones de tratamiento.",
    image: plantDiagnosis,
    tags: ["FastAPI", "TensorFlow", "Flutter", "PostgreSQL", "Deep Learning"],
  },
  {
    title: "Productivity+ (Plataforma de productividad con IA)",
    description:
      "Plataforma integral de automatización académica con arquitectura técnica robusta y diseño UI/UX centrado en el usuario. Incluye gestión de tareas inteligente y recomendaciones personalizadas.",
    image: productivity,
    tags: ["IA Generativa", "Flask", "UI/UX Design", "Python"],
  },
  {
    title: "Request – Análisis automático de requerimientos con IA",
    description:
      "Sistema de procesamiento inteligente de requerimientos utilizando Gemini API. Automatiza la extracción, análisis y documentación de requerimientos de software con alta precisión.",
    image: request,
    tags: ["Flask", "Python", "Gemini API", "IA Generativa"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones innovadoras combinando IA, desarrollo de software y creatividad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-card-hover transition-all duration-300 animate-fade-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
