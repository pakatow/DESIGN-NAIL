'use client';

import type { HeroData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = ({ data }: { data: HeroData }) => {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instrutora_principal');

  return (
    <section className="bg-background relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="absolute top-0 left-0 right-0 h-10 bg-accent text-accent-foreground flex items-center justify-center text-center font-bold text-sm md:text-base z-10">
            Oferta Válida Somente Hoje!
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background mt-10"></div>
        <div className="container relative pt-10 flex flex-col items-center">
            <div className="text-center space-y-6">
                <h1 className="text-3xl md:text-4xl font-headline tracking-tight text-foreground font-extrabold leading-tight">
                    DOMINE OS MELHORES ALONGAMENTOS DE UNHAS
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                    Descubra como uma simples dona de casa de 48 anos transformou R$14,90 em um salário de R$4.678,98
                </p>
            </div>
             <div className="mt-8 flex justify-center items-center w-full">
                {instructorImage && (
                    <div className="relative w-full max-w-sm aspect-[4/5]">
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
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
                 <a href="#pricing" className="w-full">
                    <Button size="lg" className="w-full text-lg h-14 font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                       <ArrowDown className="mr-2 h-6 w-6" /> VER PACOTES
                    </Button>
                 </a>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
