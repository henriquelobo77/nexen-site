'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Building2, Copy, Check, MapPin, Calendar } from 'lucide-react';
import { company } from '@/content/company';
import { copyToClipboard, formatCNPJ } from '@/lib/utils';

export function CNPJCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    try {
      await copyToClipboard(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const infoItems = [
    { label: 'Razão Social', value: company.legalName, field: 'legalName' },
    { label: 'CNPJ', value: formatCNPJ(company.cnpj), field: 'cnpj' },
    { label: 'Nome Fantasia', value: company.tradeName, field: 'tradeName' },
    { label: 'CNAE', value: company.cnae, field: 'cnae', fullWidth: true },
  ];

  return (
    <section className="section-padding bg-nexen-gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Informações Oficiais</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-nexen-navy mb-4">
              Dados da Empresa
            </h2>
            <p className="text-lg text-nexen-navy/70">
              Informações oficiais registradas e verificadas
            </p>
          </div>

          {/* CNPJ Card */}
          <Card className="overflow-hidden">
            {/* Header with Icon */}
            <div className="bg-gradient-to-br from-nexen-blue to-nexen-cyan p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Informações Cadastrais</h3>
                  <p className="text-white/80 text-sm">Dados oficiais da empresa</p>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoItems.map((item) => (
                  <div
                    key={item.field}
                    className={`${item.fullWidth ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-nexen-navy/60 mb-1">
                          {item.label}
                        </div>
                        <div className="text-base font-semibold text-nexen-navy break-all">
                          {item.value}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(item.value, item.field)}
                        className="flex-shrink-0"
                        aria-label={`Copiar ${item.label}`}
                      >
                        {copiedField === item.field ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="mt-6 pt-6 border-t border-nexen-navy/10">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-nexen-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-nexen-navy/60 mb-1">
                      Endereço
                    </div>
                    <div className="text-base text-nexen-navy">
                      {company.address.street}<br />
                      {company.address.city} - {company.address.state}<br />
                      CEP: {company.address.cep}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-nexen-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-nexen-navy/60 mb-1">
                      Data de Abertura
                    </div>
                    <div className="text-base text-nexen-navy">
                      {company.foundedAt}
                    </div>
                  </div>
                </div>
              </div>

              {/* Toast Message */}
              {copiedField && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-sm text-green-800">
                  <Check className="w-4 h-4" />
                  <span>Copiado para a área de transferência!</span>
                </div>
              )}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
