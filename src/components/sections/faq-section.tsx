import type { FAQ } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FaqSection = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <section className="bg-secondary">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground font-bold">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">
            Ainda tem dúvidas? Encontre as respostas aqui.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-card shadow-sm border">
                <CardHeader>
                    <CardTitle className="text-left font-bold text-lg text-foreground">
                    {faq.pergunta}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base text-muted-foreground">
                    {faq.resposta}
                    </p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
