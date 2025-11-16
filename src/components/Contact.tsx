import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:juanjose@example.com",
    color: "hover:text-destructive",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-accent",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-card-hover border-border bg-gradient-card animate-fade-up">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className="group"
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon className={`transition-colors ${social.color}`} size={20} />
                    <span>{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <Button 
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <a href="mailto:juanjose@example.com">
                Send Me an Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
