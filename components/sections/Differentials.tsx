'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Award, Zap, Shield, TrendingUp } from 'lucide-react';

const differentials = [
  {
    title: 'Experiência Comprovada',
    description: 'Anos de mercado entregando soluções de automação e integração para empresas de diversos segmentos.',
    icon: Award,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Tecnologia de Ponta',
    description: 'Utilizamos as mais modernas tecnologias e frameworks para garantir soluções escaláveis e performáticas.',
    icon: Zap,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Segurança em Primeiro Lugar',
    description: 'Todos os projetos seguem rigorosos padrões de segurança, com criptografia e boas práticas de desenvolvimento.',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Resultados Mensuráveis',
    description: 'Foco em KPIs e métricas que demonstram o retorno sobre investimento e impacto nas operações.',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Diferenciais</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-nexen-navy mb-4">
            Por que escolher a Nexen
          </h2>
          <p className="text-lg text-nexen-navy/70">
            Combinamos expertise técnica, processos bem definidos e compromisso com resultados.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border-2 border-nexen-navy/10 rounded-2xl p-8 hover:border-nexen-blue/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon with Gradient */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${diff.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-nexen-navy mb-3">
                  {diff.title}
                </h3>
                <p className="text-nexen-navy/70 leading-relaxed">
                  {diff.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-nexen-gray rounded-full opacity-50 group-hover:scale-150 transition-all duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
