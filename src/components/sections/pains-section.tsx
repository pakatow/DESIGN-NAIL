'use client';
import type { DoresData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const PainsSection = ({ data }: { data: DoresData }) => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-headline text-foreground font-bold px-4">{data.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {data.problemas.map((problema, index) => (
            <Card 
              key={index} 
              className="bg-card border-transparent shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-4 md:p-6 flex items-start gap-4 text-left">
                <XCircle className="w-10 h-10 md:w-8 md:h-8 text-destructive/80 shrink-0 mt-1" />
                <p className="text-sm md:text-base font-medium text-muted-foreground">{problema}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PainsSection;
