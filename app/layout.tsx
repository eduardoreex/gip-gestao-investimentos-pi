import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { Header } from "../components/Header";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "var(--font-figtree)",
colors: {
    'gip-blue': [
      "#EDF8FD", 
      "#DBEDF5", 
      "#B2DAED", 
      "#86C7E5", 
      "#66B6DF",
      "#3992C2", 
      "#15719A", 
      "#0E4F6C", 
      "#003F5B",
      "#063246", 

  ],
},
primaryColor: 'gip-blue',
primaryShade: 5,

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
        <MantineProvider theme={theme}>
          
          {}
          <Header />

          {}
          {children}
          
        </MantineProvider>
      </body>
      
    </html>
  );
}