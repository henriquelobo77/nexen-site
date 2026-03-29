import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { TargetIcon, ShieldIcon, UsersIcon, HandshakeIcon } from '@/components/ui/Icons'

const differentials = [
  {
    title: 'Personalizado para você',
    description: 'Partimos de bases testadas e adaptamos tudo ao seu negócio. O resultado é único.',
    Icon: TargetIcon,
  },
  {
    title: 'Mentalidade de dono',
    description: 'Tratamos o projeto do cliente como se fosse nosso. Qualidade e compromisso em cada detalhe.',
    Icon: ShieldIcon,
  },
  {
    title: 'Suporte direto e próximo',
    description: 'Sem camadas de atendimento. Você fala direto com quem faz.',
    Icon: UsersIcon,
  },
  {
    title: 'Parceria de longo prazo',
    description: 'Não sumimos após a entrega. Evoluímos junto com o cliente.',
    Icon: HandshakeIcon,
  },
]

export function Differentials() {
  return (
    <Section id="diferenciais" className="bg-white">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge>Diferenciais</Badge>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              Por que a Nexen?
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Nosso jeito de trabalhar faz diferença em cada projeto.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, idx) => {
            const { Icon } = item
            return (
              <FadeIn key={item.title} delay={idx * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 transition-colors group-hover:bg-cyan/10">
                    <Icon className="w-7 h-7 text-blue" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/60">{item.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
