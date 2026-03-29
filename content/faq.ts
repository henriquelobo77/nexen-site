export interface FaqItem {
  question: string
  answer: string
}

export const faq: FaqItem[] = [
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer:
      'Depende da complexidade do projeto. Soluções simples ficam prontas em poucos dias; projetos maiores levam algumas semanas. A gente dá um prazo realista no bate-papo inicial.',
  },
  {
    question: 'O que é um agente de IA?',
    answer:
      'É um assistente inteligente que conversa com seus clientes no WhatsApp (ou outros canais), responde perguntas, agenda serviços e encaminha para um humano quando necessário.',
  },
  {
    question: 'Vocês dão suporte depois da entrega?',
    answer:
      'Sim. Toda entrega inclui um período de acompanhamento, e oferecemos planos de suporte contínuo.',
  },
  {
    question: 'Quais tecnologias vocês usam?',
    answer:
      'Trabalhamos com n8n, Make, Supabase, APIs diversas, Next.js, Python e as principais plataformas de IA do mercado.',
  },
  {
    question: 'Como funciona o preço?',
    answer:
      'Fazemos um orçamento personalizado após entender o projeto. Sem surpresas.',
  },
]
