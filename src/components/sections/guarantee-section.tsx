import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
    
const GuaranteeSection = () => {
    // There is no 'selo_7_dias' in placeholder-images.json, let's create a placeholder.
    const guaranteeSeal = {
      id: "selo_7_dias",
      imageUrl: "https://picsum.photos/seed/guarantee/250/250",
      description: "Selo de Garantia de 7 dias",
      imageHint: "guarantee seal"
    };
    
    return (
        <section className="bg-background">
            <div className="container">
                <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center border border-primary/20">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-headline text-foreground font-bold">Sua Satisfação ou seu Dinheiro de Volta</h2>
                        <p className="text-lg text-muted-foreground font-body">
                            Temos tanta confiança na qualidade do nosso curso que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não estiver 100% satisfeita, basta nos enviar um único e-mail e devolveremos todo o seu investimento, sem perguntas.
                        </p>
                        <p className="text-lg text-muted-foreground font-body">
                            O risco é todo nosso. Você não tem nada a perder!
                        </p>
                    </div>
                    <div className="flex justify-center">
                        {guaranteeSeal && (
                            <Image 
                                src={guaranteeSeal.imageUrl}
                                alt={guaranteeSeal.description}
                                width={250}
                                height={250}
                                className="transform transition-transform duration-500 hover:rotate-12 hover:scale-110"
                                data-ai-hint={guaranteeSeal.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuaranteeSection;
