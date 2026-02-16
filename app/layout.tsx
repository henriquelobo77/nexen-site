import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { seo } from "@/content/seo";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  keywords: seo.home.keywords,
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    siteName: seo.og.siteName,
    locale: seo.og.locale,
    type: seo.og.type,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}
