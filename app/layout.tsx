import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { seo } from '@/content/seo'
import { company } from '@/content/company'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
})

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: seo.home.title,
    template: '%s | Nexen Tecnologia',
  },
  description: seo.home.description,
  keywords: [...seo.home.keywords],
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: company.name,
    title: seo.home.title,
    description: seo.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body className="font-sora antialiased">
        {children}
      </body>
    </html>
  )
}
