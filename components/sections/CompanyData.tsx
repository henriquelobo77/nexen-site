'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { CopyIcon, CheckIcon } from '@/components/ui/Icons'
import { company } from '@/content/company'

interface CopyFieldProps {
  label: string
  value: string
}

function CopyField({ label, value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-white/5 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-white/40">{label}</p>
        <p className="truncate text-sm text-white/80">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 rounded-md p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
        aria-label={`Copiar ${label}`}
      >
        {copied ? <CheckIcon className="w-4 h-4 text-cyan" /> : <CopyIcon />}
      </button>
    </div>
  )
}

export function CompanyData() {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge variant="light">Dados da Empresa</Badge>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Transparência em primeiro lugar</h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mx-auto max-w-2xl space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8">
            <CopyField label="Razão Social" value={company.legalName} />
            <CopyField label="CNPJ" value={company.cnpj} />
            <CopyField label="CNAE" value={`${company.cnae} — ${company.cnaeDescription}`} />
            <CopyField label="Endereço" value={company.address.full} />
            <CopyField label="E-mail" value={company.contact.email} />
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
