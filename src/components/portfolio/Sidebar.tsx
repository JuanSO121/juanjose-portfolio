import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Inicio" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Formación" },
  { id: "contact", label: "Contacto" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-primary-foreground"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-80 bg-card border-r border-border z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-8 flex flex-col h-full">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
              JJ
            </div>
            <h2 className="text-2xl font-bold text-center mb-1">
              Juan José Sánchez
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              Systems Engineer · Multimedia
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-auto space-y-3 text-sm">
            <a
              href="mailto:juanjosesanchezocampo2@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail size={16} />
              <span className="text-xs">juanjosesanchezocampo2@gmail.com</span>
            </a>
            <a
              href="https://wa.me/573164475039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone size={16} />
              <span>+57 316 447 5039</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Cali, Colombia</span>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/juan-jose-sánchez-a36036287"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
