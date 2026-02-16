'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Mail, Phone, MessageCircle, Send, ChevronDown } from 'lucide-react';
import { company } from '@/content/company';

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver uma automação?',
    answer: 'O prazo varia conforme a complexidade do projeto. Automações simples podem ser entregues em 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas. Fazemos uma estimativa detalhada após a análise inicial.',
  },
  {
    question: 'Vocês oferecem suporte após a implementação?',
    answer: 'Sim! Oferecemos suporte contínuo, incluindo monitoramento, manutenção e melhorias. Nosso time está disponível para garantir que suas soluções funcionem perfeitamente.',
  },
  {
    question: 'Trabalham com quais tecnologias?',
    answer: 'Trabalhamos com um amplo stack tecnológico, incluindo APIs REST/GraphQL, Python, Node.js, n8n, Make, Zapier, e integrações customizadas. Escolhemos as melhores ferramentas para cada projeto.',
  },
  {
    question: 'Como funciona a precificação dos projetos?',
    answer: 'Cada projeto é único e precificado de acordo com sua complexidade, escopo e tempo estimado. Após a análise inicial, fornecemos uma proposta detalhada com valores e prazos.',
  },
  {
    question: 'Posso contratar apenas consultoria?',
    answer: 'Sim! Oferecemos consultoria técnica independente para empresas que precisam de orientação sobre arquitetura, escolha de tecnologias ou otimização de processos existentes.',
  },
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${company.contact.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      // For now, just open email client with pre-filled data
      const subject = encodeURIComponent(`Contato de ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
      );
      window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 500);
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Entre em Contato</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-nexen-navy mb-4">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-lg text-nexen-navy/70">
            Estamos prontos para entender suas necessidades e propor soluções personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-nexen-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-nexen-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-nexen-navy mb-1">E-mail</div>
                    <div className="text-sm text-nexen-navy/70 break-all">
                      {company.contact.email}
                    </div>
                  </div>
                </a>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <button onClick={handleWhatsAppClick} className="flex items-start space-x-3 w-full text-left">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-nexen-navy mb-1">WhatsApp</div>
                    <div className="text-sm text-nexen-navy/70">
                      {company.contact.whatsapp}
                    </div>
                  </div>
                </button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <h3 className="text-xl font-semibold text-nexen-navy mb-4">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nexen-navy mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-nexen-navy/20 rounded-lg focus:ring-2 focus:ring-nexen-blue focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nexen-navy mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-nexen-navy/20 rounded-lg focus:ring-2 focus:ring-nexen-blue focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nexen-navy mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-nexen-navy/20 rounded-lg focus:ring-2 focus:ring-nexen-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                    Mensagem enviada com sucesso! Retornaremos em breve.
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-semibold text-nexen-navy mb-6">
              Perguntas Frequentes
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left flex items-start justify-between space-x-4 p-0"
                  >
                    <span className="font-semibold text-nexen-navy">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-nexen-blue flex-shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="mt-3 pt-3 border-t border-nexen-navy/10 text-nexen-navy/70 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
