export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: 'cog' | 'link' | 'bot' | 'globe'
}

export const services: Service[] = [
  {
    id: 'automacao',
    title: 'Automação de Processos',
    description:
      'Workflows inteligentes, RPA, dashboards e KPIs automatizados. Eliminamos tarefas manuais repetitivas.',
    features: [
      'Workflows automatizados com n8n e Make',
      'Dashboards e KPIs em tempo real',
      'RPA para tarefas repetitivas',
      'Integração com ferramentas existentes',
    ],
    icon: 'cog',
  },
  {
    id: 'integracoes',
    title: 'Integrações de Sistemas',
    description:
      'Conexão entre ferramentas via APIs, webhooks e middleware. Seus sistemas conversam entre si sem retrabalho.',
    features: [
      'Conexão via APIs e webhooks',
      'Middleware personalizado',
      'Sincronização de dados em tempo real',
      'Eliminação de retrabalho manual',
    ],
    icon: 'link',
  },
  {
    id: 'agentes-ia',
    title: 'Agentes de IA',
    description:
      'Atendimento automatizado no WhatsApp, qualificação de leads, agendamento inteligente e escalonamento humano quando necessário.',
    features: [
      'Atendimento 24h no WhatsApp',
      'Qualificação automática de leads',
      'Agendamento inteligente',
      'Escalonamento para humano',
    ],
    icon: 'bot',
  },
  {
    id: 'sites',
    title: 'Sites & Landing Pages',
    description:
      'Sites institucionais e landing pages otimizadas para conversão, com design personalizado.',
    features: [
      'Design personalizado e responsivo',
      'Otimizado para conversão',
      'SEO técnico avançado',
      'Performance de carregamento rápida',
    ],
    icon: 'globe',
  },
]
