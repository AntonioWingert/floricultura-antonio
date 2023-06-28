import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import { Container } from '@/styles/LayoutStyle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Floricultura Wingert',
  description: 'Floricultura Wingert',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Container>
          <Header>Floricultura Wingert</Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
