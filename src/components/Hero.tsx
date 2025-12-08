import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] gradient-primary opacity-10 rounded-full blur-3xl animate-mesh"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">
                Disponível para novos projetos
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Brener Silva Lima
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              UX/UI Design & Desenvolvedor Front-End
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Criando experiências digitais impactantes e interfaces intuitivas que conectam pessoas e tecnologia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              className="gradient-primary text-white shadow-glow hover:shadow-glow hover:scale-105 transition-all"
            >
              Entre em contato
            </Button>
            <Button
              onClick={() => scrollToSection("projetos")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver projetos
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/brener-silva-2a9572165/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all hover:shadow-medium"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
