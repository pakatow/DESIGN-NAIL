import type { DoresData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const PainsSection = ({ data }: { data: DoresData }) => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">{data.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.problemas.map((problema, index) => (
            <Card 
              key={index} 
              className="bg-card border-transparent shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 flex items-start gap-4 text-left">
                <XCircle className="w-8 h-8 text-destructive/80 shrink-0 mt-1" />
                <p className="text-base font-medium text-muted-foreground">{problema}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PainsSection;
