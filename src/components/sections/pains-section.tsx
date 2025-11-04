import type { DoresData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const PainsSection = ({ data }: { data: DoresData }) => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">{data.headline}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.introducao}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.problemas.map((problema, index) => (
            <Card 
              key={index} 
              className="bg-card border shadow-sm"
            >
              <CardContent className="p-6 flex items-start gap-4 text-left">
                <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <p className="text-base font-medium text-card-foreground">{problema}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mt-12 font-semibold">
          {data.ponte}
        </p>
      </div>
    </section>
  );
};

export default PainsSection;
