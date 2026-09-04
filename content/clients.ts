/** Cliente exibido apenas como logo, na faixa "Também confiam na Nexen". */
export interface ClientLogo {
  id: string
  name: string
  logo: string
  alt: string
  url?: string
  /** Fundo da caixa da logo. 'navy' (padrão) para logos de tinta clara; 'light' para logos de tinta escura. */
  logoBg?: 'navy' | 'light'
}

/** Cliente em destaque: logo + setor + descrição curta do escopo + tags. */
export interface FeaturedClient extends ClientLogo {
  sector: string
  description: string
  tags: string[]
}

/**
 * Clientes em destaque (cards com descrição).
 * Aguardando os arquivos de logo da MBR Cursos e da LRV Brasil.
 */
export const featuredClients: FeaturedClient[] = []

/** Clientes exibidos apenas como logo. */
export const clientLogos: ClientLogo[] = [
  {
    id: 'hana',
    name: 'Haná Restaurante Japonês',
    logo: '/clients/hana-logo.png',
    alt: 'Haná Restaurante Japonês — cliente Nexen',
    url: 'https://www.instagram.com/hanarestaurantejapones/',
  },
  {
    id: 'palomina',
    name: 'Palomina',
    logo: '/clients/palomina-logo.png',
    alt: 'Palomina — cliente Nexen',
    url: 'https://www.instagram.com/palominabar/',
  },
  {
    id: 'pontual',
    name: 'Pontual Bistrô',
    logo: '/clients/pontual-logo.png',
    alt: 'Pontual Bistrô — cliente Nexen',
    logoBg: 'light',
  },
  {
    id: 'blas',
    name: 'Blas Cozinha Criativa',
    logo: '/clients/blas-logo.png',
    alt: 'Blas Cozinha Criativa — cliente Nexen',
    logoBg: 'light',
  },
  {
    id: 'opera-mix',
    name: 'Ópera Mix',
    logo: '/clients/opera-mix-logo.png',
    alt: 'Ópera Mix — cliente Nexen',
  },
  {
    id: 'ammo-burger',
    name: 'Ammo Burger',
    logo: '/clients/ammo-burger-logo.png',
    alt: 'Ammo Burger — cliente Nexen',
  },
]
