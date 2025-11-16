import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Shield } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description: "Experiencia en frontend y backend con tecnologías modernas",
  },
  {
    icon: Sparkles,
    title: "Inteligencia Artificial",
    description: "Implementación de soluciones con ML y Deep Learning",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Interés y conocimiento en protección de sistemas",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre mí
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy estudiante de <strong>Ingeniería de Sistemas</strong> con doble programa en{" "}
              <strong>Ingeniería Multimedia</strong>. Me apasionan la inteligencia
              artificial, el desarrollo de software, la ciberseguridad y la creación de
              soluciones innovadoras que unan ingeniería y creatividad digital.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Me interesa diseñar productos eficientes, funcionales y centrados en la
              experiencia de usuario.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-card-hover transition-all duration-300 animate-fade-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
