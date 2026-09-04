import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { clientLogos, featuredClients, type ClientLogo } from '@/content/clients'

function logoBoxClass(client: ClientLogo) {
  return client.logoBg === 'light'
    ? 'bg-white border border-navy/10'
    : 'bg-navy'
}

function LogoChip({ client }: { client: ClientLogo }) {
  const chip = (
    <div
      className={`flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 ${logoBoxClass(client)}`}
    >
      <Image
        src={client.logo}
        alt={client.alt}
        width={112}
        height={112}
        className="h-full w-full object-contain"
      />
    </div>
  )

  if (!client.url) return chip

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar ${client.name}, cliente da Nexen`}
      className="block"
    >
      {chip}
    </a>
  )
}

export function Clients() {
  const hasFeatured = featuredClients.length > 0

  return (
    <Section id="clientes" className="bg-gray-light">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge>Clientes</Badge>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              Empresas que confiam na Nexen
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              De infoprodutos e varejo a alimentação, empresas de setores diferentes contam com a
              gente para automatizar, integrar e colocar inteligência artificial para trabalhar.
            </p>
          </div>
        </FadeIn>

        {hasFeatured && (
          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {featuredClients.map((client, idx) => (
              <FadeIn key={client.id} delay={idx * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-8">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl ${logoBoxClass(client)}`}
                  >
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{client.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy/40">
                    {client.sector}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy/60">{client.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={hasFeatured ? 200 : 0}>
          <div className="mx-auto max-w-4xl">
            {hasFeatured && (
              <h3 className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-navy/40">
                Também confiam na Nexen
              </h3>
            )}
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <li key={client.id}>
                  <LogoChip client={client} />
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
