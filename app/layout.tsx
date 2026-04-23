import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { Header} from "../components/Header";
import { Footer } from "../components/Footer";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: 'swap', 
});

const theme = createTheme({
  fontFamily: figtree.style.fontFamily,
  
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
    'neutral': [
      "#fafafa", 
      "#f4f4f5", 
      "#e4e4e7", 
      "#d4d4d8", 
      "#a1a1aa",
      "#71717a", 
      "#52525b", 
      "#3f3f46",
      "#27272a", 
      "#18181b", 
    ],
  },
  
  primaryColor: 'gip-blue',
  primaryShade: 5, 

  components: {
    Text: {
      defaultProps: {
        fw: 500, 
        c: 'neutral.6', 
      },
    },
    Title: {
      defaultProps: {
        fw: 700, 
        c: 'neutral.9', 
      },
    },
  },
});

export const metadata: Metadata = {
  title: "GIP - Gestão do Investimento Público do Piauí | SEPLAN-PI",
  description: "Plataforma oficial de transparência e monitoramento do ciclo de investimentos do Estado do Piauí.",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} antialiased`} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="min-h-full flex flex-col">
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}