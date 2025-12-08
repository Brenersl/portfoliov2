import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Brener Silva Lima
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experiencias")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Experiências
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="gradient-primary text-white shadow-glow"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
