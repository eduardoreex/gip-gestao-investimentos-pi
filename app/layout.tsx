import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";

// Trazendo a fonte Figtree exigida no Guia
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

// Configurando o tema base
const theme = createTheme({
  fontFamily: "var(--font-figtree)", 
});

export const metadata: Metadata = {
  title: "GIP - Gestão do Investimento Público",
  description: "Landing Page do GIP - Piauí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} antialiased`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        {/* MantineProvider conectando o site todo */}
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}