import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { seo } from '@/content/seo'
import { legal } from '@/content/legal'

export const metadata: Metadata = {
  title: seo.privacy.title,
  description: seo.privacy.description,
}

export default function PrivacyPage() {
  const { privacy } = legal

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1 text-sm text-navy/50 hover:text-navy transition-colors"
            >
              &larr; Voltar ao início
            </Link>

            <h1 className="text-3xl font-bold text-navy md:text-4xl">{privacy.title}</h1>
            <p className="mt-2 text-sm text-navy/40">
              Última atualização: {privacy.lastUpdated}
            </p>

            <div className="mt-10 space-y-8">
              {privacy.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold text-navy">{section.title}</h2>
                  <div className="mt-3 text-sm leading-relaxed text-navy/70 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
