import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { clients } from '@/content/clients'

export function Clients() {
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
              A Nexen desenvolve programas de fidelidade, automações de WhatsApp e dashboards de métricas para os clientes abaixo.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, idx) => {
            const logoBoxClass =
              client.logoBg === 'light'
                ? 'bg-white border border-navy/10'
                : 'bg-navy'
            const CardInner = (
              <div className="group flex h-full flex-col items-center rounded-2xl border border-navy/8 bg-white p-8 text-center transition-all duration-300 hover:border-cyan/30 hover:shadow-xl hover:-translate-y-1">
                <div className={`mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl ${logoBoxClass}`}>
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-navy">{client.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-navy/60">
                  {client.description}
                </p>
                <ul className="mt-auto flex flex-wrap justify-center gap-2">
                  {client.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/70"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )

            return (
              <FadeIn key={client.id} delay={idx * 100}>
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`Visitar ${client.name}, cliente da Nexen`}
                  >
                    {CardInner}
                  </a>
                ) : (
                  CardInner
                )}
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
