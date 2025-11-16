import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Ingeniería de Sistemas",
    institution: "Universidad de San Buenaventura - Cali",
    status: "En curso",
  },
  {
    icon: GraduationCap,
    title: "Ingeniería Multimedia",
    institution: "Universidad de San Buenaventura - Cali",
    status: "En curso (Doble programa)",
  },
  {
    icon: Award,
    title: "Beca de Excelencia Académica",
    institution: "USB Cali",
    status: "2024-2",
  },
];

const certifications = [
  "Fortinet Network Security",
  "Cisco Networking Essentials",
  "Power BI Data Analytics",
  "Python for Data Science",
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Formación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {education.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-card-hover transition-all duration-300 animate-fade-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-accent">{item.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-up border-border bg-card">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-accent/10 text-accent">
                <BookOpen size={20} />
              </div>
              <CardTitle className="text-xl">Certificaciones</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
