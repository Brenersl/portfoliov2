const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Prazer, eu sou o Brener!
            </h3>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Sabe aquela pessoa curiosa que adora entender como as coisas funcionam? Então, esse sou eu! 
                Sempre fui fascinado por tecnologia e design, e hoje tenho a sorte de trabalhar com o que amo.
              </p>
              <p>
                Estou cursando Engenharia de Software na Unileste e me especializando em Desenvolvimento 
                Front-End pela Escola DNC. Mas o que realmente me anima é poder unir código com design.
              </p>
              <p>
                Também me formei em UX Design pelo Google Career Certificates, e desde então trabalho com 
                Figma quase todos os dias. Adoro toda essa jornada de entender o problema do usuário, 
                pesquisar, prototipar e ver a ideia ganhar vida na tela.
              </p>
              <p className="font-medium text-foreground">
                Pra mim, não basta algo funcionar - precisa fazer sentido, ser bonito e entregar valor real 
                pra quem usa. É isso que me move: transformar ideias em experiências digitais que as pessoas 
                realmente gostem de usar no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
