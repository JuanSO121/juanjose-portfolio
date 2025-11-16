import { Heart } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Juan José Sánchez Ocampo. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Hecho con <Heart size={14} className="text-accent fill-accent" /> desde Cali, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};
