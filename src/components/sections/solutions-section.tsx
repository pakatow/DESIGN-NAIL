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
        <section className="bg-secondary">
            <div className="container text-center">
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-headline text-foreground">
                        A transformação para sua independência financeira começa aqui
                    </h2>
                </div>

                <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Um curso completo, do zero ao profissional</h3>
                    <p className="text-muted-foreground mb-8">Veja o que você vai dominar:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {modules.map((module, index) => (
                            <div key={index} className="bg-secondary/50 p-6 rounded-lg border border-primary/20">
                                <h4 className="font-bold text-lg text-primary mb-2">{module.title}</h4>
                                <p className="text-muted-foreground">{module.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h4 className="text-xl font-semibold text-foreground mb-4">E ainda tem mais:</h4>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted-foreground">
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Lista de Materiais</span>
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Uso de EPIs</span>
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />Manutenção Correta</span>
                        </div>
                    </div>
                </div>

                <p className="mt-12 text-lg text-foreground font-semibold max-w-3xl mx-auto">
                    Tudo o que você precisa para começar a atender suas primeiras clientes está a um passo de distância.
                </p>
            </div>
        </section>
    );
};

export default SolutionsSection;
