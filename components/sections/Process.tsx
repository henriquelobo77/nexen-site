'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Search, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Análise',
    description: 'Entendemos seu negócio, processos atuais e objetivos. Identificamos oportunidades de automação e integração.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    description: 'Criamos soluções personalizadas utilizando as melhores tecnologias e práticas do mercado.',
    icon: Code,
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Colocamos a solução em produção de forma segura, com testes rigorosos e treinamento da equipe.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Suporte',
    description: 'Oferecemos suporte contínuo, monitoramento e melhorias para garantir máximo desempenho.',
    icon: HeadphonesIcon,
  },
];

export function Process() {
  return (
    <section id="processo" className="section-padding bg-nexen-gray">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Nosso Processo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-nexen-navy mb-4">
            Como trabalhamos
          </h2>
          <p className="text-lg text-nexen-navy/70">
            Um processo estruturado que garante qualidade, transparência e resultados mensuráveis.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nexen-blue via-nexen-cyan to-nexen-blue transform -translate-y-1/2 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Mobile Connector */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-20 w-1 h-full bg-gradient-to-b from-nexen-blue to-nexen-cyan transform -translate-x-1/2 -z-10" />
                  )}

                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-nexen-blue to-nexen-cyan rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-nexen-gray rounded-lg flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-7 h-7 text-nexen-blue" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-nexen-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-nexen-navy/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
