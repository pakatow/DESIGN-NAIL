import type { FAQ } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem value={faq.id} key={faq.id} className="bg-card px-6 rounded-lg shadow-sm border">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline text-foreground">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
