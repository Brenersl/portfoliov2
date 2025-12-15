import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, ChevronRight } from "lucide-react";

interface ExperienceImage {
  url: string;
  title: string;
  description: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string[];
  skills: string[];
  images: ExperienceImage[];
  prototypeLink?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "UI Designer",
    company: "Sagitta Digital",
    period: "nov/2024 - Atualmente",
    current: true,
    description: [
      "Criação de interfaces digitais modernas e funcionais no Figma.",
      "Desenvolvimento de wireframes e protótipos interativos.",
      "Design de componentes e sistemas visuais consistentes.",
      "Colaboração direta com desenvolvedores para implementação.",
      "Foco em usabilidade e experiência do usuário.",
    ],
    skills: ["UI Design", "Figma", "Wordpress+Elementor", "Protótipos", "Design System"],
    images: [
      {
        url: "https://i.ibb.co/zHLYt4Mp/Mac-Book-13.png",
        title: "Lista de Artigos",
        description: "Estrutura simples e visual para explorar conteúdos e boas práticas.",
      },
      {
        url: "https://i.ibb.co/4nNP3QXW/Group-58877.png",
        title: "Página de Gestão de Despesas",
        description: "Layout intuitivo para acompanhar pagamentos e adicionar novas despesas.",
      },
      {
        url: "https://i.ibb.co/NgRj7zRB/Celestial-Blue.png",
        title: "Design System - Paleta de Cores",
        description: "Escalas de cores definidas para manter consistência visual no projeto.",
      },
      {
        url: "https://i.ibb.co/C3JV9KD8/FNCD-Capital-cover-Copia.png",
        title: "Hero Section - Página Inicial",
        description: "Layout clean destacando mensagem principal e chamada para ação.",
      },
      {
        url: "https://i.ibb.co/DHhHBb1q/i-Phone-15-Pro-Copia.png",
        title: "Dashboard de Cursos",
        description: "Layout intuitivo com destaque para cursos do usuário e conteúdos recomendados.",
      },
    ],
  },
  {
    role: "UX/UI Designer Freelancer",
    company: "Colina Tech",
    period: "abr/2025 - mai/2025",
    description: [
      "Desenvolvimento de soluções em UX Design para plataforma web.",
      "Criação de fluxos, wireframes e protótipos navegáveis no Figma.",
      "Alinhamento com stakeholders e colaboração com desenvolvedores.",
      "Foco na experiência do usuário e usabilidade.",
    ],
    skills: ["UX Design", "UI Design", "Figma", "Wireframes", "Protótipos"],
    images: [
      {
        url: "https://i.ibb.co/GQ7tdQNr/Mac-Book-13-2.png",
        title: "Plataforma Colina Tech",
        description: "Design de plataforma web para gestantes",
      },
      {
        url: "https://i.ibb.co/DHKwLTXp/Silver.png",
        title: "Blog de Entrevistas",
        description: "Layout do blog interativo",
      },
      {
        url: "https://i.ibb.co/JwMZJr0g/Mac-Book-01-1.png",
        title: "Parte de doações",
        description: "Interface para de doações",
      },
    ],
  },
  {
    role: "UX/UI Designer Voluntário",
    company: "ONG - Projeto Criança Feliz",
    period: "ago/2025",
    description: [
      "Desenvolvimento de layout completo para o site institucional da ONG.",
      "Aplicação de conhecimentos do Google UX Design Certificate.",
      "Criação de protótipos navegáveis e wireframes no Figma.",
      "Foco em acessibilidade e experiência do usuário para causas sociais.",
      "Colaboração com equipe multidisciplinar da organização.",
    ],
    skills: ["UX Design", "UI Design", "Figma", "Google UX Certificate", "Design Social", "Acessibilidade"],
    images: [
      {
        url: "https://i.ibb.co/G3VJ83X2/Screenshot-18.png",
        title: "Página Inicial",
        description: "Design institucional da ONG",
      },
      {
        url: "https://i.ibb.co/35ZNpDZ9/Screenshot-19.png",
        title: "Seção Projetos",
        description: "Apresentação dos projetos sociais",
      },
      {
        url: "https://i.ibb.co/W4HXyPWp/Screenshot-20.png",
        title: "Página de Doações",
        description: "Interface otimizada para conversão de doações",
      },
    ],
    prototypeLink: "https://www.figma.com/proto/7NJpaij4QNvuo85kLOrkEi/ONG---Projeto-Crian%C3%A7a-Feliz?node-id=1-178&p=f&t=oNoD8MVBDxZXdEnS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A178",
  },
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
          <p className="text-lg text-primary font-medium">{experience.company}</p>
          <p className="text-sm text-muted-foreground mt-1">{experience.period}</p>
          {experience.current && (
            <Badge className="mt-2 gradient-primary text-white">ATUAL</Badge>
          )}
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {experience.description.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-foreground/80">
            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {experience.skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
            Ver trabalhos realizados
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
              <p className="text-primary font-medium">{experience.role}</p>
            </div>

            <div className="space-y-6">
              {experience.images.map((image, index) => (
                <div key={index} className="space-y-3">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full rounded-xl shadow-medium"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{image.title}</h4>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {experience.prototypeLink && (
              <a
                href={experience.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow transition-all"
              >
                Ver Protótipo no Figma
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experiencias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiências Profissionais</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
