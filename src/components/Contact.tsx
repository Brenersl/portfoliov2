import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/70">
              Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre design e desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:brener.silva1009@gmail.com"
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center group"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-foreground/70">brener.silva1009@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/brener-silva-2a9572165/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center group"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-foreground/70">Brener Silva Lima</p>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5531992609659"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center group"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-foreground/70">+55 31 99260-9659</p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5531992609659"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gradient-primary text-white shadow-glow hover:shadow-glow hover:scale-105 transition-all">
                Vamos conversar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
