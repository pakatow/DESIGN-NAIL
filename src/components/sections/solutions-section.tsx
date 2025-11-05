import { CheckCircle } from 'lucide-react';

const SolutionsSection = () => {
    const modules = [
        {
            title: "Anatomia e Saúde das Unhas",
            description: "A base de tudo. Entenda a estrutura das unhas para garantir trabalhos seguros, duradouros e profissionais."
        },
        {
            title: "Técnica de Fibra de Vidro",
            description: "Domine a técnica mais pedida nos salões, criando unhas com aparência natural e alta resistência."
        },
        {
            title: "Alongamento em Gel na Tip",
            description: "Aprenda a fazer alongamentos perfeitos, rápidos e versáteis que encantam as clientes."
        },
        {
            title: "Formatos e Lixamento Técnico",
            description: "Crie os formatos que estão em alta (Square, Almond, Stiletto, Ballerina) com um acabamento impecável."
        }
    ];

    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="container text-center">
                <div className="mb-8 md:mb-10 space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        A transformação para sua independência financeira começa aqui
                    </h2>
                </div>

                <div className="bg-card p-6 md:p-10 rounded-2xl shadow-lg border">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Um curso completo, do zero ao profissional</h3>
                    <p className="text-muted-foreground mb-8 text-base">Veja o que você vai dominar:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                        {modules.map((module, index) => (
                            <div key={index} className="bg-secondary/50 p-4 md:p-6 rounded-lg border border-primary/20">
                                <h4 className="font-bold text-base md:text-lg text-primary mb-2">{module.title}</h4>
                                <p className="text-sm md:text-base text-muted-foreground">{module.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">E ainda tem mais:</h4>
                        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-x-4 gap-y-2 text-sm md:text-base text-muted-foreground">
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Lista de Materiais</span>
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Uso de EPIs</span>
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Manutenção Correta</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
