import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon, BotIcon, CheckIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { ChatwootWidget } from './ChatwootWidget'
import { company } from '@/content/company'
import { seo } from '@/content/seo'

export const metadata: Metadata = {
  title: seo.nexenBeauty.title,
  description: seo.nexenBeauty.description,
}

const features = [
  {
    title: 'Agente de IA no WhatsApp',
    description: 'Seu salão atende 24h. O agente responde dúvidas, informa preços, horários disponíveis e agenda automaticamente.',
  },
  {
    title: 'Agendamento inteligente',
    description: 'O cliente escolhe o serviço e o horário direto na conversa. Remarcações e cancelamentos também são automáticos.',
  },
  {
    title: 'Gestão no Notion',
    description: 'Tudo centralizado: clientes, agenda, serviços e financeiro. Você atualiza o Notion e o agente já sabe das mudanças.',
  },
  {
    title: 'Escalonamento para humano',
    description: 'Quando o cliente precisa falar com alguém de verdade, o agente transfere a conversa e avisa sua equipe.',
  },
]

const benefits = [
  'Atendimento automático 24 horas por dia',
  'Menos faltas com confirmação automática',
  'Equipe focada no que importa: atender bem',
  'Controle total do negócio em um só lugar',
  'Configuração rápida e suporte contínuo',
  'Solução adaptada ao seu salão',
]

const flowSteps = [
  { label: 'Cliente manda mensagem', sub: 'WhatsApp' },
  { label: 'Agente de IA responde', sub: 'n8n + OpenAI' },
  { label: 'Consulta disponibilidade', sub: 'Notion (agenda)' },
  { label: 'Cria o agendamento', sub: 'Notion (clientes)' },
  { label: 'Confirma pro cliente', sub: 'WhatsApp' },
]

const whatsappUrl = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent('Oi! Quero saber mais sobre o Nexen Beauty')}`

export default function NexenBeautyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-gradient relative min-h-[80vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-cyan/20 blur-[120px]" />

          <Container className="relative z-10 py-32">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Badge variant="light">Solução para salões de beleza</Badge>
                <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                  Seu salão com atendimento{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">
                    inteligente
                  </span>
                </h1>
                <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                  Um agente de IA que agenda, responde e organiza tudo pelo WhatsApp, enquanto você cuida dos seus clientes.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href={whatsappUrl} variant="secondary" external>
                    <WhatsAppIcon className="w-4 h-4" />
                    Quero para o meu salão
                  </Button>
                  <Button href="/" variant="outline">
                    Conheça a Nexen
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Flow */}
        <Section dark>
          <Container>
            <FadeIn>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <Badge variant="light">Fluxo</Badge>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Do WhatsApp ao agendamento em segundos
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {flowSteps.map((step, idx) => (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[130px]">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan shadow-lg shadow-cyan/20">
                          <span className="text-white font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-sm font-medium text-white">{step.label}</p>
                        <p className="text-xs text-white/40 mt-1">{step.sub}</p>
                      </div>
                      {idx < flowSteps.length - 1 && (
                        <ArrowRightIcon className="w-4 h-4 text-white/20 hidden md:block flex-shrink-0" />
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Features */}
        <Section className="bg-white">
          <Container>
            <FadeIn>
              <div className="mx-auto mb-16 max-w-2xl text-center">
                <Badge>Funcionalidades</Badge>
                <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                  Tudo integrado, tudo automático
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="group rounded-2xl border-2 border-navy/8 bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <BotIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                    <p className="text-sm text-navy/60 leading-relaxed">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits + CTA */}
        <Section className="bg-gray-light">
          <Container>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <FadeIn>
                <div>
                  <Badge>Por que escolher</Badge>
                  <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                    Menos correria, mais resultado
                  </h2>
                  <p className="mt-4 text-lg text-navy/60 leading-relaxed">
                    Enquanto o agente cuida do atendimento e da agenda, você e sua equipe podem focar no que realmente importa.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-navy/70">
                        <CheckIcon className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="rounded-2xl bg-white p-8 shadow-lg border border-navy/5">
                  <h3 className="text-2xl font-bold text-navy mb-4">Quer ver funcionando?</h3>
                  <p className="text-navy/60 mb-4">
                    Teste o agente agora mesmo pelo chat ao lado, ou mande uma mensagem para agendar uma demonstração personalizada.
                  </p>
                  <Button href={whatsappUrl} variant="primary" external className="w-full justify-center">
                    <WhatsAppIcon className="w-4 h-4" />
                    Agendar demonstração
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <ChatwootWidget />
    </>
  )
}
