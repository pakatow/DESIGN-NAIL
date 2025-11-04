'use client';
import type { Depoimento } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const TestimonialsSection = ({ depoimentos }: { depoimentos: Depoimento[] }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground whitespace-nowrap">Quem fez, recomenda!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossas alunas estão dizendo sobre o curso.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {depoimentos.map((depoimento) => {
              const image = PlaceHolderImages.find(p => p.id === depoimento.imageId);
              return (
                <CarouselItem key={depoimento.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden h-full flex flex-col shadow-sm hover:shadow-primary/20 transition-all duration-300 border-transparent group">
                      {image && (
                         <div className="relative aspect-[4/3] w-full">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 100vw"
                            />
                        </div>
                      )}
                      <CardContent className="p-4 bg-card flex-grow">
                          <p className="text-muted-foreground text-sm font-medium">{depoimento.nome}</p>
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
        <div className="py-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-all ${current -1 === i ? 'w-4 bg-primary' : 'bg-primary/20'}`}
                    aria-label={`Ir para o slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
