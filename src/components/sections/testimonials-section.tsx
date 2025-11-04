'use client';
import type { Depoimento } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsSection = ({ depoimentos }: { depoimentos: Depoimento[] }) => {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">Quem fez, recomenda!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossas alunas estão dizendo sobre o curso.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {depoimentos.map((depoimento) => {
              const image = PlaceHolderImages.find(p => p.id === depoimento.imageId);
              return (
                <CarouselItem key={depoimento.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex text-yellow-400 mb-4">
                              <Star className="fill-current w-5 h-5" />
                              <Star className="fill-current w-5 h-5" />
                              <Star className="fill-current w-5 h-5" />
                              <Star className="fill-current w-5 h-5" />
                              <Star className="fill-current w-5 h-5" />
                          </div>
                          <blockquote className="text-base text-muted-foreground italic border-l-2 border-primary pl-4">
                            {depoimento.texto}
                          </blockquote>
                        </div>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={50}
                              height={50}
                              className="rounded-full"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <p className="font-bold text-foreground">{depoimento.nome}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
