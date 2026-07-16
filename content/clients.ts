export interface Client {
  id: string
  name: string
  description: string
  logo: string
  alt: string
  services: string[]
  url?: string
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
]
