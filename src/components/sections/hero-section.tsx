'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import CountdownTimer from "@/components/ui/countdown-timer";

const HeroSection = () => {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instrutora_principal');

  return (
    <section className="bg-background relative overflow-hidden">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center font-bold text-sm md:text-base">
        <span>Oferta válida somente hoje! <CountdownTimer /></span>
      </div>
      <div className="container relative flex flex-col items-center pb-12 pt-6 space-y-6">
          <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/9]">
            {instructorImage && (
                <>
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                    <Image
                        src={instructorImage.imageUrl}
                        alt={instructorImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={instructorImage.imageHint}
                        priority
                        sizes="(max-width: 768px) 90vw, 80vw"
                    />
                </>
            )}
          </div>
          
          <a href="#pricing" className="w-full max-w-xs md:max-w-sm">
              <Button size="lg" className="w-full text-base md:text-lg h-12 font-bold animate-pulse-bg">
                 ver ofertas disponíveis hoje!
              </Button>
          </a>
      </div>
    </section>
  );
};

export default HeroSection;
