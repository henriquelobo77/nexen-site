'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { company } from '@/content/company';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${company.contact.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${company.contact.email}`;
  };

  return (
    <section className="gradient-bg-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-nexen-cyan rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Transformação Digital para Empresas
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Automatize processos e integre sistemas com{' '}
            <span className="text-nexen-cyan">inteligência</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ajudamos empresas a economizar tempo, reduzir erros e escalar operações através de 
            automações personalizadas e integrações robustas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com especialista
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleEmailClick}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-nexen-navy"
            >
              Enviar e-mail
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+100</div>
              <div className="text-white/70 text-sm">Automações entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Suporte técnico</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+50%</div>
              <div className="text-white/70 text-sm">Aumento de eficiência</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
