import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { WhatsAppIcon, MailIcon, InstagramIcon } from '@/components/ui/Icons'
import { company } from '@/content/company'

const footerLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Diferenciais', href: '/#diferenciais' },
  { label: 'Nexen Beauty', href: '/nexen-beauty' },
  { label: 'Contato', href: '/#contato' },
]

const legalLinks = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos de Uso', href: '/termos' },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/brand/logo.png"
              alt="Nexen Tecnologia"
              width={140}
              height={38}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Automação, integrações e inteligência artificial sob medida para o seu negócio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${company.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {company.contact.whatsappFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <MailIcon className="w-4 h-4" />
                  {company.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={company.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  {company.social.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + Company Data */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1.5 text-xs text-white/30">
              <p>{company.legalName}</p>
              <p>CNPJ: {company.cnpj}</p>
              <p>CNAE: {company.cnae}</p>
              <p>{company.address.full}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            {company.address.city}, {company.address.state}
          </p>
        </div>
      </Container>
    </footer>
  )
}
