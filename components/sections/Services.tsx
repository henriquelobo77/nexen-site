import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { CogIcon, LinkIcon, BotIcon, GlobeIcon, CheckIcon } from '@/components/ui/Icons'
import { services, type Service } from '@/content/services'

const iconMap = {
  cog: CogIcon,
  link: LinkIcon,
  bot: BotIcon,
  globe: GlobeIcon,
} as const

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon]

  return (
    <FadeIn delay={index * 100}>
      <div className="group relative h-full rounded-2xl border border-navy/8 bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-xl hover:-translate-y-1">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-navy">{service.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-navy/60">{service.description}</p>

        <ul className="space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-navy/70">
              <CheckIcon className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

export function Services() {
  return (
    <Section id="servicos" className="bg-gray-light">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge>Serviços</Badge>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              Soluções que resolvem de verdade
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Do diagnóstico à entrega, cada solução é pensada sob medida para o seu negócio.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
