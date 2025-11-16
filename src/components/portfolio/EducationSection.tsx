import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad de San Buenaventura Cali",
    period: "En curso",
    status: "active",
  },
  {
    degree: "Ingeniería Multimedia",
    institution: "Universidad de San Buenaventura Cali",
    period: "En curso",
    status: "active",
  },
];

const achievements = [
  {
    title: "Beca de Excelencia Académica",
    organization: "USB Cali",
    year: "2024-2",
  },
];

const certifications = [
  { name: "Fortinet Network Security", issuer: "Fortinet" },
  { name: "Cisco Networking Essentials", issuer: "Cisco" },
  { name: "Power BI Data Analysis", issuer: "Microsoft" },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Formación Académica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Educación continua en ingeniería de sistemas y multimedia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
              <GraduationCap className="text-accent" />
              Educación
            </h3>
            
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold text-foreground">
                    {item.degree}
                  </h4>
                  {item.status === "active" && (
                    <Badge className="bg-accent text-white">En curso</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-2">{item.institution}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
              </Card>
            ))}

            {/* Achievements */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <Award className="text-accent" size={20} />
                Reconocimientos
              </h4>
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 bg-accent/5 border-accent/20">
                  <h5 className="font-semibold text-foreground">
                    {achievement.title}
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    {achievement.organization} · {achievement.year}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
              <Award className="text-accent" />
              Certificaciones
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-lg transition-all duration-300 hover:border-accent group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="p-6 mt-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">
                Aprendizaje Continuo
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Constantemente actualizándome en nuevas tecnologías, frameworks
                y mejores prácticas de desarrollo de software e inteligencia artificial.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
