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
      <div className="container relative flex flex-col items-center py-6">
        <div className="text-center space-y-2 mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Não perca tempo!</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">descubra como uma simples dona de casa de 48 anos transformou R$14,90 em um salário de 4.673,90!</p>
        </div>
        
        {instructorImage && (
            <div className="relative w-full max-w-md mx-auto">
                <Image
                    src={instructorImage.imageUrl}
                    alt={instructorImage.description}
                    width={600}
                    height={800}
                    className="relative object-contain w-full h-auto"
                    data-ai-hint={instructorImage.imageHint}
                    priority
                />
            </div>
        )}
          
        <a href="#pacotes" className="w-full max-w-xs md:max-w-sm mt-4">
            <Button size="lg" className="w-full text-base md:text-lg h-12 font-bold animate-pulse-bg">
                ver ofertas disponíveis hoje!
            </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
