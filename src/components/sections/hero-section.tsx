'use client';

import type { HeroData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = ({ data }: { data: HeroData }) => {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instrutora_principal');

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section className="bg-background relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="absolute top-0 left-0 right-0 h-10 bg-accent text-accent-foreground flex items-center justify-center text-center font-bold text-sm md:text-base z-10">
            Oferta Válida Somente Hoje!
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background mt-10"></div>
        <div className="container relative grid md:grid-cols-2 gap-12 items-center pt-10">
            <div className="text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline tracking-tight text-foreground">
                    {data.headline}
                </h1>
                <p className="text-lg text-muted-foreground">
                    {data.sub_headline}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 bg-card/80 p-4 rounded-lg border">
                    <div className="text-left">
                        <p className="text-sm line-through text-muted-foreground">De {formatCurrency(data.preco_original)}</p>
                        <p className="text-4xl font-bold text-primary">Por apenas {formatCurrency(data.preco_atual)}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                     <a href={data.url_cta} className="w-full md:w-auto">
                        <Button size="lg" className="w-full text-lg h-14 font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                           <ShoppingCart className="mr-2 h-6 w-6" /> GARANTIR MINHA VAGA AGORA
                        </Button>
                     </a>

                     <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground text-center md:text-left">Vagas com desconto se esgotando!</p>
                        <Progress value={data.percentual_vagas} className="h-3" />
                        <p className="text-xs text-center md:text-left text-muted-foreground">
                            {data.percentual_vagas}% das vagas preenchidas
                        </p>
                    </div>
                </div>
            </div>
             <div className="hidden md:flex justify-center items-center">
                {instructorImage && (
                    <div className="relative w-[350px] h-[450px] lg:w-[400px] lg:h-[500px]">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
                        <Image
                            src={instructorImage.imageUrl}
                            alt={instructorImage.description}
                            fill
                            className="object-cover rounded-t-[50%] rounded-b-lg shadow-2xl border-4 border-card"
                            data-ai-hint={instructorImage.imageHint}
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
