import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Lenguajes",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "Frameworks",
    skills: ["TensorFlow", "Flask", "FastAPI", "Spring Boot", "Angular", "Ionic", "Flutter"],
  },
  {
    category: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Herramientas",
    skills: ["Docker", "Git", "GitHub", "VSCode"],
  },
  {
    category: "Metodologías",
    skills: ["Scrum", "Agile"],
  },
  {
    category: "Diseño/UX",
    skills: ["Figma", "Illustrator", "Blender"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Competencias Técnicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-card-hover transition-all duration-300 animate-fade-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
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
