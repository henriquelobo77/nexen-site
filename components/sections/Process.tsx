import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { ChatIcon, CogIcon, CheckIcon, HeartIcon } from '@/components/ui/Icons'

const steps = [
  {
    number: '01',
    title: 'Bate-papo',
    description: 'Entendemos o negócio, as dores e os objetivos. Sem compromisso.',
    Icon: ChatIcon,
  },
  {
    number: '02',
    title: 'Mão na massa',
    description: 'Desenvolvemos a solução personalizada, com atualizações constantes.',
    Icon: CogIcon,
  },
  {
    number: '03',
    title: 'Entrega',
    description: 'Implementamos, treinamos sua equipe e acompanhamos tudo de perto.',
    Icon: CheckIcon,
  },
  {
    number: '04',
    title: 'Parceria contínua',
    description: 'Suporte, melhorias e evolução constante. A gente não some.',
    Icon: HeartIcon,
  },
]

export function Process() {
  return (
    <Section id="processo" dark>
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="light">Processo</Badge>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Como a gente trabalha
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Quatro etapas simples, do primeiro contato à parceria de longo prazo.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/5 via-white/10 to-white/5 md:block" />

          <div className="grid grid-cols-1 gap-8 md:gap-16">
            {steps.map((step, idx) => {
              const { Icon } = step
              const isEven = idx % 2 === 0

              return (
                <FadeIn key={step.number} delay={idx * 120}>
                  <div className={`flex flex-col items-center gap-6 md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan/60">
                        Etapa {step.number}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-white/50 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Center node */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-cyan shadow-lg shadow-cyan/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
