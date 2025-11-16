import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and approaches to solve complex problems.",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Designing with the end user in mind to create intuitive and delightful experiences.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer with a focus on creating impactful digital products. 
            With experience across the full stack, I bring ideas from concept to deployment, 
            ensuring quality and user satisfaction at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up border-border bg-gradient-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
