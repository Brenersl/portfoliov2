import { Code2, Palette, Figma, Layout, Users, Lightbulb } from "lucide-react";

const skills = {
  technical: [
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "WordPress + Elementor", icon: Layout },
  ],
  design: [
    { name: "UX/UI Design", icon: Palette },
    { name: "Figma", icon: Figma },
    { name: "Prototipação", icon: Layout },
    { name: "Design Responsivo", icon: Layout },
  ],
  soft: [
    { name: "Pesquisa de usuário", icon: Users },
    { name: "Testes de usabilidade", icon: Users },
    { name: "Metodologias ágeis", icon: Lightbulb },
    { name: "Solução de problemas", icon: Lightbulb },
  ],
};

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Combinando conhecimentos técnicos de desenvolvimento front-end com princípios de design UX/UI 
            para criar experiências digitais completas e de alta qualidade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in-up">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-6">Desenvolvimento</h3>
            <div className="space-y-3">
              {skills.technical.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-6">Design</h3>
            <div className="space-y-3">
              {skills.design.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-6">Competências</h3>
            <div className="space-y-3">
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
