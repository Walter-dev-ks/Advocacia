import type { Metadata } from 'next';
import './globals.css';
import { EB_Garamond, Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' });
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-eb-garamond' });

export const metadata: Metadata = {
  title: 'Allisson Acioli Advocacia | Especialista em Acidentes e Seguros',
  description:
    'Advocacia em Joinville - SC especializada em vitimas de acidentes, indenizacoes, seguros, beneficios do INSS, civel e trabalhista.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.variable} ${garamond.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
