'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { WhatsAppIcon, MailIcon, ChevronDownIcon } from '@/components/ui/Icons'
import { company } from '@/content/company'
import { faq, type FaqItem } from '@/content/faq'

const whatsappUrl = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent('Oi! Quero saber mais sobre os serviços da Nexen.')}`

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-navy/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-navy">{item.question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 flex-shrink-0 text-navy/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="accordion-content"
        data-open={isOpen}
      >
        <div className="accordion-inner">
          <p className="pb-5 text-sm leading-relaxed text-navy/60">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="contato" className="bg-gray-light">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* CTA side */}
          <FadeIn>
            <div>
              <Badge>Contato</Badge>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                Vamos conversar?
              </h2>
              <p className="mt-4 text-lg text-navy/60 leading-relaxed">
                Conta pra gente o que você precisa. O primeiro bate-papo é sem compromisso. A gente entende o seu negócio e sugere o melhor caminho.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={whatsappUrl} variant="primary" external>
                  <WhatsAppIcon className="w-4 h-4" />
                  Chamar no WhatsApp
                </Button>
                <Button
                  href={`mailto:${company.contact.email}`}
                  variant="outline"
                  className="!border-navy/15 !text-navy hover:!bg-navy hover:!text-white"
                >
                  <MailIcon className="w-4 h-4" />
                  Enviar e-mail
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* FAQ side */}
          <FadeIn delay={150}>
            <div>
              <h3 className="mb-6 text-lg font-semibold text-navy">Perguntas frequentes</h3>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                {faq.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    item={item}
                    isOpen={openIndex === idx}
                    onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
