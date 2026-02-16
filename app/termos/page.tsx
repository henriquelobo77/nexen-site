import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { termsOfUse } from '@/content/legal';
import { seo } from '@/content/seo';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: seo.terms.title,
  description: seo.terms.description,
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-32">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-nexen-blue hover:text-nexen-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para home</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nexen-navy mb-4">
              {termsOfUse.title}
            </h1>
            <p className="text-nexen-navy/60">
              Última atualização: {termsOfUse.lastUpdate}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {termsOfUse.sections.map((section, idx) => (
                <div key={idx} className="scroll-mt-24" id={`section-${idx}`}>
                  <h2 className="text-2xl font-semibold text-nexen-navy mb-4">
                    {section.title}
                  </h2>
                  <div className="text-nexen-navy/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden xl:block fixed right-8 top-32 w-64">
            <div className="bg-nexen-gray/50 rounded-xl p-6 sticky top-32">
              <h3 className="font-semibold text-nexen-navy mb-4">Índice</h3>
              <nav className="space-y-2">
                {termsOfUse.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="block text-sm text-nexen-navy/70 hover:text-nexen-blue transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </Container>
      </main>
      <Footer />
    </>
  );
}
