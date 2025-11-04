
export type HeroData = {
  headline: string;
  sub_headline: string;
  url_cta: string;
};

export type DoresData = {
  headline: string;
  introducao: string;
  problemas: string[];
  ponte: string;
}

export type Pacote = {
  nome: string;
  preco: number;
  preco_original?: number;
  features: string[];
  url_cta: string;
  isPopular?: boolean;
};

export type Modulo = {
  nome: string;
  imageId: string;
};

export type Depoimento = {
  id: string;
  texto: string;
  imageId: string;
  nome: string;
};

export type FAQ = {
  id: string;
  pergunta: string;
  resposta: string;
};

export type RodapeData = {
  copyright: string;
  url_termos: string;
  url_privacidade: string;
};

export const heroData: HeroData = {
  headline: "APRENDA AGORA MESMO A FAZER OS MELHORES ALONGAMENTOS DE UNHAS",
  sub_headline: "Descubra como uma simples dona de casa de 48 anos transformou R$14,90 em um salário de R$4.678,98",
  url_cta: "#pricing",
};

export const dores: DoresData = {
  headline: "Você se identifica com alguma dessas situações?",
  introducao: "",
  problemas: [
    "Sente que o dinheiro no fim do mês nunca é suficiente?",
    "Busca uma forma de trabalhar para si mesma, mas não sabe por onde começar?",
    "Quer ter mais flexibilidade para passar tempo com a família sem abrir mão de uma carreira?",
    "Sonha em ser reconhecida por um talento que você pode transformar em profissão?"
  ],
  ponte: ""
};


export const pacotes: Pacote[] = [
  {
    nome: "Pacote Básico",
    preco: 14.90,
    preco_original: 149.90,
    features: [
      "Acesso a todos os módulos do curso",
      "Certificado de Conclusão",
      "Acesso por 1 ano"
    ],
    url_cta: "#",
  },
  {
    nome: "Pacote Premium",
    preco: 29.90,
    preco_original: 299.90,
    features: [
      "Acesso a todos os módulos do curso",
      "Certificado de Conclusão",
      "Acesso Vitalício",
      "Suporte exclusivo com a instrutora",
      "Bônus de Marketing para Manicures"
    ],
    url_cta: "#",
    isPopular: true
  }
];

export const beneficios: string[] = [
  "Material 100% atualizado para 2025/2026",
  "Acesso vitalício ao curso completo e futuras atualizações",
  "Certificado de conclusão autêntico e reconhecido",
  "Suporte exclusivo com a instrutora em grupo VIP",
  "Aulas práticas e detalhadas, do básico ao avançado",
  "Bônus exclusivos sobre marketing para manicures",
];

export const modulos: Modulo[] = [
  { nome: "Anatomia das Unhas", imageId: "anatomia_unhas" },
  { nome: "Alongamento em Gel", imageId: "alongamento_gel" },
  { nome: "Manutenção e Remoção", imageId: "manutencao_unhas" },
  { nome: "Nail Art e Decoração", imageId: "nail_art_basica" },
];

export const depoimentos: Depoimento[] = [
  {
    id: "depoimento_img_1",
    texto: "",
    imageId: "depoimento_img_1",
    nome: "Aluna 1",
  },
  {
    id: "depoimento_img_2",
    texto: "",
    imageId: "depoimento_img_2",
    nome: "Aluna 2",
  },
  {
    id: "depoimento_img_3",
    texto: "",
    imageId: "depoimento_img_3",
    nome: "Aluna 3",
  },
  {
    id: "depoimento_img_4",
    texto: "",
    imageId: "depoimento_img_4",
    nome: "Aluna 4",
  },
  {
    id: "depoimento_img_5",
    texto: "",
    imageId: "depoimento_img_5",
    nome: "Aluna 5",
  },
  {
    id: "depoimento_img_6",
    texto: "",
    imageId: "depoimento_img_6",
    nome: "Aluna 6",
  },
  {
    id: "depoimento_img_7",
    texto: "",
    imageId: "depoimento_img_7",
    nome: "Aluna 7",
  },
  {
    id: "depoimento_img_8",
    texto: "",
    imageId: "depoimento_img_8",
    nome: "Aluna 8",
  },
  {
    id: "depoimento_img_9",
    texto: "",
    imageId: "depoimento_img_9",
    nome: "Aluna 9",
  },
  {
    id: "depoimento_img_10",
    texto: "",
    imageId: "depoimento_img_10",
    nome: "Aluna 10",
  },
];

export const faq: FAQ[] = [
  {
    id: "pergunta_1",
    pergunta: "Como eu vou ter acesso às aulas?",
    resposta: "Seu login e senha serão enviados para o seu e-mail logo após o processamento da sua compra. O acesso à plataforma é imediato.",
  },
  {
    id: "pergunta_2",
    pergunta: "O certificado é reconhecido?",
    resposta: "Sim, nosso certificado é amplamente aceito no mercado de trabalho e serve como comprovação de sua capacitação profissional.",
  },
  {
    id: "pergunta_3",
    pergunta: "Por quanto tempo terei acesso ao curso?",
    resposta: "O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo, e ainda terá acesso a todas as futuras atualizações do curso.",
  },
  {
    id: "pergunta_4",
    pergunta: "Quais as formas de pagamento?",
    resposta: "Aceitamos pagamentos via Cartão de Crédito, Boleto Bancário e PIX. O pagamento é 100% seguro.",
  },
];

export const rodapeData: RodapeData = {
  copyright: "Copyright 2025/2026 – NAIL DESIGN. Todos os direitos reservados.",
  url_termos: "#",
  url_privacidade: "#",
};

export const instructorData = {
    name: "Ana Silva",
    title: "Nail Designer e Instrutora Mestre",
    bio: "Com mais de 10 anos de experiência no mercado da beleza, Ana Silva é uma especialista apaixonada por transformar unhas em verdadeiras obras de arte. Já formou mais de 5.000 alunas em todo o Brasil, ajudando-as a construir carreiras de sucesso e a conquistar a independência financeira através da profissão de nail designer.",
    imageId: "instrutora_principal"
};
