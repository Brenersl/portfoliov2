import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link?: string;
  useCarousel?: boolean;
}

const projects: Project[] = [
  {
    title: "Site para Escritório de Advocacia",
    description: "Design e desenvolvimento de site institucional para escritório de advocacia, focado em credibilidade e conversão de clientes.",
    images: [
      "https://i.ibb.co/Q3ZQz0Kg/Mac-Book-13-2.png",
    ],
    tags: ["UX/UI Design", "Desenvolvimento", "Institucional", "Figma"],
    link: "https://joelmaalvesadvocacia.com.br/",
    useCarousel: false,
  },
  {
    title: "Plataforma de Streaming — Navegação de Episódios (UX/UI)",
    description: "Case de UX/UI focado na criação de um fluxo completo para visualização de temporadas, episódios e interação do usuário em uma plataforma de streaming, com controle de spoilers e sistema de avaliação.",
    images: [
      "https://i.ibb.co/JjKrR32H/Screenshot-23.png",
    ],
    tags: ["UX/UI Design", "Streaming Platform", "User Flow", "Figma"],
    link: "https://www.figma.com/design/Bgy6aPaO3E1dONtejLQ4ag/Sem-t%C3%ADtulo?node-id=0-1&t=gyaZbldb5vWWX4kT-1",
    useCarousel: false,
  },
  {
    title: "Projeto estudo Spotify",
    description: 'Projeto realizado durante o curso na Udemy denominado "Figma Design de interfaces do zero ao profissional 2025".',
    images: [
      "https://i.ibb.co/MxwB2X3J/Screenshot-17.png",
    ],
    tags: ["UI Design", "Figma", "Estudo"],
    useCarousel: false,
  },
  {
    title: "Construção de site para M&C Books",
    description: "Projeto de design e desenvolvimento de site para melhorar o atendimento da empresa M&C Books, realizado durante o curso na Escola DNC.",
    images: [
      "https://i.ibb.co/chpftfnM/Screenshot-16.png",
    ],
    tags: ["Design", "Desenvolvimento", "E-commerce"],
    useCarousel: false,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all">
      {project.useCarousel && project.images.length > 1 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video bg-muted">
                  <img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      ) : (
        <div className="aspect-video bg-muted">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-foreground/70 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver projeto
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, focados em UX/UI Design e desenvolvimento front-end.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;