import { Mail, Linkedin, Github } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juan José Sánchez Ocampo. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:juanjosesanchezocampo2@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-jose-sánchez-a36036287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Desarrollado con React, TypeScript y TailwindCSS
        </p>
      </div>
    </footer>
  );
};
