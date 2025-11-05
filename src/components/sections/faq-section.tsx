import type { FAQ } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FaqSection = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <section className="bg-secondary py-8 md:py-12">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-headline text-foreground font-bold">Perguntas Frequentes</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Ainda tem dúvidas? Encontre as respostas aqui.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-card shadow-sm border">
                <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-left font-bold text-base md:text-lg text-foreground">
                    {faq.pergunta}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                    <p className="text-sm md:text-base text-muted-foreground">
                    {faq.resposta}
                    </p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 md:mt-12 flex flex-col items-center justify-center text-center">
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md">
                Você está a um passo de transformar sua paixão em uma carreira lucrativa. Não perca esta oportunidade!
            </p>
            <a href="#pacotes" className="w-full max-w-xs md:max-w-md">
                <Button size="lg" className="w-full text-base md:text-lg h-12 font-bold animate-pulse-bg">
                    QUERO GARANTIR MEU ACESSO AGORA!
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
