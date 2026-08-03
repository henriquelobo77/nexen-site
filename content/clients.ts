export interface Client {
  id: string
  name: string
  description: string
  logo: string
  alt: string
  services: string[]
  url?: string
  /** Fundo da caixa da logo. 'navy' (padrão) para logos de tinta clara; 'light' para logos de tinta escura. */
  logoBg?: 'navy' | 'light'
}

export const clients: Client[] = [
  {
    id: 'hana',
    name: 'Haná Restaurante Japonês',
    description:
      'A Nexen desenvolveu e mantém o programa de cashback do Haná Restaurante Japonês: disparos transacionais via WhatsApp e dashboard de métricas para o time de marketing.',
    logo: '/clients/hana-logo.png',
    alt: 'Haná Restaurante Japonês — cliente Nexen',
    services: [
      'Programa de Cashback',
      'Disparos via WhatsApp',
      'Dashboard de Métricas',
    ],
    url: 'https://www.instagram.com/hanarestaurantejapones/',
  },
  {
    id: 'palomina',
    name: 'Palomina',
    description:
      'A Nexen desenvolveu e mantém o programa de cashback da Palomina: disparos transacionais via WhatsApp e dashboard de métricas para o time de marketing.',
    logo: '/clients/palomina-logo.png',
    alt: 'Palomina — cliente Nexen',
    services: [
      'Programa de Cashback',
      'Disparos via WhatsApp',
      'Dashboard de Métricas',
    ],
    url: 'https://www.instagram.com/palominabar/',
  },
  {
    id: 'pontual',
    name: 'Pontual Bistrô',
    description:
      'A Nexen desenvolveu e mantém o programa de cashback do Pontual Bistrô: disparos transacionais via WhatsApp e dashboard de métricas para o time de marketing.',
    logo: '/clients/pontual-logo.png',
    alt: 'Pontual Bistrô — cliente Nexen',
    services: [
      'Programa de Cashback',
      'Disparos via WhatsApp',
      'Dashboard de Métricas',
    ],
    logoBg: 'light',
  },
  {
    id: 'blas',
    name: 'Blas Cozinha Criativa',
    description:
      'A Nexen desenvolveu e mantém o programa de cashback da Blas Cozinha Criativa: disparos transacionais via WhatsApp e dashboard de métricas para o time de marketing.',
    logo: '/clients/blas-logo.png',
    alt: 'Blas Cozinha Criativa — cliente Nexen',
    services: [
      'Programa de Cashback',
      'Disparos via WhatsApp',
      'Dashboard de Métricas',
    ],
    logoBg: 'light',
  },
  {
    id: 'opera-mix',
    name: 'Ópera Mix',
    description:
      'A Nexen desenvolveu e mantém o programa de cashback da Ópera Mix: disparos transacionais via WhatsApp e dashboard de métricas para o time de marketing.',
    logo: '/clients/opera-mix-logo.png',
    alt: 'Ópera Mix — cliente Nexen',
    services: [
      'Programa de Cashback',
      'Disparos via WhatsApp',
      'Dashboard de Métricas',
    ],
  },
]
