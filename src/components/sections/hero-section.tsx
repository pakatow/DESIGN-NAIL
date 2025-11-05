'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import CountdownTimer from "@/components/ui/countdown-timer";

const HeroSection = () => {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instrutora_principal');

  return (
    <section className="bg-background relative overflow-hidden pt-12 md:pt-20">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center font-bold text-sm md:text-base">
        <span>Oferta válida somente hoje! <CountdownTimer /></span>
      </div>
      <div className="container relative flex flex-col items-center py-12 md:py-20">
          <div className="text-center space-y-6 max-w-2xl">
              <div>
                  <h1 className="text-3xl md:text-5xl font-headline tracking-tight text-foreground font-extrabold leading-tight">
                      Treinamento Nail design
                  </h1>
                  <p className="text-2xl md:text-3xl font-headline text-primary font-bold">
                      Do Zero ao Avançado!
                  </p>
              </div>
              
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] order-last md:order-first">
                {instructorImage && (
                    <>
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                        <Image
                            src={instructorImage.imageUrl}
                            alt={instructorImage.description}
                            fill
                            className="object-contain rounded-2xl"
                            data-ai-hint={instructorImage.imageHint}
                            priority
                        />
                    </>
                )}
              </div>

              <div className="flex flex-col items-center md:items-center gap-4 pt-6">
                  <a href="#pricing" className="w-full max-w-xs md:max-w-sm">
                      <Button size="lg" className="w-full text-base md:text-lg h-12 font-bold animate-pulse-bg">
                         QUERO GARANTIR O MEU CURSO AGORA
                      </Button>
                  </a>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
