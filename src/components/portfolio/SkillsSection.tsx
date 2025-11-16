import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Users, Palette, Box } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    category: "Lenguajes",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Box,
    category: "Frameworks",
    skills: ["TensorFlow", "Flask", "FastAPI", "Spring Boot", "Angular", "Ionic", "Flutter"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    category: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wrench,
    category: "Herramientas",
    skills: ["Docker", "Git", "GitHub", "VSCode"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    category: "Metodologías",
    skills: ["Scrum", "Agile"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Palette,
    category: "Diseño/UX",
    skills: ["Figma", "Illustrator", "Blender"],
    color: "from-pink-500 to-rose-500",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Competencias Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stack tecnológico completo para desarrollo full-stack e IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-500 animate-fade-up border-border group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.category}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
