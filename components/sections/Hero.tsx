'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon, MailIcon } from '@/components/ui/Icons'
import { company } from '@/content/company'

const whatsappUrl = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent('Oi! Quero saber mais sobre os serviços da Nexen.')}`

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-cyan/15 blur-[100px]" />

      <Container className="relative z-10 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <div className="animate-fade-in-up">
              <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-4">
                Automação · Integrações · IA
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Tecnologia sob medida para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">
                  acelerar seus resultados
                </span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                A gente cria automações, integra seus sistemas e desenvolve agentes de IA sob medida para que você pare de perder tempo com o que a tecnologia já resolve.
              </p>
            </div>

            <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4">
              <Button href={whatsappUrl} variant="secondary" external>
                <WhatsAppIcon className="w-4 h-4" />
                Falar com especialista
              </Button>
              <Button href={`mailto:${company.contact.email}`} variant="outline">
                <MailIcon className="w-4 h-4" />
                Enviar e-mail
              </Button>
            </div>
          </div>

          {/* Visual - animated Nexen icon */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] animate-fade-in delay-300">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-white/8 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />

              {/* Floating nodes with orbit animation */}
              {/* Sparkle/AI icon */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue to-blue/60 rounded-xl flex items-center justify-center shadow-lg shadow-blue/30 animate-[float_4s_ease-in-out_infinite]">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m10-10 1.4-1.4"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <div className="absolute bottom-16 left-10 w-12 h-12 bg-gradient-to-br from-cyan to-cyan/60 rounded-xl flex items-center justify-center shadow-lg shadow-cyan/30 animate-[float_5s_ease-in-out_infinite_0.5s]">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <div className="absolute bottom-16 right-10 w-12 h-12 bg-gradient-to-br from-blue to-cyan rounded-xl flex items-center justify-center shadow-lg shadow-blue/30 animate-[float_4.5s_ease-in-out_infinite_1s]">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>

              {/* Center glow */}
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-blue/20 to-cyan/20 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />

              {/* Center Nexen icon */}
              <div className="absolute inset-[32%] rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center shadow-2xl shadow-cyan/20">
                <Image
                  src="/brand/icon-white.png"
                  alt="Nexen"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain animate-[pulse_3s_ease-in-out_infinite]"
                />
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
                <line x1="210" y1="70" x2="210" y2="145" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="90" y1="320" x2="160" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.5s" repeatCount="indefinite" />
                </line>
                <line x1="330" y1="320" x2="260" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
