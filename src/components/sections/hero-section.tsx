'use client';

import type { HeroData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const HeroSection = ({ data }: { data: HeroData }) => {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instrutora_principal');

  return (
    <section className="bg-background relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="absolute top-0 left-0 right-0 h-10 bg-accent text-accent-foreground flex items-center justify-center text-center font-bold text-xs md:text-sm z-10 px-4">
             De R$297 por apenas 12x de R$14,90
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background mt-10"></div>
        <div className="container relative pt-10 flex flex-col items-center">
            <div className="text-center space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-4xl font-headline tracking-tight text-foreground font-extrabold leading-tight max-w-xl">
                    <span className="block">DOMINE OS MELHORES</span>
                    <span className="block">ALONGAMENTOS DE UNHAS</span>
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground max-w-xs md:max-w-md mx-auto">
                    ... com as técnicas de alongamento de unhas mais desejadas do momento.
                </p>
            </div>
             <div className="mt-6 md:mt-8 flex justify-center items-center w-full">
                {instructorImage && (
                    <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[4/5]">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                        <Image
                            src={instructorImage.imageUrl}
                            alt={instructorImage.description}
                            fill
                            className="object-cover rounded-2xl shadow-2xl border-4 border-card"
                            data-ai-hint={instructorImage.imageHint}
                            priority
                        />
                    </div>
                )}
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs md:max-w-md">
                 <a href="#pricing" className="w-full">
                    <Button size="lg" className="w-full text-base md:text-lg h-12 font-bold animate-pulse-bg">
                       QUERO GARANTIR MEU ACESSO AGORA!
                    </Button>
                 </a>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
