'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WhatsAppIcon, MenuIcon, CloseIcon } from '@/components/ui/Icons'
import { company } from '@/content/company'

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Diferenciais', href: '/#diferenciais' },
  { label: 'Nexen Beauty', href: '/nexen-beauty' },
  { label: 'Contato', href: '/#contato' },
]

const whatsappUrl = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent('Oi! Quero saber mais sobre os serviços da Nexen.')}`

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Nexen Tecnologia"
              width={110}
              height={30}
              priority
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href={whatsappUrl} variant="secondary" external className="text-xs px-4 py-2">
              <WhatsAppIcon className="w-4 h-4" />
              Falar com especialista
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 p-2 text-white"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="fixed inset-0 bg-navy/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button href={whatsappUrl} variant="secondary" external className="mt-4">
                <WhatsAppIcon className="w-4 h-4" />
                Falar com especialista
              </Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  )
}
