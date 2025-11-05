import type { Pacote } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = ({ pacotes }: { pacotes: Pacote[] }) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section id="pricing" className="bg-secondary py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-headline text-foreground font-bold">Escolha o plano ideal para você</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Invista na sua carreira com o pacote que melhor se adapta às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pacotes.map((pacote) => (
            <Card key={pacote.nome} className={cn(
              "flex flex-col shadow-lg transition-all duration-300",
              pacote.isPopular ? "border-primary border-2 md:transform md:scale-105" : "border"
            )}>
              {pacote.isPopular && (
                <div className="bg-primary text-primary-foreground text-sm font-bold py-1 px-4 rounded-t-lg -mt-px flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" /> MAIS POPULAR
                </div>
              )}
              <CardHeader className="text-center px-4 pt-6 pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold">{pacote.nome}</CardTitle>
                <CardDescription className="px-4">
                  {pacote.preco_original && (
                    <span className="line-through text-muted-foreground text-sm">De {formatCurrency(pacote.preco_original)}</span>
                  )}
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">{formatCurrency(pacote.preco)}</span>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground">/pagamento único</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 px-4 md:px-6">
                <ul className="space-y-3 text-sm md:text-base">
                  {pacote.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-4 pb-6">
                <a href={pacote.url_cta} className="w-full">
                  <Button size="lg" className={cn(
                    "w-full text-base md:text-lg h-12 font-bold",
                    pacote.isPopular ? "bg-primary hover:bg-primary/90" : "bg-green-500 hover:bg-green-600 text-white"
                  )}>
                    QUERO ESSE
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
