import type { Modulo } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen } from "lucide-react";

const ModulesSection = ({ modules }: { modules: Modulo[] }) => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">Conteúdo do Curso</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossos módulos e aprenda tudo que você precisa para se tornar uma Nail Designer de sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((modulo) => {
            const image = PlaceHolderImages.find(p => p.id === modulo.imageId);
            return (
              <Card key={modulo.nome} className="overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
                {image && (
                  <div className="relative h-48">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {modulo.nome}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
