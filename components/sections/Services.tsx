'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/content/services';
import { 
  Workflow, 
  Plug, 
  BarChart3, 
  ShoppingCart, 
  Lightbulb,
  type LucideIcon 
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  workflow: Workflow,
  plug: Plug,
  chart: BarChart3,
  'shopping-cart': ShoppingCart,
  lightbulb: Lightbulb,
};

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Nossos Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-nexen-navy mb-4">
            Soluções completas para seu negócio
          </h2>
          <p className="text-lg text-nexen-navy/70">
            Oferecemos uma gama de serviços especializados para otimizar processos, 
            conectar sistemas e impulsionar resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-nexen-blue to-nexen-cyan rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-nexen-navy/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-nexen-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-nexen-navy/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
