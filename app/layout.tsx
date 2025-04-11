import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peres Engenharia - Marcos Roberto Peres Junior',
  description: 'Serviços de engenharia civil, projetos de construção, regularização, financiamento habitacional e muito mais. CREA 5070476780',
  openGraph: {
    title: 'Peres Engenharia - Marcos Roberto Peres Junior',
    description: 'Serviços de engenharia civil, projetos de construção, regularização, financiamento habitacional e muito mais.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peres Engenharia',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <GoogleTagManager gtmId="AW-16890255640" />
      </body>
    </html>
  );
}