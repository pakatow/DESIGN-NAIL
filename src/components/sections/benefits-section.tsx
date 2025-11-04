import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const BenefitsSection = ({ benefits }: { benefits: string[] }) => {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">O que você vai receber?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um curso completo pensado para sua evolução profissional, do zero ao avançado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border border-primary/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-6 flex items-start gap-4 text-left">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                </div>
                <p className="text-base font-medium text-card-foreground pt-2">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
