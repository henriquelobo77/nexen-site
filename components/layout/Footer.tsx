import React from 'react';
import { Container } from '@/components/ui/Container';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/content/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nexen-navy text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative h-10 w-32 mb-4">
                <Image
                  src="/brand/logo.png"
                  alt="Nexen"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/70 text-sm max-w-md mb-6">
                Soluções em automação de processos, integrações de sistemas e consultoria técnica. 
                Transformando desafios tecnológicos em oportunidades de crescimento.
              </p>
              <div className="flex items-center space-x-4">
                {company.social.linkedin && (
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-nexen-cyan transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {company.social.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-nexen-cyan transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#servicos" className="text-white/70 hover:text-white text-sm transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#processo" className="text-white/70 hover:text-white text-sm transition-colors">
                    Processo
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="text-white/70 hover:text-white text-sm transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-white/70 hover:text-white text-sm transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{company.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{company.contact.phone}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © {currentYear} {company.legalName}. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacidade"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Privacidade
                </Link>
                <Link
                  href="/termos"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
